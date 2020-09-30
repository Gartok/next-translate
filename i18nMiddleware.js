'use strict'
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = i18nMiddleware)
var _slicedToArray2 = _interopRequireDefault(
    require('@babel/runtime/helpers/slicedToArray')
  ),
  _defineProperty2 = _interopRequireDefault(
    require('@babel/runtime/helpers/defineProperty')
  ),
  _getDefaultLang = _interopRequireDefault(
    require('./_helpers/getDefaultLang')
  ),
  _startsWithLang = _interopRequireDefault(require('./_helpers/startsWithLang'))
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
function i18nMiddleware() {
  var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
    b = a.ignoreRoutes,
    c =
      void 0 === b
        ? [
            '/_next/',
            '/static/',
            '/favicon.ico',
            '/manifest.json',
            '/robots.txt',
          ]
        : b,
    d = a.allLanguages,
    e = void 0 === d ? [] : d,
    f = a.defaultLangRedirect,
    g = a.redirectToDefaultLang
  return (
    void 0 !== g &&
      ((f = g ? 'lang-path' : void 0),
      console.log(
        '\x1B[33m%s\x1B[0m',
        '\uD83D\uDEA8 redirectToDefaultLang is deprecated and will be removed in future major versions. Use defaultLangRedirect instead. Docs: https://github.com/vinissimus/next-translate/blob/master/README.md#4-configuration'
      )),
    function (b, d, e) {
      var g = c.some(function (a) {
          return b.url.startsWith(a)
        }),
        h = (0, _getDefaultLang['default'])(b, a) || 'en'
      if (g) return e()
      if (!(0, _startsWithLang['default'])(b.url, a.allLanguages))
        return 'lang-path' === f
          ? void d.redirect(301, '/'.concat(h).concat(b.url))
          : ((b.lang = h),
            (b.query = _objectSpread(
              _objectSpread({}, b.query),
              {},
              { lang: h }
            )),
            e())
      var i = b.url.split('/')[1]
      if (
        ((b.url = b.url.replace('/'.concat(i), '') || '/'),
        'root' === f && i === h)
      )
        return void d.redirect(301, b.url)
      var j = c.filter(function (a) {
          return b.url.startsWith(a)
        }),
        k = (0, _slicedToArray2['default'])(j, 1),
        l = k[0]
      return l
        ? void d.redirect(301, l)
        : ((b.lang = i),
          (b.query = _objectSpread(
            _objectSpread({}, b.query),
            {},
            { lang: i }
          )),
          e())
    }
  )
}
