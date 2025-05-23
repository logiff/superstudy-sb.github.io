!(function e(t, n, r) {
  function i(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var l = "function" == typeof require && require;
        if (!a && l) return l(s, !0);
        if (o) return o(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      var u = (n[s] = { exports: {} });
      t[s][0].call(
        u.exports,
        function (e) {
          return i(t[s][1][e] || e);
        },
        u,
        u.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[s].exports;
  }
  for (
    var o = "function" == typeof require && require, s = 0;
    s < r.length;
    s++
  )
    i(r[s]);
  return i;
})(
  {
    1: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/is-callable"),
          o = e("../internals/try-to-string"),
          s = r.TypeError;
        t.exports = function (e) {
          if (i(e)) return e;
          throw s(o(e) + " is not a function");
        };
      },
      {
        "../internals/global": 48,
        "../internals/is-callable": 60,
        "../internals/try-to-string": 106,
      },
    ],
    2: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/is-constructor"),
          o = e("../internals/try-to-string"),
          s = r.TypeError;
        t.exports = function (e) {
          if (i(e)) return e;
          throw s(o(e) + " is not a constructor");
        };
      },
      {
        "../internals/global": 48,
        "../internals/is-constructor": 61,
        "../internals/try-to-string": 106,
      },
    ],
    3: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/is-callable"),
          o = r.String,
          s = r.TypeError;
        t.exports = function (e) {
          if ("object" == typeof e || i(e)) return e;
          throw s("Can't set " + o(e) + " as a prototype");
        };
      },
      { "../internals/global": 48, "../internals/is-callable": 60 },
    ],
    4: [
      function (e, t, n) {
        var r = e("../internals/well-known-symbol"),
          i = e("../internals/object-create"),
          o = e("../internals/object-define-property"),
          s = r("unscopables"),
          a = Array.prototype;
        null == a[s] && o.f(a, s, { configurable: !0, value: i(null) }),
          (t.exports = function (e) {
            a[s][e] = !0;
          });
      },
      {
        "../internals/object-create": 72,
        "../internals/object-define-property": 74,
        "../internals/well-known-symbol": 113,
      },
    ],
    5: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/object-is-prototype-of"),
          o = r.TypeError;
        t.exports = function (e, t) {
          if (i(t, e)) return e;
          throw o("Incorrect invocation");
        };
      },
      { "../internals/global": 48, "../internals/object-is-prototype-of": 79 },
    ],
    6: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/is-object"),
          o = r.String,
          s = r.TypeError;
        t.exports = function (e) {
          if (i(e)) return e;
          throw s(o(e) + " is not an object");
        };
      },
      { "../internals/global": 48, "../internals/is-object": 64 },
    ],
    7: [
      function (e, t, n) {
        t.exports =
          "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
      },
      {},
    ],
    8: [
      function (e, t, n) {
        "use strict";
        var r,
          i,
          o,
          s = e("../internals/array-buffer-native"),
          a = e("../internals/descriptors"),
          l = e("../internals/global"),
          c = e("../internals/is-callable"),
          u = e("../internals/is-object"),
          d = e("../internals/has-own-property"),
          p = e("../internals/classof"),
          f = e("../internals/try-to-string"),
          h = e("../internals/create-non-enumerable-property"),
          g = e("../internals/redefine"),
          y = e("../internals/object-define-property").f,
          m = e("../internals/object-is-prototype-of"),
          b = e("../internals/object-get-prototype-of"),
          v = e("../internals/object-set-prototype-of"),
          w = e("../internals/well-known-symbol"),
          x = e("../internals/uid"),
          j = l.Int8Array,
          S = j && j.prototype,
          _ = l.Uint8ClampedArray,
          T = _ && _.prototype,
          I = j && b(j),
          R = S && b(S),
          k = Object.prototype,
          L = l.TypeError,
          E = w("toStringTag"),
          P = x("TYPED_ARRAY_TAG"),
          A = x("TYPED_ARRAY_CONSTRUCTOR"),
          O = s && !!v && "Opera" !== p(l.opera),
          M = !1,
          C = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8,
          },
          D = { BigInt64Array: 8, BigUint64Array: 8 },
          N = function (e) {
            if (!u(e)) return !1;
            var t = p(e);
            return d(C, t) || d(D, t);
          };
        for (r in C) (o = (i = l[r]) && i.prototype) ? h(o, A, i) : (O = !1);
        for (r in D) (o = (i = l[r]) && i.prototype) && h(o, A, i);
        if (
          (!O || !c(I) || I === Function.prototype) &&
          ((I = function () {
            throw L("Incorrect invocation");
          }),
          O)
        )
          for (r in C) l[r] && v(l[r], I);
        if ((!O || !R || R === k) && ((R = I.prototype), O))
          for (r in C) l[r] && v(l[r].prototype, R);
        if ((O && b(T) !== R && v(T, R), a && !d(R, E)))
          for (r in ((M = !0),
          y(R, E, {
            get: function () {
              return u(this) ? this[P] : void 0;
            },
          }),
          C))
            l[r] && h(l[r], P, r);
        t.exports = {
          NATIVE_ARRAY_BUFFER_VIEWS: O,
          TYPED_ARRAY_CONSTRUCTOR: A,
          TYPED_ARRAY_TAG: M && P,
          aTypedArray: function (e) {
            if (N(e)) return e;
            throw L("Target is not a typed array");
          },
          aTypedArrayConstructor: function (e) {
            if (c(e) && (!v || m(I, e))) return e;
            throw L(f(e) + " is not a typed array constructor");
          },
          exportTypedArrayMethod: function (e, t, n, r) {
            if (a) {
              if (n)
                for (var i in C) {
                  var o = l[i];
                  if (o && d(o.prototype, e))
                    try {
                      delete o.prototype[e];
                    } catch (n) {
                      try {
                        o.prototype[e] = t;
                      } catch (e) {}
                    }
                }
              (R[e] && !n) || g(R, e, n ? t : (O && S[e]) || t, r);
            }
          },
          exportTypedArrayStaticMethod: function (e, t, n) {
            var r, i;
            if (a) {
              if (v) {
                if (n)
                  for (r in C)
                    if ((i = l[r]) && d(i, e))
                      try {
                        delete i[e];
                      } catch (e) {}
                if (I[e] && !n) return;
                try {
                  return g(I, e, n ? t : (O && I[e]) || t);
                } catch (e) {}
              }
              for (r in C) !(i = l[r]) || (i[e] && !n) || g(i, e, t);
            }
          },
          isView: function (e) {
            if (!u(e)) return !1;
            var t = p(e);
            return "DataView" === t || d(C, t) || d(D, t);
          },
          isTypedArray: N,
          TypedArray: I,
          TypedArrayPrototype: R,
        };
      },
      {
        "../internals/array-buffer-native": 7,
        "../internals/classof": 19,
        "../internals/create-non-enumerable-property": 23,
        "../internals/descriptors": 27,
        "../internals/global": 48,
        "../internals/has-own-property": 49,
        "../internals/is-callable": 60,
        "../internals/is-object": 64,
        "../internals/object-define-property": 74,
        "../internals/object-get-prototype-of": 78,
        "../internals/object-is-prototype-of": 79,
        "../internals/object-set-prototype-of": 83,
        "../internals/redefine": 87,
        "../internals/try-to-string": 106,
        "../internals/uid": 110,
        "../internals/well-known-symbol": 113,
      },
    ],
    9: [
      function (e, t, n) {
        "use strict";
        var r = e("../internals/global"),
          i = e("../internals/function-uncurry-this"),
          o = e("../internals/descriptors"),
          s = e("../internals/array-buffer-native"),
          a = e("../internals/function-name"),
          l = e("../internals/create-non-enumerable-property"),
          c = e("../internals/redefine-all"),
          u = e("../internals/fails"),
          d = e("../internals/an-instance"),
          p = e("../internals/to-integer-or-infinity"),
          f = e("../internals/to-length"),
          h = e("../internals/to-index"),
          g = e("../internals/ieee754"),
          y = e("../internals/object-get-prototype-of"),
          m = e("../internals/object-set-prototype-of"),
          b = e("../internals/object-get-own-property-names").f,
          v = e("../internals/object-define-property").f,
          w = e("../internals/array-fill"),
          x = e("../internals/array-slice-simple"),
          j = e("../internals/set-to-string-tag"),
          S = e("../internals/internal-state"),
          _ = a.PROPER,
          T = a.CONFIGURABLE,
          I = S.get,
          R = S.set,
          k = "ArrayBuffer",
          L = "DataView",
          E = "Wrong index",
          P = r.ArrayBuffer,
          A = P,
          O = A && A.prototype,
          M = r.DataView,
          C = M && M.prototype,
          D = Object.prototype,
          N = r.Array,
          W = r.RangeError,
          U = i(w),
          G = i([].reverse),
          F = g.pack,
          q = g.unpack,
          B = function (e) {
            return [255 & e];
          },
          J = function (e) {
            return [255 & e, (e >> 8) & 255];
          },
          z = function (e) {
            return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
          },
          H = function (e) {
            return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
          },
          V = function (e) {
            return F(e, 23, 4);
          },
          X = function (e) {
            return F(e, 52, 8);
          },
          K = function (e, t) {
            v(e.prototype, t, {
              get: function () {
                return I(this)[t];
              },
            });
          },
          Y = function (e, t, n, r) {
            var i = h(n),
              o = I(e);
            if (i + t > o.byteLength) throw W(E);
            var s = I(o.buffer).bytes,
              a = i + o.byteOffset,
              l = x(s, a, a + t);
            return r ? l : G(l);
          },
          Q = function (e, t, n, r, i, o) {
            var s = h(n),
              a = I(e);
            if (s + t > a.byteLength) throw W(E);
            for (
              var l = I(a.buffer).bytes, c = s + a.byteOffset, u = r(+i), d = 0;
              d < t;
              d++
            )
              l[c + d] = u[o ? d : t - d - 1];
          };
        if (s) {
          var $ = _ && P.name !== k;
          if (
            u(function () {
              P(1);
            }) &&
            u(function () {
              new P(-1);
            }) &&
            !u(function () {
              return new P(), new P(1.5), new P(NaN), $ && !T;
            })
          )
            $ && T && l(P, "name", k);
          else {
            (A = function (e) {
              return d(this, O), new P(h(e));
            }).prototype = O;
            for (var Z, ee = b(P), te = 0; ee.length > te; )
              (Z = ee[te++]) in A || l(A, Z, P[Z]);
            O.constructor = A;
          }
          m && y(C) !== D && m(C, D);
          var ne = new M(new A(2)),
            re = i(C.setInt8);
          ne.setInt8(0, 2147483648),
            ne.setInt8(1, 2147483649),
            (!ne.getInt8(0) && ne.getInt8(1)) ||
              c(
                C,
                {
                  setInt8: function (e, t) {
                    re(this, e, (t << 24) >> 24);
                  },
                  setUint8: function (e, t) {
                    re(this, e, (t << 24) >> 24);
                  },
                },
                { unsafe: !0 }
              );
        } else
          (O = (A = function (e) {
            d(this, O);
            var t = h(e);
            R(this, { bytes: U(N(t), 0), byteLength: t }),
              o || (this.byteLength = t);
          }).prototype),
            (C = (M = function (e, t, n) {
              d(this, C), d(e, O);
              var r = I(e).byteLength,
                i = p(t);
              if (i < 0 || i > r) throw W("Wrong offset");
              if (i + (n = void 0 === n ? r - i : f(n)) > r)
                throw W("Wrong length");
              R(this, { buffer: e, byteLength: n, byteOffset: i }),
                o ||
                  ((this.buffer = e),
                  (this.byteLength = n),
                  (this.byteOffset = i));
            }).prototype),
            o &&
              (K(A, "byteLength"),
              K(M, "buffer"),
              K(M, "byteLength"),
              K(M, "byteOffset")),
            c(C, {
              getInt8: function (e) {
                return (Y(this, 1, e)[0] << 24) >> 24;
              },
              getUint8: function (e) {
                return Y(this, 1, e)[0];
              },
              getInt16: function (e) {
                var t = Y(
                  this,
                  2,
                  e,
                  arguments.length > 1 ? arguments[1] : void 0
                );
                return (((t[1] << 8) | t[0]) << 16) >> 16;
              },
              getUint16: function (e) {
                var t = Y(
                  this,
                  2,
                  e,
                  arguments.length > 1 ? arguments[1] : void 0
                );
                return (t[1] << 8) | t[0];
              },
              getInt32: function (e) {
                return H(
                  Y(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)
                );
              },
              getUint32: function (e) {
                return (
                  H(
                    Y(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)
                  ) >>> 0
                );
              },
              getFloat32: function (e) {
                return q(
                  Y(this, 4, e, arguments.length > 1 ? arguments[1] : void 0),
                  23
                );
              },
              getFloat64: function (e) {
                return q(
                  Y(this, 8, e, arguments.length > 1 ? arguments[1] : void 0),
                  52
                );
              },
              setInt8: function (e, t) {
                Q(this, 1, e, B, t);
              },
              setUint8: function (e, t) {
                Q(this, 1, e, B, t);
              },
              setInt16: function (e, t) {
                Q(
                  this,
                  2,
                  e,
                  J,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0
                );
              },
              setUint16: function (e, t) {
                Q(
                  this,
                  2,
                  e,
                  J,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0
                );
              },
              setInt32: function (e, t) {
                Q(
                  this,
                  4,
                  e,
                  z,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0
                );
              },
              setUint32: function (e, t) {
                Q(
                  this,
                  4,
                  e,
                  z,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0
                );
              },
              setFloat32: function (e, t) {
                Q(
                  this,
                  4,
                  e,
                  V,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0
                );
              },
              setFloat64: function (e, t) {
                Q(
                  this,
                  8,
                  e,
                  X,
                  t,
                  arguments.length > 2 ? arguments[2] : void 0
                );
              },
            });
        j(A, k), j(M, L), (t.exports = { ArrayBuffer: A, DataView: M });
      },
      {
        "../internals/an-instance": 5,
        "../internals/array-buffer-native": 7,
        "../internals/array-fill": 10,
        "../internals/array-slice-simple": 13,
        "../internals/create-non-enumerable-property": 23,
        "../internals/descriptors": 27,
        "../internals/fails": 38,
        "../internals/function-name": 42,
        "../internals/function-uncurry-this": 43,
        "../internals/global": 48,
        "../internals/ieee754": 53,
        "../internals/internal-state": 57,
        "../internals/object-define-property": 74,
        "../internals/object-get-own-property-names": 76,
        "../internals/object-get-prototype-of": 78,
        "../internals/object-set-prototype-of": 83,
        "../internals/redefine-all": 86,
        "../internals/set-to-string-tag": 91,
        "../internals/to-index": 96,
        "../internals/to-integer-or-infinity": 98,
        "../internals/to-length": 99,
      },
    ],
    10: [
      function (e, t, n) {
        "use strict";
        var r = e("../internals/to-object"),
          i = e("../internals/to-absolute-index"),
          o = e("../internals/length-of-array-like");
        t.exports = function (e) {
          for (
            var t = r(this),
              n = o(t),
              s = arguments.length,
              a = i(s > 1 ? arguments[1] : void 0, n),
              l = s > 2 ? arguments[2] : void 0,
              c = void 0 === l ? n : i(l, n);
            c > a;

          )
            t[a++] = e;
          return t;
        };
      },
      {
        "../internals/length-of-array-like": 69,
        "../internals/to-absolute-index": 95,
        "../internals/to-object": 100,
      },
    ],
    11: [
      function (e, t, n) {
        var r = e("../internals/to-indexed-object"),
          i = e("../internals/to-absolute-index"),
          o = e("../internals/length-of-array-like"),
          s = function (e) {
            return function (t, n, s) {
              var a,
                l = r(t),
                c = o(l),
                u = i(s, c);
              if (e && n != n) {
                for (; c > u; ) if ((a = l[u++]) != a) return !0;
              } else
                for (; c > u; u++)
                  if ((e || u in l) && l[u] === n) return e || u || 0;
              return !e && -1;
            };
          };
        t.exports = { includes: s(!0), indexOf: s(!1) };
      },
      {
        "../internals/length-of-array-like": 69,
        "../internals/to-absolute-index": 95,
        "../internals/to-indexed-object": 97,
      },
    ],
    12: [
      function (e, t, n) {
        var r = e("../internals/function-bind-context"),
          i = e("../internals/function-uncurry-this"),
          o = e("../internals/indexed-object"),
          s = e("../internals/to-object"),
          a = e("../internals/length-of-array-like"),
          l = e("../internals/array-species-create"),
          c = i([].push),
          u = function (e) {
            var t = 1 == e,
              n = 2 == e,
              i = 3 == e,
              u = 4 == e,
              d = 6 == e,
              p = 7 == e,
              f = 5 == e || d;
            return function (h, g, y, m) {
              for (
                var b,
                  v,
                  w = s(h),
                  x = o(w),
                  j = r(g, y),
                  S = a(x),
                  _ = 0,
                  T = m || l,
                  I = t ? T(h, S) : n || p ? T(h, 0) : void 0;
                S > _;
                _++
              )
                if ((f || _ in x) && ((v = j((b = x[_]), _, w)), e))
                  if (t) I[_] = v;
                  else if (v)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return b;
                      case 6:
                        return _;
                      case 2:
                        c(I, b);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        c(I, b);
                    }
              return d ? -1 : i || u ? u : I;
            };
          };
        t.exports = {
          forEach: u(0),
          map: u(1),
          filter: u(2),
          some: u(3),
          every: u(4),
          find: u(5),
          findIndex: u(6),
          filterReject: u(7),
        };
      },
      {
        "../internals/array-species-create": 16,
        "../internals/function-bind-context": 39,
        "../internals/function-uncurry-this": 43,
        "../internals/indexed-object": 54,
        "../internals/length-of-array-like": 69,
        "../internals/to-object": 100,
      },
    ],
    13: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/to-absolute-index"),
          o = e("../internals/length-of-array-like"),
          s = e("../internals/create-property"),
          a = r.Array,
          l = Math.max;
        t.exports = function (e, t, n) {
          for (
            var r = o(e),
              c = i(t, r),
              u = i(void 0 === n ? r : n, r),
              d = a(l(u - c, 0)),
              p = 0;
            c < u;
            c++, p++
          )
            s(d, p, e[c]);
          return (d.length = p), d;
        };
      },
      {
        "../internals/create-property": 25,
        "../internals/global": 48,
        "../internals/length-of-array-like": 69,
        "../internals/to-absolute-index": 95,
      },
    ],
    14: [
      function (e, t, n) {
        var r = e("../internals/array-slice-simple"),
          i = Math.floor,
          o = function (e, t) {
            var n = e.length,
              l = i(n / 2);
            return n < 8 ? s(e, t) : a(e, o(r(e, 0, l), t), o(r(e, l), t), t);
          },
          s = function (e, t) {
            for (var n, r, i = e.length, o = 1; o < i; ) {
              for (r = o, n = e[o]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r];
              r !== o++ && (e[r] = n);
            }
            return e;
          },
          a = function (e, t, n, r) {
            for (var i = t.length, o = n.length, s = 0, a = 0; s < i || a < o; )
              e[s + a] =
                s < i && a < o
                  ? r(t[s], n[a]) <= 0
                    ? t[s++]
                    : n[a++]
                  : s < i
                  ? t[s++]
                  : n[a++];
            return e;
          };
        t.exports = o;
      },
      { "../internals/array-slice-simple": 13 },
    ],
    15: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/is-array"),
          o = e("../internals/is-constructor"),
          s = e("../internals/is-object"),
          a = e("../internals/well-known-symbol")("species"),
          l = r.Array;
        t.exports = function (e) {
          var t;
          return (
            i(e) &&
              ((t = e.constructor),
              ((o(t) && (t === l || i(t.prototype))) ||
                (s(t) && null === (t = t[a]))) &&
                (t = void 0)),
            void 0 === t ? l : t
          );
        };
      },
      {
        "../internals/global": 48,
        "../internals/is-array": 59,
        "../internals/is-constructor": 61,
        "../internals/is-object": 64,
        "../internals/well-known-symbol": 113,
      },
    ],
    16: [
      function (e, t, n) {
        var r = e("../internals/array-species-constructor");
        t.exports = function (e, t) {
          return new (r(e))(0 === t ? 0 : t);
        };
      },
      { "../internals/array-species-constructor": 15 },
    ],
    17: [
      function (e, t, n) {
        var r = e("../internals/well-known-symbol")("iterator"),
          i = !1;
        try {
          var o = 0,
            s = {
              next: function () {
                return { done: !!o++ };
              },
              return: function () {
                i = !0;
              },
            };
          (s[r] = function () {
            return this;
          }),
            Array.from(s, function () {
              throw 2;
            });
        } catch (e) {}
        t.exports = function (e, t) {
          if (!t && !i) return !1;
          var n = !1;
          try {
            var o = {};
            (o[r] = function () {
              return {
                next: function () {
                  return { done: (n = !0) };
                },
              };
            }),
              e(o);
          } catch (e) {}
          return n;
        };
      },
      { "../internals/well-known-symbol": 113 },
    ],
    18: [
      function (e, t, n) {
        var r = e("../internals/function-uncurry-this"),
          i = r({}.toString),
          o = r("".slice);
        t.exports = function (e) {
          return o(i(e), 8, -1);
        };
      },
      { "../internals/function-uncurry-this": 43 },
    ],
    19: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/to-string-tag-support"),
          o = e("../internals/is-callable"),
          s = e("../internals/classof-raw"),
          a = e("../internals/well-known-symbol")("toStringTag"),
          l = r.Object,
          c =
            "Arguments" ==
            s(
              (function () {
                return arguments;
              })()
            );
        t.exports = i
          ? s
          : function (e) {
              var t, n, r;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (n = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = l(e)), a))
                ? n
                : c
                ? s(t)
                : "Object" == (r = s(t)) && o(t.callee)
                ? "Arguments"
                : r;
            };
      },
      {
        "../internals/classof-raw": 18,
        "../internals/global": 48,
        "../internals/is-callable": 60,
        "../internals/to-string-tag-support": 105,
        "../internals/well-known-symbol": 113,
      },
    ],
    20: [
      function (e, t, n) {
        var r = e("../internals/has-own-property"),
          i = e("../internals/own-keys"),
          o = e("../internals/object-get-own-property-descriptor"),
          s = e("../internals/object-define-property");
        t.exports = function (e, t, n) {
          for (var a = i(t), l = s.f, c = o.f, u = 0; u < a.length; u++) {
            var d = a[u];
            r(e, d) || (n && r(n, d)) || l(e, d, c(t, d));
          }
        };
      },
      {
        "../internals/has-own-property": 49,
        "../internals/object-define-property": 74,
        "../internals/object-get-own-property-descriptor": 75,
        "../internals/own-keys": 85,
      },
    ],
    21: [
      function (e, t, n) {
        var r = e("../internals/fails");
        t.exports = !r(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      { "../internals/fails": 38 },
    ],
    22: [
      function (e, t, n) {
        "use strict";
        var r = e("../internals/iterators-core").IteratorPrototype,
          i = e("../internals/object-create"),
          o = e("../internals/create-property-descriptor"),
          s = e("../internals/set-to-string-tag"),
          a = e("../internals/iterators"),
          l = function () {
            return this;
          };
        t.exports = function (e, t, n, c) {
          var u = t + " Iterator";
          return (
            (e.prototype = i(r, { next: o(+!c, n) })),
            s(e, u, !1, !0),
            (a[u] = l),
            e
          );
        };
      },
      {
        "../internals/create-property-descriptor": 24,
        "../internals/iterators": 68,
        "../internals/iterators-core": 67,
        "../internals/object-create": 72,
        "../internals/set-to-string-tag": 91,
      },
    ],
    23: [
      function (e, t, n) {
        var r = e("../internals/descriptors"),
          i = e("../internals/object-define-property"),
          o = e("../internals/create-property-descriptor");
        t.exports = r
          ? function (e, t, n) {
              return i.f(e, t, o(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      {
        "../internals/create-property-descriptor": 24,
        "../internals/descriptors": 27,
        "../internals/object-define-property": 74,
      },
    ],
    24: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      {},
    ],
    25: [
      function (e, t, n) {
        "use strict";
        var r = e("../internals/to-property-key"),
          i = e("../internals/object-define-property"),
          o = e("../internals/create-property-descriptor");
        t.exports = function (e, t, n) {
          var s = r(t);
          s in e ? i.f(e, s, o(0, n)) : (e[s] = n);
        };
      },
      {
        "../internals/create-property-descriptor": 24,
        "../internals/object-define-property": 74,
        "../internals/to-property-key": 104,
      },
    ],
    26: [
      function (e, t, n) {
        "use strict";
        var r = e("../internals/export"),
          i = e("../internals/function-call"),
          o = e("../internals/is-pure"),
          s = e("../internals/function-name"),
          a = e("../internals/is-callable"),
          l = e("../internals/create-iterator-constructor"),
          c = e("../internals/object-get-prototype-of"),
          u = e("../internals/object-set-prototype-of"),
          d = e("../internals/set-to-string-tag"),
          p = e("../internals/create-non-enumerable-property"),
          f = e("../internals/redefine"),
          h = e("../internals/well-known-symbol"),
          g = e("../internals/iterators"),
          y = e("../internals/iterators-core"),
          m = s.PROPER,
          b = s.CONFIGURABLE,
          v = y.IteratorPrototype,
          w = y.BUGGY_SAFARI_ITERATORS,
          x = h("iterator"),
          j = "keys",
          S = "values",
          _ = "entries",
          T = function () {
            return this;
          };
        t.exports = function (e, t, n, s, h, y, I) {
          l(n, t, s);
          var R,
            k,
            L,
            E = function (e) {
              if (e === h && C) return C;
              if (!w && e in O) return O[e];
              switch (e) {
                case j:
                case S:
                case _:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this);
              };
            },
            P = t + " Iterator",
            A = !1,
            O = e.prototype,
            M = O[x] || O["@@iterator"] || (h && O[h]),
            C = (!w && M) || E(h),
            D = ("Array" == t && O.entries) || M;
          if (
            (D &&
              (R = c(D.call(new e()))) !== Object.prototype &&
              R.next &&
              (o || c(R) === v || (u ? u(R, v) : a(R[x]) || f(R, x, T)),
              d(R, P, !0, !0),
              o && (g[P] = T)),
            m &&
              h == S &&
              M &&
              M.name !== S &&
              (!o && b
                ? p(O, "name", S)
                : ((A = !0),
                  (C = function () {
                    return i(M, this);
                  }))),
            h)
          )
            if (((k = { values: E(S), keys: y ? C : E(j), entries: E(_) }), I))
              for (L in k) (w || A || !(L in O)) && f(O, L, k[L]);
            else r({ target: t, proto: !0, forced: w || A }, k);
          return (
            (o && !I) || O[x] === C || f(O, x, C, { name: h }), (g[t] = C), k
          );
        };
      },
      {
        "../internals/create-iterator-constructor": 22,
        "../internals/create-non-enumerable-property": 23,
        "../internals/export": 37,
        "../internals/function-call": 41,
        "../internals/function-name": 42,
        "../internals/is-callable": 60,
        "../internals/is-pure": 65,
        "../internals/iterators": 68,
        "../internals/iterators-core": 67,
        "../internals/object-get-prototype-of": 78,
        "../internals/object-set-prototype-of": 83,
        "../internals/redefine": 87,
        "../internals/set-to-string-tag": 91,
        "../internals/well-known-symbol": 113,
      },
    ],
    27: [
      function (e, t, n) {
        var r = e("../internals/fails");
        t.exports = !r(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      { "../internals/fails": 38 },
    ],
    28: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/is-object"),
          o = r.document,
          s = i(o) && i(o.createElement);
        t.exports = function (e) {
          return s ? o.createElement(e) : {};
        };
      },
      { "../internals/global": 48, "../internals/is-object": 64 },
    ],
    29: [
      function (e, t, n) {
        t.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      {},
    ],
    30: [
      function (e, t, n) {
        var r = e("../internals/document-create-element")("span").classList,
          i = r && r.constructor && r.constructor.prototype;
        t.exports = i === Object.prototype ? void 0 : i;
      },
      { "../internals/document-create-element": 28 },
    ],
    31: [
      function (e, t, n) {
        var r = e("../internals/engine-user-agent").match(/firefox\/(\d+)/i);
        t.exports = !!r && +r[1];
      },
      { "../internals/engine-user-agent": 33 },
    ],
    32: [
      function (e, t, n) {
        var r = e("../internals/engine-user-agent");
        t.exports = /MSIE|Trident/.test(r);
      },
      { "../internals/engine-user-agent": 33 },
    ],
    33: [
      function (e, t, n) {
        var r = e("../internals/get-built-in");
        t.exports = r("navigator", "userAgent") || "";
      },
      { "../internals/get-built-in": 44 },
    ],
    34: [
      function (e, t, n) {
        var r,
          i,
          o = e("../internals/global"),
          s = e("../internals/engine-user-agent"),
          a = o.process,
          l = o.Deno,
          c = (a && a.versions) || (l && l.version),
          u = c && c.v8;
        u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
          !i &&
            s &&
            (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
            (r = s.match(/Chrome\/(\d+)/)) &&
            (i = +r[1]),
          (t.exports = i);
      },
      { "../internals/engine-user-agent": 33, "../internals/global": 48 },
    ],
    35: [
      function (e, t, n) {
        var r = e("../internals/engine-user-agent").match(
          /AppleWebKit\/(\d+)\./
        );
        t.exports = !!r && +r[1];
      },
      { "../internals/engine-user-agent": 33 },
    ],
    36: [
      function (e, t, n) {
        t.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      {},
    ],
    37: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/object-get-own-property-descriptor").f,
          o = e("../internals/create-non-enumerable-property"),
          s = e("../internals/redefine"),
          a = e("../internals/set-global"),
          l = e("../internals/copy-constructor-properties"),
          c = e("../internals/is-forced");
        t.exports = function (e, t) {
          var n,
            u,
            d,
            p,
            f,
            h = e.target,
            g = e.global,
            y = e.stat;
          if ((n = g ? r : y ? r[h] || a(h, {}) : (r[h] || {}).prototype))
            for (u in t) {
              if (
                ((p = t[u]),
                (d = e.noTargetGet ? (f = i(n, u)) && f.value : n[u]),
                !c(g ? u : h + (y ? "." : "#") + u, e.forced) && void 0 !== d)
              ) {
                if (typeof p == typeof d) continue;
                l(p, d);
              }
              (e.sham || (d && d.sham)) && o(p, "sham", !0), s(n, u, p, e);
            }
        };
      },
      {
        "../internals/copy-constructor-properties": 20,
        "../internals/create-non-enumerable-property": 23,
        "../internals/global": 48,
        "../internals/is-forced": 62,
        "../internals/object-get-own-property-descriptor": 75,
        "../internals/redefine": 87,
        "../internals/set-global": 89,
      },
    ],
    38: [
      function (e, t, n) {
        t.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      {},
    ],
    39: [
      function (e, t, n) {
        var r = e("../internals/function-uncurry-this"),
          i = e("../internals/a-callable"),
          o = e("../internals/function-bind-native"),
          s = r(r.bind);
        t.exports = function (e, t) {
          return (
            i(e),
            void 0 === t
              ? e
              : o
              ? s(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      {
        "../internals/a-callable": 1,
        "../internals/function-bind-native": 40,
        "../internals/function-uncurry-this": 43,
      },
    ],
    40: [
      function (e, t, n) {
        var r = e("../internals/fails");
        t.exports = !r(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      { "../internals/fails": 38 },
    ],
    41: [
      function (e, t, n) {
        var r = e("../internals/function-bind-native"),
          i = Function.prototype.call;
        t.exports = r
          ? i.bind(i)
          : function () {
              return i.apply(i, arguments);
            };
      },
      { "../internals/function-bind-native": 40 },
    ],
    42: [
      function (e, t, n) {
        var r = e("../internals/descriptors"),
          i = e("../internals/has-own-property"),
          o = Function.prototype,
          s = r && Object.getOwnPropertyDescriptor,
          a = i(o, "name"),
          l = a && "something" === function () {}.name,
          c = a && (!r || (r && s(o, "name").configurable));
        t.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
      },
      { "../internals/descriptors": 27, "../internals/has-own-property": 49 },
    ],
    43: [
      function (e, t, n) {
        var r = e("../internals/function-bind-native"),
          i = Function.prototype,
          o = i.bind,
          s = i.call,
          a = r && o.bind(s, s);
        t.exports = r
          ? function (e) {
              return e && a(e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return s.apply(e, arguments);
                }
              );
            };
      },
      { "../internals/function-bind-native": 40 },
    ],
    44: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/is-callable"),
          o = function (e) {
            return i(e) ? e : void 0;
          };
        t.exports = function (e, t) {
          return arguments.length < 2 ? o(r[e]) : r[e] && r[e][t];
        };
      },
      { "../internals/global": 48, "../internals/is-callable": 60 },
    ],
    45: [
      function (e, t, n) {
        var r = e("../internals/classof"),
          i = e("../internals/get-method"),
          o = e("../internals/iterators"),
          s = e("../internals/well-known-symbol")("iterator");
        t.exports = function (e) {
          if (null != e) return i(e, s) || i(e, "@@iterator") || o[r(e)];
        };
      },
      {
        "../internals/classof": 19,
        "../internals/get-method": 47,
        "../internals/iterators": 68,
        "../internals/well-known-symbol": 113,
      },
    ],
    46: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/function-call"),
          o = e("../internals/a-callable"),
          s = e("../internals/an-object"),
          a = e("../internals/try-to-string"),
          l = e("../internals/get-iterator-method"),
          c = r.TypeError;
        t.exports = function (e, t) {
          var n = arguments.length < 2 ? l(e) : t;
          if (o(n)) return s(i(n, e));
          throw c(a(e) + " is not iterable");
        };
      },
      {
        "../internals/a-callable": 1,
        "../internals/an-object": 6,
        "../internals/function-call": 41,
        "../internals/get-iterator-method": 45,
        "../internals/global": 48,
        "../internals/try-to-string": 106,
      },
    ],
    47: [
      function (e, t, n) {
        var r = e("../internals/a-callable");
        t.exports = function (e, t) {
          var n = e[t];
          return null == n ? void 0 : r(n);
        };
      },
      { "../internals/a-callable": 1 },
    ],
    48: [
      function (e, t, n) {
        (function (e) {
          (function () {
            var n = function (e) {
              return e && e.Math == Math && e;
            };
            t.exports =
              n("object" == typeof globalThis && globalThis) ||
              n("object" == typeof window && window) ||
              n("object" == typeof self && self) ||
              n("object" == typeof e && e) ||
              (function () {
                return this;
              })() ||
              Function("return this")();
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        );
      },
      {},
    ],
    49: [
      function (e, t, n) {
        var r = e("../internals/function-uncurry-this"),
          i = e("../internals/to-object"),
          o = r({}.hasOwnProperty);
        t.exports =
          Object.hasOwn ||
          function (e, t) {
            return o(i(e), t);
          };
      },
      {
        "../internals/function-uncurry-this": 43,
        "../internals/to-object": 100,
      },
    ],
    50: [
      function (e, t, n) {
        t.exports = {};
      },
      {},
    ],
    51: [
      function (e, t, n) {
        var r = e("../internals/get-built-in");
        t.exports = r("document", "documentElement");
      },
      { "../internals/get-built-in": 44 },
    ],
    52: [
      function (e, t, n) {
        var r = e("../internals/descriptors"),
          i = e("../internals/fails"),
          o = e("../internals/document-create-element");
        t.exports =
          !r &&
          !i(function () {
            return (
              7 !=
              Object.defineProperty(o("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      {
        "../internals/descriptors": 27,
        "../internals/document-create-element": 28,
        "../internals/fails": 38,
      },
    ],
    53: [
      function (e, t, n) {
        var r = e("../internals/global").Array,
          i = Math.abs,
          o = Math.pow,
          s = Math.floor,
          a = Math.log,
          l = Math.LN2;
        t.exports = {
          pack: function (e, t, n) {
            var c,
              u,
              d,
              p = r(n),
              f = 8 * n - t - 1,
              h = (1 << f) - 1,
              g = h >> 1,
              y = 23 === t ? o(2, -24) - o(2, -77) : 0,
              m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
              b = 0;
            for (
              (e = i(e)) != e || e === 1 / 0
                ? ((u = e != e ? 1 : 0), (c = h))
                : ((c = s(a(e) / l)),
                  e * (d = o(2, -c)) < 1 && (c--, (d *= 2)),
                  (e += c + g >= 1 ? y / d : y * o(2, 1 - g)) * d >= 2 &&
                    (c++, (d /= 2)),
                  c + g >= h
                    ? ((u = 0), (c = h))
                    : c + g >= 1
                    ? ((u = (e * d - 1) * o(2, t)), (c += g))
                    : ((u = e * o(2, g - 1) * o(2, t)), (c = 0)));
              t >= 8;

            )
              (p[b++] = 255 & u), (u /= 256), (t -= 8);
            for (c = (c << t) | u, f += t; f > 0; )
              (p[b++] = 255 & c), (c /= 256), (f -= 8);
            return (p[--b] |= 128 * m), p;
          },
          unpack: function (e, t) {
            var n,
              r = e.length,
              i = 8 * r - t - 1,
              s = (1 << i) - 1,
              a = s >> 1,
              l = i - 7,
              c = r - 1,
              u = e[c--],
              d = 127 & u;
            for (u >>= 7; l > 0; ) (d = 256 * d + e[c--]), (l -= 8);
            for (n = d & ((1 << -l) - 1), d >>= -l, l += t; l > 0; )
              (n = 256 * n + e[c--]), (l -= 8);
            if (0 === d) d = 1 - a;
            else {
              if (d === s) return n ? NaN : u ? -1 / 0 : 1 / 0;
              (n += o(2, t)), (d -= a);
            }
            return (u ? -1 : 1) * n * o(2, d - t);
          },
        };
      },
      { "../internals/global": 48 },
    ],
    54: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/function-uncurry-this"),
          o = e("../internals/fails"),
          s = e("../internals/classof-raw"),
          a = r.Object,
          l = i("".split);
        t.exports = o(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == s(e) ? l(e, "") : a(e);
            }
          : a;
      },
      {
        "../internals/classof-raw": 18,
        "../internals/fails": 38,
        "../internals/function-uncurry-this": 43,
        "../internals/global": 48,
      },
    ],
    55: [
      function (e, t, n) {
        var r = e("../internals/is-callable"),
          i = e("../internals/is-object"),
          o = e("../internals/object-set-prototype-of");
        t.exports = function (e, t, n) {
          var s, a;
          return (
            o &&
              r((s = t.constructor)) &&
              s !== n &&
              i((a = s.prototype)) &&
              a !== n.prototype &&
              o(e, a),
            e
          );
        };
      },
      {
        "../internals/is-callable": 60,
        "../internals/is-object": 64,
        "../internals/object-set-prototype-of": 83,
      },
    ],
    56: [
      function (e, t, n) {
        var r = e("../internals/function-uncurry-this"),
          i = e("../internals/is-callable"),
          o = e("../internals/shared-store"),
          s = r(Function.toString);
        i(o.inspectSource) ||
          (o.inspectSource = function (e) {
            return s(e);
          }),
          (t.exports = o.inspectSource);
      },
      {
        "../internals/function-uncurry-this": 43,
        "../internals/is-callable": 60,
        "../internals/shared-store": 93,
      },
    ],
    57: [
      function (e, t, n) {
        var r,
          i,
          o,
          s = e("../internals/native-weak-map"),
          a = e("../internals/global"),
          l = e("../internals/function-uncurry-this"),
          c = e("../internals/is-object"),
          u = e("../internals/create-non-enumerable-property"),
          d = e("../internals/has-own-property"),
          p = e("../internals/shared-store"),
          f = e("../internals/shared-key"),
          h = e("../internals/hidden-keys"),
          g = "Object already initialized",
          y = a.TypeError,
          m = a.WeakMap;
        if (s || p.state) {
          var b = p.state || (p.state = new m()),
            v = l(b.get),
            w = l(b.has),
            x = l(b.set);
          (r = function (e, t) {
            if (w(b, e)) throw new y(g);
            return (t.facade = e), x(b, e, t), t;
          }),
            (i = function (e) {
              return v(b, e) || {};
            }),
            (o = function (e) {
              return w(b, e);
            });
        } else {
          var j = f("state");
          (h[j] = !0),
            (r = function (e, t) {
              if (d(e, j)) throw new y(g);
              return (t.facade = e), u(e, j, t), t;
            }),
            (i = function (e) {
              return d(e, j) ? e[j] : {};
            }),
            (o = function (e) {
              return d(e, j);
            });
        }
        t.exports = {
          set: r,
          get: i,
          has: o,
          enforce: function (e) {
            return o(e) ? i(e) : r(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var n;
              if (!c(t) || (n = i(t)).type !== e)
                throw y("Incompatible receiver, " + e + " required");
              return n;
            };
          },
        };
      },
      {
        "../internals/create-non-enumerable-property": 23,
        "../internals/function-uncurry-this": 43,
        "../internals/global": 48,
        "../internals/has-own-property": 49,
        "../internals/hidden-keys": 50,
        "../internals/is-object": 64,
        "../internals/native-weak-map": 71,
        "../internals/shared-key": 92,
        "../internals/shared-store": 93,
      },
    ],
    58: [
      function (e, t, n) {
        var r = e("../internals/well-known-symbol"),
          i = e("../internals/iterators"),
          o = r("iterator"),
          s = Array.prototype;
        t.exports = function (e) {
          return void 0 !== e && (i.Array === e || s[o] === e);
        };
      },
      { "../internals/iterators": 68, "../internals/well-known-symbol": 113 },
    ],
    59: [
      function (e, t, n) {
        var r = e("../internals/classof-raw");
        t.exports =
          Array.isArray ||
          function (e) {
            return "Array" == r(e);
          };
      },
      { "../internals/classof-raw": 18 },
    ],
    60: [
      function (e, t, n) {
        t.exports = function (e) {
          return "function" == typeof e;
        };
      },
      {},
    ],
    61: [
      function (e, t, n) {
        var r = e("../internals/function-uncurry-this"),
          i = e("../internals/fails"),
          o = e("../internals/is-callable"),
          s = e("../internals/classof"),
          a = e("../internals/get-built-in"),
          l = e("../internals/inspect-source"),
          c = function () {},
          u = [],
          d = a("Reflect", "construct"),
          p = /^\s*(?:class|function)\b/,
          f = r(p.exec),
          h = !p.exec(c),
          g = function (e) {
            if (!o(e)) return !1;
            try {
              return d(c, u, e), !0;
            } catch (e) {
              return !1;
            }
          },
          y = function (e) {
            if (!o(e)) return !1;
            switch (s(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return h || !!f(p, l(e));
            } catch (e) {
              return !0;
            }
          };
        (y.sham = !0),
          (t.exports =
            !d ||
            i(function () {
              var e;
              return (
                g(g.call) ||
                !g(Object) ||
                !g(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? y
              : g);
      },
      {
        "../internals/classof": 19,
        "../internals/fails": 38,
        "../internals/function-uncurry-this": 43,
        "../internals/get-built-in": 44,
        "../internals/inspect-source": 56,
        "../internals/is-callable": 60,
      },
    ],
    62: [
      function (e, t, n) {
        var r = e("../internals/fails"),
          i = e("../internals/is-callable"),
          o = /#|\.prototype\./,
          s = function (e, t) {
            var n = l[a(e)];
            return n == u || (n != c && (i(t) ? r(t) : !!t));
          },
          a = (s.normalize = function (e) {
            return String(e).replace(o, ".").toLowerCase();
          }),
          l = (s.data = {}),
          c = (s.NATIVE = "N"),
          u = (s.POLYFILL = "P");
        t.exports = s;
      },
      { "../internals/fails": 38, "../internals/is-callable": 60 },
    ],
    63: [
      function (e, t, n) {
        var r = e("../internals/is-object"),
          i = Math.floor;
        t.exports =
          Number.isInteger ||
          function (e) {
            return !r(e) && isFinite(e) && i(e) === e;
          };
      },
      { "../internals/is-object": 64 },
    ],
    64: [
      function (e, t, n) {
        var r = e("../internals/is-callable");
        t.exports = function (e) {
          return "object" == typeof e ? null !== e : r(e);
        };
      },
      { "../internals/is-callable": 60 },
    ],
    65: [
      function (e, t, n) {
        t.exports = !1;
      },
      {},
    ],
    66: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/get-built-in"),
          o = e("../internals/is-callable"),
          s = e("../internals/object-is-prototype-of"),
          a = e("../internals/use-symbol-as-uid"),
          l = r.Object;
        t.exports = a
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = i("Symbol");
              return o(t) && s(t.prototype, l(e));
            };
      },
      {
        "../internals/get-built-in": 44,
        "../internals/global": 48,
        "../internals/is-callable": 60,
        "../internals/object-is-prototype-of": 79,
        "../internals/use-symbol-as-uid": 111,
      },
    ],
    67: [
      function (e, t, n) {
        "use strict";
        var r,
          i,
          o,
          s = e("../internals/fails"),
          a = e("../internals/is-callable"),
          l = e("../internals/object-create"),
          c = e("../internals/object-get-prototype-of"),
          u = e("../internals/redefine"),
          d = e("../internals/well-known-symbol"),
          p = e("../internals/is-pure"),
          f = d("iterator"),
          h = !1;
        [].keys &&
          ("next" in (o = [].keys())
            ? (i = c(c(o))) !== Object.prototype && (r = i)
            : (h = !0)),
          null == r ||
          s(function () {
            var e = {};
            return r[f].call(e) !== e;
          })
            ? (r = {})
            : p && (r = l(r)),
          a(r[f]) ||
            u(r, f, function () {
              return this;
            }),
          (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: h });
      },
      {
        "../internals/fails": 38,
        "../internals/is-callable": 60,
        "../internals/is-pure": 65,
        "../internals/object-create": 72,
        "../internals/object-get-prototype-of": 78,
        "../internals/redefine": 87,
        "../internals/well-known-symbol": 113,
      },
    ],
    68: [
      function (e, t, n) {
        arguments[4][50][0].apply(n, arguments);
      },
      { dup: 50 },
    ],
    69: [
      function (e, t, n) {
        var r = e("../internals/to-length");
        t.exports = function (e) {
          return r(e.length);
        };
      },
      { "../internals/to-length": 99 },
    ],
    70: [
      function (e, t, n) {
        var r = e("../internals/engine-v8-version"),
          i = e("../internals/fails");
        t.exports =
          !!Object.getOwnPropertySymbols &&
          !i(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && r && r < 41)
            );
          });
      },
      { "../internals/engine-v8-version": 34, "../internals/fails": 38 },
    ],
    71: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/is-callable"),
          o = e("../internals/inspect-source"),
          s = r.WeakMap;
        t.exports = i(s) && /native code/.test(o(s));
      },
      {
        "../internals/global": 48,
        "../internals/inspect-source": 56,
        "../internals/is-callable": 60,
      },
    ],
    72: [
      function (e, t, n) {
        var r,
          i = e("../internals/an-object"),
          o = e("../internals/object-define-properties"),
          s = e("../internals/enum-bug-keys"),
          a = e("../internals/hidden-keys"),
          l = e("../internals/html"),
          c = e("../internals/document-create-element"),
          u = e("../internals/shared-key"),
          d = u("IE_PROTO"),
          p = function () {},
          f = function (e) {
            return "<script>" + e + "</" + "script>";
          },
          h = function (e) {
            e.write(f("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          g = function () {
            try {
              r = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            g =
              "undefined" != typeof document
                ? document.domain && r
                  ? h(r)
                  : (((t = c("iframe")).style.display = "none"),
                    l.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(f("document.F=Object")),
                    e.close(),
                    e.F)
                : h(r);
            for (var n = s.length; n--; ) delete g.prototype[s[n]];
            return g();
          };
        (a[d] = !0),
          (t.exports =
            Object.create ||
            function (e, t) {
              var n;
              return (
                null !== e
                  ? ((p.prototype = i(e)),
                    (n = new p()),
                    (p.prototype = null),
                    (n[d] = e))
                  : (n = g()),
                void 0 === t ? n : o.f(n, t)
              );
            });
      },
      {
        "../internals/an-object": 6,
        "../internals/document-create-element": 28,
        "../internals/enum-bug-keys": 36,
        "../internals/hidden-keys": 50,
        "../internals/html": 51,
        "../internals/object-define-properties": 73,
        "../internals/shared-key": 92,
      },
    ],
    73: [
      function (e, t, n) {
        var r = e("../internals/descriptors"),
          i = e("../internals/v8-prototype-define-bug"),
          o = e("../internals/object-define-property"),
          s = e("../internals/an-object"),
          a = e("../internals/to-indexed-object"),
          l = e("../internals/object-keys");
        n.f =
          r && !i
            ? Object.defineProperties
            : function (e, t) {
                s(e);
                for (var n, r = a(t), i = l(t), c = i.length, u = 0; c > u; )
                  o.f(e, (n = i[u++]), r[n]);
                return e;
              };
      },
      {
        "../internals/an-object": 6,
        "../internals/descriptors": 27,
        "../internals/object-define-property": 74,
        "../internals/object-keys": 81,
        "../internals/to-indexed-object": 97,
        "../internals/v8-prototype-define-bug": 112,
      },
    ],
    74: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/descriptors"),
          o = e("../internals/ie8-dom-define"),
          s = e("../internals/v8-prototype-define-bug"),
          a = e("../internals/an-object"),
          l = e("../internals/to-property-key"),
          c = r.TypeError,
          u = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          p = "enumerable",
          f = "configurable",
          h = "writable";
        n.f = i
          ? s
            ? function (e, t, n) {
                if (
                  (a(e),
                  (t = l(t)),
                  a(n),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in n &&
                    h in n &&
                    !n.writable)
                ) {
                  var r = d(e, t);
                  r &&
                    r.writable &&
                    ((e[t] = n.value),
                    (n = {
                      configurable: f in n ? n.configurable : r.configurable,
                      enumerable: p in n ? n.enumerable : r.enumerable,
                      writable: !1,
                    }));
                }
                return u(e, t, n);
              }
            : u
          : function (e, t, n) {
              if ((a(e), (t = l(t)), a(n), o))
                try {
                  return u(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw c("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      {
        "../internals/an-object": 6,
        "../internals/descriptors": 27,
        "../internals/global": 48,
        "../internals/ie8-dom-define": 52,
        "../internals/to-property-key": 104,
        "../internals/v8-prototype-define-bug": 112,
      },
    ],
    75: [
      function (e, t, n) {
        var r = e("../internals/descriptors"),
          i = e("../internals/function-call"),
          o = e("../internals/object-property-is-enumerable"),
          s = e("../internals/create-property-descriptor"),
          a = e("../internals/to-indexed-object"),
          l = e("../internals/to-property-key"),
          c = e("../internals/has-own-property"),
          u = e("../internals/ie8-dom-define"),
          d = Object.getOwnPropertyDescriptor;
        n.f = r
          ? d
          : function (e, t) {
              if (((e = a(e)), (t = l(t)), u))
                try {
                  return d(e, t);
                } catch (e) {}
              if (c(e, t)) return s(!i(o.f, e, t), e[t]);
            };
      },
      {
        "../internals/create-property-descriptor": 24,
        "../internals/descriptors": 27,
        "../internals/function-call": 41,
        "../internals/has-own-property": 49,
        "../internals/ie8-dom-define": 52,
        "../internals/object-property-is-enumerable": 82,
        "../internals/to-indexed-object": 97,
        "../internals/to-property-key": 104,
      },
    ],
    76: [
      function (e, t, n) {
        var r = e("../internals/object-keys-internal"),
          i = e("../internals/enum-bug-keys").concat("length", "prototype");
        n.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return r(e, i);
          };
      },
      {
        "../internals/enum-bug-keys": 36,
        "../internals/object-keys-internal": 80,
      },
    ],
    77: [
      function (e, t, n) {
        n.f = Object.getOwnPropertySymbols;
      },
      {},
    ],
    78: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/has-own-property"),
          o = e("../internals/is-callable"),
          s = e("../internals/to-object"),
          a = e("../internals/shared-key"),
          l = e("../internals/correct-prototype-getter"),
          c = a("IE_PROTO"),
          u = r.Object,
          d = u.prototype;
        t.exports = l
          ? u.getPrototypeOf
          : function (e) {
              var t = s(e);
              if (i(t, c)) return t[c];
              var n = t.constructor;
              return o(n) && t instanceof n
                ? n.prototype
                : t instanceof u
                ? d
                : null;
            };
      },
      {
        "../internals/correct-prototype-getter": 21,
        "../internals/global": 48,
        "../internals/has-own-property": 49,
        "../internals/is-callable": 60,
        "../internals/shared-key": 92,
        "../internals/to-object": 100,
      },
    ],
    79: [
      function (e, t, n) {
        var r = e("../internals/function-uncurry-this");
        t.exports = r({}.isPrototypeOf);
      },
      { "../internals/function-uncurry-this": 43 },
    ],
    80: [
      function (e, t, n) {
        var r = e("../internals/function-uncurry-this"),
          i = e("../internals/has-own-property"),
          o = e("../internals/to-indexed-object"),
          s = e("../internals/array-includes").indexOf,
          a = e("../internals/hidden-keys"),
          l = r([].push);
        t.exports = function (e, t) {
          var n,
            r = o(e),
            c = 0,
            u = [];
          for (n in r) !i(a, n) && i(r, n) && l(u, n);
          for (; t.length > c; ) i(r, (n = t[c++])) && (~s(u, n) || l(u, n));
          return u;
        };
      },
      {
        "../internals/array-includes": 11,
        "../internals/function-uncurry-this": 43,
        "../internals/has-own-property": 49,
        "../internals/hidden-keys": 50,
        "../internals/to-indexed-object": 97,
      },
    ],
    81: [
      function (e, t, n) {
        var r = e("../internals/object-keys-internal"),
          i = e("../internals/enum-bug-keys");
        t.exports =
          Object.keys ||
          function (e) {
            return r(e, i);
          };
      },
      {
        "../internals/enum-bug-keys": 36,
        "../internals/object-keys-internal": 80,
      },
    ],
    82: [
      function (e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
          i = Object.getOwnPropertyDescriptor,
          o = i && !r.call({ 1: 2 }, 1);
        n.f = o
          ? function (e) {
              var t = i(this, e);
              return !!t && t.enumerable;
            }
          : r;
      },
      {},
    ],
    83: [
      function (e, t, n) {
        var r = e("../internals/function-uncurry-this"),
          i = e("../internals/an-object"),
          o = e("../internals/a-possible-prototype");
        t.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  n = {};
                try {
                  (e = r(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(n, []),
                    (t = n instanceof Array);
                } catch (e) {}
                return function (n, r) {
                  return i(n), o(r), t ? e(n, r) : (n.__proto__ = r), n;
                };
              })()
            : void 0);
      },
      {
        "../internals/a-possible-prototype": 3,
        "../internals/an-object": 6,
        "../internals/function-uncurry-this": 43,
      },
    ],
    84: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/function-call"),
          o = e("../internals/is-callable"),
          s = e("../internals/is-object"),
          a = r.TypeError;
        t.exports = function (e, t) {
          var n, r;
          if ("string" === t && o((n = e.toString)) && !s((r = i(n, e))))
            return r;
          if (o((n = e.valueOf)) && !s((r = i(n, e)))) return r;
          if ("string" !== t && o((n = e.toString)) && !s((r = i(n, e))))
            return r;
          throw a("Can't convert object to primitive value");
        };
      },
      {
        "../internals/function-call": 41,
        "../internals/global": 48,
        "../internals/is-callable": 60,
        "../internals/is-object": 64,
      },
    ],
    85: [
      function (e, t, n) {
        var r = e("../internals/get-built-in"),
          i = e("../internals/function-uncurry-this"),
          o = e("../internals/object-get-own-property-names"),
          s = e("../internals/object-get-own-property-symbols"),
          a = e("../internals/an-object"),
          l = i([].concat);
        t.exports =
          r("Reflect", "ownKeys") ||
          function (e) {
            var t = o.f(a(e)),
              n = s.f;
            return n ? l(t, n(e)) : t;
          };
      },
      {
        "../internals/an-object": 6,
        "../internals/function-uncurry-this": 43,
        "../internals/get-built-in": 44,
        "../internals/object-get-own-property-names": 76,
        "../internals/object-get-own-property-symbols": 77,
      },
    ],
    86: [
      function (e, t, n) {
        var r = e("../internals/redefine");
        t.exports = function (e, t, n) {
          for (var i in t) r(e, i, t[i], n);
          return e;
        };
      },
      { "../internals/redefine": 87 },
    ],
    87: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/is-callable"),
          o = e("../internals/has-own-property"),
          s = e("../internals/create-non-enumerable-property"),
          a = e("../internals/set-global"),
          l = e("../internals/inspect-source"),
          c = e("../internals/internal-state"),
          u = e("../internals/function-name").CONFIGURABLE,
          d = c.get,
          p = c.enforce,
          f = String(String).split("String");
        (t.exports = function (e, t, n, l) {
          var c,
            d = !!l && !!l.unsafe,
            h = !!l && !!l.enumerable,
            g = !!l && !!l.noTargetGet,
            y = l && void 0 !== l.name ? l.name : t;
          i(n) &&
            ("Symbol(" === String(y).slice(0, 7) &&
              (y = "[" + String(y).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!o(n, "name") || (u && n.name !== y)) && s(n, "name", y),
            (c = p(n)).source ||
              (c.source = f.join("string" == typeof y ? y : ""))),
            e !== r
              ? (d ? !g && e[t] && (h = !0) : delete e[t],
                h ? (e[t] = n) : s(e, t, n))
              : h
              ? (e[t] = n)
              : a(t, n);
        })(Function.prototype, "toString", function () {
          return (i(this) && d(this).source) || l(this);
        });
      },
      {
        "../internals/create-non-enumerable-property": 23,
        "../internals/function-name": 42,
        "../internals/global": 48,
        "../internals/has-own-property": 49,
        "../internals/inspect-source": 56,
        "../internals/internal-state": 57,
        "../internals/is-callable": 60,
        "../internals/set-global": 89,
      },
    ],
    88: [
      function (e, t, n) {
        var r = e("../internals/global").TypeError;
        t.exports = function (e) {
          if (null == e) throw r("Can't call method on " + e);
          return e;
        };
      },
      { "../internals/global": 48 },
    ],
    89: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = Object.defineProperty;
        t.exports = function (e, t) {
          try {
            i(r, e, { value: t, configurable: !0, writable: !0 });
          } catch (n) {
            r[e] = t;
          }
          return t;
        };
      },
      { "../internals/global": 48 },
    ],
    90: [
      function (e, t, n) {
        "use strict";
        var r = e("../internals/get-built-in"),
          i = e("../internals/object-define-property"),
          o = e("../internals/well-known-symbol"),
          s = e("../internals/descriptors"),
          a = o("species");
        t.exports = function (e) {
          var t = r(e),
            n = i.f;
          s &&
            t &&
            !t[a] &&
            n(t, a, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      {
        "../internals/descriptors": 27,
        "../internals/get-built-in": 44,
        "../internals/object-define-property": 74,
        "../internals/well-known-symbol": 113,
      },
    ],
    91: [
      function (e, t, n) {
        var r = e("../internals/object-define-property").f,
          i = e("../internals/has-own-property"),
          o = e("../internals/well-known-symbol")("toStringTag");
        t.exports = function (e, t, n) {
          e && !n && (e = e.prototype),
            e && !i(e, o) && r(e, o, { configurable: !0, value: t });
        };
      },
      {
        "../internals/has-own-property": 49,
        "../internals/object-define-property": 74,
        "../internals/well-known-symbol": 113,
      },
    ],
    92: [
      function (e, t, n) {
        var r = e("../internals/shared"),
          i = e("../internals/uid"),
          o = r("keys");
        t.exports = function (e) {
          return o[e] || (o[e] = i(e));
        };
      },
      { "../internals/shared": 94, "../internals/uid": 110 },
    ],
    93: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/set-global"),
          o = "__core-js_shared__",
          s = r[o] || i(o, {});
        t.exports = s;
      },
      { "../internals/global": 48, "../internals/set-global": 89 },
    ],
    94: [
      function (e, t, n) {
        var r = e("../internals/is-pure"),
          i = e("../internals/shared-store");
        (t.exports = function (e, t) {
          return i[e] || (i[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.22.0",
          mode: r ? "pure" : "global",
          copyright: "Â© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.22.0/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      { "../internals/is-pure": 65, "../internals/shared-store": 93 },
    ],
    95: [
      function (e, t, n) {
        var r = e("../internals/to-integer-or-infinity"),
          i = Math.max,
          o = Math.min;
        t.exports = function (e, t) {
          var n = r(e);
          return n < 0 ? i(n + t, 0) : o(n, t);
        };
      },
      { "../internals/to-integer-or-infinity": 98 },
    ],
    96: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/to-integer-or-infinity"),
          o = e("../internals/to-length"),
          s = r.RangeError;
        t.exports = function (e) {
          if (void 0 === e) return 0;
          var t = i(e),
            n = o(t);
          if (t !== n) throw s("Wrong length or index");
          return n;
        };
      },
      {
        "../internals/global": 48,
        "../internals/to-integer-or-infinity": 98,
        "../internals/to-length": 99,
      },
    ],
    97: [
      function (e, t, n) {
        var r = e("../internals/indexed-object"),
          i = e("../internals/require-object-coercible");
        t.exports = function (e) {
          return r(i(e));
        };
      },
      {
        "../internals/indexed-object": 54,
        "../internals/require-object-coercible": 88,
      },
    ],
    98: [
      function (e, t, n) {
        var r = Math.ceil,
          i = Math.floor;
        t.exports = function (e) {
          var t = +e;
          return t != t || 0 === t ? 0 : (t > 0 ? i : r)(t);
        };
      },
      {},
    ],
    99: [
      function (e, t, n) {
        var r = e("../internals/to-integer-or-infinity"),
          i = Math.min;
        t.exports = function (e) {
          return e > 0 ? i(r(e), 9007199254740991) : 0;
        };
      },
      { "../internals/to-integer-or-infinity": 98 },
    ],
    100: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/require-object-coercible"),
          o = r.Object;
        t.exports = function (e) {
          return o(i(e));
        };
      },
      {
        "../internals/global": 48,
        "../internals/require-object-coercible": 88,
      },
    ],
    101: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/to-positive-integer"),
          o = r.RangeError;
        t.exports = function (e, t) {
          var n = i(e);
          if (n % t) throw o("Wrong offset");
          return n;
        };
      },
      { "../internals/global": 48, "../internals/to-positive-integer": 102 },
    ],
    102: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/to-integer-or-infinity"),
          o = r.RangeError;
        t.exports = function (e) {
          var t = i(e);
          if (t < 0) throw o("The argument can't be less than 0");
          return t;
        };
      },
      { "../internals/global": 48, "../internals/to-integer-or-infinity": 98 },
    ],
    103: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/function-call"),
          o = e("../internals/is-object"),
          s = e("../internals/is-symbol"),
          a = e("../internals/get-method"),
          l = e("../internals/ordinary-to-primitive"),
          c = e("../internals/well-known-symbol"),
          u = r.TypeError,
          d = c("toPrimitive");
        t.exports = function (e, t) {
          if (!o(e) || s(e)) return e;
          var n,
            r = a(e, d);
          if (r) {
            if (
              (void 0 === t && (t = "default"), (n = i(r, e, t)), !o(n) || s(n))
            )
              return n;
            throw u("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), l(e, t);
        };
      },
      {
        "../internals/function-call": 41,
        "../internals/get-method": 47,
        "../internals/global": 48,
        "../internals/is-object": 64,
        "../internals/is-symbol": 66,
        "../internals/ordinary-to-primitive": 84,
        "../internals/well-known-symbol": 113,
      },
    ],
    104: [
      function (e, t, n) {
        var r = e("../internals/to-primitive"),
          i = e("../internals/is-symbol");
        t.exports = function (e) {
          var t = r(e, "string");
          return i(t) ? t : t + "";
        };
      },
      { "../internals/is-symbol": 66, "../internals/to-primitive": 103 },
    ],
    105: [
      function (e, t, n) {
        var r = {};
        (r[e("../internals/well-known-symbol")("toStringTag")] = "z"),
          (t.exports = "[object z]" === String(r));
      },
      { "../internals/well-known-symbol": 113 },
    ],
    106: [
      function (e, t, n) {
        var r = e("../internals/global").String;
        t.exports = function (e) {
          try {
            return r(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      { "../internals/global": 48 },
    ],
    107: [
      function (e, t, n) {
        "use strict";
        var r = e("../internals/export"),
          i = e("../internals/global"),
          o = e("../internals/function-call"),
          s = e("../internals/descriptors"),
          a = e("../internals/typed-array-constructors-require-wrappers"),
          l = e("../internals/array-buffer-view-core"),
          c = e("../internals/array-buffer"),
          u = e("../internals/an-instance"),
          d = e("../internals/create-property-descriptor"),
          p = e("../internals/create-non-enumerable-property"),
          f = e("../internals/is-integral-number"),
          h = e("../internals/to-length"),
          g = e("../internals/to-index"),
          y = e("../internals/to-offset"),
          m = e("../internals/to-property-key"),
          b = e("../internals/has-own-property"),
          v = e("../internals/classof"),
          w = e("../internals/is-object"),
          x = e("../internals/is-symbol"),
          j = e("../internals/object-create"),
          S = e("../internals/object-is-prototype-of"),
          _ = e("../internals/object-set-prototype-of"),
          T = e("../internals/object-get-own-property-names").f,
          I = e("../internals/typed-array-from"),
          R = e("../internals/array-iteration").forEach,
          k = e("../internals/set-species"),
          L = e("../internals/object-define-property"),
          E = e("../internals/object-get-own-property-descriptor"),
          P = e("../internals/internal-state"),
          A = e("../internals/inherit-if-required"),
          O = P.get,
          M = P.set,
          C = L.f,
          D = E.f,
          N = Math.round,
          W = i.RangeError,
          U = c.ArrayBuffer,
          G = U.prototype,
          F = c.DataView,
          q = l.NATIVE_ARRAY_BUFFER_VIEWS,
          B = l.TYPED_ARRAY_CONSTRUCTOR,
          J = l.TYPED_ARRAY_TAG,
          z = l.TypedArray,
          H = l.TypedArrayPrototype,
          V = l.aTypedArrayConstructor,
          X = l.isTypedArray,
          K = "BYTES_PER_ELEMENT",
          Y = "Wrong length",
          Q = function (e, t) {
            V(e);
            for (var n = 0, r = t.length, i = new e(r); r > n; ) i[n] = t[n++];
            return i;
          },
          $ = function (e, t) {
            C(e, t, {
              get: function () {
                return O(this)[t];
              },
            });
          },
          Z = function (e) {
            var t;
            return (
              S(G, e) || "ArrayBuffer" == (t = v(e)) || "SharedArrayBuffer" == t
            );
          },
          ee = function (e, t) {
            return X(e) && !x(t) && t in e && f(+t) && t >= 0;
          },
          te = function (e, t) {
            return (t = m(t)), ee(e, t) ? d(2, e[t]) : D(e, t);
          },
          ne = function (e, t, n) {
            return (
              (t = m(t)),
              !(ee(e, t) && w(n) && b(n, "value")) ||
              b(n, "get") ||
              b(n, "set") ||
              n.configurable ||
              (b(n, "writable") && !n.writable) ||
              (b(n, "enumerable") && !n.enumerable)
                ? C(e, t, n)
                : ((e[t] = n.value), e)
            );
          };
        s
          ? (q ||
              ((E.f = te),
              (L.f = ne),
              $(H, "buffer"),
              $(H, "byteOffset"),
              $(H, "byteLength"),
              $(H, "length")),
            r(
              { target: "Object", stat: !0, forced: !q },
              { getOwnPropertyDescriptor: te, defineProperty: ne }
            ),
            (t.exports = function (e, t, n) {
              var s = e.match(/\d+$/)[0] / 8,
                l = e + (n ? "Clamped" : "") + "Array",
                c = "get" + e,
                d = "set" + e,
                f = i[l],
                m = f,
                b = m && m.prototype,
                v = {},
                x = function (e, t) {
                  C(e, t, {
                    get: function () {
                      return (function (e, t) {
                        var n = O(e);
                        return n.view[c](t * s + n.byteOffset, !0);
                      })(this, t);
                    },
                    set: function (e) {
                      return (function (e, t, r) {
                        var i = O(e);
                        n && (r = (r = N(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                          i.view[d](t * s + i.byteOffset, r, !0);
                      })(this, t, e);
                    },
                    enumerable: !0,
                  });
                };
              q
                ? a &&
                  ((m = t(function (e, t, n, r) {
                    return (
                      u(e, b),
                      A(
                        w(t)
                          ? Z(t)
                            ? void 0 !== r
                              ? new f(t, y(n, s), r)
                              : void 0 !== n
                              ? new f(t, y(n, s))
                              : new f(t)
                            : X(t)
                            ? Q(m, t)
                            : o(I, m, t)
                          : new f(g(t)),
                        e,
                        m
                      )
                    );
                  })),
                  _ && _(m, z),
                  R(T(f), function (e) {
                    e in m || p(m, e, f[e]);
                  }),
                  (m.prototype = b))
                : ((m = t(function (e, t, n, r) {
                    u(e, b);
                    var i,
                      a,
                      l,
                      c = 0,
                      d = 0;
                    if (w(t)) {
                      if (!Z(t)) return X(t) ? Q(m, t) : o(I, m, t);
                      (i = t), (d = y(n, s));
                      var p = t.byteLength;
                      if (void 0 === r) {
                        if (p % s) throw W(Y);
                        if ((a = p - d) < 0) throw W(Y);
                      } else if ((a = h(r) * s) + d > p) throw W(Y);
                      l = a / s;
                    } else (l = g(t)), (i = new U((a = l * s)));
                    for (
                      M(e, {
                        buffer: i,
                        byteOffset: d,
                        byteLength: a,
                        length: l,
                        view: new F(i),
                      });
                      c < l;

                    )
                      x(e, c++);
                  })),
                  _ && _(m, z),
                  (b = m.prototype = j(H))),
                b.constructor !== m && p(b, "constructor", m),
                p(b, B, m),
                J && p(b, J, l),
                (v[l] = m),
                r({ global: !0, forced: m != f, sham: !q }, v),
                K in m || p(m, K, s),
                K in b || p(b, K, s),
                k(l);
            }))
          : (t.exports = function () {});
      },
      {
        "../internals/an-instance": 5,
        "../internals/array-buffer": 9,
        "../internals/array-buffer-view-core": 8,
        "../internals/array-iteration": 12,
        "../internals/classof": 19,
        "../internals/create-non-enumerable-property": 23,
        "../internals/create-property-descriptor": 24,
        "../internals/descriptors": 27,
        "../internals/export": 37,
        "../internals/function-call": 41,
        "../internals/global": 48,
        "../internals/has-own-property": 49,
        "../internals/inherit-if-required": 55,
        "../internals/internal-state": 57,
        "../internals/is-integral-number": 63,
        "../internals/is-object": 64,
        "../internals/is-symbol": 66,
        "../internals/object-create": 72,
        "../internals/object-define-property": 74,
        "../internals/object-get-own-property-descriptor": 75,
        "../internals/object-get-own-property-names": 76,
        "../internals/object-is-prototype-of": 79,
        "../internals/object-set-prototype-of": 83,
        "../internals/set-species": 90,
        "../internals/to-index": 96,
        "../internals/to-length": 99,
        "../internals/to-offset": 101,
        "../internals/to-property-key": 104,
        "../internals/typed-array-constructors-require-wrappers": 108,
        "../internals/typed-array-from": 109,
      },
    ],
    108: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/fails"),
          o = e("../internals/check-correctness-of-iteration"),
          s = e(
            "../internals/array-buffer-view-core"
          ).NATIVE_ARRAY_BUFFER_VIEWS,
          a = r.ArrayBuffer,
          l = r.Int8Array;
        t.exports =
          !s ||
          !i(function () {
            l(1);
          }) ||
          !i(function () {
            new l(-1);
          }) ||
          !o(function (e) {
            new l(), new l(null), new l(1.5), new l(e);
          }, !0) ||
          i(function () {
            return 1 !== new l(new a(2), 1, void 0).length;
          });
      },
      {
        "../internals/array-buffer-view-core": 8,
        "../internals/check-correctness-of-iteration": 17,
        "../internals/fails": 38,
        "../internals/global": 48,
      },
    ],
    109: [
      function (e, t, n) {
        var r = e("../internals/function-bind-context"),
          i = e("../internals/function-call"),
          o = e("../internals/a-constructor"),
          s = e("../internals/to-object"),
          a = e("../internals/length-of-array-like"),
          l = e("../internals/get-iterator"),
          c = e("../internals/get-iterator-method"),
          u = e("../internals/is-array-iterator-method"),
          d = e("../internals/array-buffer-view-core").aTypedArrayConstructor;
        t.exports = function (e) {
          var t,
            n,
            p,
            f,
            h,
            g,
            y = o(this),
            m = s(e),
            b = arguments.length,
            v = b > 1 ? arguments[1] : void 0,
            w = void 0 !== v,
            x = c(m);
          if (x && !u(x))
            for (g = (h = l(m, x)).next, m = []; !(f = i(g, h)).done; )
              m.push(f.value);
          for (
            w && b > 2 && (v = r(v, arguments[2])),
              n = a(m),
              p = new (d(y))(n),
              t = 0;
            n > t;
            t++
          )
            p[t] = w ? v(m[t], t) : m[t];
          return p;
        };
      },
      {
        "../internals/a-constructor": 2,
        "../internals/array-buffer-view-core": 8,
        "../internals/function-bind-context": 39,
        "../internals/function-call": 41,
        "../internals/get-iterator": 46,
        "../internals/get-iterator-method": 45,
        "../internals/is-array-iterator-method": 58,
        "../internals/length-of-array-like": 69,
        "../internals/to-object": 100,
      },
    ],
    110: [
      function (e, t, n) {
        var r = e("../internals/function-uncurry-this"),
          i = 0,
          o = Math.random(),
          s = r((1).toString);
        t.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++i + o, 36);
        };
      },
      { "../internals/function-uncurry-this": 43 },
    ],
    111: [
      function (e, t, n) {
        var r = e("../internals/native-symbol");
        t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      { "../internals/native-symbol": 70 },
    ],
    112: [
      function (e, t, n) {
        var r = e("../internals/descriptors"),
          i = e("../internals/fails");
        t.exports =
          r &&
          i(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      { "../internals/descriptors": 27, "../internals/fails": 38 },
    ],
    113: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/shared"),
          o = e("../internals/has-own-property"),
          s = e("../internals/uid"),
          a = e("../internals/native-symbol"),
          l = e("../internals/use-symbol-as-uid"),
          c = i("wks"),
          u = r.Symbol,
          d = u && u.for,
          p = l ? u : (u && u.withoutSetter) || s;
        t.exports = function (e) {
          if (!o(c, e) || (!a && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            a && o(u, e) ? (c[e] = u[e]) : (c[e] = l && d ? d(t) : p(t));
          }
          return c[e];
        };
      },
      {
        "../internals/global": 48,
        "../internals/has-own-property": 49,
        "../internals/native-symbol": 70,
        "../internals/shared": 94,
        "../internals/uid": 110,
        "../internals/use-symbol-as-uid": 111,
      },
    ],
    114: [
      function (e, t, n) {
        "use strict";
        var r = e("../internals/to-indexed-object"),
          i = e("../internals/add-to-unscopables"),
          o = e("../internals/iterators"),
          s = e("../internals/internal-state"),
          a = e("../internals/object-define-property").f,
          l = e("../internals/define-iterator"),
          c = e("../internals/is-pure"),
          u = e("../internals/descriptors"),
          d = "Array Iterator",
          p = s.set,
          f = s.getterFor(d);
        t.exports = l(
          Array,
          "Array",
          function (e, t) {
            p(this, { type: d, target: r(e), index: 0, kind: t });
          },
          function () {
            var e = f(this),
              t = e.target,
              n = e.kind,
              r = e.index++;
            return !t || r >= t.length
              ? ((e.target = void 0), { value: void 0, done: !0 })
              : "keys" == n
              ? { value: r, done: !1 }
              : "values" == n
              ? { value: t[r], done: !1 }
              : { value: [r, t[r]], done: !1 };
          },
          "values"
        );
        var h = (o.Arguments = o.Array);
        if (
          (i("keys"), i("values"), i("entries"), !c && u && "values" !== h.name)
        )
          try {
            a(h, "name", { value: "values" });
          } catch (e) {}
      },
      {
        "../internals/add-to-unscopables": 4,
        "../internals/define-iterator": 26,
        "../internals/descriptors": 27,
        "../internals/internal-state": 57,
        "../internals/is-pure": 65,
        "../internals/iterators": 68,
        "../internals/object-define-property": 74,
        "../internals/to-indexed-object": 97,
      },
    ],
    115: [
      function (e, t, n) {
        "use strict";
        var r = e("../internals/global"),
          i = e("../internals/function-call"),
          o = e("../internals/array-buffer-view-core"),
          s = e("../internals/length-of-array-like"),
          a = e("../internals/to-offset"),
          l = e("../internals/to-object"),
          c = e("../internals/fails"),
          u = r.RangeError,
          d = r.Int8Array,
          p = d && d.prototype,
          f = p && p.set,
          h = o.aTypedArray,
          g = o.exportTypedArrayMethod,
          y = !c(function () {
            var e = new Uint8ClampedArray(2);
            return i(f, e, { length: 1, 0: 3 }, 1), 3 !== e[1];
          }),
          m =
            y &&
            o.NATIVE_ARRAY_BUFFER_VIEWS &&
            c(function () {
              var e = new d(2);
              return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1];
            });
        g(
          "set",
          function (e) {
            h(this);
            var t = a(arguments.length > 1 ? arguments[1] : void 0, 1),
              n = l(e);
            if (y) return i(f, this, n, t);
            var r = this.length,
              o = s(n),
              c = 0;
            if (o + t > r) throw u("Wrong length");
            for (; c < o; ) this[t + c] = n[c++];
          },
          !y || m
        );
      },
      {
        "../internals/array-buffer-view-core": 8,
        "../internals/fails": 38,
        "../internals/function-call": 41,
        "../internals/global": 48,
        "../internals/length-of-array-like": 69,
        "../internals/to-object": 100,
        "../internals/to-offset": 101,
      },
    ],
    116: [
      function (e, t, n) {
        "use strict";
        var r = e("../internals/global"),
          i = e("../internals/function-uncurry-this"),
          o = e("../internals/fails"),
          s = e("../internals/a-callable"),
          a = e("../internals/array-sort"),
          l = e("../internals/array-buffer-view-core"),
          c = e("../internals/engine-ff-version"),
          u = e("../internals/engine-is-ie-or-edge"),
          d = e("../internals/engine-v8-version"),
          p = e("../internals/engine-webkit-version"),
          f = l.aTypedArray,
          h = l.exportTypedArrayMethod,
          g = r.Uint16Array,
          y = g && i(g.prototype.sort),
          m = !(
            !y ||
            (o(function () {
              y(new g(2), null);
            }) &&
              o(function () {
                y(new g(2), {});
              }))
          ),
          b =
            !!y &&
            !o(function () {
              if (d) return d < 74;
              if (c) return c < 67;
              if (u) return !0;
              if (p) return p < 602;
              var e,
                t,
                n = new g(516),
                r = Array(516);
              for (e = 0; e < 516; e++)
                (t = e % 4), (n[e] = 515 - e), (r[e] = e - 2 * t + 3);
              for (
                y(n, function (e, t) {
                  return ((e / 4) | 0) - ((t / 4) | 0);
                }),
                  e = 0;
                e < 516;
                e++
              )
                if (n[e] !== r[e]) return !0;
            });
        h(
          "sort",
          function (e) {
            return (
              void 0 !== e && s(e),
              b
                ? y(this, e)
                : a(
                    f(this),
                    (function (e) {
                      return function (t, n) {
                        return void 0 !== e
                          ? +e(t, n) || 0
                          : n != n
                          ? -1
                          : t != t
                          ? 1
                          : 0 === t && 0 === n
                          ? 1 / t > 0 && 1 / n < 0
                            ? 1
                            : -1
                          : t > n;
                      };
                    })(e)
                  )
            );
          },
          !b || m
        );
      },
      {
        "../internals/a-callable": 1,
        "../internals/array-buffer-view-core": 8,
        "../internals/array-sort": 14,
        "../internals/engine-ff-version": 31,
        "../internals/engine-is-ie-or-edge": 32,
        "../internals/engine-v8-version": 34,
        "../internals/engine-webkit-version": 35,
        "../internals/fails": 38,
        "../internals/function-uncurry-this": 43,
        "../internals/global": 48,
      },
    ],
    117: [
      function (e, t, n) {
        e("../internals/typed-array-constructor")("Uint8", function (e) {
          return function (t, n, r) {
            return e(this, t, n, r);
          };
        });
      },
      { "../internals/typed-array-constructor": 107 },
    ],
    118: [
      function (e, t, n) {
        e("../internals/typed-array-constructor")(
          "Uint8",
          function (e) {
            return function (t, n, r) {
              return e(this, t, n, r);
            };
          },
          !0
        );
      },
      { "../internals/typed-array-constructor": 107 },
    ],
    119: [
      function (e, t, n) {
        var r = e("../internals/global"),
          i = e("../internals/dom-iterables"),
          o = e("../internals/dom-token-list-prototype"),
          s = e("../modules/es.array.iterator"),
          a = e("../internals/create-non-enumerable-property"),
          l = e("../internals/well-known-symbol"),
          c = l("iterator"),
          u = l("toStringTag"),
          d = s.values,
          p = function (e, t) {
            if (e) {
              if (e[c] !== d)
                try {
                  a(e, c, d);
                } catch (t) {
                  e[c] = d;
                }
              if ((e[u] || a(e, u, t), i[t]))
                for (var n in s)
                  if (e[n] !== s[n])
                    try {
                      a(e, n, s[n]);
                    } catch (t) {
                      e[n] = s[n];
                    }
            }
          };
        for (var f in i) p(r[f] && r[f].prototype, f);
        p(o, "DOMTokenList");
      },
      {
        "../internals/create-non-enumerable-property": 23,
        "../internals/dom-iterables": 29,
        "../internals/dom-token-list-prototype": 30,
        "../internals/global": 48,
        "../internals/well-known-symbol": 113,
        "../modules/es.array.iterator": 114,
      },
    ],
    120: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.getAspectRatio = n.getSizeWithAspectRatio = void 0),
          (n.getSizeWithAspectRatio = function (e, t, n) {
            if (e / t === n) return [e, t];
            const r = Math.round(t * n);
            return r <= e ? [r, t] : [e, Math.round(e / n)];
          }),
          (n.getAspectRatio = function (e, t, n) {
            if (null === e || !Array.isArray(e)) return 9 / 16;
            const r = (function (e, t) {
                const n = Math.max(t.innerWidth, t.innerHeight),
                  r = Math.min(t.innerWidth, t.innerHeight);
                if ("landscape" === e) return n / r;
                return r / n;
              })(t, n),
              i = Math.min.apply(null, e);
            if (r <= i) return i;
            const o = Math.max.apply(null, e);
            return r >= o ? o : r;
          });
      },
      {},
    ],
    121: [
      function (e, t, n) {
        "use strict";
        function r(e, t) {
          const n = e.lastIndexOf("/") + 1;
          let r = e.lastIndexOf("?");
          return (
            -1 === r && (r = e.length),
            e.substr(0, n) +
              t +
              "/" +
              e.substr(n, r - n) +
              "." +
              t +
              e.substr(r, e.length - r)
          );
        }
        e("core-js/modules/web.dom-collections.iterator.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.canUseCompressionForUrl = n.changeToCompressedUrl = void 0),
          (n.changeToCompressedUrl = async function (e, t) {
            const n = e.host,
              [i, o] = await Promise.all([
                n.caniuseBrotli(t),
                n.caniuseGzip(t),
              ]);
            return i ? r(t, "br") : o ? r(t, "gz") : t;
          }),
          (n.canUseCompressionForUrl = function (e) {
            return -1 !== e.indexOf("bin.") && e.endsWith(".js");
          });
      },
      { "core-js/modules/web.dom-collections.iterator.js": 119 },
    ],
    122: [
      function (e, t, n) {
        "use strict";
        async function r(e, t, n) {
          "" === n && (n = "text");
          try {
            if ("json" === n)
              throw new Error("Unspported response type 'json'");
            return await e.loadResource(t, n);
          } catch (n) {
            const r =
              "ERR! Can't download " +
              t +
              ", status: " +
              n.status +
              ", context: " +
              n.message;
            throw (e.module.onerror && e.module.onerror(r), e.log(r), n);
          }
        }
        async function i(e, t, n, r, i) {
          (window.LoaderXhrData[n] = 100),
            (r = "" === (r = r || "") ? "text" : r);
          try {
            if ("json" === r)
              throw new Error("Unspported response type 'json'");
            return await e.loadResource(n, r, (e) => {
              i && i(100, e);
            });
          } catch (t) {
            const r =
              "ERR! Can't download " +
              n +
              ", status: " +
              t.status +
              ", context: " +
              t.message;
            throw (e.module.log(r), e.module.onerror && e.module.onerror(r), t);
          }
        }
        e("core-js/modules/web.dom-collections.iterator.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.initLegacyModuleFunctions = n.initLegacyEnvironment = void 0),
          (n.initLegacyEnvironment = function (e) {
            (window.GpxHost = e.host),
              (window.Module = e.module),
              (window.LoaderXhr = class {
                constructor(t, n) {
                  !(async function (e, t, n) {
                    const r = "" === n.responseType ? "text" : n.responseType;
                    try {
                      if ("json" === r)
                        throw new Error("Unspported response type 'json'");
                      if ("POST" === n.method)
                        throw new Error("Unspported method 'POST'");
                      const i = await e.loadResource(t, r, (e) => {
                        n.progress && n.progress(100, e);
                      });
                      n.success && n.success(i, "http");
                    } catch (r) {
                      const i =
                        "ERR! Can't download " +
                        t +
                        ", status: " +
                        r.status +
                        ", context: " +
                        r.message;
                      throw (
                        (n.fail && n.fail(t, r.statu, r.message), e.log(i), r)
                      );
                    }
                  })(e, t, n);
                }
              }),
              (window.LoaderXhrData = {});
          }),
          (n.initLegacyModuleFunctions = function (e) {
            if (
              ((e.module.loadFile = r.bind(e.module, e)),
              (e.module.loadResource = i.bind(e.module, e)),
              void 0 === e.module.FS)
            ) {
              const t = [
                "createPath",
                "createPreloadedFile",
                "createDataFile",
                "cwd",
                "chdir",
                "createLazyFile",
                "createDevice",
                "writeFile",
                "unlink",
              ];
              e.module.FS = {};
              for (const n of t)
                e.module.FS[n] = function () {
                  return e.module["FS_" + n](...arguments);
                };
            }
          });
      },
      { "core-js/modules/web.dom-collections.iterator.js": 119 },
    ],
    123: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        e("core-js/modules/web.dom-collections.iterator.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Exceptions = void 0);
        const i = "gpx_exceptions_",
          o = "gpx_exceptions_delayed";
        n.Exceptions = class {
          log() {
            console.log(...arguments);
          }
          constructor(e, t, n) {
            r(this, "exceptions", {}),
              r(this, "pushIntervalId", 0),
              r(this, "endpoint", void 0),
              r(this, "projectInfo", void 0),
              r(this, "storage", void 0),
              r(this, "runtimeInfo", void 0),
              (this.endpoint = e.exceptions),
              (this.storage = t),
              (this.log = n),
              (this.projectInfo = this.getProjectInfo(e)),
              (this.runtimeInfo = { mainReady: !1 }),
              this.caniuseExceptions() &&
                (window.addEventListener("error", this.onErrorEvent.bind(this)),
                (this.exceptions = this.loadDelayedExceptionsFromStorage()),
                this.schedulePushExceptions());
          }
          async pushError(e) {
            var t, n;
            if (!this.caniuseExceptions()) return;
            const r = {
                url: window.location.href,
                lineNumber: 1,
                columnNumber: 1,
                message: e.name + " " + e.message,
                stack:
                  null !== (t = e.stack) && void 0 !== t
                    ? t
                    : "Error without stack",
              },
              i = await this.getExceptionInfo(r);
            (i.error.stack =
              null === (n = e.stack) || void 0 === n
                ? void 0
                : n.substring(0, 65536)),
              this.pushException(i);
          }
          async push(e) {
            if (0 !== e.length && this.caniuseExceptions()) {
              for (const n of e) {
                var t;
                const e = await this.getExceptionInfo({
                  url: window.location.href,
                  lineNumber: 1,
                  columnNumber: 1,
                  message: n.name + ":" + n.message,
                  stack:
                    null !== (t = n.stack) && void 0 !== t
                      ? t
                      : "Errors without stack",
                });
                this.existInStorage(e) ||
                  ((this.exceptions[e.hashCode] = e),
                  this.saveExceptionToStorage(e));
              }
              0 !== Object.keys(this.exceptions).length &&
                this.tryPushExceptionsImmediately();
            }
          }
          pushException(e) {
            this.existInStorage(e) ||
              ((this.exceptions[e.hashCode] = e),
              this.saveExceptionToStorage(e),
              this.tryPushExceptionsImmediately());
          }
          caniuseExceptions() {
            try {
              return (
                void 0 !== this.endpoint &&
                void 0 !== this.storage &&
                "undefined" != typeof crypto &&
                void 0 !== crypto.subtle
              );
            } catch {
              return !1;
            }
          }
          getProjectInfo(e) {
            return void 0 !== e
              ? {
                  name: e.name,
                  projectVersion: e.version,
                  engineVersion: e.engineVersion,
                  symbolsVersion: e.symbols,
                }
              : {
                  name: "unloaded-module",
                  projectVersion: "",
                  engineVersion: "",
                };
          }
          getExceptionInfo(e) {
            return new Promise((t) => {
              const n = JSON.stringify({
                  projectInfo: this.projectInfo,
                  message: e.message,
                }),
                r = new TextEncoder().encode(n);
              crypto.subtle
                .digest("SHA-256", r)
                .then((n) => {
                  var r;
                  const i = new TextDecoder().decode(n);
                  let o = "";
                  for (let e = 0; e < i.length; e++)
                    o += i.charCodeAt(e).toString(16);
                  t({
                    hashCode: o.toUpperCase(),
                    error: {
                      message: e.message.toString().substring(0, 65536),
                      url: e.url,
                      lineNumber: e.lineNumber,
                      columnNumber: e.columnNumber,
                      stack:
                        null === (r = e.stack) || void 0 === r
                          ? void 0
                          : r.substring(0, 65536),
                    },
                    projectInfo: this.projectInfo,
                    runtimeInfo: this.runtimeInfo,
                  });
                })
                .catch((e) => {
                  this.log(e);
                });
            });
          }
          async onErrorEvent(e) {
            const t = {
              url: e.filename,
              lineNumber: e.lineno,
              columnNumber: e.colno,
              message: e.message,
              stack: "ErrorEvent without stack",
            };
            if (void 0 !== e.error && null !== e.error)
              if (
                ((t.message +=
                  " Details: " + e.error.name + ":" + e.error.message),
                void 0 !== e.error.stack)
              )
                t.stack = e.error.stack;
              else {
                const e = new Error();
                t.stack = "[Faked stack] " + e.stack;
              }
            this.getExceptionInfo(t).then(this.pushException.bind(this));
          }
          tryPushExceptionsImmediately() {
            0 === this.pushIntervalId &&
              (this.schedulePushExceptions(), this.pushExceptions());
          }
          schedulePushExceptions() {
            0 !== Object.keys(this.exceptions).length &&
              0 === this.pushIntervalId &&
              (this.pushIntervalId = setInterval(
                this.pushExceptions.bind(this),
                3e4
              ));
          }
          pushExceptions() {
            const e = Object.keys(this.exceptions);
            if (0 === e.length)
              return void this.log("WARN! PUSH EXCEPTIONS(0) - Ok");
            const t = JSON.stringify({
                exceptions: this.exceptions,
                systemInfo: window.GpxHost,
              }),
              n = new XMLHttpRequest();
            n.open("POST", this.endpoint),
              n.setRequestHeader("Content-type", "application/json"),
              n.send(t),
              (n.onreadystatechange = (t) => {
                4 === n.readyState &&
                  (200 !== n.status
                    ? this.log(
                        "ERR! CAN'T UPLOAD EXCEPTIONS ON SERVER: ".concat(
                          n.responseText
                        )
                      )
                    : this.log(
                        "WARN! PUSH EXCEPTIONS(".concat(e.length, ") - Ok")
                      ),
                  this.removeSentExceptionsFromDelayed(e),
                  e.map((e) => {
                    delete this.exceptions[e];
                  }));
              });
          }
          existInStorage(e) {
            const t = i + e.hashCode;
            return null !== this.storage.getItem(t);
          }
          loadDelayedExceptionsFromStorage() {
            const e = {},
              t = this.storage.getItem(o);
            if (!t) return e;
            const n = JSON.parse(t);
            for (const t of n) {
              const n = this.storage.getItem(i + t);
              if (!n) continue;
              const r = JSON.parse(n);
              e[r.hashCode] = r;
            }
            return e;
          }
          saveExceptionToStorage(e) {
            const t = i + e.hashCode;
            this.storage.setItem(t, JSON.stringify(e));
            const n = this.storage.getItem(o),
              r = n ? JSON.parse(n) : [];
            r.length > 64
              ? this.log(
                  "ERR! DELAYED EXCEPTIONS HAS EXCEED THE MAXIMUM ALLOWED: ".concat(
                    64
                  )
                )
              : (r.push(e.hashCode),
                this.storage.setItem(o, JSON.stringify(r)));
          }
          removeSentExceptionsFromDelayed(e) {
            const t = this.storage.getItem(o),
              n = (t ? JSON.parse(t) : []).filter((t) => -1 === e.indexOf(t));
            this.storage.setItem(o, JSON.stringify(n));
          }
        };
      },
      { "core-js/modules/web.dom-collections.iterator.js": 119 },
    ],
    124: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.DirectImages = void 0);
        n.DirectImages = class {
          constructor() {
            var e, t, n;
            (n = void 0),
              (t = "module") in (e = this)
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n);
          }
          init(e, t, n, r, i) {
            (this.module = e),
              this.module.log(
                "WARN! Images will be loaded using: image direct"
              );
          }
          load(e, t, n) {
            const r = this.module._malloc(n + 1);
            this.module.stringToUTF8(t, r, n + 1),
              this.module._gpxLoadTextureAsync(e, r),
              this.module._free(r);
          }
          runNextTask(e) {}
        };
      },
      {},
    ],
    125: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.getImageInfo = n.ImageType = void 0),
          (function (e) {
            (e[(e.webp = 0)] = "webp"),
              (e[(e.png = 1)] = "png"),
              (e[(e.jpeg = 2)] = "jpeg");
          })(n.ImageType || (n.ImageType = {})),
          (n.getImageInfo = function (e) {
            const { data: t, pathToKey: n, log: r } = e,
              i = t.split("\n"),
              o = Number.parseInt(i[0], 10),
              s = {};
            for (let e = 0; e < o; ++e) {
              const t = i[2 * e + 1],
                o = n(t),
                a = i[2 * e + 1 + 1].split(" "),
                l = "1" === a[2],
                c = Number.parseInt(a[3], 10),
                u = Number.parseInt(a[4], 10),
                d =
                  !l || (0 === c && 0 === u) ? void 0 : { width: c, height: u },
                p = {
                  name: o,
                  path: t,
                  width: Number.parseInt(a[0], 10),
                  height: Number.parseInt(a[1], 10),
                  preview: d,
                  sync: "1" === a[5],
                  async: "1" === a[6],
                  format: Number.parseInt(a[7], 10),
                  asyncFormat: Number.parseInt(a[8], 10),
                  mipmap: "1" === a[9],
                };
              void 0 !== s[o] &&
                r(
                  "WARN! Overwriting imageInfo[" + o + "]",
                  "found in",
                  s[o].path,
                  "and",
                  t
                ),
                (s[o] = p);
            }
            return s;
          });
      },
      {},
    ],
    126: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.ReversePriorityQueue = void 0);
        n.ReversePriorityQueue = class {
          constructor() {
            var e, t, n;
            (n = []),
              (t = "data") in (e = this)
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n);
          }
          isEmpty() {
            return 0 == this.data.length;
          }
          enqueue(e, t) {
            if (0 !== this.data.length) {
              for (let n = 0; n < this.data.length; n++)
                if (this.data[n].priority < e)
                  return void this.data.splice(n, 0, {
                    priority: e,
                    element: t,
                  });
              this.data.push({ priority: e, element: t });
            } else this.data.push({ priority: e, element: t });
          }
          dequeue() {
            return this.data.pop().element;
          }
          peek() {
            return 0 == this.data.length
              ? void 0
              : this.data[this.data.length - 1].element;
          }
        };
      },
      {},
    ],
    127: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        e("core-js/modules/es.typed-array.uint8-clamped-array.js"),
          e("core-js/modules/es.typed-array.set.js"),
          e("core-js/modules/es.typed-array.sort.js"),
          e("core-js/modules/web.dom-collections.iterator.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Binder = void 0);
        const i = e("./memory"),
          o = e("../reverse-priority-queue"),
          s = (e) => e && 0 == (e & (e - 1)),
          a = new Uint8ClampedArray([0, 0, 0, 0]);
        n.Binder = class {
          constructor(e, t, n, i, s, a) {
            r(this, "module", void 0),
              r(this, "gl", void 0),
              r(this, "webGLVersion", void 0),
              r(this, "textures", void 0),
              r(this, "toBind", void 0),
              r(this, "binded", void 0),
              r(this, "updateQueue", new o.ReversePriorityQueue()),
              r(this, "updateTimeLimit", void 0),
              (this.module = e),
              (this.gl = t),
              (this.webGLVersion = n),
              (this.textures = i),
              (this.toBind = s),
              (this.updateTimeLimit = a),
              (this.binded = {});
          }
          addToQueue(e, t, n, r, i, o, s, a) {
            this.updateQueue.enqueue(i, {
              name: e,
              path: t,
              width: n,
              height: r,
              size: i,
              mipmap: o,
              bytesPerPixel: s,
              data: a,
            });
          }
          runTasks() {
            const e = Date.now();
            for (;;) {
              const t = this.updateQueue.peek();
              if (void 0 === t) break;
              const n = this.getNextTextureId(t.name);
              if (void 0 !== n) {
                if (
                  (this.bindTexture(n, t),
                  Date.now() - e > this.updateTimeLimit)
                )
                  break;
              } else
                i.memory.free(t.size),
                  this.updateQueue.dequeue(),
                  delete this.binded[t.name],
                  --this.toBind[t.name],
                  0 === this.toBind[t.name] && this.textures.end(t.name);
            }
          }
          getNextTextureId(e) {
            const t = this.textures.getTextureIds(e);
            if (0 !== t.length)
              for (const n of t) {
                if (void 0 === this.binded[e]) return (this.binded[e] = [n]), n;
                if (-1 === this.binded[e].indexOf(n))
                  return this.binded[e].push(n), n;
              }
          }
          bindTexture(e, t) {
            const n = this.module.GL.textures[e];
            n
              ? this.doBindTexture(
                  n,
                  t.width,
                  t.height,
                  t.bytesPerPixel,
                  t.data,
                  t.mipmap,
                  t.path
                )
              : this.module.log("WARN! Texture " + e + " deleted");
          }
          bindTransparentTexture(e) {
            const t = this.module.GL.textures[e];
            t
              ? this.doBindTexture(t, 1, 1, 4, a, !1, "transparent")
              : this.module.log("WARN! Texture " + e + " not found");
          }
          doBindTexture(e, t, n, r, i, o, a) {
            const l = this.gl,
              c = l.getParameter(l.TEXTURE_BINDING_2D);
            e !== c && l.bindTexture(l.TEXTURE_2D, e);
            const u = l.UNSIGNED_BYTE,
              d = 4 === r ? l.RGBA : l.RGB,
              p = d === l.RGB ? 1 : 4,
              f = l.getParameter(l.UNPACK_ALIGNMENT);
            p !== f && l.pixelStorei(l.UNPACK_ALIGNMENT, p),
              l.texImage2D(l.TEXTURE_2D, 0, d, t, n, 0, d, u, i),
              o &&
                (2 === this.webGLVersion || (s(t) && s(n))
                  ? l.generateMipmap(l.TEXTURE_2D)
                  : this.module.log(
                      "ERR! Can't generate mipmap for image: " +
                        a +
                        " not power of 2: " +
                        t +
                        "x" +
                        n
                    )),
              p !== f && l.pixelStorei(l.UNPACK_ALIGNMENT, f),
              e !== c && l.bindTexture(l.TEXTURE_2D, c);
          }
        };
      },
      {
        "../reverse-priority-queue": 126,
        "./memory": 129,
        "core-js/modules/es.typed-array.set.js": 115,
        "core-js/modules/es.typed-array.sort.js": 116,
        "core-js/modules/es.typed-array.uint8-clamped-array.js": 118,
        "core-js/modules/web.dom-collections.iterator.js": 119,
      },
    ],
    128: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Loader = void 0);
        const i = e("./memory"),
          o = e("../reverse-priority-queue");
        n.Loader = class {
          constructor(e, t, n, s, a, l, c) {
            r(this, "module", void 0),
              r(this, "worker", void 0),
              r(this, "textures", void 0),
              r(this, "baseUrl", void 0),
              r(this, "localQueue", new o.ReversePriorityQueue()),
              r(this, "remoteQueue", new o.ReversePriorityQueue()),
              r(this, "lastNormalTasksRun", 0),
              r(this, "normalTasksRunTimeLimit", void 0),
              (this.module = e),
              (this.worker = t),
              (this.baseUrl = n.baseUrl + "/async/"),
              (this.textures = s),
              (this.normalTasksRunTimeLimit = a),
              (this.worker.onmessage = (e) => {
                const t = e.data;
                if (void 0 !== t.error)
                  return (
                    this.module.log(
                      "ERR! Can't decode image" + t.name + ": " + t.error
                    ),
                    i.memory.free(t.size),
                    void c(new Error(t.error))
                  );
                l(t.name, t.width, t.height, t.size, t.bytesPerPixel, t.data);
              }),
              (this.worker.onerror = (e) => {
                this.module.log("ERR! Can't decode image. Error: " + e.message),
                  c(e.error);
              });
          }
          loadLocalImage(e) {
            var t, n, r, i;
            const o =
                null !==
                  (t =
                    null === (n = e.preview) || void 0 === n
                      ? void 0
                      : n.width) && void 0 !== t
                  ? t
                  : e.width,
              s =
                null !==
                  (r =
                    null === (i = e.preview) || void 0 === i
                      ? void 0
                      : i.height) && void 0 !== r
                  ? r
                  : e.height;
            this.addImageToQueue(
              e.name,
              e.path,
              o,
              s,
              e.format,
              !1,
              this.localQueue
            );
          }
          loadRemoteImage(e) {
            this.addImageToQueue(
              e.name,
              e.path,
              e.width,
              e.height,
              e.asyncFormat,
              e.mipmap,
              this.remoteQueue
            );
          }
          addImageToQueue(e, t, n, r, o, s, a) {
            const l = n * r * 4;
            l > i.memory.limit()
              ? this.module.log(
                  "ERR! Can't load texture: " +
                    t +
                    ". Size: " +
                    l +
                    ". Expected: " +
                    i.memory.limit() +
                    "."
                )
              : a.enqueue(l, {
                  path: t,
                  name: e,
                  width: n,
                  height: r,
                  size: l,
                  format: o,
                  mipmap: s,
                });
          }
          runTasks(e) {
            (this.lastNormalTasksRun = Date.now()),
              this.runNormalTaskProcessing(),
              e && this.runLowTaskProcessing();
          }
          canRunNextTask(e) {
            const t = e.peek();
            return void 0 !== t && t.size <= i.memory.unused();
          }
          runNormalTaskProcessing() {
            if (!this.canRunNextTask(this.localQueue)) return;
            if (
              Date.now() - this.lastNormalTasksRun >
              this.normalTasksRunTimeLimit
            )
              return;
            const e = this.localQueue.dequeue();
            if (0 === this.textures.getTextureIds(e.name).length)
              return void this.module.log("WARN! Skipped to load " + e.name);
            i.memory.alloc(e.size);
            const t = this.module.FS.readFile(e.path),
              n = {
                command: "decode",
                name: e.name,
                format: e.format,
                size: e.size,
                width: e.width,
                height: e.height,
                data: t,
              };
            this.worker.postMessage(n, [n.data.buffer]),
              this.runNormalTaskProcessing();
          }
          async runLowTaskProcessing() {
            if (
              !this.localQueue.isEmpty() ||
              !this.canRunNextTask(this.remoteQueue)
            )
              return;
            const e = this.remoteQueue.dequeue();
            if (0 === this.textures.getTextureIds(e.name).length)
              return void this.module.log(
                "WARN! Skipped to load async " + e.name
              );
            i.memory.alloc(e.size);
            const t = {
              command: "load",
              name: e.name,
              format: e.format,
              size: e.size,
              width: e.width,
              height: e.height,
              url: this.baseUrl + e.path,
            };
            this.worker.postMessage(t), this.runLowTaskProcessing();
          }
        };
      },
      { "../reverse-priority-queue": 126, "./memory": 129 },
    ],
    129: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.memory = void 0);
        n.memory = new (class {
          constructor() {
            r(this, "module", void 0),
              r(this, "memoryLimit", 0),
              r(this, "memoryUsed", 0),
              r(this, "lastReportTime", 0);
          }
          limit() {
            return this.memoryLimit;
          }
          used() {
            return this.memoryUsed;
          }
          unused() {
            return this.memoryLimit - this.memoryUsed;
          }
          init(e, t) {
            (this.module = e), (this.memoryLimit = t);
          }
          alloc(e) {
            if (this.memoryLimit < this.memoryUsed + e)
              throw new Error("Memory buffer overflow");
            (this.memoryUsed += e), this.report();
          }
          free(e) {
            (this.memoryUsed -= e),
              this.memoryUsed < 0 && (this.memoryUsed = 0),
              this.report();
          }
          report() {
            Date.now() - this.lastReportTime < 1e3 ||
              0 === this.memoryUsed ||
              ((this.lastReportTime = Date.now()),
              this.module.log(
                "Memory usage " +
                  (this.memoryUsed / 1024 / 1024).toFixed(2) +
                  " Mb / " +
                  (this.memoryLimit / 1024 / 1024).toFixed(0) +
                  " Mb"
              ));
          }
        })();
      },
      {},
    ],
    130: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        e("core-js/modules/web.dom-collections.iterator.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Textures = void 0);
        n.Textures = class {
          constructor(e) {
            r(this, "module", void 0),
              r(this, "textures", void 0),
              (this.module = e),
              (this.textures = {});
          }
          contains(e) {
            return void 0 !== this.textures[e];
          }
          add(e, t) {
            if (void 0 === this.textures[e])
              return (this.textures[e] = {}), void (this.textures[e][t] = t);
            void 0 === this.textures[e][t] && (this.textures[e][t] = t);
          }
          getTextureIds(e) {
            if (void 0 === this.textures[e]) return [];
            for (const t of Object.values(this.textures[e]))
              this.module.GL.textures[t] || delete this.textures[e][t];
            return Object.values(this.textures[e]);
          }
          end(e) {
            this.contains(e)
              ? delete this.textures[e]
              : this.module.log("ERR! Try remove unavailable texture");
          }
        };
      },
      { "core-js/modules/web.dom-collections.iterator.js": 119 },
    ],
    131: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.unityImagePathToKey =
            n.defaultImagePathToKey =
            n.WorkerImages =
              void 0);
        const i = e("../image-info"),
          o = e("./loader"),
          s = e("./binder"),
          a = e("./memory"),
          l = e("./textures");
        function c(e) {
          return e;
        }
        function u(e) {
          const t = e.split("/");
          return t[t.length - 1].split(".")[0];
        }
        (n.WorkerImages = class {
          constructor(e) {
            r(this, "module", void 0),
              r(this, "worker", void 0),
              r(this, "imagesInfo", void 0),
              r(this, "loader", void 0),
              r(this, "binder", void 0),
              r(this, "textures", void 0),
              r(this, "toBind", {}),
              (this.worker = e);
          }
          init(e, t, n, r, d) {
            (this.module = e),
              this.module.log(
                "Images will be loaded using: image worker [" +
                  t.imageLoaderType +
                  "]"
              );
            const p =
              1024 *
              ("Safari" === t.systemInfo.browser && t.systemInfo.mobile
                ? 32
                : 64) *
              1024;
            a.memory.init(e, p), (this.textures = new l.Textures(e));
            const f = 8.333333333333334;
            (this.loader = new o.Loader(
              e,
              this.worker,
              t,
              this.textures,
              f,
              this.update.bind(this),
              d
            )),
              (this.binder = new s.Binder(
                e,
                n,
                r,
                this.textures,
                this.toBind,
                f
              ));
            const h = this.module.FS.readFile("gpx.resources", {
              encoding: "utf8",
            });
            this.imagesInfo = (0, i.getImageInfo)({
              data: h,
              pathToKey: "unity" === this.module.origin ? u : c,
              log: this.module.log,
            });
          }
          runNextTask(e) {
            this.loader.runTasks(e), this.binder.runTasks();
          }
          load(e, t) {
            const n = this.imagesInfo[t];
            if (void 0 !== n) {
              if (!this.textures.contains(t)) {
                var r, i;
                if (void 0 !== n.preview || n.sync)
                  this.loader.loadLocalImage(n),
                    (this.toBind[t] =
                      (null !== (r = this.toBind[t]) && void 0 !== r ? r : 0) +
                      1);
                if (n.async)
                  this.loader.loadRemoteImage(n),
                    (this.toBind[t] =
                      (null !== (i = this.toBind[t]) && void 0 !== i ? i : 0) +
                      1);
              }
              this.binder.bindTransparentTexture(e), this.textures.add(t, e);
            } else
              this.module.log(
                "ERR! Can't find image info for texture: ",
                t,
                "known images",
                Object.keys(this.imagesInfo)
              );
          }
          update(e, t, n, r, i, o) {
            if (void 0 === o)
              return void this.module.log("ERR! Can't update image: " + e);
            const s = this.imagesInfo[e];
            this.binder.addToQueue(e, s.path, t, n, r, s.mipmap, i, o);
          }
        }),
          (n.defaultImagePathToKey = c),
          (n.unityImagePathToKey = u);
      },
      {
        "../image-info": 125,
        "./binder": 127,
        "./loader": 128,
        "./memory": 129,
        "./textures": 130,
      },
    ],
    132: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.loadingInfo = void 0);
        const i =
            "\n        #loading {\n            position: absolute;\n            left: 0;\n            top: 0;\n            bottom: 0;\n            right: 0;\n            z-index: 999;\n            display: flex;\n            flex-direction: column;\n            align-content: center;\n            justify-content: center;\n        }\n        \n        .loading-spinner {\n            position:relative;\n            margin:auto;\n            width: 250px;\n            height: 250px;\n            display: inline-block;\n            overflow: hidden;\n            background: none;\n        }\n\n        .loading-spinner-items {\n            position: absolute;\n            top: 50px;\n            bottom: 50px;\n            left: 50px;\n            right: 50px;\n            width: 150px;\n            height: 150px;\n            transform: translateZ(0) scale(1);\n            backface-visibility: hidden;\n            transform-origin: 0 0;\n        }\n        .loading-spinner-items div { \n            box-sizing: content-box; \n        }\n        @keyframes loading-spinner-items {\n            0% { opacity: 1 }\n            100% { opacity: 0 }\n        }\n        .loading-spinner-items div {\n            left: 62.5px;\n            top: 2.5px;\n            position: absolute;\n            animation: loading-spinner-items linear 0.9174311926605504s infinite;\n            width: 25px;\n            height: 25px;\n            border-radius: 6.75px / 6.75px;\n            transform-origin: 12.5px 72.5px;\n        }\n        .loading-spinner-items .loading-spinner-item-1 {\n            transform: rotate(0deg);\n            animation-delay: -0.8340283569641368s;\n            background: #00e579;\n        }\n        .loading-spinner-items .loading-spinner-item-2 {\n            transform: rotate(32.72727272727273deg);\n            animation-delay: -0.7506255212677231s;\n            background: #00d2d9;\n        }\n        .loading-spinner-items .loading-spinner-item-3 {\n            transform: rotate(65.45454545454545deg);\n            animation-delay: -0.6672226855713094s;\n            background: #007dff;\n        }\n        .loading-spinner-items .loading-spinner-item-4 {\n            transform: rotate(98.18181818181819deg);\n            animation-delay: -0.5838198498748958s;\n            background: #00e579;\n        }\n        .loading-spinner-items .loading-spinner-item-5 {\n            transform: rotate(130.9090909090909deg);\n            animation-delay: -0.5004170141784821s;\n            background: #00d2d9;\n        }\n        .loading-spinner-items .loading-spinner-item-6 {\n            transform: rotate(163.63636363636363deg);\n            animation-delay: -0.4170141784820684s;\n            background: #007dff;\n        }\n        .loading-spinner-items .loading-spinner-item-7 {\n            transform: rotate(196.36363636363637deg);\n            animation-delay: -0.3336113427856547s;\n            background: #00e579;\n        }\n        .loading-spinner-items .loading-spinner-item-8 {\n            transform: rotate(229.0909090909091deg);\n            animation-delay: -0.25020850708924103s;\n            background: #00d2d9;\n        }\n        .loading-spinner-items .loading-spinner-item-9 {\n            transform: rotate(261.8181818181818deg);\n            animation-delay: -0.16680567139282734s;\n            background: #007dff;\n        }\n        .loading-spinner-items .loading-spinner-item-10 {\n            transform: rotate(294.54545454545456deg);\n            animation-delay: -0.08340283569641367s;\n            background: #00e579;\n        }\n        .loading-spinner-items .loading-spinner-item-11 {\n            transform: rotate(327.27272727272725deg);\n            animation-delay: 0s;\n            background: #00d2d9;\n        }\n\n        .loading-progress {\n            position: absolute;\n            top: 50px;\n            bottom: 50px;\n            left: 50px;\n            right: 50px;\n            width: 150px;\n            height: 150px;\n            margin-left: 6px;\n            margin-top: 2px;\n            display: flex;\n            flex-direction: column;\n            align-content: center;\n            justify-content: center;\n        }\n\n        .running-progress {\n            position: absolute;\n            top: 200px;\n            width: 100%;\n            height: 50px;\n            display: flex;\n            flex-direction: column;\n            align-content: center;\n            justify-content: center;\n        }\n\n        .loading-text {\n            color: white;\n            display: block;\n            text-align: center;\n            font-weight: bold;\n            text-shadow: -1px 0 7px rgba(6, 29, 98, 0.30), \n                         0 1px 7px rgba(6, 29, 98, 0.30), \n                         1px 0 7px rgba(6, 29, 98, 0.30), \n                         0 -1px 7px rgba(6, 29, 98, 0.30);\n        }\n        .loading-progress span {\n            font-size: 24px;\n        }\n        .running-progress span {\n            font-size: 16px;\n        }\n",
          o =
            '\n        <div class="loading-spinner">\n            <div class="loading-spinner-items">\n                <div class="loading-spinner-item-1"></div>\n                <div class="loading-spinner-item-2"></div>\n                <div class="loading-spinner-item-3"></div>\n                <div class="loading-spinner-item-4"></div>\n                <div class="loading-spinner-item-5"></div>\n                <div class="loading-spinner-item-6"></div>\n                <div class="loading-spinner-item-7"></div>\n                <div class="loading-spinner-item-8"></div>\n                <div class="loading-spinner-item-9"></div>\n                <div class="loading-spinner-item-10"></div>\n                <div class="loading-spinner-item-11"></div>\n            </div>\n            <div class="loading-progress">\n                <span class="loading-text"></span>\n            </div>\n            <div class="running-progress">\n                <span class="loading-text"></span>\n            </div>\n        </div>\n';
        n.loadingInfo = new (class {
          constructor() {
            r(this, "defaultDuration", 3e4),
              r(this, "loading", void 0),
              r(this, "loadingText", void 0),
              r(this, "runningText", void 0),
              r(this, "hideTimeout", 500),
              r(this, "reportedPercent", 0),
              r(this, "intervalId", -1),
              r(this, "startedAt", void 0),
              r(this, "stoppedAt", void 0),
              r(this, "phrasesTimes", 4),
              r(this, "phrases", [
                "Checking data",
                "Checking runtime",
                "Initializing services",
                "Preparing the environment",
                "Starting the game",
              ]);
            const e = document.head || document.getElementsByTagName("head")[0],
              t = document.createElement("style");
            (t.type = "text/css"),
              t.styleSheet
                ? (t.styleSheet.cssText = i)
                : t.appendChild(document.createTextNode(i)),
              e.appendChild(t),
              (this.loading = document.createElement("div")),
              (this.loading.id = "loading"),
              (this.loading.innerHTML = o),
              document.body.appendChild(this.loading),
              (this.loadingText = document.querySelector(
                ".loading-progress span"
              )),
              (this.runningText = document.querySelector(
                ".running-progress span"
              ));
          }
          updateProgress(e) {
            ++this.reportedPercent;
            const t = Math.round((Date.now() - this.startedAt) / e);
            (this.reportedPercent = Math.max(this.reportedPercent, t)),
              this.reportedPercent < 100
                ? (this.loadingText.innerHTML = this.reportedPercent + "%")
                : ((this.loadingText.innerHTML = "99%"),
                  (this.reportedPercent = 0),
                  clearInterval(this.intervalId),
                  (this.intervalId = setInterval(
                    () => this.updateText(),
                    1e3
                  )));
          }
          updateText() {
            this.loadingText.innerHTML = "";
            const e = Math.min(
              Math.trunc(this.reportedPercent / this.phrasesTimes),
              this.phrases.length - 1
            );
            let t = this.phrases[e] + "&nbsp;";
            const n = this.reportedPercent % this.phrasesTimes;
            for (let e = 0; e < this.phrasesTimes; ++e)
              t += e < n ? "." : "&nbsp;";
            (this.runningText.innerHTML = t), ++this.reportedPercent;
          }
          start(e) {
            (this.loading.style.display = ""),
              (this.loadingText.innerHTML = ""),
              (this.runningText.innerHTML = ""),
              (this.reportedPercent = 0),
              (this.startedAt = Date.now()),
              (this.stoppedAt = 0);
            const t =
              e <= 0
                ? this.defaultDuration / 100
                : Math.min(e, this.defaultDuration) / 100;
            this.updateProgress(t),
              (this.intervalId = setInterval(() => this.updateProgress(t), t));
          }
          stop() {
            (this.stoppedAt = Date.now() + this.hideTimeout),
              setTimeout(() => {
                (this.loadingText.innerHTML = ""),
                  (this.runningText.innerHTML = ""),
                  clearInterval(this.intervalId),
                  (this.loading.style.display = "none");
              }, this.hideTimeout);
          }
          getDuration() {
            return this.startedAt > 0 &&
              this.stoppedAt > 0 &&
              this.startedAt < this.stoppedAt
              ? this.stoppedAt - this.startedAt
              : null;
          }
        })();
      },
      {},
    ],
    133: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.logcalls = void 0);
        let r = 0;
        n.logcalls = {
          init: (e, t, n) => {
            const r = e.env || {};
            if (void 0 === n.logcalls) {
              const e = () => {};
              return (r.logcall = e), (r.wipedcall = e), void (t.wipedcall = e);
            }
            const o = Date.now() + "." + 1e3 * Math.random(),
              s =
                n.name +
                "@" +
                n.symbols +
                (function (e) {
                  if (e && e.length > 0) return "." + e;
                  return "";
                })(n.engineVersion);
            i(r, t, n.logcalls, o, s);
          },
        };
        const i = (e, t, n, i, o) => {
          const s = n + "/put?seed=" + i + "&game=" + o,
            a = {};
          let l = 0,
            c = null,
            u = {};
          const d = () => {
            !(function (e, t, n) {
              const i = Object.keys(n).length;
              if (0 === i || r === i)
                return void e.log("WARN! PUSHCALLS(0) - Ok");
              (r = i), e.log("WARN! PUSHCALLS(".concat(r, ") - PLEASE WAIT"));
              const o = JSON.stringify(n),
                s = new XMLHttpRequest();
              s.open("POST", t),
                s.setRequestHeader("Content-type", "application/json"),
                s.send(o),
                (s.onreadystatechange = (t) => {
                  4 === s.readyState &&
                    200 === s.status &&
                    e.log(
                      "WARN! PUSHCALLS(".concat(r, ") - Ok, new - ") +
                        JSON.parse(s.responseText).added
                    );
                });
            })(t, s, a);
          };
          (function (e, t) {
            return (
              e.log("WARN! DEBUG RUNTIME! DONWLOADING CALL STATS"),
              new Promise((e) => {
                const n = new XMLHttpRequest();
                n.open("GET", t),
                  (n.onreadystatechange = (t) => {
                    if (4 === n.readyState && 200 === n.status) {
                      const t = JSON.parse(n.responseText).json;
                      delete t.buckets, e(t);
                    }
                  }),
                  n.send();
              })
            );
          })(t, n + "/get?game=" + o).then((e) => {
            (c = e),
              g(),
              t.log("DEBUG RUNTIME READY!"),
              d(),
              setInterval(d, 15e3);
          });
          const p = (e) => {
              null != c
                ? e in c || (a[e] = a[e] + 1 || 1)
                : (u[e] = u[e] + 1 || 1);
            },
            f = (e) => {
              0 === l ||
                h(e) ||
                (clearInterval(l),
                (l = 0),
                t.log(
                  "ERR! Profile bundle doesn't supported on backend side.\nPUSHCALLS will not be called!"
                )),
                p(e),
                t.log("ERR! wasmName: ".concat(e, " was wiped out"));
            };
          (e.logcall = p), (e.wipedcall = f), (t.wipedcall = f);
          const h = (e) =>
              "number" == typeof e || ("string" == typeof e && /^\d+$/.test(e)),
            g = () => {
              if (null != u) {
                let e = 0;
                Object.keys(u).forEach((t) => {
                  const n = Number.parseInt(t, 10);
                  n in c || ((a[n] = u[n]), e++);
                }),
                  t.log("ADDED ".concat(e, " DEFFERED CALLS")),
                  (u = null);
              }
            };
        };
      },
      {},
    ],
    134: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        e("core-js/modules/web.dom-collections.iterator.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Metrics = void 0);
        n.Metrics = class {
          constructor(e) {
            r(this, "startedAt", Date.now()),
              r(this, "metrics", {}),
              r(this, "localMetrics", {}),
              r(this, "endpoint", void 0),
              r(this, "projectInfo", void 0),
              (this.endpoint = e.metrics),
              (this.projectInfo = {
                name: e.name,
                version: e.version,
                symbols: e.symbols,
                engineVersion: e.engineVersion,
              });
          }
          push(e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "";
            this.metrics[e] = { value: t, unit: n };
          }
          pushLocal(e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "";
            this.push(e, t, n), (this.localMetrics[e] = 1);
          }
          pushTiming(e, t) {
            this.push(e, t, "ms");
          }
          pushLocalTiming(e, t) {
            this.pushTiming(e, t), (this.localMetrics[e] = 1);
          }
          send(e) {
            return new Promise((t, n) => {
              if (!this.endpoint)
                return void n(
                  new Error("Forbidden to send metrics from this host")
                );
              const r = {
                  browser: e.systemInfo.browser,
                  browserVersion: e.systemInfo.browserVersion,
                  mobile: e.systemInfo.mobile,
                  os: e.systemInfo.os,
                  osVersion: e.systemInfo.osVersion,
                  gpu: e.systemInfo.gpu,
                  deviceModel: e.systemInfo.deviceModel,
                  useCache: e.indexedDbSupported,
                  imageLoader: e.imageLoaderType,
                },
                i = {};
              for (const e of Object.keys(this.metrics)) {
                const t = this.metrics[e];
                void 0 === this.localMetrics[e] && t.value && (i[e] = t.value);
              }
              const o = JSON.stringify({
                  metrics: i,
                  projectInfo: this.projectInfo,
                  systemInfo: r,
                }),
                s = new XMLHttpRequest();
              s.open("POST", this.endpoint, !0),
                s.setRequestHeader("Content-type", "application/json"),
                "function" == typeof s.addEventListener &&
                  s.addEventListener("error", (e) => {
                    n(
                      new Error(
                        "Invalid xhr response. Code: " +
                          s.status +
                          "status: " +
                          s.statusText +
                          " url: " +
                          this.endpoint
                      )
                    );
                  }),
                (s.onreadystatechange = () => {
                  if (4 === s.readyState) {
                    if (200 !== s.status)
                      return void n(
                        new Error(
                          "Invalid xhr response. Code: " +
                            s.status +
                            "status: " +
                            s.responseText +
                            " url: " +
                            this.endpoint
                        )
                      );
                    t("WARN! PUSH METRICS - OK");
                  }
                }),
                s.send(o);
            });
          }
          report(e, t) {
            let n = "\n\tLocation: ".concat(location.href);
            (n += "\n\tProject: ".concat(this.projectInfo.name)),
              (n += "@"
                .concat(this.projectInfo.version, ".")
                .concat(this.projectInfo.engineVersion, "\n"));
            const r = { width: e.canvas.width, height: e.canvas.height },
              i = { width: e.width, height: e.height },
              o = Math.round((i.width / i.height) * 100) / 100;
            (n += "\tRender buffer: "
              .concat(Math.round(r.width), "x")
              .concat(Math.round(r.height), "\n")),
              (n += "\tCanvas: "
                .concat(Math.round(i.width), "x")
                .concat(Math.round(i.height), " (")
                .concat(o, ")")),
              (n += " dpi: ".concat(e.devicePixelRatio, "\n")),
              (n += "\n\tHost: ".concat(JSON.stringify(t, null, "\t"), "\n")),
              (n += "\n\tMetrics:\n");
            for (const [e, t] of Object.entries(this.metrics))
              void 0 === this.localMetrics[e] &&
                (n += "\t\t"
                  .concat(e, ": ")
                  .concat(t.value, " ")
                  .concat(t.unit, "\n"));
            return n;
          }
        };
      },
      { "core-js/modules/web.dom-collections.iterator.js": 119 },
    ],
    135: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.getRenderBufferSize = void 0);
        n.getRenderBufferSize = function (e) {
          if (
            !(function (e) {
              if ("unity" !== e.config.origin) return !0;
              return (
                Number.parseInt(e.config.engineVersion.split(".")[0], 10) >=
                2021
              );
            })(e)
          )
            return (
              e.log(
                "WARN! Engine does not support High-DPI dislays, forcing to full width & height"
              ),
              {
                dpi: 1,
                width: e.targetWidth,
                height: e.targetHeight,
                matchWebGLToCanvasSize: !0,
              }
            );
          const t = Math.min(window.devicePixelRatio, 2),
            n = Math.max(e.targetWidth, e.targetHeight) * t;
          if (n > 960) {
            const r = 960 / n,
              i = e.targetWidth * r,
              o = e.targetHeight * r;
            return (
              e.log(
                "WARN! Canvas size is too big, resized from "
                  .concat(e.targetWidth * t, "x")
                  .concat(e.targetHeight * t) +
                  " to ".concat(i * t, "x").concat(o * t)
              ),
              { dpi: t, width: i, height: o, matchWebGLToCanvasSize: false }
            );
          }
          return {
            dpi: t,
            width: e.targetWidth,
            height: e.targetHeight,
            matchWebGLToCanvasSize: false,
          };
        };
      },
      {},
    ],
    136: [
      function (require, module, exports) {
        "use strict";
        function _defineProperty(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        require("core-js/modules/web.dom-collections.iterator.js"),
          Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.SDK = void 0);
        const storage_1 = require("./storage/storage"),
          wasm_1 = require("./wasm"),
          webgl_1 = require("./webgl"),
          webgl_2 = require("./wrappers/webgl"),
          deprecated_1 = require("./deprecated"),
          compression_1 = require("./compression"),
          aspect_1 = require("./aspect"),
          render_buffer_size_1 = require("./render-buffer-size"),
          arl_1 = require("./wrappers/arl"),
          logcalls_1 = require("./logcalls"),
          split_1 = require("./split"),
          exceptions_1 = require("./exceptions"),
          metrics_1 = require("./metrics"),
          loading_info_1 = require("./loading-info"),
          unity_requests_1 = require("./wrappers/unity-requests"),
          worker_images_1 = require("./images/worker/worker-images"),
          direct_images_1 = require("./images/direct/direct-images");
        class SDK {
          constructor(e) {
            var t;
            switch (
              (_defineProperty(this, "tinyLoader", void 0),
              _defineProperty(this, "config", void 0),
              _defineProperty(this, "host", void 0),
              _defineProperty(this, "storage", void 0),
              _defineProperty(this, "canvas", void 0),
              _defineProperty(this, "GL", void 0),
              _defineProperty(this, "exceptions", void 0),
              _defineProperty(this, "metrics", void 0),
              _defineProperty(this, "images", void 0),
              _defineProperty(this, "targetAspect", void 0),
              _defineProperty(this, "targetWidth", void 0),
              _defineProperty(this, "targetHeight", void 0),
              _defineProperty(this, "module", {}),
              _defineProperty(this, "loadResourceFn", void 0),
              _defineProperty(this, "tinyLoaderLoadResourceCopy", void 0),
              (this.tinyLoader = e),
              (this.config = e.config),
              (this.host = e.host),
              (this.storage = new storage_1.LStorage(
                null === (t = window.GamePix) || void 0 === t
                  ? void 0
                  : t.localStorage,
                this.config.name.toLowerCase() + "."
              )),
              (this.log = this.log.bind(this)),
              (this.metrics = new metrics_1.Metrics(this.config)),
              (this.exceptions = new exceptions_1.Exceptions(
                this.config,
                this.storage,
                this.log
              )),
              (this.loadResourceFn = this.tinyLoader.loadResource.bind(
                this.tinyLoader
              )),
              (this.loadResource = this.loadResource.bind(this)),
              (this.tinyLoaderLoadResourceCopy = this.tinyLoader.loadResource),
              (this.tinyLoader.loadResource = async () => {
                throw new Error(
                  "Do not use tinyLoader.loadResource use sdk.loadResource instead"
                );
              }),
              this.host.wasmSupportLevel())
            ) {
              case "not-supported":
                throw new Error(
                  "Web assembly not supported, can't start the game"
                );
              case "partial":
                "ru" === this.host.systemInfo.language
                  ? alert(
                      "Ð’Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ ÑƒÑÑ‚Ð°Ñ€ÐµÐ²ÑˆÑƒÑŽ Ð²ÐµÑ€ÑÐ¸ÑŽ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð°. ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð° Ð¾Ð±Ð½Ð¾Ð²Ð¸Ñ‚Ðµ Ð²Ð°Ñˆ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€.\nÐœÑ‹ Ð½Ðµ Ð³Ð°Ñ€Ð°Ð½Ñ‚Ð¸Ñ€ÑƒÐµÐ¼ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð½ÑƒÑŽ Ñ€Ð°Ð±Ð¾Ñ‚Ñƒ Ð¸Ð³Ñ€Ñ‹."
                    )
                  : alert(
                      "You are using an outdated version of browser. Please, update your browser.\nWe do not guarantee the correct work of the game."
                    );
            }
            if (
              ((this.canvas = document.getElementById("canvas")),
              null === this.canvas)
            )
              throw new Error(
                "Can't create sdk instance without canvas#canvas"
              );
            (this.targetAspect = (0, aspect_1.getAspectRatio)(
              this.config.runtime.aspect,
              this.config.runtime.orientation,
              window
            )),
              (this.resizeCanvas = this.resizeCanvas.bind(this)),
              this.resizeCanvas(),
              window.addEventListener("resize", this.resizeCanvas);
            const n = this.storage.getItem("gpxRunTime");
            let r = loading_info_1.loadingInfo.defaultDuration;
            if (null !== n)
              try {
                r = Number.parseInt(n, 10) || r;
              } catch (e) {
                this.log("ERR! Can't parse loading time from local storage", e);
              }
            loading_info_1.loadingInfo.start(r);
          }
          async init() {
            var e;
            (this.GL = await (0, webgl_1.getWebGLContext)(
              this.log,
              this.canvas,
              this.config,
              null === (e = window.GamePix) || void 0 === e
                ? void 0
                : e.maxWebGLVersion
            )),
              (this.host.systemInfo.gpu = this.host.gpuNameOf(this.GL.context)),
              (this.host.systemInfo.hasWebGL = this.GL.version),
              (0, deprecated_1.initLegacyEnvironment)(this);
          }
          exit() {
            if (
              (window.removeEventListener("resize", this.resizeCanvas),
              (this.tinyLoader.loadResource = this.tinyLoaderLoadResourceCopy),
              delete this.tinyLoaderLoadResourceCopy,
              "function" == typeof this.module._forceExit)
            )
              try {
                this.module._forceExit();
              } catch (e) {
                this.log("WARN! forceExit", e);
              }
          }
          log() {
            this.tinyLoader.log(...arguments);
          }
          async loadResource(e, t, n) {
            return (
              (0, compression_1.canUseCompressionForUrl)(e) &&
                (e = await (0, compression_1.changeToCompressedUrl)(this, e)),
              this.loadResourceFn(e, t, n)
            );
          }
          async load() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "wbin",
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "bin.data";
            delete this.load, this.initModule(this.module);
            let n = this.loadFiles(e, t);
            const r = this.instantiateData(n);
            await this.instantiateModule(n, r),
              (n = void 0),
              "boolean" != typeof window.canRunLowTasks &&
                (window.canRunLowTasks = !0),
              this.module._testkit_async_setCanRunLowTasks(
                window.canRunLowTasks
              );
            (this.module.origin = this.config.origin),
              this.images.init(
                this.module,
                this.host,
                this.GL.context,
                this.GL.version,
                (e) => {
                  this.exceptions.pushError(e);
                }
              ),
              (this.module.loadTexture = this.images.load.bind(this.images)),
              this.runModule();
          }
          initModule(e) {
            var t, n;
            return (
              "function" != typeof e.log && (e.log = this.log.bind(this)),
              void 0 === e.ls && (e.ls = this.storage),
              void 0 === e.loading &&
                (e.loading = (e) => {
                  this.log("Loading: " + e + "%");
                }),
              (e.onresize = this.resizeCanvas.bind(this)),
              (e.mainReady = this.mainReady.bind(this)),
              (e.print = this.module.log),
              (e.printErr = this.module.log),
              (e.setStatus = () => {}),
              (e.canvas = this.canvas),
              (e.setInterval = setInterval.bind(window)),
              (e.clearInterval = clearInterval.bind(window)),
              (e.setTimeout = setTimeout.bind(window)),
              (e.clearTimeout = clearTimeout.bind(window)),
              (e.preRun = null !== (t = e.preRun) && void 0 !== t ? t : []),
              (e.postRun = null !== (n = e.postRun) && void 0 !== n ? n : []),
              (e.webglContextAttributes =
                this.host.systemInfo.webglContextAttributes),
              (e.noInitialRun = !0),
              (e.noImageDecoding = !0),
              (e.noAudioDecoding = !0),
              webgl_2.WebGLWrapper.applyToContext(
                this.GL.context,
                e,
                "unity" === this.config.origin,
                this.GL.version
              ),
              (e.stringToBuffer = (e, t) => {
                const n = this.module.lengthBytesUTF8(e) + 1,
                  r = this.module._malloc(n);
                this.module.stringToUTF8(e, r, n), t(r), this.module._free(r);
              }),
              (e.idle = () => {
                if (void 0 !== e._image_direct2_idle)
                  return e._image_direct2_idle();
              }),
              (e.tick = this.tick.bind(this)),
              (0, deprecated_1.initLegacyModuleFunctions)(this),
              e
            );
          }
          loadFiles(e, t) {
            const n = t + "._.js",
              r = t + ".js",
              i = e + "._.js",
              o = e + ".js";
            let s = 0,
              a = 0,
              l = -1;
            const c = () => {
              const e = Math.max(0, Math.min(100, Math.round((a + s) / 2)));
              void 0 !== this.module.loading &&
                l < e &&
                (this.module.loading(e), (l = e));
            };
            return {
              wasmFile: i,
              data: this.loadResource(n, "arraybuffer", (e) => {
                (s = e), c();
              }),
              dataJs: this.loadResource(r, "text"),
              wasm: this.loadResource(
                i,
                this.host.wasmStreaming ? "response" : "arraybuffer",
                (e) => {
                  (a = e), c();
                }
              ),
              wasmJs: this.loadResource(o, "text"),
            };
          }
          async instantiateData(files) {
            const data = await files.data,
              dataJs = await files.dataJs;
            this.module.getPreloadedPackage = (e, t) => data;
            const Module = this.module;
            eval(dataJs);
          }
          instantiateModule(e, t) {
            return new Promise((n, r) => {
              (this.module.onRuntimeInitialized = n),
                (this.module.instantiateWasm = async (n, i) => {
                  try {
                    return await this.instantiateWasm(e, n, async (e, n) => {
                      try {
                        return await t, i(e, n);
                      } catch (e) {
                        throw (r(e), e);
                      }
                    });
                  } catch (e) {
                    throw (
                      (this.log(
                        "ERR! Unable to instantiate wasm, will not run"
                      ),
                      this.log(JSON.stringify(e)),
                      r(e),
                      e)
                    );
                  }
                }),
                e.wasmJs
                  .then((e) => {
                    new Function(["Module"], e)(this.module);
                  })
                  .catch(r);
            });
          }
          async initJSEnvironment(e) {
            if ("unity" !== this.config.origin) return;
            unity_requests_1.unityRequestsWrapper.init(e, this.module),
              arl_1.arl.init(e, this.module),
              logcalls_1.logcalls.init(e, this.module, this.config);
            const t = new split_1.Split(this);
            await t.init(e);
          }
          async instantiateWasm(e, t, n) {
            let r;
            await this.initJSEnvironment(t);
            let i = await e.wasm;
            try {
              r = await (0, wasm_1.wasmInstantiate)(this, i, t);
            } catch (n) {
              if (!(i instanceof Response)) throw n;
              (i = await this.loadResource(e.wasmFile, "arraybuffer")),
                (r = await (0, wasm_1.wasmInstantiate)(this, i, t));
            }
            return (
              this.metrics.pushTiming("compileTime", r.compileTime),
              this.metrics.pushTiming("instantiateTime", r.instantiateTime),
              this.metrics.push(
                "instantiateStream",
                "stream" === r.instantiateType ? 1 : 0
              ),
              n(r.instance, r.wasmModule)
            );
          }
          runModule() {
            var e = this;
            (this.module.progress = () => {}), this.module.run();
            const t = function () {
              const {
                dpi: t,
                width: n,
                height: r,
                matchWebGLToCanvasSize: i,
              } = (0, render_buffer_size_1.getRenderBufferSize)(e);
              (e.module.dpi = t),
                (e.module.width = n),
                (e.module.height = r),
                (e.module.devicePixelRatio = t),
                (e.host.systemInfo.width = n * t),
                (e.host.systemInfo.height = r * t),
                (e.module.matchWebGLToCanvasSize = i);
              const o = [
                e.host.systemInfo.width + "",
                e.host.systemInfo.height + "",
              ];
              for (
                var s = arguments.length, a = new Array(s), l = 0;
                l < s;
                l++
              )
                a[l] = arguments[l];
              for (const e of a) o.push(e + "");
              (e.module.argv = o),
                (e.module.canvas.width = e.host.systemInfo.width),
                (e.module.canvas.height = e.host.systemInfo.height),
                (e.module.canvas.style.width = e.host.systemInfo.width + "px"),
                (e.module.canvas.style.height =
                  e.host.systemInfo.height + "px");
              try {
                e.log("main(" + JSON.stringify(o) + ")");
              } catch (t) {
                e.log("main(", o, ")");
              }
              e.module.callMain(o);
            };
            if (this.module.ready) {
              const n = function () {
                for (
                  var n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                const o = () => {
                  t.apply(e, r);
                };
                return setTimeout(o, 0);
              };
              return this.module.ready(n);
            }
            return setTimeout(t, 0);
          }
          async mainReady(e, t, n, r, i, o, s) {
            this.log("mainReady"), loading_info_1.loadingInfo.stop();
            const a = loading_info_1.loadingInfo.getDuration();
            null !== a && this.storage.setItem("gpxRunTime", a.toString()),
              this.metrics.pushTiming(
                "runTime",
                Date.now() - this.metrics.startedAt
              );
            const l = this.storage.getItem("gpxRuns"),
              c = null === l ? 1 : Number.parseInt(l, 10) + 1;
            this.storage.setItem("gpxRuns", c.toString()),
              this.metrics.push("runs", c),
              this.metrics.push(
                "gamepixSdkUndefinedMain",
                void 0 === window.GamePix ? 1 : 0
              ),
              (this.exceptions.runtimeInfo.mainReady = !0),
              (this.exceptions.runtimeInfo.runs = c),
              this.log(this.metrics.report(this.module, this.host));
            try {
              const e = await this.metrics.send(this.host);
              this.log(e);
            } catch (e) {
              this.log("ERR! " + e);
            }
          }
          resizeCanvas() {
            const e = this.canvas,
              [t, n] = (0, aspect_1.getSizeWithAspectRatio)(
                window.innerWidth,
                window.innerHeight,
                this.targetAspect
              );
            (e.style.position = "relative"),
              (e.style.top = window.innerHeight / 2 + "px"),
              (e.style.left = window.innerWidth / 2 + "px"),
              (e.style.marginTop = (n / 2) * -1 + "px"),
              (e.style.marginLeft = (t / 2) * -1 + "px"),
              (e.style.width = t + "px"),
              (e.style.height = n + "px"),
              (this.targetWidth = t),
              (this.targetHeight = n),
              window.scroll(0, 1);
          }
          tick() {
            this.images.runNextTask(window.canRunLowTasks);
          }
        }
        exports.SDK = SDK;
        const globalTinyLoader = window.tinyLoader;
        void 0 !== globalTinyLoader &&
          (globalTinyLoader.run.push(async () => {
            const e = new SDK(globalTinyLoader);
            await e.init(),
              (e.images =
                void 0 !== globalTinyLoader.imageLoader
                  ? new worker_images_1.WorkerImages(
                      globalTinyLoader.imageLoader
                    )
                  : new direct_images_1.DirectImages()),
              (window.sdk = e);
          }),
          globalTinyLoader.postRun.push(async () => {
            void 0 !== globalTinyLoader.errors &&
              (window.sdk.exceptions.push(globalTinyLoader.errors),
              delete globalTinyLoader.errors);
          }),
          globalTinyLoader.stop.push(async () => {
            window.sdk.exit(), delete window.sdk;
          }));
      },
      {
        "./aspect": 120,
        "./compression": 121,
        "./deprecated": 122,
        "./exceptions": 123,
        "./images/direct/direct-images": 124,
        "./images/worker/worker-images": 131,
        "./loading-info": 132,
        "./logcalls": 133,
        "./metrics": 134,
        "./render-buffer-size": 135,
        "./split": 137,
        "./storage/storage": 139,
        "./wasm": 140,
        "./webgl": 141,
        "./wrappers/arl": 142,
        "./wrappers/unity-requests": 143,
        "./wrappers/webgl": 144,
        "core-js/modules/web.dom-collections.iterator.js": 119,
      },
    ],
    137: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        e("core-js/modules/es.typed-array.uint8-array.js"),
          e("core-js/modules/es.typed-array.set.js"),
          e("core-js/modules/es.typed-array.sort.js"),
          e("core-js/modules/web.dom-collections.iterator.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Split = void 0);
        n.Split = class {
          constructor(e) {
            r(this, "splitBinaryPromise", void 0),
              r(this, "splitMetaPromise", void 0),
              r(this, "splitBinary", new Uint8Array(0)),
              r(this, "splitMeta", {}),
              r(this, "cache", {}),
              r(this, "internalModule", void 0),
              (this.splitBinaryPromise = e
                .loadResource("wsplit._.js", "arraybuffer")
                .then((e) => new Uint8Array(e))),
              (this.splitMetaPromise = e
                .loadResource("wsplit.js", "text")
                .then(JSON.parse)),
              (this.internalModule = e);
          }
          async init(e) {
            try {
              [this.splitBinary, this.splitMeta] = await Promise.all([
                this.splitBinaryPromise,
                this.splitMetaPromise,
              ]);
            } catch (e) {
              return void this.internalModule.log(
                "WARN! Can't load split wasm"
              );
            }
            return (
              (e.placeholder = new Proxy(this, {
                get: function (e, t) {
                  return e.splitModuleHandler(t);
                },
              })),
              e
            );
          }
          splitModuleHandler(e) {
            var t = this;
            const n = this.internalModule.module;
            return function () {
              for (
                var r = arguments.length, i = new Array(r), o = 0;
                o < r;
                o++
              )
                i[o] = arguments[o];
              if (void 0 !== t.cache[e]) return void t.cache[e].apply(null, i);
              n.wipedcall(e);
              const [s, a] = t.splitMeta[e],
                l = t.splitBinary.subarray(s, s + a),
                c = new WebAssembly.Module(l),
                u = new WebAssembly.Instance(c, { primary: n.asm });
              return (t.cache[e] = u.exports.fn), t.cache[e].apply(null, i);
            };
          }
        };
      },
      {
        "core-js/modules/es.typed-array.set.js": 115,
        "core-js/modules/es.typed-array.sort.js": 116,
        "core-js/modules/es.typed-array.uint8-array.js": 117,
        "core-js/modules/web.dom-collections.iterator.js": 119,
      },
    ],
    138: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.MemStorage = void 0);
        n.MemStorage = class {
          constructor() {
            r(this, "length", 0), r(this, "storage", {});
          }
          setItem(e, t) {
            (this.storage[e] = t),
              (this.length = Object.keys(this.storage).length);
          }
          getItem(e) {
            const t = this.storage[e];
            return void 0 === t ? null : t;
          }
          removeItem(e) {
            delete this.storage[e],
              (this.length = Object.keys(this.storage).length);
          }
          key(e) {
            const t = Object.keys(this.storage);
            return void 0 === t[e] ? null : t[e];
          }
          clear() {
            (this.length = 0), (this.storage = {});
          }
        };
      },
      {},
    ],
    139: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        e("core-js/modules/web.dom-collections.iterator.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.LStorage = void 0);
        const i = e("./mem-storage");
        n.LStorage = class {
          constructor(e, t) {
            r(this, "backend", void 0),
              r(this, "length", void 0),
              r(this, "prefix", void 0),
              (this.prefix = t);
            try {
              (this.backend = e || localStorage), this.testBackend();
            } catch (e) {
              this.backend = new i.MemStorage();
            }
            (this.length = this.backend.length),
              "function" == typeof this.backend.sync &&
                (this.sync = (e) => {
                  this.backend.sync(e);
                });
          }
          testBackend() {
            const e = this.prefix + ".test.record";
            this.backend.setItem(e, "123");
            const t = this.backend.getItem(e);
            this.backend.removeItem(e);
            if (!("123" === t && null === this.backend.getItem(e)))
              throw new Error("Storage backend is not working properly");
          }
          setLocalStoragePrefix(e) {
            this.prefix = e;
          }
          clear() {
            if (!this.backend.length) return;
            const e = [];
            for (let t = 0; t < this.backend.length; ++t) {
              const n = this.backend.key(t);
              n && n.startsWith(this.prefix) && e.push(n);
            }
            for (const t of e) this.backend.removeItem(t);
            this.length = this.backend.length;
          }
          key(e) {
            return this.backend.key(e);
          }
          setItem(e, t) {
            if (!t || void 0 === t.length || 0 === t.length)
              return void this.writeStringToKey(e, "");
            let n = 0;
            for (; n < t.length; ) {
              let r = t.substr(n, 1024);
              (n += r.length),
                n < t.length && (r += "@"),
                this.writeStringToKey(e, r),
                (e += ".");
            }
          }
          getItem(e) {
            let t = this.readStringFromKey(e);
            if (null === t) return null;
            if (0 === t.length) return t;
            for (; "@" === t[t.length - 1]; ) {
              (t = t.substr(0, t.length - 1)), (e += ".");
              const n = this.readStringFromKey(e);
              t += null === n ? "" : n;
            }
            return t;
          }
          removeItem(e) {
            this.backend.removeItem(this.prefix + e),
              (this.length = this.backend.length);
          }
          writeStringToKey(e, t) {
            this.backend.setItem(this.prefix + e, t),
              (this.length = this.backend.length);
          }
          readStringFromKey(e) {
            return this.backend.getItem(this.prefix + e);
          }
        };
      },
      {
        "./mem-storage": 138,
        "core-js/modules/web.dom-collections.iterator.js": 119,
      },
    ],
    140: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          e.log("Try instaniate WASM from buffer");
          const r = Date.now();
          return WebAssembly.compile(t).then((e) => {
            const t = Date.now() - r,
              i = Date.now();
            return WebAssembly.instantiate(e, n).then((n) => ({
              wasmModule: e,
              instance: n,
              compileTime: t,
              instantiateTime: Date.now() - i,
              instantiateType: "array",
            }));
          });
        }
        function i(e, t) {
          const n = void 0 !== t ? "\tStreamingError:\t" + t.message : "";
          return {
            name: "wasm_instantiate_failed: " + e.name,
            message: e.message + n,
            stack: e.stack,
          };
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.wasmInstantiate = void 0),
          (n.wasmInstantiate = async function (e, t, n) {
            if (t instanceof Response)
              try {
                const r = await (async function (e, t, n) {
                  e.log("Try instantiate WASM from stream");
                  const r = Date.now();
                  return WebAssembly.instantiateStreaming(t, n).then((e) => ({
                    wasmModule: e.module,
                    instance: e.instance,
                    compileTime: 0,
                    instantiateTime: Date.now() - r,
                    instantiateType: "stream",
                  }));
                })(e, t, n);
                return r;
              } catch (o) {
                const s = (function (e, t) {
                  var n;
                  const r = {};
                  null === (n = e.headers) ||
                    void 0 === n ||
                    n.forEach((e, t) => {
                      r[t] = e;
                    });
                  const i = {
                    sourceType: typeof e,
                    instanceOfResponse: e instanceof Response,
                    ok: e.ok,
                    status: e.status,
                    statusText: e.statusText,
                    type: e.type,
                    headers: r,
                  };
                  return {
                    name: "wasm_instantiate_stream_failed: " + t.name,
                    message: t.message,
                    stack:
                      "Details: " +
                      JSON.stringify(i, null, 4) +
                      "\nStack:\n" +
                      t.stack,
                  };
                })(t, o);
                try {
                  e.log(
                    "ERR! Can't instantiate WASM from stream:\n" +
                      s.message +
                      "\n" +
                      s.stack
                  );
                  const i = await r(e, await t.arrayBuffer(), n);
                  return await e.exceptions.pushError(s), i;
                } catch (t) {
                  throw (e.log("ERR! Can't instantiate WASM:\n" + t), i(t, s));
                }
              }
            else
              try {
                return await r(e, t, n);
              } catch (t) {
                throw (e.log("ERR! Can't instantiate WASM:\n" + t.name), i(t));
              }
          });
      },
      {},
    ],
    141: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/web.dom-collections.iterator.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.getWebGLContext = void 0);
        const r = {
            2: { type: "webgl2", description: "WebGL 2.0", majorVersion: 2 },
            1: { type: "webgl", description: "WebGL 1.0", majorVersion: 1 },
            0: {
              type: "experimental-webgl",
              description: "WebGL 1.0 FALLBACK",
              majorVersion: 1,
            },
          },
          i = "webgl-factory.v".concat(3, ": "),
          o = {
            alpha: !1,
            antialias: !1,
            depth: !0,
            explicitSwapControl: 0,
            failIfMajorPerformanceCaveat: !1,
            majorVersion: 1,
            minorVersion: 0,
            powerPreference: "high-performance",
            preferLowPowerToHighPerformance: !1,
            premultipliedAlpha: !1,
            preserveDrawingBuffer: !1,
            proxyContextToMainThread: 0,
            renderViaOffscreenBackBuffer: 0,
            stencil: !0,
            maxWebGLVersion: 2,
          };
        n.getWebGLContext = function (e, t, n, s) {
          if (void 0 !== n.webglAttributes)
            for (const e of Object.keys(n.webglAttributes))
              o[e] = n.webglAttributes[e];
          "number" == typeof s && (o.maxWebGLVersion = s);
          let a = 0,
            l = () => {};
          function c() {
            clearTimeout(a);
            const n = (function (e, t) {
              for (let n = o.maxWebGLVersion; n >= 0; --n) {
                const s = r[n];
                if (void 0 === s) {
                  e(
                    "ERR! " +
                      i +
                      "Unable to find description for context: " +
                      s +
                      "\nAttributes:\n" +
                      JSON.stringify(o, null, 2)
                  );
                  continue;
                }
                const a = t.getContext(s.type, o);
                if (null != a)
                  return (
                    (a.contextType = s),
                    (o.majorVersion = s.majorVersion),
                    e(
                      i +
                        s.description +
                        " context created\nAttributes:\n" +
                        JSON.stringify(o, null, 2)
                    ),
                    { factoryVersion: 3, context: a, version: s.majorVersion }
                  );
                e("ERR! " + i + "Unable to create context: " + s.description);
              }
              return void e("ERR! Attributes:\n" + JSON.stringify(o, null, 2));
            })(e, t);
            void 0 === n ||
              n.context.isContextLost() ||
              (a = setTimeout(() => l(n), 150));
          }
          function u(t) {
            clearTimeout(a),
              e(
                "ERR! " +
                  i +
                  "webglcontextcreateionerror: " +
                  t.statusMessage || "?",
                t
              );
          }
          function d(t) {
            clearTimeout(a),
              t.preventDefault(),
              e("ERR! " + i + "webglcontextlost: " + t.statusMessage || "?", t);
          }
          function p() {
            c(), e("ERR! " + i + "webglcontextrestored");
          }
          return (
            t.addEventListener("webglcontextcreationerror", u, !1),
            t.addEventListener("webglcontextlost", d, !1),
            t.addEventListener("webglcontextrestored", p, !1),
            new Promise((e) => {
              (l = e), c();
            }).then(
              (n) => (
                (function (e, t, n) {
                  t.getContext = (t) => {
                    for (const o of Object.values(r))
                      if (o.type === t) {
                        if (o.majorVersion === n.version)
                          return (
                            e(
                              i +
                                "Get WebGL context: " +
                                t +
                                ". Force use pre-created WebGL context"
                            ),
                            n.context
                          );
                        break;
                      }
                    return (
                      e(
                        "ERR! " +
                          i +
                          "Unable to get context: " +
                          t +
                          "\nAttributes:\n" +
                          JSON.stringify(o, null, 2)
                      ),
                      null
                    );
                  };
                })(e, t, n),
                t.removeEventListener("webglcontextcreationerror", u, !1),
                t.removeEventListener("webglcontextlost", d, !1),
                t.removeEventListener("webglcontextrestored", p, !1),
                n
              )
            )
          );
        };
      },
      { "core-js/modules/web.dom-collections.iterator.js": 119 },
    ],
    142: [
      function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        e("core-js/modules/es.typed-array.uint8-array.js"),
          e("core-js/modules/es.typed-array.set.js"),
          e("core-js/modules/es.typed-array.sort.js"),
          e("core-js/modules/web.dom-collections.iterator.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.arl = void 0);
        class i {
          constructor() {
            r(this, "keyLength", 32),
              r(this, "keyOffset", 5),
              r(this, "soundsDurations", {}),
              r(this, "module", void 0),
              r(this, "loadedSoundNames", []),
              r(this, "channels", []);
          }
          init(e, t) {
            n.arl.module = t;
            const r = e.env || {};
            (r._JS_Sound_Init = n.arl.soundInit),
              (r._JS_Sound_ReleaseInstance = n.arl.releaseSound),
              (r._JS_Sound_Load_PCM = n.arl.loadSoundPCM),
              (r._JS_Sound_Load = n.arl.loadSound),
              (r._JS_Sound_Create_Channel = n.arl.createChannel),
              (r._JS_Sound_Play = n.arl.play),
              (r._JS_Sound_SetLoop = n.arl.setLoop),
              (r._JS_Sound_Set3D = n.arl.set3D),
              (r._JS_Sound_Stop = n.arl.stopPlay),
              (r._JS_Sound_SetPosition = n.arl.setPosition),
              (r._JS_Sound_SetVolume = n.arl.setVolume),
              (r._JS_Sound_SetPitch = n.arl.setPitch),
              (r._JS_Sound_SetListenerPosition = n.arl.setListenerPosition),
              (r._JS_Sound_SetListenerOrientation =
                n.arl.setListenerOrientation),
              (r._JS_Sound_GetLoadState = n.arl.getLoadState),
              (r._JS_Sound_ResumeIfNeeded = n.arl.resumeIfNeeded),
              (r._JS_Sound_GetLength = n.arl.getLength),
              (r._JS_Sound_SetListenerPosition = n.arl.getLoadState);
          }
          soundInit() {}
          releaseSound(e) {}
          loadSoundPCM(e, t, n, r) {
            throw new Error("JS_Sound_Load_PCM is not implemented");
          }
          loadSound(e, t) {
            if (
              n.arl.module.HEAPU8.buffer.length <
              t + n.arl.keyOffset + n.arl.keyLength
            )
              throw new Error("Pointer to audio file is out of range: " + e);
            const r = new Uint8Array(
              n.arl.module.HEAPU8.buffer,
              e,
              n.arl.keyLength + n.arl.keyOffset
            );
            if (
              64 === r[0] &&
              97 === r[1] &&
              114 === r[2] &&
              108 === r[3] &&
              58 === r[4]
            ) {
              const t = new Uint8Array(
                  n.arl.module.HEAPU8.buffer,
                  e + n.arl.keyOffset,
                  n.arl.keyLength
                ),
                r = new TextDecoder("utf-8").decode(t);
              return n.arl.loadedSoundNames.push(r) - 1;
            }
            throw new Error("Pointer doesn't contains audio name: " + e);
          }
          createChannel(e, t) {
            const r = {
              id: -1,
              sound: { id: -1, pitch: 1 },
              volume: 1,
              _3d: 0,
              listener: { position: { x: 0, y: 0, z: 0 } },
              callback: e,
            };
            return n.arl.channels.push(r) - 1;
          }
          resetChannel(e) {
            (e.id = -1), (e.sound = { id: -1, pitch: 1 });
          }
          play(e, t, r, i) {
            const o = () => {
              const r = n.arl.channels[t];
              n.arl.resetChannel(r),
                (r.sound.name = n.arl.loadedSoundNames[e]),
                n.arl.tryPlay(r);
            };
            0 !== i ? setTimeout(o, i) : o();
          }
          tryPlay(e) {
            const t = e.sound;
            if (void 0 === t.name || void 0 === t.loop || t.id >= 0) return;
            const r = n.arl.module._gpxGetFreeSoundChannel();
            -1 !== r &&
              ((e.id = r),
              n.arl.module._gpxSetSoundVolume(e.id, e.volume),
              n.arl.module.stringToBuffer(t.name, (r) => {
                t.id = n.arl.module._gpxPlaySound(r, t.loop, t.pitch, e.id);
              }));
          }
          setLoop(e, t) {
            const r = n.arl.channels[e];
            r.sound.loop !== t && ((r.sound.loop = t), n.arl.tryPlay(r));
          }
          setLoopPoints(e, t, n) {}
          set3D(e, t) {
            const r = n.arl.channels[e];
            r._3d !== t && (r._3d = t);
          }
          stopPlay(e, t) {
            const r = () => {
              const t = n.arl.channels[e];
              t.id >= 0 && n.arl.module._gpxStopSound(t.id),
                n.arl.resetChannel(t);
            };
            0 !== t ? setTimeout(r, t) : r();
          }
          setPosition(e, t, r, i) {
            const o = n.arl.channels[e],
              s = { x: t, y: r, z: i };
            void 0 !== o.position
              ? (o.position.x === t &&
                  o.position.y === r &&
                  o.position.z === i) ||
                ((o.position = s), n.arl.changePosition())
              : (o.position = s);
          }
          setVolume(e, t) {
            const r = n.arl.channels[e];
            r.volume !== t &&
              ((r.volume = t),
              r.id >= 0 && n.arl.module._gpxSetSoundVolume(r.id, t));
          }
          setPitch(e, t) {
            const r = n.arl.channels[e];
            r.sound.pitch !== t && ((r.sound.pitch = t), n.arl.tryPlay(r));
          }
          setListenerPosition(e, t, r) {
            for (const i of n.arl.channels) {
              const o = i.listener.position;
              (void 0 !== o && o.x === e && o.y === t && o.z === r) ||
                ((i.listener.position = { x: e, y: t, z: r }),
                n.arl.changePosition());
            }
          }
          setListenerOrientation(e, t, r, i, o, s) {
            for (const a of n.arl.channels) {
              const l = a.listener.orientation;
              (void 0 !== l &&
                l.x === -e &&
                l.y === -t &&
                l.z === -r &&
                l.xUp === i &&
                l.yUp === o &&
                l.zUp === s) ||
                ((a.listener.orientation = {
                  x: -e,
                  y: -t,
                  z: -r,
                  xUp: i,
                  yUp: o,
                  zUp: s,
                }),
                n.arl.changePosition());
            }
          }
          getLoadState(e) {
            return 0;
          }
          resumeIfNeeded() {
            n.arl.module._gpxResumeSounds();
          }
          getLength(e) {
            const t = n.arl.loadedSoundNames[e];
            if (void 0 !== n.arl.soundsDurations[t])
              return n.arl.soundsDurations[t];
            n.arl.module.stringToBuffer(t, (e) => {
              const r = n.arl.module._gpxGetSoundDuration(e);
              return (n.arl.soundsDurations[t] = r), r;
            });
          }
          changePosition() {}
        }
        (n.default = i), (n.arl = new i());
      },
      {
        "core-js/modules/es.typed-array.set.js": 115,
        "core-js/modules/es.typed-array.sort.js": 116,
        "core-js/modules/es.typed-array.uint8-array.js": 117,
        "core-js/modules/web.dom-collections.iterator.js": 119,
      },
    ],
    143: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es.typed-array.uint8-array.js"),
          e("core-js/modules/es.typed-array.set.js"),
          e("core-js/modules/es.typed-array.sort.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.unityRequestsWrapper = void 0),
          (n.unityRequestsWrapper = {
            init: (e, t) => {
              !(function (e, t) {
                var n, r, i, o, s, a, l, c, u, d, p;
                const f = "StreamingAssets",
                  h = { instances: {}, nextRequestId: 0 },
                  g = (e) => t.UTF8ToString(e),
                  y = (e) => {
                    const t = e.split(f);
                    return t.length <= 1 ? e : t.join("async/" + f) + ".js";
                  };
                (e._JS_SystemInfo_GetStreamingAssetsURL =
                  (null === (n = e._JS_SystemInfo_GetStreamingAssetsURL) ||
                    void 0 === n ||
                    n.bind(e),
                  (e, n) => (
                    e && t.stringToUTF8(f, e, n), t.lengthBytesUTF8(f)
                  ))),
                  (e._JS_WebRequest_Create =
                    (null === (r = e._JS_WebRequest_Create) ||
                      void 0 === r ||
                      r.bind(e),
                    (e, n) => {
                      const r = y(g(e)),
                        i = g(n),
                        o =
                          t.companyName && t.productName && t.XMLHttpRequest
                            ? new t.XMLHttpRequest({
                                companyName: t.companyName,
                                productName: t.productName,
                                cacheControl: t.cacheControl(r),
                              })
                            : new XMLHttpRequest();
                      return (
                        o.open(i, r, !0),
                        (o.responseType = "arraybuffer"),
                        (h.instances[h.nextRequestId] = o),
                        h.nextRequestId++
                      );
                    })),
                  (e._JS_WebRequest_SetTimeout =
                    (null === (i = e._JS_WebRequest_SetTimeout) ||
                      void 0 === i ||
                      i.bind(e),
                    (e, t) => {
                      h.instances[e].timeout = t;
                    })),
                  (e._JS_WebRequest_SetRequestHeader =
                    (null === (o = e._JS_WebRequest_SetRequestHeader) ||
                      void 0 === o ||
                      o.bind(e),
                    (e, t, n) => {
                      const r = g(t),
                        i = g(n);
                      h.instances[e].setRequestHeader(r, i);
                    })),
                  (e._JS_WebRequest_SetResponseHandler =
                    (null === (s = e._JS_WebRequest_SetResponseHandler) ||
                      void 0 === s ||
                      s.bind(e),
                    (e, n, r) => {
                      const i = h.instances[e];
                      function o(e, o) {
                        if (r) {
                          const s = t.lengthBytesUTF8(e) + 1,
                            a = t._malloc(s);
                          t.stringToUTF8(e, a, s),
                            t.dynCall("viiiiii", r, [n, i.status, 0, 0, a, o]),
                            t._free(a);
                        }
                      }
                      (i.onload = (e) => {
                        if (r) {
                          const e = 0,
                            o = new Uint8Array(i.response);
                          if (0 != o.length) {
                            const s = t._malloc(o.length);
                            t.HEAPU8.set(o, s),
                              t.dynCall("viiiiii", r, [
                                n,
                                i.status,
                                s,
                                o.length,
                                0,
                                e,
                              ]);
                          } else
                            t.dynCall("viiiiii", r, [n, i.status, 0, 0, 0, e]);
                        }
                      }),
                        (i.onerror = (e) => {
                          o("Unknown error.", 2);
                        }),
                        (i.ontimeout = (e) => {
                          o("Connection timed out.", 14);
                        }),
                        (i.onabort = (e) => {
                          o("Aborted.", 17);
                        });
                    })),
                  (e._JS_WebRequest_SetProgressHandler =
                    (null === (a = e._JS_WebRequest_SetProgressHandler) ||
                      void 0 === a ||
                      a.bind(e),
                    (e, n, r) => {
                      h.instances[e].onprogress = (e) => {
                        r &&
                          e.lengthComputable &&
                          t.dynCall("viii", r, [n, e.loaded, e.total]);
                      };
                    })),
                  (e._JS_WebRequest_Send =
                    (null === (l = e._JS_WebRequest_Send) ||
                      void 0 === l ||
                      l.bind(e),
                    (e, n, r) => {
                      const i = h.instances[e];
                      try {
                        if (r > 0) {
                          const e = t.HEAPU8.subarray(n, n + r);
                          i.send(e);
                        } else i.send();
                      } catch (e) {
                        t.log("ERR!" + e.name + ": " + e.message);
                      }
                    })),
                  (e._JS_WebRequest_GetResponseHeaders =
                    (null === (c = e._JS_WebRequest_GetResponseHeaders) ||
                      void 0 === c ||
                      c.bind(e),
                    (e, n, r) => {
                      const i = h.instances[e].getAllResponseHeaders();
                      return n && t.stringToUTF8(i, n, r), t.lengthBytesUTF8(i);
                    })),
                  (e._JS_WebRequest_GetStatusLine =
                    (null === (u = e._JS_WebRequest_GetStatusLine) ||
                      void 0 === u ||
                      u.bind(e),
                    (e, n, r) => {
                      const i =
                        h.instances[e].status + " " + h.instances[e].statusText;
                      return n && t.stringToUTF8(i, n, r), t.lengthBytesUTF8(i);
                    })),
                  (e._JS_WebRequest_Abort =
                    (null === (d = e._JS_WebRequest_Abort) ||
                      void 0 === d ||
                      d.bind(e),
                    (e) => {
                      h.instances[e].abort();
                    })),
                  (e._JS_WebRequest_Release =
                    (null === (p = e._JS_WebRequest_Release) ||
                      void 0 === p ||
                      p.bind(e),
                    (e) => {
                      let t = h.instances[e];
                      (t.onload = null),
                        (t.onerror = null),
                        (t.ontimeout = null),
                        (t.onabort = null),
                        (t = null),
                        (h.instances[e] = null);
                    }));
              })(e.env || {}, t);
            },
          });
      },
      {
        "core-js/modules/es.typed-array.set.js": 115,
        "core-js/modules/es.typed-array.sort.js": 116,
        "core-js/modules/es.typed-array.uint8-array.js": 117,
      },
    ],
    144: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es.typed-array.uint8-array.js"),
          e("core-js/modules/es.typed-array.set.js"),
          e("core-js/modules/es.typed-array.sort.js"),
          Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.WebGLWrapper = void 0);
        const r = {};
        [
          "OES_texture_float",
          "OES_texture_float_linear",
          "OES_texture_half_float",
          "OES_texture_half_float_linear",
          "EXT_color_buffer_half_float",
          "WEBGL_color_buffer_float",
        ].forEach((e) => (r[e] = !0)),
          (n.WebGLWrapper = {
            applyToContext: (e, t, n, a) => {
              void 0 === t.GL && (t.GL = e),
                void 0 === t.preinitializedWebGLContext &&
                  (t.preinitializedWebGLContext = e);
              const l = [],
                c = e.getSupportedExtensions();
              t.log("Validating supported extensions", c),
                c.forEach((e) => {
                  !0 === r[e]
                    ? t.log("WARN! Removing blacklisted extension", e)
                    : l.push(e);
                }),
                (e.getSupportedExtensions = () => l),
                n &&
                  (2 === a
                    ? (function (e, t) {
                        (i.defaultWebGL.texStorage2D = e.texStorage2D),
                          (i.defaultWebGL.texImage2D = e.texImage2D),
                          (i.defaultWebGL.bindTexture = e.bindTexture),
                          (e.bindTexture =
                            ((u = e.bindTexture.bind(e)),
                            (t, n) => (
                              t === e.TEXTURE_2D &&
                                (null !== i.texStorageInfo &&
                                  (i.defaultWebGL.texStorage2D.apply(e, [
                                    i.texStorageInfo.target,
                                    i.texStorageInfo.levels,
                                    i.texStorageInfo.internalformat,
                                    i.texStorageInfo.width,
                                    i.texStorageInfo.height,
                                  ]),
                                  (i.texStorageInfo = null)),
                                (i.activeTexture = n)),
                              u(t, n)
                            ))),
                          (e.texImage2D =
                            ((c = e.texImage2D.bind(e)),
                            function (n, r, a, l, u, d, p, f, h) {
                              if (
                                n !== e.TEXTURE_2D ||
                                null === i.activeTexture ||
                                null == h
                              )
                                return c.apply(e, arguments);
                              if (!o(h, h.byteOffset || 0, h.byteLength))
                                return c.apply(e, arguments);
                              s(t, h, h.byteOffset, h.byteLength);
                              const g = new ImageData(1, 1);
                              return c.apply(e, [n, r, a, p, f, g]);
                            })),
                          (e.texStorage2D =
                            ((l = e.texStorage2D.bind(e)),
                            function (t, n, r, o, s) {
                              if (
                                t !== e.TEXTURE_2D ||
                                null === i.activeTexture
                              )
                                return l.apply(e, arguments);
                              i.texStorageInfo = {
                                target: t,
                                levels: n,
                                internalformat: r,
                                width: o,
                                height: s,
                              };
                            })),
                          (e.framebufferTexture2D =
                            ((a = e.framebufferTexture2D.bind(e)),
                            function (t, n, r, o, s) {
                              return (
                                r !== e.TEXTURE_2D ||
                                  null === o ||
                                  null === i.texStorageInfo ||
                                  (i.defaultWebGL.texStorage2D.apply(e, [
                                    i.texStorageInfo.target,
                                    i.texStorageInfo.levels,
                                    i.texStorageInfo.internalformat,
                                    i.texStorageInfo.width,
                                    i.texStorageInfo.height,
                                  ]),
                                  (i.texStorageInfo = null)),
                                a.apply(e, arguments)
                              );
                            })),
                          (e.texSubImage2D =
                            ((r = e.texSubImage2D.bind(e)),
                            function (n, a, l, c, u, d, p, f, h, g) {
                              if (
                                n !== e.TEXTURE_2D ||
                                null === i.activeTexture
                              )
                                return r.apply(e, arguments);
                              const y = g || 0;
                              if (null == h || !o(h, y))
                                return (
                                  null !== i.texStorageInfo &&
                                    (i.defaultWebGL.texStorage2D.apply(e, [
                                      i.texStorageInfo.target,
                                      i.texStorageInfo.levels,
                                      i.texStorageInfo.internalformat,
                                      i.texStorageInfo.width,
                                      i.texStorageInfo.height,
                                    ]),
                                    (i.texStorageInfo = null)),
                                  r.apply(e, arguments)
                                );
                              s(t, h, y);
                              const m = new ImageData(1, 1);
                              i.defaultWebGL.texImage2D.apply(e, [
                                n,
                                a,
                                p,
                                p,
                                f,
                                m,
                              ]),
                                (i.texStorageInfo = null);
                            })),
                          (e.compressedTexSubImage2D =
                            ((n = e.compressedTexSubImage2D.bind(e)),
                            function (t, r, o, s, a, l, c, u, d, p) {
                              return (
                                t !== e.TEXTURE_2D ||
                                  null === i.activeTexture ||
                                  null === i.texStorageInfo ||
                                  (i.defaultWebGL.texStorage2D.apply(e, [
                                    i.texStorageInfo.target,
                                    i.texStorageInfo.levels,
                                    i.texStorageInfo.internalformat,
                                    i.texStorageInfo.width,
                                    i.texStorageInfo.height,
                                  ]),
                                  (i.texStorageInfo = null)),
                                n.apply(e, arguments)
                              );
                            }));
                        var n;
                        var r;
                        var a;
                        var l;
                        var c;
                        var u;
                      })(e, t)
                    : (function (e, t) {
                        (e.bindTexture =
                          ((r = e.bindTexture.bind(e)),
                          (t, n) => (
                            t === e.TEXTURE_2D && (i.activeTexture = n), r(t, n)
                          ))),
                          (e.texImage2D =
                            ((n = e.texImage2D.bind(e)),
                            function (r, a, l, c, u, d, p, f, h) {
                              if (
                                r !== e.TEXTURE_2D ||
                                null === i.activeTexture ||
                                null == h
                              )
                                return n.apply(e, arguments);
                              if (!o(h, h.byteOffset || 0, h.byteLength))
                                return n.apply(e, arguments);
                              s(t, h, h.byteOffset, h.byteLength);
                              const g = new ImageData(1, 1);
                              return n.apply(e, [r, a, l, p, f, g]);
                            }));
                        var n;
                        var r;
                      })(e, t));
            },
            applyToCanvas: (e, t, r) => {
              const i = e.getContext;
              e.getContext = function () {
                for (
                  var o = arguments.length, s = new Array(o), a = 0;
                  a < o;
                  a++
                )
                  s[a] = arguments[a];
                const l = i.apply(e, s),
                  c = s[0],
                  u =
                    "webgl2" === c
                      ? 2
                      : "webgl" === c || "experimental-webgl" === c
                      ? 1
                      : 0;
                return (
                  u > 0 &&
                    ((e.getContext = i),
                    n.WebGLWrapper.applyToContext(l, t, r, u)),
                  l
                );
              };
            },
          });
        const i = {
          activeTexture: null,
          defaultWebGL: {},
          texStorageInfo: null,
        };
        function o(e, t, n) {
          if (null === i.activeTexture) return !1;
          const r = new Uint8Array(e.buffer, t, n);
          return (
            r.length > 4 &&
            64 === r[0] &&
            116 === r[1] &&
            114 === r[2] &&
            108 === r[3] &&
            58 === r[4]
          );
        }
        function s(e, t, n, r) {
          const o = new Uint8Array(t.buffer, n, r);
          let s = 0;
          for (; 0 !== o[5 + s] && o.length > 5 + s; ) s++;
          const a = new TextDecoder("utf-8").decode(
            new Uint8Array(t.buffer, n + 5, s)
          );
          e.loadTexture(i.activeTexture.name, a, s);
        }
      },
      {
        "core-js/modules/es.typed-array.set.js": 115,
        "core-js/modules/es.typed-array.sort.js": 116,
        "core-js/modules/es.typed-array.uint8-array.js": 117,
      },
    ],
  },
  {},
  [136]
);
