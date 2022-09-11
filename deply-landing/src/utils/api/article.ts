import sleep from '/@src/utils/sleep'
import { helpCenterCategories } from '/@src/data/pages/help'

const helpCenterArticlesMapped = helpCenterCategories.map(
  (categories) =>
    categories.articles.map((article) => ({
      article,
    })) ?? []
)

const helpCenterArticles = helpCenterArticlesMapped.flat(1)
const array = helpCenterArticles.map((item) => item.article)

export async function getArticle(slug: string) {
  const article = array.find((item) => item.slug === slug)

  // simulate api call
  await sleep(200)

  if (!article) {
    return Promise.reject(new Error(`Article ${slug} not found`))
  }

  return Promise.resolve(article)
}

export async function getArticles() {
  // simulate api call
  await sleep(200)

  return Promise.resolve(array.map((article) => article))
}
