'use strict'
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = documentLang)
var _slicedToArray2 = _interopRequireDefault(
    require('@babel/runtime/helpers/slicedToArray')
  ),
  path = require('path'),
  fs = require('fs')
function documentLang(a, b) {
  var c = a.__NEXT_DATA__
  if (!b) {
    var i = path.join(process.cwd(), 'i18n.json')
    b = JSON.parse(fs.readFileSync(i))
  }
  var d = c.page,
    e = d.split('/'),
    f = (0, _slicedToArray2['default'])(e, 2),
    g = f[1],
    h = b.allLanguages.find(function (a) {
      return a === g
    })
  return h || b.defaultLanguage
}
