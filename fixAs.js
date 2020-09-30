'use strict'
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0)
var _internals = _interopRequireDefault(require('./_helpers/_internals')),
  _appendLangPrefix = _interopRequireDefault(
    require('./_helpers/appendLangPrefix')
  ),
  _default = function (a, b, c) {
    var d =
        'lang-path' !== _internals['default'].defaultLangRedirect &&
        _internals['default'].defaultLanguage === c,
      e = _internals['default'].isStaticMode ? void 0 : b
    return d ? a || e : (0, _appendLangPrefix['default'])(a || e, c)
  }
exports['default'] = _default
