import sleep from '/@src/utils/sleep'
import { jobs } from '/@src/data/pages/jobs'

export async function getJob(slug: string) {
  const job = jobs.find((job) => job.slug === slug)

  // simulate api call
  await sleep(200)

  if (!job) {
    return Promise.reject(new Error(`Job ${slug} not found`))
  }

  return Promise.resolve(job)
}

export async function getJobs() {
  // simulate api call
  await sleep(200)

  return Promise.resolve(jobs.map((job) => job))
}
