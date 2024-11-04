import imgAPI from '@/assets/images/imgAPI';

const sample = [{
  name: 'company',
  thumb: imgAPI.ui[3],
  child: [{
    name: 'about',
    // link: '/about',
    link: '/',
  },
  {
    name: 'team',
    // link: '/about/team',
    link: '/',
  },
  {
    name: 'blog',
    // link: '/blog',
    link: '/',
  },
  {
    name: 'blog detail',
    // link: '/blog/detail-blog',
    link: '/',
  },
  ],
},
{
  name: 'Form',
  thumb: imgAPI.ui[1],
  child: [{
    name: 'login',
    // link: '/login',
    link: '/',
  },
  {
    name: 'register',
    // link: '/register',
    link: '/',
  },
  {
    name: 'contact',
    // link: '/contact',
    link: '/',
  },
  {
    name: 'contact map',
    // link: '/contact/with-map',
    link: '/',
  },
  ],
},
{
  name: 'items',
  thumb: imgAPI.ui[0],
  child: [{
    name: 'card',
    // link: '/collection',
    link: '/',
  },
  {
    name: 'product',
    // link: '/collection/products',
    link: '/',
  },
  {
    name: 'product detail',
    // link: '/collection/detail-product',
    link: '/',
  },
  ],
},
{
  name: 'utilities',
  thumb: imgAPI.ui[2],
  child: [{
    name: 'pricing',
    // link: '/utils/pricing',
    link: '/',
  },
  {
    name: 'faq',
    // link: '/utils/faq',
    link: '/',
  },
  {
    name: 'maintenance',
    // link: '/utils/maintenance',
    link: '/',
  },
  {
    name: 'coming soon',
    // link: '/utils/coming-soon',
    link: '/',
  },
  {
    name: 'error',
    link: '/error',
  },
  ],
},
];

export default sample;
