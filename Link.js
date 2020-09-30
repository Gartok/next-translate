'use strict'
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = Link)
var _extends2 = _interopRequireDefault(
    require('@babel/runtime/helpers/extends')
  ),
  _objectWithoutProperties2 = _interopRequireDefault(
    require('@babel/runtime/helpers/objectWithoutProperties')
  ),
  _react = _interopRequireWildcard(require('react')),
  _link = _interopRequireDefault(require('next/link')),
  _useTranslation = _interopRequireDefault(require('./useTranslation')),
  _fixAs = _interopRequireDefault(require('./fixAs')),
  _fixHref = _interopRequireDefault(require('./fixHref')),
  __jsx = _react['default'].createElement
function Link(a) {
  var b = a.children,
    c = a.href,
    d = a.as,
    e = a.lang,
    f = a.noLang,
    g = (0, _objectWithoutProperties2['default'])(a, [
      'children',
      'href',
      'as',
      'lang',
      'noLang',
    ]),
    h = (0, _useTranslation['default'])(),
    i = e || h.lang,
    j = _react.Children.only('string' == typeof b ? __jsx('a', null, b) : b)
  return __jsx(
    _link['default'],
    (0, _extends2['default'])(
      {
        href: f ? c : (0, _fixHref['default'])(c, i),
        as: f ? d : (0, _fixAs['default'])(d, c, i),
      },
      g
    ),
    _react['default'].cloneElement(j, {
      onClick: function (a) {
        var b = document.querySelector('html')
        b && (b.lang = i),
          'function' == typeof j.props.onClick && j.props.onClick(a)
      },
    })
  )
}
