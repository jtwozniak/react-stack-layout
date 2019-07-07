'use strict'

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = _interopDefault(require('react'))
var warning = _interopDefault(require('tiny-warning'))

;(function(ST) {
  ST['Tab'] = 'Tab'
  ST['Row'] = 'Row'
  ST['Column'] = 'Column'
})(exports.ST || (exports.ST = {}))

var ComponentsNames

;(function(ComponentsNames) {
  ComponentsNames['Stack'] = 'Stack'
  ComponentsNames['Container'] = 'Container'
})(ComponentsNames || (ComponentsNames = {}))

var ComponentNamesKeys =
  /*#__PURE__*/
  Object.keys(ComponentsNames)

var validateChildren = function validateChildren(children) {
  warning(
    children.some(function(child) {
      return !ComponentNamesKeys.includes(child.type.name)
    }),
    'Invalid Stack configuration'
  )
}

var Stack = function Stack(_ref) {
  var children = _ref.children
  var childrenArray = Array.isArray(children)
    ? children
    : children
    ? [children]
    : []
  validateChildren(childrenArray)
  return React.createElement(
    'div',
    {
      style: {
        display: 'inline-block',
        width: '100%',
        height: '100%',
      },
    },
    children
  )
}
Stack.displayName = 'Stack'

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
Container.displayName = 'Container'

exports.Container = Container
exports.Stack = Stack
//# sourceMappingURL=react-stack-layout.cjs.development.js.map
