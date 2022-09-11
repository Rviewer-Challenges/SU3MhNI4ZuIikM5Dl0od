import sleep from '/@src/utils/sleep'
import { helpCenterCategories } from '/@src/data/pages/help'

export async function getCategory(slug: string) {
  const category = helpCenterCategories.find(
    (category) => category.slug === slug
  )

  // simulate api call
  await sleep(200)

  if (!category) {
    return Promise.reject(new Error(`Category ${slug} not found`))
  }

  return Promise.resolve(category)
}

export async function getCategories() {
  // simulate api call
  await sleep(200)

  return Promise.resolve(helpCenterCategories.map((category) => category))
}
