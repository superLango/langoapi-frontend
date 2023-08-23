export default [

  {name: '主页', path: '/', icon: 'smile', component: './Index'},
  {name: '查看接口', path: '/interface_info/:id', icon: 'smile', component: './InterfaceInfo',hideInMenu: true},
  {
    path: '/user',
    layout: false,
    routes: [{name: '登录',path: '/user/login', component: './User/Login'}],
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {name: '接口管理',icon: 'table', path: '/admin/interface_info', component: './Admin/InterfaceInfo'},
    ],
  },
  // {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},
];
