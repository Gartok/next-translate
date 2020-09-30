'use strict'
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0)
var _internals = _interopRequireDefault(require('./_helpers/_internals')),
  _appendLangPrefix = _interopRequireDefault(
    require('./_helpers/appendLangPrefix')
  ),
  _default = function (a, b) {
    var c =
        'lang-path' !== _internals['default'].defaultLangRedirect &&
        _internals['default'].defaultLanguage === b,
      d =
        _internals['default'].isStaticMode && !c
          ? (0, _appendLangPrefix['default'])(a, b)
          : a
    return _internals['default'].isStaticMode
      ? d
      : d.includes('?')
      ? ''.concat(d, '&lang=').concat(b)
      : ''.concat(d, '?lang=').concat(b)
  }
exports['default'] = _default
