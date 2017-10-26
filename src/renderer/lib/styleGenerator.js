export const flexStyleGenerator = ({
  align,
  justify,
  direction,
  wrap
}) => {
  return {
    alignItems: align || 'stretch',
    justifyContent: justify || 'flex-start',
    flexDirection: direction || 'column',
    flexWrap: wrap ? 'wrap' : 'nowrap'
  }
}

export const marginStyleGenerator = (props) => {
  if (Object.keys(props).length < 1) return {}
  const marginMap = {
    ml: 'marginLeft',
    mr: 'marginRight',
    mt: 'marginTop',
    mb: 'marginBottom',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    ma: 'margin'
  }

  return Object.assign(...Object.entries(props).map(([key, value]) => {
    if (!marginMap[key]) return {}
    return { [marginMap[key]]: value }
  }))
}

export const paddingStyleGenerator = props => {
  if (Object.keys(props).length < 1) return {}
  const paddingMap = {
    pl: 'paddingLeft',
    pr: 'paddingRight',
    pt: 'paddingTop',
    pb: 'paddingBottom',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    pa: 'padding'
  }

  return Object.assign(
    ...Object.entries(props).map(([key, value]) => {
      if (!paddingMap[key]) return {}
      return { [paddingMap[key]]: value }
    })
  )
}
