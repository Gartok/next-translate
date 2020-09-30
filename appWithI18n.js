'use strict'
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = appWithI18n)
var _regenerator = _interopRequireDefault(
    require('@babel/runtime/regenerator')
  ),
  _defineProperty2 = _interopRequireDefault(
    require('@babel/runtime/helpers/defineProperty')
  ),
  _asyncToGenerator2 = _interopRequireDefault(
    require('@babel/runtime/helpers/asyncToGenerator')
  ),
  _react = _interopRequireDefault(require('react')),
  _app = _interopRequireDefault(require('next/app')),
  _I18nProvider = _interopRequireDefault(require('./I18nProvider')),
  _getDefaultLang = _interopRequireDefault(
    require('./_helpers/getDefaultLang')
  ),
  _getPageNamespaces = _interopRequireDefault(
    require('./_helpers/getPageNamespaces')
  ),
  _startsWithLang = _interopRequireDefault(
    require('./_helpers/startsWithLang')
  ),
  __jsx = _react['default'].createElement
function ownKeys(a, b) {
  var c = Object.keys(a)
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a)
    b &&
      (d = d.filter(function (b) {
        return Object.getOwnPropertyDescriptor(a, b).enumerable
      })),
      c.push.apply(c, d)
  }
  return c
}
function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++)
    (b = null == arguments[c] ? {} : arguments[c]),
      c % 2
        ? ownKeys(Object(b), !0).forEach(function (c) {
            ;(0, _defineProperty2['default'])(a, c, b[c])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
        : ownKeys(Object(b)).forEach(function (c) {
            Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c))
          })
  return a
}
function getLang(a, b) {
  var c = a.req,
    d = a.asPath,
    e = void 0 === d ? '' : d
  return c
    ? c.query.lang || b.defaultLanguage
    : (0, _startsWithLang['default'])(e, b.allLanguages)
    ? e.split('/')[1]
    : b.defaultLanguage
}
function removeTrailingSlash() {
  var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : ''
  return 1 < a.length && a.endsWith('/') ? a.slice(0, -1) : a
}
function appWithI18n(a) {
  function b(b) {
    var d = b.lang,
      e = b.namespaces,
      f = b.defaultLanguage,
      g = c.defaultLangRedirect
    return __jsx(
      _I18nProvider['default'],
      {
        lang: d,
        namespaces: e,
        internals: { defaultLangRedirect: g, defaultLanguage: f },
      },
      __jsx(a, b)
    )
  }
  var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
  return (
    (b.getInitialProps = (function () {
      var b = (0, _asyncToGenerator2['default'])(
        _regenerator['default'].mark(function b(d) {
          var e, f, g, h, i, j, k, l, m
          return _regenerator['default'].wrap(function (b) {
            for (;;)
              switch ((b.prev = b.next)) {
                case 0:
                  if (
                    ((e = d.Component),
                    (f = d.ctx),
                    (g = f.req
                      ? (0, _getDefaultLang['default'])(f.req, c)
                      : __NEXT_DATA__.props.defaultLanguage),
                    (h = getLang(
                      f,
                      _objectSpread(
                        _objectSpread({}, c),
                        {},
                        { defaultLanguage: g }
                      )
                    )),
                    (i = a.getInitialProps || _app['default'].getInitialProps),
                    (j = { pageProps: {} }),
                    !i)
                  ) {
                    b.next = 12
                    break
                  }
                  return (
                    (b.next = 8),
                    i(_objectSpread(_objectSpread({}, d), {}, { lang: h }))
                  )
                case 8:
                  if (((b.t0 = b.sent), b.t0)) {
                    b.next = 11
                    break
                  }
                  b.t0 = {}
                case 11:
                  j = b.t0
                case 12:
                  return (
                    (k = removeTrailingSlash(f.pathname)),
                    (b.next = 15),
                    (0, _getPageNamespaces['default'])(c, k, f)
                  )
                case 15:
                  return (
                    (l = b.sent),
                    (b.next = 18),
                    Promise.all(
                      l.map(function (a) {
                        return 'function' == typeof c.loadLocaleFrom
                          ? c.loadLocaleFrom(h, a)
                          : Promise.resolve([])
                      })
                    )['catch'](function () {})
                  )
                case 18:
                  if (((b.t1 = b.sent), b.t1)) {
                    b.next = 21
                    break
                  }
                  b.t1 = []
                case 21:
                  return (
                    (m = b.t1),
                    b.abrupt(
                      'return',
                      _objectSpread(
                        _objectSpread({}, j),
                        {},
                        {
                          lang: h,
                          defaultLanguage: g,
                          namespaces: l.reduce(function (a, b, c) {
                            return (a[b] = m[c]), a
                          }, {}),
                        }
                      )
                    )
                  )
                case 23:
                case 'end':
                  return b.stop()
              }
          }, b)
        })
      )
      return function () {
        return b.apply(this, arguments)
      }
    })()),
    b
  )
}
