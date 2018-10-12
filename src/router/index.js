export default [
  {
    path: '/',
    name: 'index',
    redirect: {path: '/novel/manList', query: {id: 1}}
  },
  {
    meta: {
      title: '小说',
      keepAlive: false,
      isBack: false,
    },
    path: '/novel/',
    name: 'xiao',
    component: resolve => require(['views/index'], resolve),
    children: [
      {
        meta: {title: '男生列表', keepAlive: true, isBack: false,},
        path: 'manList',
        name: 'manList',
        component: resolve => require(['views/novel/manList'], resolve),
      },
      {
        meta: {title: '女生列表', keepAlive: true, isBack: false,},
        path: 'womenList',
        name: 'womenList',
        component: resolve => require(['views/novel/womenList'], resolve),
      },
    ]
  },
  {
    meta: {
      title: '更多列表',
      keepAlive: true,
      isBack: false,
    },
    path: '/moreList',
    name: 'moreList',
    component: resolve => require(['views/more/moreList'], resolve),
  },
  {
    meta: {
      title: '小说详情',
      keepAlive: true,
      isBack: false,
    },
    path: '/bookDetail',
    name: 'bookDetail',
    component: resolve => require(['views/more/bookDetail'], resolve),
  },
  {
    meta: {
      title: '小说正文',
      keepAlive: false,
      isBack: false,
    },
    path: '/readNovel',
    name: 'readNovel',
    component: resolve => require(['views/more/readNovel'], resolve),
  },
  {
    meta: {
      title: '充值',
      keepAlive: true,
      isBack: false,
    },
    path: '/recharge',
    name: 'recharge',
    component: resolve => require(['views/more/recharge'], resolve),
  },
  {
    meta: {
      title: '客服',
      keepAlive: true,
      isBack: false,
    },
    path: '/customService',
    name: 'customService',
    component: resolve => require(['views/more/customService'], resolve),
  },
  {
    meta: {
      title: '小说目录',
      keepAlive: true,
      isBack: false,
    },
    path: '/novelMenuList',
    name: 'novelMenuList',
    component: resolve => require(['views/more/novelMenuList'], resolve),
  },
  {
    meta: {
      title: '书架',
      keepAlive: true,
      isBack: false,
    },
    path: '/bookShelf',
    name: 'bookShelf',
    component: resolve => require(['views/more/bookShelf'], resolve),
  },
  {
    meta: {title: '分类列表', keepAlive: true, isBack: false,},
    path: '/assortmentList',
    name: 'assortmentList',
    component: resolve => require(['views/novel/assortmentList'], resolve),
  },
  {
    meta: {title: '我的', keepAlive: true, isBack: false,},
    path: '/mineList',
    name: 'mineList',
    component: resolve => require(['views/novel/mineList'], resolve),
  },
  {
    meta: {
      title: 'VIP',
      keepAlive: true,
      isBack: false,
    },
    path: '/supervip',
    name: 'supervip',
    component: resolve => require(['views/more/supervip'], resolve),
  },
  {
    meta: {
      title: '分享赚红包',
      keepAlive: true,
      isBack: false,
    },
    path: '/sharecon',
    name: 'sharecon',
    component: resolve => require(['views/more/sharecon'], resolve),
  },
];
