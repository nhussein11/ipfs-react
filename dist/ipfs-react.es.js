import Oe from 'react'
var H = { exports: {} },
  k = {}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re
function ir() {
  if (Re) return k
  Re = 1
  var P = Oe,
    S = Symbol.for('react.element'),
    V = Symbol.for('react.fragment'),
    _ = Object.prototype.hasOwnProperty,
    F = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    A = { key: !0, ref: !0, __self: !0, __source: !0 }
  function w(m, l, R) {
    var v,
      b = {},
      E = null,
      I = null
    R !== void 0 && (E = '' + R), l.key !== void 0 && (E = '' + l.key), l.ref !== void 0 && (I = l.ref)
    for (v in l) _.call(l, v) && !A.hasOwnProperty(v) && (b[v] = l[v])
    if (m && m.defaultProps) for (v in ((l = m.defaultProps), l)) b[v] === void 0 && (b[v] = l[v])
    return { $$typeof: S, type: m, key: E, ref: I, props: b, _owner: F.current }
  }
  return (k.Fragment = V), (k.jsx = w), (k.jsxs = w), k
}
var D = {}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te
function ur() {
  return (
    Te ||
      ((Te = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          var P = Oe,
            S = Symbol.for('react.element'),
            V = Symbol.for('react.portal'),
            _ = Symbol.for('react.fragment'),
            F = Symbol.for('react.strict_mode'),
            A = Symbol.for('react.profiler'),
            w = Symbol.for('react.provider'),
            m = Symbol.for('react.context'),
            l = Symbol.for('react.forward_ref'),
            R = Symbol.for('react.suspense'),
            v = Symbol.for('react.suspense_list'),
            b = Symbol.for('react.memo'),
            E = Symbol.for('react.lazy'),
            I = Symbol.for('react.offscreen'),
            X = Symbol.iterator,
            Ce = '@@iterator'
          function Pe(e) {
            if (e === null || typeof e != 'object') return null
            var r = (X && e[X]) || e[Ce]
            return typeof r == 'function' ? r : null
          }
          var T = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          function c(e) {
            {
              for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                t[n - 1] = arguments[n]
              Se('error', e, t)
            }
          }
          function Se(e, r, t) {
            {
              var n = T.ReactDebugCurrentFrame,
                i = n.getStackAddendum()
              i !== '' && ((r += '%s'), (t = t.concat([i])))
              var u = t.map(function (o) {
                return String(o)
              })
              u.unshift('Warning: ' + r), Function.prototype.apply.call(console[e], console, u)
            }
          }
          var we = !1,
            xe = !1,
            je = !1,
            ke = !1,
            De = !1,
            Z
          Z = Symbol.for('react.module.reference')
          function Fe(e) {
            return !!(
              typeof e == 'string' ||
              typeof e == 'function' ||
              e === _ ||
              e === A ||
              De ||
              e === F ||
              e === R ||
              e === v ||
              ke ||
              e === I ||
              we ||
              xe ||
              je ||
              (typeof e == 'object' &&
                e !== null &&
                (e.$$typeof === E ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === m ||
                  e.$$typeof === l || // This needs to include all possible module reference object
                  // types supported by any Flight configuration anywhere since
                  // we don't know which Flight build this will end up being used
                  // with.
                  e.$$typeof === Z ||
                  e.getModuleId !== void 0))
            )
          }
          function Ae(e, r, t) {
            var n = e.displayName
            if (n) return n
            var i = r.displayName || r.name || ''
            return i !== '' ? t + '(' + i + ')' : t
          }
          function Q(e) {
            return e.displayName || 'Context'
          }
          function g(e) {
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
              case _:
                return 'Fragment'
              case V:
                return 'Portal'
              case A:
                return 'Profiler'
              case F:
                return 'StrictMode'
              case R:
                return 'Suspense'
              case v:
                return 'SuspenseList'
            }
            if (typeof e == 'object')
              switch (e.$$typeof) {
                case m:
                  var r = e
                  return Q(r) + '.Consumer'
                case w:
                  var t = e
                  return Q(t._context) + '.Provider'
                case l:
                  return Ae(e, e.render, 'ForwardRef')
                case b:
                  var n = e.displayName || null
                  return n !== null ? n : g(e.type) || 'Memo'
                case E: {
                  var i = e,
                    u = i._payload,
                    o = i._init
                  try {
                    return g(o(u))
                  } catch {
                    return null
                  }
                }
              }
            return null
          }
          var y = Object.assign,
            x = 0,
            ee,
            re,
            te,
            ne,
            ae,
            oe,
            ie
          function ue() {}
          ue.__reactDisabledLog = !0
          function Ie() {
            {
              if (x === 0) {
                ;(ee = console.log),
                  (re = console.info),
                  (te = console.warn),
                  (ne = console.error),
                  (ae = console.group),
                  (oe = console.groupCollapsed),
                  (ie = console.groupEnd)
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  value: ue,
                  writable: !0,
                }
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
              x++
            }
          }
          function $e() {
            {
              if ((x--, x === 0)) {
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                }
                Object.defineProperties(console, {
                  log: y({}, e, {
                    value: ee,
                  }),
                  info: y({}, e, {
                    value: re,
                  }),
                  warn: y({}, e, {
                    value: te,
                  }),
                  error: y({}, e, {
                    value: ne,
                  }),
                  group: y({}, e, {
                    value: ae,
                  }),
                  groupCollapsed: y({}, e, {
                    value: oe,
                  }),
                  groupEnd: y({}, e, {
                    value: ie,
                  }),
                })
              }
              x < 0 && c('disabledDepth fell below zero. This is a bug in React. Please file an issue.')
            }
          }
          var M = T.ReactCurrentDispatcher,
            U
          function $(e, r, t) {
            {
              if (U === void 0)
                try {
                  throw Error()
                } catch (i) {
                  var n = i.stack.trim().match(/\n( *(at )?)/)
                  U = (n && n[1]) || ''
                }
              return (
                `
` +
                U +
                e
              )
            }
          }
          var B = !1,
            W
          {
            var We = typeof WeakMap == 'function' ? WeakMap : Map
            W = new We()
          }
          function se(e, r) {
            if (!e || B) return ''
            {
              var t = W.get(e)
              if (t !== void 0) return t
            }
            var n
            B = !0
            var i = Error.prepareStackTrace
            Error.prepareStackTrace = void 0
            var u
            ;(u = M.current), (M.current = null), Ie()
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
                  } catch (h) {
                    n = h
                  }
                  Reflect.construct(e, [], o)
                } else {
                  try {
                    o.call()
                  } catch (h) {
                    n = h
                  }
                  e.call(o.prototype)
                }
              } else {
                try {
                  throw Error()
                } catch (h) {
                  n = h
                }
                e()
              }
            } catch (h) {
              if (h && n && typeof h.stack == 'string') {
                for (
                  var a = h.stack.split(`
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
                            e.displayName && p.includes('<anonymous>') && (p = p.replace('<anonymous>', e.displayName)),
                            typeof e == 'function' && W.set(e, p),
                            p
                          )
                        }
                      while (s >= 1 && f >= 0)
                    break
                  }
              }
            } finally {
              ;(B = !1), (M.current = u), $e(), (Error.prepareStackTrace = i)
            }
            var C = e ? e.displayName || e.name : '',
              _e = C ? $(C) : ''
            return typeof e == 'function' && W.set(e, _e), _e
          }
          function Ye(e, r, t) {
            return se(e, !1)
          }
          function Ne(e) {
            var r = e.prototype
            return !!(r && r.isReactComponent)
          }
          function Y(e, r, t) {
            if (e == null) return ''
            if (typeof e == 'function') return se(e, Ne(e))
            if (typeof e == 'string') return $(e)
            switch (e) {
              case R:
                return $('Suspense')
              case v:
                return $('SuspenseList')
            }
            if (typeof e == 'object')
              switch (e.$$typeof) {
                case l:
                  return Ye(e.render)
                case b:
                  return Y(e.type, r, t)
                case E: {
                  var n = e,
                    i = n._payload,
                    u = n._init
                  try {
                    return Y(u(i), r, t)
                  } catch {}
                }
              }
            return ''
          }
          var N = Object.prototype.hasOwnProperty,
            fe = {},
            le = T.ReactDebugCurrentFrame
          function L(e) {
            if (e) {
              var r = e._owner,
                t = Y(e.type, e._source, r ? r.type : null)
              le.setExtraStackFrame(t)
            } else le.setExtraStackFrame(null)
          }
          function Le(e, r, t, n, i) {
            {
              var u = Function.call.bind(N)
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
                    (L(i),
                    c(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      n || 'React class',
                      t,
                      o,
                      typeof a,
                    ),
                    L(null)),
                    a instanceof Error &&
                      !(a.message in fe) &&
                      ((fe[a.message] = !0), L(i), c('Failed %s type: %s', t, a.message), L(null))
                }
            }
          }
          var Ve = Array.isArray
          function q(e) {
            return Ve(e)
          }
          function Me(e) {
            {
              var r = typeof Symbol == 'function' && Symbol.toStringTag,
                t = (r && e[Symbol.toStringTag]) || e.constructor.name || 'Object'
              return t
            }
          }
          function Ue(e) {
            try {
              return ce(e), !1
            } catch {
              return !0
            }
          }
          function ce(e) {
            return '' + e
          }
          function de(e) {
            if (Ue(e))
              return (
                c(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  Me(e),
                ),
                ce(e)
              )
          }
          var j = T.ReactCurrentOwner,
            Be = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            ve,
            pe,
            J
          J = {}
          function qe(e) {
            if (N.call(e, 'ref')) {
              var r = Object.getOwnPropertyDescriptor(e, 'ref').get
              if (r && r.isReactWarning) return !1
            }
            return e.ref !== void 0
          }
          function Je(e) {
            if (N.call(e, 'key')) {
              var r = Object.getOwnPropertyDescriptor(e, 'key').get
              if (r && r.isReactWarning) return !1
            }
            return e.key !== void 0
          }
          function Ge(e, r) {
            if (typeof e.ref == 'string' && j.current && r && j.current.stateNode !== r) {
              var t = g(j.current.type)
              J[t] ||
                (c(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  g(j.current.type),
                  e.ref,
                ),
                (J[t] = !0))
            }
          }
          function ze(e, r) {
            {
              var t = function () {
                ve ||
                  ((ve = !0),
                  c(
                    '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    r,
                  ))
              }
              ;(t.isReactWarning = !0),
                Object.defineProperty(e, 'key', {
                  get: t,
                  configurable: !0,
                })
            }
          }
          function Ke(e, r) {
            {
              var t = function () {
                pe ||
                  ((pe = !0),
                  c(
                    '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    r,
                  ))
              }
              ;(t.isReactWarning = !0),
                Object.defineProperty(e, 'ref', {
                  get: t,
                  configurable: !0,
                })
            }
          }
          var He = function (e, r, t, n, i, u, o) {
            var a = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: S,
              // Built-in properties that belong on the element
              type: e,
              key: r,
              ref: t,
              props: o,
              // Record the component responsible for creating this element.
              _owner: u,
            }
            return (
              (a._store = {}),
              Object.defineProperty(a._store, 'validated', {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(a, '_self', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: n,
              }),
              Object.defineProperty(a, '_source', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: i,
              }),
              Object.freeze && (Object.freeze(a.props), Object.freeze(a)),
              a
            )
          }
          function Xe(e, r, t, n, i) {
            {
              var u,
                o = {},
                a = null,
                d = null
              t !== void 0 && (de(t), (a = '' + t)),
                Je(r) && (de(r.key), (a = '' + r.key)),
                qe(r) && ((d = r.ref), Ge(r, i))
              for (u in r) N.call(r, u) && !Be.hasOwnProperty(u) && (o[u] = r[u])
              if (e && e.defaultProps) {
                var s = e.defaultProps
                for (u in s) o[u] === void 0 && (o[u] = s[u])
              }
              if (a || d) {
                var f = typeof e == 'function' ? e.displayName || e.name || 'Unknown' : e
                a && ze(o, f), d && Ke(o, f)
              }
              return He(e, a, d, i, n, j.current, o)
            }
          }
          var G = T.ReactCurrentOwner,
            be = T.ReactDebugCurrentFrame
          function O(e) {
            if (e) {
              var r = e._owner,
                t = Y(e.type, e._source, r ? r.type : null)
              be.setExtraStackFrame(t)
            } else be.setExtraStackFrame(null)
          }
          var z
          z = !1
          function K(e) {
            return typeof e == 'object' && e !== null && e.$$typeof === S
          }
          function ge() {
            {
              if (G.current) {
                var e = g(G.current.type)
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
          function Ze(e) {
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
          var he = {}
          function Qe(e) {
            {
              var r = ge()
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
          function me(e, r) {
            {
              if (!e._store || e._store.validated || e.key != null) return
              e._store.validated = !0
              var t = Qe(r)
              if (he[t]) return
              he[t] = !0
              var n = ''
              e && e._owner && e._owner !== G.current && (n = ' It was passed a child from ' + g(e._owner.type) + '.'),
                O(e),
                c(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  t,
                  n,
                ),
                O(null)
            }
          }
          function Ee(e, r) {
            {
              if (typeof e != 'object') return
              if (q(e))
                for (var t = 0; t < e.length; t++) {
                  var n = e[t]
                  K(n) && me(n, r)
                }
              else if (K(e)) e._store && (e._store.validated = !0)
              else if (e) {
                var i = Pe(e)
                if (typeof i == 'function' && i !== e.entries)
                  for (var u = i.call(e), o; !(o = u.next()).done; ) K(o.value) && me(o.value, r)
              }
            }
          }
          function er(e) {
            {
              var r = e.type
              if (r == null || typeof r == 'string') return
              var t
              if (typeof r == 'function') t = r.propTypes
              else if (
                typeof r == 'object' &&
                (r.$$typeof === l || // Note: Memo only checks outer props here.
                  // Inner props are checked in the reconciler.
                  r.$$typeof === b)
              )
                t = r.propTypes
              else return
              if (t) {
                var n = g(r)
                Le(t, e.props, 'prop', n, e)
              } else if (r.PropTypes !== void 0 && !z) {
                z = !0
                var i = g(r)
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
          function rr(e) {
            {
              for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
                var n = r[t]
                if (n !== 'children' && n !== 'key') {
                  O(e),
                    c(
                      'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                      n,
                    ),
                    O(null)
                  break
                }
              }
              e.ref !== null && (O(e), c('Invalid attribute `ref` supplied to `React.Fragment`.'), O(null))
            }
          }
          function ye(e, r, t, n, i, u) {
            {
              var o = Fe(e)
              if (!o) {
                var a = ''
                ;(e === void 0 || (typeof e == 'object' && e !== null && Object.keys(e).length === 0)) &&
                  (a +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
                var d = Ze(i)
                d ? (a += d) : (a += ge())
                var s
                e === null
                  ? (s = 'null')
                  : q(e)
                  ? (s = 'array')
                  : e !== void 0 && e.$$typeof === S
                  ? ((s = '<' + (g(e.type) || 'Unknown') + ' />'),
                    (a = ' Did you accidentally export a JSX literal instead of a component?'))
                  : (s = typeof e),
                  c(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    s,
                    a,
                  )
              }
              var f = Xe(e, r, t, i, u)
              if (f == null) return f
              if (o) {
                var p = r.children
                if (p !== void 0)
                  if (n)
                    if (q(p)) {
                      for (var C = 0; C < p.length; C++) Ee(p[C], e)
                      Object.freeze && Object.freeze(p)
                    } else
                      c(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                      )
                  else Ee(p, e)
              }
              return e === _ ? rr(f) : er(f), f
            }
          }
          function tr(e, r, t) {
            return ye(e, r, t, !0)
          }
          function nr(e, r, t) {
            return ye(e, r, t, !1)
          }
          var ar = nr,
            or = tr
          ;(D.Fragment = _), (D.jsx = ar), (D.jsxs = or)
        })()),
    D
  )
}
process.env.NODE_ENV === 'production' ? (H.exports = ir()) : (H.exports = ur())
var sr = H.exports
const lr = ({ label: P }) =>
  /* @__PURE__ */ sr.jsx('button', { className: 'border border-black px-5 py-2 rounded-xl', children: P })
export { lr as Dummy }
