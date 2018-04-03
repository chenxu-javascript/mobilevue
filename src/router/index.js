import App from '../App'
export default [
  {
    path: '/',
    component: App, //顶层路由，对应index.htm
    children: [{
      path: '',
      component: require('./../pages/home.vue'),
      children: [
        {
          path: '/about',
          component: require('./../pages/about.vue')
        }
      ]
    }]
  }
];
