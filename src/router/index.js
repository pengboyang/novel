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
        meta: {title: '男生列表', keepAlive: false, isBack: false,},
        path: 'manList',
        name: 'manList',
        component: resolve => require(['views/novel/manList'], resolve),
      },
      {
        meta: {title: '女生列表', keepAlive: false, isBack: false,},
        path: 'womenList',
        name: 'womenList',
        component: resolve => require(['views/novel/womenList'], resolve),
      },
      {
        meta: {title: '分类列表', keepAlive: false, isBack: false,},
        path: 'assortmentList',
        name: 'assortmentList',
        component: resolve => require(['views/novel/assortmentList'], resolve),
      },
      {
        meta: {title: '我的', keepAlive: false, isBack: false,},
        path: 'mineList',
        name: 'mineList',
        component: resolve => require(['views/novel/mineList'], resolve),
      },
    ]
  },
  {
    meta: {
      title: '更多列表',
      keepAlive: false,
      isBack: false,
    },
    path: '/moreList',
    name: 'moreList',
    component: resolve => require(['views/more/moreList'], resolve),
  },
  {
    meta: {
      title: '小说详情',
      keepAlive: false,
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
      keepAlive: false,
      isBack: false,
    },
    path: '/recharge',
    name: 'recharge',
    component: resolve => require(['views/more/recharge'], resolve),
  },
  {
    meta: {
      title: '客服',
      keepAlive: false,
      isBack: false,
    },
    path: '/customService',
    name: 'customService',
    component: resolve => require(['views/more/customService'], resolve),
  },
  {
    meta: {
      title: '小说目录',
      keepAlive: false,
      isBack: false,
    },
    path: '/novelMenuList',
    name: 'novelMenuList',
    component: resolve => require(['views/more/novelMenuList'], resolve),
  },

];
