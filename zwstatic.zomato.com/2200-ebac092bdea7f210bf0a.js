"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2200], {
        xtGn: (e, n, t) => {
            t.d(n, {
                A: () => x
            });
            var i, a, r, l, o = t("+9dH"),
                d = t("RlfA"),
                u = t("q1tI"),
                s = t("17x9"),
                c = t.n(s),
                _ = t("vOnD"),
                m = t("j399"),
                p = t("lXQd"),
                f = t("+cBz"),
                A = t("aowA"),
                E = t("kdDk"),
                g = t("SEds"),
                T = t("YFsC"),
                P = _.default.div(i || (i = (0, d.A)(["\n  display: flex;\n  align-items: start;\n  margin-bottom: 1rem;\n\n  @media (max-width: 768px) {\n    width: 300px;\n  }\n\n  @media (max-width: 480px) {\n    justify-content: center;\n  }\n"]))),
                h = (0, _.default)(E.default)(a || (a = (0, d.A)(["\n  margin-left: 0.8rem;\n  display: block;\n  & > span {\n    height: 48px;\n  }\n\n  @media (max-width: 768px) {\n    display: none !important;\n  }\n\n  @media (max-width: 480px) {\n    display: none !important;\n  }\n"]))),
                C = (0, _.default)(E.default)(r || (r = (0, d.A)(["\n  display: none;\n  margin-left: 0.8rem;\n  & > span {\n    height: 48px;\n  }\n\n  @media (max-width: 768px) {\n    display: block;\n  }\n"]))),
                y = (0, _.default)(f.default)(l || (l = (0, d.A)(["\n  input {\n    min-width: 0;\n  }\n"]))),
                O = function(e) {
                    var n = e.type,
                        t = void 0 === n ? T.QP : n,
                        i = e.value,
                        a = void 0 === i ? "" : i,
                        r = e.onChange,
                        l = void 0 === r ? m.default : r,
                        d = e.errorMsg,
                        s = void 0 === d ? T.tt : d,
                        c = e.onBlur,
                        _ = void 0 === c ? m.default : c,
                        f = e.onSubmit,
                        E = void 0 === f ? m.default : f,
                        O = e.isSubmitting,
                        x = void 0 !== O && O,
                        I = e.onCountryCodeChange,
                        S = void 0 === I ? m.default : I,
                        L = e.localizedButtonCaptions,
                        v = e.localizedEmailLabel,
                        w = e.onFocus,
                        N = {
                            onClick: E,
                            loading: x,
                            disabled: s !== T.tt
                        };
                    return u.createElement(P, null, "email" === t ? u.createElement(A.default, {
                        fullWidth: !0,
                        innerWidth: "100%",
                        label: v,
                        borderColor: g.teal.z500,
                        value: a,
                        onChange: l,
                        onBlur: _,
                        errorMsg: s,
                        disabled: x,
                        onFocus: w
                    }) : u.createElement("div", null, u.createElement(y, {
                        onBlur: _,
                        errorText: s,
                        value: a,
                        onChange: l,
                        disabled: x,
                        fnCountryChange: S
                    })), u.createElement(h, (0, o.A)({}, N, {
                        btnColor: "red"
                    }), (0, p.default)(L, "shareAppLink", "")), u.createElement(C, (0, o.A)({}, N, {
                        btnColor: "red",
                        size: "small"
                    }), (0, p.default)(L, "share", "")))
                };
            O.propTypes = {
                type: c().string.isRequired,
                value: c().string.isRequired,
                errorMsg: c().string.isRequired,
                isSubmitting: c().bool.isRequired,
                onChange: c().func.isRequired,
                onBlur: c().func.isRequired,
                onSubmit: c().func.isRequired,
                onCountryCodeChange: c().func.isRequired,
                localizedButtonCaptions: c().objectOf(c().string).isRequired,
                localizedEmailLabel: c().string.isRequired,
                onFocus: c().func
            }, O.defaultProps = {
                onFocus: m.default
            };
            const x = O
        },
        HVcu: (e, n, t) => {
            t.d(n, {
                A: () => s,
                C: () => d
            });
            var i = t("77l8"),
                a = t("lXQd"),
                r = t("j399"),
                l = t("f773"),
                o = t("YFsC"),
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.QP;
                    return {
                        inputValue: "",
                        internationalCode: "+91",
                        valid: !1,
                        errorMessage: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.xc)[e],
                        fieldTouched: !1,
                        inputType: e,
                        isSubmitting: !1,
                        isSubmitFailed: !1,
                        isSubmitSuccess: !1,
                        toastState: {
                            text: "",
                            type: "success",
                            show: !1
                        }
                    }
                },
                u = function(e) {
                    switch (e) {
                        case o.QP:
                            return l.FL;
                        case o.YP:
                            return l.Vj;
                        default:
                            return r.default
                    }
                };
            const s = function(e, n) {
                var t = n.type,
                    r = n.value,
                    l = n.inputType,
                    d = n.apiErrorMessage,
                    s = void 0 === d ? "" : d,
                    c = n.errorMessages;
                switch (t) {
                    case "CHANGE_VALUE":
                        return (0, i.A)((0, i.A)({}, e), {}, {
                            inputValue: r,
                            valid: u(e.inputType)(r)
                        });
                    case "CHANGE_TYPE":
                        return (0, i.A)((0, i.A)({}, e), {}, {
                            fieldTouched: !1,
                            inputValue: "",
                            inputType: l,
                            errorMessage: (0, a.default)(c, l, c.default),
                            valid: !1
                        });
                    case "BLUR":
                    case "FORM_SUBMIT_FAILED":
                        return (0, i.A)((0, i.A)({}, e), {}, {
                            fieldTouched: !0
                        });
                    case "SUBMIT_INITIATE":
                        return (0, i.A)((0, i.A)({}, e), {}, {
                            isSubmitting: !0
                        });
                    case "SUBMIT_SUCCESS":
                        return (0, i.A)((0, i.A)({}, e), {}, {
                            isSubmitting: !1,
                            inputValue: "",
                            valid: !1,
                            fieldTouched: !1,
                            toastState: {
                                text: o.uB.success[e.inputType],
                                type: "success",
                                show: !0
                            }
                        });
                    case "SUBMIT_FAILED":
                        return (0, i.A)((0, i.A)({}, e), {}, {
                            isSubmitting: !1,
                            inputValue: "",
                            valid: !1,
                            fieldTouched: !1,
                            toastState: {
                                text: s || o.uB.failed[e.inputType],
                                type: "warning",
                                show: !0
                            }
                        });
                    case "CLOSE_TOAST":
                        return (0, i.A)((0, i.A)({}, e), {}, {
                            toastState: (0, i.A)((0, i.A)({}, e.toastState), {}, {
                                show: !1
                            })
                        });
                    case "CHANGE_INT_PHONE_CODE":
                        return (0, i.A)((0, i.A)({}, e), {}, {
                            internationalCode: r
                        });
                    default:
                        return e
                }
            }
        },
        GMxd: (e, n, t) => {
            t.d(n, {
                A: () => I
            });
            var i = t("+9dH"),
                a = t("/0+J"),
                r = t("Vadf"),
                l = t("Kq5O"),
                o = t.n(l),
                d = t("q1tI"),
                u = t("17x9"),
                s = t.n(u),
                c = t("lXQd"),
                _ = t("9quZ"),
                m = t("VcZT"),
                p = t("SEds"),
                f = t("P62M"),
                A = t("HVcu"),
                E = t("sLkX"),
                g = t("YFsC"),
                T = t("Wc2h"),
                P = t("AdJq"),
                h = t("xtGn"),
                C = t("2VVk"),
                y = t("gZoF"),
                O = t("F6eP"),
                x = function(e) {
                    var n = e.title,
                        t = e.action,
                        l = e.imgUrl,
                        u = e.imgProps,
                        s = e.appStoreUrl,
                        x = e.playStoreUrl,
                        I = e.radioOptions,
                        S = e.Component,
                        L = e.offersData,
                        v = e.subtitle,
                        w = e.united_uuid,
                        N = e.signature,
                        R = e.selectedInputType,
                        b = e.isUnited,
                        D = e.className,
                        U = e.locale,
                        G = e.deeplink,
                        k = e.trackingData,
                        B = {
                            email: (0, c.default)(U, "GET_Z_APP_EMAIL_ERROR_TEXT", g.xc[g.QP]),
                            mobile: (0, c.default)(U, "GET_Z_APP_PHONE_ERROR_TEXT", g.xc[g.YP]),
                            default: g.xc.default
                        },
                        M = (0, d.useReducer)(A.A, (0, A.C)(R, B)),
                        z = (0, r.A)(M, 2),
                        H = z[0],
                        Z = z[1],
                        V = H.inputValue,
                        F = H.inputType,
                        X = H.valid,
                        j = H.errorMessage,
                        K = H.fieldTouched,
                        W = H.isSubmitting,
                        q = H.toastState,
                        Y = k.ui_source,
                        Q = (0, c.default)(U, "GET_Z_APP_EMAIL_RADIO_LABEL", g.RR),
                        $ = I || [{
                            label: Q,
                            value: g.QP
                        }, {
                            label: (0, c.default)(U, "GET_Z_APP_PHONE_RADIO_LABEL", g.xL),
                            value: g.YP
                        }],
                        J = {
                            shareAppLink: (0, c.default)(U, "GET_Z_APP_SHARE_APP_LINK_CAPTION", g.CE),
                            share: (0, c.default)(U, "GET_Z_APP_SHARE_CAPTION", g.P5)
                        },
                        ee = (0, d.useRef)();
                    return (0, d.useLayoutEffect)((function() {
                        "undefined" != typeof window && window.location.href.includes("mobile") && ee.current.click()
                    }), []), d.createElement(d.Fragment, null, "undefined" != typeof window && window.location.href.includes("mobile") && d.createElement("a", {
                        href: g.ud,
                        ref: ee
                    }), d.createElement(C.mc, {
                        isUnited: b,
                        className: D
                    }, d.createElement(m.default, (0, i.A)({
                        align: "top",
                        onClose: function() {
                            return Z({
                                type: "CLOSE_TOAST"
                            })
                        }
                    }, q)), d.createElement(C.wn, null, d.createElement(C.VI, {
                        key: "get-app-link-form-image",
                        colD: 6,
                        colT: 6,
                        colM: 12
                    }, d.createElement(C.lo, (0, i.A)({
                        src: (0, f.I2)(l),
                        height: "45rem",
                        alt: g.SB,
                        fit: "contain"
                    }, u, {
                        doPreload: !0
                    }))), d.createElement(C.Wo, {
                        key: "get-app-link-form-content",
                        colD: 6,
                        colT: 6,
                        colM: 12
                    }, d.createElement(C.w, null, n || (0, c.default)(U, "GET_Z_APP_HEADING_TEXT", g._L)), d.createElement(C.VN, null, v || (0, c.default)(U, "GET_Z_APP_SUB_TEXT", g.W$)), S && d.createElement(S, {
                        offersData: L
                    }), d.createElement(C.a$, null, d.createElement(C.gb, {
                        onChange: function(e) {
                            O.dV.recordClick({
                                ui_source: Y,
                                component: g.eW.COMPONENTS.INPUT_RADIO_BUTTON,
                                meta_data: {
                                    selection: e
                                }
                            }), Z({
                                type: "CHANGE_TYPE",
                                inputType: e,
                                errorMessages: B
                            }), (0, y.GY)([e, B])
                        },
                        options: $,
                        name: "radio",
                        selected: F,
                        horizontal: !0,
                        selectedColor: p.red.z500
                    })), d.createElement(h.A, {
                        type: F,
                        value: V,
                        onChange: function(e) {
                            Z({
                                type: "CHANGE_VALUE",
                                value: e
                            })
                        },
                        onBlur: function() {
                            return Z({
                                type: "BLUR"
                            })
                        },
                        errorMsg: K && !X ? j : g.tt,
                        onSubmit: function(e) {
                            ((0, T.c5)({
                                eventCategory: g.rC.APP_LINK,
                                eventAction: T.aw.CLICK,
                                eventLabel: g.Mn.SHARE_CLICK
                            }), O.dV.recordClick({
                                ui_source: Y,
                                component: g.eW.COMPONENTS.SHARE_APP_LINK_BUTTON,
                                meta_data: {
                                    input_type: F,
                                    input_value: V
                                }
                            }), e.preventDefault(), X) ? (Z({
                                type: "SUBMIT_INITIATE"
                            }), (0, y.jX)([F, V, g.yj]), function(e) {
                                var n = e.action,
                                    t = e.type,
                                    i = e.sendOn,
                                    a = e.unitedUUID,
                                    r = e.signature,
                                    l = e.deeplink;
                                return (0, E.Ay)(P._OZ, {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    params: {
                                        action: n,
                                        type: t,
                                        send_on: i,
                                        united_uuid: a,
                                        signature: r,
                                        deeplink: l
                                    }
                                }).then((function(e) {
                                    return e.json()
                                }))
                            }({
                                action: t,
                                type: F,
                                sendOn: V,
                                unitedUUID: w,
                                signature: N,
                                deeplink: G
                            }).then((function() {
                                Z({
                                    type: "SUBMIT_SUCCESS"
                                }), (0, y.I)([g.wR])
                            })).catch(function() {
                                var e = (0, a.A)(o().mark((function e(n) {
                                    var t;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (!n.response) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return e.next = 3, n.response.json();
                                            case 3:
                                                t = e.sent, Z({
                                                    type: "SUBMIT_FAILED",
                                                    apiErrorMessage: t.message_text
                                                }), (0, y.I)([g.mu, t.message_text]), e.next = 10;
                                                break;
                                            case 8:
                                                Z({
                                                    type: "SUBMIT_FAILED"
                                                }), (0, y.I)([g.mu]);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(n) {
                                    return e.apply(this, arguments)
                                }
                            }())) : (Z({
                                type: "FORM_SUBMIT_FAILED"
                            }), (0, y.jX)([F, V, g.r5]))
                        },
                        onFocus: function() {
                            (0, y.P1)()
                        },
                        isSubmitting: W,
                        onCountryCodeChange: function(e) {
                            return Z({
                                type: "CHANGE_INT_PHONE_CODE",
                                value: e
                            })
                        },
                        localizedEmailLabel: Q,
                        localizedButtonCaptions: J
                    }), d.createElement(C.zU, null, (0, c.default)(U, "GET_Z_APP_DOWNLOAD_TEXT", g.bI)), d.createElement(C.Cs, {
                        onClick: function() {
                            O.dV.recordClick({
                                ui_source: Y,
                                component: g.eW.COMPONENTS.DOWNLOAD_APP_BUTTON
                            }), (0, y.Ew)(), (0, T.c5)({
                                eventCategory: g.rC.DOWNLOAD_LINK,
                                eventAction: T.aw.CLICK,
                                eventLabel: g.Mn.DOWNLOAD_LINK
                            })
                        }
                    }, d.createElement(_.Playstore, {
                        link: x
                    }), d.createElement(C.zg, null, d.createElement(_.Appstore, {
                        link: s
                    }))), b && d.createElement(C.Ky, null, d.createElement("p", null, "OR", d.createElement(C.ah, {
                        href: "".concat(P.Hc4, "/order"),
                        color: p.red.z400
                    }, "Continue to Online Ordering")))))))
                };
            x.propTypes = {
                title: s().string,
                action: s().string,
                imgUrl: s().string,
                imgProps: s().objectOf(s().any),
                appStoreUrl: s().string,
                playStoreUrl: s().string,
                subtitle: s().string,
                Component: s().node,
                offersData: s().arrayOf(s().array),
                united_uuid: s().string,
                signature: s().string,
                radioOptions: s().arrayOf(s().object),
                selectedInputType: s().string,
                isUnited: s().bool,
                className: s().string,
                locale: s().shape({
                    GET_Z_APP_HEADING_TEXT: s().string,
                    GET_Z_APP_SUB_TEXT: s().string,
                    GET_Z_APP_DOWNLOAD_TEXT: s().string,
                    GET_Z_APP_EMAIL_RADIO_LABEL: s().string,
                    GET_Z_APP_PHONE_RADIO_LABEL: s().string,
                    GET_Z_APP_SHARE_APP_LINK_CAPTION: s().string,
                    GET_Z_APP_SHARE_CAPTION: s().string,
                    GET_Z_APP_EMAIL_ERROR_TEXT: s().string,
                    GET_Z_APP_PHONE_ERROR_TEXT: s().string
                }),
                deeplink: s().string,
                trackingData: s().objectOf(s().any)
            }, x.defaultProps = {
                title: "",
                action: g.ln,
                imgUrl: g.S3,
                imgProps: {},
                appStoreUrl: g.fn,
                playStoreUrl: g.yk,
                subtitle: "",
                Component: null,
                offersData: [],
                united_uuid: "",
                signature: "",
                radioOptions: void 0,
                selectedInputType: g.QP,
                isUnited: !1,
                className: "",
                locale: {
                    GET_Z_APP_HEADING_TEXT: g._L,
                    GET_Z_APP_SUB_TEXT: g.W$,
                    GET_Z_APP_DOWNLOAD_TEXT: g.bI,
                    GET_Z_APP_EMAIL_RADIO_LABEL: g.RR,
                    GET_Z_APP_PHONE_RADIO_LABEL: g.xL,
                    GET_Z_APP_SHARE_APP_LINK_CAPTION: g.CE,
                    GET_Z_APP_SHARE_CAPTION: g.P5,
                    GET_Z_APP_EMAIL_ERROR_TEXT: g.xc[g.QP],
                    GET_Z_APP_PHONE_ERROR_TEXT: g.xc[g.YP]
                },
                deeplink: "",
                trackingData: {
                    ui_source: ""
                }
            };
            const I = x
        },
        "2VVk": (e, n, t) => {
            t.d(n, {
                Cs: () => D,
                Ky: () => z,
                VI: () => V,
                VN: () => G,
                Wo: () => R,
                a$: () => B,
                ah: () => F,
                gb: () => M,
                lo: () => b,
                mc: () => Z,
                w: () => U,
                wn: () => N,
                zU: () => H,
                zg: () => k
            });
            var i, a, r, l, o, d, u, s, c, _, m, p, f, A, E, g, T = t("RlfA"),
                P = t("vOnD"),
                h = t("lFeK"),
                C = t("/ahK"),
                y = t("wcxm"),
                O = t("ALki"),
                x = t("8Bj0"),
                I = t("N/Eu"),
                S = t("kdDk"),
                L = t("YgTD"),
                v = t("2fHp"),
                w = t("SEds"),
                N = P.default.div(i || (i = (0, T.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n"]))),
                R = P.default.div(a || (a = (0, T.A)(["\n  position: relative;\n  top: -2.5rem;\n  width: 45rem;\n  margin-left: 2rem;\n  flex-shrink: 0;\n\n  @media (max-width: 768px) {\n    padding-left: 2.5rem;\n    margin-left: 0;\n    width: 48%;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    text-align: center;\n    margin-left: 0;\n    padding-left: 0;\n  }\n"]))),
                b = (0, P.default)(h.default)(r || (r = (0, T.A)(["\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                D = P.default.div(l || (l = (0, T.A)(["\n  display: flex;\n  @media (max-width: 580px) {\n    justify-content: center;\n  }\n"]))),
                U = (0, P.default)(C.default)(o || (o = (0, T.A)(["\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n  font-size: 4.4rem;\n  line-height: 5.6rem;\n\n  @media (max-width: 768px) {\n    font-size: ", ";\n    margin-bottom: 1.5rem;\n    line-height: 1.2;\n  }\n\n  @media (max-width: 480px) {\n    font-size: ", ";\n    margin-bottom: 1.5rem;\n    line-height: 1.2;\n  }\n"])), L.fontSizes.z700, L.fontSizes.z700),
                G = (0, P.default)(y.P)(d || (d = (0, T.A)(["\n  margin-bottom: 2.5rem;\n  width: 100%;\n  font-size: 2.2;\n  line-height: 3.2rem;\n\n  @media (max-width: 768px) {\n    width: 80%;\n    line-height: 1.2;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    font-size: 1.6rem;\n    line-height: 1.2;\n  }\n"]))),
                k = P.default.div(u || (u = (0, T.A)(["\n  margin-left: 2rem;\n"]))),
                B = P.default.div(s || (s = (0, T.A)(["\n  width: 50%;\n  height: 4rem;\n  @media (max-width: 580px) {\n    width: 100%;\n  }\n"]))),
                M = (0, P.default)(O.default)(c || (c = (0, T.A)(["\n  @media (max-width: 480px) {\n    justify-content: flex-start !important;\n  }\n"]))),
                z = P.default.div(_ || (_ = (0, T.A)(["\n  margin-top: 0.5rem;\n\n  p {\n    color: ", ";\n    font-size: ", ";\n  }\n"])), w.grey.z500, L.fontSizes.z200),
                H = (0, P.default)(y.P)(m || (m = (0, T.A)(["\n  color: ", ";\n  font-size: ", ";\n  margin-bottom: 1.5rem;\n"])), w.grey.z500, L.fontSizes.z200),
                Z = (0, P.default)(v.default)(p || (p = (0, T.A)(["\n  margin-top: ", ";\n\n  @media (max-width: 768px) {\n    margin-top: 7.5rem;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 7.5rem;\n  }\n"])), (function(e) {
                    return e.isUnited ? "6rem" : "3rem"
                })),
                V = P.default.div(f || (f = (0, T.A)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 2rem;\n  width: 100%;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                F = ((0, P.default)(S.default)(A || (A = (0, T.A)([""]))), (0, P.default)(x.default)(E || (E = (0, T.A)(["\n  margin-left: 5px;\n\n  span {\n    font-size: 1.8rem;\n    font-weight: 500;\n    text-decoration: underline;\n  }\n"]))));
            (0, P.default)(I.default)(g || (g = (0, T.A)(["\n  margin-left: 5px;\n"])))
        }
    }
]);