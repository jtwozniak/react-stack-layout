
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-stack-layout.cjs.production.min.js')
} else {
  module.exports = require('./react-stack-layout.cjs.development.js')
}
