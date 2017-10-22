export default [
  {
    path: 'manage',
    meta: {
      auth: true
    },
    component: (resolve) => require(['../components/admin/manage.vue'], resolve)
  }
]
