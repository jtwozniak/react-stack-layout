'use strict'

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = _interopDefault(require('react'))

var StackTypes

;(function(StackTypes) {
  StackTypes['Stack'] = 'Stack'
  StackTypes['RowStack'] = 'RowStack'
  StackTypes['ColumnStack'] = 'ColumnStack'
  StackTypes['Container'] = 'Container'
})(StackTypes || (StackTypes = {}))

var validateChildren = function validateChildren(children) {
  var containers = 0
  return children.every(function(child) {
    if (child.type.name === StackTypes.Container) {
      containers++
      return containers < 1
    }

    return StackTypes[child.type.name]
  })
}

var ColumnStack = function ColumnStack(_ref) {
  var children = _ref.children
  return React.createElement('div', null, children)
}
ColumnStack.displayName = StackTypes.ColumnStack

var Stack = function Stack(_ref) {
  var children = _ref.children
  var childrenArray = Array.isArray(children)
    ? children
    : children
    ? [children]
    : []
  console.log(validateChildren(childrenArray))
  return React.createElement(
    'div',
    {
      style: {
        display: 'inline-block',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
      },
    },
    children
  )
}
Stack.displayName = StackTypes.Stack

var RowStack = function RowStack(_ref) {
  var children = _ref.children
  return React.createElement('div', null, children)
}
RowStack.displayName = StackTypes.RowStack

var Container = function Container(_ref) {
  var isVisible = _ref.isVisible,
    Comp = _ref.component,
    children = _ref.children
  return isVisible
    ? React.createElement(
        'div',
        null,
        Comp ? React.createElement(Comp, null) : children
      )
    : null
}
Container.defaultProps = {
  isVisible: true,
}
Container.displayName = StackTypes.Container

exports.ColumnStack = ColumnStack
exports.Container = Container
exports.RowStack = RowStack
exports.Stack = Stack
//# sourceMappingURL=react-stack-layout.cjs.development.js.map
