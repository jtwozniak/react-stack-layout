'use strict'

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = _interopDefault(require('react'))

var ColumnStack = function ColumnStack(_ref) {
  var children = _ref.children
  return React.createElement('div', null, children)
}

var Stack = function Stack(_ref) {
  var children = _ref.children
  return React.createElement('div', null, children)
}

var RowStack = function RowStack(_ref) {
  var children = _ref.children
  return React.createElement('div', null, children)
}

var Container = function Container(_ref) {
  var isVisible = _ref.isVisible,
    Comp = _ref.component,
    props = _ref.props
  return isVisible ? React.createElement(Comp, Object.assign({}, props)) : null
}

exports.ColumnStack = ColumnStack
exports.Container = Container
exports.RowStack = RowStack
exports.Stack = Stack
//# sourceMappingURL=react-stack-layout.cjs.development.js.map
