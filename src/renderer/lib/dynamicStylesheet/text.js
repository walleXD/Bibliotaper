export default ({
  size,
  italic,
  weight,
  height,
  ta,
  color,
  decoration
}) => {
  return {
    fontStyle: italic ? 'italic' : 'normal',
    fontWeight: weight || 'normal',
    textAlign: ta || 'auto',
    ...color && { color },
    ...height && { lineHeight: height },
    ...ta && { textAlign: ta },
    ...decoration && { textDecorationLine: decoration },
    ...size && { fontSize: size }
  }
}
