'use strict'
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = startsWithLang)
function startsWithLang(a, b) {
  return b.some(function (b) {
    return new RegExp('(^/'.concat(b, '/)|(^/').concat(b, '$)')).test(a)
  })
}
