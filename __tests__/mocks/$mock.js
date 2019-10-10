/* eslint-disable */
module.exports = (client) => require('axios-mock-server')([
  {
    path: '/users/self',
    methods: require('./users/self')
  },
  {
    path: '/users',
    methods: require('./users/index')
  },
  {
    path: '/users/_userId',
    methods: require('./users/_userId')
  },
  {
    path: '/',
    methods: require('./index')
  }
], client)
