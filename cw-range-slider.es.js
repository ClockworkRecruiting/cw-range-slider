import ne, { useState as X, useCallback as B, useEffect as ae } from "react";
var D = { exports: {} }, P = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function se() {
  if (H) return P;
  H = 1;
  var r = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function m(T, u, f) {
    var E = null;
    if (f !== void 0 && (E = "" + f), u.key !== void 0 && (E = "" + u.key), "key" in u) {
      f = {};
      for (var b in u)
        b !== "key" && (f[b] = u[b]);
    } else f = u;
    return u = f.ref, {
      $$typeof: r,
      type: T,
      key: E,
      ref: u !== void 0 ? u : null,
      props: f
    };
  }
  return P.Fragment = s, P.jsx = m, P.jsxs = m, P;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z;
function oe() {
  return Z || (Z = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case N:
          return "Profiler";
        case S:
          return "StrictMode";
        case x:
          return "Suspense";
        case j:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case _:
            return "Portal";
          case i:
            return (e.displayName || "Context") + ".Provider";
          case O:
            return (e._context.displayName || "Context") + ".Consumer";
          case w:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case p:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case M:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function m(e) {
      try {
        s(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var n = t.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), s(e);
      }
    }
    function T(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === M)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = Y.A;
      return e === null ? null : e.getOwner();
    }
    function f() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (V.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, t) {
      function n() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function F() {
      var e = r(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function v(e, t, n, l, g, R, L, C) {
      return n = R.ref, e = {
        $$typeof: y,
        type: e,
        key: t,
        props: R,
        _owner: g
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: F
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function d(e, t, n, l, g, R, L, C) {
      var c = t.children;
      if (c !== void 0)
        if (l)
          if (re(c)) {
            for (l = 0; l < c.length; l++)
              k(c[l]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(c);
      if (V.call(t, "key")) {
        c = r(e);
        var A = Object.keys(t).filter(function(te) {
          return te !== "key";
        });
        l = 0 < A.length ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}", G[c + l] || (A = 0 < A.length ? "{" + A.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          c,
          A,
          c
        ), G[c + l] = !0);
      }
      if (c = null, n !== void 0 && (m(n), c = "" + n), E(t) && (m(t.key), c = "" + t.key), "key" in t) {
        n = {};
        for (var U in t)
          U !== "key" && (n[U] = t[U]);
      } else n = t;
      return c && b(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), v(
        e,
        c,
        R,
        g,
        u(),
        n,
        L,
        C
      );
    }
    function k(e) {
      typeof e == "object" && e !== null && e.$$typeof === y && e._store && (e._store.validated = 1);
    }
    var a = ne, y = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), i = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), Y = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, re = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    a = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var W, q = {}, J = a["react-stack-bottom-frame"].bind(
      a,
      f
    )(), z = I(T(f)), G = {};
    $.Fragment = h, $.jsx = function(e, t, n, l, g) {
      var R = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return d(
        e,
        t,
        n,
        !1,
        l,
        g,
        R ? Error("react-stack-top-frame") : J,
        R ? I(T(e)) : z
      );
    }, $.jsxs = function(e, t, n, l, g) {
      var R = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return d(
        e,
        t,
        n,
        !0,
        l,
        g,
        R ? Error("react-stack-top-frame") : J,
        R ? I(T(e)) : z
      );
    };
  }()), $;
}
var Q;
function ue() {
  return Q || (Q = 1, process.env.NODE_ENV === "production" ? D.exports = se() : D.exports = oe()), D.exports;
}
var o = ue();
const le = {
  grey: "#E3E3E3",
  red: "#fb657e",
  "dark-orange": "#CB764E",
  "light-orange": "#FA8C5A",
  green: "#50D087",
  default: "#009CF6"
}, ce = {
  default: (r) => r.toString(),
  currency: (r) => r >= 1e6 ? `${Math.round(r / 1e4) / 100}Mil` : r > 1e3 ? `${r / 1e3}k` : r.toString(),
  percent: (r) => `${r}%`
}, fe = ({
  min: r = 0,
  max: s = 100,
  step: m = 1,
  unit: T = "default",
  isRange: u = !0,
  defaultValues: f = u ? [r, s] : r,
  onChange: E,
  disabled: b = !1,
  marks: F = {},
  sliderColor: v = "default",
  sliderColorMapping: d = le,
  formatters: k = ce
}) => {
  const [a, y] = X(f), [_, h] = X({ left: !1, right: !1 }), S = B((i) => (k[T] || k.default)(i), [T, k]);
  ae(() => {
    const i = () => {
      h({ left: !1, right: !1 });
    };
    return (_.left || _.right) && document.addEventListener("mouseup", i), () => {
      document.removeEventListener("mouseup", i);
    };
  }, [_.left, _.right]);
  const N = B(
    (i) => ({
      left: `${(i - r) / (s - r) * 100}%`,
      opacity: _.left || _.right ? 1 : 0,
      display: _.left || _.right ? "block" : "none",
      border: `1px solid ${d[v] || d.default}`
    }),
    [_.left, _.right, r, s, v, d]
  ), O = (i, w) => {
    const x = Number(i.target.value);
    u && w !== void 0 ? y((j) => {
      if (Array.isArray(j)) {
        const p = [...j];
        return p[w] = x, p[0] > p[1] ? j : (E && E(p), p);
      }
      return j;
    }) : (y(x), E && E(x));
  };
  return /* @__PURE__ */ o.jsxs("div", { className: `slider ${v && v !== "default" ? `slider--${v}` : ""} ${b ? "slider--disabled" : ""}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "slider__track-wrapper", children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: "slider__track",
          style: {
            background: u && Array.isArray(a) ? `linear-gradient(to right, #ddd ${(a[0] - r) / (s - r) * 100}%, ${d[v] || d.default} ${(a[0] - r) / (s - r) * 100}%, ${d[v] || d.default} ${(a[1] - r) / (s - r) * 100}%, #ddd ${(a[1] - r) / (s - r) * 100}%)` : `linear-gradient(to right, ${d[v] || d.default} ${(Number(a) - r) / (s - r) * 100}%, #ddd ${(Number(a) - r) / (s - r) * 100}%)`
          },
          children: [
            u && /* @__PURE__ */ o.jsx("span", { className: "slider__track--dot-left" }),
            /* @__PURE__ */ o.jsx("span", { className: "slider__track--dot-right" })
          ]
        }
      ),
      u ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "range",
            disabled: b,
            min: r,
            max: s,
            step: m,
            value: a[0],
            className: "slider__input",
            onChange: (i) => O(i, 0),
            onMouseDown: () => h({ left: !0, right: !1 })
          }
        ),
        /* @__PURE__ */ o.jsx("div", { style: N(a[0]), className: "slider__tooltip", children: S(a[0]) }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "range",
            disabled: b,
            min: r,
            max: s,
            step: m,
            value: a[1],
            className: "slider__input",
            onChange: (i) => O(i, 1),
            onMouseDown: () => h({ left: !1, right: !0 })
          }
        ),
        /* @__PURE__ */ o.jsx("div", { style: N(a[1]), className: "slider__tooltip", children: S(a[1]) })
      ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "range",
            disabled: b,
            min: r,
            max: s,
            step: m,
            value: a,
            className: "slider__input slider__input--single",
            onChange: O,
            onMouseDown: () => h({ left: !0, right: !1 })
          }
        ),
        /* @__PURE__ */ o.jsx("div", { style: N(a), className: "slider__tooltip", children: S(a) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "slider__values", children: [
      /* @__PURE__ */ o.jsx("span", { children: F[r] }),
      /* @__PURE__ */ o.jsx("span", { children: F[s] })
    ] })
  ] });
};
export {
  fe as default
};
