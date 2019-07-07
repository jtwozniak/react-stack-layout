import React from 'react'
import warning from 'tiny-warning'

var ST

;(function(ST) {
  ST['Tab'] = 'Tab'
  ST['Row'] = 'Row'
  ST['Column'] = 'Column'
})(ST || (ST = {}))

var ComponentsNames

;(function(ComponentsNames) {
  ComponentsNames['Stack'] = 'Stack'
  ComponentsNames['Container'] = 'Container'
})(ComponentsNames || (ComponentsNames = {}))

var ComponentNamesKeys =
  /*#__PURE__*/
  Object.keys(ComponentsNames)

var validateChildren = function validateChildren(children) {
  process.env.NODE_ENV !== 'production'
    ? warning(
        children.some(function(child) {
          return !ComponentNamesKeys.includes(child.type.name)
        }),
        'Invalid Stack configuration'
      )
    : void 0
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

export { Container, ST, Stack }
//# sourceMappingURL=react-stack-layout.esm.js.map
