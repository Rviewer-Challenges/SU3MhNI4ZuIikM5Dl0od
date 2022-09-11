import sleep from '/@src/utils/sleep'
import { allNfts } from '/@src/data/pages/nft/all'

export async function getNft(slug: string) {
  const nft = allNfts.find((nft) => nft.slug === slug)

  // simulate api call
  await sleep(200)

  if (!nft) {
    return Promise.reject(new Error(`Job ${slug} not found`))
  }

  return Promise.resolve(nft)
}

export async function getNfts() {
  // simulate api call
  await sleep(200)

  return Promise.resolve(allNfts.map((nft) => nft))
}
