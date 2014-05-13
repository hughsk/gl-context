var raf = require('raf-component')

module.exports = createContext

function createContext(canvas, render) {
  var gl = (
    canvas.getContext('webgl') ||
    canvas.getContext('webgl-experimental')
  )

  if (!gl) {
    throw new Error('Unable to initialize WebGL')
  }

  if (render) raf(tick)

  return gl

  function tick() {
    render(gl)
    raf(tick)
  }
}
