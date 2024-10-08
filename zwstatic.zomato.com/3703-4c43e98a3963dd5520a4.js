"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3703], {
        AO9g: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("pP/M")),
                a = r(n("rS1O")),
                i = r(n("q1tI")),
                u = r(n("17x9")),
                l = n("sq3K"),
                c = ["src", "srcMobile", "alt", "id", "height", "heightMobile", "showTint", "tintBackground", "children", "large", "zImageProps"],
                f = function(e) {
                    var t = e.src,
                        n = e.srcMobile,
                        r = e.alt,
                        u = e.id,
                        f = e.height,
                        d = e.heightMobile,
                        s = e.showTint,
                        _ = e.tintBackground,
                        p = e.children,
                        E = e.large,
                        m = e.zImageProps,
                        O = (0, a.default)(e, c);
                    return i.default.createElement(l.Container, (0, o.default)({}, O, {
                        height: f,
                        heightMobile: d
                    }), i.default.createElement(l.ImageContainer, null, i.default.createElement(l.BackdropImage, (0, o.default)({
                        id: u,
                        src: t,
                        alt: r,
                        height: "100%"
                    }, m)), i.default.createElement(l.BackdropImage, (0, o.default)({
                        isMWeb: !0,
                        id: u,
                        src: n || t,
                        alt: r,
                        height: "100%"
                    }, m)), s && i.default.createElement(l.Gradient, {
                        tintBackground: _
                    })), i.default.createElement(l.ContentSection, {
                        large: E
                    }, p))
                };
            f.propTypes = {
                src: u.default.string.isRequired,
                alt: u.default.string.isRequired,
                id: u.default.string.isRequired,
                height: u.default.string.isRequired,
                srcMobile: u.default.string,
                showTint: u.default.bool,
                tintBackground: u.default.string,
                children: u.default.objectOf(u.default.any),
                heightMobile: u.default.string.isRequired,
                large: u.default.bool,
                zImageProps: u.default.objectOf(u.default.any)
            }, f.defaultProps = {
                srcMobile: "",
                tintBackground: "",
                heightMobile: "",
                large: !1,
                showTint: !1,
                zImageProps: {}
            };
            t.default = f
        },
        bL8M: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("AO9g"));
            t.default = o.default
        },
        sq3K: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ImageContainer = t.Gradient = t.ContentSection = t.Container = t.BackdropImage = void 0;
            var o = r(n("vOnD")),
                a = r(n("lFeK"));
            t.ImageContainer = o.default.div.withConfig({
                componentId: "sc-1vtbhe-0"
            })(["max-width:none;height:100%;width:100%;max-width:none;@media (max-width:768px){width:100%;margin:0;max-width:none;}@media (max-width:480px){margin:0;max-width:none;}"]), t.Container = o.default.div.withConfig({
                componentId: "sc-1vtbhe-1"
            })(["position:relative;height:", ";@media (max-width:480px){height:", ";}"], (function(e) {
                return e.height
            }), (function(e) {
                var t = e.height;
                return e.heightMobile || t
            })), t.BackdropImage = (0, o.default)(a.default).withConfig({
                componentId: "sc-1vtbhe-2"
            })(["margin:auto;height:100%;display:", ";@media (max-width:480px){display:", ";}"], (function(e) {
                return e.isMWeb ? "none" : "block"
            }), (function(e) {
                return e.isMWeb ? "block" : "none"
            })), t.Gradient = o.default.div.withConfig({
                componentId: "sc-1vtbhe-3"
            })(["position:absolute;left:50%;transform:translateX(-50%) rotate(-180deg);top:0;width:100%;height:100%;background:", ";@media (max-width:1440px){width:100%;}"], (function(e) {
                return e.tintBackground || "linear-gradient(rgba(0, 0, 0, 0) 57.17%, rgba(0, 0, 0, 0.46) 100%),\n    rgba(0, 0, 0, 0.3)"
            })), t.ContentSection = o.default.div.withConfig({
                componentId: "sc-1vtbhe-4"
            })(["position:absolute;top:0;left:50%;height:100%;transform:translateX(-50%);overflow:hidden;width:", "rem;@media (max-width:900px){width:100%;}@media (max-width:768px){width:calc(100% - 4.8rem);}"], (function(e) {
                return e.large ? 110 : 90
            }))
        },
        uHc1: (e, t, n) => {
            var r = n("JMD1"),
                o = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("pP/M")),
                i = r(n("watF")),
                u = r(n("UNXm")),
                l = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {
                            __proto__: null
                        },
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && {}.hasOwnProperty.call(e, i)) {
                            var u = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                            u && (u.get || u.set) ? Object.defineProperty(r, i, u) : r[i] = e[i]
                        }
                    return r.default = e, n && n.set(e, r), r
                }(n("q1tI")),
                c = r(n("17x9")),
                f = r(n("vOnD")),
                d = n("fHDd"),
                s = r(n("tEET")),
                _ = r(n("wRyO")),
                p = r(n("HMsx")),
                E = r(n("5An4"));

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (m = function(e) {
                    return e ? n : t
                })(e)
            }

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = function e(t) {
                    var n = t.length,
                        r = t.fnInputFill,
                        o = t.onChange,
                        c = t.alignInput,
                        f = t.inputType,
                        d = t.loading,
                        p = (0, l.useState)(0),
                        E = (0, u.default)(p, 2),
                        m = E[0],
                        O = E[1],
                        h = (0, l.useState)({}),
                        I = (0, u.default)(h, 2),
                        T = I[0],
                        C = I[1],
                        A = function(e) {
                            return /^[a-zA-Z0-9]+$/.test(e)
                        };
                    return l.default.createElement(v, null, l.default.createElement(e.Wrapper, {
                        alignInput: c
                    }, l.default.createElement(e.Container, {
                        length: n
                    }, y(m, n, l.default.createElement(b, (0, a.default)({}, t, {
                        inputType: f,
                        onChange: function(e, t) {
                            o(e);
                            var a = e.target.value || "";
                            if (a && A(a)) {
                                var u = a.split("").splice(0, n - t),
                                    l = u.reduce((function(e, n, r) {
                                        return g(g({}, e), {}, (0, i.default)({}, t + r, n))
                                    }), {}),
                                    c = g(g({}, T), l),
                                    f = t + u.length;
                                if (f >= n && (f = n - 1), C(c), O(f), Object.values(c).length === n) {
                                    var d = Object.values(c).join("");
                                    r(d)
                                }
                            }
                        },
                        setFocus: O,
                        handleKeyDown: function(e) {
                            return function(t) {
                                switch (o(t), t.keyCode) {
                                    case 8:
                                        O(e - 1);
                                        var n = g({}, T);
                                        delete n[e], C(n);
                                        break;
                                    case 39:
                                        O(e + 1);
                                        break;
                                    case 37:
                                        O(e - 1)
                                }
                            }
                        },
                        disabled: d
                    })), T))), d && l.default.createElement(s.default, {
                        color: _.default.z500
                    }))
                },
                v = f.default.div.withConfig({
                    componentId: "sc-hp56s6-0"
                })(["text-align:center;"]),
                b = function e(t) {
                    var n = t.isFocused,
                        r = void 0 !== n && n,
                        o = t.onChange,
                        i = t.index,
                        u = t.setFocus,
                        c = t.handleKeyDown,
                        f = t.inputType,
                        d = t.isSecure,
                        s = (0, l.useRef)();
                    (0, l.useEffect)((function() {
                        s.current && r && s.current.focus()
                    }), [r]);
                    var _ = {
                        pattern: "number" === f ? "[0-9]{1}" : "[a-zA-Z0-9]{1}",
                        inputMode: "number" === f ? "numeric" : "text",
                        type: "number" === f ? "number" : "text"
                    };
                    return l.default.createElement(e.El, (0, a.default)({}, t, {
                        ref: s,
                        onChange: function(e) {
                            return function(t) {
                                return o(t, e)
                            }
                        }(i),
                        maxLength: 2,
                        onClick: function(e) {
                            return function() {
                                return u(e)
                            }
                        }(i),
                        onKeyDown: c(i)
                    }, _, {
                        type: d ? "password" : _.type
                    }))
                };
            b.propTypes = {
                isFocused: c.default.bool,
                onChange: c.default.func.isRequired,
                index: c.default.number.isRequired,
                setFocus: c.default.func.isRequired,
                onPaste: c.default.func.isRequired,
                handleKeyDown: c.default.func.isRequired,
                inputType: c.default.string,
                isSecure: c.default.bool
            };
            var y = function(e, t, n, r) {
                for (var o = [], a = 0; a < t; a++) {
                    var i = a == e;
                    o.push((0, d.cloneChildren)(n, {
                        index: a,
                        isFocused: i,
                        value: r[a] || ""
                    }))
                }
                return o
            };
            h.propTypes = {
                length: c.default.number,
                fnInputFill: c.default.func.isRequired,
                onChange: c.default.func.isRequired,
                alignInput: c.default.oneOf(["left", "right", "center"]),
                inputType: c.default.oneOf(["text", "number"]),
                loading: c.default.bool,
                isSecure: c.default.bool
            }, h.defaultProps = {
                length: 1,
                alignInput: "center",
                inputType: "text",
                loading: !1,
                isSecure: !1
            }, b.El = f.default.input.withConfig({
                componentId: "sc-hp56s6-1"
            })(["-webkit-appearance:none;&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}&::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}height:4.8rem;width:5.6rem;border:1px solid #cfcfcf;border-radius:0.8rem;padding:0;text-align:center;font-size:1.6rem;color:", ";@media (max-width:480px){width:4.8rem;padding:0;}:focus{border:1px solid #009999;}"], (function(e) {
                return e.disabled ? p.default.z300 : E.default
            })), h.Container = f.default.div.withConfig({
                componentId: "sc-hp56s6-2"
            })(["display:flex;justify-content:space-between;width:", ";@media (max-width:480px){width:", ";}"], (function(e) {
                return e.length ? "calc((".concat(e.length, " * 5.6rem) + ((").concat(e.length, " - 1) * 1.3rem))") : "auto"
            }), (function(e) {
                return e.length ? "calc((".concat(e.length, " * 4.8rem) + ((").concat(e.length, " - 1) * 1rem))") : "auto"
            }));
            h.Wrapper = f.default.div.withConfig({
                componentId: "sc-hp56s6-3"
            })(["display:flex;justify-content:", ";"], (function(e) {
                return function(e) {
                    switch (e) {
                        case "left":
                            return "flex-start";
                        case "right":
                            return "flex-end";
                        default:
                            return "center"
                    }
                }(e.alignInput)
            }));
            t.default = h
        },
        OHja: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("uHc1"));
            t.default = o.default
        },
        tEET: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("MycK"));
            t.default = o.default
        },
        "09dp": (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(n("q1tI")),
                a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("vOnD")),
                i = l(n("17x9"));

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                var e = _(["\n  border: none;\n  width: 100%;\n  border-bottom: ", ";\n  padding: 0;\n  margin: 0;\n"]);
                return c = function() {
                    return e
                }, e
            }

            function f() {
                var e = _(["\n  position: absolute;\n  padding: 0.1rem 0.6rem 0.5rem 0.5rem;\n  background: #fff;\n  font-size: 1.8rem;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #696969;\n"]);
                return f = function() {
                    return e
                }, e
            }

            function d() {
                var e = _(["\n      margin: ", ";\n    "]);
                return d = function() {
                    return e
                }, e
            }

            function s() {
                var e = _(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  ", "\n"]);
                return s = function() {
                    return e
                }, e
            }

            function _(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var p = function e(t) {
                var n = t.children,
                    r = t.className,
                    a = t.margin,
                    i = t.lineColor,
                    u = t.lineThikness;
                return o.default.createElement(e.Wrapper, {
                    margin: a
                }, o.default.createElement(e.El, {
                    className: r,
                    lineColor: i,
                    lineThikness: u
                }), n && o.default.createElement(e.text, null, n))
            };
            p.propTypes = {
                children: i.default.node,
                className: i.default.string,
                margin: i.default.string
            }, p.defaultProps = {
                children: null,
                className: "",
                margin: ""
            }, p.Wrapper = a.default.div(s(), (function(e) {
                return e.margin && (0, a.css)(d(), e.margin)
            })), p.text = a.default.span(f()), p.El = a.default.hr(c(), (function(e) {
                return E(e)
            }));
            var E = function(e) {
                    var t = e.lineColor,
                        n = e.lineThikness;
                    return "".concat(n || "1px", " solid ").concat(t || "#e8e8e8", "}")
                },
                m = p;
            t.default = m
        },
        BUyX: (e, t, n) => {
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = ((r = n("09dp")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = o
        },
        y8c3: (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.SocialButton = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = O();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                a = m(n("17x9")),
                i = m(n("vOnD")),
                u = m(n("HMsx")),
                l = m(n("LSsp")),
                c = m(n("wRyO")),
                f = m(n("j399")),
                d = m(n("lXQd")),
                s = m(n("ieZA")),
                _ = (m(n("J1pR")), n("NsBr"), n("zzCw")),
                p = n("AgGD"),
                E = n("+S4G");

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return O = function() {
                    return e
                }, e
            }

            function g() {
                var e = y(["\n  height: 44px;\n  width: auto;\n"]);
                return g = function() {
                    return e
                }, e
            }

            function h() {
                var e = y(["\n  display: flex;\n  flex-direction: column;\n"]);
                return h = function() {
                    return e
                }, e
            }

            function v() {
                var e = y(["\n  width: 100%;\n  height: 4.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #cfcfcf;\n  border-radius: 0.4rem;\n  cursor: ", ";\n  background: ", ";\n  :active {\n    background: ", ";\n  }\n  user-select: none;\n"]);
                return v = function() {
                    return e
                }, e
            }

            function b() {
                var e = y(['\n  letter-spacing: 0.25px;\n  font-size: 1.4rem;\n  font-weight: 500;\n  margin-left: 0.8rem;\n  font-family: "Google Sans", arial, sans-serif;\n  color: #3c4043;\n']);
                return b = function() {
                    return e
                }, e
            }

            function y(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function I() {
                return I = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, I.apply(this, arguments)
            }

            function T(e, t, n, r, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var N = function(e) {
                var t = C((0, o.useState)(!1), 2),
                    n = (t[0], t[1]),
                    r = C((0, o.useState)(!0), 2),
                    a = r[0],
                    i = r[1],
                    u = e.loginSuccess,
                    l = e.loginFailure,
                    f = e.locale,
                    m = (e.enableOneTap, e.actionBasedCallback),
                    O = e.screen,
                    g = function(e) {
                        n(!1);
                        var t = e.success,
                            r = void 0 !== t && t,
                            o = e.message,
                            a = void 0 === o ? "" : o,
                            i = e.user_data,
                            c = void 0 === i ? {} : i;
                        m(p.GOOGLE_SIGN_IN, {
                            message: a,
                            screen: O,
                            success: r
                        }), r ? u(c) : l(a)
                    },
                    h = function(e) {
                        (0, _.doLogin)(_.LOGIN_TYPE_GOOGLE, {
                            id_token: e
                        }).then((function(e) {
                            return e.json()
                        })).then(g).catch(function() {
                            var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                var r, o;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n(!1), r = "", !t.response) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 5, t.response.json();
                                        case 5:
                                            o = e.sent, r = (0, d.default)(o, "message", ""), l(r), e.next = 12;
                                            break;
                                        case 10:
                                            r = f.error_occured_text, l(r);
                                        case 12:
                                            m(p.GOOGLE_SIGN_IN, {
                                                message: r,
                                                screen: O,
                                                success: !1
                                            });
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(r, o) {
                                    var a = e.apply(t, n);

                                    function i(e) {
                                        T(a, r, o, i, u, "next", e)
                                    }

                                    function u(e) {
                                        T(a, r, o, i, u, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            });
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    },
                    v = function(e) {
                        n(!1), m(p.GOOGLE_SIGN_IN, {
                            message: p.DEFAULT_ERROR_MESSAGE.message || "",
                            screen: O,
                            success: !1
                        })
                    };
                (0, o.useEffect)((function() {
                    var e = document.createElement("script");
                    e.src = "https://accounts.google.com/gsi/client", document.head.append(e), e.onload = function() {
                        window.google.accounts.id.initialize({
                            client_id: window.zomato.googleAppId,
                            callback: function(e) {
                                var t = e.credential,
                                    n = void 0 === t ? "" : t;
                                try {
                                    h(n)
                                } catch (e) {
                                    v()
                                }
                            },
                            use_fedcm_for_prompt: !0
                        }), window.google.accounts.id.renderButton(document.getElementById("googleContinueButton"), {
                            type: "standard",
                            size: "large",
                            width: "400",
                            logo_alignment: "center"
                        }), i(!1)
                    }
                }), []);
                return o.default.createElement(L, null, o.default.createElement(R, null, o.default.createElement("div", {
                    id: "googleContinueButton"
                })), a && o.default.createElement("div", {
                    style: {
                        width: "400px",
                        height: "40px",
                        border: "1px solid #cfcfcf",
                        borderRadius: "0.4rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, o.default.createElement(s.default, {
                    size: "small",
                    color: c.default.z500
                })), o.default.createElement(E.Gap24, null))
            };
            N.propTypes = {
                loginFailure: a.default.func.isRequired,
                loginSuccess: a.default.func.isRequired,
                actionBasedCallback: a.default.func
            }, N.defaultProps = {
                actionBasedCallback: f.default
            };
            var S = function e(t) {
                var n = t.icon,
                    r = t.text,
                    a = t.loading,
                    i = t.onClick;
                return o.default.createElement(e.Wrapper, I({}, t, {
                    role: "button",
                    tabIndex: "0",
                    "aria-label": r,
                    onClick: function() {
                        a || i()
                    }
                }), a ? o.default.createElement(s.default, {
                    size: "medium",
                    color: c.default.z500
                }) : n, o.default.createElement(P, null, r))
            };
            t.SocialButton = S;
            var P = i.default.span(b());
            S.Wrapper = i.default.div(v(), (function(e) {
                return e.loading ? "initial" : "pointer"
            }), (function(e) {
                return e.loading ? u.default.z100 : l.default
            }), (function(e) {
                return e.loading ? u.default.z100 : u.default.z95
            })), S.propTypes = {
                text: a.default.string.isRequired,
                icon: a.default.node.isRequired,
                locale: a.default.objectOf(a.default.string),
                enableOneTap: a.default.bool,
                loading: a.default.bool
            }, S.defaultProps = {
                enableOneTap: !1,
                loading: !1
            };
            var L = i.default.div(h()),
                R = i.default.div(g()),
                w = N;
            t.default = w
        },
        zzCw: (e, t) => {
            var n;

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.initiateProfileUpdate1FAVerificationFlow = t.initiateEmailUpdate2FAVerificationFlow = t.verifyOnefaOTP = t.verifyTwofaOTPEmailUpdate = t.doResend = t.doInitilizeData = t.doOTMEmailVerify = t.doMobileUserCreate = t.doEmailLinkAccount = t.doMobileLinkAccount = t.doMobileVerify = t.doVerify = t.doSignup = t.doLogin = t.LOGIN_TYPE_PHONE = t.LOGIN_TYPE_EMAIL = t.LOGIN_TYPE_FACEBOOK = t.LOGIN_TYPE_GOOGLE = void 0;
            var i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.headers,
                        r = void 0 === n ? {} : n,
                        a = o(o({}, t), {}, {
                            headers: o(o({}, r), {}, {
                                "x-zomato-csrft": window.csrft || ""
                            })
                        });
                    return fetch(e, a)
                },
                u = "user",
                l = "auth",
                c = (a(n = {}, u, {
                    windowRoute: "__USER_DEV_ROUTE",
                    originRoute: "/webroutes/user",
                    zomatoRoute: "/user"
                }), a(n, l, {
                    windowRoute: "__AUTH_DEV_ROUTE",
                    originRoute: "/webroutes/auth",
                    zomatoRoute: "/auth"
                }), n),
                f = [u, l],
                d = function(e) {
                    if (!f.includes(e)) return "";
                    var t = c[e],
                        n = "";
                    if ("undefined" != typeof window) {
                        var r = t.windowRoute;
                        n = r in window ? window[r] : "".concat(window.location.origin).concat(t.originRoute)
                    } else n = "".concat("https://www.zomato.com/webroutes").concat(t.zomatoRoute);
                    return n
                },
                s = function(e) {
                    return "".concat(d(u)).concat(e)
                };
            t.LOGIN_TYPE_GOOGLE = "google";
            t.LOGIN_TYPE_FACEBOOK = "facebook";
            t.LOGIN_TYPE_EMAIL = "email";
            t.LOGIN_TYPE_PHONE = "phone";
            var _ = {
                    google: ["id_token"],
                    facebook: ["fbid", "access_token"],
                    email: ["email_id", "hash"],
                    phone: ["country_id", "phone", "verification_type"]
                },
                p = function(e) {
                    return {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e)
                    }
                },
                E = function(e) {
                    return "".concat(d(l)).concat(e)
                };
            t.doLogin = function(e, t) {
                var n = function(e, t) {
                        var n = {};
                        return (_[e] || []).forEach((function(e) {
                            n[e] = t[e] || ""
                        })), n.method = e, n
                    }(e, t),
                    r = E("/login"),
                    o = p(n);
                return i(r, o)
            };
            t.doSignup = function(e) {
                var t = E("/signup"),
                    n = p(e);
                return i(t, n)
            };
            t.doVerify = function(e) {
                var t = E("/verify"),
                    n = p(e);
                return i(t, n)
            };
            t.doMobileVerify = function(e) {
                var t = E("/mobile_login/verify"),
                    n = p(e);
                return i(t, n)
            };
            t.doMobileLinkAccount = function(e) {
                var t = E("/mobile_login/link"),
                    n = p(e);
                return i(t, n)
            };
            t.doEmailLinkAccount = function(e) {
                var t = E("/mobile_login/send_login_link"),
                    n = p(e);
                return i(t, n)
            };
            t.doMobileUserCreate = function(e) {
                var t = E("/create_user"),
                    n = p(e);
                return i(t, n)
            };
            t.doOTMEmailVerify = function(e) {
                var t = E("/mobile_login/verify_otp_link"),
                    n = p(e);
                return i(t, n)
            };
            t.doInitilizeData = function(e) {
                var t = E("/init");
                return i(t, {
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            };
            t.doResend = function(e) {
                var t = E("/resend"),
                    n = p(e);
                return i(t, n)
            };
            t.verifyTwofaOTPEmailUpdate = function(e) {
                var t = s("/email/update/verify "),
                    n = p(e);
                return i(t, n)
            };
            t.verifyOnefaOTP = function(e) {
                var t = s("/auth/verification/verify"),
                    n = p(e);
                return i(t, n)
            };
            t.initiateEmailUpdate2FAVerificationFlow = function(e) {
                var t = s("/email/update/init"),
                    n = p(e);
                return i(t, n)
            };
            t.initiateProfileUpdate1FAVerificationFlow = function(e) {
                var t = s("/auth/verification/init"),
                    n = p(e);
                return i(t, n)
            }
        },
        "+S4G": (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatLangKey = t.OTPexhaustedText = t.Span = t.StyledP = t.Gap5 = t.Gap10 = t.Gap24 = t.validatePhone = t.validateName = t.validateEmail = void 0;
            var o = f(n("q1tI")),
                a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("vOnD")),
                i = n("kkbd"),
                u = f(n("wRyO")),
                l = n("SEds");

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d() {
                var e = O(["\n  font-size: 1.4rem;\n  color: #696969;\n  line-height: 2.1rem;\n  width: 70%;\n  margin: 0 0 4rem 0;\n"]);
                return d = function() {
                    return e
                }, e
            }

            function s() {
                var e = O(["\n  color: ", ";\n  cursor: pointer;\n  line-height: ", ";\n  font-size: ", ";\n"]);
                return s = function() {
                    return e
                }, e
            }

            function _() {
                var e = O(["\n  line-height: ", ";\n  font-size: ", ";\n  color: ", ";\n  text-align: ", ";\n  margin: ", ";\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function p() {
                var e = O(["\n  margin-bottom: 0.5rem;\n"]);
                return p = function() {
                    return e
                }, e
            }

            function E() {
                var e = O(["\n  margin-bottom: 1rem;\n"]);
                return E = function() {
                    return e
                }, e
            }

            function m() {
                var e = O(["\n  margin-bottom: 2.4rem;\n  display: block;\n"]);
                return m = function() {
                    return e
                }, e
            }

            function O(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            t.validateEmail = function(e) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
            };
            t.validateName = function(e) {
                return !(!e || e.length < 2 || /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g.test(e))
            };
            t.validatePhone = function(e, t) {
                return 1 === t ? 10 === e.toString().length : e.toString().length > 1
            };
            var g = a.default.span(m());
            t.Gap24 = g;
            var h = a.default.span(E());
            t.Gap10 = h;
            var v = a.default.span(p());
            t.Gap5 = v;
            var b = (0, a.default)(i.P)(_(), (function(e) {
                return e.lineHeight || "1rem"
            }), (function(e) {
                return e.fontSize || "1.6rem"
            }), (function(e) {
                return e.color || l.black
            }), (function(e) {
                return e.textAlign || "left"
            }), (function(e) {
                return e.paraMargin || "inherit inherit 2"
            }));
            t.StyledP = b;
            var y = a.default.span(s(), u.default.z500, (function(e) {
                return e.lineHeight || "inherit"
            }), (function(e) {
                return e.fontSize || "inherit"
            }));
            t.Span = y;
            var I = a.default.p(d());
            t.OTPexhaustedText = I;
            t.formatLangKey = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var a = new RegExp(/(\{[\d]+\})/),
                    i = !1,
                    u = e.split(a).map((function(e) {
                        if (e.match(a)) {
                            var t = Number(e.slice(1).slice(0, -1));
                            return o.default.isValidElement(n[t]) ? (i || (i = !0), n[t]) : "string" != typeof n[t] ? n[t].toString() : n[t]
                        }
                        return e
                    }));
                return i ? u : u.join("")
            }
        },
        nLaI: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, o = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                a = n("B8oK");
            var i = function(e) {
                var t = e.locale,
                    n = e.links || {},
                    r = n.tos,
                    i = void 0 === r ? "" : r,
                    u = n.privacy,
                    l = void 0 === u ? "" : u,
                    c = n.content,
                    f = void 0 === c ? "" : c;
                return o.default.createElement(o.default.Fragment, null, o.default.createElement(a.TermsContainer, null, t.agree_to_zomato_policy_text_v2, o.default.createElement(a.ConditionsContainer, null, o.default.createElement(a.Condition, null, o.default.createElement(a.A, {
                    href: i
                }, t.terms_of_service_text)), o.default.createElement(a.Condition, null, o.default.createElement(a.A, {
                    href: l
                }, t.privacy_policy_text)), o.default.createElement(a.Condition, null, o.default.createElement(a.A, {
                    href: f
                }, t.content_policies)))))
            };
            t.default = i
        },
        HQku: (e, t, n) => {
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = ((r = n("nLaI")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = o
        },
        B8oK: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.A = t.Condition = t.ConditionsContainer = t.TermsContainer = void 0;
            var r = a(n("vOnD")),
                o = a(n("HMsx"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i() {
                var e = f(["\n  text-decoration: none;\n  font-weight: 400;\n  color: ", ";\n"]);
                return i = function() {
                    return e
                }, e
            }

            function u() {
                var e = f(["\n  line-height: 1.6rem;\n  font-size: 1.2rem;\n  color: ", ";\n  position: relative;\n  padding-bottom: 1px;\n  border-bottom: 1px dashed ", ";\n"]);
                return u = function() {
                    return e
                }, e
            }

            function l() {
                var e = f(["\n  margin-top: 0.6rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 30rem;\n"]);
                return l = function() {
                    return e
                }, e
            }

            function c() {
                var e = f(["\n  line-height: 1.6rem;\n  font-size: 1.2rem;\n  color: #696969;\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 2rem;\n"]);
                return c = function() {
                    return e
                }, e
            }

            function f(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var d = r.default.div(c());
            t.TermsContainer = d;
            var s = r.default.div(l());
            t.ConditionsContainer = s;
            var _ = r.default.div(u(), o.default.z700, o.default.z700);
            t.Condition = _;
            var p = r.default.a(i(), o.default.z700);
            t.A = p
        },
        AgGD: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TWO_FA_RESEND = t.ONE_FA_RESEND = t.ENTERED_NEW_EMAIL = t.ONEFA_VERIFICATION_INITIATED = t.TWOFA_EMAIL_VERIFICATION_INITIATED = t.TWOFA_EMAIL_VERIFICATION_SUCCESSFUL = t.ONEFA_VERIFICATION_SUCCESSFUL = t.EMAIL_TWO_FA_FOR_EDIT_PROFILE = t.EMAIL_ONE_FA_FOR_EDIT_PROFILE = t.PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE = t.CLOSE_OTP_REASONS = t.USER_PROFILE_UPDATE_TYPES = t.LOGIN_TYPES = t.SELECTED_COUNTRY_CODE = t.CREATE_ACCOUNT_SCREEN = t.PHONE_CREATE_ACCOUNT_SCREEN = t.MULTI_ACCOUNT_SCREEN = t.OTP_SCREEN = t.LOGIN_SCREEN = t.ACCOUNT_LINK = t.PHONE_CREATE_ACCOUNT = t.CREATE_ACCOUNT = t.SEND_LOGIN_OTP = t.GOOGLE_SIGN_IN = t.OTP_ENTERED = t.TAP_BUTTON = t.SUCCESS_CALLBACK_ACTION = t.SCREEN_LOADED_ACTION = t.ERROR_CALLBACK_ACTION = t.OTM_EMAIL_VERIFICATION_ACTION = t.CHANGE_LOGIN_INPUT_TYPE_ACTION = t.SET_SELECTED_COUNTRY_DATA_ACTION = t.DEFAULT_ERROR_MESSAGE = t.EMAIL_ENTITY = t.PHONE_ENTITY = t.PHONE_LOGIN_OTP_VERIFY = t.OTM_EMAIL_LINK_OTP_VERIFICATION = t.DEFAULT_OTP_VERIFICATION = t.PHONE_LOGIN_OTP_VERFICATION = t.EMAIL_LOGIN_METHOD = t.FACEBOOK_LOGIN_METHOD = t.GOOGLE_LOGIN_METHOD = t.LOGIN_CASE_ALREADY_REGISTERED = t.LOGIN_CASE_OTM_MAPPING = t.LOGIN_CASE_OTO_MAPPING = t.LOGIN_CASE_NEW_USER = t.staticLang = void 0;
            t.staticLang = {
                login_failed_title: "Login Failed",
                signup_failed_title: "Signup Failed",
                otp_verification_title: "Enter Verification Code",
                login_title: "Login",
                signup_title: "Signup",
                signup_name_error_message: "Please enter a valid name",
                signup_empty_email_error_message: "Please enter an email",
                signup_invalid_email_error_message: "Invalid Email id",
                signup_invalid_phone_error_message: "Invalid Phone Number",
                signup_phone_error_message: "Please enter phone number",
                signup_full_name_label: "Full Name",
                signup_email_label: "Email",
                signup_email_label_optional: "Email(optional)",
                signup_phone_label: "Phone number",
                terms_of_service_text: "Terms of Service",
                privacy_policy_text: "Privacy Policy",
                content_policies: "Content Policies",
                agree_to_zomato_policy_text: "I agree to Zomato's {0}, {1} and {2}",
                create_account_button_text: "Create account",
                already_have_an_account_text: "Already have an account? {0}",
                login_with_phone_error: "Login with Phone number is not currently available",
                new_to_zomato_text: "New to Zomato?",
                send_otp_text: "Send OTP",
                error_messaage_box_try_other_methods_text: "Try using other methods",
                error_messaage_box_skip_for_now_text: "Skip for now",
                new_otp_has_been_sent_text: "A new OTP has been sent",
                not_received_otp_text: "Didn't receive OTP?",
                resend_now_text: "Resend Now",
                terminate_verification_text: "Are you sure you want to terminate the verification?",
                yes_button_text: "Yes",
                no_button_text: "No",
                continue_with_google_button_text: "Continue with Google",
                error_occured_text: "Error occured!",
                or_text: "or",
                otp_text_box_label: "OTP",
                otp_text_box_proceed_button: "Proceed",
                agree_to_zomato_policy_text_v2: "By continuing, you agree to our",
                checkout_login_flow_login_title: "Verify your phone number",
                checkout_login_flow_login_subtitle: "We need your number to place the order",
                checkout_login_flow_otp_screen: "Enter OTP",
                checkout_continue_with_email_caption: "Continue with Email",
                checkout_otp_flow_change_number: "Change number",
                phone_login_new_user_title: "Provide Personal Details",
                phone_login_new_user_subtitle: "Tell us a bit more about yourself",
                phone_number_verified_text: "Verified phone number",
                checkout_flow_phone_login_otp_header_text: "We have sent an OTP to {0}",
                checkout_flow_new_user_phone_login_button_caption: "Continue"
            };
            t.LOGIN_CASE_NEW_USER = 1;
            t.LOGIN_CASE_OTO_MAPPING = 2;
            t.LOGIN_CASE_OTM_MAPPING = 3;
            t.LOGIN_CASE_ALREADY_REGISTERED = 4;
            t.GOOGLE_LOGIN_METHOD = "google";
            t.FACEBOOK_LOGIN_METHOD = "facebook";
            t.EMAIL_LOGIN_METHOD = "email";
            t.PHONE_LOGIN_OTP_VERFICATION = "PHONE_LOGIN_VERFICATION";
            t.DEFAULT_OTP_VERIFICATION = "DEFAULT_OTP_VERIFICATION";
            t.OTM_EMAIL_LINK_OTP_VERIFICATION = "OTM_EMAIL_LINK_OTP_VERIFICATION";
            t.PHONE_LOGIN_OTP_VERIFY = "PHONE_LOGIN_OTP_VERIFY";
            t.PHONE_ENTITY = "phone";
            t.EMAIL_ENTITY = "email";
            t.DEFAULT_ERROR_MESSAGE = {
                message: "Something went wrong, please try again"
            };
            t.SET_SELECTED_COUNTRY_DATA_ACTION = "SET_SELECTED_COUNTRY_DATA_ACTION";
            t.CHANGE_LOGIN_INPUT_TYPE_ACTION = "CHANGE_LOGIN_INPUT_TYPE_ACTION";
            t.OTM_EMAIL_VERIFICATION_ACTION = "OTM_EMAIL_VERIFICATION_ACTION";
            t.ERROR_CALLBACK_ACTION = "ERROR_CALLBACK_ACTION";
            t.SCREEN_LOADED_ACTION = "SCREEN_LOADED_ACTION";
            t.SUCCESS_CALLBACK_ACTION = "SUCCESS_CALLBACK_ACTION";
            t.TAP_BUTTON = "TAP_BUTTON";
            t.OTP_ENTERED = "OTP_ENTERED";
            t.GOOGLE_SIGN_IN = "GOOGLE_SIGN_IN";
            t.SEND_LOGIN_OTP = "SEND_LOGIN_OTP";
            t.CREATE_ACCOUNT = "CREATE_ACCOUNT";
            t.PHONE_CREATE_ACCOUNT = "PHONE_CREATE_ACCOUNT";
            t.ACCOUNT_LINK = "ACCOUNT_LINK";
            t.LOGIN_SCREEN = "LOGIN_SCREEN";
            t.OTP_SCREEN = "OTP_SCREEN";
            t.MULTI_ACCOUNT_SCREEN = "MULTI_ACCOUNT_SCREEN";
            t.PHONE_CREATE_ACCOUNT_SCREEN = "PHONE_CREATE_ACCOUNT_SCREEN";
            t.CREATE_ACCOUNT_SCREEN = "CREATE_ACCOUNT_SCREEN";
            t.SELECTED_COUNTRY_CODE = {
                countryId: 1,
                name: "India",
                isdCode: 91,
                alpha2Code: "IN",
                alpha3Code: "IND",
                isoCurrencyCode: "INR",
                flagImgUrl: "https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp"
            };
            t.LOGIN_TYPES = {
                LOGIN: "login",
                SIGNUP: "signup"
            };
            t.USER_PROFILE_UPDATE_TYPES = {
                PHONE: "USER_PROFILE_PHONE_UPDATE",
                EMAIL: "USER_PROFILE_EMAIL_UPDATE"
            };
            t.CLOSE_OTP_REASONS = {
                CLOSE_MODAL: "CLOSE_MODAL",
                CHANGE_NUMBER: "CHANGE_NUMBER"
            };
            t.PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE = "PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE";
            t.EMAIL_ONE_FA_FOR_EDIT_PROFILE = "EMAIL_ONE_FA_FOR_EDIT_PROFILE";
            t.EMAIL_TWO_FA_FOR_EDIT_PROFILE = "EMAIL_TWO_FA_FOR_EDIT_PROFILE";
            t.ONEFA_VERIFICATION_SUCCESSFUL = "ONEFA_VERIFICATION_SUCCESSFUL";
            t.TWOFA_EMAIL_VERIFICATION_SUCCESSFUL = "TWOFA_EMAIL_VERIFICATION_SUCCESSFUL";
            t.TWOFA_EMAIL_VERIFICATION_INITIATED = "TWOFA_EMAIL_VERIFICATION_INITIATED";
            t.ONEFA_VERIFICATION_INITIATED = "ONEFA_VERIFICATION_INITIATED";
            t.ENTERED_NEW_EMAIL = "ENTERED_NEW_EMAIL";
            t.ONE_FA_RESEND = "ONE_FA_RESEND";
            t.TWO_FA_RESEND = "TWO_FA_RESEND"
        },
        J1pR: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("q1tI")),
                o = a(n("17x9"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = function(e) {
                var t = e.size;
                return r.default.createElement("svg", {
                    width: t,
                    height: t,
                    viewBox: "0 0 22 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.default.createElement("path", {
                    d: "M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z",
                    fill: "#FBBB00"
                }), r.default.createElement("path", {
                    d: "M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z",
                    fill: "#518EF8"
                }), r.default.createElement("path", {
                    d: "M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z",
                    fill: "#28B446"
                }), r.default.createElement("path", {
                    d: "M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z",
                    fill: "#F14336"
                }))
            };
            i.propTypes = {
                size: o.default.number
            }, i.defaultProps = {
                size: 24
            };
            var u = i;
            t.default = u
        },
        qZ2b: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("q1tI")),
                o = i(n("17x9")),
                a = n("O4kB");

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = function(e) {
                var t = e.onAccept,
                    n = e.onReject,
                    o = e.visible,
                    i = e.acceptLabel,
                    u = e.rejectLabel,
                    l = e.title,
                    c = void 0 === l ? "" : l,
                    f = e.message;
                return r.default.createElement(r.default.Fragment, null, r.default.createElement(a.StyledModal, {
                    visible: o,
                    padding: "2.4rem",
                    isCentered: !0
                }, r.default.createElement(a.StyledH4, null, c), r.default.createElement(a.StyledPTag, {
                    fontSize: "1.4rem",
                    fontWeight: "400"
                }, f), r.default.createElement("div", null, r.default.createElement(a.StyledButton, {
                    appearance: "link",
                    btnColor: "blue",
                    size: "medium",
                    onClick: t
                }, i)), r.default.createElement("div", null, r.default.createElement(a.StyledButton, {
                    appearance: "link",
                    btnColor: "red",
                    size: "medium",
                    onClick: n
                }, u))))
            };
            u.propTypes = {
                onAccept: o.default.func.isRequired,
                onReject: o.default.func.isRequired,
                visible: o.default.bool.isRequired,
                acceptLabel: o.default.string.isRequired,
                rejectLabel: o.default.string.isRequired,
                type: o.default.string,
                title: o.default.string.isRequired,
                message: o.default.string.isRequired
            }, u.defaultProps = {
                type: "small"
            };
            var l = u;
            t.default = l
        },
        "1Nrc": (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = C(n("q1tI")),
                a = I(n("17x9")),
                i = I(n("vOnD")),
                u = I(n("kdDk")),
                l = n("wcxm"),
                c = I(n("aowA")),
                f = I(n("+cBz")),
                d = I(n("lFeK")),
                s = I(n("Pm6m")),
                _ = n("SEds"),
                p = I(n("N/Eu")),
                E = I(n("j399")),
                m = I(n("lXQd")),
                O = I(n("HQku")),
                g = n("zzCw"),
                h = C(n("y8c3")),
                v = I(n("BUyX")),
                b = n("+S4G"),
                y = n("AgGD");

            function I(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return T = function() {
                    return e
                }, e
            }

            function C(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" != typeof e) return {
                    default: e
                };
                var t = T();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                    }
                return n.default = e, t && t.set(e, n), n
            }

            function A() {
                var e = R(["\n  padding-top: ", ";\n  height: 4.8rem;\n"]);
                return A = function() {
                    return e
                }, e
            }

            function N() {
                var e = R(["\n  position: relative;\n  width: 16rem;\n  height: 16rem;\n  margin: auto;\n  margin-top: -3rem;\n"]);
                return N = function() {
                    return e
                }, e
            }

            function S() {
                var e = R(["\n  background-color: ", ";\n  border-radius: 0.4rem;\n  -webkit-appearance: none;\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  -moz-appearance: textfield;\n"]);
                return S = function() {
                    return e
                }, e
            }

            function P() {
                var e = R(["\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n  width: 100%;\n  text-align: center;\n  color: ", ";\n  font-weight: 500;\n  margin-top: 1.6rem;\n  margin-bottom: 0.8rem;\n"]);
                return P = function() {
                    return e
                }, e
            }

            function L() {
                var e = R(["\n  margin-top: 0.4rem;\n  margin-bottom: 1rem;\n  & > span {\n    font-weight: 400;\n  }\n"]);
                return L = function() {
                    return e
                }, e
            }

            function R(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function w() {
                return w = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, w.apply(this, arguments)
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return F(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return F(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var D = function(e) {
                    var t = e.handleOnSignupClick,
                        n = e.sendLoginOTP,
                        r = e.setLoginError,
                        a = e.userDataCallback,
                        i = e.locale,
                        u = e.enableOneTap,
                        l = e.enablePhoneLogin,
                        c = e.countryCodeData,
                        f = e.actionBasedCallback,
                        d = e.selectedLoginInputType,
                        E = e.o2CheckoutFlow,
                        m = e.visible,
                        v = e.links,
                        I = e.setPhoneNumberLoginDetails,
                        T = e.hash,
                        C = e.emailEditFlow,
                        A = e.updateFlowsActionBasedCallback,
                        N = c.selectedCountryCode,
                        S = void 0 === N ? {} : N,
                        P = M((0, o.useState)(""), 2),
                        L = P[0],
                        R = P[1],
                        w = M((0, o.useState)(null), 2),
                        F = w[0],
                        D = w[1],
                        G = M((0, o.useState)(!1), 2),
                        U = G[0],
                        z = G[1],
                        B = function(e) {
                            var t = e.success,
                                r = void 0 !== t && t,
                                o = e.message,
                                a = void 0 === o ? "" : o;
                            r ? C ? n(e) : n(F.val, a, d, e) : R(a), f(y.TAP_BUTTON, {
                                message: a,
                                tapButtonName: i.send_otp_text,
                                type: y.SEND_LOGIN_OTP,
                                success: r,
                                screen: y.LOGIN_SCREEN
                            })
                        },
                        H = function(e) {
                            var t = e.success,
                                r = void 0 !== t && t,
                                o = e.message,
                                a = void 0 === o ? "" : o;
                            A(y.ENTERED_NEW_EMAIL, {
                                success: r,
                                message: a
                            }), r ? n(e, F.val) : R(a)
                        };
                    (0, o.useEffect)((function() {
                        m && f(y.SCREEN_LOADED_ACTION, {
                            screen: y.LOGIN_SCREEN
                        })
                    }), [m]), (0, o.useEffect)((function() {
                        R(""), D(null)
                    }), [d]);
                    var W = M((0, o.useState)(E), 2),
                        V = W[0],
                        q = W[1];
                    (0, o.useEffect)((function() {
                        q(E)
                    }), [E]);
                    var Y, K = d !== g.LOGIN_TYPE_EMAIL;
                    return o.default.createElement(o.default.Fragment, null, o.default.createElement(x, {
                        isModalVisible: m,
                        input: F,
                        handleCountryChange: function(e) {
                            f(y.SET_SELECTED_COUNTRY_DATA_ACTION, e)
                        },
                        handleOnChange: function(e, t) {
                            L && R(""), D({
                                val: e,
                                isPhone: t
                            })
                        },
                        errorMessage: L,
                        locale: i,
                        enablePhoneLogin: l,
                        countryCodeData: c,
                        selectedLoginInputType: d,
                        handleSubmit: function() {
                            if (F)
                                if (F.isPhone) {
                                    var e = S.countryId,
                                        t = void 0 === e ? 1 : e;
                                    (0, b.validatePhone)(F.val, t) ? (z(!0), (0, g.doLogin)(g.LOGIN_TYPE_PHONE, {
                                        phone: F.val,
                                        country_id: t,
                                        verification_type: "sms"
                                    }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        I({
                                            phone: F.val,
                                            countryId: t
                                        }), z(!1), B(e)
                                    })).catch((function(e) {
                                        z(!1), B(y.DEFAULT_ERROR_MESSAGE)
                                    }))) : R(i.signup_invalid_phone_error_message)
                                } else {
                                    (0, b.validateEmail)(F.val) ? (z(!0), C ? (0, g.initiateEmailUpdate2FAVerificationFlow)({
                                        email_id: F.val,
                                        hash: T
                                    }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        z(!1), H(e)
                                    })).catch((function(e) {
                                        z(!1), H(y.DEFAULT_ERROR_MESSAGE)
                                    })) : (0, g.doLogin)(g.LOGIN_TYPE_EMAIL, {
                                        email_id: F.val
                                    }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        z(!1), B(e)
                                    })).catch((function(e) {
                                        z(!1), B(y.DEFAULT_ERROR_MESSAGE)
                                    }))) : R(i.signup_invalid_email_error_message)
                                }
                            else {
                                var n = d === g.LOGIN_TYPE_EMAIL ? i.signup_empty_email_error_message : i.signup_phone_error_message;
                                R(n)
                            }
                        },
                        isFetching: U,
                        showLineSeparator: !E
                    }), Boolean(K && E && V) && o.default.createElement(o.default.Fragment, null, o.default.createElement(k, {
                        appearance: "link",
                        icon: o.default.createElement(p.default, null),
                        iconAlign: "right",
                        onClick: function() {
                            return q(!1)
                        }
                    }, i.checkout_continue_with_email_caption)), Boolean(K && !V) && o.default.createElement(o.default.Fragment, null, o.default.createElement(h.SocialButton, {
                        text: i.checkout_continue_with_email_caption,
                        onClick: (Y = g.LOGIN_TYPE_EMAIL, function() {
                            R(""), D(null), f(y.CHANGE_LOGIN_INPUT_TYPE_ACTION, {
                                type: Y
                            })
                        }),
                        icon: o.default.createElement(s.default, {
                            color: _.red.z500,
                            size: 24
                        })
                    }), o.default.createElement(b.Gap24, null), o.default.createElement(h.default, {
                        loginSuccess: a,
                        loginFailure: r,
                        locale: i,
                        enableOneTap: u,
                        actionBasedCallback: f,
                        screen: y.LOGIN_SCREEN
                    }), o.default.createElement(b.Gap24, null), E && o.default.createElement(j, {
                        locale: i,
                        handleOnSignupClick: t,
                        o2CheckoutFlow: E
                    })), Boolean(K && E) && o.default.createElement(O.default, {
                        locale: i,
                        links: v
                    }), Boolean(K && !E) && o.default.createElement(j, {
                        locale: i,
                        handleOnSignupClick: t
                    }))
                },
                j = function(e) {
                    var t = e.locale,
                        n = e.handleOnSignupClick,
                        r = e.o2CheckoutFlow;
                    return o.default.createElement(o.default.Fragment, null, o.default.createElement(v.default, w({
                        margin: "0 0 1.6rem 0"
                    }, r && {
                        lineColor: _.grey.z200,
                        lineThikness: "0.5px",
                        margin: "0 0 0.8rem 0"
                    })), o.default.createElement(b.StyledP, w({
                        fontSize: "1.6rem"
                    }, r && {
                        fontSize: "1.2rem",
                        lineHeight: "1.8rem",
                        paraMargin: "0 0 2rem 0",
                        textAlign: "center"
                    }), "".concat(t.new_to_zomato_text, " "), o.default.createElement(b.Span, w({
                        lineHeight: "1.6rem",
                        onClick: n
                    }, r && {
                        lineHeight: "1.8rem",
                        fontSize: "1.2rem"
                    }), t.create_account_button_text)))
                },
                x = function(e) {
                    var t = e.handleOnChange,
                        n = e.handleCountryChange,
                        r = e.errorMessage,
                        a = e.locale,
                        i = e.enablePhoneLogin,
                        u = e.countryCodeData,
                        l = e.selectedLoginInputType,
                        f = e.handleSubmit,
                        d = e.isFetching,
                        s = e.showLineSeparator,
                        _ = e.isModalVisible,
                        E = e.input,
                        O = u || {},
                        h = O.allCountryCode,
                        y = void 0 === h ? [] : h,
                        I = O.selectedCountryCode,
                        T = void 0 === I ? {} : I,
                        C = T.countryId,
                        A = void 0 === C ? 1 : C,
                        N = M((0, o.useState)(""), 2),
                        S = N[0],
                        P = N[1],
                        L = M((0, o.useState)(""), 2),
                        R = L[0],
                        F = L[1];
                    var D = l === g.LOGIN_TYPE_PHONE ? {
                        type: "number",
                        pattern: "[0-9]{1}",
                        inputMode: "numeric"
                    } : {};
                    return o.default.createElement(o.default.Fragment, null, Boolean(l === g.LOGIN_TYPE_EMAIL) && o.default.createElement(o.default.Fragment, null, o.default.createElement(z, {
                        src: "https://b.zmtcdn.com/Zwebmolecules/73b3ee9d469601551f2a0952581510831595917292.png",
                        imgAlt: "Email Icon",
                        height: "3.5rem",
                        width: "16rem",
                        fit: "contain"
                    }), o.default.createElement(c.default, {
                        value: S,
                        label: a.signup_email_label,
                        fullWidth: !0,
                        innerWidth: "100%",
                        borderColor: "#009999",
                        onChange: function(e) {
                            t(e, !1), P(e)
                        },
                        errorMsg: r,
                        hideLabel: !0
                    }), o.default.createElement(b.Gap10, null), o.default.createElement(B, {
                        btnColor: "red",
                        onClick: f,
                        loading: d,
                        isError: !!r
                    }, a.send_otp_text)), Boolean(l === g.LOGIN_TYPE_PHONE && i) && o.default.createElement(o.default.Fragment, null, o.default.createElement(U, w({}, D, {
                        width: "100%",
                        placeholder: a.signup_phone_label,
                        onChange: function(e) {
                            e && !/^[0-9]+$/.test(e) || (t(e, !0), F(e))
                        },
                        fnCountryChange: n,
                        errorText: r,
                        countries: y,
                        defaultIsdCode: T.isdCode,
                        autoFocusInput: _,
                        value: R
                    })), o.default.createElement(B, w({
                        disabled: !(0, b.validatePhone)((0, m.default)(E, "val", ""), A),
                        btnColor: "red",
                        onClick: f,
                        loading: d,
                        isError: !!r
                    }, !s && {
                        icon: o.default.createElement(p.default, null),
                        iconAlign: "right"
                    }), a.send_otp_text), Boolean(s) ? o.default.createElement(o.default.Fragment, null, o.default.createElement(b.Gap24, null), o.default.createElement(v.default, {
                        margin: "0 0 2.4rem 0"
                    }, a.or_text)) : o.default.createElement(o.default.Fragment, null, o.default.createElement(G, null, (a.or_text || "").toUpperCase()))))
                },
                k = (0, i.default)(u.default)(L()),
                G = (0, i.default)(l.P)(P(), _.grey.z800),
                U = (0, i.default)(f.default)(S(), _.grey.z50),
                z = (0, i.default)(d.default)(N()),
                B = (0, i.default)(u.default)(A(), (function(e) {
                    return e.isError ? "0.6rem" : "0"
                }));
            x.propTypes = {
                setPhoneNumberLoginDetails: a.default.func.isRequired,
                handleOnChange: a.default.func.isRequired,
                handleCountryChange: a.default.func.isRequired,
                errorMessage: a.default.string,
                locale: a.default.objectOf(a.default.string).isRequired,
                enablePhoneLogin: a.default.bool,
                selectedLoginInputType: a.default.string.isRequired
            }, x.defaultProps = {
                errorMessage: "",
                locale: {},
                enablePhoneLogin: !1
            }, D.propTypes = {
                handleOnSignupClick: a.default.func.isRequired,
                sendLoginOTP: a.default.func.isRequired,
                setLoginError: a.default.func.isRequired,
                userDataCallback: a.default.func.isRequired,
                locale: a.default.objectOf(a.default.string).isRequired,
                enableOneTap: a.default.bool,
                enablePhoneLogin: a.default.bool,
                actionBasedCallback: a.default.func,
                selectedLoginInputType: a.default.string.isRequired,
                visible: a.default.bool,
                hash: a.default.string,
                emailEditFlow: a.default.bool,
                updateFlowsActionBasedCallback: a.default.func
            }, D.defaultProps = {
                enableOneTap: !1,
                hash: "",
                emailEditFlow: !1,
                enablePhoneLogin: !1,
                actionBasedCallback: E.default,
                visible: !1,
                updateFlowsActionBasedCallback: E.default
            };
            var H = D;
            t.default = H
        },
        Q4ka: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = _(n("q1tI")),
                o = _(n("17x9")),
                a = _(n("vOnD")),
                i = _(n("bL8M")),
                u = n("SEds"),
                l = _(n("BJIh")),
                c = _(n("BAyj")),
                f = _(n("j399")),
                d = _(n("1Nrc")),
                s = n("zzCw");

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p() {
                var e = g(["\n  position: absolute;\n  width: 100%;\n  bottom: 2rem;\n  padding: 0 2rem;\n  @media (max-width: 480px) {\n    bottom: 13rem;\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }

            function E() {
                var e = g(["\n  border-radius: 0.6rem;\n  overflow: hidden;\n  div:nth-child(2) {\n    width: 100%;\n  }\n"]);
                return E = function() {
                    return e
                }, e
            }

            function m() {
                var e = g(["\n  border-radius: 1.2rem;\n  overflow: hidden;\n  height: 43rem;\n  @media (max-width: 480px) {\n    height: ", ";\n  }\n"]);
                return m = function() {
                    return e
                }, e
            }

            function O() {
                var e = g(["\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  padding: 2rem;\n"]);
                return O = function() {
                    return e
                }, e
            }

            function g(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var h = function(e) {
                    var t = e.enablePhoneLogin,
                        n = void 0 !== t && t,
                        o = e.selectedLoginInputType,
                        a = void 0 === o ? "" : o,
                        i = e.onClose,
                        l = e.showShimmer,
                        f = e.showSmallShimmer;
                    return l ? r.default.createElement(b, {
                        height: f ? "50vh" : "95vh"
                    }, r.default.createElement(c.default, {
                        width: "100%",
                        height: "100%"
                    })) : r.default.createElement(r.default.Fragment, null, a !== s.LOGIN_TYPE_PHONE || n ? r.default.createElement(d.default, e) : r.default.createElement(r.default.Fragment, null, r.default.createElement(y, {
                        id: "styledFluid",
                        height: "43rem",
                        heightMobile: "95vh",
                        src: "https://b.zmtcdn.com/zwebmolecules/fdf80c52548d914d6ee1ed8f727855481595928059.png",
                        srcMobile: "https://b.zmtcdn.com/Zwebmolecules/5c8215b9c28d2372335efe23beb2c3b61595916877.png",
                        alt: "Login-background"
                    }, r.default.createElement(I, null, r.default.createElement(d.default, e))), r.default.createElement(v, {
                        color: u.red.z400,
                        size: 28,
                        onClick: i
                    })))
                },
                v = (0, a.default)(l.default)(O()),
                b = a.default.div(m(), (function(e) {
                    return e.height || "95vh"
                })),
                y = (0, a.default)(i.default)(E()),
                I = a.default.div(p());
            h.propTypes = {
                enablePhoneLogin: o.default.bool,
                selectedLoginInputType: o.default.string,
                onClose: o.default.func,
                showShimmer: o.default.bool
            }, h.defaultProps = {
                enablePhoneLogin: !1,
                selectedLoginInputType: "",
                onClose: f.default,
                showShimmer: !1
            };
            var T = h;
            t.default = T
        },
        oboH: (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.Gap10 = void 0;
            var o = g(n("q1tI")),
                a = g(n("vOnD")),
                i = m(n("17x9")),
                u = m(n("OHja")),
                l = m(n("qZ2b")),
                c = m(n("aowA")),
                f = m(n("kdDk")),
                d = m(n("HMsx")),
                s = m(n("j399")),
                _ = n("zzCw"),
                p = n("AgGD"),
                E = n("+S4G");

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return O = function() {
                    return e
                }, e
            }

            function g(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" != typeof e) return {
                    default: e
                };
                var t = O();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                    }
                return n.default = e, t && t.set(e, n), n
            }

            function h() {
                var e = N(["\n  margin-bottom: 1rem;\n"]);
                return h = function() {
                    return e
                }, e
            }

            function v() {
                var e = N(["\n  font-size: 1.7rem;\n  text-align: center;\n  line-height: 2.2rem;\n  margin: ", ";\n  color: ", ";\n  font-weight: ", ";\n"]);
                return v = function() {
                    return e
                }, e
            }

            function b() {
                var e = N(["\n      cursor: pointer;\n      color: #ed5a6b;\n    "]);
                return b = function() {
                    return e
                }, e
            }

            function y() {
                var e = N(["\n  color: #b5b5b5;\n  ", "\n"]);
                return y = function() {
                    return e
                }, e
            }

            function I() {
                var e = N(["\n  font-size: 1.6rem;\n  line-height: 2rem;\n  color: #696969;\n  text-align: center;\n  margin-top: 0.8rem;\n"]);
                return I = function() {
                    return e
                }, e
            }

            function T() {
                var e = N(["\n  font-size: 1.2rem;\n  color: ", ";\n  margin: 0.5rem 0 0;\n  text-align: center;\n"]);
                return T = function() {
                    return e
                }, e
            }

            function C() {
                var e = N(["\n  min-height: 2.2rem !important;\n  & > span {\n    min-height: 2.2rem !important;\n    font-size: 1.5rem;\n    font-weight: 400;\n  }\n  margin-bottom: 1.6rem;\n"]);
                return C = function() {
                    return e
                }, e
            }

            function A() {
                var e = N(["\n  font-size: 3.2rem;\n  line-height: 4.5rem;\n  color: #1c1c1c;\n  text-align: center;\n  margin: 2rem 0 0 0;\n"]);
                return A = function() {
                    return e
                }, e
            }

            function N(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        L(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function L(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return w(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var M = function(e) {
                    var t = e.o2CheckoutFlow,
                        n = e.phoneNumberLoginDetails,
                        r = e.countryCode,
                        a = e.headerText,
                        i = e.closeModal,
                        d = e.currentEmail,
                        s = e.currentPhone,
                        m = e.setShowOTPScreen,
                        O = e.setLoginError,
                        g = e.setShowDialog,
                        h = e.showDialog,
                        v = e.userDataCallback,
                        b = e.type,
                        y = e.locale,
                        I = e.countryId,
                        T = e.verificationType,
                        C = e.actionBasedCallback,
                        A = e.userHash,
                        N = e.updateFlowsActionBasedCallback,
                        S = e.messageUuid,
                        L = y.new_otp_has_been_sent_text,
                        w = R((0, o.useState)(""), 2),
                        M = w[0],
                        z = w[1],
                        B = R((0, o.useState)(!1), 2),
                        H = B[0],
                        W = B[1],
                        V = R((0, o.useState)(30), 2),
                        q = V[0],
                        Y = V[1],
                        K = R((0, o.useState)(!1), 2),
                        Z = K[0],
                        J = K[1],
                        X = R((0, o.useState)(!1), 2),
                        $ = X[0],
                        Q = X[1],
                        ee = R((0, o.useState)(""), 2),
                        te = ee[0],
                        ne = ee[1],
                        re = R((0, o.useState)(p.CLOSE_OTP_REASONS.CLOSE_MODAL), 2),
                        oe = re[0],
                        ae = re[1];
                    (0, o.useEffect)((function() {
                        var e = {
                            screen: p.OTP_SCREEN
                        };
                        T === p.OTM_EMAIL_LINK_OTP_VERIFICATION && (e = P(P({}, e), {}, {
                            pageOpenSource: "multi_link_accounts"
                        })), C(p.SCREEN_LOADED_ACTION, e)
                    }), []);
                    var ie = function(e) {
                            Q(!1);
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.message,
                                o = void 0 === r ? "" : r;
                            N(p.TWOFA_EMAIL_VERIFICATION_INITIATED, {
                                success: n,
                                message: o
                            }), n ? N(p.TWOFA_EMAIL_VERIFICATION_SUCCESSFUL, {
                                response: e
                            }) : (W(!0), z(o))
                        },
                        ue = function(e) {
                            Q(!1);
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.user_data,
                                o = void 0 === r ? {} : r,
                                a = e.message,
                                i = void 0 === a ? "" : a;
                            C(p.OTP_ENTERED, {
                                message: i,
                                success: n,
                                verificationType: T,
                                screen: p.OTP_SCREEN
                            }), n ? (m(!1), v(o)) : function(e) {
                                var t = e.message,
                                    n = void 0 === t ? "" : t,
                                    r = e.error_type;
                                switch (void 0 === r ? "" : r) {
                                    case "filled-wrong-password-general":
                                    case "filled-wrong-password-few-attempts-left":
                                        W(!0), z(n);
                                        break;
                                    default:
                                        O(n)
                                }
                            }(e)
                        },
                        le = function(e) {
                            Q(!1);
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.user_data,
                                o = void 0 === r ? {} : r,
                                a = e.message,
                                i = void 0 === a ? "" : a;
                            C(p.OTP_ENTERED, {
                                message: i,
                                success: n,
                                verificationType: T,
                                screen: p.OTP_SCREEN,
                                pageOpenSource: "multi_link_accounts"
                            }), n ? v(o) : (W(!0), z(i))
                        },
                        ce = function(e) {
                            Q(!1);
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.message,
                                o = void 0 === r ? "" : r;
                            N(p.ONEFA_VERIFICATION_INITIATED, {
                                success: n,
                                message: o
                            }), n ? N(p.ONEFA_VERIFICATION_SUCCESSFUL, {
                                response: e
                            }) : (W(!0), z(o))
                        },
                        fe = function(e) {
                            Q(!1);
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.user_data,
                                o = void 0 === r ? {} : r,
                                a = e.message,
                                i = void 0 === a ? "" : a;
                            if (C(p.OTP_ENTERED, {
                                    message: i,
                                    success: n,
                                    verificationType: T,
                                    screen: p.OTP_SCREEN
                                }), n) {
                                var u = e.login_case,
                                    l = void 0 === u ? "" : u;
                                switch (l) {
                                    case p.LOGIN_CASE_OTO_MAPPING:
                                    case p.LOGIN_CASE_ALREADY_REGISTERED:
                                        m(!1), v(o);
                                        break;
                                    case p.LOGIN_CASE_OTM_MAPPING:
                                    case p.LOGIN_CASE_NEW_USER:
                                        C(p.PHONE_LOGIN_OTP_VERIFY, {
                                            screen: l,
                                            response: e
                                        });
                                        break;
                                    default:
                                        m(!1), v(o)
                                }
                            } else W(!0), z(i)
                        },
                        de = function(e) {
                            var t = {};
                            T === p.PHONE_LOGIN_OTP_VERFICATION ? (t = {
                                phone: s,
                                code: e,
                                country_id: I
                            }, (0, _.doMobileVerify)(t).then((function(e) {
                                return e.json()
                            })).then(fe)) : T === p.OTM_EMAIL_LINK_OTP_VERIFICATION ? (t = {
                                hash: A,
                                token: e
                            }, (0, _.doOTMEmailVerify)(t).then((function(e) {
                                return e.json()
                            })).then(le)) : [p.PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE, p.EMAIL_ONE_FA_FOR_EDIT_PROFILE].includes(T) ? (t = {
                                hash: A,
                                otp: e
                            }, (0, _.verifyOnefaOTP)(t).then((function(e) {
                                return e.json()
                            })).then(ce)) : T === p.EMAIL_TWO_FA_FOR_EDIT_PROFILE ? (t = {
                                otp: e,
                                hash: A
                            }, (0, _.verifyTwofaOTPEmailUpdate)(t).then((function(e) {
                                return e.json()
                            })).then(ie)) : (t = {
                                email_id: d,
                                otp: e
                            }, (0, _.doVerify)(t).then((function(e) {
                                return e.json()
                            })).then(ue))
                        },
                        se = function(e) {
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.message,
                                o = void 0 === r ? "" : r;
                            n ? (W(!1), z(L), Y(30)) : (W(!0), z(o), J(!0))
                        },
                        _e = function(e) {
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.message,
                                o = void 0 === r ? "" : r;
                            N(p.ONE_FA_RESEND, {
                                success: n,
                                message: o
                            }), se(e)
                        },
                        pe = function(e) {
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.message,
                                o = void 0 === r ? "" : r;
                            N(p.TWO_FA_RESEND, {
                                success: n,
                                message: o
                            }), se(e)
                        };
                    (0, o.useEffect)((function() {
                        var e = null;
                        return 0 === q ? (z(""), J(!0)) : e = setInterval((function() {
                                return Y(q - 1)
                            }), 1e3),
                            function() {
                                return e && clearInterval(e)
                            }
                    }), [q]);
                    var Ee = T === p.PHONE_LOGIN_OTP_VERFICATION && b === p.LOGIN_TYPES.LOGIN || T === p.PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE && b === p.USER_PROFILE_UPDATE_TYPES.EMAIL,
                        me = t && Ee ? (0, E.formatLangKey)(y.checkout_flow_phone_login_otp_header_text, o.default.createElement(G, {
                            boxMargin: "0",
                            fontWeight: 600
                        }, "+".concat(r, "-").concat(n.phone || ""))) : a;
                    return o.default.createElement(o.default.Fragment, null, o.default.createElement(G, null, me), Ee && !b === p.USER_PROFILE_UPDATE_TYPES.EMAIL && o.default.createElement(D, {
                        appearance: "link",
                        onClick: function() {
                            ae(p.CLOSE_OTP_REASONS.CHANGE_NUMBER), g(!0)
                        }
                    }, y.checkout_otp_flow_change_number), Ee ? o.default.createElement(u.default, {
                        length: 6,
                        fnInputFill: function(e) {
                            Q(!0), de(e)
                        },
                        onChange: function() {
                            return M && z("")
                        },
                        loading: $,
                        inputType: "number"
                    }) : o.default.createElement(o.default.Fragment, null, o.default.createElement(c.default, {
                        value: te,
                        label: y.otp_text_box_label,
                        fullWidth: !0,
                        innerWidth: "100%",
                        borderColor: "#009999",
                        onChange: function(e) {
                            ne(e)
                        },
                        hideLabel: !0
                    }), o.default.createElement(U, null), o.default.createElement(f.default, {
                        btnColor: "red",
                        loading: $,
                        onClick: function() {
                            Q(!0), de(te)
                        }
                    }, y.otp_text_box_proceed_button)), o.default.createElement(j, {
                        isError: H
                    }, M), o.default.createElement(F, {
                        time: "00:".concat(q < 10 ? "0".concat(q) : q)
                    }), o.default.createElement(x, null, y.not_received_otp_text, " ", o.default.createElement(k, {
                        enabled: Z,
                        onClick: function() {
                            if (Z)
                                if (J(!1), T === p.PHONE_LOGIN_OTP_VERFICATION)(0, _.doLogin)(_.LOGIN_TYPE_PHONE, {
                                    phone: s,
                                    country_id: I,
                                    verification_type: "sms"
                                }).then((function(e) {
                                    return e.json()
                                })).then(se).catch((function(e) {
                                    return se(p.DEFAULT_ERROR_MESSAGE)
                                }));
                                else if (T === p.OTM_EMAIL_LINK_OTP_VERIFICATION)(0, _.doEmailLinkAccount)({
                                hash: A
                            }).then((function(e) {
                                return e.json()
                            })).then(se).catch((function(e) {
                                return se(p.DEFAULT_ERROR_MESSAGE)
                            }));
                            else if ([p.PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE, p.EMAIL_ONE_FA_FOR_EDIT_PROFILE].includes(T)) {
                                var e = {
                                    message_uuid: S,
                                    entity: p.EMAIL_ENTITY
                                };
                                (0, _.initiateProfileUpdate1FAVerificationFlow)(e).then((function(e) {
                                    return e.json()
                                })).then(_e).catch((function(e) {
                                    return se(p.DEFAULT_ERROR_MESSAGE)
                                }))
                            } else if (T === p.EMAIL_TWO_FA_FOR_EDIT_PROFILE) {
                                var t = {
                                    email_id: d,
                                    hash: A
                                };
                                (0, _.initiateEmailUpdate2FAVerificationFlow)(t).then((function(e) {
                                    return e.json()
                                })).then(pe).catch((function(e) {
                                    return se(p.DEFAULT_ERROR_MESSAGE)
                                }))
                            } else(0, _.doResend)({
                                email_id: d,
                                type: b
                            }).then((function(e) {
                                return e.json()
                            })).then(se).catch((function(e) {
                                return se(p.DEFAULT_ERROR_MESSAGE)
                            }))
                        }
                    }, y.resend_now_text)), o.default.createElement(l.default, {
                        visible: h,
                        onAccept: function() {
                            g(!1), m(!1), oe == p.CLOSE_OTP_REASONS.CLOSE_MODAL && i(), C(p.ERROR_CALLBACK_ACTION, {
                                message: "Manually closed otp screen",
                                screen: p.OTP_SCREEN,
                                verificationType: T
                            })
                        },
                        onReject: function() {
                            ae(p.CLOSE_OTP_REASONS.CLOSE_MODAL), g(!1)
                        },
                        acceptLabel: y.yes_button_text,
                        rejectLabel: y.no_button_text,
                        message: y.terminate_verification_text
                    }))
                },
                F = function e(t) {
                    var n = t.time;
                    return o.default.createElement(e.Text, null, n)
                };
            F.Text = a.default.p(A()), F.propTypes = {
                time: i.default.string.isRequired
            };
            var D = (0, a.default)(f.default)(C()),
                j = a.default.p(T(), (function(e) {
                    return e.isError ? "#ed5a6b" : "#2781e7"
                })),
                x = a.default.p(I()),
                k = a.default.span(y(), (function(e) {
                    return e.enabled && (0, a.css)(b())
                })),
                G = a.default.p(v(), (function(e) {
                    return e.boxMargin || "0 0 0.8rem 0"
                }), d.default.z800, (function(e) {
                    return e.fontWeight || 300
                })),
                U = a.default.span(h());
            t.Gap10 = U, M.propTypes = {
                headerText: i.default.string.isRequired,
                currentEmail: i.default.string.isRequired,
                currentPhone: i.default.string.isRequired,
                closeModal: i.default.func.isRequired,
                setShowOTPScreen: i.default.func.isRequired,
                setLoginError: i.default.func.isRequired,
                showDialog: i.default.bool.isRequired,
                setShowDialog: i.default.func.isRequired,
                userDataCallback: i.default.func.isRequired,
                type: i.default.string.isRequired,
                locale: i.default.objectOf(i.default.string),
                countryId: i.default.number.isRequired,
                verificationType: i.default.string,
                actionBasedCallback: i.default.func.isRequired,
                userHash: i.default.string,
                messageUuid: i.default.string,
                updateFlowsActionBasedCallback: i.default.func
            }, M.defaultProps = {
                updateFlowsActionBasedCallback: s.default,
                verificationType: p.DEFAULT_OTP_VERIFICATION,
                userHash: "",
                messageUuid: ""
            };
            var z = M;
            t.default = z
        },
        O4kB: (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Timer = t.StyledModal = t.StyledH4 = t.ResendSpan = t.ResendSection = t.TextDiv = t.StyledZImage = t.StyledButton = t.StyledPTag = t.StyledP = t.StyledSpan = t.WidthDiv = t.LinkedAccounts = t.MarginDiv = t.GoBack = t.FlexWrapper = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = _();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("vOnD")),
                a = s(n("lFeK")),
                i = n("kkbd"),
                u = s(n("wRyO")),
                l = s(n("gAKm")),
                c = s(n("FrN4")),
                f = s(n("kdDk")),
                d = s(n("J+Im"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function _() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return _ = function() {
                    return e
                }, e
            }

            function p() {
                var e = R(["\n  font-size: 3rem;\n  line-height: 4rem;\n  color: #1c1c1c;\n  text-align: center;\n  margin: 1rem 0 0 0;\n"]);
                return p = function() {
                    return e
                }, e
            }

            function E() {
                var e = R(["\n  z-index: 101 !important;\n  @media only screen and (min-width: 481px) {\n    div:nth-child(2) {\n      width: 40rem;\n    }\n  }\n\n  div:nth-child(2) {\n    text-align: center;\n    border-radius: 2.5rem;\n  }\n"]);
                return E = function() {
                    return e
                }, e
            }

            function m() {
                var e = R(["\n  padding-bottom: 1.5rem;\n"]);
                return m = function() {
                    return e
                }, e
            }

            function O() {
                var e = R(["\n      cursor: pointer;\n      color: #ed5a6b;\n    "]);
                return O = function() {
                    return e
                }, e
            }

            function g() {
                var e = R(["\n  color: #b5b5b5;\n  ", "\n"]);
                return g = function() {
                    return e
                }, e
            }

            function h() {
                var e = R(["\n  font-size: 1.6rem;\n  line-height: 2.1rem;\n  color: #696969;\n  text-align: center;\n"]);
                return h = function() {
                    return e
                }, e
            }

            function v() {
                var e = R(["\n  padding-left: 2rem;\n  cursor: pointer;\n  flex-grow: 1;\n"]);
                return v = function() {
                    return e
                }, e
            }

            function b() {
                var e = R(["\n  border-radius: 50%;\n"]);
                return b = function() {
                    return e
                }, e
            }

            function y() {
                var e = R(["\n  span {\n    font-weight: ", ";\n    font-size: 1.6rem;\n  }\n"]);
                return y = function() {
                    return e
                }, e
            }

            function I() {
                var e = R(["\n  padding-bottom: 2rem;\n  text-align: center;\n"]);
                return I = function() {
                    return e
                }, e
            }

            function T() {
                var e = R(["\n  font-weight: ", ";\n  font-size: ", ";\n"]);
                return T = function() {
                    return e
                }, e
            }

            function C() {
                var e = R(["\n  color: ", ";\n  cursor: pointer;\n"]);
                return C = function() {
                    return e
                }, e
            }

            function A() {
                var e = R(["\n  width: ", ";\n"]);
                return A = function() {
                    return e
                }, e
            }

            function N() {
                var e = R(["\n  margin: 2rem 0 2rem 0;\n  padding-left: 3rem;\n"]);
                return N = function() {
                    return e
                }, e
            }

            function S() {
                var e = R(["\n  margin: 3rem 0 3rem 0;\n"]);
                return S = function() {
                    return e
                }, e
            }

            function P() {
                var e = R(["\n  cursor: pointer;\n"]);
                return P = function() {
                    return e
                }, e
            }

            function L() {
                var e = R(["\n  display: flex;\n  align-items: center;\n  padding: 1rem 0 1rem 0;\n  justify-content: ", ";\n"]);
                return L = function() {
                    return e
                }, e
            }

            function R(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var w = o.default.div(L(), (function(e) {
                return e.justifyContent ? e.justifyContent : "initial"
            }));
            t.FlexWrapper = w;
            var M = (0, o.default)(d.default)(P());
            t.GoBack = M;
            var F = o.default.div(S());
            t.MarginDiv = F;
            var D = o.default.div(N());
            t.LinkedAccounts = D;
            var j = o.default.div(A(), (function(e) {
                return e.width ? e.width : 0
            }));
            t.WidthDiv = j;
            var x = o.default.span(C(), u.default.z500);
            t.StyledSpan = x;
            var k = (0, o.default)(i.P)(T(), (function(e) {
                return e.fontWeight ? e.fontWeight : 500
            }), (function(e) {
                return e.fontSize
            }));
            t.StyledP = k;
            var G = (0, o.default)(k)(I());
            t.StyledPTag = G;
            var U = (0, o.default)(f.default)(y(), (function(e) {
                return e.fontWeight ? e.fontWeight : "500"
            }));
            t.StyledButton = U;
            var z = (0, o.default)(a.default)(b());
            t.StyledZImage = z;
            var B = o.default.div(v());
            t.TextDiv = B;
            var H = o.default.p(h());
            t.ResendSection = H;
            var W = o.default.span(g(), (function(e) {
                return e.enabled && (0, o.css)(O())
            }));
            t.ResendSpan = W;
            var V = (0, o.default)(l.default)(m());
            t.StyledH4 = V;
            var q = (0, o.default)(c.default)(E());
            t.StyledModal = q;
            var Y = (0, o.default)(i.P)(p());
            t.Timer = Y
        }
    }
]);