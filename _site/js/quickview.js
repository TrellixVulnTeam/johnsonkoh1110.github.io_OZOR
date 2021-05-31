!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.winnowQuickview = t())
    : (e.winnowQuickview = t());
})("undefined" != typeof self ? self : this, function () {
  return (function (n) {
    var i = {};
    function r(e) {
      if (i[e]) return i[e].exports;
      var t = (i[e] = { i: e, l: !1, exports: {} });
      return n[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
    }
    return (
      (r.m = n),
      (r.c = i),
      (r.d = function (e, t, n) {
        r.o(e, t) ||
          Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 0))
    );
  })([
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1),
        o = n(2),
        s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          },
        a = (function () {
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e;
          };
        })();
      var u = Symbol("onQuickviewShowClick"),
        l = Symbol("onQuickviewDismissClick"),
        r = (function (e) {
          function r(e) {
            var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            var n = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
            if (
              ((n.element =
                "string" == typeof e ? document.querySelector(e) : e),
              !n.element)
            )
              throw new Error(
                "An invalid selector or non-DOM node has been provided."
              );
            return (
              (n._clickEvents = ["click"]),
              (n.options = s({}, o.a, t)),
              (n[u] = n[u].bind(n)),
              (n[l] = n[l].bind(n)),
              n.init(),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(r, i["a"]),
            a(
              r,
              [
                {
                  key: "init",
                  value: function () {
                    (this.quickview = document.getElementById(
                      this.element.dataset.target
                    )),
                      (this.dismissElements = document.querySelectorAll(
                        '[data-dismiss="quickview"]'
                      )),
                      this._bindEvents(),
                      this.emit("quickview:ready", {
                        element: this.element,
                        quickview: this.quickview,
                      });
                  },
                },
                {
                  key: "_bindEvents",
                  value: function () {
                    var n = this;
                    this._clickEvents.forEach(function (e) {
                      n.element.addEventListener(e, n[u], !1);
                    }),
                      [].forEach.call(this.dismissElements, function (t) {
                        n._clickEvents.forEach(function (e) {
                          t.addEventListener(e, n[l], !1);
                        });
                      });
                  },
                },
                {
                  key: u,
                  value: function (e) {
                    this.quickview.classList.add("is-active"),
                      this.emit("quickview:show", {
                        element: this.element,
                        quickview: this.quickview,
                      });
                  },
                },
                {
                  key: l,
                  value: function (e) {
                    this.quickview.classList.remove("is-active"),
                      this.emit("quickview:hide", {
                        element: this.element,
                        quickview: this.quickview,
                      });
                  },
                },
              ],
              [
                {
                  key: "attach",
                  value: function () {
                    var e =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : '[data-show="quickview"]',
                      t =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = new Array(),
                      i = document.querySelectorAll(e);
                    return (
                      [].forEach.call(i, function (e) {
                        setTimeout(function () {
                          n.push(new r(e, t));
                        }, 100);
                      }),
                      n
                    );
                  },
                },
              ]
            ),
            r
          );
        })();
      t.default = r;
    },
    function (e, t, n) {
      "use strict";
      var i = (function () {
        function i(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (e, t, n) {
          return t && i(e.prototype, t), n && i(e, n), e;
        };
      })();
      var r = (function () {
        function t() {
          var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._listeners = new Map(e)),
            (this._middlewares = new Map());
        }
        return (
          i(t, [
            {
              key: "listenerCount",
              value: function (e) {
                return this._listeners.has(e)
                  ? this._listeners.get(e).length
                  : 0;
              },
            },
            {
              key: "removeListeners",
              value: function () {
                var t = this,
                  e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  n =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                null !== e
                  ? Array.isArray(e)
                    ? name.forEach(function (e) {
                        return t.removeListeners(e, n);
                      })
                    : (this._listeners.delete(e), n && this.removeMiddleware(e))
                  : (this._listeners = new Map());
              },
            },
            {
              key: "middleware",
              value: function (e, t) {
                var n = this;
                Array.isArray(e)
                  ? name.forEach(function (e) {
                      return n.middleware(e, t);
                    })
                  : (Array.isArray(this._middlewares.get(e)) ||
                      this._middlewares.set(e, []),
                    this._middlewares.get(e).push(t));
              },
            },
            {
              key: "removeMiddleware",
              value: function () {
                var t = this,
                  e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : null;
                null !== e
                  ? Array.isArray(e)
                    ? name.forEach(function (e) {
                        return t.removeMiddleware(e);
                      })
                    : this._middlewares.delete(e)
                  : (this._middlewares = new Map());
              },
            },
            {
              key: "on",
              value: function (e, t) {
                var n = this,
                  i =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                if (Array.isArray(e))
                  e.forEach(function (e) {
                    return n.on(e, t);
                  });
                else {
                  var r = (e = e.toString()).split(/,|, | /);
                  1 < r.length
                    ? r.forEach(function (e) {
                        return n.on(e, t);
                      })
                    : (Array.isArray(this._listeners.get(e)) ||
                        this._listeners.set(e, []),
                      this._listeners.get(e).push({ once: i, callback: t }));
                }
              },
            },
            {
              key: "once",
              value: function (e, t) {
                this.on(e, t, !0);
              },
            },
            {
              key: "emit",
              value: function (n, i) {
                var r = this,
                  o =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                n = n.toString();
                var s = this._listeners.get(n),
                  a = null,
                  u = 0,
                  l = o;
                if (Array.isArray(s))
                  for (
                    s.forEach(function (e, t) {
                      o ||
                        ((a = r._middlewares.get(n)),
                        Array.isArray(a)
                          ? (a.forEach(function (e) {
                              e(
                                i,
                                function () {
                                  var e =
                                    0 < arguments.length &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : null;
                                  null !== e && (i = e), u++;
                                },
                                n
                              );
                            }),
                            u >= a.length && (l = !0))
                          : (l = !0)),
                        l && (e.once && (s[t] = null), e.callback(i));
                    });
                    -1 !== s.indexOf(null);

                  )
                    s.splice(s.indexOf(null), 1);
              },
            },
          ]),
          t
        );
      })();
      t.a = r;
    },
    function (e, t, n) {
      "use strict";
      t.a = {};
    },
  ]).default;
});
