'use strict'
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = getPageNamespaces)
var _toConsumableArray2 = _interopRequireDefault(
    require('@babel/runtime/helpers/toConsumableArray')
  ),
  _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator')),
  _asyncToGenerator2 = _interopRequireDefault(
    require('@babel/runtime/helpers/asyncToGenerator')
  )
function flat(b) {
  return b.reduce(function (a, b) {
    return a.concat(b)
  }, [])
}
function getPageNamespaces() {
  return _getPageNamespaces.apply(this, arguments)
}
function _getPageNamespaces() {
  return (
    (_getPageNamespaces = (0, _asyncToGenerator2['default'])(
      _regenerator['default'].mark(function a(b, c, d) {
        var e, f, g, h, i
        return _regenerator['default'].wrap(function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                return (
                  (e = b.pages),
                  (f = void 0 === e ? {} : e),
                  (g = 'rgx:'),
                  (h = (function () {
                    var a = (0, _asyncToGenerator2['default'])(
                      _regenerator['default'].mark(function a(b) {
                        return _regenerator['default'].wrap(function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return a.abrupt(
                                  'return',
                                  'function' == typeof b ? b(d) : b || []
                                )
                              case 1:
                              case 'end':
                                return a.stop()
                            }
                        }, a)
                      })
                    )
                    return function () {
                      return a.apply(this, arguments)
                    }
                  })()),
                  (i = Object.keys(f).reduce(function (a, b) {
                    return (
                      b.substring(0, g.length) === g &&
                        new RegExp(b.replace(g, '')).test(c) &&
                        a.push(h(f[b])),
                      a
                    )
                  }, [])),
                  (a.t0 = []),
                  (a.t1 = _toConsumableArray2['default']),
                  (a.next = 8),
                  h(f['*'])
                )
              case 8:
                return (
                  (a.t2 = a.sent),
                  (a.t3 = (0, a.t1)(a.t2)),
                  (a.t4 = _toConsumableArray2['default']),
                  (a.next = 13),
                  h(f[c])
                )
              case 13:
                return (
                  (a.t5 = a.sent),
                  (a.t6 = (0, a.t4)(a.t5)),
                  (a.t7 = _toConsumableArray2['default']),
                  (a.t8 = flat),
                  (a.next = 19),
                  Promise.all(i)
                )
              case 19:
                return (
                  (a.t9 = a.sent),
                  (a.t10 = (0, a.t8)(a.t9)),
                  (a.t11 = (0, a.t7)(a.t10)),
                  a.abrupt('return', a.t0.concat.call(a.t0, a.t3, a.t6, a.t11))
                )
              case 23:
              case 'end':
                return a.stop()
            }
        }, a)
      })
    )),
    _getPageNamespaces.apply(this, arguments)
  )
}
