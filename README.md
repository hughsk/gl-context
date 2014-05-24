# gl-context [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A shorthand module for creating a new WebGL context and basic animation loop.

Normally I'd recommend [gl-now](http://github.com/gl-modules/gl-now), but this
is for those cases when you want more flexibility.

## Usage

[![gl-context](https://nodei.co/npm/gl-context.png)](https://nodei.co/npm-dl/gl-context)

### gl = createContext(canvas, [opts], [render])

Creates and returns a new WebGL context attached to `canvas`. Optionally, you
can pass in a `render` function and this will be called once each frame using
`requestAnimationFrame`.

Optionally, you can pass `opts` to the `getContext` method, e.g.

``` javascript
var canvas = document.createElement('canvas')

var gl = createContext(canvas, {
  premultipliedAlpha: false
}, function render() {
  // render loop...
})
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/gl-context/blob/master/LICENSE.md) for details.
