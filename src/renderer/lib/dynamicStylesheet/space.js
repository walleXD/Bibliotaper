const REG = /^[mp][trblxya]?$/

export default props => {
  const propsKeys = Object.keys(props)

  if (propsKeys.length < 1) return {}

  const styleKeys = propsKeys.filter(styleKey => REG.test(styleKey))

  const styles = Object.assign(...styleKeys.map(styleKey => {
    const styleVal = props[styleKey]
    const styleProperty = getProperties(styleKey)
    return {
      [styleProperty]: styleVal
    }
  }))

  console.log(styles)
  return styles
}

const getProperties = key => {
  const [ a, b ] = key.split('')
  const prop = properties[a]
  const dirs = directions[b] || [ '' ]
  return dirs.map(dir => prop + dir)
}

const properties = {
  m: 'margin',
  p: 'padding'
}

const directions = {
  t: [ 'Top' ],
  r: [ 'Right' ],
  b: [ 'Bottom' ],
  l: [ 'Left' ],
  x: [ 'Left', 'Right' ],
  y: [ 'Top', 'Bottom' ]
}
