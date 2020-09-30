'use strict'
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = DynamicNamespaces)
var _regenerator = _interopRequireDefault(
    require('@babel/runtime/regenerator')
  ),
  _asyncToGenerator2 = _interopRequireDefault(
    require('@babel/runtime/helpers/asyncToGenerator')
  ),
  _react = _interopRequireWildcard(require('react')),
  _I18nProvider = _interopRequireDefault(require('./I18nProvider')),
  _useTranslation2 = _interopRequireDefault(require('./useTranslation')),
  __jsx = _react['default'].createElement
function DynamicNamespaces(a) {
  function b() {
    return c.apply(this, arguments)
  }
  function c() {
    return (
      (c = (0, _asyncToGenerator2['default'])(
        _regenerator['default'].mark(function a() {
          var b
          return _regenerator['default'].wrap(function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  if ('function' == typeof d) {
                    a.next = 2
                    break
                  }
                  return a.abrupt('return')
                case 2:
                  return (
                    (a.next = 4),
                    Promise.all(
                      f.map(function (a) {
                        return d(j, a)
                      })
                    )
                  )
                case 4:
                  ;(b = a.sent), p(b), m(!0)
                case 7:
                case 'end':
                  return a.stop()
              }
          }, a)
        })
      )),
      c.apply(this, arguments)
    )
  }
  var d = a.dynamic,
    e = a.namespaces,
    f = void 0 === e ? [] : e,
    g = a.fallback,
    h = a.children,
    i = (0, _useTranslation2['default'])(),
    j = i.lang,
    k = (0, _react.useState)(!1),
    l = k[0],
    m = k[1],
    n = (0, _react.useState)({}),
    o = n[0],
    p = n[1]
  return (
    (0, _react.useEffect)(function () {
      b()
    }, []),
    l
      ? __jsx(
          _I18nProvider['default'],
          {
            lang: j,
            namespaces: f.reduce(function (a, b, c) {
              return (a[b] = o[c]), a
            }, {}),
          },
          h
        )
      : g || null
  )
}
