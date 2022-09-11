import { Nft } from '/@src/types'

export const popularNfts: Nft[] = [
  {
    id: 20,
    name: 'The angel dog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-angel-dog',
    likes: 6479,
    initialBid: {
      dollar: 1123.06,
      eth: 0.45,
    },
    currentBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    collection: {
      id: 3,
      name: 'Crypto Dogs',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'Donny Darko',
      picture: '/assets/nft/avatars/reaper.svg',
      url: '/',
    },
    biders: [
      {
        id: 3,
        name: 'Robotix',
        bid: 0.75,
        time: '2 hours ago',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'Cowboy',
        bid: 0.72,
        time: '5 hours ago',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'Rozwell',
        bid: 0.68,
        time: '9 hours ago',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'Hammy',
        bid: 0.65,
        time: '10 hours ago',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'Mogwai',
        bid: 0.62,
        time: '11 hours ago',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 10, 2022',
    favorite: false,
  },
  {
    id: 4,
    name: 'The urban monkey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-urban-monkey',
    likes: 8824,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    collection: {
      id: 0,
      name: 'Crypto Monkeys',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 0,
      name: 'Eggman',
      picture: '/assets/nft/avatars/egg.svg',
      url: '/',
    },
    biders: [
      {
        id: 2,
        name: 'CanHaz',
        bid: 0.55,
        time: '10 mins ago',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'Chompy',
        bid: 0.52,
        time: '30 mins ago',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'Hammy',
        bid: 0.49,
        time: '2 hours ago',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'Mogwai',
        bid: 0.41,
        time: '4 hours ago',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 16, 2022',
    favorite: false,
  },
  {
    id: 12,
    name: 'The winged kitty',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-winged-kitty',
    likes: 7423,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 2370.91,
      eth: 0.95,
    },
    collection: {
      id: 1,
      name: 'Crypto Kitten',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 0,
      name: 'Chompy',
      picture: '/assets/nft/avatars/chomp.svg',
      url: '/',
    },
    biders: [
      {
        id: 0,
        name: 'Eggman',
        bid: 0.95,
        time: '30 mins ago',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'Donny Darko',
        bid: 0.75,
        time: '2 hours ago',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'CanIHaz',
        bid: 0.68,
        time: '9 hours ago',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 28, 2022',
    favorite: false,
  },
  {
    id: 34,
    name: 'The urban mummy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-urban-mummy',
    likes: 3222,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 5,
      name: 'Crypto Mummies',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'CanHaz',
      picture: '/assets/nft/avatars/cat.svg',
      url: '/',
    },
    biders: [
      {
        id: 1,
        name: 'Chompy',
        bid: 0.85,
        time: '2 mins ago',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'Robotix',
        bid: 0.62,
        time: '3 hours ago',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'CanIHaz',
        bid: 0.44,
        time: '9 hours ago',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 29, 2022',
    favorite: false,
  },
  {
    id: 41,
    name: 'The urban eagle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-urban-eagle',
    likes: 23273,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 0,
      name: 'Crypto Eagles',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 2,
      name: 'CanHaz',
      picture: '/assets/nft/avatars/cat.svg',
      url: '/',
    },
    biders: [
      {
        id: 1,
        name: 'Chompy',
        bid: 0.85,
        time: '2 mins ago',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'Rozwell',
        bid: 0.45,
        time: '2 hours ago',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'Hammy',
        bid: 0.39,
        time: '4 hours ago',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Feb 28, 2022',
    favorite: false,
  },
  {
    id: 42,
    name: 'The VR eagle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-vr-eagle',
    likes: 41689,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 1622.22,
      eth: 0.65,
    },
    collection: {
      id: 0,
      name: 'Crypto Eagles',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 2,
      name: 'CanHaz',
      picture: '/assets/nft/avatars/cat.svg',
      url: '/',
    },
    biders: [
      {
        id: 6,
        name: 'Hammy',
        bid: 0.65,
        time: '2 hours ago',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'Donny Darko',
        bid: 0.57,
        time: '7 hours ago',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'Cowboy',
        bid: 0.42,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 11, 2022',
    favorite: false,
  },
  {
    id: 28,
    name: 'The wounded cypher neko',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-wounded-cypher-neko',
    likes: 7894,
    initialBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    currentBid: {
      dollar: 2370.91,
      eth: 0.95,
    },
    collection: {
      id: 4,
      name: 'Cypher Nekos',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'Robotix',
      picture: '/assets/nft/avatars/robot.svg',
      url: '/',
    },
    biders: [
      {
        id: 4,
        name: 'Cowboy',
        bid: 0.95,
        time: '2 hours ago',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'Rozwell',
        bid: 0.85,
        time: '5 hours ago',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'Hammy',
        bid: 0.78,
        time: '6 hours ago',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 23, 2022',
    favorite: false,
  },
  {
    id: 30,
    name: 'The mafia cypher neko',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-mafia-cypher-neko',
    likes: 11665,
    initialBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    currentBid: {
      dollar: 2370.91,
      eth: 0.95,
    },
    collection: {
      id: 4,
      name: 'Cypher Nekos',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'Robotix',
      picture: '/assets/nft/avatars/robot.svg',
      url: '/',
    },
    biders: [
      {
        id: 1,
        name: 'Chompy',
        bid: 0.95,
        time: '2 mins ago',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 0,
        name: 'Eggman',
        bid: 0.82,
        time: '45 mins ago',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'CanIHaz',
        bid: 0.78,
        time: '5 hours ago',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 3, 2022',
    favorite: false,
  },
  {
    id: 1,
    name: 'The 3d monkey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-3d-monkey',
    likes: 23273,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 0,
      name: 'Crypto Monkeys',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 0,
      name: 'Eggman',
      picture: '/assets/nft/avatars/egg.svg',
      url: '/',
    },
    biders: [
      {
        id: 1,
        name: 'Chompy',
        bid: 0.85,
        time: '2 mins ago',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'Rozwell',
        bid: 0.45,
        time: '2 hours ago',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'Hammy',
        bid: 0.39,
        time: '4 hours ago',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Feb 28, 2022',
    favorite: false,
  },
  {
    id: 5,
    name: 'The bored monkey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-bored-monkey',
    likes: 31674,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 0,
      name: 'Crypto Monkeys',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 0,
      name: 'Eggman',
      picture: '/assets/nft/avatars/egg.svg',
      url: '/',
    },
    biders: [
      {
        id: 4,
        name: 'Cowboy',
        bid: 0.85,
        time: '2 hours ago',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'Rozwell',
        bid: 0.81,
        time: '3 hours ago',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'Hammy',
        bid: 0.76,
        time: '7 hours ago',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'Mogwai',
        bid: 0.61,
        time: '9 hours ago',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 26, 2022',
    favorite: false,
  },
  {
    id: 49,
    name: 'The thug skull',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-thug-skull',
    likes: 9487,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    collection: {
      id: 1,
      name: 'Cool Skulls',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 4,
      name: 'Cowboy',
      picture: '/assets/nft/avatars/cow.svg',
      url: '/',
    },
    biders: [
      {
        id: 2,
        name: 'CanHaz',
        bid: 0.75,
        time: '10 mins ago',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'Robotix',
        bid: 0.65,
        time: '4 hours ago',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'Cowboy',
        bid: 0.62,
        time: '5 hours ago',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 13, 2022',
    favorite: false,
  },
  {
    id: 36,
    name: 'The shocked mummy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-shocked-mummy',
    likes: 2833,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 5,
      name: 'Crypto Mummies',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'CanHaz',
      picture: '/assets/nft/avatars/cat.svg',
      url: '/',
    },
    biders: [
      {
        id: 5,
        name: 'Cowboy',
        bid: 0.85,
        time: '9 hours ago',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'Chompy',
        bid: 0.75,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 5, 2022',
    favorite: false,
  },
  {
    id: 44,
    name: 'The smoking eagle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-smoking-eagle',
    likes: 8824,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    collection: {
      id: 0,
      name: 'Crypto Eagles',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 2,
      name: 'CanHaz',
      picture: '/assets/nft/avatars/cat.svg',
      url: '/',
    },
    biders: [
      {
        id: 2,
        name: 'CanHaz',
        bid: 0.55,
        time: '10 mins ago',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'Chompy',
        bid: 0.52,
        time: '30 mins ago',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'Hammy',
        bid: 0.49,
        time: '2 hours ago',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'Mogwai',
        bid: 0.41,
        time: '4 hours ago',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 16, 2022',
    favorite: false,
  },
  {
    id: 18,
    name: 'The sailor dog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-sailor-dog',
    likes: 8276,
    initialBid: {
      dollar: 1123.06,
      eth: 0.45,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 3,
      name: 'Crypto Dogs',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'Donny Darko',
      picture: '/assets/nft/avatars/reaper.svg',
      url: '/',
    },
    biders: [
      {
        id: 4,
        name: 'Cowboy',
        bid: 0.85,
        time: '7 hours ago',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'Rozwell',
        bid: 0.75,
        time: '9 hours ago',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'Hammy',
        bid: 0.68,
        time: '10 hours ago',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 14, 2022',
    favorite: false,
  },
  {
    id: 53,
    name: 'The painter skull',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-painter-skull',
    likes: 8447,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    collection: {
      id: 1,
      name: 'Cool Skulls',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 4,
      name: 'Cowboy',
      picture: '/assets/nft/avatars/cow.svg',
      url: '/',
    },
    biders: [
      {
        id: 0,
        name: 'Eggman',
        bid: 0.75,
        time: '3 hours ago',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 19, 2022',
    favorite: false,
  },
  {
    id: 11,
    name: 'The candy kitty',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Itaque mihi non satis videmini considerare quod iter sit naturae quaeque progressio. ',
    preview: 'data:image/gif;base64,replace_with_your_image',
    slug: 'the-candy-kitty',
    likes: 11644,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 2370.91,
      eth: 0.95,
    },
    collection: {
      id: 1,
      name: 'Crypto Kitten',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        {
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
      ],
      url: '/',
    },
    seller: {
      id: 0,
      name: 'Chompy',
      picture: '/assets/nft/avatars/chomp.svg',
      url: '/',
    },
    biders: [
      {
        id: 2,
        name: 'Robotix',
        bid: 0.95,
        time: '3 hours ago',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'Donny Darko',
        bid: 0.84,
        time: '7 hours ago',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'CanIHaz',
        bid: 0.65,
        time: '9 hours ago',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 12, 2022',
    favorite: false,
  },
]
