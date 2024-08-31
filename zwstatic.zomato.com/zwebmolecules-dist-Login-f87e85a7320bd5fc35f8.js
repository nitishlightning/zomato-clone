"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5519], {
        NFB5: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("watF")),
                o = r(n("q1tI")),
                l = r(n("17x9")),
                u = r(n("j399")),
                i = r(n("vOnD")),
                c = n("3o+L"),
                f = (r(n("czsM")), r(n("hkzt"))),
                d = function e(t) {
                    var n = (0, c.getType)(t.disabled, t.solid);
                    return o.default.createElement(e.Label, t, o.default.createElement(e.Element, {
                        key: t.value,
                        disabled: t.disabled,
                        cbType: n,
                        type: "checkbox",
                        onChange: function(e) {
                            e.stopPropagation(), e.persist(), t.onChange((0, a.default)({}, t.value, !t.checked), e)
                        },
                        checked: t.checked,
                        "aria-checked": t.checked,
                        color: t.color
                    }), t.label)
                },
                s = function(e) {
                    return e.disabled ? "not-allowed" : "pointer"
                };
            d.Label = i.default.label.withConfig({
                componentId: "sc-1o2pknd-0"
            })(["font-size:14px;line-height:1.2;color:#1c1c1c;height:18px;cursor:", ";display:flex;align-items:center;justify-content:start;height:100%;width:max-content;"], s), d.Element = i.default.input.withConfig({
                componentId: "sc-1o2pknd-1"
            })(["appearance:none;cursor:", ";outline:0;border-radius:4px;margin-right:8px;width:18px;height:18px;background:#fff;border:2px solid ", ";box-sizing:border-box;position:relative;&:hover{border:2px solid ", ';}transition:all 0.4s;&:checked::after{position:absolute;top:3.5%;left:30%;width:0.55rem;height:1rem;content:"";border-color:', ";border-style:solid;border-top:0;border-right-width:2px;border-bottom-width:2px;border-left:0;transform:rotate(48deg);}&:checked{border:2px solid ", ";background:", ";}"], s, (0, c.getAttributes)("borderColor"), (0, c.getAttributes)("hoverBorderColor"), (0, c.getClickedAttributes)("tickColor"), (0, c.getClickedAttributes)("borderColor"), (0, c.getClickedAttributes)("background")), d.propTypes = {
                label: l.default.string.isRequired,
                value: l.default.string.isRequired,
                onChange: l.default.func,
                checked: l.default.bool,
                disabled: l.default.bool,
                solid: l.default.bool,
                color: l.default.string
            }, d.defaultProps = {
                disabled: !1,
                onChange: u.default,
                checked: !1,
                solid: !0,
                color: f.default.z500
            };
            t.default = d
        },
        "3o+L": (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getType = t.getClickedAttributes = t.getAttributes = void 0;
            var r = n("hJYu");
            t.getClickedAttributes = function(e) {
                return function(t) {
                    return function(e, t) {
                        return r.checkboxSelected[e](t)
                    }(t.cbType, t.color)[e]
                }
            }, t.getAttributes = function(e) {
                return function(t) {
                    return function(e, t) {
                        return e ? r.checkbox.disabled : r.checkbox.default(t)
                    }(t.disabled, t.color)[e]
                }
            }, t.getType = function(e, t) {
                var n = [];
                return e && n.push("disabled"), t && n.push("solid"), n.length ? n.join("_") : "default"
            }
        },
        U8Rt: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("NFB5"));
            t.default = a.default
        },
        dsI2: (e, t, n) => {
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
            var a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = y();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = v(n("17x9")),
                l = v(n("vOnD")),
                u = v(n("FrN4")),
                i = v(n("lXQd")),
                c = v(n("AkOy")),
                f = v(n("j399")),
                d = v(n("Q4ka")),
                s = v(n("GJhT")),
                _ = v(n("oboH")),
                m = v(n("z7es")),
                p = v(n("bb89")),
                b = v(n("mugf")),
                E = n("zzCw"),
                O = n("O4kB"),
                g = n("c9uF"),
                h = n("AgGD");

            function v(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function y() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return y = function() {
                    return e
                }, e
            }

            function C() {
                var e = A([""]);
                return C = function() {
                    return e
                }, e
            }

            function T() {
                var e = A(["\n  z-index: 100;\n"]);
                return T = function() {
                    return e
                }, e
            }

            function S() {
                var e = A(["\n  margin-top: ", ";\n  display: flex;\n  flex-direction: column;\n  width: 40rem;\n  @media (max-width: 480px) {\n    width: unset;\n  }\n  padding: ", ";\n"]);
                return S = function() {
                    return e
                }, e
            }

            function N() {
                var e = A(["\n  font-size: 3rem;\n  line-height: 4rem;\n  margin: 1.5rem 0;\n  font-weight: 500;\n  color: #4f4f4f;\n"]);
                return N = function() {
                    return e
                }, e
            }

            function A(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function L() {
                return L = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, L.apply(this, arguments)
            }

            function I(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function k(e, t) {
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
                    t % 2 ? k(Object(n), !0).forEach((function(t) {
                        w(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function w(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, u = e[Symbol.iterator](); !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var j = (0, a.forwardRef)((function(e, t) {
                    var n = e.isOpen,
                        r = void 0 === n || n,
                        o = e.fnCloseRequest,
                        l = e.loginType,
                        u = void 0 === l ? h.LOGIN_TYPES.LOGIN : l,
                        f = e.setLoginType,
                        O = e.fnOnAuthenticate,
                        v = e.genericActionCallback,
                        y = e.links,
                        C = void 0 === y ? {} : y,
                        T = e.enableScrollOnClose,
                        S = e.locale,
                        N = e.enableOneTap,
                        A = e.enablePhoneLogin,
                        k = e.o2CheckoutFlow,
                        w = e.isMobile,
                        x = M((0, a.useState)(!1), 2),
                        D = x[0],
                        B = x[1],
                        F = M((0, a.useState)(""), 2),
                        z = F[0],
                        H = F[1],
                        q = M((0, a.useState)(""), 2),
                        Y = q[0],
                        W = q[1],
                        K = M((0, a.useState)(""), 2),
                        V = K[0],
                        Q = K[1],
                        J = M((0, a.useState)(""), 2),
                        X = J[0],
                        Z = J[1],
                        $ = M((0, a.useState)(0), 2),
                        ee = $[0],
                        te = $[1],
                        ne = M((0, a.useState)(E.LOGIN_TYPE_PHONE), 2),
                        re = ne[0],
                        ae = ne[1],
                        oe = M((0, a.useState)(!1), 2),
                        le = oe[0],
                        ue = oe[1],
                        ie = M((0, a.useState)(0), 2),
                        ce = ie[0],
                        fe = ie[1],
                        de = M((0, a.useState)({}), 2),
                        se = de[0],
                        _e = de[1],
                        me = M((0, a.useState)(""), 2),
                        pe = me[0],
                        be = me[1],
                        Ee = M((0, a.useState)(!1), 2),
                        Oe = Ee[0],
                        ge = Ee[1],
                        he = M((0, a.useState)({
                            phone: "",
                            countryId: 1
                        }), 2),
                        ve = he[0],
                        ye = he[1],
                        Ce = M((0, a.useState)(!0), 2),
                        Te = Ce[0],
                        Se = Ce[1],
                        Ne = M((0, a.useState)({
                            selectedCountryCode: h.SELECTED_COUNTRY_CODE
                        }), 2),
                        Ae = Ne[0],
                        Le = Ne[1],
                        Ie = (0, a.useMemo)((function() {
                            return P(P({}, h.staticLang), S)
                        }), [S]);
                    (0, a.useEffect)((function() {
                        ge(!0), (0, E.doInitilizeData)().then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            var t = e.phone_login,
                                n = void 0 !== t && t,
                                r = e.all_country_code,
                                a = void 0 === r ? [] : r,
                                o = e.selected_country_code,
                                l = void 0 === o ? {} : o;
                            n && (Se(!1), Le({
                                allCountryCode: a,
                                selectedCountryCode: l
                            })), ge(!1)
                        })).catch((function(e) {
                            ge(!1)
                        }))
                    }), []);
                    var ke = function() {
                            return A && !Te
                        },
                        Pe = function(e, t) {
                            switch (e) {
                                case h.SET_SELECTED_COUNTRY_DATA_ACTION:
                                    Le(P(P({}, Ae), {}, {
                                        selectedCountryCode: t
                                    }));
                                    break;
                                case h.CHANGE_LOGIN_INPUT_TYPE_ACTION:
                                    var n = t.type,
                                        r = void 0 === n ? "" : n;
                                    r && ae(r);
                                    break;
                                case h.PHONE_LOGIN_OTP_VERIFY:
                                    var a = t.screen,
                                        o = void 0 === a ? 0 : a,
                                        l = t.response,
                                        i = void 0 === l ? {} : l;
                                    fe(o), _e(i), B(!1);
                                    break;
                                case h.OTM_EMAIL_VERIFICATION_ACTION:
                                    var c = t.message,
                                        f = void 0 === c ? "" : c,
                                        d = t.title,
                                        s = void 0 === d ? "" : d;
                                    fe(h.OTM_EMAIL_LINK_OTP_VERIFICATION), B(!0), be(s), H(f);
                                    break;
                                case h.ERROR_CALLBACK_ACTION:
                                case h.SCREEN_LOADED_ACTION:
                                case h.SUCCESS_CALLBACK_ACTION:
                                case h.TAP_BUTTON:
                                case h.OTP_ENTERED:
                                case h.GOOGLE_SIGN_IN:
                                    var _ = t.flow,
                                        m = void 0 === _ ? u : _,
                                        p = t.method,
                                        b = void 0 === p ? re : p,
                                        E = t.pageOpenSource,
                                        O = void 0 === E ? m : E,
                                        g = I(t, ["flow", "method", "pageOpenSource"]);
                                    v(P(P({}, g), {}, {
                                        flow: m,
                                        method: b,
                                        action: e,
                                        pageOpenSource: O
                                    }))
                            }
                        },
                        we = function() {
                            ae(E.LOGIN_TYPE_EMAIL), f(h.LOGIN_TYPES.SIGNUP)
                        },
                        Me = function() {
                            ae(E.LOGIN_TYPE_PHONE), f(h.LOGIN_TYPES.LOGIN)
                        },
                        xe = Boolean(k && w && ke()),
                        je = (0, a.useCallback)((function() {
                            ae(E.LOGIN_TYPE_PHONE), D || ce === h.LOGIN_CASE_NEW_USER ? ue(!0) : (B(!1), o(), W(""), Q(""))
                        }), [D, ce]),
                        Re = function() {
                            if (!(0, c.default)(pe)) return pe;
                            if (Y || V && Fe()) return Ie.login_failed_title;
                            if (V) return Ie.signup_failed_title;
                            if (D) return Ie.otp_verification_title;
                            if (ce === h.LOGIN_CASE_OTM_MAPPING) {
                                var e = se.meta_data,
                                    t = (e = void 0 === e ? {} : e).link_account,
                                    n = (t = void 0 === t ? {} : t).title;
                                return void 0 === n ? "" : n
                            }
                            return ce === h.LOGIN_CASE_NEW_USER ? Ie.phone_login_new_user_title : u === h.LOGIN_TYPES.LOGIN ? Ie.login_title : Ie.signup_title
                        },
                        Ge = function(e, t, n) {
                            n === E.LOGIN_TYPE_PHONE ? te(e) : Z(e), H(t), B(!0)
                        },
                        De = function(e, t) {
                            B(!0), H(t), Z(e)
                        },
                        Ue = function() {
                            W(""), Q(""), o()
                        },
                        Be = function() {
                            W(""), B(!1), k && fe(0), Q("")
                        },
                        Fe = function() {
                            return ce === h.LOGIN_CASE_NEW_USER && re === E.LOGIN_TYPE_PHONE
                        },
                        ze = function(e) {
                            Pe(h.SUCCESS_CALLBACK_ACTION, {}), O(e), o({
                                success: !0
                            })
                        },
                        He = function(e) {
                            return function() {
                                return fe(e)
                            }
                        },
                        qe = function() {
                            return (0, i.default)(se, "hash", "")
                        },
                        Ye = ce !== h.LOGIN_CASE_NEW_USER && u === h.LOGIN_TYPES.LOGIN && re === E.LOGIN_TYPE_PHONE && !ke(),
                        We = {};
                    (!Ye || Y || V) && (We = {
                        padding: "0 2.4rem 2.4rem 2.4rem",
                        titleComponent: a.default.createElement(R, {
                            title: Re()
                        })
                    });
                    var Ke = re === E.LOGIN_TYPE_EMAIL && u === h.LOGIN_TYPES.LOGIN,
                        Ve = function() {
                            return ae(E.LOGIN_TYPE_PHONE)
                        };
                    Ke && (We = {
                        padding: "0 2.4rem 2.4rem 2.4rem",
                        titleComponent: a.default.createElement(G, {
                            title: Re(),
                            handleGoBack: Ve,
                            showBackButton: !D
                        })
                    });
                    var Qe = (0, a.useCallback)((function() {
                        Y || V ? Ue() : je()
                    }), [je, Y, V]);
                    return (0, a.useImperativeHandle)(t, (function() {
                        return {
                            loginModalClose: Qe
                        }
                    }), [Qe]), xe && (We = {
                        padding: "0",
                        headerWidth: "100%",
                        preventFocus: !0,
                        titleComponent: a.default.createElement(b.default, L({
                            showBackIcon: Ke && !D,
                            handleGoBack: Ve,
                            onCloseClick: Qe
                        }, (0, g.getHeaderTitles)({
                            locale: Ie,
                            showOTPScreen: D,
                            screenType: ce,
                            loginType: u,
                            loginInputType: re,
                            loginErrorMessage: Y,
                            signupErrorMessage: V,
                            defaultTitle: Re()
                        }))),
                        showCloseIcon: !1
                    }), k && (We = P(P({}, We), {}, {
                        autoHeight: !0
                    })), a.default.createElement(j.Wrapper, null, a.default.createElement(U, L({
                        visible: r,
                        onClose: Qe,
                        slideOnMobile: !0,
                        isCentered: !0,
                        enableScrollOnClose: T
                    }, We), a.default.createElement(j.Content, {
                        o2CheckoutFlow: xe,
                        showBackground: Ye
                    }, Y ? a.default.createElement(m.default, {
                        errorText: Y,
                        close: Ue,
                        goBack: Be,
                        locale: Ie
                    }) : V ? a.default.createElement(m.default, {
                        errorText: V,
                        close: Ue,
                        goBack: Be,
                        locale: Ie
                    }) : D ? a.default.createElement(_.default, {
                        o2CheckoutFlow: xe,
                        phoneNumberLoginDetails: ve,
                        countryCode: (0, i.default)(Ae, "selectedCountryCode.isdCode", ""),
                        headerText: z,
                        currentEmail: X,
                        currentPhone: ee,
                        closeModal: o,
                        setShowOTPScreen: B,
                        setLoginError: W,
                        showDialog: le,
                        setShowDialog: ue,
                        userDataCallback: ze,
                        type: u,
                        locale: Ie,
                        countryId: (0, i.default)(Ae, "selectedCountryCode.countryId"),
                        verificationType: re === E.LOGIN_TYPE_PHONE && ce === h.OTM_EMAIL_LINK_OTP_VERIFICATION ? h.OTM_EMAIL_LINK_OTP_VERIFICATION : re === E.LOGIN_TYPE_PHONE ? h.PHONE_LOGIN_OTP_VERFICATION : h.DEFAULT_OTP_VERIFICATION,
                        actionBasedCallback: Pe,
                        userHash: qe()
                    }) : ce === h.LOGIN_CASE_OTM_MAPPING ? a.default.createElement(p.default, {
                        handleLoginFlowScreen: He,
                        phoneVerifyResponse: se,
                        userDataCallback: ze,
                        actionBasedCallback: Pe,
                        locale: Ie
                    }) : ce !== h.LOGIN_CASE_NEW_USER && u === h.LOGIN_TYPES.LOGIN ? a.default.createElement(d.default, {
                        setPhoneNumberLoginDetails: ye,
                        showSmallShimmer: k,
                        o2CheckoutFlow: xe,
                        handleOnSignupClick: we,
                        sendLoginOTP: Ge,
                        setLoginError: W,
                        userDataCallback: ze,
                        locale: Ie,
                        enableOneTap: N,
                        enablePhoneLogin: ke(),
                        countryCodeData: Ae,
                        actionBasedCallback: Pe,
                        selectedLoginInputType: re,
                        visible: r,
                        onClose: je,
                        showShimmer: Oe,
                        links: C
                    }) : a.default.createElement(s.default, {
                        showNewUserCreationTerminationDialog: le,
                        updateUserCreationTerminationDialogeState: ue,
                        onModalClose: o,
                        countryCodeData: Ae,
                        phoneNumberLoginDetails: ve,
                        handleOnLoginClick: Me,
                        sendSignupOTP: De,
                        setSignupError: Q,
                        userDataCallback: ze,
                        links: C,
                        locale: Ie,
                        o2CheckoutFlow: k,
                        phoneSignUpFlow: Fe(),
                        userHash: qe(),
                        metaData: (0, i.default)(se, "meta_data", {}),
                        actionBasedCallback: Pe,
                        visible: r
                    }))))
                })),
                R = function(e) {
                    var t = e.title;
                    return a.default.createElement(D, null, t)
                },
                G = function(e) {
                    var t = e.title,
                        n = e.handleGoBack,
                        r = e.showBackButton;
                    return a.default.createElement(a.default.Fragment, null, r && a.default.createElement(O.GoBack, {
                        onClick: n
                    }), a.default.createElement(D, null, t))
                };
            R.propTypes = {
                title: o.default.string.isRequired
            };
            var D = l.default.h2(N());
            j.Content = l.default.section(S(), (function(e) {
                return e.showBackground ? 0 : "2.4rem"
            }), (function(e) {
                return e.o2CheckoutFlow ? "0 1.6rem 1.8rem" : 0
            })), j.propTypes = {
                o2CheckoutFlow: o.default.bool,
                isOpen: o.default.bool.isRequired,
                fnCloseRequest: o.default.func.isRequired,
                loginType: o.default.string.isRequired,
                setLoginType: o.default.func.isRequired,
                fnOnAuthenticate: o.default.func.isRequired,
                links: o.default.shape({
                    tos: o.default.string,
                    privacy: o.default.string,
                    content: o.default.string
                }).isRequired,
                enableScrollOnClose: o.default.bool,
                locale: o.default.objectOf(o.default.string),
                enableOneTap: o.default.bool,
                enablePhoneLogin: o.default.bool,
                genericActionCallback: o.default.func,
                isMobile: o.default.bool
            }, j.defaultProps = {
                isMobile: !1,
                o2CheckoutFlow: !1,
                enableScrollOnClose: !0,
                locale: {},
                enableOneTap: !1,
                enablePhoneLogin: !1,
                genericActionCallback: f.default
            };
            var U = (0, l.default)(u.default)(T());
            j.Wrapper = l.default.div(C());
            var B = j;
            t.default = B
        },
        VmJk: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = u(n("q1tI")),
                a = u(n("17x9")),
                o = n("O4kB"),
                l = n("QlFR");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = function(e) {
                var t = e.titleText,
                    n = e.subtitleText,
                    a = e.onCloseClick,
                    u = e.showBackIcon,
                    i = e.handleGoBack;
                return r.default.createElement(l.Container, {
                    noSubtitle: !n
                }, r.default.createElement(l.TitleContainer, null, u && r.default.createElement(o.GoBack, {
                    onClick: i
                }), r.default.createElement(l.Heading, {
                    noSubtitle: !n
                }, t), r.default.createElement(l.CloseButton, {
                    onClick: a,
                    size: 24
                })), r.default.createElement(l.Subheading, null, n))
            };
            i.propTypes = {
                titleText: a.default.string,
                subtitleText: a.default.string,
                onCloseClick: a.default.func.isRequired
            }, i.defaultProps = {
                titleText: "",
                subtitleText: ""
            };
            var c = i;
            t.default = c
        },
        mugf: (e, t, n) => {
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = ((r = n("VmJk")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = a
        },
        QlFR: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CloseButton = t.Subheading = t.Heading = t.TitleContainer = t.Container = void 0;
            var r = i(n("vOnD")),
                a = i(n("gAKm")),
                o = n("wcxm"),
                l = i(n("HMsx")),
                u = i(n("i0d3"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                var e = m([""]);
                return c = function() {
                    return e
                }, e
            }

            function f() {
                var e = m(["\n  font-size: 1.2rem;\n  line-height: 1.2rem;\n"]);
                return f = function() {
                    return e
                }, e
            }

            function d() {
                var e = m(["\n  font-size: 1.8rem;\n  line-height: 2.7rem;\n  font-weight: 500;\n  max-width: calc(100% - 48px);\n"]);
                return d = function() {
                    return e
                }, e
            }

            function s() {
                var e = m(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: ", ";\n  height: 2.7rem;\n"]);
                return s = function() {
                    return e
                }, e
            }

            function _() {
                var e = m(["\n  padding: ", ";\n  border-bottom: 0.5px solid ", ";\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: space-around;\n  position: relative;\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function m(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var p = r.default.div(_(), (function(e) {
                return b(e)
            }), l.default.z200);
            t.Container = p;
            var b = function(e) {
                    return e.noSubtitle ? "16px 12px" : "10px 12px 16px"
                },
                E = r.default.div(s(), (function(e) {
                    return g(e)
                }));
            t.TitleContainer = E;
            var O = (0, r.default)(a.default)(d());
            t.Heading = O;
            var g = function(e) {
                    return e.noSubtitle ? 0 : "0.5rem"
                },
                h = (0, r.default)(o.P)(f());
            t.Subheading = h;
            var v = (0, r.default)(u.default)(c());
            t.CloseButton = v
        },
        "63ok": (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = u(n("q1tI")),
                a = u(n("gEOw")),
                o = n("SEds"),
                l = n("4h3y");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = function(e) {
                var t = e.phone,
                    n = e.countryFlagUrl,
                    u = e.countryCode,
                    i = e.locale;
                return r.default.createElement(r.default.Fragment, null, r.default.createElement(l.Container, null, r.default.createElement(l.PhoneContainer, null, !!n && r.default.createElement(l.Flag, {
                    src: n,
                    height: "1.6rem",
                    width: "2.4rem",
                    fit: "contain"
                }), !!u && r.default.createElement(l.CountryCode, null, "+".concat(u)), !!t && r.default.createElement(l.PhoneNumberText, null, t)), r.default.createElement(a.default, {
                    color: o.green.z500,
                    size: 20
                })), r.default.createElement(l.VerifiedText, null, i.phone_number_verified_text))
            };
            t.default = i
        },
        "66Yr": (e, t, n) => {
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = ((r = n("63ok")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = a
        },
        "4h3y": (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VerifiedText = t.PhoneContainer = t.PhoneNumberText = t.CountryCode = t.Flag = t.Container = void 0;
            var r = i(n("vOnD")),
                a = n("SEds"),
                o = i(n("HMsx")),
                l = n("wcxm"),
                u = i(n("lFeK"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                var e = p(["\n  margin-bottom: 1rem;\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 2rem;\n  margin-top: 0.8rem;\n  font-weight: 400;\n"]);
                return c = function() {
                    return e
                }, e
            }

            function f() {
                var e = p(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n"]);
                return f = function() {
                    return e
                }, e
            }

            function d() {
                var e = p(["\n  font-size: 1.4rem;\n  line-height: 1.7rem;\n  color: ", ";\n  font-weight: 400;\n  margin-right: 0.5rem;\n"]);
                return d = function() {
                    return e
                }, e
            }

            function s() {
                var e = p(["\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  color: ", ";\n  font-weight: 500;\n  margin-right: 0.5rem;\n"]);
                return s = function() {
                    return e
                }, e
            }

            function _() {
                var e = p(["\n  margin-right: 1rem;\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function m() {
                var e = p(["\n  border: 1px solid ", ";\n  border-radius: 0.6rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.8rem;\n  box-sizing: border-box;\n  padding: 0 1rem;\n"]);
                return m = function() {
                    return e
                }, e
            }

            function p(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var b = r.default.div(m(), o.default.z300);
            t.Container = b;
            var E = (0, r.default)(u.default)(_());
            t.Flag = E;
            var O = (0, r.default)(l.P)(s(), a.black);
            t.CountryCode = O;
            var g = (0, r.default)(l.P)(d(), a.black);
            t.PhoneNumberText = g;
            var h = r.default.div(f());
            t.PhoneContainer = h;
            var v = (0, r.default)(l.P)(c(), a.green.z500);
            t.VerifiedText = v
        },
        c9uF: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getHeaderTitles = void 0;
            var r = n("AgGD"),
                a = n("zzCw");
            t.getHeaderTitles = function(e) {
                var t = e.locale,
                    n = e.showOTPScreen,
                    o = e.screenType,
                    l = e.loginType,
                    u = e.loginInputType,
                    i = e.loginErrorMessage,
                    c = e.signupErrorMessage,
                    f = e.defaultTitle;
                return i || c || [r.LOGIN_CASE_OTM_MAPPING].includes(o) || u === a.LOGIN_TYPE_EMAIL ? {
                    titleText: f || ""
                } : n ? {
                    titleText: t.checkout_login_flow_otp_screen
                } : [r.LOGIN_CASE_NEW_USER].includes(o) ? {
                    titleText: f
                } : l === r.LOGIN_TYPES.LOGIN ? {
                    titleText: t.checkout_login_flow_login_title || "",
                    subtitleText: t.checkout_login_flow_login_subtitle || ""
                } : {
                    titleText: f
                }
            }
        },
        QhZA: (e, t, n) => {
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = ((r = n("dsI2")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = a
        },
        z7es: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = u(n("q1tI")),
                a = u(n("17x9")),
                o = u(n("kdDk")),
                l = n("+S4G");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = function(e) {
                var t = e.errorText,
                    n = e.goBack,
                    a = e.close,
                    u = e.locale;
                return r.default.createElement(r.default.Fragment, null, r.default.createElement(l.OTPexhaustedText, null, t), r.default.createElement(o.default, {
                    appearance: "solid",
                    btnColor: "red",
                    onClick: function() {
                        return n()
                    }
                }, u.error_messaage_box_try_other_methods_text), r.default.createElement(l.Gap10, null), r.default.createElement(o.default, {
                    appearance: "link",
                    btnColor: "red",
                    onClick: function() {
                        return a()
                    }
                }, u.error_messaage_box_skip_for_now_text))
            };
            i.propTypes = {
                errorText: a.default.string.isRequired,
                goBack: a.default.func.isRequired,
                close: a.default.func.isRequired,
                locale: a.default.objectOf(a.default.string).isRequired
            };
            var c = i;
            t.default = c
        },
        bb89: (e, t, n) => {
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
            var a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = h();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = g(n("17x9")),
                l = g(n("lXQd")),
                u = g(n("j399")),
                i = g(n("STzO")),
                c = g(n("t1mY")),
                f = g(n("NvCb")),
                d = g(n("ieZA")),
                s = n("SEds"),
                _ = g(n("BUyX")),
                m = g(n("qZ2b")),
                p = n("AgGD"),
                b = n("NsBr"),
                E = n("zzCw"),
                O = n("O4kB");

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return h = function() {
                    return e
                }, e
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, u = e[Symbol.iterator](); !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var C = function(e) {
                var t = e.handleLoginFlowScreen,
                    n = e.phoneVerifyResponse,
                    r = void 0 === n ? {} : n,
                    o = e.userDataCallback,
                    g = e.actionBasedCallback,
                    h = v((0, a.useState)(!1), 2),
                    y = h[0],
                    C = h[1],
                    T = v((0, a.useState)(""), 2),
                    S = T[0],
                    N = T[1],
                    A = v((0, a.useState)(""), 2),
                    L = A[0],
                    I = A[1],
                    k = v((0, a.useState)(!1), 2),
                    P = k[0],
                    w = k[1],
                    M = (0, l.default)(r, "login_methods", []),
                    x = (0, l.default)(r, "hash", ""),
                    j = function(e) {
                        return y && e === S
                    };
                (0, a.useEffect)((function() {
                    g(p.SCREEN_LOADED_ACTION, {
                        screen: p.MULTI_ACCOUNT_SCREEN
                    })
                }), []);
                var R = function(e, t) {
                        C(!1);
                        var n = e.success,
                            r = void 0 !== n && n,
                            a = e.message,
                            l = void 0 === a ? "" : a,
                            u = e.user_data;
                        r ? o(void 0 === u ? {} : u) : I(l), g(p.TAP_BUTTON, {
                            message: l,
                            tapButtonName: "Link account with ".concat(t),
                            type: "ACCOUNT_LINK",
                            success: r,
                            screen: p.MULTI_ACCOUNT_SCREEN,
                            method: t
                        })
                    },
                    G = function(e) {
                        C(!1), I(p.DEFAULT_ERROR_MESSAGE.message || ""), g(p.TAP_BUTTON, {
                            message: p.DEFAULT_ERROR_MESSAGE.message || "",
                            tapButtonName: "Link account with ".concat(p.GOOGLE_LOGIN_METHOD),
                            type: "ACCOUNT_LINK",
                            success: !1,
                            screen: p.MULTI_ACCOUNT_SCREEN,
                            method: p.GOOGLE_LOGIN_METHOD
                        })
                    },
                    D = function(e) {
                        (0, E.doMobileLinkAccount)({
                            id_token: e,
                            hash: x
                        }).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            R(e, p.GOOGLE_LOGIN_METHOD)
                        })).catch((function() {
                            R(p.DEFAULT_ERROR_MESSAGE, p.GOOGLE_LOGIN_METHOD)
                        }))
                    },
                    U = function(e) {
                        var t = (0, l.default)(e, "authResponse.accessToken", ""),
                            n = (0, l.default)(e, "status", "");
                        n === b.FB_STATUS_CONNECTED ? (0, E.doMobileLinkAccount)({
                            fb_token: t,
                            hash: x
                        }).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            R(e, p.FACEBOOK_LOGIN_METHOD)
                        })).catch((function() {
                            R(p.DEFAULT_ERROR_MESSAGE, p.FACEBOOK_LOGIN_METHOD)
                        })) : n === b.FB_STATUS_NOT_AUTHORIZED ? R({
                            message: "Facebook Authorization failed"
                        }, p.FACEBOOK_LOGIN_METHOD) : R(p.DEFAULT_ERROR_MESSAGE, p.FACEBOOK_LOGIN_METHOD)
                    },
                    B = function(e) {
                        C(!1);
                        var t = e.success,
                            n = void 0 !== t && t,
                            r = e.message,
                            a = void 0 === r ? {} : r;
                        n ? g(p.OTM_EMAIL_VERIFICATION_ACTION, {
                            title: "Email Verification",
                            message: (0, l.default)(e, "meta_data.otp_message", "")
                        }) : I(a), g(p.TAP_BUTTON, {
                            message: a,
                            tapButtonName: "Link account with email",
                            type: "ACCOUNT_LINK",
                            success: n,
                            screen: p.MULTI_ACCOUNT_SCREEN,
                            method: p.EMAIL_LOGIN_METHOD
                        })
                    },
                    F = function(e) {
                        return function() {
                            switch (C(!0), I(""), N(e), e) {
                                case p.GOOGLE_LOGIN_METHOD:
                                    (0, b.handleGoogleLogin)(D, G);
                                    break;
                                case p.FACEBOOK_LOGIN_METHOD:
                                    (0, b.handleFacebookLogin)(U);
                                    break;
                                case p.EMAIL_LOGIN_METHOD:
                                    (0, E.doEmailLinkAccount)({
                                        hash: x
                                    }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        B(e)
                                    })).catch((function() {
                                        B(p.DEFAULT_ERROR_MESSAGE)
                                    }))
                            }
                        }
                    };
                return a.default.createElement(a.default.Fragment, null, P && a.default.createElement(m.default, {
                    visible: P,
                    onAccept: t(p.LOGIN_CASE_NEW_USER),
                    onReject: function() {
                        return w(!1)
                    },
                    acceptLabel: (0, l.default)(r, "meta_data.create_account.positive_action.text", ""),
                    rejectLabel: (0, l.default)(r, "meta_data.create_account.negative_action.text", ""),
                    title: (0, l.default)(r, "meta_data.create_account.title", ""),
                    message: (0, l.default)(r, "meta_data.create_account.message", "")
                }), a.default.createElement(O.StyledP, {
                    fontSize: "1.4rem",
                    fontWeight: "400"
                }, (0, l.default)(r, "meta_data.link_account.message", "")), a.default.createElement(O.LinkedAccounts, null, M.map((function(e) {
                    return a.default.createElement(O.FlexWrapper, {
                        key: e,
                        onClick: y ? u.default : F(e)
                    }, a.default.createElement(O.WidthDiv, {
                        width: "12%"
                    }, function(e) {
                        switch (e) {
                            case p.GOOGLE_LOGIN_METHOD:
                                return j(e) ? a.default.createElement(d.default, {
                                    size: "medium",
                                    color: s.red.z500
                                }) : a.default.createElement(c.default, {
                                    color: s.red.z500,
                                    size: 42
                                });
                            case p.FACEBOOK_LOGIN_METHOD:
                                return j(e) ? a.default.createElement(d.default, {
                                    size: "medium",
                                    color: s.blue.z600
                                }) : a.default.createElement(i.default, {
                                    color: s.blue.z600,
                                    size: 42
                                });
                            case p.EMAIL_LOGIN_METHOD:
                                return j(e) ? a.default.createElement(d.default, {
                                    size: "large",
                                    color: s.red.z500
                                }) : a.default.createElement(f.default, {
                                    size: 42
                                });
                            default:
                                return a.default.createElement(a.default.Fragment, null)
                        }
                    }(e)), a.default.createElement(O.TextDiv, null, a.default.createElement(O.StyledP, {
                        fontSize: "1.8rem",
                        fontWeight: "400"
                    }, (0, l.default)(r, "name", "")), a.default.createElement(O.StyledP, {
                        fontSize: "1.4rem",
                        fontWeight: "300"
                    }, (0, l.default)(r, "email", "")), e === S && a.default.createElement(O.StyledP, {
                        fontSize: "1.2rem",
                        fontWeight: "300",
                        color: s.red.z500
                    }, L)))
                }))), a.default.createElement(_.default, {
                    margin: "0 0 1.8rem 0"
                }), a.default.createElement(O.StyledP, {
                    fontSize: "1.8rem"
                }, "Don't want to link? ", a.default.createElement(O.StyledSpan, {
                    onClick: function() {
                        return w(!0)
                    }
                }, "Create a new Account")))
            };
            C.propTypes = {
                handleLoginFlowScreen: o.default.func.isRequired,
                phoneVerifyResponse: o.default.objectOf(o.default.any).isRequired,
                userDataCallback: o.default.func.isRequired
            }, C.defaultProps = {};
            var T = C;
            t.default = T
        },
        GJhT: (e, t, n) => {
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
            var a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = S();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = T(n("vOnD")),
                l = T(n("17x9")),
                u = T(n("aowA")),
                i = T(n("U8Rt")),
                c = T(n("kdDk")),
                f = T(n("lXQd")),
                d = T(n("j399")),
                s = T(n("i0d3")),
                _ = n("+S4G"),
                m = T(n("y8c3")),
                p = n("SEds"),
                b = T(n("qZ2b")),
                E = T(n("BUyX")),
                O = n("zzCw"),
                g = n("AgGD"),
                h = n("O4kB"),
                v = T(n("HQku")),
                y = T(n("66Yr")),
                C = T(n("HMsx"));

            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return S = function() {
                    return e
                }, e
            }

            function N() {
                var e = P(["\n  text-decoration: none;\n  font-weight: 500;\n  color: ", ";\n"]);
                return N = function() {
                    return e
                }, e
            }

            function A() {
                var e = P(["\n  font-size: 1.2rem;\n  color: #696969;\n"]);
                return A = function() {
                    return e
                }, e
            }

            function L() {
                var e = P(["\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 2rem;\n"]);
                return L = function() {
                    return e
                }, e
            }

            function I() {
                var e = P(["\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: white;\n  height: 40px;\n  width: 30px;\n  border-radius: 0 0.6rem 0.6rem 0;\n  opacity: ", ";\n  transition: opacity 0.2s ease;\n"]);
                return I = function() {
                    return e
                }, e
            }

            function k() {
                var e = P(["\n  position: relative;\n"]);
                return k = function() {
                    return e
                }, e
            }

            function P(e, t) {
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
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, u = e[Symbol.iterator](); !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var j = function(e) {
                    var t = e.handleOnLoginClick,
                        n = e.sendSignupOTP,
                        r = e.userDataCallback,
                        o = e.setSignupError,
                        l = e.links,
                        d = void 0 === l ? {} : l,
                        s = e.locale,
                        p = e.phoneSignUpFlow,
                        T = e.o2CheckoutFlow,
                        S = e.userHash,
                        N = e.metaData,
                        A = e.actionBasedCallback,
                        L = e.visible,
                        I = e.countryCodeData,
                        k = e.phoneNumberLoginDetails,
                        P = e.showNewUserCreationTerminationDialog,
                        x = e.updateUserCreationTerminationDialogeState,
                        j = e.onModalClose,
                        F = M((0, a.useState)(!1), 2),
                        z = F[0],
                        H = F[1],
                        q = M((0, a.useState)(""), 2),
                        Y = q[0],
                        W = q[1],
                        K = M((0, a.useState)(""), 2),
                        V = K[0],
                        Q = K[1],
                        J = M((0, a.useState)(""), 2),
                        X = J[0],
                        Z = J[1],
                        $ = M((0, a.useState)(""), 2),
                        ee = $[0],
                        te = $[1],
                        ne = M((0, a.useState)(!1), 2),
                        re = ne[0],
                        ae = ne[1],
                        oe = M((0, a.useState)(!1), 2),
                        le = oe[0],
                        ue = oe[1],
                        ie = M((0, a.useState)(!1), 2),
                        ce = ie[0],
                        fe = ie[1],
                        de = M((0, a.useState)(!1), 2),
                        se = de[0],
                        _e = de[1],
                        me = M((0, a.useState)({}), 2),
                        pe = me[0],
                        be = me[1],
                        Ee = function(e) {
                            W(e), Z("")
                        };
                    (0, a.useEffect)((function() {
                        L && (p || A(g.CHANGE_LOGIN_INPUT_TYPE_ACTION, {
                            type: O.LOGIN_TYPE_EMAIL
                        }), A(g.SCREEN_LOADED_ACTION, {
                            screen: p ? g.PHONE_CREATE_ACCOUNT_SCREEN : g.CREATE_ACCOUNT_SCREEN,
                            flow: "signup"
                        }))
                    }), [L]);
                    var Oe = function(e) {
                            var t = e.success,
                                n = void 0 !== t && t,
                                a = e.user_data,
                                l = void 0 === a ? {} : a,
                                u = (0, f.default)(e, "meta_data.email_error") ? (0, f.default)(e, "meta_data.email_error.message") : (0, f.default)(e, "message", "");
                            A(g.TAP_BUTTON, {
                                message: u,
                                flow: "signup",
                                type: g.PHONE_CREATE_ACCOUNT,
                                screen: g.PHONE_CREATE_ACCOUNT_SCREEN,
                                success: n,
                                tapButtonName: s.create_account_button_text
                            }), n ? r(l) : (0, f.default)(e, "meta_data.email_error") ? (_e(!0), be((0, f.default)(e, "meta_data", {}))) : o(u)
                        },
                        ge = function(e) {
                            var t = e.success,
                                r = void 0 !== t && t,
                                a = e.message,
                                l = void 0 === a ? "" : a;
                            A(g.TAP_BUTTON, {
                                message: l,
                                success: r,
                                screen: g.CREATE_ACCOUNT_SCREEN,
                                type: g.CREATE_ACCOUNT,
                                tapButtonName: s.create_account_button_text
                            }), r ? n(V, l) : o(l)
                        },
                        he = function() {
                            var e;
                            p ? function() {
                                var e = !1;
                                if ((0, _.validateName)(Y) || (e = !0, Z("Please enter a valid name")), (0, _.validateEmail)(V) || e || le || T || (fe(!0), e = !0), !e) {
                                    ae(!0);
                                    var t = le || T ? "" : V;
                                    (0, O.doMobileUserCreate)({
                                        email: t,
                                        name: Y,
                                        hash: S
                                    }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        ae(!1), Oe(e)
                                    })).catch((function(e) {
                                        ae(!1), Oe(g.DEFAULT_ERROR_MESSAGE)
                                    }))
                                }
                            }() : (e = !1, (0, _.validateName)(Y) || (e = !0, Z("Please enter a valid name")), (0, _.validateEmail)(V) || (e = !0, te("Invalid Email id")), e || (ae(!0), (0, O.doSignup)({
                                fullname: Y,
                                email_id: V
                            }).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                ae(!1), ge(e)
                            })).catch((function(e) {
                                ae(!1), ge(g.DEFAULT_ERROR_MESSAGE)
                            }))))
                        };
                    (0, a.useEffect)((function() {
                        le && he()
                    }), [le]);
                    var ve = function() {
                            fe(!1), _e(!1)
                        },
                        ye = function() {
                            _e(!1), fe(!1), ue(!0)
                        },
                        Ce = P && T && p,
                        Te = d.tos,
                        Se = void 0 === Te ? "" : Te,
                        Ne = d.privacy,
                        Ae = void 0 === Ne ? "" : Ne,
                        Le = d.content,
                        Ie = void 0 === Le ? "" : Le;
                    return a.default.createElement(a.default.Fragment, null, p && !T && a.default.createElement(h.StyledPTag, {
                        fontSize: "1.4rem"
                    }, s.phone_login_new_user_subtitle), p && ce && !se && a.default.createElement(b.default, {
                        visible: ce,
                        onAccept: ve,
                        onReject: ye,
                        acceptLabel: (0, f.default)(N, "skip_email.positive_action.text", ""),
                        rejectLabel: (0, f.default)(N, "skip_email.negative_action.text", ""),
                        title: (0, f.default)(N, "skip_email.title", ""),
                        message: (0, f.default)(N, "skip_email.message", "")
                    }), se && a.default.createElement(b.default, {
                        visible: se,
                        onAccept: ve,
                        onReject: ye,
                        acceptLabel: (0, f.default)(pe, "email_error.positive_action.text", ""),
                        rejectLabel: (0, f.default)(pe, "email_error.negative_action.text", ""),
                        title: (0, f.default)(pe, "email_error.title", ""),
                        message: (0, f.default)(pe, "email_error.message", "")
                    }), Ce && a.default.createElement(b.default, {
                        visible: P,
                        onAccept: function() {
                            x(!1), j(), A(ERROR_CALLBACK_ACTION, {
                                message: "Manually closed new user details screen",
                                screen: g.LOGIN_CASE_NEW_USER
                            })
                        },
                        onReject: function() {
                            x(!1)
                        },
                        acceptLabel: s.yes_button_text,
                        rejectLabel: s.no_button_text,
                        message: s.terminate_verification_text
                    }), a.default.createElement(R, null, a.default.createElement(u.default, {
                        value: Y,
                        label: s.signup_full_name_label,
                        innerWidth: "100%",
                        borderColor: "#009999",
                        onBlur: function() {
                            (0, _.validateName)(Y) || Z("Please enter a valid name")
                        },
                        onChange: Ee,
                        errorMsg: X
                    }), a.default.createElement(G, {
                        size: 20,
                        color: C.default.z400,
                        isVisible: Boolean(Y && Y.length),
                        onClick: function() {
                            Ee("")
                        }
                    })), a.default.createElement(_.Gap10, null), T && p ? a.default.createElement(y.default, {
                        locale: s,
                        countryCode: I.selectedCountryCode.isdCode || "",
                        countryFlagUrl: I.selectedCountryCode.flagImgUrl || "",
                        phone: k.phone || ""
                    }) : a.default.createElement(u.default, {
                        value: V,
                        label: p ? s.signup_email_label_optional : s.signup_email_label,
                        innerWidth: "100%",
                        borderColor: "#009999",
                        onBlur: function() {
                            p && "" === V || ((0, _.validateEmail)(V) || te("Invalid Email id"))
                        },
                        onChange: function(e) {
                            Q(e), te("")
                        },
                        errorMsg: ee
                    }), a.default.createElement(_.Gap10, null), Boolean(T) ? a.default.createElement(v.default, {
                        locale: s,
                        links: d
                    }) : a.default.createElement(D, null, a.default.createElement(i.default, {
                        checked: z,
                        solid: !1,
                        onChange: function() {
                            return H(!z)
                        },
                        color: "#ED5A6B"
                    }), a.default.createElement(U, null, (0, _.formatLangKey)(s.agree_to_zomato_policy_text, a.default.createElement(B, {
                        href: Se
                    }, s.terms_of_service_text), a.default.createElement(B, {
                        href: Ae
                    }, s.privacy_policy_text), a.default.createElement(B, {
                        href: Ie
                    }, s.content_policies)))), a.default.createElement(c.default, {
                        btnColor: "red",
                        disabled: p && T ? !(0, _.validateName)(Y) : p ? !z || !(0, _.validateName)(Y) : T ? !(0, _.validateName)(Y) && !(0, _.validateEmail)(V) : !z || !(0, _.validateName)(Y) || !(0, _.validateEmail)(V),
                        onClick: he,
                        loading: re
                    }, p && Boolean(T) ? s.checkout_flow_new_user_phone_login_button_caption : s.create_account_button_text), !p && a.default.createElement(a.default.Fragment, null, a.default.createElement(E.default, {
                        margin: "2.4rem 0 2.4rem 0"
                    }, s.or_text), a.default.createElement(m.default, {
                        loginSuccess: r,
                        loginFailure: o,
                        locale: s,
                        actionBasedCallback: A,
                        screen: g.CREATE_ACCOUNT_SCREEN
                    }), a.default.createElement(E.default, {
                        margin: T ? "2.4rem 0 1rem" : "0 0 2.4rem 0"
                    }), a.default.createElement(_.StyledP, w({}, T && {
                        lineHeight: 1
                    }, {
                        fontSize: T ? "1.6rem" : "1.8rem"
                    }), (0, _.formatLangKey)(s.already_have_an_account_text, a.default.createElement(_.Span, {
                        onClick: t
                    }, s.login_title)))))
                },
                R = o.default.div(k()),
                G = (0, o.default)(s.default)(I(), (function(e) {
                    return e.isVisible ? 1 : 0
                })),
                D = o.default.div(L()),
                U = o.default.span(A()),
                B = o.default.a(N(), p.red.z500);
            j.propTypes = {
                handleOnLoginClick: l.default.func.isRequired,
                sendSignupOTP: l.default.func.isRequired,
                setSignupError: l.default.func.isRequired,
                userDataCallback: l.default.func.isRequired,
                links: l.default.shape({
                    tos: l.default.string,
                    privacy: l.default.string,
                    content: l.default.string
                }).isRequired,
                locale: l.default.objectOf(l.default.string),
                phoneSignUpFlow: l.default.bool,
                userHash: l.default.string,
                metaData: l.default.objectOf(l.default.any),
                actionBasedCallback: l.default.func,
                visible: l.default.bool,
                countryCodeData: l.default.objectOf(l.default.any),
                phoneNumberLoginDetails: l.default.objectOf(l.default.any),
                showNewUserCreationTerminationDialog: l.default.bool,
                updateUserCreationTerminationDialogeState: l.default.func.isRequired,
                onModalClose: l.default.func.isRequired
            }, j.defaultProps = {
                showNewUserCreationTerminationDialog: !1,
                phoneSignUpFlow: !1,
                userHash: "",
                metaData: {},
                actionBasedCallback: d.default,
                visible: !1
            };
            var F = j;
            t.default = F
        }
    }
]);