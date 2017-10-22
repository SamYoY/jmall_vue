export default [
  {
    path: 'retrieve-password',
    meta: {
      auth: true,
    },
    component: (resolve) => require(['../components/user/retrievePassword'], resolve)
  },
  {
    path: 'register',
    meta: {
      auth: true,
    },
    component: (resolve) => require(['../components/user/register.vue'], resolve)
  }
]
