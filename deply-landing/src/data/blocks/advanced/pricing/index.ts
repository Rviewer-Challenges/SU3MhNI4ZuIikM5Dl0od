import type { PricingPlan } from '/@src/components/advanced/pricing/pricing-long/PricingLong.vue'

export const plans = [
  {
    id: 0,
    icon: '/assets/icons/pricing/pricing-1.svg',
    title: 'GROWTH',
    subtitle: 'Under $10,000 in monthly ad spend',
    price: {
      monthly: 250,
      yearly: 1750,
    },
    benefits: [
      {
        id: 0,
        content: 'Access to slack community',
      },
      {
        id: 1,
        content: 'Access to support team',
      },
      {
        id: 2,
        content: 'Algorithmic bidding',
      },
      {
        id: 3,
        content: 'Keyword and ASIN harvesting',
      },
    ],
    features: [
      {
        id: 0,
        content: 'Search term isolation',
      },
      {
        id: 1,
        content: 'Total sales analytics',
      },
      {
        id: 2,
        content: 'Best seller rank',
      },
      {
        id: 3,
        content: 'Placement optimization',
      },
    ],
  },
  {
    id: 1,
    icon: '/assets/icons/pricing/pricing-2.svg',
    title: 'BUSINESS',
    subtitle: 'Over $10,000 in monthly ad spend',
    price: {
      monthly: 500,
      yearly: 3500,
    },
    benefits: [
      {
        id: 0,
        content: 'All features in Growth',
      },
      {
        id: 1,
        content: '3 week checkpoint call',
      },
      {
        id: 2,
        content: '6 week checkpoint call',
      },
      {
        id: 3,
        content: 'Quarterly account assessment',
      },
    ],
    features: [
      {
        id: 0,
        content: 'Google Ads integration',
      },
      {
        id: 1,
        content: 'Automated rules and strategies',
      },
      {
        id: 2,
        content: 'Brand analytics',
      },
      {
        id: 3,
        content: 'Competitor intelligence',
      },
    ],
  },
  {
    id: 2,
    icon: '/assets/icons/pricing/pricing-3.svg',
    title: 'ENTERPRISE',
    subtitle: 'Over $300,000 in monthly ad spend',
    price: {
      monthly: 1250,
      yearly: 15000,
    },
    benefits: [
      {
        id: 0,
        content: 'All features in Business',
      },
      {
        id: 1,
        content: 'Strategic Partner Manager',
      },
      {
        id: 2,
        content: 'Quarterly Business Review',
      },
      {
        id: 3,
        content: 'Yearly Account Planning',
      },
    ],
    features: [
      {
        id: 0,
        content: 'Amazon DSP instance',
      },
      {
        id: 1,
        content: 'Amazon Marketing Cloud',
      },
      {
        id: 2,
        content: 'Datalake integration',
      },
      {
        id: 3,
        content: 'Custom dashboard',
      },
    ],
  },
]

export const comparePlans = [
  {
    logo: '/assets/brands/tribe.svg',
    featured: true,
    popular: false,
    features: [
      {
        value: 'Free or $12',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
    ],
  },
  {
    logo: '/assets/brands/vonmo.svg',
    featured: false,
    popular: true,
    features: [
      {
        value: '$24',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
    ],
  },
  {
    logo: '/assets/brands/infinite.svg',
    featured: false,
    popular: false,
    features: [
      {
        value: '$16',
        label: 'Trades',
      },
      {
        value: '$15/month',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
    ],
  },
  {
    logo: '/assets/brands/kromo.svg',
    featured: false,
    popular: false,
    features: [
      {
        value: '$8',
        label: 'Trades',
      },
      {
        value: '$25/month',
        label: 'Basic Account',
      },
      {
        value: '$4.95',
        label: 'Monthly fees',
      },
    ],
  },
]

export const longPlans: PricingPlan[] = [
  {
    name: 'Starter',
    logo: '/assets/brands/tribe.svg',
    price: 15,
    color: 'primary',
    featured: true,
    popular: false,
    features: [
      {
        value: 'Free or $12',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$3/mo',
        label: 'Stocks & Shares',
      },
      {
        value: '$5/mo',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.65%',
        label: 'Tax rate',
      },
      {
        value: '$0.75',
        label: 'Bank transfer',
      },
      {
        value: '$5',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Business',
    logo: '/assets/brands/tribe.svg',
    price: 25,
    color: 'secondary',
    featured: false,
    popular: true,
    features: [
      {
        value: 'Free',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$10/mo',
        label: 'Stocks & Shares',
      },
      {
        value: '$2/mo',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.55%',
        label: 'Tax rate',
      },
      {
        value: '$0.5',
        label: 'Bank transfer',
      },
      {
        value: '$3',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Enterprise',
    logo: '/assets/brands/tribe.svg',
    price: 45,
    color: 'yellow',
    featured: false,
    popular: false,
    features: [
      {
        value: 'Free',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$15/mo',
        label: 'Stocks & Shares',
      },
      {
        value: 'Free',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.25%',
        label: 'Tax rate',
      },
      {
        value: 'Free',
        label: 'Bank transfer',
      },
      {
        value: '$2',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Custom',
    logo: '/assets/brands/tribe.svg',
    price: 24,
    color: 'info',
    featured: false,
    popular: false,
    features: [
      {
        value: '$8',
        label: 'Trades',
      },
      {
        value: '$25/month',
        label: 'Basic Account',
      },
      {
        value: '$4.95',
        label: 'Monthly fees',
      },
      {
        value: 'Free or $12',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
    ],
  },
]

export const pricingSplit = {
  regularPlans: [
    {
      name: 'Community',
      logo: 'assets/icons/pricing/pricing-icon-1.svg',
      price: 'Free',
      priceLabel: 'Forever',
      features: [
        'Additional capacity not available',
        'Free for personal/non commercial projects',
      ],
    },
    {
      name: 'Starter',
      logo: 'assets/icons/pricing/pricing-icon-2.svg',
      price: '$29/mo',
      priceLabel: 'Starting at',
      features: [
        'Additional capacity starts at $10/mo',
        'Entry level plan running tests and projects',
      ],
    },
    {
      name: 'Pro',
      logo: 'assets/icons/pricing/pricing-icon-3.svg',
      price: '$299/mo',
      priceLabel: 'Starting at',
      features: [
        'Additional capacity starts at $5/mo',
        'Includes online support and app integrations',
      ],
    },
  ],
  premiumPlan: {
    name: 'Enterprise',
    logo: 'assets/icons/pricing/pricing-icon-4.svg',
    features: [
      {
        title: 'Personalization',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam stabilem appellas. Conferam tecum, quam cuique verso rem subicias.',
      },
      {
        title: 'Analytics',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam stabilem appellas. Conferam tecum, quam cuique verso rem subicias.',
      },
      {
        title: 'Security',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam stabilem appellas. Conferam tecum, quam cuique verso rem subicias.',
      },
      {
        title: 'Service level',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam stabilem appellas. Conferam tecum, quam cuique verso rem subicias.',
      },
    ],
  },
}

export const comparisonTable = {
  labels: [
    {
      cellType: 'head',
      cellLabel: '',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Included monthly usage',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Additional usage',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Analytics Retention',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'row',
      cellLabel: 'Features',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Search API',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Synonyms',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Secure environment',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Standard Analytics',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Query Suggestions',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Advanced Analytics',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Advanced APIs',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Personalization',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'A/B Testing',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Query Rules',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Single Tenancy',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Single sign on (SSO)',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Service Level Agreement (SLA)',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Additional Team Members',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Granular Team Permissions',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'row',
      cellLabel: 'Support',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Documentation & Forum',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Email support',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'App integrations',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'Coding guidance',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Live chat',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Phone alerts',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Dedicated contact',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
    {
      cellType: 'label',
      cellLabel: 'Dedicated engineer',
      helpText: true,
      helpLabel: 'Some nice help text to describe the feature',
    },
  ],
  plans: [
    {
      name: 'Community',
      logo: 'assets/icons/pricing/pricing-icon-1.svg',
      price: 'Free for personal use',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['50K operations', '10K records'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['Not available'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['0'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
      ],
    },
    {
      name: 'Starter',
      logo: 'assets/icons/pricing/pricing-icon-2.svg',
      price: 'Starting at $29/mo',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['250K operations', '50K records'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['$10/month'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['7 days'],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['3'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
      ],
    },
    {
      name: 'Pro',
      logo: 'assets/icons/pricing/pricing-icon-3.svg',
      price: 'Starting at $299/mo',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['5M operations', '1M records'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['$5/month'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['30 days'],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['3'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
      ],
    },
    {
      name: 'Enterprise',
      logo: 'assets/icons/pricing/pricing-icon-4.svg',
      price: 'Contact Us',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['', 'Contact Us', ''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['Contact Us'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['up to 365 days'],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'label',
          cellLabel: ['Unlimited'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
      ],
    },
  ],
}

export const pricingBlockPlans = [
  {
    name: 'Discovery',
    text: 'Discover our premium features for 30 days , absolutely free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ['1 user', '1 Dashboard', 'Project Module', '--', '--', '--'],
  },
  {
    name: 'Manager',
    text: 'Discover our premium features for 30 days , absolutely free',
    monthlyPrice: 32,
    yearlyPrice: 350,
    features: [
      '5 users',
      '2 Dashboard',
      'Project Module',
      'Accounting Module',
      'CRM Module',
      '--',
    ],
  },
  {
    name: 'Executive',
    text: 'Discover our premium features for 30 days , absolutely free',
    monthlyPrice: 55,
    yearlyPrice: 490,
    features: [
      '15 users',
      '3 Dashboards',
      'Project Module',
      'Accounting Module',
      'CRM Module',
      'Helpdesk module',
    ],
  },
  {
    name: 'Enterprise',
    text: 'Discover our premium features for 30 days , absolutely free',
    monthlyPrice: 90,
    yearlyPrice: 790,
    features: [
      '30 users',
      'Unlimited Dashboards',
      'Access to all modules',
      'Integrations',
      'Dedicated support',
      'Beta features',
    ],
  },
]

export const pricingTabbedPlans = {
  allPlans: [
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-5.svg',
      name: 'Personal',
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-6.svg',
      name: 'Teams',
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-2.svg',
      name: 'Enterprise',
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-1.svg',
      name: 'Custom',
    },
  ],
  personalPlans: [
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-5.svg',
      name: 'Personal',
      price: 0,
      priceBilling: 'Forever',
      planText:
        'Jumpstart your business by conducting small marketing campaigns',
      buttonLabel: 'Get Started Now',
      features: [
        'Send one campaign per month',
        'Maintain one subscriber list',
        'Max of 20 new leads per month',
      ],
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-3.svg',
      name: 'Freelancer',
      price: 5,
      priceBilling: 'Per month',
      planText:
        'Gain more power and increase your marketing and lead generation',
      buttonLabel: 'Choose Freelancer',
      features: [
        'Send 3 campaigns per month',
        'Maintain 3 subscriber lists',
        'Max of 100 new leads per month',
      ],
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-4.svg',
      name: 'Freelancer+',
      price: 15,
      priceBilling: 'Per month',
      planText:
        'The best choice to boost your internal marketing and lead generation',
      buttonLabel: 'Upgrade Now',
      features: [
        'Send unlimited campaigns',
        'Maintain unlimited subscriber lists',
        'Unlimited new leads per month',
      ],
    },
  ],
  premiumPlans: [
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-6.svg',
      name: 'Business',
      price: 45,
      priceBilling:
        'Price per month and per team member. Includes a team owner and 2 team members.',
      planText:
        'For established companies with specific needs and internal teams. Estimate your pricing.',
      buttonLabel: 'Schedule Demo',
      features: [
        'Includes everything from Personal',
        'Projects and team management',
        'Internal team messaging',
      ],
      highlight: {
        title: 'Collaborate easily',
        subtitle: 'Manage and share documents with your team and work',
        image: '/assets/illustrations/pricing/pricing-highlight-1.svg',
        darkImage: '/assets/illustrations/pricing/pricing-highlight-1-dark.svg',
      },
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-2.svg',
      name: 'Enterprise',
      price: 75,
      priceBilling:
        'Price per month and per team member. Includes a team owner and 6 team members.',
      planText:
        'For bigger and comlpex companies with multiple teams and departments. Estimate your pricing.',
      buttonLabel: 'Schedule Demo',
      features: [
        'Includes everything from Business',
        'Manage multi tenant organizations',
        'Professional and customized reports',
      ],
      highlight: {
        title: 'Customer portal',
        subtitle: "Share your team's progress on a dedicated customer portal",
        image: '/assets/illustrations/pricing/pricing-highlight-2.svg',
        darkImage: '/assets/illustrations/pricing/pricing-highlight-2-dark.svg',
      },
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-1.svg',
      name: 'Custom',
      price: 99,
      priceBilling:
        'Contact us to discuss planning of your business needs and your project scope.',
      planText:
        'Get everything from the Enterprise plan and ask for personalized implementations and development.',
      buttonLabel: 'Schedule Demo',
      features: [
        'Includes everything from Enterprise',
        'Custom features and implementations',
        'Personalized software integrations',
      ],
      highlight: {
        title: 'On-Demand training',
        subtitle:
          'Our solution experts will come to your office for a training session',
        image: '/assets/illustrations/pricing/pricing-highlight-3.svg',
        darkImage: '/assets/illustrations/pricing/pricing-highlight-3-dark.svg',
      },
    },
  ],
}

export const pricingCompactPlans = [
  {
    name: 'Basic',
    description:
      'For individuals who just need to start with the basic features',
    monthlyPrice: 0,
    yearlyPrice: 0,
    actionLabel: 'Start For Free',
    popular: false,
  },
  {
    name: 'Team',
    description: 'For teams who just need to start with the basic features',
    monthlyPrice: 5,
    yearlyPrice: 49,
    actionLabel: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Pro',
    description:
      'For medium businesses who need advanced features for their activity',
    monthlyPrice: 15,
    yearlyPrice: 149,
    actionLabel: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Enterprise',
    description:
      'For large businesses who need advanced features for their activity',
    monthlyPrice: 99,
    yearlyPrice: 899,
    actionLabel: 'Contact Us',
    popular: false,
  },
]

export const pricingCompareBasic = [
  {
    label: 'Separate business/personal',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Estimate tax payments',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Track deductible mileage',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Download online banking',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Multi-device',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Create invoices & estimates',
    one: false,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Manage VAT',
    one: false,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'Run payroll',
    one: false,
    two: false,
    three: true,
    four: true,
  },
  {
    label: 'Manage bills & payments',
    one: false,
    two: false,
    three: true,
    four: true,
  },
  {
    label: 'Multiple currencies',
    one: false,
    two: false,
    three: false,
    four: true,
  },
  {
    label: 'Create budgets',
    one: false,
    two: false,
    three: false,
    four: true,
  },
  {
    label: 'Track time',
    one: false,
    two: false,
    three: false,
    four: true,
  },
]

export const pricingDuoPlans = [
  {
    name: 'Free',
    icon: 'ph:parachute-duotone',
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      '5MB por archivo',
      '7 días de almacenamiento',
      'Todo tipo de archivos',
      'Infinitos objetos',
      'ID de eliminación',
    ],
    featured: true,
  },
  {
    name: 'Pro',
    icon: 'ph:rocket-duotone',
    price: {
      monthly: 6.99,
      yearly: 59.99,
    },
    features: [
      'Todas las funciones de Free',
      'Acceso a la API',
      '100MB por archivo',
      'Elige el momento de expiración',
      'Parámetros en la URL',
    ],
    featured: true,
  },
]
