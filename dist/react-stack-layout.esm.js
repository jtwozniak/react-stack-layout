import React from 'react'

var ST

;(function(ST) {
  ST['Tab'] = 'Tab'
  ST['Row'] = 'Row'
  ST['Column'] = 'Column'
  ST['Container'] = 'Container'
})(ST || (ST = {}))

var validateChildren = function validateChildren(children) {
  var containers = 0
  return children.every(function(child) {
    if (child.type.name === ST.Container) {
      containers++
      return containers < 1
    }

    return ST[child.type.name]
  })
}

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
