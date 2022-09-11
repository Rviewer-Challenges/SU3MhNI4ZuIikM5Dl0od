# 🚀 Deply App (Django/Python)

### Changelog: [⚡️ Clic here ⚡️]()

Deply App Code. Never modify the "master" or "main" branch. Create a new branch from "staging" and start developing there. Once the development is finished, request a pull request to the "staging" branch.

<b>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</b>
<br>

## How to use it

```bash
$ # Get the code
$ git clone https://github.com/deply/deplyapp.git
$ cd deplyapp
$
$ # Virtualenv modules installation (Unix based systems)
$ virtualenv env
$ source env/bin/activate
$
$ # Virtualenv modules installation (Windows based systems)
$ # virtualenv env
$ # .\env\Scripts\activate
$
$ # Install modules
$ # SQLIte version
$ pip3 install -r requirements.txt
$
$ # Create tables
$ python manage.py makemigrations
$ python manage.py migrate
$
$ # Start the application (development mode)
$ python manage.py runserver # default port 8000
$
$ # Start the app - custom port 
$ # python manage.py runserver 0.0.0.0:<your_port>
$
$ # Access the web app in browser: http://127.0.0.1:8000/
```

<br>

<br>

## File Structure

```bash
< PROJECT ROOT >
   |
   |-- core/                               # Implements app configuration
   |    |-- settings.py                    # Defines Global Settings
   |    |-- wsgi.py                        # Start the app in production
   |    |-- urls.py                        # Define URLs served by all apps/nodes
   |
   |-- apps/
   |    |
   |    |-- home/                          # A simple app that serve HTML files
   |    |    |-- views.py                  # Serve HTML pages for authenticated users
   |    |    |-- urls.py                   # Define some super simple routes  
   |    |    |-- admin.py                  # Define the models for the admin panel  
   |    |    |-- models.py                 # Define the models for the app
   |    |
   |    |-- authentication/                # Handles auth routes (login and register)
   |    |    |-- urls.py                   # Define authentication routes  
   |    |    |-- views.py                  # Handles login and registration  
   |    |    |-- forms.py                  # Define auth forms (login and register) 
   |    |    |-- admin.py                  # Define the models for the admin panel
   |    |
   |    |-- api/                           # API app that handles all the requests
   |    |    |-- urls.py                   # Define API routes  
   |    |    |-- views.py                  # Define API endpoints  
   |    |
   |    |-- static/
   |    |    |-- <css, JS, images>         # CSS files, Javascripts files
   |    |
   |    |-- templates/                     # Templates used to render pages
   |         |-- includes/                 # HTML chunks and components
   |         |    |-- navigation.html      # Not implemented
   |         |    |-- sidebar-new.html     # Sidebar component
   |         |    |-- scripts-new.html     # Scripts common to all pages
   |         |
   |         |-- layouts/                   # Master pages
   |         |    |-- base-new.html         # Used by common pages
   |         |    |-- base-fullscreen.html  # Not used
   |         |    |-- base.html             # Not used
   |         |
   |         |-- accounts/                  # Authentication pages
   |         |    |-- login.html            # Login page
   |         |    |-- login_email.html      # Login email template in HTML (used by email magiclink)
   |         |    |-- login_email.txt       # Plain text version of the email template
   |         |    |-- *.html                # All other account pages
   |         |    |-- *.txt                 # TXT files used by emails
   |         |
   |         |-- correduria/                # Correduria pages
   |         |    |-- index.html            # Correduria index page
   |         |
   |         |-- home/                      # UI Kit Pages
   |              |-- index.html            # Index page
   |              |-- page-404.html         # 404 page
   |              |-- *.html                # All other pages
   |
   |-- requirements.txt                     # Development modules - SQLite storage
   |
   |-- .env                                 # Inject Configuration via Environment
   |-- manage.py                            # Start the app - Django default start script
   |-- static/
   |    |-- <css, JS, images>               # CSS files, Javascripts files
   |
   |-- ************************************************************************
```

<br>

## Deployment

The app is provided with a basic configuration to be executed in [Heroku](https://heroku.com/), [Docker](https://www.docker.com/), [Gunicorn](https://gunicorn.org/), and [Waitress](https://docs.pylonsproject.org/projects/waitress/en/stable/).

### [Docker](https://www.docker.com/) execution
---

The application can be easily executed in a docker container. The steps:

> Get the code

```bash
$ git clone https://github.com/deply/deplyapp.git
$ cd deplyapp
```

> Start the app in Docker

```bash
$ sudo docker-compose pull && sudo docker-compose build && sudo docker-compose up -d
```

Visit `http://localhost:5005` in your browser. The app should be up & running.

<br>

### [Gunicorn](https://gunicorn.org/)
---

Gunicorn 'Green Unicorn' is a Python WSGI HTTP Server for UNIX.

> Install using pip

```bash
$ pip install gunicorn
```
> Start the app using gunicorn binary

```bash
$ gunicorn --bind=0.0.0.0:8001 core.wsgi:application
Serving on http://localhost:8001
```

Visit `http://localhost:8001` in your browser. The app should be up & running.


<br>


### [Waitress](https://docs.pylonsproject.org/projects/waitress/en/stable/)
---

Waitress (Gunicorn equivalent for Windows) is meant to be a production-quality pure-Python WSGI server with very acceptable performance. It has no dependencies except ones that live in the Python standard library.

> Install using pip

```bash
$ pip install waitress
```
> Start the app using [waitress-serve](https://docs.pylonsproject.org/projects/waitress/en/stable/runner.html)

```bash
$ waitress-serve --port=8001 core.wsgi:application
Serving on http://localhost:8001
```

Visit `http://localhost:8001` in your browser. The app should be up & running.

<br>
---

Deply Team