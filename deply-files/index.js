const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
var path = require('path')
const { v4: uuidv4 } = require('uuid');

const AWS = require('aws-sdk')

AWS.config.update({
  accessKeyId: '',
  secretAccessKey: '',
  region: ''
})

const s3 = new AWS.S3({ params: { Bucket: '' }});

app.use(fileUpload({
  // 500mb file limit
  limits: { fileSize: 500 * 1024 * 1024 },
  abortOnLimit: true
}));

app.get('/files/:key', (req, res) => {
  const key = req.params.key
  const params = {
    Bucket: '',
    Key: key
  }
  s3.getObject(params, (err, data) => {
    if (err) {
      console.log(err)
      res.status(400).send(err)
    } else {
      if (req.query.exportFormat) {
        res.setHeader('Content-Type', 'application/octet-stream')
        res.setHeader('Content-Disposition', `attachment`)
        console.log(`deply-files - Archivo ${key} descargado de forma directa`)
        res.send(data.Body)
      } else {
        res.setHeader('Content-Type', `${data.Metadata.metacontent}`)
        console.log(`deply-files - Archivo ${key} visto`)
        res.send(data.Body)
      }
    }
  })
})

app.get('/', (req, res) => {
  let response = {
    status: 400,
    message: '¿Qué estás buscando? :D'
  }
  res.status(400).send(response)
})

app.post('/upload', async (req, res) => {
  if (req.headers.apikey !== 'd538df53-8444-43c2-8c7b-90f1da12f6a8') {
    res.status(401).send('Unauthorized')
  } else {
    const { files } = req
    if(!files) {
      res.header('Content-Type', 'text/html');
      return res.status(400).send('No file detected!');
    }
    var file_name = uuidv4() + '-' + uuidv4() + '-' + (files.file.name).replace(/ /g, '_')
    try {
      const upload = new AWS.S3.ManagedUpload({

        params: { 
          Body: files.file.data,
          Tagging: 'delete=7_days',
          Key: file_name,
          Metadata: {
            'metacontent': files.file.mimetype
          }
        },
        service: s3,
      })

      const response = await upload.promise()
      res.header('Content-Type', 'application/json');

      let response_to = {
        'id': file_name,
        'delete_id': uuidv4(),
        'url': `https://files.deply.dev/files/${file_name}`
      }

      res.send(response_to)

      console.log(`deply-files - Archivo ${file_name} subido`)
    } catch (error) {
      res.send(error)
    }
  }
})

app.get('/delete', (req, res) => {
  if (req.headers.apikey !== 'd538df53-8444-43c2-8c7b-90f1da12f6a8') {
    res.status(401).send('Unauthorized')
  } else {
    const { id } = req.query
    const params = {
      Bucket: '',
      Key: id
    }
    s3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err)
        res.status(400).send(err)
      } else {
        res.status(200).send('Archivo eliminado')
        console.log(`deply-files - Archivo ${id} eliminado`)
      }
    })
  }
})

const port = 3000

app.listen(process.env.PORT || port, () => {
  console.log(`Application is available at http://localhost:${port}`)
})