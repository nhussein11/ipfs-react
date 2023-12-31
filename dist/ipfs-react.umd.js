;(function (y, _) {
  typeof exports == 'object' && typeof module < 'u'
    ? _(exports, require('react'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'react'], _)
    : ((y = typeof globalThis < 'u' ? globalThis : y || self), _((y['ipfs-react'] = {}), y.React))
})(this, function (y, _) {
  'use strict'
  const cr = ''
  var U = { exports: {} },
    w = {}
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Q
  function Ce() {
    if (Q) return w
    Q = 1
    var j = _,
      k = Symbol.for('react.element'),
      B = Symbol.for('react.fragment'),
      T = Object.prototype.hasOwnProperty,
      I = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      W = { key: !0, ref: !0, __self: !0, __source: !0 }
    function D(g, l, O) {
      var v,
        b = {},
        E = null,
        Y = null
      O !== void 0 && (E = '' + O), l.key !== void 0 && (E = '' + l.key), l.ref !== void 0 && (Y = l.ref)
      for (v in l) T.call(l, v) && !W.hasOwnProperty(v) && (b[v] = l[v])
      if (g && g.defaultProps) for (v in ((l = g.defaultProps), l)) b[v] === void 0 && (b[v] = l[v])
      return { $$typeof: k, type: g, key: E, ref: Y, props: b, _owner: I.current }
    }
    return (w.Fragment = B), (w.jsx = D), (w.jsxs = D), w
  }
  var x = {}
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ee
  function Pe() {
    return (
      ee ||
        ((ee = 1),
        process.env.NODE_ENV !== 'production' &&
          (function () {
            var j = _,
              k = Symbol.for('react.element'),
              B = Symbol.for('react.portal'),
              T = Symbol.for('react.fragment'),
              I = Symbol.for('react.strict_mode'),
              W = Symbol.for('react.profiler'),
              D = Symbol.for('react.provider'),
              g = Symbol.for('react.context'),
              l = Symbol.for('react.forward_ref'),
              O = Symbol.for('react.suspense'),
              v = Symbol.for('react.suspense_list'),
              b = Symbol.for('react.memo'),
              E = Symbol.for('react.lazy'),
              Y = Symbol.for('react.offscreen'),
              re = Symbol.iterator,
              je = '@@iterator'
            function ke(e) {
              if (e === null || typeof e != 'object') return null
              var r = (re && e[re]) || e[je]
              return typeof r == 'function' ? r : null
            }
            var S = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            function c(e) {
              {
                for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                  t[n - 1] = arguments[n]
                De('error', e, t)
              }
            }
            function De(e, r, t) {
              {
                var n = S.ReactDebugCurrentFrame,
                  i = n.getStackAddendum()
                i !== '' && ((r += '%s'), (t = t.concat([i])))
                var u = t.map(function (o) {
                  return String(o)
                })
                u.unshift('Warning: ' + r), Function.prototype.apply.call(console[e], console, u)
              }
            }
            var Fe = !1,
              Ae = !1,
              Ie = !1,
              We = !1,
              Ye = !1,
              te
            te = Symbol.for('react.module.reference')
            function $e(e) {
              return !!(
                typeof e == 'string' ||
                typeof e == 'function' ||
                e === T ||
                e === W ||
                Ye ||
                e === I ||
                e === O ||
                e === v ||
                We ||
                e === Y ||
                Fe ||
                Ae ||
                Ie ||
                (typeof e == 'object' &&
                  e !== null &&
                  (e.$$typeof === E ||
                    e.$$typeof === b ||
                    e.$$typeof === D ||
                    e.$$typeof === g ||
                    e.$$typeof === l ||
                    e.$$typeof === te ||
                    e.getModuleId !== void 0))
              )
            }
            function Ne(e, r, t) {
              var n = e.displayName
              if (n) return n
              var i = r.displayName || r.name || ''
              return i !== '' ? t + '(' + i + ')' : t
            }
            function ne(e) {
              return e.displayName || 'Context'
            }
            function h(e) {
              if (e == null) return null
              if (
                (typeof e.tag == 'number' &&
                  c(
                    'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                  ),
                typeof e == 'function')
              )
                return e.displayName || e.name || null
              if (typeof e == 'string') return e
              switch (e) {
                case T:
                  return 'Fragment'
                case B:
                  return 'Portal'
                case W:
                  return 'Profiler'
                case I:
                  return 'StrictMode'
                case O:
                  return 'Suspense'
                case v:
                  return 'SuspenseList'
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case g:
                    var r = e
                    return ne(r) + '.Consumer'
                  case D:
                    var t = e
                    return ne(t._context) + '.Provider'
                  case l:
                    return Ne(e, e.render, 'ForwardRef')
                  case b:
                    var n = e.displayName || null
                    return n !== null ? n : h(e.type) || 'Memo'
                  case E: {
                    var i = e,
                      u = i._payload,
                      o = i._init
                    try {
                      return h(o(u))
                    } catch {
                      return null
                    }
                  }
                }
              return null
            }
            var R = Object.assign,
              F = 0,
              ae,
              oe,
              ie,
              ue,
              se,
              fe,
              le
            function ce() {}
            ce.__reactDisabledLog = !0
            function Le() {
              {
                if (F === 0) {
                  ;(ae = console.log),
                    (oe = console.info),
                    (ie = console.warn),
                    (ue = console.error),
                    (se = console.group),
                    (fe = console.groupCollapsed),
                    (le = console.groupEnd)
                  var e = { configurable: !0, enumerable: !0, value: ce, writable: !0 }
                  Object.defineProperties(console, {
                    info: e,
                    log: e,
                    warn: e,
                    error: e,
                    group: e,
                    groupCollapsed: e,
                    groupEnd: e,
                  })
                }
                F++
              }
            }
            function Me() {
              {
                if ((F--, F === 0)) {
                  var e = { configurable: !0, enumerable: !0, writable: !0 }
                  Object.defineProperties(console, {
                    log: R({}, e, { value: ae }),
                    info: R({}, e, { value: oe }),
                    warn: R({}, e, { value: ie }),
                    error: R({}, e, { value: ue }),
                    group: R({}, e, { value: se }),
                    groupCollapsed: R({}, e, { value: fe }),
                    groupEnd: R({}, e, { value: le }),
                  })
                }
                F < 0 && c('disabledDepth fell below zero. This is a bug in React. Please file an issue.')
              }
            }
            var q = S.ReactCurrentDispatcher,
              J
            function $(e, r, t) {
              {
                if (J === void 0)
                  try {
                    throw Error()
                  } catch (i) {
                    var n = i.stack.trim().match(/\n( *(at )?)/)
                    J = (n && n[1]) || ''
                  }
                return (
                  `
` +
                  J +
                  e
                )
              }
            }
            var G = !1,
              N
            {
              var Ve = typeof WeakMap == 'function' ? WeakMap : Map
              N = new Ve()
            }
            function de(e, r) {
              if (!e || G) return ''
              {
                var t = N.get(e)
                if (t !== void 0) return t
              }
              var n
              G = !0
              var i = Error.prepareStackTrace
              Error.prepareStackTrace = void 0
              var u
              ;(u = q.current), (q.current = null), Le()
              try {
                if (r) {
                  var o = function () {
                    throw Error()
                  }
                  if (
                    (Object.defineProperty(o.prototype, 'props', {
                      set: function () {
                        throw Error()
                      },
                    }),
                    typeof Reflect == 'object' && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(o, [])
                    } catch (m) {
                      n = m
                    }
                    Reflect.construct(e, [], o)
                  } else {
                    try {
                      o.call()
                    } catch (m) {
                      n = m
                    }
                    e.call(o.prototype)
                  }
                } else {
                  try {
                    throw Error()
                  } catch (m) {
                    n = m
                  }
                  e()
                }
              } catch (m) {
                if (m && n && typeof m.stack == 'string') {
                  for (
                    var a = m.stack.split(`
`),
                      d = n.stack.split(`
`),
                      s = a.length - 1,
                      f = d.length - 1;
                    s >= 1 && f >= 0 && a[s] !== d[f];

                  )
                    f--
                  for (; s >= 1 && f >= 0; s--, f--)
                    if (a[s] !== d[f]) {
                      if (s !== 1 || f !== 1)
                        do
                          if ((s--, f--, f < 0 || a[s] !== d[f])) {
                            var p =
                              `
` + a[s].replace(' at new ', ' at ')
                            return (
                              e.displayName &&
                                p.includes('<anonymous>') &&
                                (p = p.replace('<anonymous>', e.displayName)),
                              typeof e == 'function' && N.set(e, p),
                              p
                            )
                          }
                        while (s >= 1 && f >= 0)
                      break
                    }
                }
              } finally {
                ;(G = !1), (q.current = u), Me(), (Error.prepareStackTrace = i)
              }
              var P = e ? e.displayName || e.name : '',
                Se = P ? $(P) : ''
              return typeof e == 'function' && N.set(e, Se), Se
            }
            function Ue(e, r, t) {
              return de(e, !1)
            }
            function Be(e) {
              var r = e.prototype
              return !!(r && r.isReactComponent)
            }
            function L(e, r, t) {
              if (e == null) return ''
              if (typeof e == 'function') return de(e, Be(e))
              if (typeof e == 'string') return $(e)
              switch (e) {
                case O:
                  return $('Suspense')
                case v:
                  return $('SuspenseList')
              }
              if (typeof e == 'object')
                switch (e.$$typeof) {
                  case l:
                    return Ue(e.render)
                  case b:
                    return L(e.type, r, t)
                  case E: {
                    var n = e,
                      i = n._payload,
                      u = n._init
                    try {
                      return L(u(i), r, t)
                    } catch {}
                  }
                }
              return ''
            }
            var M = Object.prototype.hasOwnProperty,
              ve = {},
              pe = S.ReactDebugCurrentFrame
            function V(e) {
              if (e) {
                var r = e._owner,
                  t = L(e.type, e._source, r ? r.type : null)
                pe.setExtraStackFrame(t)
              } else pe.setExtraStackFrame(null)
            }
            function qe(e, r, t, n, i) {
              {
                var u = Function.call.bind(M)
                for (var o in e)
                  if (u(e, o)) {
                    var a = void 0
                    try {
                      if (typeof e[o] != 'function') {
                        var d = Error(
                          (n || 'React class') +
                            ': ' +
                            t +
                            ' type `' +
                            o +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof e[o] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                        )
                        throw ((d.name = 'Invariant Violation'), d)
                      }
                      a = e[o](r, o, n, t, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED')
                    } catch (s) {
                      a = s
                    }
                    a &&
                      !(a instanceof Error) &&
                      (V(i),
                      c(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        n || 'React class',
                        t,
                        o,
                        typeof a,
                      ),
                      V(null)),
                      a instanceof Error &&
                        !(a.message in ve) &&
                        ((ve[a.message] = !0), V(i), c('Failed %s type: %s', t, a.message), V(null))
                  }
              }
            }
            var Je = Array.isArray
            function z(e) {
              return Je(e)
            }
            function Ge(e) {
              {
                var r = typeof Symbol == 'function' && Symbol.toStringTag,
                  t = (r && e[Symbol.toStringTag]) || e.constructor.name || 'Object'
                return t
              }
            }
            function ze(e) {
              try {
                return be(e), !1
              } catch {
                return !0
              }
            }
            function be(e) {
              return '' + e
            }
            function he(e) {
              if (ze(e))
                return (
                  c(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    Ge(e),
                  ),
                  be(e)
                )
            }
            var A = S.ReactCurrentOwner,
              Ke = { key: !0, ref: !0, __self: !0, __source: !0 },
              me,
              ye,
              K
            K = {}
            function He(e) {
              if (M.call(e, 'ref')) {
                var r = Object.getOwnPropertyDescriptor(e, 'ref').get
                if (r && r.isReactWarning) return !1
              }
              return e.ref !== void 0
            }
            function Xe(e) {
              if (M.call(e, 'key')) {
                var r = Object.getOwnPropertyDescriptor(e, 'key').get
                if (r && r.isReactWarning) return !1
              }
              return e.key !== void 0
            }
            function Ze(e, r) {
              if (typeof e.ref == 'string' && A.current && r && A.current.stateNode !== r) {
                var t = h(A.current.type)
                K[t] ||
                  (c(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    h(A.current.type),
                    e.ref,
                  ),
                  (K[t] = !0))
              }
            }
            function Qe(e, r) {
              {
                var t = function () {
                  me ||
                    ((me = !0),
                    c(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ))
                }
                ;(t.isReactWarning = !0), Object.defineProperty(e, 'key', { get: t, configurable: !0 })
              }
            }
            function er(e, r) {
              {
                var t = function () {
                  ye ||
                    ((ye = !0),
                    c(
                      '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      r,
                    ))
                }
                ;(t.isReactWarning = !0), Object.defineProperty(e, 'ref', { get: t, configurable: !0 })
              }
            }
            var rr = function (e, r, t, n, i, u, o) {
              var a = { $$typeof: k, type: e, key: r, ref: t, props: o, _owner: u }
              return (
                (a._store = {}),
                Object.defineProperty(a._store, 'validated', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: !1,
                }),
                Object.defineProperty(a, '_self', { configurable: !1, enumerable: !1, writable: !1, value: n }),
                Object.defineProperty(a, '_source', { configurable: !1, enumerable: !1, writable: !1, value: i }),
                Object.freeze && (Object.freeze(a.props), Object.freeze(a)),
                a
              )
            }
            function tr(e, r, t, n, i) {
              {
                var u,
                  o = {},
                  a = null,
                  d = null
                t !== void 0 && (he(t), (a = '' + t)),
                  Xe(r) && (he(r.key), (a = '' + r.key)),
                  He(r) && ((d = r.ref), Ze(r, i))
                for (u in r) M.call(r, u) && !Ke.hasOwnProperty(u) && (o[u] = r[u])
                if (e && e.defaultProps) {
                  var s = e.defaultProps
                  for (u in s) o[u] === void 0 && (o[u] = s[u])
                }
                if (a || d) {
                  var f = typeof e == 'function' ? e.displayName || e.name || 'Unknown' : e
                  a && Qe(o, f), d && er(o, f)
                }
                return rr(e, a, d, i, n, A.current, o)
              }
            }
            var H = S.ReactCurrentOwner,
              ge = S.ReactDebugCurrentFrame
            function C(e) {
              if (e) {
                var r = e._owner,
                  t = L(e.type, e._source, r ? r.type : null)
                ge.setExtraStackFrame(t)
              } else ge.setExtraStackFrame(null)
            }
            var X
            X = !1
            function Z(e) {
              return typeof e == 'object' && e !== null && e.$$typeof === k
            }
            function Ee() {
              {
                if (H.current) {
                  var e = h(H.current.type)
                  if (e)
                    return (
                      `

Check the render method of \`` +
                      e +
                      '`.'
                    )
                }
                return ''
              }
            }
            function nr(e) {
              {
                if (e !== void 0) {
                  var r = e.fileName.replace(/^.*[\\\/]/, ''),
                    t = e.lineNumber
                  return (
                    `

Check your code at ` +
                    r +
                    ':' +
                    t +
                    '.'
                  )
                }
                return ''
              }
            }
            var Re = {}
            function ar(e) {
              {
                var r = Ee()
                if (!r) {
                  var t = typeof e == 'string' ? e : e.displayName || e.name
                  t &&
                    (r =
                      `

Check the top-level render call using <` +
                      t +
                      '>.')
                }
                return r
              }
            }
            function _e(e, r) {
              {
                if (!e._store || e._store.validated || e.key != null) return
                e._store.validated = !0
                var t = ar(r)
                if (Re[t]) return
                Re[t] = !0
                var n = ''
                e &&
                  e._owner &&
                  e._owner !== H.current &&
                  (n = ' It was passed a child from ' + h(e._owner.type) + '.'),
                  C(e),
                  c(
                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                    t,
                    n,
                  ),
                  C(null)
              }
            }
            function Te(e, r) {
              {
                if (typeof e != 'object') return
                if (z(e))
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t]
                    Z(n) && _e(n, r)
                  }
                else if (Z(e)) e._store && (e._store.validated = !0)
                else if (e) {
                  var i = ke(e)
                  if (typeof i == 'function' && i !== e.entries)
                    for (var u = i.call(e), o; !(o = u.next()).done; ) Z(o.value) && _e(o.value, r)
                }
              }
            }
            function or(e) {
              {
                var r = e.type
                if (r == null || typeof r == 'string') return
                var t
                if (typeof r == 'function') t = r.propTypes
                else if (typeof r == 'object' && (r.$$typeof === l || r.$$typeof === b)) t = r.propTypes
                else return
                if (t) {
                  var n = h(r)
                  qe(t, e.props, 'prop', n, e)
                } else if (r.PropTypes !== void 0 && !X) {
                  X = !0
                  var i = h(r)
                  c(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    i || 'Unknown',
                  )
                }
                typeof r.getDefaultProps == 'function' &&
                  !r.getDefaultProps.isReactClassApproved &&
                  c(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
                  )
              }
            }
            function ir(e) {
              {
                for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
                  var n = r[t]
                  if (n !== 'children' && n !== 'key') {
                    C(e),
                      c(
                        'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                        n,
                      ),
                      C(null)
                    break
                  }
                }
                e.ref !== null && (C(e), c('Invalid attribute `ref` supplied to `React.Fragment`.'), C(null))
              }
            }
            function Oe(e, r, t, n, i, u) {
              {
                var o = $e(e)
                if (!o) {
                  var a = ''
                  ;(e === void 0 || (typeof e == 'object' && e !== null && Object.keys(e).length === 0)) &&
                    (a +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
                  var d = nr(i)
                  d ? (a += d) : (a += Ee())
                  var s
                  e === null
                    ? (s = 'null')
                    : z(e)
                    ? (s = 'array')
                    : e !== void 0 && e.$$typeof === k
                    ? ((s = '<' + (h(e.type) || 'Unknown') + ' />'),
                      (a = ' Did you accidentally export a JSX literal instead of a component?'))
                    : (s = typeof e),
                    c(
                      'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                      s,
                      a,
                    )
                }
                var f = tr(e, r, t, i, u)
                if (f == null) return f
                if (o) {
                  var p = r.children
                  if (p !== void 0)
                    if (n)
                      if (z(p)) {
                        for (var P = 0; P < p.length; P++) Te(p[P], e)
                        Object.freeze && Object.freeze(p)
                      } else
                        c(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                        )
                    else Te(p, e)
                }
                return e === T ? ir(f) : or(f), f
              }
            }
            function ur(e, r, t) {
              return Oe(e, r, t, !0)
            }
            function sr(e, r, t) {
              return Oe(e, r, t, !1)
            }
            var fr = sr,
              lr = ur
            ;(x.Fragment = T), (x.jsx = fr), (x.jsxs = lr)
          })()),
      x
    )
  }
  process.env.NODE_ENV === 'production' ? (U.exports = Ce()) : (U.exports = Pe())
  var we = U.exports
  const xe = ({ label: j }) => we.jsx('button', { className: 'border border-black px-5 py-2 rounded-xl', children: j })
  ;(y.Dummy = xe), Object.defineProperty(y, Symbol.toStringTag, { value: 'Module' })
})
