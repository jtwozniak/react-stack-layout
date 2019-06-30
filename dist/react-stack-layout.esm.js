import React from 'react'

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

export { ColumnStack, Container, RowStack, Stack }
//# sourceMappingURL=react-stack-layout.esm.js.map
