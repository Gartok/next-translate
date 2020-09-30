'use strict'
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = appendLangPrefix)
function appendLangPrefix(a, b) {
  return a && a.length
    ? '/'.concat([b, a.replace(/^\//, '')].filter(Boolean).join('/'))
    : a
}
