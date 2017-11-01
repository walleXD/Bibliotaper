export default ({
  align,
  justify,
  direction,
  wrap,
  fixed,
  right,
  left,
  top,
  bottom,
  z
}) => ({
  alignItems: align || 'stretch',
  justifyContent: justify || 'flex-start',
  flexDirection: direction || 'column',
  flexWrap: wrap ? 'wrap' : 'nowrap',
  position: fixed ? 'absolute' : 'relative',
  right: right || 0,
  left: left || 0,
  top: top || 0,
  bottom: bottom || 0,
  zIndex: z || 0
})
