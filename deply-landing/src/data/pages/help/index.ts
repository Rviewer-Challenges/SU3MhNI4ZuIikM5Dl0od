export const markdownObject = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.

#### Choose a plan first

Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

*   Discovery pricing
*   Business pricing

#### Activate your account

Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.

#### Perform initial setup

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.

*   Create a company
*   Add users to your team
*   Start working
`

export const helpCenterTopics = [
  {
    icon: 'ph:files-duotone',
    iconColor: 'primary',
    title: 'Documentation',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    icon: 'ph:atom-duotone',
    iconColor: 'success',
    title: 'User Guides',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    icon: 'ph:swap-duotone',
    iconColor: 'secondary',
    title: 'API',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    icon: 'ph:circles-three-duotone',
    iconColor: 'warning',
    title: 'Components',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]

export const helpCenterCategories = [
  {
    slug: 'welcome-category',
    icon: 'ph:hand-waving-duotone',
    iconColor: 'yellow',
    name: 'Welcome',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
    contributors: [
      {
        name: 'Edwin Tyler',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
      {
        name: 'Helen Miller',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
      {
        name: 'Jake Rowland',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
    ],
    articles: [
      {
        slug: 'making-your-first-steps',
        title: 'Getting started',
        subtitle: 'Making your first steps with our application',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one week ago',
        author: {
          name: 'Jake Rowland',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'configuration-options',
        title: 'Configuration options',
        subtitle: 'Explore configuration options based on your requirements',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'about 2 days ago',
        author: {
          name: 'Edwin Tyler',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'creating-an-account',
        title: 'Creating an account',
        subtitle: 'Create your account and fill in required info',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'about 3 weeks ago',
        author: {
          name: 'Helen Miller',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'creating-a-company',
        title: 'Creating a company',
        subtitle: 'Setup your company account to start adding products',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'about 3 weeks ago',
        author: {
          name: 'Helen Miller',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
    ],
  },
  {
    slug: 'project-module-category',
    icon: 'ph:folder-simple-dotted-duotone',
    iconColor: 'success',
    name: 'Projects Module',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
    contributors: [
      {
        name: 'Jake Rowland',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
      {
        name: 'Helen Miller',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
    ],
    articles: [
      {
        slug: 'creating-a-project',
        title: 'Creating a project',
        subtitle: 'Create your first project and start adding tasks',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one month ago',
        author: {
          name: 'Jake Rowland',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'managing-tasks',
        title: 'Managing tasks',
        subtitle: 'Assign, revoke and manage your tasks',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one week ago',
        author: {
          name: 'Helen Miller',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'uploading-attachments',
        title: 'Uploading attachments',
        subtitle: 'Start uploading documents, images and videos',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: '2 weeks ago',
        author: {
          name: 'Helen Miller',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'managing-user-access',
        title: 'Managing user access',
        subtitle: 'Manage permissions and user rights',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one week ago',
        author: {
          name: 'Jake Rowland',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'configuring-a-gantt-view',
        title: 'Configuring a Gantt view',
        subtitle: 'Plan efficiently by using the built-in Gantt view',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one week ago',
        author: {
          name: 'Jake Rowland',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
    ],
  },
  {
    slug: 'sales-module-category',
    icon: 'ph:t-shirt-duotone',
    iconColor: 'secondary',
    name: 'Sales Module',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
    contributors: [
      {
        name: 'Christina Chu',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
      {
        name: 'Ina Volkov',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
      {
        name: 'Pete Jackson',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
    ],
    articles: [
      {
        slug: 'setting-up-cutomer-payments',
        title: 'Setting up customer payments',
        subtitle: 'Learn how to enable payments on your storefront',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: '3 weeks ago',
        author: {
          name: 'Christina Chu',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'configuring-customer-registration',
        title: 'Configuring customer registration',
        subtitle: 'Configure how users are getting registered on the store',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one week ago',
        author: {
          name: 'Pete Jackson',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'adding-products',
        title: 'Adding products',
        subtitle: 'Add your first products to the catalogue',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: '3 days ago',
        author: {
          name: 'Christina Chu',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'creating-product-variants',
        title: 'Creating product variants',
        subtitle: 'Making your first steps',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one week ago',
        author: {
          name: 'Ina Volkov',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'managing-product-variants',
        title: 'Managing product variants',
        subtitle: 'Making your first steps',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one week ago',
        author: {
          name: 'Ina Volkov',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
    ],
  },
  {
    slug: 'marketing-module-category',
    icon: 'ph:megaphone-simple-duotone',
    iconColor: 'info',
    name: 'Marketing Module',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
    contributors: [
      {
        name: 'Mike Wilson',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
      {
        name: 'Eddie Bricks',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
      {
        name: 'Jake Rowland',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
    ],
    articles: [
      {
        slug: 'collecting-campaign-audience',
        title: 'Collecting campaign audience',
        subtitle: 'Learn how to make people subscribe',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one day ago',
        author: {
          name: 'Mike Wilson',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'creating-customer-segments',
        title: 'Creating customer segments',
        subtitle: 'Learn more about customer segmentation',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: '2 weeks ago',
        author: {
          name: 'Mike Wilson',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'run-your-first-campaign',
        title: 'Run your first campaign',
        subtitle: 'Run your first mailing campaign',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one week ago',
        author: {
          name: 'Eddie Bricks',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'creating-a-custom-template',
        title: 'Creating a custom template',
        subtitle: 'Create a custom email template with your own elements',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one week ago',
        author: {
          name: 'Jake Rowland',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
    ],
  },
  {
    slug: 'production-module-category',
    icon: 'ph:factory-duotone',
    iconColor: 'warning',
    name: 'Production Module',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
    contributors: [
      {
        name: 'Sara Gheller',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
    ],
    articles: [
      {
        slug: 'creating-a-production-unit',
        title: 'Creating a production unit',
        subtitle: 'Learn how to create and manage a production unit',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one hour ago',
        author: {
          name: 'Sara Gheller',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'creating-a-supply-chain',
        title: 'Creating a supply chain',
        subtitle: 'Learn how to create and manage a supply chain',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one day ago',
        author: {
          name: 'Sara Gheller',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
    ],
  },
  {
    slug: 'delivery-module-category',
    icon: 'ph:truck-duotone',
    iconColor: 'purple',
    name: 'Delivery Module',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
    contributors: [
      {
        name: 'Jake Rowland',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
      {
        name: 'Edwin Tyler',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
      {
        name: 'Helen Miller',
        picture: 'data:image/gif;base64,replace_with_your_image',
      },
    ],
    articles: [
      {
        slug: 'creating-your-fleet',
        title: 'Creating your fleet',
        subtitle: 'Create your fleet and set global rules',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: '5 days ago',
        author: {
          name: 'Helen Miller',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'adding-vehicles',
        title: 'Adding vehicles',
        subtitle: 'Dive in fleet vehicle management',
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: 'one week ago',
        author: {
          name: 'Jake Rowland',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
      {
        slug: 'track-your-fleet',
        title: 'Track your fleet',
        subtitle: "Learn more on how to track your fleet's performance",
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.',
        updated: '8 hours ago',
        author: {
          name: 'Edwin Tyler',
          picture: 'data:image/gif;base64,replace_with_your_image',
        },
        content: markdownObject,
      },
    ],
  },
]
