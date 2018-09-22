const getClassName = (prefix, name) => (
  `${prefix}${!!name ? `-${name}` : ''}`
);

const getClassNames = (prefix, name, layerPosition) => (
  `${getClassName(prefix)}
  ${!!name ? getClassName(prefix, name) : ''}
  ${!!layerPosition ? getClassName(prefix, layerPosition) : ''}`
);

export {
  getClassNames
}
