"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5367], {
        "7xh5": (e, n, t) => {
            t.d(n, {
                H: () => c,
                N: () => f
            });
            var r = t("77l8"),
                i = t("/0+J"),
                a = t("Kq5O"),
                l = t.n(a),
                o = t("lXQd"),
                d = t("AdJq"),
                u = t("sLkX"),
                s = t("ZHIB"),
                c = function() {
                    var e = (0, i.A)(l().mark((function e(n, t) {
                        var i, a, c, f, m, p, h, v, A = arguments;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = A.length > 2 && void 0 !== A[2] ? A[2] : "", a = A.length > 3 && void 0 !== A[3] ? A[3] : {}, c = {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        params: (0, r.A)((0, r.A)({}, t), {}, {
                                            q: n,
                                            context: i,
                                            searchMetadata: JSON.stringify(a)
                                        })
                                    }, f = {}, m = "", p = !1, e.prev = 6, e.next = 9, (0, u.Ay)(d.GvH, c);
                                case 9:
                                    return f = e.sent, e.next = 12, f.json();
                                case 12:
                                    f = e.sent, e.next = 25;
                                    break;
                                case 15:
                                    if (e.prev = 15, e.t0 = e.catch(6), h = e.t0, !e.t0.response) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.next = 21, e.t0.response.text();
                                case 21:
                                    h = e.sent;
                                case 22:
                                    p = !0, m = h;
                                case 25:
                                    return 0 === (v = (0, o.default)(f, "results", [])).length && (0, s.TX)(c.params, p ? "api_response_error" : "api_response_empty", m), e.abrupt("return", {
                                        results: v,
                                        params: {
                                            query: n
                                        }
                                    });
                                case 28:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [6, 15]
                        ])
                    })));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function(e) {
                    window.location.href = e
                }
        },
        vVHM: (e, n, t) => {
            t.d(n, {
                Xi: () => s,
                mL: () => f,
                mO: () => c,
                pd: () => m
            });
            var r, i, a, l, o = t("RlfA"),
                d = t("vOnD"),
                u = t("cjht"),
                s = d.default.div(r || (r = (0, o.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 6rem;\n  margin: -1px;\n  margin-right: -0.6rem;\n"]))),
                c = (0, d.default)(u.default)(i || (i = (0, o.A)(["\n  @media (min-width: 481px) {\n    border-radius: 0.8rem;\n    width: 53rem;\n    height: 100%;\n    display: flex;\n    position: relative;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    border: none;\n    border-radius: 0;\n  }\n"]))),
                f = d.default.div(a || (a = (0, o.A)(["\n  @media (min-width: 481px) {\n    border-radius: 0.8rem;\n    width: 53rem;\n    height: 100%;\n    display: flex;\n    position: relative;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    border: none;\n    border-radius: 0;\n  }\n"]))),
                m = d.default.input(l || (l = (0, o.A)(["\n  border: none;\n  font-size: 1.4rem;\n  width: 100%;\n  border-radius: 0.8rem;\n"])))
        },
        WWOB: (e, n, t) => {
            t.d(n, {
                OY: () => l,
                QS: () => o,
                dZ: () => d
            });
            var r = t("zThL"),
                i = t("8xvU"),
                a = t("VNSe"),
                l = "TRENDING",
                o = "RECENT",
                d = (0, r.A)((0, r.A)({}, l, i.default), o, a.default)
        },
        Aljr: (e, n, t) => {
            t.d(n, {
                A: () => C
            });
            var r = t("37Uq"),
                i = t("Vadf"),
                a = t("+9dH"),
                l = t("BkpH"),
                o = t("q1tI"),
                d = t("17x9"),
                u = t.n(d),
                s = t("lHa8"),
                c = t("j399"),
                f = t("lXQd"),
                m = t("HMsx"),
                p = t("wRyO"),
                h = t("eLLh"),
                v = t("8xvU"),
                A = t("P62M"),
                g = t("pJBr"),
                x = t("cHze"),
                E = t("Uq/k"),
                y = t("nZpF"),
                w = t("WWOB"),
                b = ["entityType", "title", "items"],
                R = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "RestaurantCard"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(5052).then(t.bind(t, "BT5O"))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function e(n) {
                        var r = this.resolve(n);
                        return t(r)
                    },
                    resolve: function e() {
                        return "BT5O"
                    }
                }),
                S = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "DefaultComponent"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(6999).then(t.bind(t, "HF69"))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function e(n) {
                        var r = this.resolve(n);
                        return t(r)
                    },
                    resolve: function e() {
                        return "HF69"
                    }
                }),
                O = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "GroupComponent"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(5281).then(t.bind(t, "XJ1A"))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function e(n) {
                        var r = this.resolve(n);
                        return t(r)
                    },
                    resolve: function e() {
                        return "XJ1A"
                    }
                }),
                T = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "BlankStateDefaultRail"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(5637).then(t.bind(t, "cTtr"))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function e(n) {
                        var r = this.resolve(n);
                        return t(r)
                    },
                    resolve: function e() {
                        return "cTtr"
                    }
                }),
                _ = function(e, n, t, r, i, d, u, s) {
                    var c = e.entityType,
                        m = e.title,
                        p = void 0 === m ? "" : m,
                        h = e.items,
                        v = void 0 === h ? [] : h,
                        g = (0, l.A)(e, b);
                    switch (c) {
                        case E.TZ:
                            return d(n === t.parentIndex, n), o.createElement(R, (0, a.A)({
                                ref: u.current[n],
                                isSelected: n === t.parentIndex,
                                handleOnClick: r,
                                key: n,
                                fallback: o.createElement(x.j, null)
                            }, g));
                        case E.cY:
                        case E.S8:
                        case E.f:
                        case E.ZV:
                            return (0, A.EI)(v) && o.createElement(O, (0, a.A)({
                                items: v,
                                title: p,
                                parentIndex: n,
                                cursorPosition: t,
                                handleOnClick: r,
                                key: n,
                                elRef: u,
                                updateSelectedElement: d,
                                heading: (0, f.default)(i, "TOP_RESTAURANTS"),
                                isMobile: s,
                                fallback: o.createElement(x.j, null)
                            }, e));
                        case w.OY:
                        case w.QS:
                            return (0, A.EI)(v) && o.createElement(T, {
                                items: v,
                                title: p,
                                parentIndex: n,
                                cursorPosition: t,
                                handleOnClick: r,
                                updateSelectedElement: d,
                                entityType: c
                            });
                        default:
                            return d(n === t.parentIndex, n), o.createElement(S, (0, a.A)({}, g, {
                                isSelected: n === t.parentIndex,
                                handleOnClick: r,
                                key: n,
                                ref: u.current[n],
                                fallback: o.createElement(x.j, null),
                                isMobile: s
                            }))
                    }
                },
                N = function(e) {
                    var n = e.searchResults,
                        t = e.visible,
                        a = e.popularSearches,
                        l = e.cursorPosition,
                        d = e.showShimmer,
                        u = e.dropdownDefault,
                        s = e.handleOnClick,
                        c = e.locale,
                        p = e.isMobile,
                        v = (0, o.useState)(null),
                        E = (0, i.A)(v, 2),
                        w = E[0],
                        b = E[1],
                        R = (0, o.useRef)(),
                        S = (0, o.useRef)(),
                        O = (0, g.A)(S, 600),
                        T = (0, i.A)(O, 2),
                        N = T[0],
                        C = T[1];
                    (0, o.useEffect)((function() {
                        C()
                    }), [t, C]);
                    var D = function(e, n) {
                        e && w !== R.current[n] && b(R.current[n])
                    };
                    (0, o.useEffect)((function() {
                        var e = n.reduce((function(e, n) {
                            var t = n.items,
                                i = void 0 === t ? [] : t;
                            return (0, A.EI)(i) ? [].concat((0, r.A)(e), (0, r.A)(i.map((function() {
                                return (0, o.createRef)()
                            })))) : [].concat((0, r.A)(e), [(0, o.createRef)()])
                        }), []);
                        R.current = e
                    }), [n]), (0, o.useEffect)((function() {
                        if (w && w.current) {
                            var e = {
                                selectedElement: w.current.getBoundingClientRect(),
                                containerBound: S.current.getBoundingClientRect()
                            };
                            e.selectedElement.bottom > e.containerBound.bottom ? S.current.scrollTo({
                                top: S.current.scrollTop + e.selectedElement.top - e.containerBound.top,
                                behavior: "smooth"
                            }) : e.selectedElement.top < e.containerBound.top && S.current.scrollTo({
                                top: S.current.scrollTop - (e.containerBound.top - e.selectedElement.top),
                                behavior: "smooth"
                            })
                        }
                    }), [w]);
                    var H = (0, A.EI)(n) || (0, A.EI)(a) || !u || d;
                    return o.createElement(y.mO, {
                        heightFromScreenBottom: N,
                        ref: S,
                        visible: t && H
                    }, d ? o.createElement(x.A, null) : (0, A.EI)(n) ? n.map((function(e, n) {
                        return _(e, n, l, s, c, D, R, p)
                    })) : u ? (0, A.EI)(a) ? o.createElement(o.Fragment, null, o.createElement(y.ge, null, (0, f.default)(c, "TRENDING_SEARCHES")), o.createElement(h.default, {
                        gap: 5
                    }, a.map((function(e, n) {
                        return o.createElement(h.default.Item, {
                            colD: 6,
                            colM: 6
                        }, o.createElement(y.jx, {
                            isSelected: n === l.parentIndex,
                            onClick: s({
                                url: e.redirect_url,
                                title: e.keyword,
                                urlWithHost: !0
                            })
                        }, o.createElement(k, {
                            name: e.keyword
                        })))
                    })))) : null : o.createElement(y.ph, null, o.createElement(y.C$, {
                        color: m.default.z500,
                        size: "1.6rem",
                        fontWeight: "500"
                    }, "Oops!"), o.createElement(y.C$, {
                        color: m.default.z500,
                        size: "1.3rem",
                        fontWeight: "400"
                    }, (0, f.default)(c, "NO_SEARCH_RESULT_FOUND"))))
                },
                k = function(e) {
                    var n = e.name;
                    return o.createElement(y.dA, null, o.createElement(v.default, {
                        size: 18,
                        color: p.default.z500
                    }), o.createElement(y.ho, null, n))
                };
            k.propTypes = {
                name: u().string.isRequired
            }, N.propTypes = {
                searchResults: u().arrayOf(u().objectOf),
                popularSearches: u().arrayOf(u().object),
                visible: u().bool,
                cursorPosition: u().shape({
                    parentIndex: u().number,
                    childIndex: u().number
                }),
                showShimmer: u().bool,
                dropdownDefault: u().bool,
                handleOnClick: u().func,
                locale: u().shape({
                    NO_SEARCH_RESULT_FOUND: u().string,
                    TRENDING_SEARCHES: u().string,
                    NO_TRENDING_SEARCH: u().string,
                    TOP_RESTAURANTS: u().string
                }),
                isMobile: u().bool
            }, N.defaultProps = {
                searchResults: [],
                popularSearches: [],
                visible: !1,
                cursorPosition: {},
                showShimmer: !1,
                dropdownDefault: !0,
                handleOnClick: c.default,
                locale: {},
                isMobile: !1
            };
            const C = (0, o.memo)(N, A.Dl)
        },
        DeNg: (e, n, t) => {
            t.d(n, {
                A: () => l
            });
            var r = t("TRpf"),
                i = t("lXQd"),
                a = t("Aljr");
            const l = (0, r.Ng)((function(e) {
                return {
                    isMobile: !!(0, i.default)(e, "pages.current.isMobile")
                }
            }))(a.A)
        },
        cHze: (e, n, t) => {
            t.d(n, {
                A: () => b,
                j: () => A
            });
            var r, i, a, l, o, d, u = t("RlfA"),
                s = t("q1tI"),
                c = t("17x9"),
                f = t.n(c),
                m = t("vOnD"),
                p = t("CII1"),
                h = t("BAyj"),
                v = function() {
                    return s.createElement(w, null, (0, p.default)(0, 6).map((function(e) {
                        return s.createElement(A, {
                            ind: e
                        })
                    })))
                },
                A = function(e) {
                    var n = e.ind;
                    return s.createElement(E, {
                        key: n
                    }, s.createElement(g, {
                        height: "7rem",
                        width: "7rem"
                    }), s.createElement(y, null, s.createElement(x, {
                        width: "10rem",
                        height: "2rem"
                    }), s.createElement(h.default, {
                        width: "20rem",
                        height: "2rem"
                    })))
                };
            A.propTypes = {
                ind: f().number.isRequired
            };
            var g = (0, m.default)(h.default)(r || (r = (0, u.A)(["\n  border-radius: 50%;\n  @media (max-width: 480px) {\n    height: 5rem;\n    width: 5rem;\n  }\n"]))),
                x = (0, m.default)(h.default)(i || (i = (0, u.A)(["\n  margin-bottom: 1rem;\n  @media (max-width: 480px) {\n    width: 70%;\n  }\n"]))),
                E = m.default.div(a || (a = (0, u.A)(["\n  display: flex;\n  padding: 1rem 0;\n  @media (max-width: 480px) {\n    padding: 1.5rem 0;\n  }\n"]))),
                y = m.default.div(l || (l = (0, u.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 1rem;\n  @media (max-width: 480px) {\n    flex-grow: 1;\n  }\n"]))),
                w = m.default.div(o || (o = (0, u.A)(["\n  padding: 0 1.6rem;\n  @media (max-width: 480px) {\n    padding: 0;\n    width: 100%;\n    margin-top: 2rem;\n  }\n"])));
            v.Wrapper = m.default.div(d || (d = (0, u.A)(["\n  margin-top: 3rem;\n"])));
            const b = v
        },
        nZpF: (e, n, t) => {
            t.d(n, {
                C$: () => Y,
                D0: () => G,
                FL: () => de,
                MX: () => J,
                N1: () => te,
                OV: () => Q,
                Pd: () => X,
                RI: () => se,
                UW: () => le,
                WP: () => W,
                Xq: () => P,
                Y1: () => K,
                Z6: () => oe,
                d: () => j,
                dA: () => ee,
                ge: () => re,
                hE: () => M,
                ho: () => $,
                jx: () => Z,
                mO: () => ne,
                mc: () => ae,
                nr: () => U,
                ph: () => V,
                qX: () => F,
                rj: () => ie,
                wq: () => ue
            });
            var r, i, a, l, o, d, u, s, c, f, m, p, h, v, A, g, x, E, y, w, b, R, S, O, T, _, N, k, C = t("RlfA"),
                D = t("vOnD"),
                H = t("HMsx"),
                I = t("hkzt"),
                z = t("LSsp"),
                L = t("lFeK"),
                q = t("wcxm"),
                B = t("kdDk"),
                j = D.default.div(r || (r = (0, C.A)(["\n  display: flex;\n  position: relative;\n  background: ", ";\n  :hover {\n    background: ", ";\n  }\n  padding: ", ";\n  box-shadow: ", ";\n  @media (max-width: 480px) {\n    padding: 1rem 0;\n  }\n  filter: ", ";\n"])), (function(e) {
                    return e.isSelected ? I.default.z100 : z.default
                }), H.default.z100, (function(e) {
                    var n = e.showOld;
                    return "".concat(n ? 1.1 : 1.5, "rem 1.4rem")
                }), (function(e) {
                    return e.showOld ? "inset 0px -0.5px 0px ".concat(H.default.z200) : "none"
                }), (function(e) {
                    return e.isDisabled ? "grayscale(1) opacity(0.5);" : "none"
                })),
                P = (0, D.default)(L.default)(i || (i = (0, C.A)(["\n  border-radius: 0.8rem;\n  flex-shrink: 0;\n  cursor: pointer;\n  top: 0.4rem;\n"]))),
                U = D.default.div(a || (a = (0, C.A)(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  padding-left: 1.5rem;\n  width: 100%;\n  flex-shrink: 1;\n"]))),
                F = (0, D.default)(U)(l || (l = (0, C.A)(["\n  padding-top: 0.5rem;\n"]))),
                M = (0, D.default)(q.P)(o || (o = (0, C.A)(["\n  font-size: ", ";\n  font-weight: 500;\n  text-align: left;\n  width: 85%;\n"])), (function(e) {
                    return e.size ? e.size : "1.6rem"
                })),
                W = (0, D.default)(M)(d || (d = (0, C.A)(["\n  color: ", ";\n  font-size: 1.4rem;\n"])), H.default.z700),
                X = (0, D.default)(q.P)(u || (u = (0, C.A)(["\n  text-align: left;\n"]))),
                G = (0, D.default)(B.default)(s || (s = (0, C.A)(["\n  ", ";\n  & > span {\n    padding: 0;\n    margin-bottom: -0.7rem;\n  }\n\n  @media (max-width: 480px) {\n    span {\n      font-size: 1.2rem;\n    }\n  }\n"])), (function(e) {
                    return e.showOld ? "" : (0, D.css)(c || (c = (0, C.A)(["\n          min-height: 2rem;\n          & > span {\n            min-height: 2rem;\n            line-height: 2rem;\n          }\n        "])))
                })),
                K = D.default.div(f || (f = (0, C.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  flex-wrap: wrap;\n"]))),
                J = D.default.div(m || (m = (0, C.A)([""]))),
                Q = (0, D.default)(B.default)(p || (p = (0, C.A)(["\n  cursor: pointer;\n  position: absolute;\n  bottom: 1.9rem;\n  right: 0;\n"]))),
                Z = D.default.div(h || (h = (0, C.A)(["\n  display: flex;\n  justify-content: flex-start;\n  background: ", ";\n  :hover {\n    background: ", ";\n  }\n  padding-left: 1.4rem;\n\n  @media (max-width: 480px) {\n    padding: 0;\n  }\n"])), (function(e) {
                    return e.isSelected ? I.default.z100 : z.default
                }), H.default.z100),
                V = D.default.div(v || (v = (0, C.A)(["\n  padding-left: 1.6rem;\n  @media (max-width: 480px) {\n    padding: 0;\n    margin-top: 2rem;\n  }\n"]))),
                Y = (0, D.default)(q.P)(A || (A = (0, C.A)(["\n  font-weight: ", ";\n"])), (function(e) {
                    return e.fontWeight ? e.fontWeight : 500
                })),
                $ = D.default.span(g || (g = (0, C.A)(["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  color: ", ";\n  margin-left: 1rem;\n  font-weight: 400;\n  width: 17rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])), H.default.z900),
                ee = D.default.div(x || (x = (0, C.A)(["\n  display: flex;\n  cursor: pointer;\n  padding: 0.5rem 0;\n"]))),
                ne = D.default.div(E || (E = (0, C.A)(["\n  width: 100%;\n  background: ", ";\n  z-index: 10;\n\n  @media (min-width: 481px) {\n    max-height: ", ";\n    border-radius: 0.8rem;\n    position: absolute;\n    overflow: auto;\n    top: ", ";\n    visibility: ", ";\n    opacity: ", ";\n    border: 1px solid ", ";\n    box-shadow: 0px 2px 8px rgba(28, 28, 28, 0.08);\n    transition: opacity 0.25s ease, top 0.25s ease;\n    padding: 1.6rem 0;\n  }\n"])), z.default, (function(e) {
                    var n = e.heightFromScreenBottom;
                    return !n || n >= 600 ? "60rem" : "".concat(n, "px")
                }), (function(e) {
                    return e.visible ? "6rem" : "3rem"
                }), (function(e) {
                    return e.visible ? "visible" : "hidden"
                }), (function(e) {
                    return e.visible ? 1 : 0
                }), H.default.z300),
                te = D.default.div(y || (y = (0, C.A)(["\n  width: 100%;\n  margin-top: 0.7rem;\n  border-bottom: 1px solid ", ";\n"])), H.default.z200),
                re = (D.default.div(w || (w = (0, C.A)([""]))), D.default.p(b || (b = (0, C.A)(["\n  font-size: 1.4rem;\n  line-height: 2.1rem;\n  color: ", ";\n  text-align: left;\n  padding: 0 1.6rem;\n\n  @media (max-width: 480px) {\n    padding: 0;\n  }\n"])), H.default.z500)),
                ie = (0, D.default)(B.default)(R || (R = (0, C.A)(["\n  cursor: pointer;\n  position: absolute;\n  right: -1.6rem;\n  top: -0.6rem;\n"]))),
                ae = D.default.div(S || (S = (0, C.A)(["\n  position: relative;\n"]))),
                le = D.default.div(O || (O = (0, C.A)(["\n  padding: 1.1rem 1.4rem;\n  @media (max-width: 480px) {\n    padding: 1rem 0;\n  }\n"]))),
                oe = D.default.div(T || (T = (0, C.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),
                de = (0, D.default)(B.default)(_ || (_ = (0, C.A)(["\n  width: ", ";\n"])), (function(e) {
                    return e.fullWidth ? "100%" : "calc(50% - 3px)"
                })),
                ue = (0, D.default)(q.P)(N || (N = (0, C.A)(["\n  padding: 0rem 0rem 1rem 0;\n  font-weight: 500;\n  font-size: 1.5rem;\n"]))),
                se = (0, D.default)(q.P)(k || (k = (0, C.A)(["\n  font-weight: 500;\n  text-align: left;\n"])))
        },
        pJBr: (e, n, t) => {
            t.d(n, {
                A: () => l
            });
            var r = t("Vadf"),
                i = t("q1tI"),
                a = t("lXQd");
            const l = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 450,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50,
                    l = (0, i.useState)(n),
                    o = (0, r.A)(l, 2),
                    d = o[0],
                    u = o[1];
                return (0, i.useEffect)((function() {
                    u(n)
                }), [n]), [d, (0, i.useCallback)((function() {
                    var r = (0, a.default)(window, "document.documentElement.clientHeight", 0),
                        i = 0;
                    e.current && (i = e.current.getBoundingClientRect().top);
                    var l = r - i - t;
                    u(l <= 0 ? n : l)
                }), [e, t])]
            }
        },
        r6rq: (e, n, t) => {
            t.d(n, {
                L: () => a
            });
            var r = t("lXQd"),
                i = t("WHL/"),
                a = function(e) {
                    return {
                        popularSearches: (0, r.default)(e, "location.popularSearches", []),
                        currentLocation: (0, r.default)(e, "location.currentLocation", {}),
                        isPartnershipFlow: (0, i.Ay)((0, r.default)(e, "pages.current.name", "")),
                        locale: {
                            NO_SEARCH_RESULT_FOUND: (0, r.default)(e, "langKeys.NO_SEARCH_RESULT_FOUND", ""),
                            TRENDING_SEARCHES: (0, r.default)(e, "langKeys.TRENDING_SEARCHES", ""),
                            NO_TRENDING_SEARCH: (0, r.default)(e, "langKeys.NO_TRENDING_SEARCH", ""),
                            TOP_RESTAURANTS: (0, r.default)(e, "langKeys.TOP_RESTAURANTS", ""),
                            SEARCH_PLACEHOLDER: (0, r.default)(e, "langKeys.SEARCH_PLACEHOLDER", "")
                        }
                    }
                }
        }
    }
]);