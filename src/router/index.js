export default [
  {
      path: '/',
      name: 'index',
      redirect: { path: '/novel/manList', query: {id:1}}
  },
  {
    meta: {
      title: 'novel',
      keepAlive: false,
      isBack:false,
    },
    path: '/novel/',
    name: 'novel',
    component: resolve => require(['views/index'], resolve),
    children:[
      {
        meta: {title: 'manList', keepAlive:true,isBack:false,},
        path: 'manList',
        name:'manList',
        component: resolve => require(['views/novel/manList'], resolve),
      },
      {
        meta: {title: 'womenList', keepAlive:true,isBack:false,},
        path: 'womenList',
        name:'womenList',
        component: resolve => require(['views/novel/womenList'], resolve),
      },
      {
        meta: {title: 'assortmentList', keepAlive:true,isBack:false,},
        path: 'assortmentList',
        name:'assortmentList',
        component: resolve => require(['views/novel/assortmentList'], resolve),
      },
      {
        meta: {title: 'mineList', keepAlive:true,isBack:false,},
        path: 'mineList',
        name:'mineList',
        component: resolve => require(['views/novel/mineList'], resolve),
      },
    ]
  },
  {
    meta: {
      title: 'moreList',
      keepAlive: false,
      isBack:false,
    },
    path: '/moreList',
    name: 'moreList',
    component: resolve => require(['views/more/moreList'], resolve),
  },
  {
    meta: {
      title: 'bookDetail',
      keepAlive: false,
      isBack:false,
    },
    path: '/bookDetail',
    name: 'bookDetail',
    component: resolve => require(['views/more/bookDetail'], resolve),
  },
  {
    meta: {
      title: 'readNovel',
      keepAlive: false,
      isBack:false,
    },
    path: '/readNovel',
    name: 'readNovel',
    component: resolve => require(['views/more/readNovel'], resolve),
  },
  
];
