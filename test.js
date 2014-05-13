var createContext = require('./')
var test = require('tape')

document.body.innerHTML += 'open your console :)'

test('gl-context', function(t) {
  var canvas = document.createElement('canvas')
  var gl = createContext(canvas)

  t.ok(gl, 'creates a context')
  t.ok(gl && gl.FLOAT, 'context is most likely webgl')
  t.end()
})

test('render', function(t) {
  var canvas = document.createElement('canvas')
  var gl = createContext(canvas, render)
  var n = 0

  t.plan(2)

  function render(ctx) {
    if (!n++) t.equal(ctx, gl, 'gl context passed as first argument to render')
  }

  setTimeout(function() {
    t.ok(n, 'render was called at least once')
  }, 100)
})
