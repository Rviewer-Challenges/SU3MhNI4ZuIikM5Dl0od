export const blogPostsBlockAProps = {
  props: [
    {
      name: 'posts',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '20',
      values: ['number'],
    },
    {
      name: 'upsideDown',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const blogPostsBlockA = `
<script setup lang="ts">
import { posts } from '/@src/data/pages/blog'
</script>

<template>
  <BlogGrid :posts="posts" :limit="3" upside-down />
</template>
`

export const blogPostsBlockASample = `
export const posts = [
  {
    id: 0,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'How to Conduct an Amazon Competitor Analysis',
    abstract:
      'Selling on Amazon is a battle you are constantly fighting, both when it comes to managing your own operations...',
    views: '1.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 1,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'How to Request Reviews on Amazon (Safely)',
    abstract:
      'Reviews are integral to the success of your ecommerce business, particularly if you sell on Amazon. Online...',
    views: '1.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 2,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'How Amazon Supply Chain Works',
    abstract:
      'Whether you’re a larger or smaller company looking to scale your online operations, Amazon is a...',
    views: '1.2k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 3,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Amazon Sponsored Display Ads: A Full-Funnel Approach',
    abstract:
      'A full-funnel of self-service ads for Amazon sellers and brands is made up of Sponsored  Products...',
    views: '1.4k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 4,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Expanding Your Ecommerce Business Internationally',
    abstract:
      'I had a great talk with Ryan Cramer, fellow-of-all trades at PingPong. PingPong offers solutions for...',
    views: '1.6k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 5,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Advanced Accounting Tips to Grow Profits For Your Brand',
    abstract:
      'Cyndi Thomason, founder of bookskeep and best-selling author of Profit First For Ecommerce Sellers, joined...',
    views: '2.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 6,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Are My Walmart Listings Ready for Advertising?',
    abstract:
      'My team and I have the privilege of working with many sellers who are new to advertising on Walmart or...',
    views: '2.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 7,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Seven Ways To Increase Your Amazon Sales In 2022',
    abstract:
      'In 2022, ecommerce is thriving like never before, and Amazon is the leading marketplace. If you’re...',
    views: '2.4k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 8,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Walmart Advertising: The Definitive Guide',
    abstract:
      'Prefer to save or print this information and take it with you? Download the ebook version. 1. What is...',
    views: '3.2k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 9,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Seven Ways To Increase Your Amazon Sales In 2022',
    abstract:
      'In 2022, ecommerce is thriving like never before, and Amazon is the leading marketplace. If you’re...',
    views: '3.7k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 10,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Walmart Advertising: The Definitive Guide',
    abstract:
      'Prefer to save or print this information and take it with you? Download the ebook version. 1. What is...',
    views: '4.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 11,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: '5 Key Levers to Drive Profits—Levers 3, 4 and 5',
    abstract:
      'Note: This is part 4 in a 4 part series on profitability. Read part 1 here, part 2 here, and part 3 here. ...',
    views: '5.6k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that’s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem – to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk’ software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
]
`
