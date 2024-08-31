"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8792], {
        LPu3: (e, n, t) => {
            t.d(n, {
                A: () => p
            });
            var r, i = t("RlfA"),
                o = t("q1tI"),
                a = t("17x9"),
                s = t.n(a),
                u = t("TRpf"),
                l = t("vOnD"),
                c = t("lXQd"),
                d = t("rF9Q"),
                m = function(e) {
                    var n = e.pageInfo,
                        t = void 0 === n ? {} : n,
                        r = t.name,
                        i = void 0 === r ? "" : r,
                        a = t.isMobile,
                        s = void 0 === a ? 0 : a,
                        u = (0, c.default)(d.A, i, {}),
                        l = u.Component,
                        m = u.Fallback;
                    return i && l ? !!s && "restaurant" === i ? o.createElement(f, null, o.createElement(l, {
                        fallback: m && o.createElement(m, {
                            isMobile: s
                        })
                    })) : o.createElement(l, {
                        fallback: m && o.createElement(m, {
                            isMobile: s
                        })
                    }) : null
                },
                f = l.default.div(r || (r = (0, i.A)(["\n  min-height: 100vh;\n"])));
            m.propTypes = {
                pageInfo: s().objectOf(s().any)
            }, m.defaultProps = {
                pageInfo: {}
            };
            const p = (0, u.Ng)((function(e) {
                return {
                    pageInfo: (0, c.default)(e, "pages.current", {})
                }
            }))(m)
        },
        NWYR: (e, n, t) => {
            t.d(n, {
                A: () => m
            });
            var r = t("q1tI"),
                i = t("17x9"),
                o = t.n(i),
                a = t("rid2"),
                s = t("TRpf"),
                u = t("lXQd"),
                l = t("UwH9"),
                c = t("VAjR"),
                d = function(e) {
                    var n = e.title,
                        t = e.description,
                        i = e.keywords,
                        o = e.ogTitle,
                        s = e.ogUrl,
                        u = e.ogPageUrl,
                        d = e.ogType,
                        m = e.ogSiteName,
                        f = e.ogDescription,
                        p = e.isNoIndex,
                        A = e.hrefLangInfo,
                        h = e.pageName,
                        g = e.twitterCard,
                        v = e.twitterHandle,
                        E = e.twitterTitle,
                        _ = e.twitterImage,
                        y = e.twitterDescription;
                    return r.createElement(a.mg, null, r.createElement("meta", {
                        charSet: "utf-8"
                    }), r.createElement("title", null, n), p && r.createElement("meta", {
                        name: "robots",
                        content: "noindex"
                    }), r.createElement("meta", {
                        name: "robots",
                        content: "NOODP,NOYDIR"
                    }), r.createElement("meta", {
                        name: "description",
                        content: t
                    }), r.createElement("meta", {
                        name: "twitter:card",
                        content: g
                    }), v && r.createElement("meta", {
                        name: "twitter:site",
                        content: v
                    }), E && r.createElement("meta", {
                        name: "twitter:title",
                        content: E
                    }), _ && r.createElement("meta", {
                        name: "twitter:image",
                        content: _
                    }), y && r.createElement("meta", {
                        name: "twitter:description",
                        content: y
                    }), i && r.createElement("meta", {
                        name: "keywords",
                        content: i
                    }), o && r.createElement("meta", {
                        property: "og:title",
                        content: o
                    }), m && r.createElement("meta", {
                        property: "og:site_name",
                        content: m
                    }), s && h !== c.xH && r.createElement("meta", {
                        property: "og:image",
                        content: s
                    }), h === c.xH && r.createElement("meta", {
                        property: "og:image",
                        content: "https://b.zmtcdn.com/gift-cards/assets/1722f08aa398ef04beb5ae5a527e0bb51645606335.png"
                    }), u && r.createElement("meta", {
                        property: "og:url",
                        content: u
                    }), d && r.createElement("meta", {
                        property: "og:type",
                        content: d
                    }), f && r.createElement("meta", {
                        property: "og:description",
                        content: f
                    }), r.createElement("meta", {
                        name: "google-site-verification",
                        content: "wpKLzkoQQlIQcu2LzlVmxVTVJbvUyazijG6QYaTzXqw"
                    }), A.filter((function(e) {
                        var n = e.isSelected;
                        return !(void 0 === n || !n)
                    })).map((function(e) {
                        var n = e.hreflang;
                        return r.createElement("html", {
                            key: n,
                            lang: n
                        })
                    })), A && A.map((function(e) {
                        return r.createElement("link", {
                            key: e.hreflang,
                            rel: "alternate",
                            hrefLang: e.hreflang,
                            href: (0, l.A)(e.link)
                        })
                    })))
                };
            d.propTypes = {
                title: o().string,
                description: o().string,
                keywords: o().string,
                ogTitle: o().string,
                ogDescription: o().string,
                ogUrl: o().string,
                ogSiteName: o().string,
                ogPageUrl: o().string,
                ogType: o().string,
                isNoIndex: o().bool,
                hrefLangInfo: o().arrayOf(o().object),
                pageName: o().string,
                twitterCard: o().string,
                twitterHandle: o().string,
                twitterTitle: o().string,
                twitterImage: o().string,
                twitterDescription: o().string
            }, d.defaultProps = {
                title: "Zomato",
                description: "Better food for more people",
                keywords: "",
                ogTitle: "",
                ogSiteName: "",
                ogDescription: "",
                ogUrl: "",
                ogPageUrl: "",
                ogType: "",
                isNoIndex: !1,
                hrefLangInfo: [],
                pageName: "",
                twitterCard: "summary",
                twitterHandle: "",
                twitterTitle: "",
                twitterImage: "",
                twitterDescription: ""
            };
            const m = (0, s.Ng)((function(e) {
                var n = (0, u.default)(e, "pages.current.ogTwitterTags", {});
                return {
                    title: (0, u.default)(e, "pages.current.pageTitle", ""),
                    pageName: (0, u.default)(e, "pages.current.name"),
                    description: (0, u.default)(e, "pages.current.pageDescription", ""),
                    keywords: (0, u.default)(e, "pages.current.pageKeywords", ""),
                    ogTitle: (0, u.default)(e, "pages.current.ogTitle", ""),
                    ogSiteName: (0, u.default)(e, "pages.current.ogSiteName", ""),
                    ogDescription: (0, u.default)(e, "pages.current.ogDescription", ""),
                    ogUrl: (0, u.default)(e, "pages.current.ogUrl", ""),
                    ogPageUrl: (0, u.default)(e, "pages.current.ogPageUrl", ""),
                    ogType: (0, u.default)(e, "pages.current.ogType", ""),
                    isNoIndex: (0, u.default)(e, "pages.current.isNoIndex", !1),
                    hrefLangInfo: (0, u.default)(e, "hrefLangInfo", []),
                    twitterCard: (0, u.default)(n, "twitterCard", "summary"),
                    twitterHandle: (0, u.default)(n, "twitterSite", ""),
                    twitterTitle: (0, u.default)(n, "twitterTitle", ""),
                    twitterImage: (0, u.default)(n, "twitterImage", ""),
                    twitterDescription: (0, u.default)(n, "twitterDescription", "")
                }
            }))(d)
        },
        "0cYI": (e, n, t) => {
            t.d(n, {
                A: () => I
            });
            var r, i = t("TRpf"),
                o = t("lXQd"),
                a = t("6x74"),
                s = t("RlfA"),
                u = t("Vadf"),
                l = t("q1tI"),
                c = t("PlcA"),
                d = t("vOnD"),
                m = t("wRyO"),
                f = t("LSsp"),
                p = t("czsM"),
                A = t("17x9"),
                h = t.n(A),
                g = t("j399"),
                v = t("V3te"),
                E = t("hfmy"),
                _ = t("+1bB"),
                y = function(e) {
                    var n = e.isOnline,
                        t = e.extraBottomPadding,
                        r = e.setStatusOnline,
                        i = e.setStatusOffline,
                        o = (0, l.useState)(!1),
                        s = (0, u.A)(o, 2),
                        d = s[0],
                        m = s[1];
                    return (0, l.useEffect)((function() {
                        var e;
                        return -1 !== n ? (m(!0), n && (e = setTimeout((function() {
                                return m(!1)
                            }), 3e3))) : "undefined" != typeof window && window.navigator && !window.navigator.onLine && i(),
                            function() {
                                return e ? clearTimeout(e) : g.default
                            }
                    }), [n]), (0, l.useEffect)((function() {
                        return "undefined" != typeof window && (window.addEventListener("online", r), window.addEventListener("offline", i)),
                            function() {
                                "undefined" != typeof window && (window.removeEventListener("online", r), window.removeEventListener("offline", i))
                            }
                    }), []), l.createElement(_.N3, {
                        reducer: {
                            networkState: a.Ay,
                            root: !0
                        }
                    }, l.createElement(c.default, null, -1 !== n && l.createElement(b, {
                        visible: d,
                        isOnline: n,
                        extraBottomPadding: t
                    }, n ? "Back online" : "No internet connectivity. Please check your network")))
                };
            y.propTypes = {
                isOnline: h().number.isRequired,
                extraBottomPadding: h().bool,
                setStatusOnline: h().func.isRequired,
                setStatusOffline: h().func.isRequired
            }, y.defaultProps = {
                extraBottomPadding: !1
            };
            var b = d.default.div(r || (r = (0, s.A)(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  font-size: 1.2rem;\n  padding: 0.3rem 1rem;\n  padding-bottom: ", ";\n  text-align: center;\n  background: ", ";\n  opacity: ", ";\n  color: ", ";\n  z-index: 100;\n  transform: translateY(", ");\n  transition: transform 0.25s ease, visibility 0.25s ease, opacity 0.25s ease;\n"])), (function(e) {
                return e.extraBottomPadding ? "".concat((0, E.z)(v.So), "rem") : "0.3rem"
            }), (function(e) {
                return e.isOnline ? p.default.z600 : m.default.z700
            }), (function(e) {
                return e.visible ? 1 : 0
            }), f.default, (function(e) {
                return e.visible ? 0 : "3rem"
            }));
            const T = y;
            var S = {
                setStatusOnline: a._F,
                setStatusOffline: a.KU
            };
            const I = (0, i.Ng)((function(e) {
                var n = (0, o.default)(e, "deviceSpecificInfo.styles.extraBottomPadding", !1);
                return {
                    isOnline: (0, o.default)(e, "networkState.isOnline", -1),
                    extraBottomPadding: n
                }
            }), S)(T)
        },
        "6x74": (e, n, t) => {
            t.d(n, {
                Ay: () => l,
                KU: () => u,
                _F: () => s
            });
            var r = t("77l8"),
                i = {
                    isOnline: -1
                },
                o = "SET_STATUS_ONLINE",
                a = "SET_STATUS_OFFLINE",
                s = function() {
                    return {
                        type: o
                    }
                },
                u = function() {
                    return {
                        type: a
                    }
                };
            const l = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                    n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).type;
                switch (void 0 === n ? "" : n) {
                    case o:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isOnline: !0
                        });
                    case a:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isOnline: !1
                        });
                    default:
                        return e
                }
            }
        },
        "3etr": (e, n, t) => {
            t.d(n, {
                A: () => d
            });
            var r = t("q1tI"),
                i = t("17x9"),
                o = t.n(i),
                a = t("rid2"),
                s = t("TRpf"),
                u = t("lXQd"),
                l = t("WHL/"),
                c = function(e) {
                    var n = e.currentPageName;
                    return r.createElement(a.mg, null, (0, l.Ay)(n) && r.createElement("script", {
                        src: "https://microapps.google.com/apis/v1alpha/microapps.js"
                    }))
                };
            c.propTypes = {
                currentPageName: o().string
            }, c.defaultProps = {
                currentPageName: ""
            };
            const d = (0, s.Ng)((function(e) {
                return {
                    currentPageName: (0, u.default)(e, "pages.current.name", "")
                }
            }))(c)
        },
        "buN+": (e, n, t) => {
            t.d(n, {
                A: () => m
            });
            var r = t("q1tI"),
                i = t("lXQd"),
                o = t("TRpf"),
                a = t("17x9"),
                s = t.n(a),
                u = t("VAjR"),
                l = ["welcome", "scanner", "menu", "table_view", "cart", "payment_status", "transaction_status"],
                c = [u.ix, u.RZ, u.I, u.QQ, u.E3, u.$s, u.m3, u.W2, u.$G, u.EG],
                d = function(e) {
                    var n = e.url,
                        t = e.pageName,
                        i = e.subType;
                    return (0, r.useEffect)((function() {
                        (function(e, n) {
                            return !!c.includes(e) || !(e !== u.b$ || !l.includes(n))
                        })(t, i) && window.scrollTo(0, 0)
                    }), [n, i]), null
                };
            d.propTypes = {
                url: s().string.isRequired,
                pageName: s().string.isRequired,
                subType: s().string.isRequired
            };
            const m = (0, o.Ng)((function(e) {
                return {
                    url: (0, i.default)(e, "pages.current.pageUrl", ""),
                    pageName: (0, i.default)(e, "pages.current.name", ""),
                    subType: (0, i.default)(e, "pages.current.subType", "")
                }
            }))(d)
        },
        "NN/6": (e, n, t) => {
            t.d(n, {
                Ch: () => i,
                TV: () => a,
                tT: () => o,
                vj: () => r
            });
            var r = {
                    INITIATE: "SET_CSRF_IN_WINDOW_INITIATE",
                    SUCCESS: "SET_CSRF_IN_WINDOW_SUCCESS",
                    FAILED: "SET_CSRF_IN_WINDOW_FAILED",
                    CLEAR: "SET_CSRF_IN_WINDOW_CLEAR"
                },
                i = {
                    type: r.INITIATE
                },
                o = function() {
                    return {
                        type: r.SUCCESS
                    }
                },
                a = function() {
                    return {
                        type: r.FAILED
                    }
                }
        },
        yYoY: (e, n, t) => {
            t.d(n, {
                fR: () => o,
                hV: () => i,
                w3: () => r
            });
            var r = {
                    OPEN: "CONTINUE_IN_APP_MODAL_OPEN",
                    CLOSE: "CONTINUE_IN_APP_MODAL_CLOSE"
                },
                i = function() {
                    return {
                        type: r.OPEN
                    }
                },
                o = function() {
                    return {
                        type: r.CLOSE
                    }
                }
        },
        iJ0x: (e, n, t) => {
            t.d(n, {
                A: () => o
            });
            var r = t("q1tI"),
                i = t("p99z");

            function o() {
                return (0, r.useEffect)((function() {
                    (0, i.B7)()
                }), []), null
            }
        },
        tdEM: (e, n, t) => {
            t.d(n, {
                A: () => h
            });
            var r, i = t("RlfA"),
                o = t("Vadf"),
                a = t("q1tI"),
                s = t("TRpf"),
                u = t("vOnD"),
                l = t("17x9"),
                c = t.n(l),
                d = t("lXQd"),
                m = t("WjMd"),
                f = t("P62M"),
                p = function(e) {
                    var n = e.isPageLoadRequestSent,
                        t = e.requestedPage,
                        r = (0, a.useState)(!0),
                        i = (0, o.A)(r, 2),
                        s = i[0],
                        u = i[1];
                    return (0, a.useEffect)((function() {
                        u(!!n)
                    }), [n, t]), a.createElement(A, {
                        active: s,
                        key: t
                    })
                },
                A = (0, u.default)(m.A)(r || (r = (0, i.A)(["\n  height: 3px;\n"])));
            p.propTypes = {
                isPageLoadRequestSent: c().bool.isRequired,
                requestedPage: c().string.isRequired
            };
            const h = (0, s.Ng)((function(e) {
                return {
                    isPageLoadRequestSent: (0, d.default)(e, "apiState.GET_PAGE_INFO.isFetching", !1) || (0, d.default)(e, "apiState.APPLY_FILTERS.isFetching", !1),
                    requestedPage: (0, d.default)(e, "apiState.GET_PAGE_INFO.fetchingUrl", "")
                }
            }))((0, a.memo)(p, f.Dl))
        },
        Ta92: (e, n, t) => {
            t.d(n, {
                A: () => o
            });
            var r = t("dg7M"),
                i = t("uulN");
            const o = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["email", "phone", "google"],
                    t = i.x2.test(window.location.pathname) ? (0, i.hv)(e) : n;
                return (0, i.Zu)() && t.push("akamai"), (0, r.A)({
                    client_id: (0, i.fp)(),
                    scope: "offline",
                    redirect_url: (0, i.M3)(),
                    enable_one_tap: !1,
                    logout_url: (0, i.Gn)(),
                    login_methods: t,
                    custom: !1,
                    auto_refresh: !!(0, i.rd)(),
                    auth_init_identifier: (0, i.KF)()
                })
            }
        },
        uulN: (e, n, t) => {
            t.d(n, {
                Zu: () => l,
                KF: () => c,
                fp: () => s,
                Gn: () => m,
                M3: () => d,
                hv: () => g,
                rd: () => u,
                hU: () => f,
                x2: () => h
            });
            var r = t("AdJq"),
                i = "2c4e3ed9-0308-4d16-a237-3a5c99f7e944",
                o = [r.SXs, r.U3u];
            const a = function(e, n) {
                if ("undefined" == typeof window) try {
                    process.env[e] = n
                } catch (e) {}
                window.process || (window.process = {}), window.process.env || (window.process.env = {}), window.process.env[e] = n
            };
            var s = function() {
                    if ("undefined" != typeof window && window.location && window.location.origin) switch (window.location.origin) {
                        case r.SXs:
                            return "826a5ce3-12f5-4ac7-8ba8-7cd0c3241f09";
                        case r.U3u:
                            return "de6f3619-6b6e-45ef-9323-a5f86a2e971f";
                        default:
                            return i
                    }
                    return i
                },
                u = function() {
                    if ("undefined" != typeof window && window.location && window.location.origin) {
                        var e = window.location.origin;
                        return o.includes(e)
                    }
                    return !1
                },
                l = function() {
                    if ("undefined" != typeof window && window.location && window.location.origin) {
                        var e = window.location.origin;
                        return r.U3u === e
                    }
                    return !1
                },
                c = function() {
                    if ("undefined" != typeof window && window.location && window.location.origin) switch (window.location.origin) {
                        case r.SXs:
                            return "admin_zoman";
                        case r.U3u:
                            return "external_zomans";
                        default:
                            return "zomato"
                    }
                    return ""
                },
                d = function() {
                    return u() ? r.vkb : ""
                },
                m = function() {
                    return u() ? r.ZMS : ""
                },
                f = function() {
                    a("REACT_APP_COOKIE_DOMAIN", ".zomato.com"), a("REACT_APP_ACCOUNTS_DOMAIN", "https://accounts.zomato.com")
                },
                p = ["email", "google"],
                A = ["email", "phone", "google"],
                h = /\/events\/[a-zA-Z0-9-]+\/?([a-z]+)?/,
                g = function() {
                    return 1 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? A : p
                }
        },
        p99z: (e, n, t) => {
            t.d(n, {
                B7: () => a,
                Lb: () => i,
                az: () => o
            });
            var r = "@Web:csrf-in-progress",
                i = function() {
                    return Boolean(window.localStorage.getItem(r))
                },
                o = function() {
                    window.localStorage.setItem(r, "fetching")
                },
                a = function() {
                    window.localStorage.removeItem(r)
                }
        },
        ocwp: (e, n, t) => {
            t.d(n, {
                A: () => se
            });
            var r = t("RlfA"),
                i = t("q1tI"),
                o = t("17x9"),
                a = t.n(o),
                s = t("lHa8"),
                u = t("rid2"),
                l = t("P62M"),
                c = t("TRpf"),
                d = t("lXQd"),
                m = t("vOnD"),
                f = t("zqKt"),
                p = t("yM/X"),
                A = t("VcZT"),
                h = t("WjMd"),
                g = t("j399"),
                v = t("Ujvf"),
                E = t("nQUI"),
                _ = t("VAjR"),
                y = t("PdVL"),
                b = t("Wc2h"),
                T = t("fyQP"),
                S = t("o3Vs"),
                I = t("WHL/"),
                w = t("fMrO"),
                R = t("taSx"),
                N = t("NWYR"),
                O = t("NN/6"),
                C = t("buN+"),
                x = t("1yBQ"),
                M = t("0cYI"),
                L = t("3etr"),
                P = t("LPu3"),
                D = t("tdEM"),
                k = t("ZEPn"),
                V = t("EyxB"),
                U = t("5h7m"),
                F = t("+dRJ"),
                G = t("iJ0x"),
                q = t("kHo1"),
                H = t("F6eP"),
                z = t("AdJq"),
                B, j = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "CookieBanner-CookieBanner"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(448).then(t.bind(t, "Did2"))
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
                        return "Did2"
                    }
                }),
                K = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "Footers"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(7721).then(t.bind(t, "XwKE"))
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
                        return "XwKE"
                    }
                }),
                Y = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "zwebmolecules-dist-Login"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(999), t.e(3703), t.e(5519)]).then(t.bind(t, "QhZA"))
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
                        return "QhZA"
                    }
                }),
                W = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-common-Navbar"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(7472).then(t.bind(t, "TIfy"))
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
                        return "TIfy"
                    }
                }),
                J = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "PageBlocker"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(6464).then(t.bind(t, "boBE"))
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
                        return "boBE"
                    }
                }),
                Z = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "StructuredData"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(2322).then(t.bind(t, "Et5G"))
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
                        return "Et5G"
                    }
                }),
                X = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-common-components-PartnershipLoginModal"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(300).then(t.bind(t, "GepR"))
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
                        return "GepR"
                    }
                }),
                Q = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-common-components-PartnershipLoginOptionModal"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(7789), t.e(5774), t.e(3430), t.e(1069)]).then(t.bind(t, "3Te9"))
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
                        return "3Te9"
                    }
                }),
                $ = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "components-OpenAppModalV2"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(9816).then(t.bind(t, "rSfY"))
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
                        return "rSfY"
                    }
                }),
                ee = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "components-OpenAppModalV3"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(276), t.e(2625)]).then(t.bind(t, "oHDM"))
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
                        return "oHDM"
                    }
                }),
                ne = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Search-components-AerobarMobile"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(396)]).then(t.bind(t, "Z7uT"))
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
                        return "Z7uT"
                    }
                }),
                te = (0, s.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "components-Zoauth-Login"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(427).then(t.bind(t, "f33K"))
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
                        return "f33K"
                    }
                }),
                re = m.default.div(B || (B = (0, r.A)(["\n  position: relative;\n"])));

            function ie(e) {
                var n = e.pageInfo,
                    t = e.dispatchTosetCsrfInWindow,
                    r = e.isModalOpen,
                    o = e.closeModal,
                    a = e.openModal,
                    s = e.setLoginType,
                    c = e.loginType,
                    d = e.location,
                    m = e.user,
                    g = e.isPartnershipFlow,
                    v = e.toastDetails,
                    E = e.removeToast,
                    y = e.loginModalLocale,
                    I = e.isLoggedIn,
                    w = e.fpaVisible,
                    R = e.setUser,
                    O = e.isBot,
                    x = e.pageConfig,
                    k = e.trackingDataLogin,
                    F = e.showOpenAppModalV2,
                    B = e.showOpenAppModalV3,
                    ie = e.o2CheckoutFlow,
                    oe = e.showOrderFlowNavbar,
                    ae = e.useAuthSDK,
                    se = n.pageUrl,
                    ue = void 0 === se ? "" : se,
                    le = n.name,
                    ce = void 0 === le ? "" : le,
                    de = n.isMobile,
                    me = n.gaPageType,
                    fe = void 0 === me ? "" : me,
                    pe = d.cityId,
                    Ae = void 0 === pe ? 0 : pe,
                    he = d.countryId,
                    ge = void 0 === he ? 0 : he,
                    ve = m.basic_info,
                    Ee = (void 0 === ve ? {} : ve).id,
                    _e = void 0 === Ee ? 0 : Ee,
                    ye = x.hideCookieBanner,
                    be = x.hideFooter,
                    Te = x.hideLogin,
                    Se = x.hideNavbar,
                    Ie = x.hidePageBlocker,
                    we = x.hideStructuredData,
                    Re = [_.Dn, _.Q1];
                (0, l.fU)() || O || (f.A.getInstance().setParams({
                    city_id: Ae,
                    user_id: _e
                }), (0, b.wd)(m.basic_info));
                (0, i.useEffect)((function() {
                    return (0, S.K)(ce, de)
                }), []), (0, i.useEffect)((function() {
                    t(), "undefined" != typeof window && setTimeout((function() {
                        var e;
                        if (null !== (e = window) && void 0 !== e && e.performance) {
                            var n, t = (null === (n = window) || void 0 === n ? void 0 : n.performance).timing,
                                r = {
                                    time: t.loadEventEnd - t.navigationStart
                                };
                            (0, H.Ev)({
                                name: "appLoad",
                                value: JSON.stringify(r),
                                pageName: ce,
                                platform: de ? H.i9.MOBILE : H.i9.DESKTOP
                            })
                        }
                    }), 800)
                }), []);
                var Ne = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = n.name,
                        r = void 0 === t ? "" : t,
                        i = n.subType,
                        o = void 0 === i ? "" : i,
                        a = [_.RZ, _.ix, _.EG],
                        s = [_.ND];
                    if (a.includes(r) || s.includes(o)) ! function(e) {
                        var n = e.user;
                        R(void 0 === n ? {} : n)
                    }(e);
                    else {
                        var u = new URLSearchParams(window.location.search).get(q.kj.REDIRECT_URL);
                        if (u) {
                            var l = "";
                            try {
                                var c = new URL(decodeURIComponent(u));
                                if ("https:" !== c.protocol) throw new Error("Invalid redirectURLParam in :: ".concat(u));
                                if (!q._Y.test(c.origin)) throw new Error("Invalid redirect hostname in :: ".concat(u));
                                l = c.toString()
                            } catch (e) {
                                return
                            }
                            setTimeout((function() {
                                window.location.href = l
                            }), 100)
                        } else setTimeout((function() {
                            window.location.reload()
                        }), 100)
                    }
                };
                (0, i.useEffect)((function() {
                    if (ue && !w && ((0, b.kz)(n, d, m), !O)) {
                        var e = document.referrer;
                        f.A.getInstance().sendToJumbo(H.rb.PAGE_VIEW, {
                            referrer: null != e ? e : "NA",
                            pagetype: fe
                        })
                    }
                }), [ue, w]), (0, i.useEffect)((function() {
                    var e, n = new URLSearchParams(window.location.search),
                        t = n.get(q.kj.ACTION),
                        r = null !== (e = n.get(q.kj.REDIRECT_URL)) && void 0 !== e ? e : "";
                    t === q.FD && (I ? r.trim().length > 0 && Ne() : a())
                }), []);
                var Oe = !g && !Te && r,
                    Ce = F && !(0, V.rZ)(),
                    xe = Re.includes(ce),
                    Me = (0, i.useRef)(null);
                (0, U.A)({
                    isOpen: r,
                    path: ue,
                    modalRef: Me,
                    isEnabled: !g && de
                });
                var Le = function(e) {
                        "/login" === ue ? window.location.href = z.B6d : o(e)
                    },
                    Pe = Oe && ae && c === q.S3;
                return i.createElement(i.Fragment, null, i.createElement(G.A, null), i.createElement(N.A, null), Oe && i.createElement(u.mg, null, i.createElement("script", {
                    src: "https://apis.google.com/js/platform.js?onload=onGoogleAPILoaded",
                    defer: !0,
                    referrerpolicy: "no-referrer"
                })), !we && i.createElement(Z, null), !!de && xe && i.createElement(ne, null), !ye && i.createElement(j, {
                    isMobile: de
                }), i.createElement(L.A, null), i.createElement(re, null, Ce && i.createElement($, null), B && i.createElement(ee, null), i.createElement(D.A, null), !Se && i.createElement(W, {
                    pageName: ce,
                    showOrderFlowNavbar: oe
                }), i.createElement(C.A, null), i.createElement(p.default, null, i.createElement(P.A, null), i.createElement(A.default, {
                    show: !!v.show,
                    align: v.align,
                    onClose: E,
                    text: v.text,
                    type: v.type
                })), g && i.createElement(X, null), g && i.createElement(Q, null), !be && i.createElement(K, null), Pe ? i.createElement(te, {
                    refreshPage: Ne,
                    closeModal: Le,
                    pageInfo: n,
                    loginType: c,
                    countryId: ge
                }) : i.createElement(Y, {
                    ref: Me,
                    isMobile: !!de,
                    o2CheckoutFlow: ie,
                    isOpen: r,
                    fnCloseRequest: Le,
                    loginType: c,
                    setLoginType: s,
                    fnOnAuthenticate: Ne,
                    links: {
                        tos: 208 === ge ? "/termsofservice/turkey" : "/conditions",
                        privacy: "/privacy",
                        content: "/policies"
                    },
                    locale: y,
                    enableOneTap: !I && !ae,
                    enablePhoneLogin: !0,
                    genericActionCallback: function(e) {
                        (0, T.pm)(n, e), (0, T.bZ)(k, e)
                    },
                    fallback: i.createElement(h.A, {
                        active: !0
                    })
                }), i.createElement(M.A, null), !Ie && i.createElement(J, null)))
            }
            ie.propTypes = {
                pageInfo: a().objectOf(a().any).isRequired,
                dispatchTosetCsrfInWindow: a().func.isRequired,
                setUser: a().func.isRequired,
                isModalOpen: a().bool.isRequired,
                closeModal: a().func.isRequired,
                openModal: a().func,
                setLoginType: a().func.isRequired,
                loginType: a().string.isRequired,
                location: a().shape({
                    cityName: a().string,
                    countryName: a().string,
                    cityId: a().number,
                    countryId: a().number
                }),
                user: a().objectOf(a().any).isRequired,
                isPartnershipFlow: a().bool,
                toastDetails: a().shape({
                    show: a().bool,
                    text: a().string,
                    type: a().string,
                    align: a().string
                }).isRequired,
                removeToast: a().func.isRequired,
                loginModalLocale: a().objectOf(a().string),
                isLoggedIn: a().bool,
                fpaVisible: a().bool,
                isBot: a().number,
                pageConfig: k.UA,
                trackingDataLogin: a().objectOf(a().any),
                showOpenAppModalV2: a().bool,
                showOpenAppModalV3: a().bool,
                o2CheckoutFlow: a().bool,
                showOrderFlowNavbar: a().bool,
                useAuthSDK: a().bool
            }, ie.defaultProps = {
                location: {
                    cityName: "",
                    countryName: ""
                },
                loginModalLocale: {},
                isPartnershipFlow: !1,
                isLoggedIn: !1,
                fpaVisible: !1,
                isBot: 0,
                pageConfig: k.BO,
                trackingDataLogin: {},
                showOpenAppModalV2: !1,
                showOpenAppModalV3: !1,
                o2CheckoutFlow: !1,
                showOrderFlowNavbar: !1,
                useAuthSDK: !1,
                openModal: g.default
            };
            var oe = function(e) {
                    var n = (0, l.tx)(e.langKeys),
                        t = (0, k.iq)(e),
                        r = (0, w.X)(e),
                        i = (0, y.A)(e),
                        o = (0, k.iq)(e).openAppModalV2,
                        a = (0, k.iq)(e).openAppModalV3,
                        s = (0, d.default)(e, "pages.current", {}),
                        u = (0, I.Ay)((0, d.default)(e, "pages.current.name", ""));
                    return {
                        pageInfo: s,
                        showOpenAppModalV2: Boolean(o) && !o.hideOnPageLoad,
                        showOpenAppModalV3: Boolean(a),
                        isBot: (0, l.T4)(e),
                        isModalOpen: !!(0, d.default)(e, "uiLogic.loginModalOpen", !1),
                        loginType: (0, d.default)(e, "uiLogic.loginType", "login"),
                        location: (0, d.default)(e, "location.currentLocation", {}),
                        user: (0, d.default)(e, "user", {}),
                        isPartnershipFlow: u,
                        toastDetails: (0, d.default)(e, "uiLogic.toastDetails", {}),
                        loginModalLocale: n,
                        isLoggedIn: (0, l.x3)(e),
                        fpaVisible: (0, x.qj)(e),
                        pageConfig: t,
                        trackingDataLogin: r,
                        o2CheckoutFlow: i,
                        showOrderFlowNavbar: !!(0, F.X)((0, d.default)(s, "subType", ""), (0, d.default)(s, "name", ""), u, (0, d.default)(s, "isMobile", !1)),
                        useAuthSDK: (0, R.s)(e)
                    }
                },
                ae = function(e) {
                    return {
                        dispatchTosetCsrfInWindow: function() {
                            return e(O.Ch)
                        },
                        closeModal: function() {
                            var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).success,
                                t = void 0 !== n && n;
                            return e((0, v.lW)({
                                success: t
                            }))
                        },
                        setLoginType: function(n) {
                            return e((0, v.I6)(n))
                        },
                        removeToast: function() {
                            return e((0, v.cQ)())
                        },
                        setUser: function(n) {
                            return e((0, E.lt)(n))
                        },
                        openModal: function() {
                            return e((0, v.ny)())
                        }
                    }
                };
            const se = (0, c.Ng)(oe, ae)((0, i.memo)(ie, l.Dl))
        },
        akXP: (e, n, t) => {
            t.d(n, {
                Ay: () => p,
                dq: () => d,
                uG: () => m
            });
            var r = t("/0+J"),
                i = t("Kq5O"),
                o = t.n(i),
                a = t("IihT"),
                s = t("AdJq"),
                u = t("NN/6"),
                l = t("p99z"),
                c = o().mark(f),
                d = function() {
                    var e = (0, r.A)(o().mark((function e() {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch(s.qie);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.json());
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function(e) {
                    window.csrft = e.csrf || "", e.csrf && (window.csrf_set_time = (new Date).valueOf(), (0, l.B7)())
                };

            function f() {
                var e;
                return o().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (e = {}, (0, l.Lb)()) {
                                n.next = 16;
                                break
                            }
                            return (0, l.az)(), n.prev = 3, n.next = 6, (0, a.T1)(d);
                        case 6:
                            e = n.sent, n.next = 12;
                            break;
                        case 9:
                            n.prev = 9, n.t0 = n.catch(3), e = {
                                csrf: ""
                            };
                        case 12:
                            return n.next = 14, m(e);
                        case 14:
                            return n.next = 16, (0, a.yJ)(e.csrf ? (0, u.tT)() : (0, u.TV)());
                        case 16:
                        case "end":
                            return n.stop()
                    }
                }), c, null, [
                    [3, 9]
                ])
            }
            const p = f
        },
        o3Vs: (e, n, t) => {
            t.d(n, {
                K: () => c
            });
            var r = t("77l8"),
                i = t("zThL"),
                o = t("lXQd"),
                a = t("w6Sm"),
                s = t("iFif"),
                u = t("B8dP"),
                l = t("VHv3"),
                c = function(e, n) {
                    (0, a.Tn)(p(e, n)), (0, a.Gh)(p(e, n)), (0, a.EK)(p(e, n)), (0, a.S_)(p(e, n)), (0, a.NB)(p(e, n))
                },
                d = "downlink",
                m = "effectiveType",
                f = "DATA NOT AVAILABLE",
                p = function(e, n) {
                    return function(t) {
                        var a = t.name,
                            c = t.value,
                            p = c ? (c / 1e3).toFixed(3) : 0;
                        (0, u.E)((0, r.A)({
                            name: a,
                            value: p,
                            pageName: e,
                            platform: n ? s.i9.MOBILE : s.i9.DESKTOP,
                            appType: (0, l.A)(e)
                        }, function() {
                            if ("undefined" != typeof window) {
                                var e = (0, o.default)(window, "navigator.connection");
                                return (0, i.A)((0, i.A)({}, d, (0, o.default)(e, d, f)), m, (0, o.default)(e, m, f))
                            }
                            return {}
                        }()))
                    }
                }
        },
        "Z+Ae": (e, n, t) => {
            t.d(n, {
                A: () => s
            });
            var r, i = t("RlfA"),
                o = t("vOnD"),
                a = t("XEPA");
            const s = o.default.div(r || (r = (0, i.A)(["\n  box-sizing: border-box;\n  min-width: 0;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), a.xe, a.yW, a.Zp, a.pn, a.G1, a.Il, a.PQ, a.r7, a.Tp, a.Vg, a.T_)
        },
        ia77: (e, n, t) => {
            t.d(n, {
                A: () => r.A
            });
            var r = t("Z+Ae")
        },
        "F/co": (e, n, t) => {
            t.d(n, {
                A: () => s
            });
            var r, i = t("RlfA"),
                o = t("vOnD"),
                a = t("Z+Ae");
            const s = (0, o.default)(a.A)(r || (r = (0, i.A)(["\n  display: flex;\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"])), (function(e) {
                var n = e.flexDirection;
                return "flex-direction: ".concat(void 0 === n ? "row" : n)
            }), (function(e) {
                var n = e.justifyContent;
                return "justify-content: ".concat(void 0 === n ? "start" : n)
            }), (function(e) {
                var n = e.alignItems;
                return "align-items: ".concat(void 0 === n ? "start" : n)
            }), (function(e) {
                var n = e.gap;
                return "gap: ".concat(n)
            }))
        },
        "45g5": (e, n, t) => {
            t.d(n, {
                $Q: () => h,
                $x: () => o,
                AC: () => oe,
                AY: () => C,
                Bb: () => j,
                Bn: () => L,
                Cn: () => $,
                EO: () => D,
                EV: () => te,
                F1: () => O,
                F3: () => Q,
                GE: () => ie,
                H$: () => T,
                HD: () => X,
                HK: () => f,
                I1: () => k,
                Jf: () => J,
                KM: () => i,
                KS: () => Y,
                KW: () => G,
                L: () => v,
                LX: () => a,
                Ln: () => l,
                Lx: () => V,
                Mg: () => Z,
                O8: () => y,
                Oh: () => P,
                PU: () => p,
                Pf: () => A,
                QJ: () => z,
                RS: () => N,
                S2: () => H,
                SF: () => ne,
                SP: () => m,
                Si: () => S,
                T7: () => r,
                ZM: () => re,
                bT: () => R,
                cY: () => I,
                e: () => x,
                g$: () => w,
                iR: () => M,
                ii: () => g,
                jE: () => b,
                jS: () => ee,
                lq: () => d,
                lr: () => c,
                mT: () => K,
                o2: () => B,
                pC: () => _,
                qd: () => F,
                qp: () => u,
                rm: () => E,
                sh: () => U,
                vj: () => q,
                x3: () => s,
                zs: () => W
            });
            var r = "RES_PAGE_LEFT_HEADER",
                i = "RES_PAGE_RIGHT_HEADER",
                o = "RES_PAGE_FOOTER",
                a = "RES_PAGE_STICKY",
                s = "RES_PAGE_IN_CONTENT_1",
                u = "RES_PAGE_IN_CONTENT_2",
                l = "RES_PAGE_IN_CONTENT_3",
                c = "RES_PAGE_HEADER",
                d = "RES_MENU_PAGE_FOOTER",
                m = "RES_GALLERY_BEFORE_PHOTOS",
                f = "RES_OVERVIEW_HEADER",
                p = "RES_MENU_PAGE_HEADER",
                A = "RES_PHOTOS_PAGE_HEADER",
                h = "SEARCH_PAGE_HEADER",
                g = "SEARCH_PAGE_RIGHT_HEADER",
                v = "SEARCH_PAGE_IN_CONTENT",
                E = "COLLECTIONS_FEATURED_HEADER",
                _ = "COLLECTIONS_FEATURED_FOOTER",
                y = "COLLECTIONS_FEATURED_RIGHT_HEADER",
                b = "COLLECTIONS_ME_HEADER",
                T = "COLLECTIONS_ME_FOOTER",
                S = "COLLECTIONS_ME_RIGHT_HEADER",
                I = "COLLECTIONS_BOOKMARKED_HEADER",
                w = "COLLECTIONS_BOOKMARKED_FOOTER",
                R = "COLLECTIONS_BOOKMARKED_RIGHT_HEADER",
                N = "COLLECTIONS_SINGLE_HEADER",
                O = "COLLECTIONS_SINGLE_FOOTER",
                C = "COLLECTIONS_SINGLE_RIGHT_HEADER",
                x = "USER_FOOD_JOURNEY_HEADER",
                M = "USER_FOOD_JOURNEY_FOOTER",
                L = "USER_FOOD_JOURNEY_RIGHT_HEADER",
                P = "USER_FOOD_JOURNEY_STICKY",
                D = "USER_PHOTOS_HEADER",
                k = "USER_PHOTOS_FOOTER",
                V = "USER_PHOTOS_RIGHT_HEADER",
                U = "USER_PHOTOS_STICKY",
                F = "USER_FOLLOWERS_HEADER",
                G = "USER_FOLLOWERS_FOOTER",
                q = "USER_FOLLOWERS_RIGHT_HEADER",
                H = "USER_FOLLOWERS_STICKY",
                z = "USER_RECENTLY_VIEWED_HEADER",
                B = "USER_RECENTLY_VIEWED_FOOTER",
                j = "USER_RECENTLY_VIEWED_RIGHT_HEADER",
                K = "USER_RECENTLY_VIEWED_STICKY",
                Y = "USER_REVIEWS_HEADER",
                W = "USER_REVIEWS_FOOTER",
                J = "USER_REVIEWS_RIGHT_HEADER",
                Z = "USER_REVIEWS_STICKY",
                X = "USER_BLOG_HEADER",
                Q = "USER_BLOG_FOOTER",
                $ = "USER_BLOG_RIGHT_HEADER",
                ee = "USER_BLOG_STICKY",
                ne = "USER_BOOKING_HEADER",
                te = "USER_BOOKING_FOOTER",
                re = "USER_BOOKING_RIGHT_HEADER",
                ie = "USER_BOOKING_STICKY",
                oe = "CITY_PAGE_STICKY"
        },
        V3te: (e, n, t) => {
            t.d(n, {
                So: () => o,
                jd: () => r,
                lS: () => i
            });
            var r = "primary",
                i = "secondary",
                o = "network status"
        },
        "2luK": (e, n, t) => {
            t.d(n, {
                A: () => I
            });
            var r = t("zThL"),
                i = t("lHa8"),
                o = t("9GJC"),
                a = t("/TPN"),
                s = t("MJVv"),
                u = t("LP7x"),
                l = t("VAjR"),
                c = t("89BT"),
                d = t("ba8d"),
                m, f = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Sneakpeek"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(2550), t.e(276), t.e(6707)]).then(t.bind(t, "pwcR"))
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
                        return "pwcR"
                    }
                }),
                p = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-HygieneRatings"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(2719).then(t.bind(t, "0CAv"))
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
                        return "0CAv"
                    }
                }),
                A = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-HygieneRatings-FAQ"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(1328).then(t.bind(t, "Enb7"))
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
                        return "Enb7"
                    }
                }),
                h = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Gold"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(276), t.e(8525), t.e(1243)]).then(t.bind(t, "q1Ou"))
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
                        return "q1Ou"
                    }
                }),
                g = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Advertise"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(276), t.e(999), t.e(2200), t.e(8525), t.e(9524)]).then(t.bind(t, "2XAr"))
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
                        return "2XAr"
                    }
                }),
                v = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-FoodAtWork"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(2550), t.e(8525), t.e(1745)]).then(t.bind(t, "R7Wn"))
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
                        return "R7Wn"
                    }
                }),
                E = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Celebrations"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(276), t.e(9910)]).then(t.bind(t, "MYPI"))
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
                        return "MYPI"
                    }
                }),
                _ = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Celebrations-Success"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(2331).then(t.bind(t, "VK6u"))
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
                        return "VK6u"
                    }
                }),
                y = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Work"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(5266).then(t.bind(t, "xMSK"))
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
                        return "xMSK"
                    }
                }),
                b = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Kitchen"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(2550), t.e(1888), t.e(1770), t.e(8), t.e(276), t.e(999), t.e(4983), t.e(8239)]).then(t.bind(t, "5Qqk"))
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
                        return "5Qqk"
                    }
                }),
                T = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Kitchen-FAQ"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(9216).then(t.bind(t, "3O1s"))
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
                        return "3O1s"
                    }
                }),
                S = (m = {}, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(m, l.k$, {
                    Component: f,
                    Fallback: s.A
                }), l.KS, {
                    Component: p,
                    Fallback: o.A
                }), l.BV, {
                    Component: A,
                    Fallback: a.A
                }), l.KD, {
                    Component: h,
                    Fallback: u.A
                }), l.$N, {
                    Component: g,
                    Fallback: u.A
                }), l.gl, {
                    Component: v,
                    Fallback: u.A
                }), l.Hc, {
                    Component: E,
                    Fallback: u.A
                }), l.b0, {
                    Component: _
                }), l.OX, {
                    Component: b,
                    Fallback: u.A
                }), l.hG, {
                    Component: T,
                    Fallback: a.A
                }), (0, r.A)((0, r.A)((0, r.A)(m, l.Kj, {
                    Component: y,
                    Fallback: u.A
                }), l.qp, {
                    Component: c.A,
                    Fallback: u.A
                }), l.gB, {
                    Component: d.A,
                    Fallback: u.A
                }));
            const I = S
        },
        esLK: (e, n, t) => {
            t.d(n, {
                A: () => d
            });
            var r = t("zThL"),
                i = t("lHa8"),
                o = t("ePP4"),
                a = t("YrrC"),
                s = t("VAjR"),
                u = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Collections"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(1054), t.e(5317)]).then(t.bind(t, "9Xqo"))
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
                        return "9Xqo"
                    }
                }),
                l = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-CollectionDetails"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(636), t.e(9377), t.e(1054), t.e(1660)]).then(t.bind(t, "RGX+"))
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
                        return "RGX+"
                    }
                }),
                c = (0, r.A)((0, r.A)({}, s.I, {
                    Component: u,
                    Fallback: o.A
                }), s.QQ, {
                    Component: l,
                    Fallback: a.A
                });
            const d = c
        },
        xUPF: (e, n, t) => {
            t.d(n, {
                A: () => c
            });
            var r = t("zThL"),
                i = t("lHa8"),
                o = t("VAjR"),
                a = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-FeedingPhilippines"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7103), t.e(7282), t.e(6179)]).then(t.bind(t, "nz3R"))
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
                        return "nz3R"
                    }
                }),
                s = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-FeedingIndonesia"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7103), t.e(7282), t.e(4327)]).then(t.bind(t, "UdcY"))
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
                        return "UdcY"
                    }
                }),
                u = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-FeedingLebanon"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7103), t.e(7282), t.e(1317)]).then(t.bind(t, "f+bG"))
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
                        return "f+bG"
                    }
                }),
                l = (0, r.A)((0, r.A)((0, r.A)({}, o.zs, {
                    Component: a
                }), o._G, {
                    Component: s
                }), o.BQ, {
                    Component: u
                });
            const c = l
        },
        rF9Q: (e, n, t) => {
            t.d(n, {
                A: () => _
            });
            var r = t("zThL"),
                i = t("77l8"),
                o = t("lHa8"),
                a = t("2luK"),
                s = t("esLK"),
                u = t("xUPF"),
                l = t("K25a"),
                c = t("R5Yw"),
                d = t("HG4S"),
                m = t("hNla"),
                f = t("PBAe"),
                p = t("YQpW"),
                A = t("ETvf"),
                h = t("HeRo"),
                g = t("VAjR"),
                v = (0, o.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-PageNotFound"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(1658).then(t.bind(t, "CnTS"))
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
                        return "CnTS"
                    }
                }),
                E = (0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)({}, a.A), c.A), d.A), s.A), u.A), l.A), m.A), f.A), p.A), A.A), h.A), {}, (0, r.A)({}, g.p2, {
                    Component: v
                }));
            const _ = E
        },
        K25a: (e, n, t) => {
            t.d(n, {
                A: () => D
            });
            var r = t("zThL"),
                i = t("lHa8"),
                o = t("FaQd"),
                a = t("Vyl6"),
                s = t("VAjR"),
                u, l = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-LoyaltyQRReader"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7284), t.e(7602), t.e(7944)]).then(t.bind(t, "Toui"))
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
                        return "Toui"
                    }
                }),
                c = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-DeliveryCities"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7284), t.e(5529), t.e(7602), t.e(5367), t.e(7079), t.e(5494), t.e(1303)]).then(t.bind(t, "1l9s"))
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
                        return "1l9s"
                    }
                }),
                d = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Awards"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(6096).then(t.bind(t, "CkDU"))
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
                        return "CkDU"
                    }
                }),
                m = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-SauceBlog"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(2550), t.e(5354), t.e(1657), t.e(276), t.e(5647), t.e(7963)]).then(t.bind(t, "WDG3"))
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
                        return "WDG3"
                    }
                }),
                f = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Gift"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(2124).then(t.bind(t, "Iu+W"))
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
                        return "Iu+W"
                    }
                }),
                p = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Contests"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(3969)]).then(t.bind(t, "HoR+"))
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
                        return "HoR+"
                    }
                }),
                A = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Country"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(1308).then(t.bind(t, "EfTu"))
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
                        return "EfTu"
                    }
                }),
                h = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-PostBook"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(3687).then(t.bind(t, "SNuD"))
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
                        return "SNuD"
                    }
                }),
                g = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-TalentHub"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7477), t.e(4069)]).then(t.bind(t, "2UFV"))
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
                        return "2UFV"
                    }
                }),
                v = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-CupcakeGift"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(3732).then(t.bind(t, "JH4w"))
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
                        return "JH4w"
                    }
                }),
                E = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Bloggers"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(8451).then(t.bind(t, "BYvW"))
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
                        return "BYvW"
                    }
                }),
                _ = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-FinancialInfo"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(5787).then(t.bind(t, "z+J2"))
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
                        return "z+J2"
                    }
                }),
                y = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-InvestorRelationsV2"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(6358).then(t.bind(t, "raHC"))
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
                        return "raHC"
                    }
                }),
                b = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Neighbourhoods"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(6532).then(t.bind(t, "7d4Z"))
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
                        return "7d4Z"
                    }
                }),
                T = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ResAdminToolkit"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(8353).then(t.bind(t, "02bI"))
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
                        return "02bI"
                    }
                }),
                S = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-IndividualReview"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(7391).then(t.bind(t, "Kllf"))
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
                        return "Kllf"
                    }
                }),
                I = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Photo"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(6074).then(t.bind(t, "mLYs"))
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
                        return "mLYs"
                    }
                }),
                w = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-OpenGiftCard"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(9918).then(t.bind(t, "ETEt"))
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
                        return "ETEt"
                    }
                }),
                R = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZopayStoryUploader"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(1751), t.e(5329), t.e(8282), t.e(9324)]).then(t.bind(t, "uj4C"))
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
                        return "uj4C"
                    }
                }),
                N = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-CreatingVibeBlog"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(1751), t.e(5329), t.e(8282), t.e(9127)]).then(t.bind(t, "RrVk"))
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
                        return "RrVk"
                    }
                }),
                O = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-NewYearPartiesTown"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(9957).then(t.bind(t, "8KW3"))
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
                        return "8KW3"
                    }
                }),
                C = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-DiningPartnerAppPromotion"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(6005).then(t.bind(t, "nHzC"))
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
                        return "nHzC"
                    }
                }),
                x = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZomatoCarnival"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(2356).then(t.bind(t, "SnhT"))
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
                        return "SnhT"
                    }
                }),
                M = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-IrctcPartnership"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(999), t.e(5511), t.e(2200), t.e(5727)]).then(t.bind(t, "PDCS"))
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
                        return "PDCS"
                    }
                }),
                L = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZomatoGold"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(2664).then(t.bind(t, "kmeu"))
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
                        return "kmeu"
                    }
                }),
                P = (u = {}, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(u, s.o5, {
                    Component: l
                }), s.XL, {
                    Component: c
                }), s.jt, {
                    Component: _
                }), s.tp, {
                    Component: d
                }), s.zR, {
                    Component: m
                }), s.r6, {
                    Component: f
                }), s.iE, {
                    Component: p,
                    Fallback: o.A
                }), s.DH, {
                    Component: A
                }), s.OP, {
                    Component: h,
                    Fallback: a.A
                }), s.$s, {
                    Component: g
                }), (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(u, s.Hi, {
                    Component: v
                }), s.BR, {
                    Component: y
                }), s.Gk, {
                    Component: L,
                    Fallback: null
                }), s.wO, {
                    Component: E
                }), s.Ty, {
                    Component: b
                }), s.Qf, {
                    Component: T
                }), s.NZ, {
                    Component: S
                }), s.Hf, {
                    Component: I
                }), s.xH, {
                    Component: w
                }), s.r9, {
                    Component: R
                }), (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(u, s._F, {
                    Component: N
                }), s.he, {
                    Component: O
                }), s.jx, {
                    Component: C
                }), s.n6, {
                    Component: x
                }), s.Tj, {
                    Component: M
                }));
            const D = P
        },
        R5Yw: (e, n, t) => {
            t.d(n, {
                A: () => b
            });
            var r = t("zThL"),
                i = t("lHa8"),
                o = t("ZysW"),
                a = t("v7Ez"),
                s = t("asmC"),
                u = t("pjMl"),
                l = t("VAjR"),
                c, d = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Restaurant"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(3773), t.e(1510), t.e(2783)]).then(t.bind(t, "qSKw"))
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
                        return "qSKw"
                    }
                }),
                m = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-O2Payment"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(999), t.e(2441), t.e(7789), t.e(5774), t.e(3430), t.e(1679), t.e(3773), t.e(1235), t.e(323), t.e(3757)]).then(t.bind(t, "0Z+i"))
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
                        return "0Z+i"
                    }
                }),
                f = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-PostOrder"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(7789), t.e(5061), t.e(198), t.e(8800)]).then(t.bind(t, "JJzL"))
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
                        return "JJzL"
                    }
                }),
                p = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Search"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(7836), t.e(3773), t.e(7033), t.e(8794), t.e(1666)]).then(t.bind(t, "pH2P"))
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
                        return "pH2P"
                    }
                }),
                A = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-City"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(5993), t.e(999), t.e(7791), t.e(2200), t.e(8794), t.e(1347)]).then(t.bind(t, "7Y/c"))
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
                        return "7Y/c"
                    }
                }),
                h = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Goodbye"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(4311).then(t.bind(t, "AWZx"))
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
                        return "AWZx"
                    }
                }),
                g = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-O2AgentPayment"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(999), t.e(2441), t.e(7789), t.e(5774), t.e(3430), t.e(1679), t.e(3773), t.e(1235), t.e(323), t.e(2967), t.e(6722)]).then(t.bind(t, "o/gJ"))
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
                        return "o/gJ"
                    }
                }),
                v = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "agent-pages-Search"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(7284), t.e(1751), t.e(5329), t.e(276), t.e(8282), t.e(4511), t.e(675), t.e(7602), t.e(5367), t.e(7079), t.e(4607), t.e(7033), t.e(5494), t.e(4472), t.e(2967), t.e(5942)]).then(t.bind(t, "Iyyh"))
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
                        return "Iyyh"
                    }
                }),
                E = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "agent-pages-Dashboard"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(734).then(t.bind(t, "sK5w"))
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
                        return "sK5w"
                    }
                }),
                _ = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-OrderShare"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(2463).then(t.bind(t, "pD1T"))
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
                        return "pD1T"
                    }
                }),
                y = (c = {}, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(c, l.Dn, {
                    Component: p,
                    Fallback: s.A
                }), l.Wt, {
                    Component: d,
                    Fallback: u.A
                }), l.yK, {
                    Component: d,
                    Fallback: u.A
                }), l.RZ, {
                    Component: m,
                    Fallback: a.A
                }), l.k5, {
                    Component: f,
                    Fallback: o.A
                }), l.ix, {
                    Component: m,
                    Fallback: a.A
                }), l.x1, {
                    Component: g,
                    Fallback: a.A
                }), l.Ak, {
                    Component: A
                }), l.mo, {
                    Component: h
                }), l.BZ, {
                    Component: v
                }), (0, r.A)((0, r.A)(c, l.s_, {
                    Component: E
                }), l.pN, {
                    Component: _
                }));
            const b = y
        },
        HG4S: (e, n, t) => {
            t.d(n, {
                A: () => y
            });
            var r = t("zThL"),
                i = t("lHa8"),
                o = t("ZysW"),
                a = t("v7Ez"),
                s = t("pjMl"),
                u = t("xm9o"),
                l = t("VAjR"),
                c = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-Init"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7284), t.e(7602), t.e(7789), t.e(8877)]).then(t.bind(t, "Tb2P"))
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
                        return "Tb2P"
                    }
                }),
                d = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-Search"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(7284), t.e(1751), t.e(5329), t.e(276), t.e(8282), t.e(4511), t.e(7602), t.e(5367), t.e(7789), t.e(4607), t.e(7033), t.e(118), t.e(1509), t.e(5143)]).then(t.bind(t, "uESb"))
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
                        return "uESb"
                    }
                }),
                m = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-Restaurant"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(276), t.e(7789), t.e(5774), t.e(3430), t.e(3773), t.e(1510), t.e(9733), t.e(846)]).then(t.bind(t, "7zNK"))
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
                        return "7zNK"
                    }
                }),
                f = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-O2Payment"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(2441), t.e(5774), t.e(1679), t.e(1235), t.e(1510), t.e(4018)]).then(t.bind(t, "3zgm"))
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
                        return "3zgm"
                    }
                }),
                p = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-User"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(9540), t.e(7789), t.e(5061), t.e(198), t.e(8407), t.e(7850)]).then(t.bind(t, "I3ph"))
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
                        return "I3ph"
                    }
                }),
                A = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-PaymentStatus"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(6957).then(t.bind(t, "8WCf"))
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
                        return "8WCf"
                    }
                }),
                h = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-PostOrder"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(7789), t.e(5061), t.e(198), t.e(1103)]).then(t.bind(t, "vqUz"))
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
                        return "vqUz"
                    }
                }),
                g = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-common-components-ErrorPage"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(3469).then(t.bind(t, "HDi5"))
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
                        return "HDi5"
                    }
                }),
                v = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-User-subpages-Profile"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(3240), t.e(9501)]).then(t.bind(t, "PMOr"))
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
                        return "PMOr"
                    }
                }),
                E = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-PageNotFound"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(1658).then(t.bind(t, "CnTS"))
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
                        return "CnTS"
                    }
                }),
                _ = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, l.fo, {
                    Component: m,
                    Fallback: s.A
                }), l.W2, {
                    Component: f,
                    Fallback: a.A
                }), l.j5, {
                    Component: h,
                    Fallback: o.A
                }), l.eN, {
                    Component: E
                }), l.$G, {
                    Component: p
                }), l.Q1, {
                    Component: d,
                    Fallback: u.A
                }), l.uf, {
                    Component: c
                }), l.Z0, {
                    Component: A
                }), l.Xd, {
                    Component: v
                }), l.RC, {
                    Component: g
                });
            const y = _
        },
        hNla: (e, n, t) => {
            t.d(n, {
                A: () => q
            });
            var r = t("zThL"),
                i = t("lHa8"),
                o = t("FaQd"),
                a = t("A+ar"),
                s = t("v3cd"),
                u = t("zbD0"),
                l = t("0S1l"),
                c = t("LP7x"),
                d = t("VAjR"),
                m = t("a+iE"),
                f, p = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-AboutUs"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5354), t.e(1657), t.e(276), t.e(5647), t.e(4629)]).then(t.bind(t, "y5mW"))
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
                        return "y5mW"
                    }
                }),
                A = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-PlanPage"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(1301), t.e(7578), t.e(474)]).then(t.bind(t, "5p9z"))
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
                        return "5p9z"
                    }
                }),
                h = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-DiningPay"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5993), t.e(5661)]).then(t.bind(t, "3K1t"))
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
                        return "3K1t"
                    }
                }),
                g = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-FamilyPlan"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(379).then(t.bind(t, "84aF"))
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
                        return "84aF"
                    }
                }),
                v = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-CareersV2"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(276), t.e(7336)]).then(t.bind(t, "0sPV"))
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
                        return "0sPV"
                    }
                }),
                E = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Intercity"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(185).then(t.bind(t, "c2bI"))
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
                        return "c2bI"
                    }
                }),
                _ = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Contact"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(2418).then(t.bind(t, "OEH3"))
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
                        return "OEH3"
                    }
                }),
                y = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Jobs-AllJobs"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(9397), t.e(6384)]).then(t.bind(t, "vNjx"))
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
                        return "vNjx"
                    }
                }),
                b = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Jobs-Department"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(9397), t.e(2153)]).then(t.bind(t, "YpYL"))
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
                        return "YpYL"
                    }
                }),
                T = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Gold"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(276), t.e(3596)]).then(t.bind(t, "2nr1"))
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
                        return "2nr1"
                    }
                }),
                S = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Beware-Beware"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(3923).then(t.bind(t, "SrLL"))
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
                        return "SrLL"
                    }
                }),
                I = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-DownloadApp"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(999), t.e(2200), t.e(6863)]).then(t.bind(t, "ZcMp"))
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
                        return "ZcMp"
                    }
                }),
                w = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Report"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(7900).then(t.bind(t, "gefg"))
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
                        return "gefg"
                    }
                }),
                R = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-GoldSubscriptionAgreement"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(3325)]).then(t.bind(t, "P15c"))
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
                        return "P15c"
                    }
                }),
                N = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-TNCs-MerchantDeliveryTerms"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(9991), t.e(6112)]).then(t.bind(t, "+Y+J"))
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
                        return "+Y+J"
                    }
                }),
                O = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-TNCs-CsrTerms"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(9991), t.e(5022)]).then(t.bind(t, "vVxz"))
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
                        return "vVxz"
                    }
                }),
                C = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-TNCs-Turkey"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(9991), t.e(2777)]).then(t.bind(t, "m4im"))
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
                        return "m4im"
                    }
                }),
                x = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-COVID"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(3341).then(t.bind(t, "8+xD"))
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
                        return "8+xD"
                    }
                }),
                M = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZoomBackgrounds"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7103), t.e(7070)]).then(t.bind(t, "qQ9L"))
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
                        return "qQ9L"
                    }
                }),
                L = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-MaxSafety"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(6170).then(t.bind(t, "0B19"))
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
                        return "0B19"
                    }
                }),
                P = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Loyalty"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7284), t.e(7910), t.e(7602), t.e(5367), t.e(4057), t.e(4780)]).then(t.bind(t, "IzXw"))
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
                        return "IzXw"
                    }
                }),
                D = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ProPlus"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7284), t.e(999), t.e(7910), t.e(7602), t.e(5367), t.e(4057), t.e(2200), t.e(1719)]).then(t.bind(t, "+MdW"))
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
                        return "+MdW"
                    }
                }),
                k = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Jobs-SingleJob"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7738), t.e(6396)]).then(t.bind(t, "xqxM"))
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
                        return "xqxM"
                    }
                }),
                V = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Login"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(2073).then(t.bind(t, "cEIJ"))
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
                        return "cEIJ"
                    }
                }),
                U = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ProPage"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(999), t.e(669), t.e(7626)]).then(t.bind(t, "Kjzw"))
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
                        return "Kjzw"
                    }
                }),
                F = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZomatoGoldNoon"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(7284), t.e(7910), t.e(7602), t.e(5367), t.e(4057), t.e(2726)]).then(t.bind(t, "bPUu"))
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
                        return "bPUu"
                    }
                }),
                G = (f = {}, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(f, d.B2, {
                    Component: k
                }), d.OZ, {
                    Component: p,
                    Fallback: o.A
                }), d.k3, {
                    Component: A
                }), d.bV, {
                    Component: h
                }), d.fX, {
                    Component: g
                }), d.LI, {
                    Component: v,
                    Fallback: a.A
                }), d.iZ, {
                    Component: E
                }), d.Dc, {
                    Component: _
                }), d.Xw, {
                    Component: b
                }), d.Mn, {
                    Component: y,
                    Fallback: s.A
                }), (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(f, d.fl, {
                    Component: S,
                    Fallback: c.A
                }), d.x8, {
                    Component: I
                }), d.ri, {
                    Component: w
                }), d.Sl, {
                    Component: R
                }), d.wL, {
                    Component: x
                }), d.dX, {
                    Component: T,
                    Fallback: T
                }), d.E3, {
                    Component: M
                }), d.O3, {
                    Component: N
                }), d.R$, {
                    Component: O
                }), d.Hz, {
                    Component: C,
                    Fallback: u.A
                }), (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(f, d.gk, {
                    Component: L,
                    Fallback: l.A
                }), d.i0, {
                    Component: P
                }), d.RM, {
                    Component: D
                }), d.m0, {
                    Component: V
                }), d.Kv, {
                    Component: U
                }), d.hV, {
                    Component: F
                }), d.Xy, {
                    Component: m.A
                }));
            const q = G
        },
        PBAe: (e, n, t) => {
            t.d(n, {
                A: () => l
            });
            var r = t("zThL"),
                i = t("lHa8"),
                o = t("VAjR"),
                a = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-User"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(7789), t.e(198), t.e(7033), t.e(7448)]).then(t.bind(t, "FhIK"))
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
                        return "FhIK"
                    }
                }),
                s = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-UserSettings"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(5036).then(t.bind(t, "a80T"))
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
                        return "a80T"
                    }
                }),
                u = (0, r.A)((0, r.A)((0, r.A)({}, o.m3, {
                    Component: a
                }), o.WT, {
                    Component: s
                }), o.jQ, {
                    Component: a
                });
            const l = u
        },
        ETvf: (e, n, t) => {
            t.d(n, {
                A: () => d
            });
            var r = t("zThL"),
                i = t("lHa8"),
                o = t("VAjR"),
                a = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZLive-ZLiveHomePage"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(276), t.e(9237), t.e(9817)]).then(t.bind(t, "ZoNW"))
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
                        return "ZoNW"
                    }
                }),
                s = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZLive-ZLiveCrystal"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(276), t.e(9237), t.e(4925)]).then(t.bind(t, "+ACe"))
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
                        return "+ACe"
                    }
                }),
                u = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZLive-ZLiveListing"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(276), t.e(9237), t.e(5311)]).then(t.bind(t, "sKfN"))
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
                        return "sKfN"
                    }
                }),
                l = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZLive-ZLiveCheckout"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5354), t.e(1657), t.e(6964), t.e(276), t.e(5647), t.e(8071), t.e(9237), t.e(1157)]).then(t.bind(t, "MoDv"))
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
                        return "MoDv"
                    }
                }),
                c = (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.nK, {
                    Component: a
                }), o.Iz, {
                    Component: u
                }), o.mO, {
                    Component: l
                }), o.Qg, {
                    Component: s
                });
            const d = c
        },
        HeRo: (e, n, t) => {
            t.d(n, {
                A: () => d
            });
            var r = t("zThL"),
                i = t("lHa8"),
                o = t("VAjR"),
                a = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZLiveV2-pages-details-ZLiveV2DetailsPageContainer"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5993), t.e(8174), t.e(276), t.e(1874), t.e(2826), t.e(5352), t.e(9795)]).then(t.bind(t, "qHd3"))
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
                        return "qHd3"
                    }
                }),
                s = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZLiveV2-pages-cart-ZLiveV2CartPageContainer"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5993), t.e(8174), t.e(1874), t.e(2826), t.e(4573)]).then(t.bind(t, "WQtG"))
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
                        return "WQtG"
                    }
                }),
                u = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZLiveV2-pages-payments-ZLiveV2PaymentsPageContainer"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5993), t.e(6964), t.e(1874), t.e(2826), t.e(217)]).then(t.bind(t, "unXt"))
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
                        return "unXt"
                    }
                }),
                l = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZLiveV2-pages-tickets-ZLiveV2TicketsPageContainer"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5993), t.e(1874), t.e(5352), t.e(4565)]).then(t.bind(t, "hl40"))
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
                        return "hl40"
                    }
                }),
                c = (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.VO, {
                    Component: a
                }), o.tV, {
                    Component: s
                }), o.iV, {
                    Component: u
                }), o.sU, {
                    Component: l
                });
            const d = c
        },
        YQpW: (e, n, t) => {
            t.d(n, {
                A: () => p
            });
            var r = t("zThL"),
                i = t("lHa8"),
                o = t("xTcC"),
                a = t("VAjR"),
                s = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Zomaland"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(8598)]).then(t.bind(t, "jRGV"))
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
                        return "jRGV"
                    }
                }),
                u = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Zomaland-ZomalandTicketsPage"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5067), t.e(999), t.e(3703), t.e(5519), t.e(7254), t.e(5113), t.e(6064)]).then(t.bind(t, "o1ah"))
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
                        return "o1ah"
                    }
                }),
                l = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Zomaland-ZomalandCart"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(999), t.e(3703), t.e(5519), t.e(9573)]).then(t.bind(t, "HJrp"))
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
                        return "HJrp"
                    }
                }),
                c = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Zomaland-ZomalandGallery"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(5357), t.e(999), t.e(3703), t.e(2928), t.e(5519), t.e(5113), t.e(3199)]).then(t.bind(t, "rgda"))
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
                        return "rgda"
                    }
                }),
                d = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Zomaland-ZomalandOrdersPage"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(6553), t.e(999), t.e(3703), t.e(5519), t.e(2773), t.e(5005)]).then(t.bind(t, "EmbV"))
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
                        return "EmbV"
                    }
                }),
                m = (0, i.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Zomaland-Zomalandv4-Faq"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(194).then(t.bind(t, "e0Ta"))
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
                        return "e0Ta"
                    }
                }),
                f = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, a.Pb, {
                    Component: s,
                    Fallback: o.A
                }), a.gS, {
                    Component: s,
                    Fallback: o.A
                }), a.VX, {
                    Component: u,
                    Fallback: o.A
                }), a.Ul, {
                    Component: c,
                    Fallback: o.A
                }), a.gD, {
                    Component: l,
                    Fallback: o.A
                }), a.TU, {
                    Component: d,
                    Fallback: o.A
                }), a.ky, {
                    Component: m
                });
            const p = f
        },
        kHo1: (e, n, t) => {
            t.d(n, {
                FD: () => u,
                Kb: () => r,
                S3: () => a,
                _Y: () => l,
                fI: () => o,
                kj: () => s,
                m2: () => i
            });
            var r = "development",
                i = "sauce",
                o = "munchies",
                a = "login",
                s = {
                    ACTION: "action",
                    REDIRECT_URL: "redirect_url"
                },
                u = "login",
                l = /^https:\/\/(?:[^.]+\.)?eks\.zdev\.net(\/|$)|^https:\/\/(?:www\.)?zomato\.com(\/|$)|^https:\/\/admin\.zomans\.com(\/|$)/
        },
        VAjR: (e, n, t) => {
            t.d(n, {
                $G: () => dn,
                $N: () => _,
                $s: () => Xe,
                Ak: () => Ge,
                B2: () => d,
                BQ: () => Ye,
                BR: () => gn,
                BV: () => v,
                BZ: () => qn,
                CK: () => ae,
                Cr: () => H,
                DH: () => Ve,
                Dc: () => l,
                Dn: () => Ce,
                E$: () => Pe,
                E3: () => Be,
                EG: () => k,
                EZ: () => Le,
                FI: () => Me,
                FP: () => he,
                G_: () => be,
                Gk: () => ze,
                HF: () => In,
                Hc: () => T,
                Hf: () => Mn,
                Hi: () => en,
                Hz: () => Ze,
                I: () => ne,
                IN: () => U,
                IT: () => de,
                Iz: () => Qn,
                J0: () => x,
                KD: () => E,
                KS: () => g,
                Kf: () => ue,
                Kj: () => Nn,
                Kv: () => Pn,
                L2: () => _e,
                LA: () => ce,
                LI: () => u,
                Mn: () => c,
                ND: () => O,
                NZ: () => xn,
                Np: () => le,
                O3: () => We,
                OH: () => On,
                OP: () => Fe,
                OX: () => I,
                OZ: () => f,
                Pb: () => W,
                Pu: () => i,
                Q1: () => sn,
                QQ: () => te,
                Qf: () => Bn,
                Qg: () => et,
                Qm: () => fe,
                Qn: () => P,
                R$: () => Je,
                R1: () => Sn,
                RC: () => on,
                RI: () => G,
                RJ: () => Ee,
                RK: () => vn,
                RM: () => Rn,
                RZ: () => z,
                Sl: () => ke,
                T2: () => Ue,
                TJ: () => _n,
                TU: () => $,
                Tj: () => tt,
                Ty: () => Cn,
                U2: () => pe,
                UU: () => ye,
                Ul: () => Q,
                VO: () => it,
                VX: () => Z,
                W2: () => un,
                WT: () => xe,
                WV: () => En,
                We: () => we,
                Wt: () => s,
                XL: () => p,
                Xd: () => An,
                Xw: () => m,
                Xy: () => rt,
                YH: () => ve,
                YP: () => Ne,
                Z0: () => cn,
                ZB: () => L,
                Zk: () => $e,
                _F: () => Yn,
                _G: () => Ke,
                _b: () => yn,
                b$: () => Qe,
                b0: () => S,
                bV: () => C,
                bX: () => Oe,
                d: () => Se,
                dX: () => He,
                eA: () => N,
                eN: () => pn,
                fX: () => tn,
                fl: () => R,
                fo: () => ln,
                gB: () => Un,
                gD: () => X,
                gS: () => J,
                gk: () => hn,
                gl: () => b,
                hG: () => w,
                hV: () => nt,
                he: () => Wn,
                i0: () => wn,
                iE: () => ie,
                iV: () => at,
                iZ: () => kn,
                ix: () => B,
                j5: () => fn,
                jQ: () => Re,
                jt: () => rn,
                jx: () => Jn,
                k$: () => h,
                k3: () => nn,
                k5: () => j,
                kd: () => se,
                ky: () => ee,
                l4: () => me,
                m0: () => jn,
                m3: () => oe,
                mA: () => Ie,
                mO: () => $n,
                mo: () => Y,
                n6: () => Zn,
                nK: () => Xn,
                o5: () => Fn,
                p2: () => r,
                pN: () => Dn,
                qY: () => q,
                qc: () => M,
                qp: () => Vn,
                r6: () => K,
                r9: () => Kn,
                rX: () => a,
                rY: () => bn,
                ri: () => De,
                s3: () => V,
                s9: () => mn,
                sU: () => st,
                s_: () => zn,
                sc: () => F,
                sp: () => ge,
                tV: () => ot,
                tp: () => A,
                uf: () => an,
                uw: () => Ae,
                wL: () => qe,
                wO: () => D,
                x1: () => Gn,
                x8: () => re,
                xH: () => Ln,
                xZ: () => Te,
                yK: () => Hn,
                yZ: () => o,
                zR: () => y,
                zU: () => Tn,
                zs: () => je
            });
            var r = "404",
                i = "business",
                o = "home",
                a = "developer",
                s = "restaurant",
                u = "careers",
                l = "contact",
                c = "alljobs",
                d = "single-job",
                m = "department",
                f = "who-we-are",
                p = "delivery-cities",
                A = "awards",
                h = "sneakpeek",
                g = "hygiene",
                v = "hygiene-faq",
                E = "gold-business",
                _ = "advertise-business",
                y = "sauce",
                b = "food-business",
                T = "celebrations",
                S = "celebrations-success",
                I = "kitchen-business",
                w = "kitchen-business-faq",
                R = "beware-of-fraud",
                N = "booking",
                O = "order",
                C = "dining-pay",
                x = "pay",
                M = "dote-pdp",
                L = "dote-home",
                P = "faq",
                D = "bloggers",
                k = "dote-web-payments",
                V = "takeaway",
                U = "dailyMenu",
                F = "menu",
                G = "photos",
                q = "events",
                H = "reviews",
                z = "web-o2-payment",
                B = "web-takeaway-payment",
                j = "web-o2-post-order",
                K = "gift-receive",
                Y = "goodbye",
                W = "zomaland",
                J = "zmland/pre-register.php",
                Z = "zomaland_tickets_page",
                X = "zomaland_cart",
                Q = "zomaland_gallery",
                $ = "zomaland_orders_page",
                ee = "zomaland-faq",
                ne = "collections",
                te = "singleCollection",
                re = "app-download",
                ie = "contests",
                oe = "user",
                ae = "foodjourney",
                se = "reviews",
                ue = "photos",
                le = "network",
                ce = "rec-viewed",
                de = "favorite",
                me = "ordering",
                fe = "nutrition-orders",
                pe = "addresses",
                Ae = "bookmarks",
                he = "bookings",
                ge = "blogs",
                ve = "profile",
                Ee = "credits",
                _e = "managewallets",
                ye = "managecards",
                be = "feedback",
                Te = "emergency",
                Se = "notifications",
                Ie = "cdng-history",
                we = "dining-help",
                Re = "user-search",
                Ne = "search-ordering",
                Oe = "search-profile",
                Ce = "search",
                xe = "user-settings",
                Me = "privacy",
                Le = "notification",
                Pe = "invite",
                De = "report-fraud",
                ke = "gold-subscription-agreement",
                Ve = "country",
                Ue = "booking",
                Fe = "post-book",
                Ge = "city",
                qe = "covid-19",
                He = "gold/index.php",
                ze = "gold",
                Be = "zoom-backgrounds",
                je = "feeding-philippines",
                Ke = "feeding-indonesia",
                Ye = "feeding-lebanon",
                We = "b2b_delivery_tnc_page",
                Je = "CSR_TNC_PAGE",
                Ze = "turkey_ttg_guide",
                Xe = "talent_hub",
                Qe = "restaurant-cdng",
                $e = "scanner",
                en = "cupcake",
                nn = "pro_plan_page_v2",
                tn = "pro-join-family",
                rn = "financial-information",
                on = "error-page",
                an = "partnership-init",
                sn = "partnership-search",
                un = "partnership-web-o2-payment",
                ln = "partnership-restaurant",
                cn = "partnership-payment-status",
                dn = "partnership-user",
                mn = "partnership-ordering",
                fn = "partnership-web-o2-post-order",
                pn = "partnership-404",
                An = "partnership-profile",
                hn = "max-safety",
                gn = "investor-relations",
                vn = "home",
                En = "financials",
                _n = "news-and-events",
                yn = "governance",
                bn = "resources",
                Tn = "esg-initiatives",
                Sn = "microsite",
                In = "board-member",
                wn = "loyalty",
                Rn = "proplus",
                Nn = "zomato-for-work",
                On = "delivery",
                Cn = "neighbourhoods",
                xn = "individual_review",
                Mn = "individual-photo",
                Ln = "open-gift-card",
                Pn = "pro-page",
                Dn = "order-share",
                kn = "intercity",
                Vn = "gift-cards",
                Un = "giftcards-page",
                Fn = "loyalty-qr-mapping-tool",
                Gn = "web-whatsapp-agent-o2-delivery-payments",
                qn = "web-whatsapp-agent-search",
                Hn = "web-whatsapp-agent-restaurant",
                zn = "whatsapp-agent-dashboard",
                Bn = "resInfoTool",
                jn = "login-page",
                Kn = "zopay-story-uploader",
                Yn = "create-vibe",
                Wn = "goout-events-home",
                Jn = "dining-partner-app",
                Zn = "zomato-dining-carnival",
                Xn = "events",
                Qn = "events-details",
                $n = "events-cart",
                et = "events-tickets",
                nt = "zomato-gold-noon-home",
                tt = "irctc-partnership",
                rt = "campaigns",
                it = "zlive-event-details",
                ot = "zlive-event-cart",
                at = "zlive-event-payments",
                st = "zlive-event-tickets"
        },
        AdJq: (e, n, t) => {
            t.d(n, {
                $G4: () => ze,
                Ak8: () => en,
                B6d: () => b,
                B90: () => F,
                BTl: () => $n,
                Bbi: () => rt,
                Bh2: () => Fn,
                C1b: () => l,
                C2G: () => L,
                CBd: () => ee,
                DD$: () => de,
                EIX: () => v,
                F1I: () => f,
                F4N: () => xe,
                FBu: () => Vn,
                FX5: () => re,
                FXb: () => S,
                FfO: () => Je,
                G72: () => fn,
                Gbs: () => tn,
                GdV: () => Qn,
                Gq: () => Xn,
                Gqs: () => Yn,
                GuF: () => _e,
                GvH: () => hn,
                Gxw: () => sn,
                H3U: () => Ce,
                Hc4: () => Ze,
                INv: () => Me,
                Idk: () => Nn,
                JEb: () => O,
                JK8: () => vn,
                JMr: () => it,
                JdI: () => Ye,
                Jwe: () => ln,
                K7Z: () => G,
                KRK: () => rn,
                Ko1: () => w,
                Lah: () => Hn,
                Lg1: () => Q,
                Lgs: () => Cn,
                Lzq: () => kn,
                NOG: () => Tn,
                NTo: () => cn,
                NeO: () => j,
                OjB: () => W,
                Ooq: () => he,
                PJH: () => wn,
                PY5: () => Gn,
                QRo: () => c,
                QXm: () => fe,
                Qo5: () => ge,
                RD4: () => Ln,
                RYZ: () => $,
                Ry6: () => nn,
                SCz: () => An,
                SVI: () => jn,
                SXs: () => Xe,
                Sit: () => X,
                Sn2: () => be,
                TnP: () => ot,
                Tw5: () => nt,
                U3u: () => Qe,
                UAm: () => Y,
                VQE: () => g,
                Vpg: () => R,
                Vxb: () => Le,
                WCs: () => Oe,
                WuM: () => d,
                X2: () => oe,
                X24: () => on,
                XSI: () => U,
                YDT: () => qn,
                YMB: () => gn,
                Yyb: () => ve,
                ZMS: () => Zn,
                Z_2: () => A,
                Zcl: () => $e,
                Zy4: () => pe,
                _30: () => M,
                _OZ: () => N,
                _Rq: () => Un,
                _pb: () => mn,
                _qb: () => yn,
                aYr: () => ae,
                aZ1: () => me,
                axq: () => q,
                b25: () => se,
                c6$: () => We,
                cVT: () => xn,
                cmx: () => dn,
                d$8: () => Pn,
                djB: () => Bn,
                dv7: () => I,
                f52: () => D,
                f9c: () => z,
                fJE: () => Be,
                fbo: () => V,
                fgs: () => Ke,
                g77: () => P,
                hBS: () => Fe,
                hJx: () => bn,
                iEN: () => y,
                iQz: () => Dn,
                iSh: () => Wn,
                iYE: () => k,
                iqH: () => H,
                jWp: () => Sn,
                jYM: () => st,
                k6H: () => Ie,
                knR: () => _,
                kpS: () => Ne,
                kxC: () => _n,
                lJk: () => B,
                lO4: () => Pe,
                mGy: () => E,
                mOx: () => un,
                mnK: () => En,
                n5x: () => p,
                nRK: () => x,
                nbJ: () => tt,
                o$H: () => Te,
                oI0: () => qe,
                oON: () => ce,
                os8: () => at,
                p4: () => we,
                pQ8: () => Mn,
                p_g: () => ue,
                pen: () => Rn,
                q_$: () => m,
                qgd: () => ut,
                qie: () => te,
                qn0: () => Ge,
                qrd: () => Ve,
                r3K: () => Se,
                rZA: () => He,
                rhV: () => Ae,
                rnm: () => pn,
                rrd: () => De,
                rxX: () => In,
                sKp: () => ie,
                sKv: () => ye,
                sdi: () => J,
                seD: () => Re,
                tY0: () => Kn,
                tnL: () => C,
                uOM: () => ne,
                uhU: () => On,
                uh_: () => Ee,
                vSy: () => je,
                vcS: () => et,
                vkb: () => Jn,
                wp9: () => le,
                xF9: () => K,
                xI4: () => zn,
                xY9: () => u,
                xYw: () => h,
                xcW: () => an,
                xcw: () => Ue,
                y$$: () => T,
                zaN: () => Z,
                zuP: () => ke
            });
            var r = t("kHo1"),
                i = "https://www.zomato.com",
                o = "https://www.zomato.com",
                a = "https://api.zomato.com",
                s = "https://admin.zomans.com",
                u = "https://blog.zomato.com";
            "production" === r.Kb ? (i = "https://www.zomato.com", o = "http://localhost:9000", a = "https://zomato-api-gateway.eks.zdev.net", s = "https://admin.zomans.com") : "undefined" != typeof window && (i = window.location.origin);
            var l = "".concat(i, "/webroutes"),
                c = "".concat(i, "/webroutes/blog/posts"),
                d = "".concat(i, "/webroutes/getPage"),
                m = "".concat(i, "/webroutes/restaurant/info"),
                f = "".concat(i, "/webroutes/restaurant/getHygieneDetails"),
                p = "".concat(i, "/webroutes/restaurant/getHyperpureDetails"),
                A = "".concat(i, "/webroutes/careers/filter?"),
                h = "".concat(i, "/webroutes/contact/submitForm"),
                g = "".concat(i, "/webroutes/bloggers/submitForm"),
                v = "".concat(i, "/webroutes/whatsappAgentDashboard/getO2Url"),
                E = "".concat(i, "/webroutes/awards/winners/"),
                _ = "".concat(i, "/webroutes/sauce/tag/"),
                y = "".concat(i, "/webroutes/sauce/subscribe"),
                b = "https://www.zomato.com",
                T = "https://www.zomato.com/business",
                S = "".concat(i, "/webroutes/hygiene"),
                I = "".concat(i, "/webroutes/sneakpeek"),
                w = "".concat(i, "/webroutes/business/submit-contact"),
                R = "".concat(i, "/webroutes/business/submit-contact-celebrations"),
                N = "".concat(i, "/webroutes/share/link"),
                O = "".concat(i, "/webroutes/kitchen/leads"),
                C = "".concat(i, "/webroutes/kitchen/city"),
                x = "".concat(i, "/webroutes/restaurant/rate"),
                M = "".concat(i, "/webroutes/restaurant/userModalInfo"),
                L = "".concat(i, "/webroutes/restaurant/bookmark"),
                P = "".concat(i, "/webroutes/photos/viewGallery"),
                D = "".concat(i, "/webroutes/photos/loadMore"),
                k = "".concat(i, "/webroutes/reviews/switchTab"),
                V = "".concat(i, "/webroutes/reviews/loadMore"),
                U = "".concat(i, "/webroutes/reviews/sortReviews"),
                F = "".concat(i, "/webroutes/reviews/likeReview"),
                G = "".concat(i, "/webroutes/reviews/follow"),
                q = "".concat(i, "/webroutes/reviews/comment/post"),
                H = "".concat(i, "/webroutes/photos/comment/post"),
                z = "".concat(i, "/webroutes/reviews/comment/delete"),
                B = "".concat(i, "/webroutes/restaurant/share"),
                j = "".concat(i, "/webroutes/photos/like"),
                K = "".concat(i, "/webroutes/photos/comment/delete"),
                Y = "".concat(i, "/webroutes/reviews/comment/loadMore"),
                W = "".concat(i, "/webroutes/reviews/comment/loadMoreManagement"),
                J = ("".concat(i, "/php/o2_handler.php"), "".concat(i, "/webroutes/photos/upload")),
                Z = "".concat(i, "/webroutes/photos/submitPhoto"),
                X = "".concat(i, "/webroutes/reviews/suggestTags"),
                Q = "".concat(i, "/webroutes/reviews/post"),
                $ = "".concat(i, "/webroutes/photos/loadMore"),
                ee = "".concat(i, "/webroutes/menu/viewMenu"),
                ne = "".concat(i, "/webroutes/promo/info"),
                te = ("".concat(i, "/webroutes/postOrder/crystalPromoCard"), "".concat(i, "/webroutes/auth/csrf")),
                re = "".concat(i, "/php/o2_handler.php"),
                ie = ("".concat(i, "/webroutes/placeorder"), "".concat(i, "/webroutes/order/cart")),
                oe = "".concat(i, "/payments_service/make_payment_response.php"),
                ae = "".concat(i, "/events/"),
                se = ("".concat(i, "/webroutes/postOrder/getRiderStatus"), "".concat(i, "/webroutes/postOrder/pollCrystalData")),
                ue = "".concat(i, "/webroutes/postOrder/riderVaccineCertificate"),
                le = "".concat(i, "/webroutes/gift/getCrystalData"),
                ce = "".concat(i, "/webroutes/orderShare/getCrystalData"),
                de = "".concat(i, "/php/reportErrorHandler.php"),
                me = "".concat(i, "/webroutes/ads"),
                fe = "".concat(i, "/webroutes/order/address"),
                pe = "".concat(i, "/webroutes/collection/saveCollection"),
                Ae = "".concat(i, "/webroutes/payment/blockedPayment"),
                he = "".concat(i, "/webroutes/order/resOffer"),
                ge = "".concat(i, "/php/chat_auth_handler.php"),
                ve = "".concat(i, "/webroutes/postOrder/requestCallback"),
                Ee = "".concat(i, "/webroutes/postOrder/deliveryRating"),
                _e = "".concat(i, "/webroutes/postOrder/deliveryFeedback"),
                ye = "".concat(i, "/webroutes/postOrder/orderRating"),
                be = "".concat(i, "/webroutes/postOrder/dishRating"),
                Te = "".concat(i, "/webroutes/postOrder/markOrderDelivered"),
                Se = "".concat(i, "/webroutes/user/reviews"),
                Ie = "".concat(i, "/webroutes/dote/orderDetails"),
                we = "".concat(i, "/webroutes/user/orders"),
                Re = "".concat(i, "/webroutes/user/nutritionOrders"),
                Ne = "".concat(i, "/webroutes/user/cdngOrders"),
                Oe = "".concat(i, "/webroutes/user/address"),
                Ce = "".concat(i, "/webroutes/user/photos"),
                xe = "".concat(i, "/webroutes/user/bookmarks"),
                Me = "".concat(i, "/webroutes/user/booking"),
                Le = "".concat(i, "/webroutes/user/network"),
                Pe = "".concat(i, "/webroutes/user/blogs"),
                De = "".concat(i, "/webroutes/order/details"),
                ke = "".concat(i, "/webroutes/order/receipt"),
                Ve = "".concat(i, "/webroutes/user/booking/info"),
                Ue = "".concat(i, "/webroutes/user/coverPhoto"),
                Fe = "".concat(i, "/webroutes/order/markFavorite"),
                Ge = "".concat(i, "/webroutes/user/network"),
                qe = "".concat(i, "/webroutes/user/profilePic"),
                He = "".concat(i, "/webroutes/user/deleteProfilePic"),
                ze = "".concat(i, "/webroutes/user/editProfile"),
                Be = "".concat(i, "/webroutes/order/deleteAddress"),
                je = "".concat(i, "/webroutes/order/valid"),
                Ke = "".concat(i, "/webroutes/location/search"),
                Ye = "".concat(i, "/webroutes/reviews/delete"),
                We = ("".concat(i, "/webroutes/user/notifications"), "".concat(i, "/webroutes/user/deleteAccount")),
                Je = "".concat(i, "/webroutes/zoomBackgrounds/downloadImage"),
                Ze = i,
                Xe = s,
                Qe = "https://external.zomans.com",
                $e = "".concat(i, "/webroutes/order/autoVerifyPhone"),
                en = "".concat(i, "/webroutes/user/auth/verification/init"),
                nn = "".concat(i, "/gw/internal/auth/validate"),
                tn = ("".concat(i, "/webroutes/contactlessDining/submitLeads"), "".concat(i, "/webroutes/payment/zpaykitCode")),
                rn = "".concat(o),
                on = "".concat(i, "/webroutes/zomaland/ticket-history"),
                an = ("".concat(i, "/ajax_handlers/zomaland/pre_register.php"), "".concat(i, "/webroutes/zomaland/submit-contact"), "".concat(i, "/webroutes/zomaland/get-order")),
                sn = "".concat(i, "/webroutes/zomaland/cancel-ticket"),
                un = "".concat(i, "/php/zomaland/make_payment.php"),
                ln = "".concat(i, "/php/zomaland/payment_handler.php"),
                cn = "".concat(i, "/webroutes/contest/vote"),
                dn = "".concat(i, "/webroutes/business/report-fraud"),
                mn = "".concat(i, "/webroutes/location/get"),
                fn = "".concat(i, "/webroutes/location/locationGeoData"),
                pn = "".concat(i, "/webapi/searchapi.php"),
                An = ("".concat(i, "/webapi/handlers/Search/index.php"), "".concat(i, "/webroutes/location/search")),
                hn = "".concat(i, "/webroutes/search/autoSuggest"),
                gn = "".concat(i, "/webroutes/search/home"),
                vn = "".concat(i, "/webroutes/search/applyFilter"),
                En = "".concat(i, "/webroutes/book/checkPhoneVerification"),
                _n = "".concat(i, "/webroutes/book/verifyPhone"),
                yn = "".concat(i, "/webroutes/book/makeBooking"),
                bn = "".concat(i, "/webroutes/book/modifyBooking"),
                Tn = "".concat(i, "/webroutes/book/getTimeSlots"),
                Sn = "".concat(i, "/webroutes/book/cancelBooking"),
                In = ("".concat(i, "/webroutes/feeding/getTotalAmount"), "".concat(i, "/webroutes/home/quickLinks")),
                wn = "".concat(i, "/webroutes/cupcake/register"),
                Rn = ("".concat(i, "/webroutes/dote/home"), "".concat(i, "/webroutes/dote/cart"), "".concat(i, "/webroutes/dote/address")),
                Nn = ("".concat(i, "/webroutes/dote/placeOrder"), "".concat(i, "/webroutes/loyalty/submit-contact")),
                On = ("".concat(i, "/webroutes/cdng/fetchQRData"), "".concat(i, "/webroutes/postCdng/getOrderDetails")),
                Cn = ("".concat(i, "/webroutes/cdng/reviewOrder"), "".concat(i, "/webroutes/cdng/sendOrder"), "".concat(i, "/webroutes/cdng/callServer"), "".concat(i, "/webroutes/cdng/getCallServerState"), "".concat(i, "/webroutes/cdng/getDiningCart"), "".concat(i, "/webroutes/cdng/makePayment")),
                xn = ("".concat(i, "/webroutes/cdng/getTransactionStatus"), "".concat(i, "/webroutes/cdng/invalidateUserVisit"), "".concat(i, "/webroutes/partnerships/validateUser")),
                Mn = "".concat(i, "/webroutes/partnerships/loginV2"),
                Ln = "".concat(i, "/webroutes/home/o2quickLinks"),
                Pn = "".concat(i, "/webroutes/partnerships/verify-payment-status"),
                Dn = "".concat(i, "/webroutes/partnerships/complete-payment"),
                kn = "".concat(a, "/gw/web/user/notification_preferences"),
                Vn = "".concat(i, "/webroutes/loyaltyqrscan/getResList"),
                Un = "".concat(i, "/webroutes/loyaltyqrscan/mapQrToRes"),
                Fn = "".concat(i, "/webroutes/loyaltyqrscan/unmapQR"),
                Gn = "".concat(i, "/webroutes/loyaltyqrscan/validateQR"),
                qn = "".concat(i, "/webroutes/payment/verifyPayment"),
                Hn = "".concat(i, "/webroutes/investorRelations/newsletterEmails/insert"),
                zn = "".concat(a, "/gw/stories/community/get"),
                Bn = "".concat(a, "/gw/stories/community/add"),
                jn = "".concat(a, "/alicloud-upload/initiate_transformation"),
                Kn = "".concat(a, "/alicloud-upload/get_transformation_progress"),
                Yn = "".concat(a, "/gw/uploads/presigned-url"),
                Wn = "".concat(a, "/gw/stories/community/is-authorised"),
                Jn = "".concat(i, "/gw/internal/auth/callback"),
                Zn = "".concat(i, "/gw/internal/auth/logout"),
                Xn = "".concat(a, "/v2/get_masked_number.json"),
                Qn = "".concat(u, "/api/fetch"),
                $n = "".concat(i, "/webroutes/zlive/buildCart"),
                et = "".concat(i, "/webroutes/zlive/bookTickets"),
                nt = "".concat(i, "/webroutes/zlive/paymentResponse"),
                tt = "".concat(a, "/dining-gw/consumer/web/tr/slots"),
                rt = "".concat(a, "/dining-gw/consumer/web/cart/get"),
                it = "".concat(a, "/dining-gw/consumer/web/cart/checkout"),
                ot = "".concat(a, "/dining-gw/consumer/web/order/details"),
                at = "".concat(a, "/dining-gw/consumer/web/order/cancel"),
                st = "".concat(a, "/dining-gw/consumer/web/upcoming-booking/get"),
                ut = "".concat(a, "/dining-gw/consumer/web/tr/order-history")
        },
        "7wzN": (e, n, t) => {
            t.d(n, {
                BL: () => s,
                CF: () => a,
                Pu: () => r,
                cP: () => o,
                zQ: () => i
            });
            var r = {
                    UNSPECIFIED: "BUISNESS_TYPE_UNSPECIFIED",
                    O2: "BUISNESS_TYPE_O2",
                    DINING: "BUISNESS_TYPE_DINING",
                    LIVE: "BUISNESS_TYPE_LIVE"
                },
                i = {
                    UNSPECIFIED: "ENTITY_TYPE_UNSPECIFIED",
                    RESTAURANT: "ENTITY_TYPE_RESTAURANT",
                    CITY: "ENTITY_TYPE_CITY",
                    STATE: "ENTITY_TYPE_STATE",
                    COUNTRY: "ENTITY_TYPE_COUNTRY"
                },
                o = {
                    UNSPECIFIED: "EVENT_TYPE_UNSPECIFIED",
                    CLICK: "EVENT_TYPE_CLICK",
                    IMPRESSION: "EVENT_TYPE_IMPRESSION",
                    PAGE_LAUNCH: "EVENT_TYPE_PAGE_LAUNCH",
                    TYPING: "EVENT_TYPE_TYPING",
                    RECEIVE: "EVENT_TYPE_RECEIVE",
                    COPY_TO_CLIPBOARD: "EVENT_TYPE_COPY_TO_CLIPBOARD",
                    SHARE: "EVENT_TYPE_SHARE",
                    ERROR_BOUNDARY: "EVENT_TYPE_ERROR_BOUNDARY"
                },
                a = new Set(["version", "browser_name", "browser_version", "url_segment", "ui_source", "event_type", "component", "meta_data", "page_name", "sub_type", "business", "entity_type", "entity_id"]),
                s = "webfrontend_tracking"
        },
        jXLi: (e, n, t) => {
            t.d(n, {
                d: () => h
            });
            var r = t("77l8"),
                i = t("79Ja"),
                o = t("k6Di"),
                a = t("zThL"),
                s = t("7wzN");

            function u(e) {
                return "string" != typeof e ? "Value must be a string" : ""
            }

            function l(e, n) {
                return function(t) {
                    return Object.values(e).includes(t) ? "" : "Value is of invalid type for enum ".concat(n)
                }
            }
            var c, d, m = {
                    web_tracking: {
                        recursive: !0,
                        trackKeys: {
                            version: {
                                default: "default",
                                useDefaultAlways: !0
                            },
                            browser_name: {
                                default: "",
                                validators: [u]
                            },
                            browser_version: {
                                default: "",
                                useDefaultAlways: !1,
                                validators: [u]
                            },
                            url_segment: {
                                default: "",
                                validators: [u]
                            },
                            ui_source: {
                                default: "",
                                validators: [u]
                            },
                            event_type: {
                                default: s.cP.UNSPECIFIED,
                                validators: [l(s.cP, "event_type")]
                            },
                            component: {
                                default: "",
                                validators: [u]
                            },
                            meta_data: {
                                default: {},
                                validators: [(c = u, d = u, function(e) {
                                    return Object.keys(e).forEach((function(n) {
                                        var t = e[n],
                                            r = c(n);
                                        return "" !== r || "" !== (r = d(t)) ? r : void 0
                                    })), ""
                                })]
                            }
                        },
                        keyName: "WebTrackingKeys"
                    },
                    page_name: {
                        default: "",
                        validators: [u]
                    },
                    sub_type: {
                        default: "",
                        validators: [u]
                    },
                    context: {
                        recursive: !0,
                        trackKeys: {
                            entity_type: {
                                default: s.zQ.UNSPECIFIED,
                                validators: [l(s.zQ, "entity_type")]
                            },
                            entity_id: {
                                default: "0",
                                validators: [u]
                            },
                            business: {
                                default: s.Pu.UNSPECIFIED,
                                validator: [l(s.Pu, "business")]
                            }
                        },
                        keyName: "ContextTrackingKeys"
                    }
                },
                f = t("zCQP");
            var p = function(e) {
                    return function(n) {
                        var t = {};
                        return Object.keys(e).forEach((function(r) {
                            var i, o, a, s;
                            if (null !== (i = e[r]) && void 0 !== i && i.useDefaultAlways) t[r] = e[r].default;
                            else if (null !== (o = e[r]) && void 0 !== o && o.recursive) t[r] = p(null !== (a = null === (s = e[r]) || void 0 === s ? void 0 : s.trackKeys) && void 0 !== a ? a : {})(n);
                            else if (r in n && n[r]) {
                                var u, l, c = n[r];
                                (null !== (u = null === (l = e[r]) || void 0 === l ? void 0 : l.validators) && void 0 !== u ? u : []).forEach((function(e) {
                                    var n = e(c);
                                    if ("" !== n) throw new Error(n)
                                })), t[r] = c
                            } else t[r] = e[r].default
                        })), t
                    }
                },
                A = function(e) {
                    var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        (0, f.x)(s.BL, (n = (0, r.A)({
                            url_segment: window.location.pathname,
                            event_type: e
                        }, t), Object.keys(n).forEach((function(e) {
                            if (! function(e, n) {
                                    return e.has(n)
                                }(s.CF, e)) throw new Error("Invalid key ".concat(e, " provided. Please use one of the following keys: ").concat(Array.from(s.CF).join(", "), ", ").concat(Array.from(s.CF).join(", ")))
                        })), p(m)(n)))
                    } catch (e) {
                        0
                    }
                },
                h = new((0, i.A)((function e() {
                    var n, t, i, u = this;
                    (0, o.A)(this, e), (0, a.A)(this, "setPageName", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return u.pageName = e, u
                    })), (0, a.A)(this, "setPageSubType", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return u.subType = e, u
                    })), (0, a.A)(this, "setBusiness", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.Pu.O2;
                        return u.business = e, u
                    })), (0, a.A)(this, "recordImpression", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        A(s.cP.IMPRESSION, (0, r.A)((0, r.A)({}, e), {}, {
                            browser_version: u.browserVersion,
                            browser_name: u.browserName,
                            page_name: u.pageName,
                            sub_type: u.subType,
                            business: u.business || e.business,
                            entity_type: u.entity_type || e.entity_type,
                            entity_id: u.entity_id || e.entity_id
                        }))
                    })), (0, a.A)(this, "recordClick", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        A(s.cP.CLICK, (0, r.A)((0, r.A)({}, e), {}, {
                            browser_version: u.browserVersion,
                            browser_name: u.browserName,
                            page_name: u.pageName,
                            sub_type: u.subType,
                            business: u.business || e.business,
                            entity_type: u.entity_type || e.entity_type,
                            entity_id: u.entity_id || e.entity_id
                        }))
                    })), (0, a.A)(this, "recordShare", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        A(s.cP.SHARE, (0, r.A)((0, r.A)({}, e), {}, {
                            browser_version: u.browserVersion,
                            browser_name: u.browserName,
                            page_name: u.pageName,
                            sub_type: u.subType,
                            business: u.context.business || e.business,
                            entity_type: u.context.entity_type || e.entity_type,
                            entity_id: u.context.entity_id || e.entity_id
                        }))
                    }));
                    var l, c, d, m, f, p, h, g = {};
                    "undefined" != typeof window && (m = navigator.userAgent, f = navigator.appName, p = "".concat(parseFloat(navigator.appVersion)), h = parseInt(navigator.appVersion, 10), -1 !== (c = m.indexOf("Opera")) ? (f = "Opera", p = m.substring(c + 6), -1 !== (c = m.indexOf("Version")) && (p = m.substring(c + 8))) : -1 !== (c = m.indexOf("MSIE")) ? (f = "Microsoft Internet Explorer", p = m.substring(c + 5)) : -1 !== (c = m.indexOf("Chrome")) ? (f = "Chrome", p = m.substring(c + 7)) : -1 !== (c = m.indexOf("Safari")) ? (f = "Safari", p = m.substring(c + 7), -1 !== (c = m.indexOf("Version")) && (p = m.substring(c + 8))) : -1 !== (c = m.indexOf("Firefox")) ? (f = "Firefox", p = m.substring(c + 8)) : (l = m.lastIndexOf(" ") + 1) < (c = m.lastIndexOf("/")) && (f = m.substring(l, c), p = m.substring(c + 1)), -1 !== (d = p.indexOf(";")) && (p = p.substring(0, d)), -1 !== (d = p.indexOf(" ")) && (p = p.substring(0, d)), h = parseInt("".concat(p), 10), Number.isNaN(h) && (p = "".concat(parseFloat(navigator.appVersion)), h = parseInt(navigator.appVersion, 10)), g = {
                        name: f,
                        majorVersion: h,
                        fullVersion: p,
                        userAgent: navigator.userAgent
                    }), this.browserVersion = null !== (n = null === (t = g.majorVersion) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "", this.browserName = null !== (i = g.name) && void 0 !== i ? i : "", this.pageName = "", this.subType = ""
                })))
        },
        IFhr: (e, n, t) => {
            t.d(n, {
                a: () => r
            });
            var r = {
                LOCATION_SEARCH: "location_search_bar",
                CHECKOUT: "checkout",
                ORDER: "order"
            }
        },
        "37dd": (e, n, t) => {
            t.d(n, {
                x: () => a
            });
            var r = t("zThL"),
                i = t("zqKt"),
                o = t("iFif"),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                    if (e) {
                        var s = i.A.getInstance(),
                            u = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, e), o.M_.VAR5, "SAVED_CART"), o.M_.VAR4, t), o.M_.VAR5, n), o.M_.VAR6, JSON.stringify({
                                appType: a || o.xY.NORMAL
                            }));
                        s.sendToJumbo(o.iw.JEVENT, u)
                    }
                }
        },
        "2crq": (e, n, t) => {
            t.d(n, {
                C: () => u
            });
            var r = t("77l8"),
                i = t("zThL"),
                o = t("zqKt"),
                a = t("iFif"),
                s = t("JM+J"),
                u = function(e) {
                    var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        d = o.A.getInstance(),
                        m = (0, i.A)((0, i.A)((0, i.A)((0, i.A)({}, a.M_.VAR1, t), a.M_.VAR3, u), a.M_.VAR4, c), a.M_.VAR6, JSON.stringify({
                            appType: l || a.xY.NORMAL
                        }));
                    switch (e) {
                        case s.v.CART_PERSIST_PREVIOUS_CART_SELECTED:
                            n = (0, r.A)((0, i.A)({}, a.M_.ENAME, s.v.CART_PERSIST_PREVIOUS_CART_SELECTED), m);
                            break;
                        case s.v.CART_PERSIST_PREVIOUS_CART_DISCARDED:
                            n = (0, r.A)((0, i.A)({}, a.M_.ENAME, s.v.CART_PERSIST_PREVIOUS_CART_DISCARDED), m);
                            break;
                        case s.v.CART_PERSIST_MODAL_IMPRESSIONS:
                            n = (0, r.A)((0, i.A)({}, a.M_.ENAME, s.v.CART_PERSIST_MODAL_IMPRESSIONS), m);
                            break;
                        case s.v.CART_PERSIST_MODAL_CLOSED:
                            n = (0, r.A)((0, i.A)({}, a.M_.ENAME, s.v.CART_PERSIST_MODAL_CLOSED), m);
                            break;
                        default:
                            n = {}
                    }
                    d.sendToJumbo(a.iw.JEVENT, n)
                }
        },
        "JM+J": (e, n, t) => {
            t.d(n, {
                v: () => i,
                y: () => r
            });
            var r = {
                    AEROBAR_IMPRESSION: "aerobar_impression",
                    AEROBAR_SECTION_CLICK: "aerobar_section_click",
                    AEROBAR_VIEW_CLICK: "aerobar_view_click",
                    AEROBAR_MODAL_OPEN_BUTTON_CLICK: "aerobar_modal_open_button_click",
                    AEROBAR_MODAL_DISCARD_CART_CLICK: "aerobar_modal_discard_cart_click",
                    AEROBAR_MODAL_CANCEL_CART_CLICK: "aerobar_modal_cancel_cart_click"
                },
                i = {
                    CART_PERSIST_PREVIOUS_CART_SELECTED: "cart_persist_previous_menu_selected",
                    CART_PERSIST_PREVIOUS_CART_DISCARDED: "cart_persist_previous_menu_discarded",
                    CART_PERSIST_MODAL_CLOSED: "cart_persist_popup_closed",
                    CART_PERSIST_MODAL_IMPRESSIONS: "cart_persist_popup_viewed"
                }
        },
        iFif: (e, n, t) => {
            t.d(n, {
                CO: () => i,
                M_: () => o,
                i9: () => u,
                iw: () => r,
                l$: () => s,
                xY: () => a
            });
            var r = {
                    ZTRACKING: "ztracking",
                    JADTRACKING: "jadtracking",
                    JADTRACKING_SERVES: "jadtracking_serves",
                    JEVENT: "jevent",
                    ZSEARCH_EVENTS_LOG: "zsearch_events_log",
                    UTMTRACKING: "utm_tracking"
                },
                i = 6,
                o = {
                    ENAME: "ename",
                    VAR1: "var1",
                    VAR2: "var2",
                    VAR3: "var3",
                    VAR4: "var4",
                    VAR5: "var5",
                    VAR6: "var6"
                },
                a = {
                    GPAY: "gpay",
                    NORMAL: "normal",
                    WHATSAPP_AGENT: "whatsapp_agent"
                },
                s = "add to cart",
                u = {
                    MOBILE: "Mobile",
                    DESKTOP: "Desktop"
                }
        },
        oVU5: (e, n, t) => {
            t.d(n, {
                p: () => a
            });
            var r = t("zThL"),
                i = t("zqKt"),
                o = t("iFif"),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = i.A.getInstance(),
                        t = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, "review_experience_change"), o.M_.VAR1, e.pageName || ""), o.M_.VAR2, e.isMobile ? o.i9.MOBILE : o.i9.DESKTOP), o.M_.VAR3, e.resId || 0), o.M_.VAR4, e.currentExperience || ""), o.M_.VAR5, e.subType || ""), o.M_.VAR6, JSON.stringify({
                            appType: e.appType || o.xY.NORMAL
                        }));
                    n.sendToJumbo(o.iw.JEVENT, t)
                }
        },
        zCQP: (e, n, t) => {
            t.d(n, {
                K: () => i.K,
                x: () => r.x
            });
            var r = t("rqX/"),
                i = t("Ar8T")
        },
        "rqX/": (e, n, t) => {
            t.d(n, {
                x: () => i
            });
            var r = t("zqKt"),
                i = function(e, n) {
                    r.A.getInstance().sendToJumbo(e, n)
                }
        },
        Ar8T: (e, n, t) => {
            t.d(n, {
                K: () => s
            });
            var r = t("77l8"),
                i = t("rqX/"),
                o = t("iFif"),
                a = t("P62M"),
                s = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        t = {
                            ename: e
                        },
                        s = {};
                    (0, a.EI)(n) && (n.forEach((function(e, n) {
                        var r = e;
                        n < o.CO ? (e && "string" != typeof e && (r = JSON.stringify(e)), t["var".concat(n + 1)] = r) : s["var".concat(n + 1)] = r
                    })), n.length > o.CO && (t.var6 = JSON.stringify((0, r.A)({
                        var6: t.var6
                    }, s)))), (0, i.x)(o.iw.JEVENT, t)
                }
        },
        F6eP: (e, n, t) => {
            t.d(n, {
                aj: () => R.a,
                xY: () => i.xY,
                ni: () => I,
                M_: () => i.M_,
                iw: () => i.iw,
                V0: () => T.V,
                iC: () => A.iC,
                lz: () => A.lz,
                J4: () => A.J4,
                i9: () => i.i9,
                rb: () => o.r,
                dV: () => N.d,
                uj: () => p,
                T0: () => w,
                L_: () => s,
                I$: () => d,
                xR: () => r.x,
                K3: () => r.K,
                bM: () => h,
                aF: () => S.a,
                _9: () => g._,
                b_: () => v,
                bz: () => E,
                Hf: () => y,
                SD: () => b,
                AJ: () => u.A,
                EH: () => c,
                s0: () => l,
                Ev: () => m.E
            });
            var r = t("zCQP"),
                i = t("iFif"),
                o = t("m0op"),
                a = (t("gwKh"), t("zqKt")),
                s = function(e) {
                    var n = a.A.getInstance(),
                        t = {
                            entity_type: "city_home",
                            entity_id: "1",
                            location_id: "".concat(e.locationId) || "0",
                            location_type: "".concat(e.locationType) || "0",
                            page_type: e.pageType || "",
                            event_type: o.r.PAGE_VIEW || "",
                            app_type: e.appType || "",
                            is_bot: e.isBot || 0,
                            source_app: o.Z.WEB_2019,
                            version: "1",
                            meta: {
                                metaTags: (null == e ? void 0 : e.zTrackingMetaTags) || ""
                            }
                        };
                    n.sendToJumbo(i.iw.ZTRACKING, t)
                },
                u = (t("52AU"), t("FFTb")),
                l = function(e) {
                    var n = a.A.getInstance(),
                        t = {
                            entity_type: "user_profile_page",
                            entity_id: "".concat(e.userId) || "0",
                            location_id: "".concat(e.locationId) || "0",
                            location_type: "".concat(e.locationType) || "0",
                            page_type: e.pageType || "",
                            event_type: o.r.PAGE_VIEW || "",
                            app_type: e.appType || "",
                            is_bot: e.isBot || 0,
                            source_app: o.Z.WEB_2019,
                            version: "1",
                            meta: {
                                metaTags: (null == e ? void 0 : e.zTrackingMetaTags) || ""
                            }
                        };
                    n.sendToJumbo(i.iw.ZTRACKING, t)
                },
                c = function(e) {
                    var n = a.A.getInstance(),
                        t = {
                            entity_type: "single_collection",
                            entity_id: "".concat(e.collectionId) || "0",
                            location_id: "".concat(e.cityId) || "0",
                            location_type: "".concat(e.locationType) || "0",
                            page_type: "collection",
                            event_type: o.r.PAGE_VIEW || "",
                            app_type: e.appType || "",
                            is_bot: e.isBot || 0,
                            source_app: o.Z.WEB_2019,
                            version: "1",
                            meta: {
                                metaTags: (null == e ? void 0 : e.zTrackingMetaTags) || ""
                            }
                        };
                    n.sendToJumbo(i.iw.ZTRACKING, t)
                },
                d = function(e) {
                    var n = a.A.getInstance(),
                        t = {
                            entity_type: "collection_home",
                            entity_id: "".concat(e.tabId) || "0",
                            location_id: "".concat(e.cityId) || "0",
                            location_type: "".concat(e.locationType) || "0",
                            page_type: "collection",
                            event_type: o.r.PAGE_VIEW || "",
                            app_type: e.appType || "",
                            is_bot: e.isBot || 0,
                            source_app: o.Z.WEB_2019,
                            version: "1",
                            meta: {
                                metaTags: (null == e ? void 0 : e.zTrackingMetaTags) || ""
                            }
                        };
                    n.sendToJumbo(i.iw.ZTRACKING, t)
                },
                m = t("B8dP"),
                f = t("zThL"),
                p = function(e) {
                    var n = a.A.getInstance(),
                        t = (0, f.A)((0, f.A)((0, f.A)({}, i.M_.ENAME, "campaign_banner_click"), i.M_.VAR1, e.pageType || ""), i.M_.VAR2, e.placement || "");
                    n.sendToJumbo(i.iw.JEVENT, t)
                },
                A = (t("dm0r"), t("QCmV")),
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    if (e) {
                        var r = a.A.getInstance(),
                            o = (0, f.A)((0, f.A)((0, f.A)((0, f.A)({}, i.M_.ENAME, A.W7), i.M_.VAR1, e), i.M_.VAR2, n ? i.i9.MOBILE : i.i9.DESKTOP), i.M_.VAR6, JSON.stringify({
                                appType: t || i.xY.NORMAL
                            }));
                        r.sendToJumbo(i.iw.JEVENT, o)
                    }
                },
                g = t("mHdh"),
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    if (e) {
                        var r = a.A.getInstance(),
                            o = (0, f.A)((0, f.A)((0, f.A)((0, f.A)({}, i.M_.ENAME, A.eg), i.M_.VAR1, e), i.M_.VAR2, n ? i.i9.MOBILE : i.i9.DESKTOP), i.M_.VAR6, JSON.stringify({
                                appType: t || i.xY.NORMAL
                            }));
                        r.sendToJumbo(i.iw.JEVENT, o)
                    }
                },
                E = (t("97ik"), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    if (e) {
                        var r = a.A.getInstance(),
                            o = (0, f.A)((0, f.A)((0, f.A)((0, f.A)({}, i.M_.ENAME, A.l8), i.M_.VAR1, e), i.M_.VAR2, n ? i.i9.MOBILE : i.i9.DESKTOP), i.M_.VAR6, JSON.stringify({
                                appType: t || i.xY.NORMAL
                            }));
                        r.sendToJumbo(i.iw.JEVENT, o)
                    }
                }),
                _ = t("77l8"),
                y = function(e, n) {
                    var t = a.A.getInstance(),
                        r = n.message,
                        o = void 0 === r ? "" : r,
                        s = n.pageName,
                        u = void 0 === s ? "" : s,
                        l = n.appType,
                        c = void 0 === l ? "" : l,
                        d = (0, f.A)((0, f.A)((0, f.A)({}, i.M_.VAR1, o), i.M_.VAR2, u), i.M_.VAR6, JSON.stringify({
                            appType: c || i.xY.NORMAL
                        })),
                        m = (0, f.A)((0, f.A)({}, A.iC.REQUEST_CALLBACK_SUCCESS, (0, _.A)((0, f.A)({}, i.M_.ENAME, A.iC.REQUEST_CALLBACK_SUCCESS), d)), A.iC.REQUEST_CALLBACK_FAILURE, (0, _.A)((0, f.A)({}, i.M_.ENAME, A.iC.REQUEST_CALLBACK_FAILURE), d))[e];
                    m && t.sendToJumbo(i.iw.JEVENT, m)
                },
                b = (t("Wek8"), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        t = a.A.getInstance(),
                        r = (0, f.A)((0, f.A)((0, f.A)((0, f.A)({}, i.M_.ENAME, A.LW), i.M_.VAR3, n), i.M_.VAR4, e), i.M_.VAR6, JSON.stringify({
                            appType: i.xY.GPAY
                        }));
                    t.sendToJumbo(i.iw.JEVENT, r)
                }),
                T = t("52g3"),
                S = t("guOt"),
                I = (t("oVU5"), t("JM+J"), t("37dd"), t("2crq"), {
                    BOTTOM_TAB_CLICKED: "web_nav_tab_clicked",
                    BOTTOM_TAB_ACTIVE: "web_nav_tab_active"
                }),
                w = function(e) {
                    var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        s = a.A.getInstance(),
                        u = (0, f.A)((0, f.A)((0, f.A)({}, i.M_.VAR1, t), i.M_.VAR2, r), i.M_.VAR6, JSON.stringify({
                            appType: o || i.xY.NORMAL
                        }));
                    switch (e) {
                        case I.BOTTOM_TAB_ACTIVE:
                            n = (0, _.A)((0, f.A)({}, i.M_.ENAME, I.BOTTOM_TAB_ACTIVE), u);
                            break;
                        case I.BOTTOM_TAB_CLICKED:
                            n = (0, _.A)((0, f.A)({}, i.M_.ENAME, I.BOTTOM_TAB_CLICKED), u);
                            break;
                        default:
                            n = {}
                    }
                    s.sendToJumbo(i.iw.JEVENT, n)
                },
                R = t("IFhr"),
                N = t("jXLi")
        },
        "52g3": (e, n, t) => {
            t.d(n, {
                V: () => r
            });
            var r = {
                ADD_ITEM: "res_delivery_add_item",
                ADD_ITEM_CLICKED: "res_delivery_add_item_clicked",
                CLOSE_CUSTOMISATION_MODAL: "res_delivery_close_customisation_modal",
                CART_CONTINUE_CLICKED: "res_cart_continue_clicked",
                CART_CLEAR: "res_delivery_cart_clear",
                CART_PAYMENT: "res_delivery_cart_payment",
                SELECTED_ADDRESS: "res_delivery_selected_address",
                PAYMENT_METHOD: "res_delivery_payment_method",
                APPLY_PROMO: "res_delivery_apply_promo",
                PROMO_IMPRESSION: "res_delivery_promo_impression",
                PROMO_APPLIED: "res_delivery_promo_applied",
                CHECKOUT: "res_delivery_checkout",
                CHANGE_ADDRESS: "res_delivery_change_address",
                ADD_ADDRESS: "res_delivery_add_address",
                SAVE_ADDRESS: "res_delivery_save_address",
                SERVICEABLE_ADDRESSES: "res_delivery_serviceable_addresses",
                DELIVERY_MENU_SEARCH_TEXT: "res_delivery_menu_search_text",
                OFFER_IMPRESSION: "res_delivery_offer_imp",
                OFFER_TAP: "res_delivery_offer_tap",
                OFFER_COPY: "res_delivery_offer_copy",
                VEG_SELECT: "res_delivery_veg_select",
                NON_VEG_SELECT: "res_delivery_non_veg_select",
                EGG_SELECT: "res_delivery_egg_select",
                VEG_UNSELECT: "res_delivery_veg_unselect",
                NON_VEG_UNSELECT: "res_delivery_non_veg_unselect",
                EGG_UNSELECT: "res_delivery_egg_unselect",
                DELIVERY_MENU_CATEGORY: "res_delivery_menu_category",
                ORDER_TIP: "res_checkout_order_tip",
                RES_CHARGES_TAXES: "res_charges_taxes",
                RES_CHECKOUT_USER_DETAILS: "res_checkout_user_details",
                RES_CART_VIEWED: "res_cart_viewed",
                ON_ZPAYKIT_LOAD: "zpaykit_on_load",
                ON_PAYMENT_INITIATE: "zpaykit_payment_initiate",
                ON_WHATSAPP_PAYMENT_SUCCESS: "whatsapp_payment_success",
                ON_REQUEST_PAYMENT_INITIATE: "gpay_request_payment_initiate",
                ON_REQUEST_PAYMENT_COMPLETE: "gpay_request_payment_complete",
                ON_REQUEST_PAYMENT_FAILURE: "gpay_request_payment_failure",
                OPEN_USE_APP_MODAL_FOR_LIVE_TRACKING: "mweb_open_use_app_modal_for_live_tracking",
                PHONE_AUTO_VERIFY_REQUEST: "phone_auto_verify_request",
                PHONE_AUTO_VERIFY_RESPONSE: "phone_auto_verify_response",
                PROMO_AUTO_APPLY_CART_CALL: "promo_auto_apply_cart_call",
                PROMO_AUTO_APPLY_CART_CALL_FAILED: "promo_auto_apply_cart_call_failed"
            }
        },
        guOt: (e, n, t) => {
            t.d(n, {
                a: () => s
            });
            var r = t("zThL"),
                i = t("zqKt"),
                o = t("iFif"),
                a = t("52g3"),
                s = function(e, n) {
                    var t, s = i.A.getInstance(),
                        u = n || {},
                        l = u.resId,
                        c = void 0 === l ? 0 : l,
                        d = u.status,
                        m = void 0 === d ? "" : d,
                        f = u.message,
                        p = void 0 === f ? "" : f,
                        A = u.paymentMethodType,
                        h = void 0 === A ? "" : A,
                        g = u.offerCategory,
                        v = void 0 === g ? "" : g,
                        E = u.offerId,
                        _ = void 0 === E ? "" : E,
                        y = u.promoCode,
                        b = void 0 === y ? "" : y,
                        T = u.checkoutFailedReason,
                        S = void 0 === T ? "" : T,
                        I = u.errorMessage,
                        w = void 0 === I ? "" : I,
                        R = u.guestUserId,
                        N = void 0 === R ? "" : R,
                        O = u.orderId,
                        C = void 0 === O ? 0 : O,
                        x = u.addressId,
                        M = void 0 === x ? "" : x,
                        L = u.q,
                        P = void 0 === L ? "" : L,
                        D = u.promoHeading,
                        k = void 0 === D ? "" : D,
                        V = u.rank,
                        U = void 0 === V ? "" : V,
                        F = u.categoryName,
                        G = void 0 === F ? "" : F,
                        q = u.itemId,
                        H = void 0 === q ? "" : q,
                        z = u.orderTipAmount,
                        B = void 0 === z ? 0 : z,
                        j = u.sourcePage,
                        K = void 0 === j ? "" : j,
                        Y = u.subTotal,
                        W = void 0 === Y ? 0 : Y,
                        J = u.itemIds,
                        Z = void 0 === J ? [] : J,
                        X = u.currency,
                        Q = void 0 === X ? "" : X,
                        $ = u.serviceability,
                        ee = void 0 === $ ? "" : $,
                        ne = u.savedAddressesCount,
                        te = void 0 === ne ? 0 : ne,
                        re = u.serviceableAddressesCount,
                        ie = void 0 === re ? 0 : re,
                        oe = u.addAddressSource,
                        ae = void 0 === oe ? "" : oe,
                        se = u.addAddressPageName,
                        ue = void 0 === se ? "" : se,
                        le = u.appType,
                        ce = void 0 === le ? "" : le,
                        de = u.action,
                        me = void 0 === de ? "" : de,
                        fe = u.userId,
                        pe = void 0 === fe ? 0 : fe,
                        Ae = u.titleText,
                        he = void 0 === Ae ? "" : Ae,
                        ge = u.subtitleText,
                        ve = void 0 === ge ? "" : ge,
                        Ee = u.whatsappUserId,
                        _e = void 0 === Ee ? 0 : Ee,
                        ye = (t = {}, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(t, a.V.ADD_ITEM, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.ADD_ITEM), o.M_.VAR1, c), o.M_.VAR2, H), o.M_.VAR3, K), o.M_.VAR4, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.OPEN_USE_APP_MODAL_FOR_LIVE_TRACKING, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.OPEN_USE_APP_MODAL_FOR_LIVE_TRACKING), o.M_.VAR1, c), o.M_.VAR2, me), o.M_.VAR6, JSON.stringify({
                            appType: o.xY.NORMAL
                        }))), a.V.ADD_ITEM_CLICKED, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.ADD_ITEM_CLICKED), o.M_.VAR1, c), o.M_.VAR2, H), o.M_.VAR3, K), o.M_.VAR4, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.CLOSE_CUSTOMISATION_MODAL, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.CLOSE_CUSTOMISATION_MODAL), o.M_.VAR1, c), o.M_.VAR2, H), o.M_.VAR3, K), o.M_.VAR4, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.CART_CONTINUE_CLICKED, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.CART_CONTINUE_CLICKED), o.M_.VAR1, c), o.M_.VAR3, K), o.M_.VAR4, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.CART_PAYMENT, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.CART_PAYMENT), o.M_.VAR1, c), o.M_.VAR2, m), o.M_.VAR3, p), o.M_.VAR4, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.CART_CLEAR, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.CART_CLEAR), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.SELECTED_ADDRESS, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.SELECTED_ADDRESS), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.PAYMENT_METHOD, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.PAYMENT_METHOD), o.M_.VAR1, c), o.M_.VAR2, h), o.M_.VAR3, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.APPLY_PROMO, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.APPLY_PROMO), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(t, a.V.PROMO_IMPRESSION, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.PROMO_IMPRESSION), o.M_.VAR1, c), o.M_.VAR2, b), o.M_.VAR3, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.PROMO_APPLIED, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.PROMO_APPLIED), o.M_.VAR1, c), o.M_.VAR2, b), o.M_.VAR3, m), o.M_.VAR4, p), o.M_.VAR5, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.CHECKOUT, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.CHECKOUT), o.M_.VAR1, c), o.M_.VAR2, m), o.M_.VAR3, S), o.M_.VAR4, C), o.M_.VAR5, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.CHANGE_ADDRESS, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.CHANGE_ADDRESS), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.ADD_ADDRESS, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.ADD_ADDRESS), o.M_.VAR1, c), o.M_.VAR2, ae), o.M_.VAR3, ue), o.M_.VAR4, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.SAVE_ADDRESS, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.SAVE_ADDRESS), o.M_.VAR1, c), o.M_.VAR2, M), o.M_.VAR3, m), o.M_.VAR4, ee), o.M_.VAR5, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.SERVICEABLE_ADDRESSES, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.SERVICEABLE_ADDRESSES), o.M_.VAR1, c), o.M_.VAR2, te), o.M_.VAR3, ie), o.M_.VAR4, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.DELIVERY_MENU_SEARCH_TEXT, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.DELIVERY_MENU_SEARCH_TEXT), o.M_.VAR1, c), o.M_.VAR2, P), o.M_.VAR3, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.OFFER_IMPRESSION, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.OFFER_IMPRESSION), o.M_.VAR1, c), o.M_.VAR2, v), o.M_.VAR3, _), o.M_.VAR4, k), o.M_.VAR5, U), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.OFFER_TAP, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.OFFER_TAP), o.M_.VAR1, c), o.M_.VAR2, v), o.M_.VAR3, _), o.M_.VAR4, k), o.M_.VAR5, U), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(t, a.V.OFFER_COPY, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.OFFER_COPY), o.M_.VAR1, c), o.M_.VAR2, v), o.M_.VAR3, _), o.M_.VAR4, k), o.M_.VAR6, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.VEG_SELECT, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.VEG_SELECT), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.VEG_UNSELECT, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.VEG_UNSELECT), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.NON_VEG_SELECT, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.NON_VEG_SELECT), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.NON_VEG_UNSELECT, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.NON_VEG_UNSELECT), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.EGG_SELECT, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.EGG_SELECT), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.EGG_UNSELECT, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.EGG_UNSELECT), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.DELIVERY_MENU_CATEGORY, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.DELIVERY_MENU_CATEGORY), o.M_.VAR1, c), o.M_.VAR2, G), o.M_.VAR3, U), o.M_.VAR4, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.ORDER_TIP, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.ORDER_TIP), o.M_.VAR1, c), o.M_.VAR2, B), o.M_.VAR3, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.RES_CHARGES_TAXES, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.RES_CHARGES_TAXES), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)(t, a.V.RES_CHECKOUT_USER_DETAILS, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.RES_CHECKOUT_USER_DETAILS), o.M_.VAR1, c), o.M_.VAR2, m), o.M_.VAR3, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.RES_CART_VIEWED, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.RES_CART_VIEWED), o.M_.VAR1, c), o.M_.VAR2, Z), o.M_.VAR3, W), o.M_.VAR4, Q), o.M_.VAR5, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.ON_ZPAYKIT_LOAD, (0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.ON_ZPAYKIT_LOAD), o.M_.VAR1, c), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.ON_PAYMENT_INITIATE, (0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.ON_PAYMENT_INITIATE), o.M_.VAR1, c), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.ON_WHATSAPP_PAYMENT_SUCCESS, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.ON_WHATSAPP_PAYMENT_SUCCESS), o.M_.VAR1, c), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: o.xY.WHATSAPP_AGENT
                        }))), a.V.ON_REQUEST_PAYMENT_INITIATE, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.ON_REQUEST_PAYMENT_INITIATE), o.M_.VAR1, C), o.M_.VAR2, N), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.ON_REQUEST_PAYMENT_COMPLETE, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.ON_REQUEST_PAYMENT_COMPLETE), o.M_.VAR1, C), o.M_.VAR2, N), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.ON_REQUEST_PAYMENT_FAILURE, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.ON_REQUEST_PAYMENT_FAILURE), o.M_.VAR1, C), o.M_.VAR2, N), o.M_.VAR5, w), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.NORMAL
                        }))), a.V.PHONE_AUTO_VERIFY_REQUEST, (0, r.A)({}, o.M_.ENAME, a.V.PHONE_AUTO_VERIFY_REQUEST)), a.V.PHONE_AUTO_VERIFY_RESPONSE, (0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.PHONE_AUTO_VERIFY_RESPONSE), o.M_.VAR1, m), o.M_.VAR2, w)), (0, r.A)((0, r.A)(t, a.V.PROMO_AUTO_APPLY_CART_CALL, (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.PROMO_AUTO_APPLY_CART_CALL), o.M_.VAR1, m), o.M_.VAR2, b), o.M_.VAR3, he), o.M_.VAR4, ve), o.M_.VAR5, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.GPAY
                        }))), a.V.PROMO_AUTO_APPLY_CART_CALL_FAILED, (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.V.PROMO_AUTO_APPLY_CART_CALL_FAILED), o.M_.VAR1, pe), o.M_.VAR2, _e), o.M_.VAR6, JSON.stringify({
                            appType: ce || o.xY.GPAY
                        }))));
                    s.sendToJumbo(o.iw.JEVENT, ye[e] || {})
                }
        },
        QCmV: (e, n, t) => {
            t.d(n, {
                $r: () => m,
                J4: () => r,
                LW: () => u,
                W7: () => a,
                _j: () => i,
                eg: () => s,
                fM: () => d,
                iC: () => l,
                l8: () => o,
                lz: () => c
            });
            var r = {
                    PRECISE_LOCATION_SUCCESS: "partner_precise_location_success",
                    PRECISE_LOCATION_FAILURE: "partner_precise_location_fail",
                    LOCATION_FAILURE: "partner_location_fail",
                    DETECT_CURRENT_LOCATION: "partner_detect_current_location",
                    MANUAL_LOCATION_SELECT: "partner_select_location_manually",
                    USER_IDENTITY_FAILURE: "partner_user_identity_fail",
                    USER_PERMISSION_FAILURE: "partner_user_permission_fail",
                    HOME_LINK_FAILURE: "partner_o2_link_fail"
                },
                i = {
                    LOCATION_PROMPT_OPENED: "web_current_device_location_prompt_opened"
                },
                o = "partner_order_history",
                a = "partner_select_location_pageload",
                s = "partner_top_of_the_funnel",
                u = "partner_splash_screen_visibility",
                l = {
                    REQUEST_CALLBACK_SUCCESS: "gpay_request_callback_success",
                    REQUEST_CALLBACK_FAILURE: "gpay_request_callback_failure"
                },
                c = {
                    LOCATION_CHANGER_MODAL: "location-changer-modal"
                },
                d = {
                    GPAY_SEARCH_BOTTOM_SHEET: "gpay_search_bottom_sheet"
                },
                m = {
                    CLICK: "gpay_search_banner_click"
                }
        },
        mHdh: (e, n, t) => {
            t.d(n, {
                _: () => u
            });
            var r = t("77l8"),
                i = t("zThL"),
                o = t("zqKt"),
                a = t("iFif"),
                s = t("QCmV"),
                u = function(e, n) {
                    var t = o.A.getInstance(),
                        u = n.message,
                        l = void 0 === u ? "" : u,
                        c = n.pageName,
                        d = void 0 === c ? "" : c,
                        m = n.flowType,
                        f = void 0 === m ? "" : m,
                        p = n.appType,
                        A = void 0 === p ? "" : p,
                        h = (0, i.A)((0, i.A)((0, i.A)((0, i.A)({}, a.M_.VAR1, l), a.M_.VAR2, d), a.M_.VAR3, f), a.M_.VAR6, JSON.stringify({
                            appType: A || a.xY.NORMAL
                        })),
                        g = (0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)({}, s.J4.LOCATION_FAILURE, (0, r.A)((0, i.A)({}, a.M_.ENAME, s.J4.LOCATION_FAILURE), h)), s.J4.PRECISE_LOCATION_SUCCESS, (0, r.A)((0, i.A)({}, a.M_.ENAME, s.J4.PRECISE_LOCATION_SUCCESS), h)), s.J4.PRECISE_LOCATION_FAILURE, (0, r.A)((0, i.A)({}, a.M_.ENAME, s.J4.PRECISE_LOCATION_FAILURE), h)), s.J4.DETECT_CURRENT_LOCATION, (0, r.A)((0, i.A)({}, a.M_.ENAME, s.J4.DETECT_CURRENT_LOCATION), h)), s.J4.MANUAL_LOCATION_SELECT, (0, r.A)((0, i.A)({}, a.M_.ENAME, s.J4.MANUAL_LOCATION_SELECT), h)), s.J4.USER_IDENTITY_FAILURE, (0, r.A)((0, i.A)({}, a.M_.ENAME, s.J4.USER_IDENTITY_FAILURE), h)), s.J4.USER_PERMISSION_FAILURE, (0, r.A)((0, i.A)({}, a.M_.ENAME, s.J4.USER_PERMISSION_FAILURE), h)), s.J4.HOME_LINK_FAILURE, (0, r.A)((0, i.A)({}, a.M_.ENAME, s.J4.HOME_LINK_FAILURE), h));
                    t.sendToJumbo(a.iw.JEVENT, g[e])
                }
        },
        "97ik": (e, n, t) => {
            t.d(n, {
                C: () => s
            });
            var r = t("zThL"),
                i = t("zqKt"),
                o = t("iFif"),
                a = t("QCmV"),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        t = i.A.getInstance(),
                        s = (0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a._j.LOCATION_PROMPT_OPENED), o.M_.VAR5, e), o.M_.VAR6, JSON.stringify({
                            appType: n || o.xY.NORMAL
                        }));
                    t.sendToJumbo(o.iw.JEVENT, s)
                }
        },
        Wek8: (e, n, t) => {
            t.d(n, {
                B: () => s
            });
            var r = t("zThL"),
                i = t("zqKt"),
                o = t("iFif"),
                a = t("QCmV"),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (e) {
                        var t = i.A.getInstance(),
                            s = (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, a.$r.CLICK), o.M_.VAR1, e), o.M_.VAR2, n), o.M_.VAR6, JSON.stringify({
                                appType: o.xY.GPAY
                            }));
                        t.sendToJumbo(o.iw.JEVENT, s)
                    }
                }
        },
        dm0r: (e, n, t) => {
            t.d(n, {
                T: () => o
            });
            var r = t("zqKt"),
                i = t("iFif"),
                o = function(e, n, t) {
                    var o = r.A.getInstance(),
                        a = n.rating,
                        s = {
                            action: e,
                            rating: void 0 === a ? "" : a,
                            collection_id: ""
                        };
                    t.forEach((function(e) {
                        var n = e.key,
                            t = void 0 === n ? "" : n,
                            r = e.value,
                            i = void 0 === r ? "" : r;
                        t && (s[t] = i)
                    })), o.sendToJumbo(i.iw.JADTRACKING, s)
                }
        },
        B8dP: (e, n, t) => {
            t.d(n, {
                E: () => a
            });
            var r = t("zThL"),
                i = t("zqKt"),
                o = t("iFif"),
                a = function(e) {
                    var n = e.name,
                        t = void 0 === n ? "" : n,
                        a = e.pageName,
                        s = void 0 === a ? "" : a,
                        u = e.value,
                        l = e.platform,
                        c = void 0 === l ? "" : l,
                        d = e.appType,
                        m = void 0 === d ? "" : d,
                        f = e.downlink,
                        p = void 0 === f ? 0 : f,
                        A = e.effectiveType,
                        h = void 0 === A ? "" : A;
                    if (t && s && u) {
                        var g = i.A.getInstance(),
                            v = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, o.M_.ENAME, "new_web_performance_metric"), o.M_.VAR1, t), o.M_.VAR2, s), o.M_.VAR3, u), o.M_.VAR4, c), o.M_.VAR5, JSON.stringify({
                                downlink: p,
                                effectiveType: h
                            })), o.M_.VAR6, JSON.stringify({
                                appType: m || o.xY.NORMAL
                            }));
                        g.sendToJumbo(o.iw.JEVENT, v)
                    }
                }
        },
        m0op: (e, n, t) => {
            t.d(n, {
                Z: () => i,
                r: () => r
            });
            var r = {
                    PAGE_VIEW: "pageview",
                    MENU_FLIP: "menuflip",
                    PHOTO_FLIP: "photoflip",
                    PAGE_TIME_SPENT: "pageTimeSpent",
                    ADD_BOOKMARK: "add_bookmark",
                    REMOVE_BOOKMARK: "remove_bookmark",
                    CLICK: "click",
                    NATIVE_SHARE: "native_share",
                    RAIL_ADD_REVIEW: "rail_open_add_review",
                    IMPRESSION: "impression"
                },
                i = {
                    WEB_2019: "web_2019"
                }
        },
        gwKh: (e, n, t) => {
            t.d(n, {
                w: () => a
            });
            var r = t("zThL"),
                i = t("VAjR"),
                o = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, i.Wt, "res_info"), i.sc, "res_menus"), i.RI, "res_photos"), i.Cr, "res_reviews"), i.qY, "res_events"), i.ND, "order"), i.IN, "res_daily_menus"),
                a = function(e) {
                    return o[e] || ""
                }
        },
        "52AU": (e, n, t) => {
            t.d(n, {
                R: () => a
            });
            var r = t("zqKt"),
                i = t("m0op"),
                o = t("iFif"),
                a = function(e) {
                    var n = r.A.getInstance(),
                        t = {
                            entity_type: "restaurant",
                            entity_id: "".concat(e.resId) || "0",
                            location_id: "".concat(e.locationId) || "0",
                            location_type: "".concat(e.locationType) || "0",
                            page_type: e.pageType || "",
                            event_type: i.r.PAGE_VIEW || "",
                            app_type: e.appType || "",
                            is_bot: e.isBot || 0,
                            source_app: i.Z.WEB_2019,
                            version: "1",
                            meta: {
                                metaTags: (null == e ? void 0 : e.zTrackingMetaTags) || ""
                            }
                        };
                    n.sendToJumbo(o.iw.ZTRACKING, t)
                }
        },
        FFTb: (e, n, t) => {
            t.d(n, {
                A: () => a
            });
            var r = t("zqKt"),
                i = t("m0op"),
                o = t("iFif"),
                a = function(e) {
                    var n = r.A.getInstance(),
                        t = e.entityId,
                        a = void 0 === t ? 0 : t,
                        s = e.locationId,
                        u = void 0 === s ? 0 : s,
                        l = e.locationType,
                        c = void 0 === l ? "" : l,
                        d = e.pageType,
                        m = void 0 === d ? "" : d,
                        f = e.subPageType,
                        p = void 0 === f ? "" : f,
                        A = e.appType,
                        h = void 0 === A ? "" : A,
                        g = e.isBot,
                        v = void 0 === g ? 0 : g,
                        E = e.whatsappUserId,
                        _ = void 0 === E ? 0 : E,
                        y = e.metaTags,
                        b = {
                            entity_type: "search_page",
                            entity_id: a,
                            location_id: u,
                            location_type: c,
                            page_type: m,
                            subpage_type: p,
                            event_type: i.r.PAGE_VIEW,
                            app_type: h,
                            meta: {
                                whatsappUserId: "".concat(_) || "0",
                                metaTags: y
                            },
                            is_bot: v,
                            source_app: i.Z.WEB_2019,
                            version: "1"
                        };
                    n.sendToJumbo(o.iw.ZTRACKING, b)
                }
        },
        fyQP: (e, n, t) => {
            t.d(n, {
                Q1: () => _,
                bZ: () => T,
                kS: () => E,
                pm: () => b,
                t7: () => y
            });
            var r = t("zThL"),
                i = t("zqKt"),
                o = t("lXQd"),
                a = t("AkOy"),
                s = t("iFif"),
                u = t("Wc2h"),
                l = t("VAjR"),
                c = "SCREEN_LOADED_ACTION",
                d = "SUCCESS_CALLBACK_ACTION",
                m = {
                    LOGIN_SCREEN: "ZomatoWebLoginPageLoaded",
                    OTP_SCREEN: "ZomatoWebOTPLoaded",
                    MULTI_ACCOUNT_SCREEN: "ZomatoWebMultiAccountLoaded",
                    CREATE_ACCOUNT_SCREEN: "ZomatoWebSignupPageLoaded",
                    PHONE_CREATE_ACCOUNT_SCREEN: "ZomatoWebPhoneSignupPageLoaded"
                },
                f = {
                    SEND_LOGIN_OTP: "ZomatoWebLoginPageTap",
                    CREATE_ACCOUNT: "ZomatoWebSignupPageTap",
                    ACCOUNT_LINK: "ZomatoWebAccountLinkPageTap",
                    PHONE_CREATE_ACCOUNT: "ZomatoWebPhoneSignupPageTap"
                },
                p = {
                    login: "ZomatoWebSigninSuccess",
                    signup: "ZomatoWebSignupSuccess"
                },
                A = "signup",
                h = "create account",
                g = "continue with google",
                v = "create account button",
                E = "AUTH_SDK_LOGIN",
                _ = "AUTH_SDK_LOGIN_INITIATED",
                y = "AUTH_SDK_LOGOUT",
                b = function(e, n) {
                    var t = i.A.getInstance(),
                        b = n.action,
                        T = void 0 === b ? "" : b,
                        S = n.screen,
                        I = void 0 === S ? "" : S,
                        w = n.method,
                        R = void 0 === w ? "" : w,
                        N = n.flow,
                        O = void 0 === N ? "" : N,
                        C = n.success,
                        x = void 0 === C ? "false" : C,
                        M = n.message,
                        L = void 0 === M ? "" : M,
                        P = e.name,
                        D = void 0 === P ? "" : P,
                        k = {},
                        V = {};
                    switch (T) {
                        case c:
                            if ((0, o.default)(m, I, "")) {
                                var U = n.pageOpenSource,
                                    F = void 0 === U ? "" : U;
                                k = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, s.M_.ENAME, (0, o.default)(m, I, "")), s.M_.VAR1, D), s.M_.VAR2, O), s.M_.VAR3, R), s.M_.VAR6, F)
                            }
                            break;
                        case "OTP_ENTERED":
                            var G = n.pageOpenSource,
                                q = void 0 === G ? "" : G;
                            k = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, s.M_.ENAME, "ZomatoWebOTPEntered"), s.M_.VAR1, D), s.M_.VAR2, O), s.M_.VAR3, R), s.M_.VAR4, x), s.M_.VAR5, L), s.M_.VAR6, q);
                            break;
                        case "TAP_BUTTON":
                            var H = n.tapButtonName,
                                z = void 0 === H ? "" : H,
                                B = n.type,
                                j = void 0 === B ? "" : B;
                            "CREATE_ACCOUNT" === j && D === l.RZ && (V = {
                                eventCategory: h,
                                eventAction: u.aw.CLICK,
                                eventLabel: v
                            }), (0, o.default)(f, j, "") && (k = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, s.M_.ENAME, (0, o.default)(f, j, "")), s.M_.VAR1, D), s.M_.VAR2, z), s.M_.VAR3, R), s.M_.VAR4, x), s.M_.VAR5, L));
                            break;
                        case "GOOGLE_SIGN_IN":
                            D === l.RZ && O === A && (V = {
                                eventCategory: h,
                                eventAction: u.aw.CLICK,
                                eventLabel: g
                            });
                            var K = x ? "GoogleSigninSuccess" : "GoogleSigninFailed";
                            k = (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, s.M_.ENAME, K), s.M_.VAR1, D), s.M_.VAR2, O), s.M_.VAR3, L);
                            break;
                        case d:
                            (0, o.default)(p, O, "") && (k = (0, r.A)((0, r.A)({}, s.M_.ENAME, (0, o.default)(p, O, "")), s.M_.VAR1, D));
                            break;
                        case _:
                            k = (0, r.A)((0, r.A)((0, r.A)({}, s.M_.ENAME, _), s.M_.VAR1, D), s.M_.VAR2, O);
                            break;
                        case E:
                            k = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, s.M_.ENAME, E), s.M_.VAR1, x), s.M_.VAR2, D), s.M_.VAR3, O), s.M_.VAR4, L);
                            break;
                        case y:
                            k = (0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, s.M_.ENAME, y), s.M_.VAR1, x), s.M_.VAR2, D), s.M_.VAR3, L)
                    }(0, a.default)(k) || t.sendToJumbo(s.iw.JEVENT, k), (0, a.default)(V) || (0, u.c5)(V)
                },
                T = function(e, n) {
                    var t = n.action,
                        r = void 0 === t ? "" : t,
                        i = n.flow,
                        a = void 0 === i ? "" : i;
                    switch (r) {
                        case c:
                            if ("login" === a) {
                                var s = (0, o.default)(e, "googleAdsPayload.loginClick", "");
                                s && (0, u.jH)(s)
                            } else if (a === A) {
                                var l = (0, o.default)(e, "googleAdsPayload.signupClick", "");
                                l && (0, u.jH)(l)
                            }
                            break;
                        case d:
                            if (a === A) {
                                var m = (0, o.default)(e, "googleAdsPayload.signupSuccess", "");
                                m && (0, u.jH)(m)
                            }
                    }
                }
        },
        fMrO: (e, n, t) => {
            t.d(n, {
                X: () => o
            });
            var r = t("lXQd"),
                i = t("VAjR"),
                o = function(e) {
                    var n = (0, r.default)(e, "pages.current.name", ""),
                        t = (0, r.default)(e, "pages.current.pageUrl", ""),
                        o = (0, r.default)(e, "pages.current.cityId", 0),
                        a = (0, r.default)(e, "pages.current.resId", 0),
                        s = (0, r.default)(e, "pages.current.userId", 0),
                        u = (0, r.default)(e, "pages.current.skuId", 0),
                        l = {};
                    switch (n) {
                        case i.Dn:
                            l = (0, r.default)(e, "pages.".concat(n, ".").concat(t, ".trackingDataLogin"));
                            break;
                        case i.Ak:
                            l = (0, r.default)(e, "pages.".concat(n, ".").concat(o, ".trackingDataLogin"));
                            break;
                        case i.Wt:
                            l = (0, r.default)(e, "pages.".concat(n, ".").concat(a, ".trackingDataLogin"));
                            break;
                        case i.RZ:
                            l = (0, r.default)(e, "pages.orderOnline.trackingDataLogin");
                            break;
                        case i.m3:
                            l = (0, r.default)(e, "pages.".concat(n, ".").concat(s, ".trackingDataLogin"));
                            break;
                        case i.qc:
                            l = (0, r.default)(e, "pages.dotePdp.".concat(u, ".trackingDataLogin"));
                            break;
                        case i.ZB:
                            l = (0, r.default)(e, "pages.doteHome.trackingDataLogin")
                    }
                    return l
                }
        },
        "5h7m": (e, n, t) => {
            t.d(n, {
                A: () => i
            });
            var r = t("q1tI");
            const i = function(e) {
                var n = e.isOpen,
                    t = e.modalRef,
                    i = e.path,
                    o = e.isEnabled,
                    a = (0, r.useRef)(!0);
                (0, r.useEffect)((function() {
                    var e, r;
                    return n && o && (r = function(e) {
                            e && e.preventDefault(), !0 === a.current && (a.current = !1, window.history.pushState({
                                url: i
                            }, null, i)), t && t.current && "function" == typeof t.current.loginModalClose && t.current.loginModalClose()
                        }, e = window.onpopstate, window.onpopstate = r, window.history.pushState({
                            url: i
                        }, null, i)),
                        function() {
                            window.onpopstate === r && (window.onpopstate = function() {
                                window.onpopstate = e
                            }, window.history.back())
                        }
                }), [n, t, o])
            }
        },
        "7VrE": (e, n, t) => {
            t.d(n, {
                A: () => o
            });
            var r = t("q1tI"),
                i = t("+1bB");
            const o = function(e) {
                return function(n) {
                    return function(t) {
                        return r.createElement(i.N3, e, r.createElement(n, t))
                    }
                }
            }
        },
        "5wsu": (e, n, t) => {
            t.d(n, {
                A: () => o
            });
            var r = t("q1tI"),
                i = t("B5+Q");
            const o = function(e) {
                return function(n) {
                    return (0, r.useEffect)((function() {
                        (0, i.A)()
                    }), []), r.createElement(e, n)
                }
            }
        },
        "Z/CO": (e, n, t) => {
            var r = t("q1tI"),
                i = t("EbEg"),
                o = t("rid2"),
                a = t("TRpf"),
                s = t("lHa8"),
                u = t("NsBr"),
                l = t("aMMj"),
                c = t("ocwp"),
                d = t("lXQd");
            const m = function(e, n, t, r, i, o, a, s, u) {
                for (var l = !0, c = !1, d = 0; d < document.scripts.length; d++)
                    if (document.scripts[d].src.indexOf(a) > -1) {
                        l = !("no" === document.scripts[d].getAttribute("data-lazy"));
                        break
                    }
                var m = !1,
                    f = [],
                    p = function(e) {
                        (e.e || e.p || e.f && e.f.indexOf("capture") > -1 || e.f && e.f.indexOf("showReportDialog") > -1) && l && A(f), p.data.push(e)
                    };

                function A(a) {
                    if (!m) {
                        m = !0;
                        var l = n.getElementsByTagName(t)[0],
                            c = n.createElement(t);
                        c.src = s, c.setAttribute("crossorigin", "anonymous"), c.addEventListener("load", (function() {
                            try {
                                e[r] = h, e[i] = g;
                                var n = e[o],
                                    t = n.init;
                                n.init = function(e) {
                                        var n = u;
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                                        t(n)
                                    },
                                    function(n, t) {
                                        try {
                                            for (var o = p.data, a = 0; a < n.length; a++) "function" == typeof n[a] && n[a]();
                                            var s = !1,
                                                u = e.__SENTRY__;
                                            void 0 !== u && u.hub && u.hub.getClient() && (s = !0);
                                            var l = !1;
                                            for (a = 0; a < o.length; a++)
                                                if (o[a].f) {
                                                    l = !0;
                                                    var c = o[a];
                                                    !1 === s && "init" !== c.f && t.init(), s = !0, t[c.f].apply(t, c.a)
                                                }!1 === s && !1 === l && t.init();
                                            var d = e[r],
                                                m = e[i];
                                            for (a = 0; a < o.length; a++) o[a].e && d ? d.apply(e, o[a].e) : o[a].p && m && m.apply(e, [o[a].p])
                                        } catch (e) {}
                                    }(a, n)
                            } catch (e) {}
                        })), l.parentNode.insertBefore(c, l)
                    }
                }
                p.data = [], e[o] = e[o] || {}, e[o].onLoad = function(e) {
                    f.push(e), l && !c || A(f)
                }, e[o].forceLoad = function() {
                    c = !0, l && setTimeout((function() {
                        A(f)
                    }))
                }, ["init", "addBreadcrumb", "captureMessage", "captureException", "captureEvent", "configureScope", "withScope", "showReportDialog"].forEach((function(n) {
                    e[o][n] = function() {
                        p({
                            f: n,
                            a: arguments
                        })
                    }
                }));
                var h = e[r];
                e[r] = function(n, t, r, i, o) {
                    p({
                        e: [].slice.call(arguments)
                    }), h && h.apply(e, arguments)
                };
                var g = e[i];
                e[i] = function(n) {
                    p({
                        p: n.reason
                    }), g && g.apply(e, arguments)
                }, l || setTimeout((function() {
                    A(f)
                }))
            };
            var f = {
                    url: "https://browser.sentry-cdn.com/5.6.1/bundle.min.js",
                    dsn: "https://1c6f02b6fef24467b6790bd3ebe41c4d@sentry.zomato.com/52",
                    publicKey: "1c6f02b6fef24467b6790bd3ebe41c4d"
                },
                p = {
                    url: "https://browser.sentry-cdn.com/5.6.1/bundle.min.js",
                    dsn: "https://942bccb3a53742318f88a5bf3d8c5a89@sentry.zomato.com/158",
                    publicKey: "942bccb3a53742318f88a5bf3d8c5a89"
                },
                A = t("WHL/"),
                h = t("sLkX"),
                g = t("KFCZ"),
                v = t("alT1"),
                E = t("Ta92"),
                _ = t("uulN"),
                y = t("AdJq"),
                b = t("taSx");
            const T = function(e) {
                var n = e.getState(),
                    t = (0, b.s)(n) || (0, b.n)(n),
                    r = function(e) {
                        return (0, d.default)(e, "location.currentLocation.countryId", 0)
                    }(n);
                t && ((0, _.hU)(), (0, E.A)(r), (0, _.rd)() && (0, h.Ay)(y.Ry6, {
                    method: "POST"
                }).then((function(e) {
                    return e.json
                })))
            };
            var S, I, w, R = t("F6eP");
            S = v.M, I = S.getState(), w = (0, A.Ay)((0, d.default)(I, "pages.current.name", !1)) ? p : f, m(window, document, "script", "onerror", "onunhandledrejection", "Sentry", w.publicKey, w.url, {
                    dsn: w.dsn,
                    release: "3781"
                }), t.p = window.publicPath || "/web/", (0, u.default)(), (0, h.C7)(v.M), g.A.setClientFromStore(v.M),
                function(e) {
                    var n = e.getState(),
                        t = n.pages.current,
                        r = void 0 === t ? {} : t,
                        i = r.pageUrl,
                        o = void 0 === i ? window.location.pathname : i,
                        a = r.isMobile,
                        s = void 0 === a ? 0 : a,
                        u = n.pageConfig,
                        c = (void 0 === u ? {} : u).cacheMeta,
                        d = (void 0 === c ? {} : c).cacheable;
                    if (void 0 !== d && d) {
                        var m = window.location.pathname + window.location.search;
                        window.history.replaceState({
                            url: m
                        }, "", m)
                    } else window.history.replaceState({
                        url: o
                    }, "", o);
                    window.onpopstate = function(n) {
                        var t = n.state,
                            r = void 0 === t ? {} : t,
                            i = r && r.url ? r.url : "";
                        i ? (0, l.wu)(e.dispatch, i, "", !1, s) : window.location.reload()
                    }
                }(v.M), T(v.M), (0, s.ai)((function() {
                    var e = document.querySelector("#root");
                    (0, i.c)(e, r.createElement(o.vd, null, r.createElement(a.Kq, {
                        store: v.M
                    }, r.createElement(c.A, null))), {
                        onRecoverableError: function(e) {
                            var n;
                            (0, R.K3)("react_18_error", [null !== (n = e.message) && void 0 !== n ? n : ""])
                        }
                    })
                }))
        },
        FaQd: (e, n, t) => {
            t.d(n, {
                A: () => A
            });
            var r, i, o, a = t("RlfA"),
                s = t("q1tI"),
                u = t("BAyj"),
                l = t("vOnD"),
                c = t("2fHp"),
                d = t("kCs9"),
                m = (0, l.default)(u.default)(r || (r = (0, a.A)(["\n  height: 64px;\n  width: 600px;\n  border-radius: 8px;\n  margin-top: 100px;\n  margin-bottom: 15px;\n\n  @media (max-width: 768px) {\n    margin-top: 75px;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 75px;\n  }\n"]))),
                f = (0, l.default)(u.default)(i || (i = (0, a.A)(["\n  height: 20px;\n  width: 700px;\n  border-radius: 8px;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 60px;\n    width: 80%;\n    margin-bottom: 25px;\n    margin: auto;\n  }\n"]))),
                p = (0, l.default)(u.default)(o || (o = (0, a.A)(["\n  height: 520px;\n  width: 100%;\n  border-radius: 8px;\n  margin: auto;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 280px;\n    margin-bottom: 25px;\n  }\n"])));
            const A = function() {
                return s.createElement(s.Fragment, null, s.createElement(d.A, null), s.createElement(c.default, null, s.createElement(m, null), s.createElement(f, null), s.createElement(p, null)))
            }
        },
        "89BT": (e, n, t) => {
            t.d(n, {
                A: () => Lt
            });
            var r = t("XfWh"),
                i = t("TRpf"),
                o = t("lXQd"),
                a = t("7VrE"),
                s = t("77l8"),
                u = t("HKiI"),
                l = t("VAjR"),
                c = {};
            const d = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                return n.type === u.XJ && n.pageInfo.name === l.qp ? (0, s.A)((0, s.A)({}, e), n.pageData) : e
            };
            var m, f, p, A, h, g, v = t("+9dH"),
                E = t("q1tI"),
                _ = t("2fHp"),
                y = t("RlfA"),
                b = t("17x9"),
                T = t.n(b),
                S = t("vOnD"),
                I = t("j399"),
                w = t("s5TX"),
                R = t("wcxm"),
                N = t("kdDk"),
                O = t("N/Eu"),
                C = t("P62M"),
                x = t("zceU"),
                M = S.default.div(m || (m = (0, y.A)(["\n  position: absolute;\n  bottom: 15rem;\n  left: 50%;\n  transform: translateX(-450px);\n  width: ", ";\n  @media (max-width: 900px) {\n    transform: none;\n    left: 2.4rem;\n    width: ", ";\n  }\n  @media (max-width: 400px) {\n    bottom: ", ";\n  }\n"])), (function(e) {
                    return e.isZomatoForWorkPage ? "69.72%" : ""
                }), (function(e) {
                    return e.isCelebrationsPage ? "90%" : ""
                }), (function(e) {
                    return e.isZomatoForWorkPage ? "4rem" : "10rem"
                })),
                L = (0, S.default)(w.A)(f || (f = (0, y.A)(["\n  color: white;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  font-size: 5.6rem;\n  line-height: 1.2;\n  max-width: 65%;\n  @media (max-width: 480px) {\n    font-size: ", ";\n    line-height: ", ";\n  }\n  @media (max-width: 320px) {\n    font-size: ", ";\n    line-height: ", ";\n  }\n"])), (function(e) {
                    return e.isCelebrationsPage ? "3.6rem" : "4.4rem"
                }), (function(e) {
                    return e.isCelebrationsPage ? "3.6rem" : "1.2"
                }), (function(e) {
                    return e.isCelebrationsPage ? "3rem" : "4.4rem"
                }), (function(e) {
                    return e.isCelebrationsPage ? "3rem" : "1.2"
                })),
                P = (0, S.default)(R.P)(p || (p = (0, y.A)(["\n  color: white;\n  margin-bottom: 3rem;\n  font-weight: 500;\n  width: 45rem;\n  font-size: 1.8rem;\n  line-height: 1.5;\n\n  @media (max-width: 768px) {\n    width: 30rem;\n    font-size: inherit;\n    line-height: 1.5;\n  }\n\n  @media (max-width: 480px) {\n    width: 90%;\n    font-size: inherit;\n    line-height: 1.5;\n  }\n"]))),
                D = S.default.div(A || (A = (0, y.A)(["\n  height: 70vh;\n  position: relative;\n  @media (max-width: 480px) {\n    height: ", ";\n  }\n"])), (function(e) {
                    return e.isZomatoForWorkPage ? "43rem" : "80vh"
                })),
                k = S.default.img(h || (h = (0, y.A)(["\n  margin: ", ";\n"])), (function(e) {
                    return e.margin
                })),
                V = S.default.img(g || (g = (0, y.A)(["\n  top: 2.8rem;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-450px);\n  width: 11.5rem;\n  @media (max-width: 900px) {\n    transform: none;\n    left: 2.4rem;\n  }\n"]))),
                U = function(e) {
                    var n = e.heading,
                        t = void 0 === n ? "" : n,
                        r = e.subtext,
                        i = void 0 === r ? "" : r,
                        a = e.buttonCaption,
                        s = void 0 === a ? "" : a,
                        u = e.imageLink,
                        l = void 0 === u ? "" : u,
                        c = e.signupSectionRef,
                        d = e.bannerRef,
                        m = e.logoUrl,
                        f = e.logoMargin,
                        p = e.isCelebrationsPage,
                        A = e.isZomatoForWorkPage,
                        h = e.workLogoUrl,
                        g = e.onGotoSignupClick;
                    return E.createElement(E.Fragment, null, E.createElement(D, {
                        isZomatoForWorkPage: A,
                        ref: d
                    }, E.createElement(x.A, {
                        img: l,
                        showGradient: !1
                    }), !!h && E.createElement(V, {
                        src: (0, C.I2)(h),
                        alt: t,
                        margin: f,
                        width: "100rem"
                    }), E.createElement(M, {
                        isZomatoForWorkPage: A,
                        isCelebrationsPage: p
                    }, m && E.createElement(k, {
                        src: (0, C.I2)(m),
                        alt: t,
                        margin: f,
                        width: "300rem"
                    }), t && E.createElement(L, {
                        isCelebrationsPage: p
                    }, t), E.createElement(P, {
                        isZomatoForWorkPage: A
                    }, i), E.createElement(N.default, {
                        onClick: function() {
                            (0, o.default)(c, "current.scrollIntoView") && c.current.scrollIntoView({
                                behavior: "smooth"
                            }), g && "function" == typeof g && g()
                        },
                        btnColor: "red",
                        icon: E.createElement(O.default, null),
                        iconAlign: "right"
                    }, s))))
                };
            U.defaultProps = {
                signupSectionRef: null,
                bannerRef: null,
                logoUrl: "",
                logoMargin: "",
                isCelebrationsPage: !1,
                workLogoUrl: "",
                isZomatoForWorkPage: !1,
                onGotoSignupClick: I.default
            }, U.propTypes = {
                heading: T().string.isRequired,
                subtext: T().string.isRequired,
                buttonCaption: T().string.isRequired,
                imageLink: T().string.isRequired,
                signupSectionRef: T().shape({
                    current: T().any
                }),
                bannerRef: T().shape({
                    current: T().any
                }),
                logoUrl: T().string,
                logoMargin: T().string,
                isCelebrationsPage: T().bool,
                workLogoUrl: T().string,
                isZomatoForWorkPage: T().bool,
                onGotoSignupClick: T().func
            };
            const F = U;
            var G, q, H, z, B, j, K = t("dnas"),
                Y = t("lFeK"),
                W = t("SEds"),
                J = t("gAKm"),
                Z = t("kkbd"),
                X = function(e) {
                    var n = e.imageLink,
                        t = e.heading,
                        r = e.subtext;
                    return E.createElement(re, null, E.createElement(te, {
                        src: (0, C.I2)(n)
                    }), E.createElement($, null, E.createElement(Q, null, E.createElement(ee, {
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })), E.createElement(ne, null, r)))
                },
                Q = S.default.div(G || (G = (0, y.A)(["\n  width: 100%;\n  @media (max-width: 480px) {\n    margin-left: 0;\n  }\n"]))),
                $ = S.default.div(q || (q = (0, y.A)(["\n  margin-top: 3rem;\n  padding: 0 0.8rem;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    margin-top: 0;\n    padding: 0;\n    margin-left: 2.4rem;\n    width: 58rem;\n  }\n"]))),
                ee = (0, S.default)(J.default)(H || (H = (0, y.A)(["\n  font-weight: 500;\n  font-size: 1.8rem;\n  line-height: 1.2;\n  color: ", ";\n  text-align: center;\n  @media (max-width: 480px) {\n    text-align: left;\n    padding-top: 0;\n  }\n"])), W.grey.z800),
                ne = (0, S.default)(Z.P)(z || (z = (0, y.A)(["\n  line-height: 1.5;\n  margin: 1.5rem 0 0;\n  text-align: center;\n  color: ", ";\n  max-width: 28.5rem;\n  @media (max-width: 480px) {\n    text-align: left;\n    margin: 0.9rem 0 0;\n  }\n"])), W.grey.z900),
                te = (0, S.default)(Y.default)(B || (B = (0, y.A)(["\n  height: 13rem;\n  width: 13rem;\n  @media (max-width: 480px) {\n    height: 100%;\n    width: 100%;\n  }\n"]))),
                re = S.default.div(j || (j = (0, y.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 30%;\n  justify-content: space-between;\n  margin: 0 auto;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    width: 100%;\n    margin: 3.4rem 0;\n    display: flex;\n  }\n"])));
            X.propTypes = {
                imageLink: T().string,
                heading: T().string,
                subtext: T().string
            }, X.defaultProps = {
                imageLink: "",
                heading: "",
                subtext: ""
            };
            const ie = X;
            var oe, ae, se, ue, le, ce, de = t("HMsx"),
                me = t("5An4"),
                fe = function(e) {
                    var n = e.imageLink,
                        t = e.heading,
                        r = e.subtext;
                    return E.createElement(Ee, null, E.createElement(ve, {
                        src: (0, C.I2)(n)
                    }), E.createElement(Ae, null, E.createElement(pe, null, E.createElement(he, {
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })), E.createElement(ge, null, r)))
                },
                pe = S.default.div(oe || (oe = (0, y.A)(["\n  width: 100%;\n  @media (max-width: 480px) {\n    margin-left: 0;\n  }\n"]))),
                Ae = S.default.div(ae || (ae = (0, y.A)(["\n  margin-top: 3rem;\n  padding: 0 0.8rem;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    margin-top: 0;\n    padding: 0;\n    margin-left: 2.4rem;\n    width: 58rem;\n  }\n"]))),
                he = (0, S.default)(J.default)(se || (se = (0, y.A)(["\n  font-weight: 600;\n  font-size: 2rem;\n  line-height: 1.2;\n  color: ", ";\n  text-align: left;\n  @media (max-width: 480px) {\n    text-align: left;\n    padding-top: 0;\n  }\n"])), me.default),
                ge = (0, S.default)(Z.P)(ue || (ue = (0, y.A)(["\n  font-size: 1.4rem;\n  line-height: 1.2;\n  margin: 1.5rem 0 0;\n  text-align: left;\n  color: ", ";\n  max-width: 28.5rem;\n  font-weight: 400;\n  @media (max-width: 480px) {\n    text-align: left;\n    margin: 0.9rem 0 0;\n  }\n"])), de.default.z700),
                ve = (0, S.default)(Y.default)(le || (le = (0, y.A)(["\n  height: 10rem;\n  width: 10rem;\n  @media (max-width: 480px) {\n    height: 100%;\n    width: 100%;\n  }\n"]))),
                Ee = S.default.div(ce || (ce = (0, y.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  text-align: left;\n  width: 30%;\n  justify-content: space-between;\n  margin: 0 auto;\n  box-shadow: 0px 4px 6px rgba(28, 28, 28, 0.06);\n  border-radius: 40px;\n  padding: 4rem 2rem 4rem 4rem;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    width: 100%;\n    margin: 3.4rem 0;\n    display: flex;\n  }\n"])));
            fe.propTypes = {
                imageLink: T().string,
                heading: T().string,
                subtext: T().string
            }, fe.defaultProps = {
                imageLink: "",
                heading: "",
                subtext: ""
            };
            const _e = fe;
            var ye, be, Te, Se = t("TESf"),
                Ie = function(e) {
                    var n = e.sectionData,
                        t = e.isMobile,
                        r = void 0 !== t && t;
                    return E.createElement(we, null, E.createElement(Ne, null, (0, o.default)(n, "sectionHeading", "")), E.createElement(Re, null, (0, o.default)(n, "sectionDetails", []).map((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        return E.createElement(Se.A, (0, v.A)({
                            isMobile: r,
                            MobileComponent: ie,
                            DesktopComponent: _e,
                            key: (0, o.default)(e, "heading", n)
                        }, e))
                    }))))
                },
                we = S.default.div(ye || (ye = (0, y.A)(["\n  margin: 10rem 0;\n  max-width: 90rem;\n  @media (max-width: 480px) {\n    margin: 7.5rem 0;\n  }\n"]))),
                Re = S.default.div(be || (be = (0, y.A)(["\n  display: flex;\n  align-items: baseline;\n  @media (max-width: 480px) {\n    display: block;\n    align-items: center;\n  }\n"]))),
                Ne = (0, S.default)(K.default)(Te || (Te = (0, y.A)(["\n  text-align: center;\n  margin-bottom: 5.3rem;\n  font-weight: 600;\n  font-size: 3.6rem;\n  line-height: 1.2;\n  @media (max-width: 480px) {\n    margin-bottom: 2.8rem;\n    font-size: 2.4rem;\n    line-height: 1.2;\n  }\n"])));
            Ie.propTypes = {
                sectionData: T().objectOf(T().any),
                isMobile: T().bool.isRequired
            }, Ie.defaultProps = {
                sectionData: {}
            };
            const Oe = Ie;
            var Ce, xe, Me, Le, Pe, De, ke, Ve = function(e) {
                    var n = e.imageLink,
                        t = e.subtext,
                        r = e.indexValue;
                    return E.createElement(Be, null, E.createElement(Fe, null, E.createElement(ze, {
                        src: (0, C.I2)(n)
                    }), E.createElement(Ge, null, E.createElement(Ue, null, r))), E.createElement(qe, null, E.createElement(He, null, t)))
                },
                Ue = (0, S.default)(Z.P)(Ce || (Ce = (0, y.A)(["\n  color: white;\n  font-size: 2rem;\n  font-weight: 500;\n  text-align: center;\n"]))),
                Fe = S.default.div(xe || (xe = (0, y.A)(["\n  position: relative;\n  height: 130px;\n  width: 130px;\n  border: 3px solid #ebebeb;\n  border-radius: 50%;\n  background: white;\n\n  @media (max-width: 480px) {\n    height: 40px;\n    width: 40px;\n  }\n"]))),
                Ge = S.default.div(Me || (Me = (0, y.A)(["\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  background: #242f64;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),
                qe = S.default.div(Le || (Le = (0, y.A)(["\n  margin-top: 3rem;\n  padding: 0 0.8rem;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    margin-top: 0;\n    padding: 0;\n    margin-left: 2.4rem;\n    width: 58rem;\n  }\n"]))),
                He = (0, S.default)(Z.P)(Pe || (Pe = (0, y.A)(["\n  line-height: 1.5;\n  margin: 1.5rem 0 0;\n  text-align: center;\n  color: ", ";\n  max-width: 28.5rem;\n  @media (max-width: 480px) {\n    text-align: left;\n    margin: 0.9rem 0 0;\n  }\n"])), W.grey.z900),
                ze = (0, S.default)(Y.default)(De || (De = (0, y.A)(["\n  height: 5rem;\n  width: 5rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  @media (max-width: 480px) {\n    height: 2rem;\n    width: 2rem;\n  }\n"]))),
                Be = S.default.div(ke || (ke = (0, y.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 30%;\n  justify-content: space-between;\n  margin: 0 auto;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    width: 100%;\n    margin: 3.4rem 0;\n    display: flex;\n  }\n"])));
            Ve.propTypes = {
                imageLink: T().string,
                indexValue: T().string,
                subtext: T().string
            }, Ve.defaultProps = {
                imageLink: "",
                indexValue: "",
                subtext: ""
            };
            const je = Ve;
            var Ke, Ye, We, Je, Ze = function(e) {
                    var n = e.sectionData,
                        t = e.isMobile,
                        r = void 0 !== t && t;
                    return E.createElement(Qe, null, E.createElement(en, null, (0, o.default)(n, "sectionHeading", "")), E.createElement($e, null, E.createElement(Xe, null), (0, o.default)(n, "sectionDetails", []).map((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        return E.createElement(Se.A, (0, v.A)({
                            isMobile: r,
                            MobileComponent: je,
                            DesktopComponent: je,
                            key: (0, o.default)(e, "heading", n)
                        }, e))
                    }))))
                },
                Xe = S.default.div(Ke || (Ke = (0, y.A)(["\n  border-top: 3px dashed #ebebeb;\n  width: 60%;\n  position: absolute;\n  top: 65px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 0;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                Qe = S.default.div(Ye || (Ye = (0, y.A)(["\n  margin: 10rem 0;\n  max-width: 90rem;\n  @media (max-width: 480px) {\n    margin: 7.5rem 0;\n  }\n"]))),
                $e = S.default.div(We || (We = (0, y.A)(["\n  display: flex;\n  align-items: baseline;\n  position: relative;\n  @media (max-width: 480px) {\n    display: block;\n    align-items: center;\n  }\n"]))),
                en = (0, S.default)(K.default)(Je || (Je = (0, y.A)(["\n  text-align: center;\n  margin-bottom: 5.3rem;\n  font-weight: 600;\n  font-size: 3.6rem;\n  line-height: 1.2;\n  @media (max-width: 480px) {\n    margin-bottom: 2.8rem;\n    font-size: 2.4rem;\n    line-height: 1.2;\n  }\n"])));
            Ze.propTypes = {
                sectionData: T().objectOf(T().any),
                isMobile: T().bool.isRequired
            }, Ze.defaultProps = {
                sectionData: {}
            };
            const nn = Ze;
            var tn, rn, on, an, sn, un = t("e+BS"),
                ln = S.default.div(tn || (tn = (0, y.A)(["\n  height: ", ";\n  overflow: hidden;\n  position: relative;\n  @media (max-width: 480px) {\n    margin: 0 1.2rem;\n  }\n"])), (function(e) {
                    return e.showMore ? "100%" : "32rem"
                })),
                cn = (0, S.default)(Z.P)(rn || (rn = (0, y.A)(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 3.6rem;\n  line-height: 1.5;\n  text-align: center;\n  margin-bottom: 6rem;\n  @media (max-width: 480px) {\n    font-size: 2.4rem;\n  }\n"])), de.default.z900),
                dn = S.default.div(on || (on = (0, y.A)(["\n  margin-bottom: 14rem;\n  margin-top: 2rem;\n  @media (max-width: 480px) {\n    margin-top: 4rem;\n  }\n"]))),
                mn = ((0, S.default)(N.default)(an || (an = (0, y.A)(["\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n"]))), S.default.div(sn || (sn = (0, y.A)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(rgba(255, 255, 255, 0), white);\n"]))), function(e) {
                    var n = e.faqs,
                        t = e.title,
                        r = e.faqsRef;
                    return E.createElement(dn, {
                        ref: r
                    }, E.createElement(cn, null, t), E.createElement(ln, {
                        showMore: !0
                    }, E.createElement(un.nD, null, n.map((function(e) {
                        var n = e.question,
                            t = void 0 === n ? "" : n,
                            r = e.answer,
                            i = void 0 === r ? "" : r;
                        return E.createElement(un.Zk, {
                            key: t,
                            title: t
                        }, i)
                    })))))
                });
            mn.propTypes = {
                faqs: T().arrayOf(T().object),
                faqsRef: T().objectOf(T().any),
                title: T().string
            }, mn.defaultProps = {
                faqs: [],
                faqsRef: null,
                title: ""
            };
            const fn = mn;
            var pn, An, hn, gn, vn, En, _n, yn, bn, Tn = t("Vadf"),
                Sn = t("eLLh"),
                In = t("/VDB"),
                wn = t("VcZT"),
                Rn = t("gEOw"),
                Nn = t("hkzt"),
                On = t("LSsp"),
                Cn = "SET_ORGANIZATION_HEAD_COUNT",
                xn = "SET_ORGANIZATION_NAME",
                Mn = "SET_EMAIL",
                Ln = "SET_PHONE",
                Pn = "INIT",
                Dn = "SUMBIT_INITIATE",
                kn = "SUMBIT_SUCCESS",
                Vn = "SUMBIT_FAILED",
                Un = "CLEAR_SUBMIT_SUCCESS",
                Fn = "CLEAR_SUBMIT_FAILED",
                Gn = {
                    orgName: "",
                    requirement: "",
                    startDate: "",
                    email: "",
                    phone: ""
                },
                qn = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gn,
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        t = n.type,
                        r = n.value;
                    switch (t) {
                        case Pn:
                            return (0, s.A)((0, s.A)({}, e), Gn);
                        case Cn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                requirement: r
                            });
                        case xn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                orgName: r
                            });
                        case Mn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                email: r
                            });
                        case Ln:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                phone: r
                            });
                        default:
                            return e
                    }
                },
                Hn = t("AdJq"),
                zn = t("sLkX"),
                Bn = t("U68s"),
                jn = t("f773"),
                Kn = t("qhHW"),
                Yn = t("t18a"),
                Wn = t("hBVj"),
                Jn = function(e) {
                    var n = e.labelMappings,
                        t = e.errorMessages,
                        r = e.dropdownItems,
                        i = e.isMobile,
                        a = e.isSubmitting,
                        s = (0, E.useReducer)(qn, Gn),
                        u = (0, Tn.A)(s, 2),
                        l = u[0],
                        c = u[1],
                        d = l.orgName,
                        m = l.requirement,
                        f = l.email,
                        p = l.phone,
                        A = function(e) {
                            return !!(0, o.default)(e, "length", !1)
                        };
                    return [{
                        component: Bn.P,
                        props: {
                            inputField: Wn.wi,
                            name: "email_id",
                            value: f,
                            onChange: function(e) {
                                return c({
                                    type: Mn,
                                    value: e
                                })
                            },
                            matcher: jn.co,
                            label: (0, o.default)(n, "email", "Email Id"),
                            errorMessage: (0, o.default)(t, "email", Yn.h0)
                        }
                    }, {
                        component: Bn.P,
                        props: {
                            inputField: Wn.wi,
                            name: "phone_number",
                            value: p,
                            onChange: function(e) {
                                return c({
                                    type: Ln,
                                    value: e
                                })
                            },
                            matcher: jn.Vj,
                            label: (0, o.default)(n, "phone", "Phone Number"),
                            errorMessage: (0, o.default)(t, "phone", Yn.h0)
                        }
                    }, {
                        component: Bn.P,
                        props: {
                            inputField: Wn.wi,
                            name: "org_name",
                            value: d,
                            onChange: function(e) {
                                return c({
                                    type: xn,
                                    value: e
                                })
                            },
                            matcher: A,
                            label: (0, o.default)(n, "orgname", "Organization Name"),
                            errorMessage: (0, o.default)(t, "organization", Yn.h0)
                        }
                    }, {
                        component: Bn.P,
                        props: {
                            inputField: Wn.bs,
                            name: "requirement",
                            helperText: i ? (0, o.default)(n, "orgHeadCount", "") : "",
                            value: m,
                            dropdownItems: r,
                            matcher: A,
                            onSelect: function(e) {
                                return c({
                                    type: Cn,
                                    value: e
                                })
                            },
                            label: i ? "Less than 500" : (0, o.default)(n, "orgHeadCount", "")
                        }
                    }, {
                        component: Kn.A,
                        props: {
                            name: "submit",
                            caption: "Get Started",
                            isButtonLoading: a
                        }
                    }]
                },
                Zn = S.default.div(pn || (pn = (0, y.A)(["\n  padding: 2rem 4rem;\n  background: ", ";\n  box-shadow: 0.8rem 4.6rem 5rem rgba(228, 233, 235, 0.47);\n  border-radius: 0.6rem;\n"])), On.default),
                Xn = S.default.div(An || (An = (0, y.A)(["\n  display: ", ";\n"])), (function(e) {
                    return e.isNotVisible ? "none" : "block"
                })),
                Qn = (0, S.default)(In.default)(hn || (hn = (0, y.A)(["\n  margin-bottom: 1.8rem;\n  font-weight: 500;\n"]))),
                $n = S.default.div(gn || (gn = (0, y.A)(["\n  width: 100%;\n  height: 100%;\n  display: ", ";\n  flex-direction: column;\n  align-items: center;\n  ", "\n"])), (function(e) {
                    return e.isVisible ? "flex" : "none"
                }), (function(e) {
                    return e.isBloggersPage ? (0, S.css)(vn || (vn = (0, y.A)(["\n          padding: 2.75rem 3rem 2.75rem;\n        "]))) : (0, S.css)(En || (En = (0, y.A)(["\n          padding: 10rem 4.8rem 8.7rem;\n          @media (max-width: 480px) {\n            padding: 8rem 4.5rem 10rem;\n          }\n        "])))
                })),
                et = (0, S.default)(Rn.default)(_n || (_n = (0, y.A)(["\n  margin-bottom: 3rem;\n"]))),
                nt = (0, S.default)(K.default)(yn || (yn = (0, y.A)(["\n  margin-top: 1.8rem;\n  font-size: 3rem;\n  line-height: 4rem;\n  font-weight: 600;\n  @media (max-width: 480px) {\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n  }\n"]))),
                tt = (0, S.default)(R.P)(bn || (bn = (0, y.A)(["\n  text-align: center;\n  font-size: 1.8rem;\n  line-height: 2.7rem;\n  margin-top: 1.9rem;\n  @media (max-width: 480px) {\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n  }\n"]))),
                rt = function(e) {
                    var n = e.errorMessages,
                        t = e.isSubmitting,
                        r = e.submitSuccess,
                        i = e.onFormSubmit,
                        a = e.clearSubmitSuccess,
                        u = e.clearSubmitFailed,
                        c = e.formHeading,
                        d = e.submitFailed,
                        m = e.pageName,
                        f = e.labelMappings,
                        p = e.isMobile,
                        A = e.dropdownItems,
                        h = e.successDivData,
                        g = e.buttonText,
                        _ = e.userName,
                        y = e.emailId,
                        b = e.getFormDataProp,
                        T = e.submissionError,
                        S = (0, E.useState)(!1),
                        I = (0, Tn.A)(S, 2),
                        w = I[0],
                        R = I[1],
                        N = (0, E.useState)(!1),
                        O = (0, Tn.A)(N, 2),
                        C = O[0],
                        x = O[1],
                        M = (0, E.useReducer)(qn),
                        L = (0, Tn.A)(M, 2)[1],
                        P = function() {
                            return L({
                                type: Pn
                            })
                        };
                    (0, E.useEffect)((function() {
                        r && (R(!0), P()), a()
                    }), [r]), (0, E.useEffect)((function() {
                        d && (x(!0), P()), u()
                    }), [d]);
                    var D = m === l.wO ? b : Jn;
                    return E.createElement(Zn, null, E.createElement(Xn, {
                        isNotVisible: w
                    }, E.createElement(Qn, null, c), E.createElement(Bn.H, {
                        onSubmit: function(e) {
                            m === l.wO ? i((0, s.A)({}, e)) : i((0, s.A)((0, s.A)({}, e), {}, {
                                page_name: m
                            }))
                        },
                        resetOnSubmit: !0
                    }, D({
                        isMobile: p,
                        labelMappings: f,
                        isSubmitting: t,
                        errorMessages: n,
                        dropdownItems: A,
                        buttonText: g,
                        userName: _,
                        emailId: y
                    }).map((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        return E.createElement(e.component, (0, v.A)({
                            key: (0, o.default)(e, "props.name", n)
                        }, (0, o.default)(e, "props", {})))
                    })))), E.createElement($n, {
                        isVisible: w,
                        isBloggersPage: m === l.wO
                    }, E.createElement(et, {
                        size: "100",
                        color: Nn.default.z500
                    }), E.createElement(nt, null, (0, o.default)(h, "title", "")), E.createElement(tt, null, (0, o.default)(h, "desc", ""))), E.createElement(wn.default, {
                        show: C,
                        align: "top",
                        onClose: function() {
                            return x(!1)
                        },
                        text: T || Yn.xQ,
                        type: "error"
                    }))
                };
            rt.propTypes = {
                onFormSubmit: T().func,
                submitSuccess: T().bool,
                isSubmitting: T().bool,
                isMobile: T().bool,
                errorMessages: T().shape({
                    requirement: T().string,
                    organization: T().string,
                    email: T().string,
                    phone: T().string,
                    date: T().string,
                    name: T().string,
                    blogName: T().string,
                    blogUrl: T().string
                }).isRequired,
                clearSubmitSuccess: T().func,
                clearSubmitFailed: T().func,
                formHeading: T().string,
                submitFailed: T().bool,
                pageName: T().string,
                labelMappings: T().objectOf(T().string),
                setFormRequirement: T().bool,
                dropdownItems: T().arrayOf(T().any),
                successDivData: T().objectOf(T().any),
                buttonText: T().string,
                userName: T().string,
                emailId: T().string,
                getFormDataProp: T().func,
                submissionError: T().string
            }, rt.defaultProps = {
                isSubmitting: !1,
                isMobile: !1,
                submitSuccess: !1,
                onFormSubmit: I.default,
                clearSubmitSuccess: I.default,
                clearSubmitFailed: I.default,
                formHeading: "",
                submitFailed: !1,
                pageName: "",
                labelMappings: {},
                setFormRequirement: !1,
                dropdownItems: [],
                successDivData: {},
                buttonText: "",
                userName: "",
                emailId: "",
                getFormDataProp: I.default,
                submissionError: ""
            };
            const it = (0, i.Ng)((function(e) {
                return {
                    setFormRequirement: (0, o.default)(e, "pages.celebrations.setFormRequirement", !1)
                }
            }))((0, E.memo)(rt, C.Dl));
            var ot, at, st, ut, lt, ct, dt, mt = (0, S.default)(_.default)(ot || (ot = (0, y.A)(["\n  padding-top: 5rem;\n  padding-bottom: 1rem;\n"]))),
                ft = S.default.div(at || (at = (0, y.A)(["\n  width: 100%;\n  position: relative;\n\n  @media (max-width: 768px) {\n    margin: 7.5rem 0;\n  }\n"]))),
                pt = (0, S.default)(Sn.default)(st || (st = (0, y.A)(["\n  align-items: center;\n"]))),
                At = (0, S.default)(R.P)(ut || (ut = (0, y.A)(["\n  margin: 0 0 2.5rem 0;\n  font-weight: 500;\n  line-height: 1.2;\n  font-size: 3.6rem;\n  align-items: center;\n  @media (max-width: 480px) {\n    font-size: 2.4rem;\n    line-height: 1.2;\n  }\n"]))),
                ht = (0, S.default)(Y.default)(lt || (lt = (0, y.A)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: contain !important;\n  bottom: 0;\n  z-index: -1;\n"]))),
                gt = S.default.div(ct || (ct = (0, y.A)(["\n  @media (max-width: 480px) {\n    max-width: 27.4rem;\n  }\n"]))),
                vt = (0, S.default)(R.P)(dt || (dt = (0, y.A)(["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  @media (max-width: 480px) {\n    line-height: 1.5;\n  }\n"]))),
                Et = function(e) {
                    var n = e.errorMessages,
                        t = void 0 === n ? {} : n,
                        r = e.clearSubmitSuccess,
                        i = e.clearSubmitFailed,
                        o = e.isSubmitting,
                        a = e.submitSuccess,
                        s = e.submitFailed,
                        u = e.onFormSubmit,
                        l = e.formHeading,
                        c = e.sectionHeading,
                        d = e.signupSectionRef,
                        m = e.pageName,
                        f = e.labelMappings,
                        p = e.imageSrc,
                        A = e.imageAltText,
                        h = {
                            errorMessages: t,
                            clearSubmitSuccess: r,
                            clearSubmitFailed: i,
                            isSubmitting: o,
                            submitSuccess: a,
                            onFormSubmit: u,
                            formHeading: l,
                            submitFailed: s,
                            pageName: m,
                            labelMappings: f,
                            isMobile: e.isMobile,
                            dropdownItems: e.dropdownItems,
                            successDivData: e.successDivData
                        };
                    return E.createElement(ft, {
                        ref: d
                    }, E.createElement(ht, {
                        width: "100%",
                        height: "100%",
                        src: (0, C.I2)(p),
                        alt: A
                    }), E.createElement(mt, null, E.createElement(pt, {
                        gap: 30
                    }, E.createElement(Sn.default.Item, {
                        key: "signup-component-content",
                        colD: 6,
                        colT: 6,
                        colM: 12
                    }, E.createElement(gt, null, E.createElement(At, null, c), E.createElement(vt, null, "Please leave your contact details and a representative will get in touch with you within 48 hours."))), E.createElement(Sn.default.Item, {
                        key: "signup-component-form",
                        colD: 6,
                        colT: 6,
                        colM: 12
                    }, E.createElement(it, h)))))
                };
            Et.propTypes = {
                errorMessages: T().objectOf(T().string),
                clearSubmitSuccess: T().func,
                isSubmitting: T().bool,
                submitSuccess: T().bool,
                submitFailed: T().bool,
                onFormSubmit: T().func,
                formHeading: T().string,
                imageSrc: T().string,
                imageAltText: T().string,
                sectionHeading: T().string,
                signupSectionRef: T().shape({
                    current: T().any
                }),
                clearSubmitFailed: T().func,
                pageName: T().string,
                contactNum: T().string,
                contactNumDisplay: T().string,
                labelMappings: T().objectOf(T().string),
                isMobile: T().bool,
                dropdownItems: T().arrayOf(T().any),
                successDivData: T().objectOf(T().any)
            }, Et.defaultProps = {
                errorMessages: {},
                clearSubmitSuccess: I.default,
                clearSubmitFailed: I.default,
                isSubmitting: !1,
                submitSuccess: !1,
                submitFailed: !1,
                onFormSubmit: I.default,
                isMobile: !1,
                formHeading: "",
                imageSrc: "",
                imageAltText: "",
                sectionHeading: "",
                signupSectionRef: null,
                pageName: "",
                contactNum: Yn.gh,
                contactNumDisplay: Yn.gh,
                labelMappings: {},
                dropdownItems: [],
                successDivData: {}
            };
            const _t = Et;
            var yt = t("Wc2h"),
                bt = t("0Rqv"),
                Tt = t("9ybx"),
                St = {
                    submitSuccess: !1,
                    submitFailed: !1,
                    isformSubmitting: !1
                },
                It = function(e, n) {
                    switch (n.type) {
                        case Dn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                isformSubmitting: !0
                            });
                        case kn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                isformSubmitting: !1,
                                submitSuccess: !0
                            });
                        case Vn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                isformSubmitting: !1,
                                submitFailed: !0
                            });
                        case Un:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                submitSuccess: !1
                            });
                        case Fn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                submitFailed: !1
                            });
                        default:
                            return e
                    }
                },
                wt = function(e) {
                    var n = e.pageName,
                        t = e.signupSectionRef,
                        r = e.contactNum,
                        i = e.contactNumDisplay,
                        o = e.labelMappings,
                        a = e.isMobile,
                        s = e.dropdownItems,
                        u = e.successDivData,
                        l = e.imageSrc,
                        c = e.errorMessages,
                        d = e.formHeading,
                        m = e.sectionHeading,
                        f = e.submitFormGoogleTrackingData,
                        p = (0, E.useReducer)(It, St),
                        A = (0, Tn.A)(p, 2),
                        h = A[0],
                        g = A[1],
                        v = h.submitSuccess,
                        _ = h.submitFailed,
                        y = h.isformSubmitting,
                        b = function() {
                            return g({
                                type: Vn
                            })
                        },
                        T = {
                            signupSectionRef: t,
                            clearSubmitSuccess: function() {
                                return g({
                                    type: Un
                                })
                            },
                            clearSubmitFailed: function() {
                                return g({
                                    type: Fn
                                })
                            },
                            onFormSubmit: function(e) {
                                var t;
                                g({
                                    type: Dn
                                }), (t = e, (0, zn.Ay)(Hn.Vpg, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(t)
                                }).then((function(e) {
                                    return e.json()
                                }))).then((function(e) {
                                    "success" === e.status ? ((0, yt.jH)(f), (0, bt.y)(Tt.$, n), g({
                                        type: kn
                                    })) : b()
                                })).catch((function() {
                                    b()
                                }))
                            },
                            isSubmitting: y,
                            submitSuccess: v,
                            submitFailed: _,
                            errorMessages: c,
                            formHeading: d,
                            imageSrc: l,
                            imageAltText: "image",
                            sectionHeading: m,
                            pageName: n,
                            contactNum: r,
                            contactNumDisplay: i,
                            labelMappings: o,
                            isMobile: a,
                            dropdownItems: s,
                            successDivData: u
                        };
                    return E.createElement(_t, T)
                };
            wt.propTypes = {
                pageName: T().string,
                contactNum: T().string,
                imageSrc: T().string,
                isMobile: T().string,
                contactNumDisplay: T().string,
                signupSectionRef: T().shape({
                    current: T().any
                }),
                labelMappings: T().objectOf(T().string),
                dropdownItems: T().arrayOf(T().any),
                successDivData: T().objectOf(T().any),
                errorMessages: T().objectOf(T().any),
                formHeading: T().string,
                sectionHeading: T().string,
                submitFormGoogleTrackingData: T().objectOf(T().any)
            }, wt.defaultProps = {
                pageName: "",
                imageSrc: "",
                signupSectionRef: null,
                isMobile: !1,
                contactNum: Yn.gh,
                contactNumDisplay: Yn.gh,
                labelMappings: {},
                dropdownItems: [],
                successDivData: {},
                errorMessages: {},
                formHeading: "",
                sectionHeading: "",
                submitFormGoogleTrackingData: {}
            };
            const Rt = wt;
            var Nt = t("rid2");
            const Ot = function() {
                return E.createElement(Nt.mg, null, E.createElement("script", {
                    type: "application/ld+json"
                }, JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "WebPage",
                    url: "https://www.zomato.com/enterprise-solutions/gift-cards",
                    name: "Zomato for Work | Gift Cards",
                    datePublished: "2022-11-09",
                    description: "Zomato gift cards are prepaid digital cards that your employees can redeem by ordering food or making dining payments on Zomato app",
                    inLanguage: "en-US"
                })))
            };
            const Ct = function(e) {
                var n = e.isMobile,
                    t = e.header,
                    r = e.whyGiftCardSection,
                    i = e.howToGetGiftCardsSection,
                    a = e.formData,
                    s = e.workLogoUrl,
                    u = (e.solutions, e.footerSectionData, e.imInterestedGoogleTrackingData, e.submitFormGoogleTrackingData),
                    l = (e.pageName, e.scrollToForm),
                    c = E.useRef(null),
                    d = E.useRef(null),
                    m = E.useCallback((function() {}), []);
                return E.useEffect((function() {
                    l && (0, o.default)(c, "current.scrollIntoView") && c.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }), [l]), E.createElement(E.Fragment, null, E.createElement(Ot, null), E.createElement(F, (0, v.A)({
                    signupSectionRef: c,
                    bannerRef: d
                }, t, {
                    workLogoUrl: s,
                    onGotoSignupClick: m
                })), E.createElement(_.default, null, E.createElement(Oe, {
                    sectionData: r,
                    isMobile: n
                }), E.createElement(nn, {
                    sectionData: i
                })), E.createElement(Rt, (0, v.A)({
                    signupSectionRef: c,
                    isMobile: n
                }, a, {
                    submitFormGoogleTrackingData: u
                })), E.createElement(_.default, null, E.createElement(fn, {
                    title: "FAQs",
                    faqs: [{
                        question: "Where all can Zomato gift cards be used?",
                        answer: "Zomato gift cards are prepaid digital cards that once claimed can be used for food delivery and dining on Zomato."
                    }, {
                        question: "How long are the Zomato Gift Cards valid for?",
                        answer: "All Zomato gift cards are valid for 1 year from the date of issue. Gift Cards will expire after 1 year and cannot be claimed anymore."
                    }, {
                        question: "How to claim a Zomato Gift Card?",
                        answer: "Go to your profile section (top right corner) and click on ‘Zomato credits & gift cards’. Tap on ”Claim gift card” and enter 16 digit code and 6 digit PIN to claim your gift card."
                    }, {
                        question: "What happens when I claim my Zomato Gift Card?",
                        answer: "Once successfully claimed, the gift card amount will be added to your Zomato Credits."
                    }, {
                        question: "Can I use Zomato Credits for making partial payments?",
                        answer: "Yes, you can use Zomato Credits to make partial payments. The amount will first get deducted from Zomato Credits (Credits expiring first will be used first) followed by Edition Wallet balance. Any remaining amount can be paid using a payment method of your choice."
                    }]
                })))
            };
            var xt = t("MKgB"),
                Mt = {
                    header: {
                        heading: "share the gift of food",
                        subtext: "Gift cards are virtual money that your employees can redeem anytime and anywhere by ordering food through Zomato",
                        buttonCaption: "I'm interested",
                        imageLink: "/data/o2_assets/f44649af9e7421f360238aa8c1ed74df1665594247.png"
                    },
                    whyGiftCardSection: {
                        sectionHeading: "why gift cards",
                        sectionDetails: [{
                            heading: "unlimited choices",
                            subtext: "Cake or salad? Smoothie or coffee? Let your employees order whatever they want",
                            imageLink: "/data/o2_assets/441f7b47275e3aabb784fe962f7e97581665653589.png"
                        }, {
                            heading: "long-time validity",
                            subtext: "Credits can be redeemed anytime within one year by ordering on Zomato",
                            imageLink: "/data/o2_assets/cef6a8de5bdc1e6ffd940e446f4c4b491665653593.png"
                        }, {
                            heading: "customisable",
                            subtext: "Choose gift cards of any denomination as per your need, starting at ₹100",
                            imageLink: "/data/o2_assets/53ad696941ed691c575b6a9e145219941665653618.png"
                        }]
                    },
                    howToGetGiftCardsSection: {
                        sectionHeading: "how to get gift cards",
                        sectionDetails: [{
                            heading: "",
                            subtext: "Get in touch with us by sharing your contact details",
                            imageLink: "/data/o2_assets/710da601c245400dbccdbb7ca1dd3fe81665603847.png",
                            indexValue: 1
                        }, {
                            heading: "",
                            subtext: "Our representative will reach out to understand your requirements",
                            imageLink: "/data/o2_assets/05d263ba35200d787d7ff9eb50cba3c01665603847.png",
                            indexValue: 2
                        }, {
                            heading: "",
                            subtext: "Get e-gifts cards delivered straight to employees' Zomato IDs",
                            imageLink: "/data/o2_assets/a231ff125b7af7bb1b4bf33a5a1f59391665603847.png",
                            indexValue: 3
                        }]
                    },
                    formData: {
                        pageName: "gift-cards",
                        contactNum: "01142246966",
                        contactNumDisplay: "01142246966",
                        labelMappings: {
                            email: "Official email address",
                            orgname: "Organisation name",
                            phone: "Phone number",
                            orgHeadCount: "Organisation headcount"
                        },
                        dropdownItems: ["Less than 500", "500 - 1000", "1000 - 3000", "3000 - 5000", "More than 5000"],
                        successDivData: {
                            title: "All Done!",
                            desc: "Sit back and relax while our team of specialists reach out to you!"
                        },
                        imageSrc: "/celebrations/form-bg/2906a84c60795b0f4286e2543ec02f9f1620666808.png",
                        sectionHeading: "Get in touch",
                        formHeading: "Your details",
                        errorMessages: {
                            orgHeadCount: "Enter your organization head count",
                            organization: "Enter the name of your organization",
                            phone: "Enter your phone number (with international code)",
                            email: "Enter your official email address"
                        }
                    },
                    workLogoUrl: "/data/o2_assets/7906bdf310a71f40e1641c439af7de521680413052.png",
                    googleAdsPayload: {
                        zfwImInterestedClick: {
                            eventName: "conversion",
                            payload: {
                                send_to: "AW-958674130/7FNVCKTw7_oCENLpkMkD"
                            }
                        },
                        zfwFormSubmitClick: {
                            eventName: "conversion",
                            payload: {
                                send_to: "AW-958674130/gKX3CKGjm_sCENLpkMkD"
                            }
                        }
                    },
                    setScrollToForm: !1
                };
            const Lt = (0, r.A)((0, i.Ng)((function(e) {
                var n = Mt;
                return {
                    header: (0, o.default)(n, "header", {}),
                    workLogoUrl: (0, o.default)(n, "workLogoUrl", ""),
                    whyGiftCardSection: (0, o.default)(n, "whyGiftCardSection", {}),
                    howToGetGiftCardsSection: (0, o.default)(n, "howToGetGiftCardsSection", {}),
                    formData: (0, o.default)(n, "formData", {}),
                    isMobile: (0, xt.A)(e)
                }
            }), (function() {
                return {}
            })), (0, a.A)({
                reducer: {
                    giftCard: d
                }
            }))(Ct)
        },
        ba8d: (e, n, t) => {
            t.d(n, {
                A: () => Gt
            });
            var r = t("XfWh"),
                i = t("TRpf"),
                o = t("lXQd"),
                a = t("7VrE"),
                s = t("77l8"),
                u = t("HKiI"),
                l = t("VAjR"),
                c = {};
            const d = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                return n.type === u.XJ && n.pageInfo.name === l.gB ? (0, s.A)((0, s.A)({}, e), n.pageData) : e
            };
            var m, f, p, A, h, g, v = t("+9dH"),
                E = t("q1tI"),
                _ = t("2fHp"),
                y = t("RlfA"),
                b = t("17x9"),
                T = t.n(b),
                S = t("vOnD"),
                I = t("j399"),
                w = t("s5TX"),
                R = t("wcxm"),
                N = t("kdDk"),
                O = t("N/Eu"),
                C = t("P62M"),
                x = t("zceU"),
                M = S.default.div(m || (m = (0, y.A)(["\n  position: absolute;\n  bottom: 15rem;\n  left: 50%;\n  transform: translateX(-450px);\n  width: ", ";\n  @media (max-width: 900px) {\n    transform: none;\n    left: 2.4rem;\n    width: ", ";\n  }\n  @media (max-width: 400px) {\n    bottom: ", ";\n  }\n"])), (function(e) {
                    return e.isZomatoForWorkPage ? "69.72%" : ""
                }), (function(e) {
                    return e.isCelebrationsPage ? "90%" : ""
                }), (function(e) {
                    return e.isZomatoForWorkPage ? "4rem" : "10rem"
                })),
                L = (0, S.default)(w.A)(f || (f = (0, y.A)(["\n  color: white;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  font-size: 5.6rem;\n  line-height: 1.2;\n  max-width: 65%;\n  @media (max-width: 480px) {\n    font-size: ", ";\n    line-height: ", ";\n  }\n  @media (max-width: 320px) {\n    font-size: ", ";\n    line-height: ", ";\n  }\n"])), (function(e) {
                    return e.isCelebrationsPage ? "3.6rem" : "4.4rem"
                }), (function(e) {
                    return e.isCelebrationsPage ? "3.6rem" : "1.2"
                }), (function(e) {
                    return e.isCelebrationsPage ? "3rem" : "4.4rem"
                }), (function(e) {
                    return e.isCelebrationsPage ? "3rem" : "1.2"
                })),
                P = (0, S.default)(R.P)(p || (p = (0, y.A)(["\n  color: white;\n  margin-bottom: 3rem;\n  font-weight: 500;\n  width: 45rem;\n  font-size: 1.8rem;\n  line-height: 1.5;\n\n  @media (max-width: 768px) {\n    width: 30rem;\n    font-size: inherit;\n    line-height: 1.5;\n  }\n\n  @media (max-width: 480px) {\n    width: 90%;\n    font-size: inherit;\n    line-height: 1.5;\n  }\n"]))),
                D = S.default.div(A || (A = (0, y.A)(["\n  height: 70vh;\n  position: relative;\n  @media (max-width: 480px) {\n    height: ", ";\n  }\n"])), (function(e) {
                    return e.isZomatoForWorkPage ? "43rem" : "80vh"
                })),
                k = S.default.img(h || (h = (0, y.A)(["\n  margin: ", ";\n"])), (function(e) {
                    return e.margin
                })),
                V = S.default.img(g || (g = (0, y.A)(["\n  top: 2.8rem;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-450px);\n  width: 11.5rem;\n  @media (max-width: 900px) {\n    transform: none;\n    left: 2.4rem;\n  }\n"]))),
                U = function(e) {
                    var n = e.heading,
                        t = void 0 === n ? "" : n,
                        r = e.subtext,
                        i = void 0 === r ? "" : r,
                        a = e.buttonCaption,
                        s = void 0 === a ? "" : a,
                        u = e.imageLink,
                        l = void 0 === u ? "" : u,
                        c = e.signupSectionRef,
                        d = e.bannerRef,
                        m = e.logoUrl,
                        f = e.logoMargin,
                        p = e.isCelebrationsPage,
                        A = e.isZomatoForWorkPage,
                        h = e.workLogoUrl,
                        g = e.onGotoSignupClick;
                    return E.createElement(E.Fragment, null, E.createElement(D, {
                        isZomatoForWorkPage: A,
                        ref: d
                    }, E.createElement(x.A, {
                        img: l,
                        showGradient: !1
                    }), !!h && E.createElement(V, {
                        src: (0, C.I2)(h),
                        alt: t,
                        margin: f,
                        width: "100rem"
                    }), E.createElement(M, {
                        isZomatoForWorkPage: A,
                        isCelebrationsPage: p
                    }, m && E.createElement(k, {
                        src: (0, C.I2)(m),
                        alt: t,
                        margin: f,
                        width: "300rem"
                    }), t && E.createElement(L, {
                        isCelebrationsPage: p
                    }, t), E.createElement(P, {
                        isZomatoForWorkPage: A
                    }, i), E.createElement(N.default, {
                        onClick: function() {
                            (0, o.default)(c, "current.scrollIntoView") && c.current.scrollIntoView({
                                behavior: "smooth"
                            }), g && "function" == typeof g && g()
                        },
                        btnColor: "red",
                        icon: E.createElement(O.default, null),
                        iconAlign: "right"
                    }, s))))
                };
            U.defaultProps = {
                signupSectionRef: null,
                bannerRef: null,
                logoUrl: "",
                logoMargin: "",
                isCelebrationsPage: !1,
                workLogoUrl: "",
                isZomatoForWorkPage: !1,
                onGotoSignupClick: I.default
            }, U.propTypes = {
                heading: T().string.isRequired,
                subtext: T().string.isRequired,
                buttonCaption: T().string.isRequired,
                imageLink: T().string.isRequired,
                signupSectionRef: T().shape({
                    current: T().any
                }),
                bannerRef: T().shape({
                    current: T().any
                }),
                logoUrl: T().string,
                logoMargin: T().string,
                isCelebrationsPage: T().bool,
                workLogoUrl: T().string,
                isZomatoForWorkPage: T().bool,
                onGotoSignupClick: T().func
            };
            const F = U;
            var G, q, H, z, B, j, K = t("dnas"),
                Y = t("lFeK"),
                W = t("SEds"),
                J = t("gAKm"),
                Z = t("kkbd"),
                X = function(e) {
                    var n = e.imageLink,
                        t = e.heading,
                        r = e.subtext;
                    return E.createElement(re, null, E.createElement(te, {
                        src: (0, C.I2)(n)
                    }), E.createElement($, null, E.createElement(Q, null, E.createElement(ee, {
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })), E.createElement(ne, null, r)))
                },
                Q = S.default.div(G || (G = (0, y.A)(["\n  width: 100%;\n  @media (max-width: 480px) {\n    margin-left: 0;\n  }\n"]))),
                $ = S.default.div(q || (q = (0, y.A)(["\n  margin-top: 3rem;\n  padding: 0 0.8rem;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    margin-top: 0;\n    padding: 0;\n    margin-left: 2.4rem;\n    width: 58rem;\n  }\n"]))),
                ee = (0, S.default)(J.default)(H || (H = (0, y.A)(["\n  font-weight: 500;\n  font-size: 1.8rem;\n  line-height: 1.2;\n  color: ", ";\n  text-align: center;\n  @media (max-width: 480px) {\n    text-align: left;\n    padding-top: 0;\n  }\n"])), W.grey.z800),
                ne = (0, S.default)(Z.P)(z || (z = (0, y.A)(["\n  line-height: 1.5;\n  margin: 1.5rem 0 0;\n  text-align: center;\n  color: ", ";\n  max-width: 28.5rem;\n  @media (max-width: 480px) {\n    text-align: left;\n    margin: 0.9rem 0 0;\n  }\n"])), W.grey.z900),
                te = (0, S.default)(Y.default)(B || (B = (0, y.A)(["\n  height: 13rem;\n  width: 13rem;\n  @media (max-width: 480px) {\n    height: 100%;\n    width: 100%;\n  }\n"]))),
                re = S.default.div(j || (j = (0, y.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 30%;\n  justify-content: space-between;\n  margin: 0 auto;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    width: 100%;\n    margin: 3.4rem 0;\n    display: flex;\n  }\n"])));
            X.propTypes = {
                imageLink: T().string,
                heading: T().string,
                subtext: T().string
            }, X.defaultProps = {
                imageLink: "",
                heading: "",
                subtext: ""
            };
            const ie = X;
            var oe, ae, se, ue, le, ce, de = t("HMsx"),
                me = t("5An4"),
                fe = function(e) {
                    var n = e.imageLink,
                        t = e.heading,
                        r = e.subtext;
                    return E.createElement(Ee, null, E.createElement(ve, {
                        src: (0, C.I2)(n)
                    }), E.createElement(Ae, null, E.createElement(pe, null, E.createElement(he, {
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })), E.createElement(ge, null, r)))
                },
                pe = S.default.div(oe || (oe = (0, y.A)(["\n  width: 100%;\n  @media (max-width: 480px) {\n    margin-left: 0;\n  }\n"]))),
                Ae = S.default.div(ae || (ae = (0, y.A)(["\n  padding: 0;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    margin-top: 0;\n    padding: 0;\n    margin-left: 2.4rem;\n    width: 58rem;\n  }\n"]))),
                he = (0, S.default)(J.default)(se || (se = (0, y.A)(["\n  font-weight: 600;\n  font-size: 2rem;\n  line-height: 1.2;\n  color: ", ";\n  text-align: left;\n  @media (max-width: 480px) {\n    text-align: left;\n    padding-top: 0;\n  }\n"])), me.default),
                ge = (0, S.default)(Z.P)(ue || (ue = (0, y.A)(["\n  font-size: 1.4rem;\n  line-height: 1.2;\n  margin: 1.5rem 0 0;\n  text-align: left;\n  color: ", ";\n  max-width: 28.5rem;\n  font-weight: 400;\n  @media (max-width: 480px) {\n    text-align: left;\n    margin: 0.9rem 0 0;\n  }\n"])), de.default.z700),
                ve = (0, S.default)(Y.default)(le || (le = (0, y.A)(["\n  height: auto;\n  width: 10rem;\n  @media (max-width: 480px) {\n    height: auto;\n    width: 100%;\n  }\n"]))),
                Ee = S.default.div(ce || (ce = (0, y.A)(["\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  text-align: left;\n  width: 45%;\n  justify-content: space-between;\n  margin: 0 auto;\n  box-shadow: 0px 4px 6px rgba(28, 28, 28, 0.06);\n  border-radius: 40px;\n  padding: 3rem 4rem;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    width: 100%;\n    margin: 3.4rem 0;\n    display: flex;\n  }\n"])));
            fe.propTypes = {
                imageLink: T().string,
                heading: T().string,
                subtext: T().string
            }, fe.defaultProps = {
                imageLink: "",
                heading: "",
                subtext: ""
            };
            const _e = fe;
            var ye, be, Te, Se = t("TESf"),
                Ie = function(e) {
                    var n = e.sectionData,
                        t = e.isMobile,
                        r = void 0 !== t && t;
                    return E.createElement(we, null, E.createElement(Ne, null, (0, o.default)(n, "sectionHeading", "")), E.createElement(Re, null, (0, o.default)(n, "sectionDetails", []).map((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        return E.createElement(Se.A, (0, v.A)({
                            isMobile: r,
                            MobileComponent: ie,
                            DesktopComponent: _e,
                            key: (0, o.default)(e, "heading", n)
                        }, e))
                    }))))
                },
                we = S.default.div(ye || (ye = (0, y.A)(["\n  margin: 10rem 0;\n  max-width: 90rem;\n  @media (max-width: 480px) {\n    margin: 7.5rem 0;\n  }\n"]))),
                Re = S.default.div(be || (be = (0, y.A)(["\n  display: flex;\n  gap: 2rem;\n  flex-wrap: wrap;\n  align-items: baseline;\n\n  @media (max-width: 480px) {\n    display: block;\n    align-items: center;\n  }\n"]))),
                Ne = (0, S.default)(K.default)(Te || (Te = (0, y.A)(["\n  text-align: center;\n  margin-bottom: 5.3rem;\n  font-weight: 600;\n  font-size: 3.6rem;\n  line-height: 1.2;\n  @media (max-width: 480px) {\n    margin-bottom: 2.8rem;\n    font-size: 2.4rem;\n    line-height: 1.2;\n  }\n"])));
            Ie.propTypes = {
                sectionData: T().objectOf(T().any),
                isMobile: T().bool.isRequired
            }, Ie.defaultProps = {
                sectionData: {}
            };
            const Oe = Ie;
            var Ce, xe, Me, Le, Pe, De, ke, Ve = function(e) {
                    var n = e.imageLink,
                        t = e.subtext,
                        r = e.indexValue;
                    return E.createElement(Be, null, E.createElement(Fe, null, E.createElement(ze, {
                        src: (0, C.I2)(n)
                    }), E.createElement(Ge, null, E.createElement(Ue, null, r))), E.createElement(qe, null, E.createElement(He, null, t)))
                },
                Ue = (0, S.default)(Z.P)(Ce || (Ce = (0, y.A)(["\n  color: white;\n  font-size: 2rem;\n  font-weight: 500;\n  text-align: center;\n"]))),
                Fe = S.default.div(xe || (xe = (0, y.A)(["\n  position: relative;\n  height: 130px;\n  width: 130px;\n  border: 3px solid #ebebeb;\n  border-radius: 50%;\n  background: white;\n\n  @media (max-width: 480px) {\n    height: 40px;\n    width: 40px;\n  }\n"]))),
                Ge = S.default.div(Me || (Me = (0, y.A)(["\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border-radius: 50%;\n  background: #242f64;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),
                qe = S.default.div(Le || (Le = (0, y.A)(["\n  margin-top: 3rem;\n  padding: 0 0.8rem;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    margin-top: 0;\n    padding: 0;\n    margin-left: 2.4rem;\n    width: 58rem;\n  }\n"]))),
                He = (0, S.default)(Z.P)(Pe || (Pe = (0, y.A)(["\n  line-height: 1.5;\n  margin: 1.5rem 0 0;\n  text-align: center;\n  color: ", ";\n  max-width: 28.5rem;\n  @media (max-width: 480px) {\n    text-align: left;\n    margin: 0.9rem 0 0;\n  }\n"])), W.grey.z900),
                ze = (0, S.default)(Y.default)(De || (De = (0, y.A)(["\n  height: 5rem;\n  width: 5rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  @media (max-width: 480px) {\n    height: 2rem;\n    width: 2rem;\n  }\n"]))),
                Be = S.default.div(ke || (ke = (0, y.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 30%;\n  justify-content: space-between;\n  margin: 0 auto;\n  @media (max-width: 480px) {\n    flex-direction: row;\n    width: 100%;\n    margin: 3.4rem 0;\n    display: flex;\n  }\n"])));
            Ve.propTypes = {
                imageLink: T().string,
                indexValue: T().string,
                subtext: T().string
            }, Ve.defaultProps = {
                imageLink: "",
                indexValue: "",
                subtext: ""
            };
            const je = Ve;
            var Ke, Ye, We, Je, Ze = function(e) {
                    var n = e.sectionData,
                        t = e.isMobile,
                        r = void 0 !== t && t;
                    return E.createElement(Qe, null, E.createElement(en, null, (0, o.default)(n, "sectionHeading", "")), E.createElement($e, null, E.createElement(Xe, null), (0, o.default)(n, "sectionDetails", []).map((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        return E.createElement(Se.A, (0, v.A)({
                            isMobile: r,
                            MobileComponent: je,
                            DesktopComponent: je,
                            key: (0, o.default)(e, "heading", n)
                        }, e))
                    }))))
                },
                Xe = S.default.div(Ke || (Ke = (0, y.A)(["\n  border-top: 3px dashed #ebebeb;\n  width: 60%;\n  position: absolute;\n  top: 65px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 0;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                Qe = S.default.div(Ye || (Ye = (0, y.A)(["\n  margin: 10rem 0;\n  max-width: 90rem;\n  @media (max-width: 480px) {\n    margin: 7.5rem 0;\n  }\n"]))),
                $e = S.default.div(We || (We = (0, y.A)(["\n  display: flex;\n  align-items: baseline;\n  position: relative;\n  @media (max-width: 480px) {\n    display: block;\n    align-items: center;\n  }\n"]))),
                en = (0, S.default)(K.default)(Je || (Je = (0, y.A)(["\n  text-align: center;\n  margin-bottom: 5.3rem;\n  font-weight: 600;\n  font-size: 3.6rem;\n  line-height: 1.2;\n  @media (max-width: 480px) {\n    margin-bottom: 2.8rem;\n    font-size: 2.4rem;\n    line-height: 1.2;\n  }\n"])));
            Ze.propTypes = {
                sectionData: T().objectOf(T().any),
                isMobile: T().bool.isRequired
            }, Ze.defaultProps = {
                sectionData: {}
            };
            const nn = Ze;
            var tn, rn, on, an, sn, un = t("e+BS"),
                ln = S.default.div(tn || (tn = (0, y.A)(["\n  height: ", ";\n  overflow: hidden;\n  position: relative;\n  @media (max-width: 480px) {\n    margin: 0 1.2rem;\n  }\n"])), (function(e) {
                    return e.showMore ? "100%" : "32rem"
                })),
                cn = (0, S.default)(Z.P)(rn || (rn = (0, y.A)(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 3.6rem;\n  line-height: 1.5;\n  text-align: center;\n  margin-bottom: 6rem;\n  @media (max-width: 480px) {\n    font-size: 2.4rem;\n  }\n"])), de.default.z900),
                dn = S.default.div(on || (on = (0, y.A)(["\n  margin-bottom: 14rem;\n  margin-top: 2rem;\n  @media (max-width: 480px) {\n    margin-top: 4rem;\n  }\n"]))),
                mn = ((0, S.default)(N.default)(an || (an = (0, y.A)(["\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n"]))), S.default.div(sn || (sn = (0, y.A)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(rgba(255, 255, 255, 0), white);\n"]))), function(e) {
                    var n = e.faqs,
                        t = e.title,
                        r = e.faqsRef;
                    return E.createElement(dn, {
                        ref: r
                    }, E.createElement(cn, null, t), E.createElement(ln, {
                        showMore: !0
                    }, E.createElement(un.nD, null, n.map((function(e) {
                        var n = e.question,
                            t = void 0 === n ? "" : n,
                            r = e.answer,
                            i = void 0 === r ? "" : r;
                        return E.createElement(un.Zk, {
                            key: t,
                            title: t
                        }, i)
                    })))))
                });
            mn.propTypes = {
                faqs: T().arrayOf(T().object),
                faqsRef: T().objectOf(T().any),
                title: T().string
            }, mn.defaultProps = {
                faqs: [],
                faqsRef: null,
                title: ""
            };
            const fn = mn;
            var pn, An, hn, gn, vn, En, _n, yn, bn = t("Vadf"),
                Tn = t("eLLh"),
                Sn = t("FrN4"),
                In = t("VcZT"),
                wn = t("gEOw"),
                Rn = t("hkzt"),
                Nn = t("LSsp"),
                On = "SET_ORGANIZATION_HEAD_COUNT",
                Cn = "SET_ORGANIZATION_NAME",
                xn = "SET_EMAIL",
                Mn = "SET_PHONE",
                Ln = "INIT",
                Pn = "SUMBIT_INITIATE",
                Dn = "SUMBIT_SUCCESS",
                kn = "SUMBIT_FAILED",
                Vn = "CLEAR_SUBMIT_SUCCESS",
                Un = "CLEAR_SUBMIT_FAILED",
                Fn = {
                    orgName: "",
                    requirement: "",
                    startDate: "",
                    email: "",
                    phone: ""
                },
                Gn = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fn,
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        t = n.type,
                        r = n.value;
                    switch (t) {
                        case Ln:
                            return (0, s.A)((0, s.A)({}, e), Fn);
                        case On:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                requirement: r
                            });
                        case Cn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                orgName: r
                            });
                        case xn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                email: r
                            });
                        case Mn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                phone: r
                            });
                        default:
                            return e
                    }
                },
                qn = t("AdJq"),
                Hn = t("sLkX"),
                zn = t("U68s"),
                Bn = t("f773"),
                jn = t("qhHW"),
                Kn = t("t18a"),
                Yn = t("hBVj"),
                Wn = function(e) {
                    var n = e.labelMappings,
                        t = e.errorMessages,
                        r = e.dropdownItems,
                        i = e.isMobile,
                        a = e.isSubmitting,
                        s = (0, E.useReducer)(Gn, Fn),
                        u = (0, bn.A)(s, 2),
                        l = u[0],
                        c = u[1],
                        d = l.orgName,
                        m = l.requirement,
                        f = l.email,
                        p = l.phone,
                        A = function(e) {
                            return !!(0, o.default)(e, "length", !1)
                        };
                    return [{
                        component: zn.P,
                        props: {
                            inputField: Yn.wi,
                            name: "email_id",
                            value: f,
                            onChange: function(e) {
                                return c({
                                    type: xn,
                                    value: e
                                })
                            },
                            matcher: Bn.co,
                            label: (0, o.default)(n, "email", "Email Id"),
                            errorMessage: (0, o.default)(t, "email", Kn.h0)
                        }
                    }, {
                        component: zn.P,
                        props: {
                            inputField: Yn.wi,
                            name: "phone_number",
                            value: p,
                            onChange: function(e) {
                                return c({
                                    type: Mn,
                                    value: e
                                })
                            },
                            matcher: Bn.Vj,
                            label: (0, o.default)(n, "phone", "Phone Number"),
                            errorMessage: (0, o.default)(t, "phone", Kn.h0)
                        }
                    }, {
                        component: zn.P,
                        props: {
                            inputField: Yn.wi,
                            name: "org_name",
                            value: d,
                            onChange: function(e) {
                                return c({
                                    type: Cn,
                                    value: e
                                })
                            },
                            matcher: A,
                            label: (0, o.default)(n, "orgname", "Organization Name"),
                            errorMessage: (0, o.default)(t, "organization", Kn.h0)
                        }
                    }, {
                        component: zn.P,
                        props: {
                            inputField: Yn.bs,
                            name: "requirement",
                            helperText: i ? (0, o.default)(n, "orgHeadCount", "") : "",
                            value: m,
                            dropdownItems: r,
                            matcher: A,
                            onSelect: function(e) {
                                return c({
                                    type: On,
                                    value: e
                                })
                            },
                            label: i ? "Less than 500" : (0, o.default)(n, "orgHeadCount", "")
                        }
                    }, {
                        component: jn.A,
                        props: {
                            name: "submit",
                            caption: "Submit",
                            isButtonLoading: a
                        }
                    }]
                },
                Jn = S.default.div(pn || (pn = (0, y.A)(["\n  padding: 2rem 4rem;\n  background: ", ";\n  box-shadow: 0.8rem 4.6rem 5rem rgba(228, 233, 235, 0.47);\n  border-radius: 0.6rem;\n"])), Nn.default),
                Zn = S.default.div(An || (An = (0, y.A)(["\n  display: ", ";\n"])), (function(e) {
                    return e.isNotVisible ? "none" : "block"
                })),
                Xn = S.default.div(hn || (hn = (0, y.A)(["\n  width: 100%;\n  height: 100%;\n  display: ", ";\n  flex-direction: column;\n  align-items: center;\n  ", "\n"])), (function(e) {
                    return e.isVisible ? "flex" : "none"
                }), (function(e) {
                    return e.isBloggersPage ? (0, S.css)(gn || (gn = (0, y.A)(["\n          padding: 2.75rem 3rem 2.75rem;\n        "]))) : (0, S.css)(vn || (vn = (0, y.A)(["\n          padding: 10rem 4.8rem 8.7rem;\n          @media (max-width: 480px) {\n            padding: 8rem 4.5rem 10rem;\n          }\n        "])))
                })),
                Qn = (0, S.default)(wn.default)(En || (En = (0, y.A)(["\n  margin-bottom: 3rem;\n"]))),
                $n = (0, S.default)(K.default)(_n || (_n = (0, y.A)(["\n  margin-top: 1.8rem;\n  font-size: 3rem;\n  line-height: 4rem;\n  font-weight: 600;\n  @media (max-width: 480px) {\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n  }\n"]))),
                et = (0, S.default)(R.P)(yn || (yn = (0, y.A)(["\n  text-align: center;\n  font-size: 1.8rem;\n  line-height: 2.7rem;\n  margin-top: 1.9rem;\n  @media (max-width: 480px) {\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n  }\n"]))),
                nt = function(e) {
                    var n = e.errorMessages,
                        t = e.isSubmitting,
                        r = e.submitSuccess,
                        i = e.onFormSubmit,
                        a = e.clearSubmitSuccess,
                        u = e.clearSubmitFailed,
                        c = e.submitFailed,
                        d = e.pageName,
                        m = e.labelMappings,
                        f = e.isMobile,
                        p = e.dropdownItems,
                        A = e.successDivData,
                        h = e.buttonText,
                        g = e.userName,
                        _ = e.emailId,
                        y = e.getFormDataProp,
                        b = e.submissionError,
                        T = (0, E.useState)(!1),
                        S = (0, bn.A)(T, 2),
                        I = S[0],
                        w = S[1],
                        R = (0, E.useState)(!1),
                        N = (0, bn.A)(R, 2),
                        O = N[0],
                        C = N[1],
                        x = (0, E.useReducer)(Gn),
                        M = (0, bn.A)(x, 2)[1],
                        L = function() {
                            return M({
                                type: Ln
                            })
                        };
                    (0, E.useEffect)((function() {
                        r && (w(!0), L()), a()
                    }), [r]), (0, E.useEffect)((function() {
                        c && (C(!0), L()), u()
                    }), [c]);
                    var P = d === l.wO ? y : Wn;
                    return E.createElement(Jn, null, E.createElement(Zn, {
                        isNotVisible: I
                    }, E.createElement(zn.H, {
                        onSubmit: function(e) {
                            d === l.wO ? i((0, s.A)({}, e)) : i((0, s.A)((0, s.A)({}, e), {}, {
                                page_name: d
                            }))
                        },
                        resetOnSubmit: !0
                    }, P({
                        isMobile: f,
                        labelMappings: m,
                        isSubmitting: t,
                        errorMessages: n,
                        dropdownItems: p,
                        buttonText: h,
                        userName: g,
                        emailId: _
                    }).map((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        return E.createElement(e.component, (0, v.A)({
                            key: (0, o.default)(e, "props.name", n)
                        }, (0, o.default)(e, "props", {})))
                    })))), E.createElement(Xn, {
                        isVisible: I,
                        isBloggersPage: d === l.wO
                    }, E.createElement(Qn, {
                        size: "100",
                        color: Rn.default.z500
                    }), E.createElement($n, null, (0, o.default)(A, "title", "")), E.createElement(et, null, (0, o.default)(A, "desc", ""))), E.createElement(In.default, {
                        show: O,
                        align: "top",
                        onClose: function() {
                            return C(!1)
                        },
                        text: b || Kn.xQ,
                        type: "error"
                    }))
                };
            nt.propTypes = {
                onFormSubmit: T().func,
                submitSuccess: T().bool,
                isSubmitting: T().bool,
                isMobile: T().bool,
                errorMessages: T().shape({
                    requirement: T().string,
                    organization: T().string,
                    email: T().string,
                    phone: T().string,
                    date: T().string,
                    name: T().string,
                    blogName: T().string,
                    blogUrl: T().string
                }).isRequired,
                clearSubmitSuccess: T().func,
                clearSubmitFailed: T().func,
                submitFailed: T().bool,
                pageName: T().string,
                labelMappings: T().objectOf(T().string),
                setFormRequirement: T().bool,
                dropdownItems: T().arrayOf(T().any),
                successDivData: T().objectOf(T().any),
                buttonText: T().string,
                userName: T().string,
                emailId: T().string,
                getFormDataProp: T().func,
                submissionError: T().string
            }, nt.defaultProps = {
                isSubmitting: !1,
                isMobile: !1,
                submitSuccess: !1,
                onFormSubmit: I.default,
                clearSubmitSuccess: I.default,
                clearSubmitFailed: I.default,
                submitFailed: !1,
                pageName: "",
                labelMappings: {},
                setFormRequirement: !1,
                dropdownItems: [],
                successDivData: {},
                buttonText: "",
                userName: "",
                emailId: "",
                getFormDataProp: I.default,
                submissionError: ""
            };
            const tt = (0, i.Ng)((function(e) {
                return {
                    setFormRequirement: (0, o.default)(e, "pages.celebrations.setFormRequirement", !1)
                }
            }))((0, E.memo)(nt, C.Dl));
            var rt, it, ot, at, st, ut, lt, ct, dt, mt, ft, pt = (0, S.default)(_.default)(rt || (rt = (0, y.A)(["\n  padding-top: 5rem;\n  padding-bottom: 1rem;\n  text-align: center;\n"]))),
                At = S.default.div(it || (it = (0, y.A)(["\n  width: 100%;\n  position: relative;\n\n  @media (max-width: 768px) {\n    margin: 7.5rem 0;\n  }\n"]))),
                ht = (0, S.default)(Tn.default)(ot || (ot = (0, y.A)(["\n  align-items: center;\n"]))),
                gt = (0, S.default)(R.P)(at || (at = (0, y.A)(["\n  margin: 0 0 2.5rem 0;\n  font-weight: 500;\n  line-height: 1.2;\n  font-size: 3.6rem;\n  align-items: center;\n  @media (max-width: 480px) {\n    font-size: 2.4rem;\n    line-height: 1.2;\n  }\n"]))),
                vt = (0, S.default)(Y.default)(st || (st = (0, y.A)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: contain !important;\n  bottom: 0;\n  z-index: -1;\n"]))),
                Et = S.default.div(ut || (ut = (0, y.A)(["\n  background: #ffffff;\n  border-radius: 4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n  height: 50rem;\n"]))),
                _t = S.default.img(lt || (lt = (0, y.A)(["\n  width: 100%;\n  height: auto;\n"]))),
                yt = S.default.div(ct || (ct = (0, y.A)(["\n  padding: 2rem;\n  text-align: left;\n\n  h4 {\n    font-weight: 600;\n    font-size: 3rem;\n    margin: 2rem 0;\n    margin-top: 3rem;\n    color: #1c1c1c;\n  }\n\n  p {\n    font-weight: 400;\n    font-size: 1.6rem;\n    line-height: 1.5;\n    margin: 0;\n    margin-bottom: 3rem;\n    color: #696969;\n  }\n"]))),
                bt = (0, S.default)(N.default)(dt || (dt = (0, y.A)(["\n  border-radius: 0.8rem;\n  width: 100%;\n"]))),
                Tt = S.default.div(mt || (mt = (0, y.A)(["\n  @media (min-width: 815px) {\n    display: none;\n  }\n"]))),
                St = S.default.div(ft || (ft = (0, y.A)(["\n  @media (max-width: 814px) {\n    display: none;\n  }\n"]))),
                It = function(e) {
                    var n = e.image,
                        t = e.heading,
                        r = e.subtext,
                        i = e.ctaText,
                        o = e.onCTAClick;
                    return E.createElement(Et, null, E.createElement(_t, {
                        src: (0, C.I2)(n)
                    }), E.createElement(yt, null, E.createElement("h4", null, t), E.createElement("p", null, r), E.createElement(Tt, null, E.createElement(bt, {
                        size: "medium",
                        onClick: o
                    }, i)), E.createElement(St, null, E.createElement(bt, {
                        size: "large",
                        onClick: o
                    }, i))))
                };
            It.propTypes = {
                image: T().string.isRequired,
                heading: T().string.isRequired,
                subtext: T().string.isRequired,
                ctaText: T().string.isRequired,
                onCTAClick: T().func.isRequired
            };
            var wt = function(e) {
                var n = e.errorMessages,
                    t = void 0 === n ? {} : n,
                    r = e.clearSubmitSuccess,
                    i = e.clearSubmitFailed,
                    o = e.isSubmitting,
                    a = e.submitSuccess,
                    s = e.submitFailed,
                    u = e.onFormSubmit,
                    l = e.formHeading,
                    c = e.sectionHeading,
                    d = e.signupSectionRef,
                    m = e.pageName,
                    f = e.labelMappings,
                    p = e.imageSrc,
                    A = e.imageAltText,
                    h = e.isMobile,
                    g = e.dropdownItems,
                    v = e.successDivData,
                    _ = (0, E.useState)(!1),
                    y = (0, bn.A)(_, 2),
                    b = y[0],
                    T = y[1],
                    S = {
                        errorMessages: t,
                        clearSubmitSuccess: r,
                        clearSubmitFailed: i,
                        isSubmitting: o,
                        submitSuccess: a,
                        onFormSubmit: u,
                        formHeading: l,
                        submitFailed: s,
                        pageName: m,
                        labelMappings: f,
                        isMobile: h,
                        dropdownItems: g,
                        successDivData: v
                    };
                return E.createElement(At, {
                    ref: d
                }, E.createElement(vt, {
                    width: "100%",
                    height: "100%",
                    src: (0, C.I2)(p),
                    alt: A
                }), E.createElement(pt, null, E.createElement(gt, null, c), E.createElement(ht, {
                    gap: 30
                }, E.createElement(Tn.default.Item, {
                    key: "signup-component-content",
                    colD: 6,
                    colT: 6,
                    colM: 12
                }, E.createElement(It, {
                    image: "/data/o2_assets/77026d4d2c01fe795e919f214ed0ebf61669704300.png",
                    heading: "Personal Gifting",
                    subtext: "Treat your loved ones on their special days with gift cards delivered within 24 hours",
                    ctaText: "Buy now",
                    onCTAClick: function() {
                        window.open("https://zomato.woohoo.in/en-gb/e-gift-card/zomato-b2c-e-gift-card-processing")
                    }
                })), E.createElement(Tn.default.Item, {
                    key: "signup-component-form",
                    colD: 6,
                    colT: 6,
                    colM: 12
                }, E.createElement(It, {
                    image: "/data/o2_assets/adecc7aa8c7ee369072d5d5c2fe434af1669703036.png",
                    heading: "Corporate Gifting",
                    subtext: "Celebrate your team’s special moments with gift cards that are customised just for you",
                    ctaText: "Get in touch",
                    onCTAClick: function() {
                        return T(!0)
                    }
                }), E.createElement(Sn.default, {
                    visible: b,
                    isCentered: !0,
                    extraCurved: !0,
                    type: "medium",
                    slideOnMobile: !0,
                    onClose: function() {
                        return T(!1)
                    },
                    title: "Your details"
                }, E.createElement(tt, S))))))
            };
            wt.propTypes = {
                errorMessages: T().objectOf(T().string),
                clearSubmitSuccess: T().func,
                isSubmitting: T().bool,
                submitSuccess: T().bool,
                submitFailed: T().bool,
                onFormSubmit: T().func,
                formHeading: T().string,
                imageSrc: T().string,
                imageAltText: T().string,
                sectionHeading: T().string,
                signupSectionRef: T().shape({
                    current: T().any
                }),
                clearSubmitFailed: T().func,
                pageName: T().string,
                contactNum: T().string,
                contactNumDisplay: T().string,
                labelMappings: T().objectOf(T().string),
                isMobile: T().bool,
                dropdownItems: T().arrayOf(T().any),
                successDivData: T().objectOf(T().any)
            }, wt.defaultProps = {
                errorMessages: {},
                clearSubmitSuccess: I.default,
                clearSubmitFailed: I.default,
                isSubmitting: !1,
                submitSuccess: !1,
                submitFailed: !1,
                onFormSubmit: I.default,
                isMobile: !1,
                formHeading: "",
                imageSrc: "",
                imageAltText: "",
                sectionHeading: "",
                signupSectionRef: null,
                pageName: "",
                contactNum: Kn.gh,
                contactNumDisplay: Kn.gh,
                labelMappings: {},
                dropdownItems: [],
                successDivData: {}
            };
            const Rt = wt;
            var Nt = t("Wc2h"),
                Ot = t("0Rqv"),
                Ct = t("9ybx"),
                xt = {
                    submitSuccess: !1,
                    submitFailed: !1,
                    isformSubmitting: !1
                },
                Mt = function(e, n) {
                    switch (n.type) {
                        case Pn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                isformSubmitting: !0
                            });
                        case Dn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                isformSubmitting: !1,
                                submitSuccess: !0
                            });
                        case kn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                isformSubmitting: !1,
                                submitFailed: !0
                            });
                        case Vn:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                submitSuccess: !1
                            });
                        case Un:
                            return (0, s.A)((0, s.A)({}, e), {}, {
                                submitFailed: !1
                            });
                        default:
                            return e
                    }
                },
                Lt = function(e) {
                    var n = e.pageName,
                        t = e.signupSectionRef,
                        r = e.contactNum,
                        i = e.contactNumDisplay,
                        o = e.labelMappings,
                        a = e.isMobile,
                        s = e.dropdownItems,
                        u = e.successDivData,
                        l = e.imageSrc,
                        c = e.errorMessages,
                        d = e.formHeading,
                        m = e.sectionHeading,
                        f = e.submitFormGoogleTrackingData,
                        p = (0, E.useReducer)(Mt, xt),
                        A = (0, bn.A)(p, 2),
                        h = A[0],
                        g = A[1],
                        v = h.submitSuccess,
                        _ = h.submitFailed,
                        y = h.isformSubmitting,
                        b = function() {
                            return g({
                                type: kn
                            })
                        },
                        T = {
                            signupSectionRef: t,
                            clearSubmitSuccess: function() {
                                return g({
                                    type: Vn
                                })
                            },
                            clearSubmitFailed: function() {
                                return g({
                                    type: Un
                                })
                            },
                            onFormSubmit: function(e) {
                                var t;
                                g({
                                    type: Pn
                                }), (t = e, (0, Hn.Ay)(qn.Vpg, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(t)
                                }).then((function(e) {
                                    return e.json()
                                }))).then((function(e) {
                                    "success" === e.status ? ((0, Nt.jH)(f), (0, Ot.y)(Ct.$, n), g({
                                        type: Dn
                                    })) : b()
                                })).catch((function() {
                                    b()
                                }))
                            },
                            isSubmitting: y,
                            submitSuccess: v,
                            submitFailed: _,
                            errorMessages: c,
                            formHeading: d,
                            imageSrc: l,
                            imageAltText: "image",
                            sectionHeading: m,
                            pageName: n,
                            contactNum: r,
                            contactNumDisplay: i,
                            labelMappings: o,
                            isMobile: a,
                            dropdownItems: s,
                            successDivData: u
                        };
                    return E.createElement(Rt, T)
                };
            Lt.propTypes = {
                pageName: T().string,
                contactNum: T().string,
                imageSrc: T().string,
                isMobile: T().string,
                contactNumDisplay: T().string,
                signupSectionRef: T().shape({
                    current: T().any
                }),
                labelMappings: T().objectOf(T().string),
                dropdownItems: T().arrayOf(T().any),
                successDivData: T().objectOf(T().any),
                errorMessages: T().objectOf(T().any),
                formHeading: T().string,
                sectionHeading: T().string,
                submitFormGoogleTrackingData: T().objectOf(T().any)
            }, Lt.defaultProps = {
                pageName: "",
                imageSrc: "",
                signupSectionRef: null,
                isMobile: !1,
                contactNum: Kn.gh,
                contactNumDisplay: Kn.gh,
                labelMappings: {},
                dropdownItems: [],
                successDivData: {},
                errorMessages: {},
                formHeading: "",
                sectionHeading: "",
                submitFormGoogleTrackingData: {}
            };
            const Pt = Lt;
            var Dt = t("rid2");
            const kt = function() {
                return E.createElement(Dt.mg, null, E.createElement("script", {
                    type: "application/ld+json"
                }, JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "WebPage",
                    url: "https://www.zomato.com/enterprise-solutions/gift-cards",
                    name: "Zomato | Gift Cards",
                    datePublished: "2022-11-29",
                    description: "Treat your favourite people with their favourite food with Zomato Gift Card",
                    inLanguage: "en-US"
                })))
            };
            const Vt = function(e) {
                var n = e.isMobile,
                    t = e.header,
                    r = e.whyGiftCardSection,
                    i = e.howToGetGiftCardsSection,
                    a = e.formData,
                    s = e.workLogoUrl,
                    u = (e.solutions, e.footerSectionData, e.imInterestedGoogleTrackingData, e.submitFormGoogleTrackingData),
                    l = (e.pageName, e.scrollToForm),
                    c = E.useRef(null),
                    d = E.useRef(null),
                    m = E.useCallback((function() {}), []);
                return E.useEffect((function() {
                    l && (0, o.default)(c, "current.scrollIntoView") && c.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }), [l]), E.createElement(E.Fragment, null, E.createElement(kt, null), E.createElement(F, (0, v.A)({
                    signupSectionRef: c,
                    bannerRef: d
                }, t, {
                    workLogoUrl: s,
                    onGotoSignupClick: m
                })), E.createElement(_.default, null, E.createElement(Oe, {
                    sectionData: r,
                    isMobile: n
                })), E.createElement(Pt, (0, v.A)({
                    signupSectionRef: c,
                    isMobile: n
                }, a, {
                    submitFormGoogleTrackingData: u
                })), E.createElement(_.default, null, E.createElement(nn, {
                    sectionData: i
                }), E.createElement(fn, {
                    title: "FAQs",
                    faqs: [{
                        question: "Where all can Zomato gift cards be used?",
                        answer: "Zomato gift cards are prepaid digital cards that once claimed can be used for food delivery and dining on Zomato."
                    }, {
                        question: "How long are the Zomato Gift Cards valid for?",
                        answer: "All Zomato gift cards are valid for 1 year from the date of issue. Gift Cards will expire after 1 year and cannot be claimed anymore."
                    }, {
                        question: "How to claim a Zomato Gift Card?",
                        answer: "Go to your profile section (top right corner) and click on ‘Zomato credits & gift cards’. Tap on ”Claim gift card” and enter 16 digit code and 6 digit PIN to claim your gift card."
                    }, {
                        question: "What happens when I claim my Zomato Gift Card?",
                        answer: "Once successfully claimed, the gift card amount will be added to your Zomato Credits."
                    }, {
                        question: "Can I use Zomato Credits for making partial payments?",
                        answer: "Yes, you can use Zomato Credits to make partial payments. The amount will first get deducted from Zomato Credits (Credits expiring first will be used first) followed by Edition Wallet balance. Any remaining amount can be paid using a payment method of your choice."
                    }]
                })))
            };
            var Ut = t("MKgB"),
                Ft = {
                    header: {
                        heading: "share the gift of food",
                        subtext: "Treat your favourite people with their favourite food with Zomato Gift Card",
                        buttonCaption: "Buy gift card",
                        imageLink: "/data/o2_assets/f44649af9e7421f360238aa8c1ed74df1665594247.png"
                    },
                    whyGiftCardSection: {
                        sectionHeading: "why gift cards",
                        sectionDetails: [{
                            heading: "unlimited choices",
                            subtext: "Cake or salad? Smoothie or coffee? Let your employees order whatever they want",
                            imageLink: "/data/o2_assets/441f7b47275e3aabb784fe962f7e97581665653589.png"
                        }, {
                            heading: "long-time validity",
                            subtext: "Gift cards can be redeemed anytime within one year by ordering on Zomato",
                            imageLink: "/data/o2_assets/cef6a8de5bdc1e6ffd940e446f4c4b491665653593.png"
                        }, {
                            heading: "more flexibility",
                            subtext: "Gift cards can be used to pay bills across multiple orders on both food delivery as well as dining",
                            imageLink: "/data/o2_assets/6e5d419db49dc2bae79f950de39ea1991669690641.png"
                        }, {
                            heading: "customisable",
                            subtext: "Choose gift cards of any denomination as per your need, starting at ₹100",
                            imageLink: "/data/o2_assets/53ad696941ed691c575b6a9e145219941665653618.png"
                        }]
                    },
                    howToGetGiftCardsSection: {
                        sectionHeading: "how to redeem gift cards",
                        sectionDetails: [{
                            heading: "",
                            subtext: "Open Zomato app",
                            imageLink: "/data/o2_assets/72793c9193d75aba7fd1a048acca77a41669693724.png",
                            indexValue: 1
                        }, {
                            heading: "",
                            subtext: "Tap on your profile icon at the top-right corner",
                            imageLink: "/data/o2_assets/ef3baf18f2689988b1304a070e6164531669693797.png",
                            indexValue: 2
                        }, {
                            heading: "",
                            subtext: "Select 'Credits & Gift Cards'",
                            imageLink: "/data/o2_assets/5fe5c9168c54adec61f40d6fe5ed0c2e1669693845.png",
                            indexValue: 3
                        }, {
                            heading: "",
                            subtext: "Tap 'Claim gift card'",
                            imageLink: "/data/o2_assets/ca9321226d634354fa75bd7250f3e7b51669693926.png",
                            indexValue: 4
                        }]
                    },
                    formData: {
                        pageName: "gift-cards",
                        contactNum: "01142246966",
                        contactNumDisplay: "01142246966",
                        labelMappings: {
                            email: "Official email address",
                            orgname: "Organisation name",
                            phone: "Phone number",
                            orgHeadCount: "Organisation headcount"
                        },
                        dropdownItems: ["Less than 500", "500 - 1000", "1000 - 3000", "3000 - 5000", "More than 5000"],
                        successDivData: {
                            title: "All Done!",
                            desc: "Sit back and relax while our team of specialists reach out to you!"
                        },
                        imageSrc: "/celebrations/form-bg/2906a84c60795b0f4286e2543ec02f9f1620666808.png",
                        sectionHeading: "how to get gift cards",
                        formHeading: "Your details",
                        errorMessages: {
                            orgHeadCount: "Enter your organization head count",
                            organization: "Enter the name of your organization",
                            phone: "Enter your phone number (with international code)",
                            email: "Enter your official email address"
                        }
                    },
                    workLogoUrl: "/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png",
                    googleAdsPayload: {
                        zfwImInterestedClick: {
                            eventName: "conversion",
                            payload: {
                                send_to: "AW-958674130/7FNVCKTw7_oCENLpkMkD"
                            }
                        },
                        zfwFormSubmitClick: {
                            eventName: "conversion",
                            payload: {
                                send_to: "AW-958674130/gKX3CKGjm_sCENLpkMkD"
                            }
                        }
                    },
                    setScrollToForm: !1
                };
            const Gt = (0, r.A)((0, i.Ng)((function(e) {
                var n = Ft;
                return {
                    header: (0, o.default)(n, "header", {}),
                    workLogoUrl: (0, o.default)(n, "workLogoUrl", ""),
                    whyGiftCardSection: (0, o.default)(n, "whyGiftCardSection", {}),
                    howToGetGiftCardsSection: (0, o.default)(n, "howToGetGiftCardsSection", {}),
                    formData: (0, o.default)(n, "formData", {}),
                    isMobile: (0, Ut.A)(e)
                }
            }), (function() {
                return {}
            })), (0, a.A)({
                reducer: {
                    giftCard: d
                }
            }))(Vt)
        },
        "9ybx": (e, n, t) => {
            t.d(n, {
                $: () => i,
                S: () => r
            });
            var r = 5459930,
                i = 5459938
        },
        LP7x: (e, n, t) => {
            t.d(n, {
                A: () => d
            });
            var r, i, o = t("RlfA"),
                a = t("q1tI"),
                s = t("vOnD"),
                u = t("BAyj"),
                l = s.default.div(r || (r = (0, o.A)(["\n  margin-bottom: 100px;\n  height: 80vh;\n  width: 100vw;\n  position: relative;\n"]))),
                c = s.default.div(i || (i = (0, o.A)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0) 57.17%,\n      rgba(0, 0, 0, 0.46) 100%\n    ),\n    rgba(0, 0, 0, 0.6);\n"])));
            const d = function() {
                return a.createElement(l, null, a.createElement(u.default, {
                    height: "100%",
                    width: "100%"
                }), a.createElement(c, null))
            }
        },
        hBVj: (e, n, t) => {
            t.d(n, {
                bs: () => T,
                wi: () => b
            });
            var r, i, o, a = t("+9dH"),
                s = t("BkpH"),
                u = t("RlfA"),
                l = t("q1tI"),
                c = t("vOnD"),
                d = t("17x9"),
                m = t.n(d),
                f = t("aowA"),
                p = t("EV5s"),
                A = t("jedE"),
                h = t("9Vqx"),
                g = t("j399"),
                v = ["searchList", "errorMsg", "onBlur", "forceRender"],
                E = (0, c.default)(A.A)(r || (r = (0, u.A)(["\n  margin-bottom: 0.8rem;\n"]))),
                _ = (0, c.default)(f.default)(i || (i = (0, u.A)(["\n  width: 100%;\n  margin-bottom: 0.8rem;\n"]))),
                y = (0, c.default)(p.A)(o || (o = (0, u.A)(["\n  width: 100%;\n  margin-bottom: 2.1rem;\n"]))),
                b = function(e) {
                    var n = e.type,
                        t = e.min,
                        r = e.onChange,
                        i = e.value,
                        o = e.errorMsg,
                        a = e.onBlur,
                        s = e.label;
                    return l.createElement(_, {
                        type: n,
                        min: t,
                        onChange: r,
                        value: i,
                        errorMsg: o,
                        innerWidth: "100%",
                        label: s,
                        onBlur: a
                    })
                };
            b.defaultProps = {
                type: "text",
                min: "",
                onBlur: g.default
            }, b.propTypes = {
                type: m().string,
                min: m().string,
                value: m().string.isRequired,
                errorMsg: m().string.isRequired,
                label: m().string.isRequired,
                onChange: m().func.isRequired,
                onBlur: m().func
            };
            var T = function(e) {
                var n = e.dropdownItems,
                    t = e.label,
                    r = e.value,
                    i = e.onSelect,
                    o = e.helperText;
                return l.createElement(y, {
                    label: t,
                    value: r || t,
                    onSelect: i,
                    helperText: o,
                    width: "100%"
                }, n.map((function(e) {
                    return l.createElement(h.default, {
                        key: e,
                        value: e,
                        label: e
                    })
                })))
            };
            T.propTypes = {
                dropdownItems: m().objectOf(m().any).isRequired,
                label: m().string.isRequired,
                value: m().string,
                helperText: m().string,
                onSelect: m().func.isRequired
            }, T.defaultProps = {
                value: "",
                helperText: ""
            };
            var S = function(e) {
                var n = e.searchList,
                    t = e.errorMsg,
                    r = e.onBlur,
                    i = e.forceRender,
                    o = (0, s.A)(e, v);
                return l.createElement("div", {
                    onBlur: r
                }, l.createElement(E, (0, a.A)({
                    errorText: t,
                    forceRenderValue: i,
                    width: "100%"
                }, o), n.map((function(e) {
                    return l.createElement(h.default, {
                        value: e,
                        label: e
                    })
                }))))
            };
            S.propTypes = {
                searchList: m().arrayOf(m().string).isRequired,
                errorMsg: m().string.isRequired,
                onBlur: m().func.isRequired,
                forceRender: m().bool
            }, S.defaultProps = {
                forceRender: !1
            }
        },
        qhHW: (e, n, t) => {
            t.d(n, {
                A: () => A
            });
            var r, i = t("+9dH"),
                o = t("BkpH"),
                a = t("RlfA"),
                s = t("q1tI"),
                u = t("kdDk"),
                l = t("vOnD"),
                c = t("17x9"),
                d = t.n(c),
                m = ["isPristineForm", "isFormValid", "isButtonLoading", "caption"],
                f = (0, l.default)(u.default)(r || (r = (0, a.A)(["\n  @media (max-width: 480px) {\n    width: 100%;\n  }\n"]))),
                p = function(e) {
                    var n = e.isPristineForm,
                        t = void 0 === n || n,
                        r = e.isFormValid,
                        a = void 0 !== r && r,
                        u = e.isButtonLoading,
                        l = void 0 !== u && u,
                        c = e.caption,
                        d = void 0 === c ? "" : c,
                        p = (0, o.A)(e, m);
                    return s.createElement(f, (0, i.A)({
                        btnColor: "red"
                    }, p, {
                        onBlurFormElement: void 0,
                        disabled: !t && !a,
                        loading: l,
                        type: "submit"
                    }), d)
                };
            p.defaultProps = {
                isPristineForm: !0,
                isFormValid: !1
            }, p.propTypes = {
                isFormValid: d().bool,
                isButtonLoading: d().bool.isRequired,
                caption: d().string.isRequired,
                isPristineForm: d().bool
            };
            const A = p
        },
        t18a: (e, n, t) => {
            t.d(n, {
                CS: () => i,
                gh: () => a,
                h0: () => o,
                xQ: () => r
            });
            var r = "Some error occurred, please check after some time.",
                i = "Your submission was recorded, we will contact you.",
                o = "enter a valid value",
                a = "01142246966"
        },
        "a+iE": (e, n, t) => {
            t.d(n, {
                A: () => le
            });
            var r, i, o, a, s, u, l, c, d, m, f, p, A, h = t("q1tI"),
                g = t("17x9"),
                v = t.n(g),
                E = t("TRpf"),
                _ = t("lXQd"),
                y = t("RlfA"),
                b = t("vOnD"),
                T = t("+9dH"),
                S = t("9quZ"),
                I = t("lFeK"),
                w = t("YFsC"),
                R = t("Wc2h"),
                N = t("/ahK"),
                O = t("wcxm"),
                C = t("YgTD"),
                x = t("2fHp"),
                M = t("SEds"),
                L = b.default.div(r || (r = (0, y.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  @media (max-width: 480px) {\n    flex-direction: column;\n  }\n"]))),
                P = b.default.div(i || (i = (0, y.A)(["\n  position: relative;\n  top: -2.5rem;\n  width: 45rem;\n  margin-left: 2rem;\n  flex-shrink: 0;\n\n  @media (max-width: 768px) {\n    padding-left: 2.5rem;\n    margin-left: 0;\n    width: 48%;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    text-align: center;\n    margin-left: 0;\n    padding-left: 0;\n  }\n"]))),
                D = (0, b.default)(I.default)(o || (o = (0, y.A)(["\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                k = b.default.div(a || (a = (0, y.A)(["\n  display: flex;\n  @media (max-width: 580px) {\n    justify-content: center;\n  }\n"]))),
                V = (0, b.default)(N.default)(s || (s = (0, y.A)(["\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  font-size: 5.4rem;\n  line-height: 5.6rem;\n\n  @media (max-width: 768px) {\n    font-size: ", ";\n    margin-bottom: 1.5rem;\n    line-height: 1.2;\n  }\n\n  @media (max-width: 480px) {\n    font-size: ", ";\n    line-height: 1.2;\n    margin-bottom: 0rem;\n  }\n"])), C.fontSizes.z700, C.fontSizes.z700),
                U = (0, b.default)(O.P)(u || (u = (0, y.A)(["\n  margin-bottom: 2.5rem;\n  width: 100%;\n  font-size: 2.2em;\n  line-height: 3.2rem;\n\n  @media (max-width: 768px) {\n    width: 80%;\n    line-height: 1.2;\n    font-size: 2.5rem;\n  }\n\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                F = b.default.div(l || (l = (0, y.A)(["\n  margin-left: 2rem;\n"]))),
                G = (0, b.default)(O.P)(c || (c = (0, y.A)(["\n  color: ", ";\n  font-size: ", ";\n  margin-bottom: 1.5rem;\n  @media (max-width: 480px) {\n    font-size: ", ";\n  }\n"])), M.grey.z500, C.fontSizes.z400, C.fontSizes.z300),
                q = (0, b.default)(x.default)(d || (d = (0, y.A)(["\n  margin-top: ", ";\n\n  @media (max-width: 768px) {\n    margin-top: 7.5rem;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 7.5rem;\n  }\n"])), (function(e) {
                    return e.isUnited ? "6rem" : "3rem"
                })),
                H = b.default.div(m || (m = (0, y.A)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 2rem;\n  width: 100%;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                z = b.default.div(f || (f = (0, y.A)(["\n  width: 100%;\n  @media (min-width: 480px) {\n    display: none;\n  }\n"]))),
                B = b.default.div(p || (p = (0, y.A)(["\n  @media (min-width: 480px) {\n    display: none;\n  }\n  margin-bottom: 3.5em;\n"]))),
                j = b.default.div(A || (A = (0, y.A)(["\n  @media (min-width: 480px) {\n    display: none;\n  }\n  margin: 0.5em 0 1em 0;\n  font-size: 0.8em;\n  font-weight: 600;\n"]))),
                K = t("gZoF"),
                Y = t("F6eP"),
                W = t("VAjR"),
                J = "MARKETING_CAMPAIGNS",
                Z = {
                    PAGE: "".concat(J, "_%s_PAGE"),
                    DOWNLOAD_APP_SECTION: "".concat(J, "_%s_DOWNLOAD_APP_SECTION"),
                    APP_STORE_BUTTON: "".concat(J, "_%s_APP_STORE_BUTTON"),
                    PLAY_STORE_BUTTON: "".concat(J, "_%s_PLAY_STORE_BUTTON")
                },
                X = {
                    PAGE: "".concat(J, "_%s_PAGE")
                };
            var Q = function(e) {
                var n = e.title,
                    t = e.mobileSubtitle,
                    r = e.imgProps,
                    i = e.secondaryTitle,
                    o = e.subtitle,
                    a = e.className,
                    s = e.isMobile,
                    u = e.desktopImage,
                    l = e.mobileImage,
                    c = e.quicklinksForMobileImage,
                    d = e.eventName,
                    m = function(e) {
                        return function(e, n) {
                            return n.replace("%s", e)
                        }(d, e)
                    };
                (0, h.useEffect)((function() {
                    Y.dV.setPageName(W.Xy).setBusiness(W.Pu.O2), Y.dV.recordImpression({
                        component: m(Z.PAGE),
                        ui_source: m(X.PAGE),
                        meta_data: {
                            isMobile: JSON.stringify(s)
                        }
                    })
                }), []);
                return h.createElement(h.Fragment, null, h.createElement(q, {
                    className: a
                }, h.createElement(L, null, h.createElement(H, {
                    key: "get-app-link-form-image",
                    colD: 6,
                    colT: 6,
                    colM: 12
                }, h.createElement(D, (0, T.A)({
                    src: u,
                    height: "45rem",
                    alt: w.SB,
                    fit: "contain"
                }, r, {
                    doPreload: !0
                }))), h.createElement(z, null, h.createElement(I.default, (0, T.A)({
                    src: l,
                    alt: w.SB,
                    fit: "contain"
                }, r, {
                    doPreload: !0
                }))), h.createElement(B, null, c && h.createElement(I.default, (0, T.A)({
                    src: c,
                    alt: w.SB,
                    fit: "contain"
                }, r, {
                    doPreload: !0
                }))), h.createElement(P, {
                    key: "get-app-link-form-content",
                    colD: 6,
                    colT: 6,
                    colM: 12
                }, h.createElement(V, null, n), h.createElement(V, null, i), h.createElement(U, null, o), h.createElement(j, null, t), h.createElement(G, null, w.bI), h.createElement(k, {
                    onClick: function() {
                        Y.dV.recordClick({
                            component: m(Z.DOWNLOAD_APP_SECTION),
                            ui_source: m(X.PAGE)
                        }), (0, K.Ew)(), (0, R.c5)({
                            eventCategory: w.rC.DOWNLOAD_LINK,
                            eventAction: R.aw.CLICK,
                            eventLabel: w.Mn.DOWNLOAD_LINK
                        })
                    }
                }, h.createElement("div", {
                    onClick: function() {
                        Y.dV.recordClick({
                            component: m(Z.PLAY_STORE_BUTTON),
                            ui_source: m(X.PAGE)
                        })
                    }
                }, h.createElement(S.Playstore, {
                    link: w.yk
                })), h.createElement(F, {
                    onClick: function() {
                        Y.dV.recordClick({
                            component: m(Z.APP_STORE_BUTTON),
                            ui_source: m(X.PAGE)
                        })
                    }
                }, h.createElement(S.Appstore, {
                    link: w.fn
                })))))))
            };
            Q.propTypes = {
                title: v().string,
                secondaryTitle: v().string,
                imgProps: v().objectOf(v().any),
                subtitle: v().string,
                isMobile: v().bool,
                mobileSubtitle: v().string,
                className: v().string,
                desktopImage: v().string,
                mobileImage: v().string,
                quicklinksForMobileImage: v().string,
                eventName: v().string
            }, Q.defaultProps = {
                title: "",
                secondaryTitle: "",
                imgProps: {},
                subtitle: "",
                mobileSubtitle: "",
                desktopImage: "",
                mobileImage: "",
                className: "",
                quicklinksForMobileImage: "",
                isMobile: !1,
                eventName: "DEFAULT_UNKNOWN_EVENT"
            };
            const $ = Q;
            var ee, ne = (0, b.default)($)(ee || (ee = (0, y.A)(["\n  margin: 10rem auto;\n  font-family: OurLexend;\n\n  @media (max-width: 480px) {\n    margin: 2rem 2.4rem 10rem;\n  }\n"]))),
                te = t("+1bB"),
                re = t("77l8"),
                ie = t("HKiI"),
                oe = {};
            const ae = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                return n.type === ie.XJ && n.pageInfo.name === W.Xy ? (0, re.A)((0, re.A)({}, e), n.pageData) : e
            };
            var se = t("MKgB"),
                ue = function(e) {
                    var n = e.title,
                        t = e.subtitle,
                        r = e.secondaryTitle,
                        i = e.mobileSubtitle,
                        o = e.isMobile,
                        a = e.desktopImage,
                        s = e.mobileImage,
                        u = e.quicklinksForMobileImage,
                        l = e.eventName;
                    return h.createElement(te.N3, {
                        reducer: {
                            campaigns: ae
                        }
                    }, h.createElement(ne, {
                        title: n,
                        secondaryTitle: r,
                        subtitle: t,
                        mobileSubtitle: i,
                        isMobile: o,
                        desktopImage: a,
                        mobileImage: s,
                        quicklinksForMobileImage: u,
                        eventName: l
                    }))
                };
            ue.propTypes = {
                title: v().string,
                secondaryTitle: v().string,
                subtitle: v().string,
                mobileSubtitle: v().string,
                desktopImage: v().string,
                mobileImage: v().string,
                quicklinksForMobileImage: v().string,
                isMobile: v().bool,
                eventName: v().string
            }, ue.defaultProps = {
                title: "",
                secondaryTitle: "",
                subtitle: "",
                mobileSubtitle: "",
                desktopImage: "",
                mobileImage: "",
                quicklinksForMobileImage: "",
                isMobile: !1,
                eventName: "DEFAULT_UNKNOWN_EVENT"
            };
            const le = (0, E.Ng)((function(e) {
                var n = (0, _.default)(e, "pages.campaigns.title", ""),
                    t = (0, _.default)(e, "pages.campaigns.secondaryTitle", ""),
                    r = (0, _.default)(e, "pages.campaigns.subtitle", ""),
                    i = (0, _.default)(e, "pages.campaigns.mobileSubtitle", ""),
                    o = (0, _.default)(e, "pages.campaigns.desktopImage", ""),
                    a = (0, _.default)(e, "pages.campaigns.mobileImage", ""),
                    s = (0, _.default)(e, "pages.campaigns.eventName", "");
                return {
                    title: n,
                    subtitle: r,
                    secondaryTitle: t,
                    mobileSubtitle: i,
                    desktopImage: o,
                    mobileImage: a,
                    quicklinksForMobileImage: (0, _.default)(e, "pages.campaigns.quicklinksForMobileImage", ""),
                    isMobile: !!(0, se.A)(e),
                    eventName: s
                }
            }))(ue)
        },
        "A+ar": (e, n, t) => {
            t.d(n, {
                A: () => b
            });
            var r, i, o, a, s, u, l = t("RlfA"),
                c = t("q1tI"),
                d = t("BAyj"),
                m = t("vOnD"),
                f = t("2fHp"),
                p = t("eLLh"),
                A = t("kCs9"),
                h = (0, m.default)(d.default)(r || (r = (0, l.A)(["\n  height: 44px;\n  width: 600px;\n  border-radius: 8px;\n\n  margin-bottom: 15px;\n\n  @media (max-width: 768px) {\n    width: 70%;\n  }\n\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                g = (0, m.default)(d.default)(i || (i = (0, l.A)(["\n  height: 20px;\n  width: 700px;\n  border-radius: 8px;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    width: 80%;\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                v = (0, m.default)(d.default)(o || (o = (0, l.A)(["\n  height: 254px;\n  width: 100%;\n  border-radius: 8px;\n  margin: auto;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 225px;\n    width: 100%;\n  }\n"]))),
                E = (0, m.default)(d.default)(a || (a = (0, l.A)(["\n  height: 150px;\n  width: 100%;\n  border-radius: 8px;\n  margin: auto;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 150px;\n    width: 100%;\n    display: none;\n  }\n"]))),
                _ = (0, m.default)(p.default)(s || (s = (0, l.A)(["\n  margin-top: 100px;\n\n  @media (max-width: 768px) {\n    margin-top: 75px;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 75px;\n  }\n"]))),
                y = (0, m.default)(d.default)(u || (u = (0, l.A)(["\n  display: none;\n\n  @media (max-width: 480px) {\n    display: inherit;\n    border-radius: 8px;\n    width: 80%;\n    margin: initial;\n    margin-bottom: 25px;\n    height: 36px;\n  }\n"])));
            const b = function() {
                return c.createElement(c.Fragment, null, c.createElement(A.A, null), c.createElement(f.default, null, c.createElement(_, {
                    gap: 50
                }, c.createElement(p.default.Item, {
                    colD: 6,
                    colT: 6,
                    colM: 12
                }, c.createElement(y, null), c.createElement(v, null)), c.createElement(p.default.Item, {
                    colD: 6,
                    colT: 6,
                    colM: 12
                }, c.createElement(h, null), c.createElement(g, null), c.createElement(E, null)))))
            }
        },
        YrrC: (e, n, t) => {
            t.d(n, {
                A: () => P
            });
            var r, i, o, a = t("RlfA"),
                s = t("q1tI"),
                u = t("vOnD"),
                l = t("2fHp"),
                c = t("CII1"),
                d = t("eLLh"),
                m = t("BAyj"),
                f = u.default.p(r || (r = (0, a.A)([""]))),
                p = (0, u.default)(m.default)(i || (i = (0, a.A)(["\n  height: 3rem;\n  width: 60%;\n"]))),
                A = (0, u.default)(m.default)(o || (o = (0, a.A)(["\n  margin-top: 0.5rem;\n  height: 2rem;\n  width: 90%;\n"])));
            const h = function() {
                return s.createElement(f, null, s.createElement(p, null), s.createElement(A, null), s.createElement(A, null))
            };
            var g, v, E = u.default.section(g || (g = (0, a.A)([""]))),
                _ = (0, u.default)(m.default)(v || (v = (0, a.A)(["\n  height: 18.5rem;\n  width: 100%;\n  border-radius: 0.6rem;\n  @media (max-width: 480px) {\n    height: 10.5rem;\n  }\n"])));
            const y = function() {
                return s.createElement(E, null, s.createElement(_, null), s.createElement(h, null))
            };
            var b, T = u.default.section(b || (b = (0, a.A)(["\n  margin-top: 5.5rem;\n"])));
            const S = function() {
                return s.createElement(T, null, s.createElement(d.default, {
                    gap: 15
                }, (0, c.default)(12).map((function(e) {
                    return s.createElement(d.default.Item, {
                        key: e,
                        colD: 4,
                        colT: 6,
                        colM: 6
                    }, s.createElement(y, null))
                }))))
            };
            var I, w, R = (0, u.default)(m.default)(I || (I = (0, a.A)(["\n  width: 100%;\n  height: 40rem;\n  @media (max-width: 480px) {\n    height: 24rem;\n  }\n"]))),
                N = function() {
                    return s.createElement(N.Wrapper, null, s.createElement(R, null))
                };
            N.Wrapper = u.default.div(w || (w = (0, a.A)(["\n  width: 100%;\n"])));
            const O = N;
            var C, x, M = (0, u.default)(l.default)(C || (C = (0, a.A)(["\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 480px) {\n    flex-direction: column-reverse;\n  }\n  @media (max-width: 768px) {\n    max-width: 90%;\n  }\n"]))),
                L = u.default.div(x || (x = (0, a.A)(["\n  margin: 5rem 0;\n"])));
            const P = function() {
                return s.createElement(M, null, s.createElement(L, null, s.createElement(O, null), s.createElement(S, null)))
            }
        },
        ePP4: (e, n, t) => {
            t.d(n, {
                A: () => M
            });
            var r, i, o, a, s, u, l = t("RlfA"),
                c = t("q1tI"),
                d = t("vOnD"),
                m = t("2fHp"),
                f = t("CII1"),
                p = t("BAyj"),
                A = d.default.p(r || (r = (0, l.A)(["\n  margin: 1rem auto;\n"]))),
                h = (0, d.default)(p.default)(i || (i = (0, l.A)(["\n  height: 3rem;\n  width: 40%;\n"]))),
                g = (0, d.default)(p.default)(o || (o = (0, l.A)(["\n  height: 1.8rem;\n  margin-top: 0.5rem;\n  width: 60%;\n"]))),
                v = d.default.div(a || (a = (0, l.A)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: flex-start;\n  min-height: 5.6rem;\n  margin: 1rem auto;\n  width: 100%;\n"]))),
                E = d.default.div(s || (s = (0, l.A)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  width: 100%;\n"]))),
                _ = (0, d.default)(p.default)(u || (u = (0, l.A)(["\n  margin: 1.6rem 2.4rem;\n  height: 3rem;\n  width: 15rem;\n"])));
            const y = function() {
                return c.createElement(A, null, c.createElement(h, null), c.createElement(g, null), c.createElement(v, null, c.createElement(E, null, (0, f.default)(3).map((function(e) {
                    return c.createElement(_, {
                        key: e
                    })
                })))))
            };
            var b, T, S = t("eLLh"),
                I = d.default.p(b || (b = (0, l.A)([""]))),
                w = (0, d.default)(p.default)(T || (T = (0, l.A)(["\n  height: 21rem;\n  width: 100%;\n  border-radius: 0.6rem;\n"])));
            const R = function() {
                return c.createElement(I, null, c.createElement(S.default, {
                    gap: 20
                }, (0, f.default)(9).map((function(e) {
                    return c.createElement(S.default.Item, {
                        key: e,
                        colD: 4,
                        colT: 6,
                        colM: 6
                    }, c.createElement(w, null))
                }))))
            };
            var N, O, C = (0, d.default)(m.default)(N || (N = (0, l.A)(["\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 480px) {\n    flex-direction: column-reverse;\n  }\n  @media (max-width: 768px) {\n    max-width: 90%;\n  }\n"]))),
                x = d.default.div(O || (O = (0, l.A)(["\n  margin: 5rem 0;\n"])));
            const M = function() {
                return c.createElement(C, null, c.createElement(x, null, c.createElement(y, null), c.createElement(R, null)))
            }
        },
        "/TPN": (e, n, t) => {
            t.d(n, {
                A: () => f
            });
            var r, i, o = t("RlfA"),
                a = t("q1tI"),
                s = t("vOnD"),
                u = t("eLLh"),
                l = t("2fHp"),
                c = t("KKt4"),
                d = (0, s.default)(l.default)(r || (r = (0, o.A)(["\n  margin-top: 10rem;\n\n  @media (max-width: 768px) {\n    margin-top: 7.5rem;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 7.5rem;\n  }\n"]))),
                m = (0, s.default)(c.A)(i || (i = (0, o.A)(["\n  border-radius: 8px;\n"])));
            const f = function() {
                return a.createElement(a.Fragment, null, a.createElement(c.A, {
                    height: "300"
                }), a.createElement(d, null, a.createElement(u.default, {
                    gap: 30
                }, a.createElement(u.default.Item, {
                    colD: 4,
                    colT: 5,
                    colM: 12
                }, a.createElement(m, {
                    height: "20rem"
                })), a.createElement(u.default.Item, {
                    colD: 8,
                    colT: 7,
                    colM: 12
                }, a.createElement(m, {
                    height: "50rem"
                })))))
            }
        },
        "9GJC": (e, n, t) => {
            t.d(n, {
                A: () => y
            });
            var r, i = t("RlfA"),
                o = t("q1tI"),
                a = t("2fHp"),
                s = t("vOnD"),
                u = t("kCs9"),
                l = t("+9dH"),
                c = t("BAyj"),
                d = t("17x9"),
                m = t.n(d),
                f = (0, s.default)(c.default)(r || (r = (0, i.A)(["\n  border-radius: ", ";\n  margin-bottom: 16px;\n"])), (function(e) {
                    return e.radius ? e.radius : 0
                })),
                p = function(e) {
                    var n = e.radius,
                        t = void 0 === n ? 0 : n;
                    return o.createElement(f, (0, l.A)({}, e, {
                        radius: t
                    }))
                };
            p.defaultProps = {
                radius: 0
            }, p.propTypes = {
                radius: m().string
            };
            const A = p;
            var h, g, v = t("KKt4"),
                E = (0, s.default)(A)(h || (h = (0, i.A)(["\n  width: 500;\n  height: 40px;\n\n  @media (max-width: 768px) {\n    height: 36px;\n  }\n\n  @media (max-width: 480px) {\n    height: 30px;\n  }\n"]))),
                _ = (0, s.default)(a.default)(g || (g = (0, i.A)(["\n  margin-top: 100;\n  margin-bottom: 100;\n  @media (max-width: 768px) {\n    margin-top: 75;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 75;\n  }\n"])));
            const y = function() {
                return o.createElement(o.Fragment, null, o.createElement(u.A, null), o.createElement(_, null, o.createElement(E, {
                    radius: 16
                }), o.createElement(v.A, {
                    height: "200px"
                })))
            }
        },
        v3cd: (e, n, t) => {
            t.d(n, {
                A: () => E
            });
            var r, i, o, a, s = t("q1tI"),
                u = t("kCs9"),
                l = t("RlfA"),
                c = t("BAyj"),
                d = t("2fHp"),
                m = t("eLLh"),
                f = t("vOnD"),
                p = (0, f.default)(d.default)(r || (r = (0, l.A)(["\n  margin-top: 40px;\n  @media (max-width: 768px) {\n    margin-top: 40px;\n  }\n  @media (max-width: 480px) {\n    margin-top: 40px;\n  }\n"]))),
                A = (0, f.default)(c.default)(i || (i = (0, l.A)(["\n  width: 100%;\n  height: ", ";\n  border-radius: 8px;\n  margin-bottom: 16px;\n\n  @media (max-width: 768px) {\n    display: ", ";\n  }\n"])), (function(e) {
                    return e.height ? e.height : 100
                }), (function(e) {
                    return e.displayOnTab ? e.displayOnTab : "inherit"
                })),
                h = (0, f.default)(c.default)(o || (o = (0, l.A)(["\n  height: 50px;\n  width: 100%;\n  border-radius: 8px;\n  margin-bottom: 20px;\n"]))),
                g = (0, f.default)(c.default)(a || (a = (0, l.A)(["\n  height: 32px;\n  width: 75;\n  border-radius: 8px;\n  display: none;\n\n  @media (max-width: 768px) {\n    display: ", ";\n  }\n"])), (function(e) {
                    return e.displayOnTab ? e.displayOnTab : "inherit"
                }));
            const v = function() {
                return s.createElement(s.Fragment, null, s.createElement(p, null, s.createElement(m.default, {
                    gap: 15
                }, s.createElement(m.default.Item, {
                    colD: 4,
                    colT: 12,
                    colM: 12
                }, s.createElement(A, {
                    height: 300,
                    displayOnTab: "none"
                }), s.createElement(g, {
                    displayOnTab: "inherit"
                })), s.createElement(m.default.Item, {
                    colD: 8,
                    colT: 12,
                    colM: 12
                }, s.createElement(h, null), s.createElement(A, null), s.createElement(A, null), s.createElement(A, null)))))
            };
            const E = function() {
                return s.createElement(s.Fragment, null, s.createElement(u.A, null), s.createElement(v, null))
            }
        },
        "0S1l": (e, n, t) => {
            t.d(n, {
                A: () => d
            });
            var r, i, o = t("RlfA"),
                a = t("q1tI"),
                s = t("BAyj"),
                u = t("vOnD"),
                l = (0, u.default)(s.default)(r || (r = (0, o.A)(["\n  width: 100%;\n  height: 50rem;\n  margin-bottom: 2rem;\n"]))),
                c = (0, u.default)(s.default)(i || (i = (0, o.A)(["\n  width: 100%;\n  height: 23rem;\n  margin-bottom: 2rem;\n"])));
            const d = function() {
                return a.createElement(a.Fragment, null, a.createElement(l, null), a.createElement(c, null), a.createElement(l, null))
            }
        },
        v7Ez: (e, n, t) => {
            t.d(n, {
                A: () => I
            });
            var r, i, o, a, s, u, l, c, d = t("RlfA"),
                m = t("q1tI"),
                f = t("BAyj"),
                p = t("vOnD"),
                A = t("2fHp"),
                h = t("eLLh"),
                g = (0, p.default)(f.default)(r || (r = (0, d.A)(["\n  height: 4rem;\n  width: 60%;\n  border-radius: 0.8rem;\n  margin-bottom: 3rem;\n  margin-top: 2rem;\n\n  @media (max-width: 768px) {\n    margin-top: 2rem;\n    height: 4rem;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 2rem;\n    height: 3.6rem;\n  }\n"]))),
                v = (0, p.default)(A.default)(i || (i = (0, d.A)([""]))),
                E = (0, p.default)(f.default)(o || (o = (0, d.A)(["\n  width: 30rem;\n  height: 2.5rem;\n  margin-bottom: 1.5rem;\n  border-radius: 0.8rem;\n"]))),
                _ = (0, p.default)(f.default)(a || (a = (0, d.A)(["\n  width: 100%;\n  height: 2.5rem;\n  margin-bottom: 1.5rem;\n  border-radius: 0.8rem;\n"]))),
                y = (0, p.default)(f.default)(s || (s = (0, d.A)(["\n  border-radius: 0.8rem;\n  height: 25rem;\n  width: 100%;\n  margin-bottom: 3rem;\n"]))),
                b = (0, p.default)(f.default)(u || (u = (0, d.A)(["\n  border-radius: 0.8rem;\n  height: 5rem;\n  width: 100%;\n  margin-bottom: 3rem;\n"]))),
                T = (0, p.default)(f.default)(l || (l = (0, d.A)(["\n  border-radius: 0.8rem;\n  height: 20rem;\n  width: 100%;\n  margin-bottom: 3rem;\n"]))),
                S = (0, p.default)(h.default)(c || (c = (0, d.A)(["\n  margin-bottom: 10rem;\n"])));
            const I = function() {
                return m.createElement(m.Fragment, null, m.createElement(v, null, m.createElement(g, null), m.createElement(S, {
                    gap: 20
                }, m.createElement(h.default.Item, {
                    colD: 8,
                    colT: 12,
                    colM: 12
                }, m.createElement(E, null), m.createElement(b, null), m.createElement(E, null), m.createElement(y, null)), m.createElement(h.default.Item, {
                    colD: 4,
                    colT: 12,
                    colM: 12
                }, m.createElement(_, null), m.createElement(y, null), m.createElement(T, null), m.createElement(b, null)))))
            }
        },
        Vyl6: (e, n, t) => {
            t.d(n, {
                A: () => v
            });
            var r, i, o, a, s = t("RlfA"),
                u = t("q1tI"),
                l = t("vOnD"),
                c = t("2fHp"),
                d = t("BAyj"),
                m = t("eLLh"),
                f = t("HMsx"),
                p = l.default.div(r || (r = (0, s.A)(["\n  margin-bottom: 10rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\n  .heading {\n    border-radius: 0.8rem;\n    margin-bottom: 2.5rem;\n    margin-top: 2rem;\n    height: 2.8rem;\n  }\n\n  .subheading-1 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 7.5rem;\n  }\n\n  .subheading-2 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 10rem;\n  }\n\n  .menu-list {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .menu-list.pill-list {\n    margin-bottom: 1.5rem;\n  }\n\n  .tritem {\n    border-radius: 0.8rem;\n    margin-bottom: 1rem;\n  }\n\n  .tritem.sponsored {\n    height: 20rem;\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n\n  .tritem.sponsored-subheading {\n    height: 2.2rem;\n    width: 75%;\n    margin-bottom: 0.5rem;\n  }\n\n  .tritem.sponsored-sub-subheading {\n    height: 1.8rem;\n    width: 60%;\n    margin-bottom: 0.5rem;\n  }\n\n  .pill {\n    height: 3.6rem;\n    border-radius: 1.8rem;\n    width: 100%;\n  }\n\n  .app {\n    margin-bottom: 2rem;\n  }\n\n  .line {\n    margin-top: 0.5rem;\n  }\n\n  .button {\n    border-radius: 0.8rem;\n    margin-right: 1rem;\n  }\n"]))),
                A = l.default.div(i || (i = (0, s.A)(["\n  flex-grow: 1;\n  margin-right: 2rem;\n"]))),
                h = l.default.div(o || (o = (0, s.A)(["\n  flex-shrink: 0;\n  width: 35rem;\n  height: 42rem;\n  border: 1px solid ", ";\n  border-radius: 0.8rem;\n  margin-top: 2rem;\n  padding: 1rem;\n"])), f.default.z100),
                g = l.default.div(a || (a = (0, s.A)(["\n  margin-top: 2rem;\n  display: flex;\n"])));
            const v = function() {
                return u.createElement(c.default, {
                    large: !0
                }, u.createElement(p, null, u.createElement(A, null, u.createElement(d.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), u.createElement(d.default, {
                    className: "tritem",
                    height: "15rem",
                    width: "100%"
                }), u.createElement(m.default, {
                    className: "menu-list",
                    gap: 20
                }, u.createElement(m.default.Item, {
                    colD: 5
                }, u.createElement(d.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                }), u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                })), u.createElement(m.default.Item, {
                    colD: 5
                }, u.createElement(d.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                }), u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                }))), u.createElement(d.default, {
                    className: "subheading",
                    height: "6.8rem",
                    width: "100%"
                }), u.createElement(m.default, {
                    className: "menu-list",
                    gap: 20
                }, u.createElement(m.default.Item, {
                    colD: 3
                }, u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                })), u.createElement(m.default.Item, {
                    colD: 3
                }, u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                }))), u.createElement(d.default, {
                    className: "heading",
                    height: "4rem",
                    width: "40rem"
                })), u.createElement(h, null, u.createElement(d.default, {
                    className: "map",
                    width: "100%",
                    height: "15rem"
                }), u.createElement(d.default, {
                    className: "subheading-1",
                    height: "2.8rem"
                }), u.createElement(d.default, {
                    className: "line",
                    width: "100%",
                    height: "1.5rem"
                }), u.createElement(d.default, {
                    className: "line",
                    width: "70%",
                    height: "1.5rem"
                }), u.createElement(g, null, u.createElement(d.default, {
                    width: "10rem",
                    height: "3.6rem",
                    className: "button"
                }), u.createElement(d.default, {
                    width: "10rem",
                    height: "3.6rem",
                    className: "button"
                })))))
            }
        },
        ZysW: (e, n, t) => {
            t.d(n, {
                A: () => R
            });
            var r, i, o, a, s, u, l, c, d, m = t("RlfA"),
                f = t("q1tI"),
                p = t("BAyj"),
                A = t("vOnD"),
                h = t("2fHp"),
                g = t("eLLh"),
                v = (0, A.default)(p.default)(r || (r = (0, m.A)(["\n  height: 6.4rem;\n  width: 60%;\n  border-radius: 0.8rem;\n  margin-bottom: 1.5rem;\n\n  @media (max-width: 768px) {\n    height: 4rem;\n  }\n\n  @media (max-width: 480px) {\n    height: 3.6rem;\n  }\n"]))),
                E = (0, A.default)(p.default)(i || (i = (0, m.A)(["\n  height: 520px;\n  width: 100%;\n  border-radius: 8px;\n  margin: auto;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 280px;\n    margin-bottom: 25px;\n  }\n"]))),
                _ = (0, A.default)(h.default)(o || (o = (0, m.A)([""]))),
                y = (0, A.default)(p.default)(a || (a = (0, m.A)(["\n  width: 30rem;\n  height: 2.5rem;\n  margin-bottom: 4rem;\n"]))),
                b = (0, A.default)(p.default)(s || (s = (0, m.A)(["\n  width: 100%;\n  height: 2.5rem;\n  margin-bottom: 1.5rem;\n  border-radius: 0.8rem;\n"]))),
                T = (0, A.default)(p.default)(u || (u = (0, m.A)(["\n  border-radius: 0.8rem;\n  height: 25rem;\n  width: 100%;\n  margin-bottom: 1.5rem;\n"]))),
                S = (0, A.default)(p.default)(l || (l = (0, m.A)(["\n  border-radius: 0.8rem;\n  height: 15rem;\n  width: 100%;\n  margin-bottom: 1.5rem;\n"]))),
                I = (0, A.default)(p.default)(c || (c = (0, m.A)(["\n  border-radius: 0.8rem;\n  height: 20rem;\n  width: 100%;\n  margin-bottom: 1.5rem;\n"]))),
                w = (0, A.default)(g.default)(d || (d = (0, m.A)(["\n  margin-bottom: 10rem;\n"])));
            const R = function() {
                return f.createElement(f.Fragment, null, f.createElement(_, null, f.createElement(w, {
                    gap: 20
                }, f.createElement(g.default.Item, {
                    colD: 8,
                    colT: 12,
                    colM: 12
                }, f.createElement(v, null), f.createElement(y, null), f.createElement(E, null)), f.createElement(g.default.Item, {
                    colD: 4,
                    colT: 12,
                    colM: 12
                }, f.createElement(b, null), f.createElement(T, null), f.createElement(S, null), f.createElement(I, null), f.createElement(I, null)))))
            }
        },
        a9dC: (e, n, t) => {
            t.d(n, {
                A3: () => o,
                G3: () => a,
                KE: () => u,
                S5: () => l,
                bU: () => c,
                eS: () => i,
                ei: () => s,
                hp: () => m,
                lD: () => d
            });
            var r = t("77l8"),
                i = {
                    INITIATE: "GET_CART_INITIATE",
                    SUCCESS: "GET_CART_SUCCESS",
                    FAILED: "GET_CART_FAILED",
                    CLEAR: "GET_CART_CLEAR"
                },
                o = "CALCULATE_CART_SUCCESS_OCCURRED",
                a = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return {
                        type: i.INITIATE,
                        payload: e,
                        gotoPaymentsPage: n
                    }
                },
                s = function(e) {
                    return (0, r.A)({
                        type: i.SUCCESS
                    }, e)
                },
                u = function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return {
                        type: i.FAILED,
                        cartErrorDetails: e,
                        showError: n
                    }
                },
                l = function() {
                    return {
                        type: i.CLEAR,
                        payload: {}
                    }
                },
                c = {
                    INITIATE: "INITIALIZE_CALCULATE_CART_INITIATE"
                },
                d = function(e, n) {
                    return {
                        type: c.INITIATE,
                        payload: n,
                        isOrderAboveMinAmount: e
                    }
                },
                m = function(e, n) {
                    return {
                        type: o,
                        resId: e,
                        cartData: n
                    }
                }
        },
        ScDn: (e, n, t) => {
            t.d(n, {
                BL: () => p,
                Bn: () => J,
                E$: () => a,
                F9: () => R,
                Gn: () => i,
                Gp: () => g,
                IY: () => L,
                In: () => Q,
                Jd: () => S,
                Jm: () => Y,
                K7: () => v,
                Ks: () => Z,
                LZ: () => s,
                Lm: () => d,
                OG: () => W,
                Oj: () => h,
                P4: () => y,
                TX: () => m,
                UA: () => A,
                Uu: () => q,
                WO: () => k,
                Wg: () => u,
                Wr: () => H,
                YQ: () => O,
                Zv: () => F,
                aJ: () => X,
                cW: () => c,
                dC: () => P,
                f5: () => o,
                f9: () => f,
                fI: () => I,
                gF: () => U,
                gg: () => N,
                j8: () => M,
                jS: () => V,
                m5: () => K,
                m9: () => D,
                mn: () => z,
                nP: () => b,
                nf: () => B,
                p2: () => w,
                pE: () => C,
                pU: () => j,
                r$: () => _,
                sR: () => E,
                v7: () => G,
                vO: () => x,
                vb: () => T,
                wA: () => l
            });
            var r = t("77l8"),
                i = "UPDATE_REVIEWS",
                o = "LOAD_MORE_PHOTOS",
                a = "SWITCH_GALLERY_TAB",
                s = "POST_RATING",
                u = "POST_REVIEW",
                l = "TOGGLE_BOOKMARK",
                c = "TOGGLE_LIKE_REVIEW",
                d = "ADD_COMMENT_REVIEW",
                m = "ADD_COMMENT_PHOTO",
                f = "DELETE_COMMENT_REVIEW",
                p = "DELETE_COMMENT_PHOTO",
                A = "LOAD_MORE_COMMENTS",
                h = "LOAD_MORE_MANAGEMENT_COMMENTS",
                g = "SET_MENU_IMAGES",
                v = "FOLLOW_REVIEWER",
                E = "ADD_MENU_ITEM",
                _ = "REMOVE_MENU_ITEM",
                y = "UPDATE_PHOTO_LIKE",
                b = "CLEAR_CART",
                T = "UPDATE_LOCAL_STORAGE_CART",
                S = "DELETE_REVIEW",
                I = "REMOVE_ORDER_DATA",
                w = "UPDATE_RES_SERVICEABILITY",
                R = "SET_FREEBIE_DATA",
                N = function(e) {
                    return {
                        type: b,
                        data: e
                    }
                },
                O = function(e) {
                    return {
                        type: E,
                        data: e
                    }
                },
                C = function(e) {
                    return {
                        type: _,
                        data: e
                    }
                },
                x = function(e) {
                    return {
                        type: I,
                        resId: e
                    }
                },
                M = function(e, n) {
                    return (0, r.A)((0, r.A)({
                        type: s
                    }, e), {}, {
                        resId: n
                    })
                },
                L = function(e, n) {
                    return (0, r.A)((0, r.A)({
                        type: u
                    }, e), {}, {
                        resId: n
                    })
                },
                P = function(e) {
                    return {
                        type: l,
                        data: e
                    }
                },
                D = function(e) {
                    return {
                        type: c,
                        reviewId: e
                    }
                },
                k = function(e, n, t) {
                    return {
                        type: d,
                        commentId: n,
                        reviewId: t,
                        entities: e
                    }
                },
                V = function(e, n) {
                    return {
                        type: y,
                        photoId: e,
                        hasLiked: n
                    }
                },
                U = function(e, n, t) {
                    return {
                        type: m,
                        commentId: n,
                        photoId: t,
                        entities: e
                    }
                },
                F = function(e, n, t) {
                    return {
                        type: "EDIT_COMMENT_REVIEW",
                        commentId: n,
                        reviewId: t,
                        entities: e
                    }
                },
                G = function(e, n, t) {
                    return {
                        type: "EDIT_COMMENT_PHOTO",
                        commentId: n,
                        photoId: t,
                        entities: e
                    }
                },
                q = function(e, n) {
                    return {
                        type: f,
                        commentId: e,
                        reviewId: n
                    }
                },
                H = function(e, n) {
                    return {
                        type: p,
                        commentId: e,
                        photoId: n
                    }
                },
                z = function(e, n, t, r) {
                    return {
                        type: A,
                        reviewId: n,
                        commentIds: t,
                        more: r,
                        entities: e
                    }
                },
                B = function(e, n, t, r) {
                    return {
                        type: h,
                        reviewId: n,
                        commentIds: t,
                        more: r,
                        entities: e
                    }
                },
                j = function(e, n, t) {
                    return {
                        type: i,
                        reviewsData: n,
                        resId: t,
                        entities: e
                    }
                },
                K = function(e, n) {
                    return {
                        type: g,
                        data: e,
                        resId: n
                    }
                },
                Y = function(e, n, t, r, i) {
                    return {
                        type: o,
                        entities: e,
                        pageImagesText: n,
                        currentPage: t,
                        photoIds: r,
                        resId: i
                    }
                },
                W = function(e, n, t) {
                    return {
                        type: a,
                        entities: e,
                        galleryData: n,
                        resId: t
                    }
                },
                J = function(e) {
                    return {
                        type: v,
                        reviewId: e
                    }
                },
                Z = function(e) {
                    return {
                        type: S,
                        reviewId: e,
                        resId: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        userId: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                    }
                },
                X = function(e) {
                    return {
                        type: w,
                        resId: e,
                        resServiceablity: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                    }
                },
                Q = function(e) {
                    return {
                        type: R,
                        data: e
                    }
                }
        },
        "cY/j": (e, n, t) => {
            t.d(n, {
                D$: () => o,
                LY: () => s,
                QW: () => a,
                RK: () => u,
                f0: () => i
            });
            var r = t("lXQd"),
                i = "UPDATE_CART_PROGRESS",
                o = function(e) {
                    var n = e.currentState;
                    return {
                        type: i,
                        currentState: n
                    }
                },
                a = {
                    CART_IDLE: "CART_IDLE",
                    CONTINUE_CLICKED: "CONTINUE_CLICKED",
                    LOGIN_IN_PROGRESS: "LOGIN_IN_PROGRESS",
                    LOGIN_FAILED: "LOGIN_FAILED",
                    LOGIN_SUCCESS: "LOGIN_SUCCESS",
                    PARTNER_LOGIN_FAILED: "PARTNER_LOGIN_FAILED",
                    PARTNER_LOGIN_SUCCESS: "PARTNER_LOGIN_SUCCESS",
                    CART_API_CALLED: "CART_API_CALLED",
                    CART_API_SUCCESS: "CART_API_SUCCESS",
                    CART_API_SUCCESS_CHECKOUT_LOADING: "CART_API_SUCCESS_CHECKOUT_LOADING",
                    CART_API_FAILED: "CART_API_FAILED"
                },
                s = function(e) {
                    return (0, r.default)(e, "pages.orderCartProgress.currentState", "")
                },
                u = function(e) {
                    var n = s(e);
                    return [a.CONTINUE_CLICKED, a.LOGIN_IN_PROGRESS, a.LOGIN_SUCCESS, a.CART_API_CALLED].includes(n)
                }
        },
        pjMl: (e, n, t) => {
            t.d(n, {
                A: () => b
            });
            var r = t("q1tI"),
                i = t("17x9"),
                o = t.n(i),
                a = t("TRpf"),
                s = t("lXQd"),
                u = t("5wsu"),
                l = t("6aLt"),
                c = t("en2A"),
                d = t("VAjR"),
                m = t("+9dH"),
                f = t("MGND"),
                p = t("ci2G"),
                A = t("IDVv"),
                h = function(e) {
                    var n = e.name,
                        t = e.isMobile,
                        i = e.subType,
                        o = e.cuisines,
                        a = e.rating_new,
                        s = t && i === d.ND,
                        u = s ? f.s4 : f.rn;
                    return r.createElement(f.Y9, null, r.createElement(f.lf, {
                        extraTopMargin: i === d.ND
                    }, r.createElement(f.ue, null, r.createElement(f.l_, null, r.createElement(f.Z6, null, r.createElement(u, null, n)), r.createElement(f.Pd, null, (0, p.w)(o))), r.createElement(A.A, (0, m.A)({}, a, {
                        showConicalRating: s,
                        ratingV2Size: t ? 200 : 400
                    })))))
                };
            h.propTypes = {
                name: o().string.isRequired,
                cuisines: o().arrayOf(o().object),
                isMobile: o().bool,
                rating_new: o().objectOf(o().object),
                subType: o().string
            }, h.defaultProps = {
                cuisines: [],
                isMobile: !1,
                rating_new: {},
                subType: ""
            };
            const g = h;
            var v = t("NZ+d"),
                E = t("TBd4"),
                _ = t("WCUj"),
                y = function(e) {
                    var n = e.isMobile,
                        t = e.isResHeaderCached,
                        i = e.resName,
                        o = e.cuisines,
                        a = e.ratingNew;
                    return r.createElement(l.mc, {
                        large: !0
                    }, t ? r.createElement(r.Fragment, null, r.createElement(g, {
                        isMobile: n,
                        name: i,
                        subType: d.ND,
                        cuisines: o,
                        rating_new: a
                    }), r.createElement(_.A, null)) : r.createElement(r.Fragment, null, r.createElement(l.xT, {
                        width: "100%",
                        height: "37rem"
                    }), n ? r.createElement(E.A, null) : r.createElement(v.A, null)))
                };
            y.propTypes = {
                isMobile: o().bool,
                isResHeaderCached: o().bool,
                resName: o().string,
                cuisines: o().arrayOf(o().object),
                ratingNew: o().objectOf(o().object)
            }, y.defaultProps = {
                isMobile: !1,
                isResHeaderCached: !1,
                resName: "",
                cuisines: [],
                ratingNew: {}
            };
            const b = (0, a.Ng)((function(e) {
                var n = (0, s.default)(e, "pages.current.resId", 0),
                    t = (0, s.default)(e, "pages.restaurant.".concat(n, ".sections"), {});
                return {
                    isResHeaderCached: (0, s.default)((0, s.default)(t, c.I6, {}), "isResHeaderCached", !1),
                    resName: (0, s.default)((0, s.default)(t, c.I6, {}), "name", !1),
                    ratingNew: (0, s.default)((0, s.default)(t, c.I6, {}), "rating_new", !1),
                    cuisines: (0, s.default)(t, "".concat(c.mn, ".CUISINES"), [])
                }
            }))((0, u.A)(y))
        },
        "6aLt": (e, n, t) => {
            t.d(n, {
                mc: () => E,
                xT: () => _
            });
            var r, i, o, a, s, u, l, c, d, m, f, p = t("RlfA"),
                A = t("vOnD"),
                h = t("2fHp"),
                g = t("BAyj"),
                v = t("HMsx"),
                E = (0, A.default)(h.default)(r || (r = (0, p.A)(["\n  margin-top: 1rem;\n  padding-bottom: 5rem;\n\n  @media (max-width: 480px) {\n    margin: 0;\n    width: 100%;\n  }\n"]))),
                _ = (0, A.default)(g.default)(i || (i = (0, p.A)(["\n  margin-top: 3.2rem;\n\n  @media (max-width: 480px) {\n    margin-top: 0;\n    height: 25rem;\n  }\n"])));
            A.default.div(o || (o = (0, p.A)(["\n  @media (max-width: 480px) {\n    margin: 1rem;\n    margin-bottom: 3rem;\n  }\n"]))), (0, A.default)(g.default)(a || (a = (0, p.A)(["\n  margin-top: 1.4rem;\n\n  @media (max-width: 480px) {\n    margin-top: 1.5rem;\n    height: 2.8rem;\n  }\n"]))), (0, A.default)(g.default)(s || (s = (0, p.A)(["\n  margin-top: ", ";\n\n  @media (max-width: 480px) {\n    margin-top: ", ";\n    height: 1.8rem;\n  }\n"])), (function(e) {
                return e.topMargin && "1rem"
            }), (function(e) {
                return e.topMargin && "0.5rem"
            })), A.default.div(u || (u = (0, p.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))), A.default.div(l || (l = (0, p.A)(["\n  border-radius: 0.6rem;\n  margin: 1.5rem 1rem 1rem 0;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))), A.default.div(c || (c = (0, p.A)(["\n  height: 5.6rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-bottom: 0.2rem solid ", ";\n  margin-bottom: 0.6rem;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"])), v.default.z100), (0, A.default)(g.default)(d || (d = (0, p.A)(["\n  margin: 1.3rem 1.8rem 1.9rem;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))), A.default.div(m || (m = (0, p.A)(["\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))), (0, A.default)(g.default)(f || (f = (0, p.A)(["\n  display: none;\n  @media (max-width: 480px) {\n    display: block;\n    width: 100%;\n    height: 6.6rem;\n    margin: 1rem 0;\n  }\n"])))
        },
        "NZ+d": (e, n, t) => {
            t.d(n, {
                A: () => g
            });
            var r, i, o, a, s = t("RlfA"),
                u = t("q1tI"),
                l = t("vOnD"),
                c = t("BAyj"),
                d = t("eLLh"),
                m = t("HMsx"),
                f = l.default.div(r || (r = (0, s.A)(["\n  margin-bottom: 10rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\n  .heading {\n    border-radius: 0.8rem;\n    margin-bottom: 2.5rem;\n    height: 2.8rem;\n  }\n\n  .subheading-1 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 7.5rem;\n  }\n\n  .subheading-2 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 10rem;\n  }\n\n  .menu-list {\n    margin-bottom: 1rem;\n  }\n\n  .menu-list.pill-list {\n    margin-bottom: 1.5rem;\n  }\n\n  .menu-item {\n    border-radius: 0.8rem;\n  }\n\n  .menu-item.sponsored {\n    height: 20rem;\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n\n  .menu-item.sponsored-subheading {\n    height: 2.2rem;\n    width: 75%;\n    margin-bottom: 0.5rem;\n  }\n\n  .menu-item.sponsored-sub-subheading {\n    height: 1.8rem;\n    width: 60%;\n    margin-bottom: 0.5rem;\n  }\n\n  .pill {\n    height: 3.6rem;\n    border-radius: 1.8rem;\n    width: 100%;\n  }\n\n  .map {\n    margin-bottom: 2rem;\n  }\n\n  .line {\n    margin-top: 0.5rem;\n  }\n\n  .button {\n    border-radius: 0.8rem;\n    margin-right: 1rem;\n  }\n"]))),
                p = l.default.div(i || (i = (0, s.A)(["\n  flex-grow: 1;\n  margin-right: 2rem;\n"]))),
                A = l.default.div(o || (o = (0, s.A)(["\n  flex-shrink: 0;\n  width: 35rem;\n  height: 42rem;\n  border: 1px solid ", ";\n  border-radius: 0.8rem;\n  padding: 1rem;\n"])), m.default.z100),
                h = l.default.div(a || (a = (0, s.A)(["\n  margin-top: 2rem;\n  display: flex;\n"])));
            const g = function() {
                return u.createElement(f, null, u.createElement(p, null, u.createElement(c.default, {
                    className: "heading",
                    height: "2.8rem",
                    width: "30rem"
                }), u.createElement(c.default, {
                    className: "subheading-1",
                    height: "2.8rem",
                    width: "30rem"
                }), u.createElement(d.default, {
                    className: "menu-list",
                    gap: 20
                }, u.createElement(d.default.Item, {
                    colD: 4
                }, u.createElement(c.default, {
                    className: "menu-item",
                    height: "21rem",
                    width: "22rem"
                })), u.createElement(d.default.Item, {
                    colD: 4
                }, u.createElement(c.default, {
                    className: "menu-item",
                    height: "21rem",
                    width: "22rem"
                })), u.createElement(d.default.Item, {
                    colD: 4
                }, u.createElement(c.default, {
                    className: "menu-item",
                    height: "21rem",
                    width: "22rem"
                }))), u.createElement(c.default, {
                    className: "subheading-2",
                    height: "2.8rem",
                    width: "30rem"
                }), u.createElement(d.default, {
                    className: "menu-list pill-list",
                    gap: 10
                }, u.createElement(d.default.Item, {
                    colD: 2
                }, u.createElement(c.default, {
                    className: "pill"
                })), u.createElement(d.default.Item, {
                    colD: 2
                }, u.createElement(c.default, {
                    className: "pill"
                })), u.createElement(d.default.Item, {
                    colD: 2
                }, u.createElement(c.default, {
                    className: "pill"
                }))), u.createElement(c.default, {
                    className: "subheading-2",
                    height: "2.8rem",
                    width: "30rem"
                }), u.createElement(d.default, {
                    className: "menu-list",
                    gap: 15
                }, u.createElement(d.default.Item, {
                    colD: 6
                }, u.createElement(c.default, {
                    className: "menu-item sponsored"
                }), u.createElement(c.default, {
                    className: "menu-item sponsored-subheading"
                }), u.createElement(c.default, {
                    className: "menu-item sponsored-sub-subheading"
                })), u.createElement(d.default.Item, {
                    colD: 6
                }, u.createElement(c.default, {
                    className: "menu-item sponsored"
                }), u.createElement(c.default, {
                    className: "menu-item sponsored-subheading"
                }), u.createElement(c.default, {
                    className: "menu-item sponsored-sub-subheading"
                })))), u.createElement(A, null, u.createElement(c.default, {
                    className: "subheading-1",
                    height: "2.8rem"
                }), u.createElement(c.default, {
                    className: "heading",
                    height: "2.8rem",
                    width: "20rem"
                }), u.createElement(c.default, {
                    className: "subheading-1",
                    height: "3.2rem"
                }), u.createElement(c.default, {
                    className: "map",
                    width: "100%",
                    height: "15rem"
                }), u.createElement(c.default, {
                    className: "line",
                    width: "100%",
                    height: "1.5rem"
                }), u.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "1.5rem"
                }), u.createElement(h, null, u.createElement(c.default, {
                    width: "10rem",
                    height: "3.6rem",
                    className: "button"
                }), u.createElement(c.default, {
                    width: "10rem",
                    height: "3.6rem",
                    className: "button"
                }))))
            }
        },
        TBd4: (e, n, t) => {
            t.d(n, {
                A: () => c
            });
            var r, i = t("RlfA"),
                o = t("q1tI"),
                a = t("vOnD"),
                s = t("BAyj"),
                u = t("eLLh"),
                l = a.default.div(r || (r = (0, i.A)(["\n  width: 100%;\n  padding: 2rem 1rem;\n\n  .heading {\n    border-radius: 0.8rem;\n    margin-bottom: 2.5rem;\n    height: 2.8rem;\n  }\n\n  .subheading-1 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n  }\n\n  .subheading-2 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 10rem;\n  }\n\n  .menu-list {\n    margin-bottom: 1rem;\n  }\n\n  .menu-list.pill-list {\n    margin-bottom: 1.5rem;\n  }\n\n  .menu-item {\n    border-radius: 0.8rem;\n  }\n\n  .menu-item.sponsored {\n    height: 15rem;\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n\n  .menu-item.sponsored-subheading {\n    height: 2.2rem;\n    width: 75%;\n    margin-bottom: 0.5rem;\n  }\n\n  .menu-item.sponsored-sub-subheading {\n    height: 1.8rem;\n    width: 60%;\n    margin-bottom: 0.5rem;\n  }\n\n  .pill {\n    height: 3.6rem;\n    border-radius: 1.8rem;\n    width: 100%;\n  }\n"])));
            const c = function() {
                return o.createElement(l, null, o.createElement(s.default, {
                    className: "heading",
                    height: "2.8rem",
                    width: "30rem"
                }), o.createElement(s.default, {
                    className: "subheading-1",
                    height: "2.8rem",
                    width: "20rem"
                }), o.createElement(u.default, {
                    className: "menu-list",
                    gap: 10
                }, o.createElement(u.default.Item, {
                    colD: 4
                }, o.createElement(s.default, {
                    className: "menu-item",
                    height: "10rem",
                    width: "10rem"
                })), o.createElement(u.default.Item, {
                    colD: 4
                }, o.createElement(s.default, {
                    className: "menu-item",
                    height: "10rem",
                    width: "10rem"
                })), o.createElement(u.default.Item, {
                    colD: 4
                }, o.createElement(s.default, {
                    className: "menu-item",
                    height: "10rem",
                    width: "10rem"
                }))), o.createElement(s.default, {
                    className: "subheading-2",
                    height: "2.8rem",
                    width: "30rem"
                }), o.createElement(u.default, {
                    className: "menu-list pill-list",
                    gap: 10
                }, o.createElement(u.default.Item, {
                    colD: 2
                }, o.createElement(s.default, {
                    className: "pill"
                })), o.createElement(u.default.Item, {
                    colD: 2
                }, o.createElement(s.default, {
                    className: "pill"
                })), o.createElement(u.default.Item, {
                    colD: 2
                }, o.createElement(s.default, {
                    className: "pill"
                })), o.createElement(u.default.Item, {
                    colD: 2
                }, o.createElement(s.default, {
                    className: "pill"
                })), o.createElement(u.default.Item, {
                    colD: 2
                }, o.createElement(s.default, {
                    className: "pill"
                }))), o.createElement(s.default, {
                    className: "subheading-2",
                    height: "2.8rem",
                    width: "30rem"
                }), o.createElement(u.default, {
                    className: "menu-list",
                    gap: 15
                }, o.createElement(u.default.Item, {
                    colD: 6
                }, o.createElement(s.default, {
                    className: "menu-item sponsored"
                }), o.createElement(s.default, {
                    className: "menu-item sponsored-subheading"
                }), o.createElement(s.default, {
                    className: "menu-item sponsored-sub-subheading"
                })), o.createElement(u.default.Item, {
                    colD: 6
                }, o.createElement(s.default, {
                    className: "menu-item sponsored"
                }), o.createElement(s.default, {
                    className: "menu-item sponsored-subheading"
                }), o.createElement(s.default, {
                    className: "menu-item sponsored-sub-subheading"
                }))))
            }
        },
        WCUj: (e, n, t) => {
            t.d(n, {
                A: () => c
            });
            var r, i = t("RlfA"),
                o = t("q1tI"),
                a = t("vOnD"),
                s = t("BAyj"),
                u = t("eLLh"),
                l = a.default.div(r || (r = (0, i.A)(["\n  width: 100%;\n  padding: 2rem 1rem;\n  padding-top: 0rem;\n  .border-radius {\n    border-radius: 0.4rem;\n  }\n  .subheading-2 {\n    padding-bottom: 0;\n  }\n  .offer-list-1 {\n    margin-top: 2.7rem;\n    margin-bottom: 1.4rem;\n  }\n  .offer-list-2 {\n    margin-bottom: 1.9rem;\n  }\n  .offer-list-3 {\n    margin-bottom: 2.2rem;\n  }\n  .order-title {\n    margin-bottom: 2rem;\n  }\n  .dish-heading {\n    margin-bottom: 1.5rem;\n  }\n  .order-menu-list {\n    margin-bottom: 1.9rem;\n  }\n"])));
            const c = function() {
                return o.createElement(l, null, o.createElement(u.default, {
                    className: "offer-list-1",
                    gap: 43
                }, o.createElement(u.default.Item, {
                    colM: 5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "2.5rem"
                })), o.createElement(u.default.Item, {
                    colM: 7,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "2.5rem"
                }))), o.createElement(u.default, {
                    className: "offer-list-2",
                    gap: 11
                }, o.createElement(u.default.Item, {
                    colM: 5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "4.1rem"
                })), o.createElement(u.default.Item, {
                    colM: 5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "4.1rem"
                }))), o.createElement(u.default, {
                    className: "offer-list-3",
                    gap: 150
                }, o.createElement(u.default.Item, {
                    colM: 6,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "2.3rem"
                })), o.createElement(u.default.Item, {
                    colM: 6,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "2.3rem"
                }))), o.createElement(s.default, {
                    className: "subheading-2 order-title border-radius",
                    height: "2.3rem",
                    width: "50%"
                }), o.createElement(u.default, {
                    className: "order-menu-list",
                    gap: 13
                }, o.createElement(u.default.Item, {
                    colD: 3.5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "8.5rem"
                })), o.createElement(u.default.Item, {
                    colD: 5.5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "dish-heading border-radius",
                    height: "2.3rem",
                    width: "70%"
                }), o.createElement(s.default, {
                    className: "dish-subheading border-radius",
                    height: "1.9rem"
                })), o.createElement(u.default.Item, {
                    colD: 3,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    height: "2.3rem"
                }))), o.createElement(u.default, {
                    gap: 13
                }, o.createElement(u.default.Item, {
                    colD: 3.5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "8.5rem"
                })), o.createElement(u.default.Item, {
                    colD: 5.5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "dish-heading border-radius",
                    height: "2.3rem",
                    width: "70%"
                }), o.createElement(s.default, {
                    className: "dish-subheading border-radius",
                    height: "1.9rem"
                })), o.createElement(u.default.Item, {
                    colD: 3,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "2.3rem"
                }))))
            }
        },
        T6B4: (e, n, t) => {
            t.d(n, {
                AB: () => v,
                Bo: () => g,
                CO: () => r,
                Fz: () => y,
                GT: () => l,
                GV: () => b,
                T9: () => A,
                UZ: () => f,
                Vc: () => T,
                Vo: () => d,
                YG: () => S,
                YW: () => p,
                Zm: () => u,
                a: () => a,
                a1: () => E,
                aE: () => _,
                bR: () => m,
                cn: () => c,
                gZ: () => i,
                r9: () => s,
                rO: () => h,
                ti: () => o,
                x2: () => I
            });
            var r = "donations",
                i = "tip",
                o = "total_user",
                a = "amount",
                s = "percentage",
                u = "flatrate",
                l = "freebie",
                c = "@Web:cart",
                d = "@Web:cart:validation:flag",
                m = "Do you want to clear all items in your cart?",
                f = "Your cart has existing items from",
                p = "Do you want to clear it and add items from",
                A = "clear-cart-modal",
                h = 1,
                g = 0,
                v = 1,
                E = 0,
                _ = 1,
                y = 0,
                b = 36e5,
                T = 3e5,
                S = "dish",
                I = "freebie_dish"
        },
        RE6O: (e, n, t) => {
            t.d(n, {
                Mh: () => l,
                On: () => c,
                WQ: () => s,
                uf: () => u
            });
            var r = t("77l8"),
                i = t("AkOy"),
                o = t("r5Zp"),
                a = t("T6B4"),
                s = function(e) {
                    var n = (e.parsedMenuData || {}).timestamp,
                        t = void 0 === n ? 0 : n,
                        r = Date.now();
                    return t && r - t > a.GV
                },
                u = function(e) {
                    if ("undefined" != typeof window) {
                        var n = (0, o.wG)(),
                            t = n.timestamp;
                        if (void 0 === t ? 0 : t) {
                            var i = Date.now() - (a.GV - e),
                                s = (0, r.A)((0, r.A)({}, n), {}, {
                                    timestamp: i
                                });
                            (0, o.Bj)(s)
                        }
                    }
                },
                l = function(e, n, t) {
                    var r = e || {},
                        i = r.restaurantId,
                        o = void 0 === i ? 0 : i,
                        a = r.cartSubtype;
                    return n === o && t === (void 0 === a ? "" : a)
                },
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return function() {
                        try {
                            if ("undefined" != typeof window) {
                                var r = (0, o.wG)();
                                if (s({
                                        parsedMenuData: r
                                    }))(0, o.GS)();
                                else if ((0, i.default)(e) && l(r, n, t)) return {
                                    updatedCartData: r
                                }
                            }
                        } catch (e) {}
                        return {
                            updatedCartData: e
                        }
                    }
                }
        },
        KbIs: (e, n, t) => {
            t.d(n, {
                CG: () => O,
                Gp: () => I,
                WI: () => R,
                YQ: () => S,
                gg: () => T,
                i1: () => C,
                iu: () => N,
                pE: () => w,
                vE: () => x
            });
            var r = t("BkpH"),
                i = t("sPea"),
                o = t("zThL"),
                a = t("77l8"),
                s = t("lXQd"),
                u = t("P62M"),
                l = t("ScDn"),
                c = "ADD_MENU_ITEM",
                d = "ADD_MULTIPLE_MENU_ITEM",
                m = "REMOVE_MENU_ITEM",
                f = "CLOSE_CUSTOMISED_MENU",
                p = "REPEAT_LAST_CUSTOMISATION",
                A = "OPEN_CUSTOMISATION_MENU",
                h = "OPEN_REPEAT_CUSTOMISATION",
                g = "CLOSE_REPEAT_CUSTOMISATION",
                v = "OPEN_REMOVE_ITEM_MENU",
                E = "CLOSE_REMOVE_ITEM_MENU",
                _ = "CLEAR_CART",
                y = "ADD_INSTRUCTION",
                b = "REINIT_MENU",
                T = function() {
                    return {
                        type: _
                    }
                },
                S = function(e) {
                    return {
                        type: c,
                        data: e
                    }
                },
                I = function(e) {
                    return {
                        type: d,
                        data: e
                    }
                },
                w = function(e) {
                    return {
                        type: m,
                        data: e
                    }
                },
                R = function(e) {
                    return {
                        type: p,
                        data: e
                    }
                },
                N = function(e) {
                    return {
                        type: y,
                        data: e
                    }
                },
                O = function(e) {
                    return {
                        type: b,
                        data: e
                    }
                },
                C = function(e, n) {
                    var t = "".concat(e);
                    return n.forEach((function(e) {
                        var n = e.id,
                            r = void 0 === n ? "" : n,
                            i = e.items;
                        r && (void 0 === i ? [] : i).forEach((function(e) {
                            var n = e.item_id;
                            t += void 0 === n ? "" : n
                        }))
                    })), t
                },
                x = function(e, n) {
                    var t = n.type,
                        T = void 0 === t ? "" : t,
                        S = n.data,
                        I = void 0 === S ? {} : S;
                    if (T === b) return (0, a.A)((0, a.A)({}, e), I);
                    var w = I.menuItem,
                        R = void 0 === w ? {} : w,
                        N = I.selectedGroupItemIdentifier,
                        O = void 0 === N ? "" : N,
                        x = I.groups,
                        M = void 0 === x ? [] : x,
                        L = I.menuItemPrice,
                        P = void 0 === L ? 0 : L,
                        D = I.itemId,
                        k = void 0 === D ? "" : D,
                        V = I.instruction,
                        U = void 0 === V ? "" : V,
                        F = I.itemCount,
                        G = void 0 === F ? 0 : F,
                        q = e.totalItemCount,
                        H = void 0 === q ? 0 : q,
                        z = e.totalAmount,
                        B = void 0 === z ? 0 : z,
                        j = e.orderItems,
                        K = void 0 === j ? {} : j,
                        Y = R.item,
                        W = void 0 === Y ? {} : Y,
                        J = W.id,
                        Z = void 0 === J ? "" : J,
                        X = W.price,
                        Q = void 0 === X ? 0 : X,
                        $ = (0, u.EI)(M) || !O ? C(Z, M) : O,
                        ee = K[Z] || {},
                        ne = ee.count,
                        te = void 0 === ne ? 0 : ne,
                        re = ee.selectedGroups,
                        ie = void 0 === re ? {} : re,
                        oe = ie[$] || {},
                        ae = oe.menuItemPrice,
                        se = void 0 === ae ? Q : ae,
                        ue = oe.count,
                        le = void 0 === ue ? 0 : ue,
                        ce = {};
                    if (ce = (0, o.A)({}, $, {
                            groups: M,
                            menuItemPrice: P,
                            count: le + 1
                        }), T === c) return (0, a.A)((0, a.A)({}, e), {}, {
                        orderItems: (0, a.A)((0, a.A)({}, K), {}, (0, o.A)({}, Z, (0, a.A)((0, a.A)({}, ee), {}, {
                            menuItem: R,
                            selectedGroups: (0, a.A)((0, a.A)({}, ie), ce),
                            lastAddedItemGroups: M,
                            count: te + 1
                        }))),
                        totalItemCount: H + 1,
                        totalAmount: B + P
                    });
                    if (T === d) return ce = (0, o.A)({}, $, {
                        groups: M,
                        menuItemPrice: P,
                        count: le + G
                    }), (0, a.A)((0, a.A)({}, e), {}, {
                        orderItems: (0, a.A)((0, a.A)({}, K), {}, (0, o.A)({}, Z, (0, a.A)((0, a.A)({}, ee), {}, {
                            menuItem: R,
                            selectedGroups: (0, a.A)((0, a.A)({}, ie), ce),
                            lastAddedItemGroups: M,
                            count: te + G
                        }))),
                        totalItemCount: H + G,
                        totalAmount: B + G * P
                    });
                    if (T === m) {
                        if (te > 0) {
                            var de = te - 1;
                            if (de > 0) {
                                var me = {},
                                    fe = (ie[$] || {}).count,
                                    pe = void 0 === fe ? 0 : fe;
                                return pe - 1 ? me = (0, o.A)({}, $, (0, a.A)((0, a.A)({}, ie[$]), {}, {
                                    count: pe - 1
                                })) : delete ie[$], (0, a.A)((0, a.A)({}, e), {}, {
                                    orderItems: (0, a.A)((0, a.A)({}, K), {}, (0, o.A)({}, Z, (0, a.A)((0, a.A)({}, ee), {}, {
                                        selectedGroups: (0, a.A)((0, a.A)({}, ie), me),
                                        count: de
                                    }))),
                                    totalItemCount: H - 1,
                                    totalAmount: B - P
                                })
                            }
                            K[Z];
                            var Ae = (0, r.A)(K, [Z].map(i.A));
                            return (0, a.A)((0, a.A)({}, e), {}, {
                                orderItems: (0, a.A)({}, Ae),
                                totalItemCount: H - 1,
                                totalAmount: B - P
                            })
                        }
                        return e
                    }
                    if (T === f) return (0, a.A)((0, a.A)({}, e), {}, {
                        customisationMenu: (0, o.A)({}, k, !1)
                    });
                    if (T === p) return ce = (0, o.A)({}, $, {
                        groups: M,
                        menuItemPrice: se,
                        count: le + 1
                    }), (0, a.A)((0, a.A)({}, e), {}, {
                        orderItems: (0, a.A)((0, a.A)({}, K), {}, (0, o.A)({}, Z, (0, a.A)((0, a.A)({}, ee), {}, {
                            selectedGroups: (0, a.A)((0, a.A)({}, ie), ce),
                            count: te + 1
                        }))),
                        totalItemCount: H + 1,
                        totalAmount: B + se
                    });
                    if (T === A) return (0, a.A)((0, a.A)({}, e), {}, {
                        customisationMenu: (0, o.A)({}, k, !0)
                    });
                    if (T === h) return (0, a.A)((0, a.A)({}, e), {}, {
                        repeatCustomisation: (0, o.A)({}, k, !0)
                    });
                    if (T === g) return (0, a.A)((0, a.A)({}, e), {}, {
                        repeatCustomisation: (0, o.A)({}, k, !1)
                    });
                    if (T === v) return (0, a.A)((0, a.A)({}, e), {}, {
                        removeItemCustomisation: (0, o.A)({}, k, !0)
                    });
                    if (T === E) return (0, a.A)((0, a.A)({}, e), {}, {
                        removeItemCustomisation: (0, o.A)({}, k, !1)
                    });
                    if (T === _) return {};
                    if (T === y) return (0, a.A)((0, a.A)({}, e), {}, {
                        orderItems: (0, a.A)((0, a.A)({}, K), {}, (0, o.A)({}, Z, (0, a.A)((0, a.A)({}, ee), {}, {
                            instruction: U
                        })))
                    });
                    if (T === l.F9) {
                        var he = (n || {}).data.freebieData,
                            ge = void 0 === he ? {} : he,
                            ve = (0, s.default)(e, "orderItems", {}),
                            Ee = ge.itemId,
                            _e = void 0 === Ee ? "" : Ee,
                            ye = ge.numberOfFreebiesInCart,
                            be = void 0 === ye ? 0 : ye,
                            Te = ve[_e] || {},
                            Se = Te.count,
                            Ie = void 0 === Se ? 0 : Se,
                            we = Te.selectedGroups,
                            Re = void 0 === we ? {} : we,
                            Ne = C(_e, []),
                            Oe = Re[Ne],
                            Ce = void 0 === Oe ? {} : Oe;
                        return _e && Ie ? (0, a.A)((0, a.A)({}, e), {}, {
                            orderItems: (0, a.A)((0, a.A)({}, K), {}, (0, o.A)({}, _e, (0, a.A)((0, a.A)({}, Te), {}, {
                                freebieCount: be,
                                selectedGroups: (0, a.A)((0, a.A)({}, Re), {}, (0, o.A)({}, Ne, (0, a.A)((0, a.A)({}, Ce), {}, {
                                    freebieCount: be
                                })))
                            })))
                        }) : e
                    }
                    return e
                }
        },
        "4x9D": (e, n, t) => {
            t.d(n, {
                Um: () => a,
                Z: () => s,
                bC: () => o
            });
            var r = t("AkOy"),
                i = t("T6B4"),
                o = function() {
                    try {
                        var e = window.localStorage.getItem(i.Vo);
                        return (0, r.default)(e) ? 1 : Number(e)
                    } catch (e) {
                        return ""
                    }
                },
                a = function(e) {
                    window.localStorage.setItem(i.Vo, e)
                },
                s = function() {
                    window.localStorage.removeItem(i.Vo)
                }
        },
        cyO1: (e, n, t) => {
            t.d(n, {
                GA: () => a,
                KH: () => s,
                Sw: () => u,
                YY: () => l,
                j$: () => o,
                lY: () => r,
                rc: () => i
            });
            var r = {
                    OPEN: "OPEN_PROMO_BLOCKER",
                    CLOSE: "CLOSE_PROMO_BLOCKER"
                },
                i = "OPEN_PROMO_BLOCKER_ON_PAGE_LOAD",
                o = "CLOSE_PROMO_BLOCKER_ON_PAGE_LOAD",
                a = function() {
                    return {
                        type: r.OPEN
                    }
                },
                s = function() {
                    return {
                        type: r.CLOSE
                    }
                },
                u = function() {
                    return {
                        type: i
                    }
                },
                l = function() {
                    return {
                        type: o
                    }
                }
        },
        FR2j: (e, n, t) => {
            t.d(n, {
                A: () => g
            });
            var r, i, o = t("RlfA"),
                a = t("Vadf"),
                s = t("q1tI"),
                u = t("vOnD"),
                l = t("17x9"),
                c = t.n(l),
                d = t("FrN4"),
                m = t("j399"),
                f = t("HMsx"),
                p = function(e) {
                    var n = e.label,
                        t = e.children,
                        r = e.padding,
                        i = (0, s.useState)(!1),
                        o = (0, a.A)(i, 2),
                        u = o[0],
                        l = o[1];
                    return s.createElement(s.Fragment, null, s.createElement(A, {
                        onClick: function() {
                            return l(!0)
                        }
                    }, t), s.createElement(d.default, {
                        visible: u,
                        onClose: function() {
                            return l(!1)
                        },
                        isCentered: !0
                    }, s.createElement(h, {
                        p: r
                    }, "function" == typeof n ? n() : n)))
                },
                A = u.default.span(r || (r = (0, o.A)([""]))),
                h = u.default.div(i || (i = (0, o.A)(["\n  padding: ", ";\n  color: ", ";\n  display: flex;\n  min-height: 8rem;\n"])), (function(e) {
                    return e.p
                }), f.default.z600);
            p.propTypes = {
                label: c().oneOf([c().func, c().string]),
                children: c().node,
                padding: c().string
            }, p.defaultProps = {
                label: m.default,
                children: null,
                padding: "1.6rem 1rem 2.8rem 1rem"
            };
            const g = p
        },
        fTLx: (e, n, t) => {
            t.d(n, {
                AM: () => ce,
                Cf: () => ne,
                E3: () => X,
                Ft: () => re,
                Mc: () => ie,
                Pd: () => j,
                Rk: () => te,
                Sk: () => K,
                T_: () => $,
                Xo: () => Q,
                Y9: () => q,
                dH: () => Z,
                e8: () => W,
                g$: () => oe,
                gt: () => ue,
                ks: () => J,
                lf: () => H,
                pQ: () => ae,
                rk: () => Y,
                rn: () => z,
                s4: () => B,
                ue: () => se,
                wT: () => le,
                yR: () => ee
            });
            var r, i, o, a, s, u, l, c, d, m, f, p, A, h, g, v, E, _, y, b, T, S, I, w, R, N, O = t("RlfA"),
                C = t("s5TX"),
                x = t("HMsx"),
                M = t("pZ4b"),
                L = t("xJdj"),
                P = t("epTT"),
                D = t("wRyO"),
                k = t("NJ3P"),
                V = t("wcxm"),
                U = t("vOnD"),
                F = t("/ahK"),
                G = t("N/Eu"),
                q = U.default.section(r || (r = (0, O.A)(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 480px) {\n    padding: 0 1rem;\n  }\n"]))),
                H = U.default.section(i || (i = (0, O.A)(["\n  margin-top: 1rem;\n  @media (max-width: 480px) {\n    width: 100%\n    margin-top: ", "rem;\n  }\n"])), (function(e) {
                    return e.extraTopMargin ? 2.4 : 1
                })),
                z = (0, U.default)(C.A)(o || (o = (0, O.A)(["\n  font-weight: 500;\n  font-size: 3.6rem;\n  cursor: pointer;\n  @media (max-width: 480px) {\n    font-size: 2.4rem;\n  }\n"]))),
                B = (0, U.default)(F.default)(a || (a = (0, O.A)(["\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n"]))),
                j = U.default.section(s || (s = (0, O.A)(["\n  font-size: 1.8rem;\n  line-height: 1.5;\n  color: ", ";\n  margin-top: 0.5rem;\n"])), x.default.z600),
                K = U.default.div(u || (u = (0, O.A)(["\n  @media (max-width: 480px) {\n    line-height: 1.2;\n  }\n"]))),
                Y = U.default.a(l || (l = (0, O.A)(["\n  color: ", ";\n  display: inline;\n  text-decoration: none;\n  &:hover {\n    color: ", ";\n  }\n  @media (max-width: 480px) {\n    font-size: 1.4rem;\n    font-weight: 400;\n  }\n"])), x.default.z700, x.default.z900),
                W = U.default.a(c || (c = (0, O.A)(["\n  text-decoration: none;\n  font-size: 1.6rem;\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"])), x.default.z500, x.default.z700),
                J = U.default.section(d || (d = (0, O.A)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.5rem;\n  align-items: flex-start;\n  transition: opacity 0.2s ease-in-out;\n\n  @media (max-width: 480px) {\n    width: ", "%;\n  }\n"])), (function(e) {
                    return e.showNewRating ? 100 : 115
                })),
                Z = U.default.section(m || (m = (0, O.A)(["\n  display: flex;\n  align-items: center;\n  transition: opacity 0.2s ease-in-out;\n\n  @media (max-width: 480px) {\n    width: ", "%;\n    flex-wrap: wrap;\n  }\n"])), (function(e) {
                    return e.showNewRating ? 100 : 115
                })),
                X = U.default.span(f || (f = (0, O.A)(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 1.5;\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"])), M.default.z300),
                Q = U.default.span(p || (p = (0, O.A)(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 1.5;\n  ", "\n\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n    ", "\n  }\n"])), x.default.z600, (function(e) {
                    return e.showOpenNow && (0, U.css)(A || (A = (0, O.A)(["\n      &:before {\n        content: '-';\n        margin: 0 1rem;\n      }\n    "])))
                }), (function(e) {
                    return e.showOpenNow && (0, U.css)(h || (h = (0, O.A)(["\n        &:before {\n          content: '-';\n          margin: 0 1rem;\n        }\n      "])))
                })),
                $ = (0, U.default)(L.A)(g || (g = (0, O.A)(["\n  font-size: 1.4rem;\n"]))),
                ee = (0, U.default)(P.default)(v || (v = (0, O.A)(["\n  margin-left: 0.8rem;\n"]))),
                ne = U.default.section(E || (E = (0, O.A)(["\n  margin: 1.6rem 0 0 1rem;\n  box-shadow: 0 1px 4px rgba(28, 28, 28, 0.08);\n  border-radius: 0.7rem;\n  width: 7.2rem;\n  height: fit-content;\n  cursor: pointer;\n\n  @media (max-width: 480px) {\n    margin: 1.2rem 0 0 0.5rem;\n    width: 5rem;\n    flex-shrink: 0;\n  }\n"]))),
                te = U.default.div(_ || (_ = (0, O.A)(["\n  background: ", ";\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.6rem 0.6rem 0 0;\n"])), (function(e) {
                    return e.bg ? e.bg : D.default.z700
                })),
                re = (0, U.default)(k.A)(y || (y = (0, O.A)(["\n  font-weight: 500;\n  border-radius: ", ";\n  border-top-left-radius: 0.7rem;\n  border-top-right-radius: 0.7rem;\n  text-align: center;\n  height: 3.6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: unset !important;\n\n  @media (max-width: 480px) {\n    height: 3.2rem;\n    font-size: 1.8rem !important;\n  }\n"])), (function(e) {
                    return e.isNew ? "0.7rem" : 0
                })),
                ie = (0, U.default)(V.P)(b || (b = (0, O.A)(["\n  text-align: center;\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"]))),
                oe = (0, U.default)(V.P)(T || (T = (0, O.A)(["\n  text-align: center;\n  @media (max-width: 768px) {\n    font-size: 1rem;\n    color: ", ";\n  }\n\n  @media (max-width: 480px) {\n    font-size: 0.8rem;\n  }\n"])), x.default.z600),
                ae = U.default.span(S || (S = (0, O.A)(["\n  color: ", ";\n  font-size: 1.3rem;\n  line-height: 1.5;\n  margin-top: 0.3rem;\n  &:before {\n    content: '*';\n    margin: 0 0.1rem 0 0;\n  }\n  @media (max-width: 480px) {\n    font-size: 1.1rem;\n  }\n"])), x.default.z500),
                se = U.default.div(I || (I = (0, O.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media (max-width: 480px) {\n    align-items: start;\n  }\n"]))),
                ue = (0, U.default)(G.default)(w || (w = (0, O.A)(["\n  margin-left: 0.5rem;\n"]))),
                le = U.default.a(R || (R = (0, O.A)(["\n  text-decoration: none;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n  font-weight: 400;\n  @media (max-width: 480px) {\n    min-width: 8rem;\n    margin-left: 0.2rem;\n  }\n"])), D.default.z500),
                ce = U.default.div(N || (N = (0, O.A)(["\n  position: relative;\n  margin-bottom: ", ";\n  min-height: 80px;\n  background: #fbfbfb;\n  @media (max-width: 480px) {\n    padding: 0 1rem;\n    margin-bottom: 1rem;\n  }\n  & .dft {\n    position: absolute;\n    top: 0;\n    right: 20px;\n    color: #fff;\n    bottom: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 5px;\n    & .flat-offer-txt {\n      text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.15);\n      letter-spacing: -0.01em;\n      font-weight: 700;\n      font-size: 18px;\n      line-height: 24px;\n    }\n    & .download-app-txt {\n      color: #ffffff;\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 14px;\n    }\n  }\n"])), (function(e) {
                    return e.mb
                }))
        },
        MGND: (e, n, t) => {
            t.d(n, {
                E3: () => q,
                Pd: () => V,
                T_: () => z,
                Xo: () => H,
                Y9: () => L,
                Z6: () => W,
                dH: () => G,
                e8: () => U,
                gt: () => J,
                ks: () => F,
                l_: () => K,
                lf: () => P,
                pQ: () => j,
                rn: () => D,
                s4: () => k,
                ue: () => Y,
                wT: () => Z,
                yR: () => B
            });
            var r, i, o, a, s, u, l, c, d, m, f, p, A, h, g, v, E, _, y, b, T = t("RlfA"),
                S = t("s5TX"),
                I = t("HMsx"),
                w = t("pZ4b"),
                R = t("xJdj"),
                N = t("epTT"),
                O = t("wRyO"),
                C = t("vOnD"),
                x = t("/ahK"),
                M = t("N/Eu"),
                L = C.default.section(r || (r = (0, T.A)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  @media (max-width: 480px) {\n    padding: 0 0 0 1rem;\n  }\n"]))),
                P = C.default.section(i || (i = (0, T.A)(["\n  margin-top: 1rem;\n  width: 100%;\n  @media (max-width: 480px) {\n    margin-top: ", "rem;\n  }\n"])), (function(e) {
                    return e.extraTopMargin ? 2.4 : 1
                })),
                D = (0, C.default)(S.A)(o || (o = (0, T.A)(["\n  font-weight: 500;\n  font-size: 3.6rem;\n  cursor: pointer;\n  @media (max-width: 480px) {\n    font-size: 2.4rem;\n  }\n"]))),
                k = (0, C.default)(x.default)(a || (a = (0, T.A)(["\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n"]))),
                V = C.default.section(s || (s = (0, T.A)(["\n  font-size: 1.8rem;\n  line-height: 1.5;\n  color: ", ";\n  margin-top: 0.5rem;\n"])), I.default.z600),
                U = C.default.a(u || (u = (0, T.A)(["\n  text-decoration: none;\n  font-size: 1.6rem;\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"])), I.default.z500, I.default.z700),
                F = C.default.section(l || (l = (0, T.A)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.5rem;\n  align-items: flex-start;\n  transition: opacity 0.2s ease-in-out;\n\n  @media (max-width: 480px) {\n    width: 100%;\n  }\n"]))),
                G = C.default.section(c || (c = (0, T.A)(["\n  display: flex;\n  align-items: center;\n  transition: opacity 0.2s ease-in-out;\n\n  @media (max-width: 480px) {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n"]))),
                q = C.default.span(d || (d = (0, T.A)(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 1.5;\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"])), w.default.z300),
                H = C.default.span(m || (m = (0, T.A)(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 1.5;\n  ", "\n\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n    ", "\n  }\n"])), I.default.z600, (function(e) {
                    return e.showOpenNow && (0, C.css)(f || (f = (0, T.A)(["\n      &:before {\n        content: '-';\n        margin: 0 1rem;\n      }\n    "])))
                }), (function(e) {
                    return e.showOpenNow && (0, C.css)(p || (p = (0, T.A)(["\n        &:before {\n          content: '-';\n          margin: 0 1rem;\n        }\n      "])))
                })),
                z = (0, C.default)(R.A)(A || (A = (0, T.A)(["\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n"]))),
                B = (0, C.default)(N.default)(h || (h = (0, T.A)(["\n  margin-left: 0.8rem;\n"]))),
                j = C.default.span(g || (g = (0, T.A)(["\n  color: ", ";\n  font-size: 1.3rem;\n  line-height: 1.5;\n  margin-top: 0.3rem;\n  &:before {\n    content: '*';\n    margin: 0 0.1rem 0 0;\n  }\n  @media (max-width: 480px) {\n    font-size: 1.1rem;\n  }\n"])), I.default.z500),
                K = C.default.div(v || (v = (0, T.A)(["\n  width: 100%;\n  @media (max-width: 480px) {\n    padding-right: 0.5rem;\n  }\n"]))),
                Y = C.default.div(E || (E = (0, T.A)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  @media (max-width: 480px) {\n    align-items: end;\n  }\n"]))),
                W = C.default.div(_ || (_ = (0, T.A)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n"]))),
                J = (0, C.default)(M.default)(y || (y = (0, T.A)(["\n  margin-left: 0.5rem;\n"]))),
                Z = C.default.a(b || (b = (0, T.A)(["\n  text-decoration: none;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n  font-weight: 400;\n  @media (max-width: 480px) {\n    min-width: 8rem;\n    margin-top: 0.4rem;\n  }\n"])), O.default.z500)
        },
        en2A: (e, n, t) => {
            t.d(n, {
                $C: () => p,
                A3: () => Ie,
                AG: () => V,
                C1: () => w,
                C2: () => K,
                D2: () => g,
                DI: () => pe,
                DK: () => U,
                DT: () => C,
                Ed: () => he,
                Fi: () => te,
                G0: () => Se,
                GO: () => ve,
                Gh: () => ge,
                Hh: () => Q,
                I3: () => ae,
                I6: () => S,
                JE: () => G,
                Jh: () => T,
                KS: () => i,
                Kc: () => H,
                Mn: () => _,
                My: () => z,
                Np: () => J,
                OK: () => l,
                OV: () => F,
                Ob: () => fe,
                Oj: () => d,
                Or: () => Ae,
                QB: () => se,
                QZ: () => Z,
                Qv: () => f,
                Ro: () => de,
                SC: () => le,
                TK: () => a,
                UA: () => m,
                Uy: () => A,
                W$: () => re,
                W4: () => u,
                WM: () => O,
                YU: () => W,
                Yv: () => x,
                Yx: () => M,
                ZG: () => Te,
                ZU: () => k,
                aO: () => q,
                ah: () => $,
                aw: () => L,
                bh: () => b,
                cI: () => Ee,
                cn: () => P,
                d2: () => D,
                it: () => R,
                iw: () => Y,
                jo: () => _e,
                ku: () => s,
                lz: () => ee,
                mn: () => N,
                n2: () => oe,
                n8: () => y,
                p3: () => B,
                p_: () => be,
                ps: () => X,
                qn: () => v,
                rA: () => ue,
                rC: () => E,
                sC: () => c,
                tZ: () => o,
                uF: () => we,
                v1: () => me,
                vC: () => ye,
                vV: () => ie,
                vW: () => j,
                wR: () => I,
                y2: () => h,
                zv: () => ce,
                zz: () => ne
            });
            var r = t("VAjR"),
                i = "HYGIENE",
                o = "HYPERPURE",
                a = "TRANSPARENCY",
                s = "QUALITY",
                u = "SAFETY_WHO",
                l = "SAFETY_RIDER",
                c = "SAFETY_TEMP",
                d = "Load more management comments",
                m = "Load more comments",
                f = "Okay",
                p = "edit",
                A = "delete",
                h = "publish",
                g = "unfollow",
                v = "follow",
                E = {
                    RES_PAGE: "restaurant page"
                },
                _ = {
                    SHARE: "share",
                    BOOKMARK: "bookmark",
                    DIRECTIONS: "directions top",
                    DIRECTIONS_MAP: "directions map",
                    CALL: "call",
                    TABLE_RESERVATIONS: "table reservations"
                },
                y = "RES_TO_SEARCH_HOME_BACK_EVENT",
                b = "SECTION_IMAGE_CAROUSEL",
                T = "SECTION_REVIEW_AND_ORDER_MODAL_INFO",
                S = "SECTION_BASIC_INFO",
                I = "SECTION_OBP_TAGS",
                w = "SECTION_FEATURE_RAIL",
                R = "SECTION_MAGIC_LINKS",
                N = "SECTION_RES_HEADER_DETAILS",
                O = "SECTION_RES_DETAILS",
                C = "SECTION_MENU_MODAL_INFO",
                x = "SECTION_DAILY_MENU",
                M = "SECTION_DAILY_MENU_HIGHLIGHTS",
                L = "SECTION_BRUNCH_DETAILS",
                P = "SECTION_BUFFET_DETAILS",
                D = "SECTION_FEATURED_COLLECTIONS",
                k = "SECTION_SPONSORED_ADS",
                V = "SECTION_USER_ACTIONS",
                U = "SECTION_TABLE_BOOKING",
                F = "SECTION_RES_CONTACT",
                G = "SECTION_RATING_HISTOGRAM",
                q = "SECTION_RATING_HIGHLIGHTS",
                H = "SECTION_TOP_TAGS",
                z = "SECTION_USER_RATING",
                B = "SECTION_REVIEW_HIGHLIGHTS",
                j = "SECTION_SIMILAR_RES",
                K = "SECTION_EVENTS",
                Y = "SECTION_EVENTS_HIGHLIGHTS",
                W = "SECTION_REVIEWS",
                J = "SECTION_GALLERY_PHOTOS",
                Z = "SECTION_IMAGE_MENU",
                X = "SECTION_BREADCRUMBS",
                Q = "SECTION_RATING_DATA",
                $ = "SECTION_FOOTER",
                ee = "SECTION_UPCOMING_BOOKING",
                ne = "SECTION_GPAY_PROMO_DATA",
                te = "SECTION_PRO_BENEFIT_DETAILS",
                re = "SECTION_DINING_OFFERS",
                ie = "IMAGES",
                oe = "VIDEOS",
                ae = "COLLECTIONS",
                se = "AD_BANNERS",
                ue = "RESTAURANTS",
                le = "REVIEWS",
                ce = "RATING",
                de = "POSITIVE_TAGS",
                me = "NEGATIVE_TAGS",
                fe = "REVIEW_COMMENTS",
                pe = "REVIEW_REPLIES",
                Ae = "PHOTO_COMMENTS",
                he = "EVENTS",
                ge = "SECTION_RESERVATION_DATA",
                ve = "SECTION_TEXT_MENU",
                Ee = 330,
                _e = 220,
                ye = [r.Wt, r.fo, r.b$, r.yK],
                be = [r.Wt, r.fo, r.yK],
                Te = [r.ND, r.s3],
                Se = [r.Wt, r.sc, r.Cr, r.RI],
                Ie = [r.Wt, r.sc, r.Cr, r.ND, r.OH, r.Ak],
                we = 56
        },
        ci2G: (e, n, t) => {
            t.d(n, {
                w: () => a
            });
            var r = t("q1tI"),
                i = t("fTLx"),
                o = t("P62M"),
                a = function(e) {
                    return (0, o.EI)(e) ? r.createElement(i.Sk, null, e.map((function(n, t) {
                        var o = n.name,
                            a = n.url;
                        return r.createElement("span", {
                            key: o
                        }, r.createElement(i.rk, {
                            href: a
                        }, o), t !== e.length - 1 && r.createElement("span", null, ", "))
                    }))) : null
                }
        },
        "n+uj": (e, n, t) => {
            t.d(n, {
                $y: () => A,
                Ld: () => y,
                QE: () => a,
                R7: () => l,
                VP: () => c,
                W5: () => d,
                X4: () => h,
                YP: () => T,
                aT: () => S,
                bb: () => i,
                d0: () => o,
                e5: () => s,
                fk: () => v,
                gX: () => _,
                hw: () => u,
                ic: () => E,
                jl: () => p,
                k6: () => b,
                pm: () => r,
                tz: () => f,
                xK: () => g,
                zX: () => m
            });
            var r = {
                    INITIATE: "LOAD_MORE_SEARCH_RESULTS_INITIATE",
                    SUCCESS: "LOAD_MORE_SEARCH_RESULTS_SUCCESS",
                    FAILED: "LOAD_MORE_SEARCH_RESULTS_FAILED"
                },
                i = "SET_BOTTOM_BAR_TEXT",
                o = {
                    MOUNT: "SEARCH_PAGE_MOUNTED"
                },
                a = function() {
                    return {
                        type: o.MOUNT
                    }
                },
                s = function() {
                    return {
                        type: r.INITIATE
                    }
                },
                u = function(e, n) {
                    return {
                        type: r.SUCCESS,
                        searchResult: e,
                        pageUrl: n
                    }
                },
                l = function() {
                    return {
                        type: r.FAILED
                    }
                },
                c = {
                    INITIATE: "APPLY_FILTERS_INITIATE",
                    SUCCESS: "APPLY_FILTERS_SUCCESS",
                    FAILED: "APPLY_FILTERS_FAILED"
                },
                d = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return {
                        type: c.INITIATE,
                        filters: e,
                        locationChanged: n
                    }
                },
                m = function(e) {
                    return {
                        type: c.SUCCESS,
                        searchResult: e
                    }
                },
                f = function() {
                    return {
                        type: c.FAILED
                    }
                },
                p = "APPLY_MODAL_FILTERS",
                A = function(e) {
                    return {
                        type: p,
                        modalFilters: e
                    }
                },
                h = "APPLY_RAIL_FILTER",
                g = function(e) {
                    return {
                        type: h,
                        filter: e
                    }
                },
                v = "CLEAR_ALL_SEARCH_FILTERS",
                E = function() {
                    return {
                        type: v
                    }
                },
                _ = "CLEAR_SEARCH_MODAL_FILTER",
                y = function(e) {
                    return {
                        type: _,
                        filterName: e
                    }
                },
                b = "SELECT_SEARCH_TAB",
                T = function(e) {
                    return {
                        type: b,
                        tab: e
                    }
                },
                S = function(e) {
                    return {
                        type: i,
                        bottomBarText: e
                    }
                }
        },
        asmC: (e, n, t) => {
            t.d(n, {
                A: () => f
            });
            var r, i, o = t("RlfA"),
                a = t("q1tI"),
                s = t("vOnD"),
                u = t("CII1"),
                l = t("BAyj"),
                c = t("eLLh"),
                d = t("2fHp"),
                m = t("f5P+");
            const f = function() {
                var e = (0, u.default)(4);
                return a.createElement(d.default, {
                    large: !0
                }, a.createElement(p, null, a.createElement(c.default, {
                    gap: 20
                }, e.map((function(e) {
                    return a.createElement(c.default.Item, {
                        colD: 2,
                        colM: 3,
                        key: e
                    }, a.createElement(A, null))
                })))), a.createElement(m.A, null))
            };
            var p = s.default.div(r || (r = (0, o.A)(["\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n  @media (max-width: 480px) {\n    margin-bottom: 2rem;\n  }\n"]))),
                A = (0, s.default)(l.default)(i || (i = (0, o.A)(["\n  border-radius: 0.6rem;\n  height: 4rem;\n  @media (max-width: 480px) {\n    height: 3rem;\n  }\n"])))
        },
        EyxB: (e, n, t) => {
            t.d(n, {
                m6: () => h,
                qN: () => p,
                Hs: () => E,
                JD: () => _,
                Id: () => y,
                Mc: () => b,
                FX: () => A,
                Uw: () => f,
                zn: () => g,
                d3: () => v,
                Xk: () => T,
                P4: () => w,
                u3: () => S,
                BO: () => I,
                rZ: () => R,
                nR: () => N
            });
            var r, i = t("RlfA"),
                o = t("77l8"),
                a = (t("q1tI"), t("vOnD")),
                s = t("lXQd"),
                u = t("wcxm"),
                l = (t("HMsx"), t("OM32")),
                c = t("P62M"),
                d = t("VAjR"),
                m = "disableOpenApp",
                f = "PREVIOUSLY_ORDERED_RAIL",
                p = "COLLECTION_RAIL",
                A = "LDC_Rail",
                h = "brands",
                g = "restaurant",
                v = 3,
                E = 5,
                _ = 4,
                y = 2,
                b = 2,
                T = "SEARCH_RESULTS_BANNER",
                S = function(e) {
                    var n = e.info,
                        t = e.cardAction,
                        r = e.handleOnClick,
                        i = e.isMobile,
                        a = e.order;
                    return {
                        info: (0, o.A)((0, o.A)({}, n), {}, {
                            image: (0, o.A)((0, o.A)({}, n.image), {}, {
                                url: (0, c.z6)((0, s.default)(n, "image.url", ""), 108, 108)
                            })
                        }),
                        order: (0, o.A)((0, o.A)({}, a), {}, {
                            isDeliveringNow: a.isServiceable
                        }),
                        handleOnClick: function() {
                            return function() {
                                return r((0, s.default)(t, "clickUrl", ""))
                            }
                        },
                        isMobile: i
                    }
                },
                I = function(e, n, t) {
                    return {
                        id: (0, s.default)(e, "id", ""),
                        place: {
                            image: {
                                url: (0, s.default)(e, "image.url", ""),
                                base64: (0, s.default)(e, "image.base64", "")
                            },
                            title: (0, s.default)(e, "name", ""),
                            num_places: (0, s.default)(e, "num_places", ""),
                            url: (0, s.default)(e, "url", "")
                        },
                        imageHeight: t ? "24rem" : "32rem",
                        imageWidth: t ? "20rem" : "26rem",
                        onClick: n((0, s.default)(e, "url", ""))
                    }
                },
                w = ((0, a.default)(u.P)(r || (r = (0, i.A)(["\n  margin-top: 0.4rem;\n\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"]))), function() {
                    (0, l.TV)(m, "true", 30)
                }),
                R = function() {
                    return !!(0, l.Ri)(m)
                },
                N = function(e, n) {
                    return {
                        page_info: {
                            name: n ? d.fo : d.Wt,
                            isMobile: e
                        }
                    }
                }
        },
        "f5P+": (e, n, t) => {
            t.d(n, {
                A: () => m,
                k: () => f
            });
            var r, i, o, a = t("RlfA"),
                s = t("q1tI"),
                u = t("vOnD"),
                l = t("CII1"),
                c = t("BAyj"),
                d = t("eLLh");
            const m = function() {
                (0, s.useEffect)((function() {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }), []);
                var e = (0, l.default)(20);
                return s.createElement(d.default, {
                    gap: 25
                }, e.map((function(e) {
                    return s.createElement(d.default.Item, {
                        colD: 4,
                        colM: 12,
                        key: e
                    }, s.createElement(f, null))
                })))
            };
            var f = function() {
                    return s.createElement("div", null, s.createElement(p, null), s.createElement(A, null), s.createElement(h, null), s.createElement(h, null))
                },
                p = (0, u.default)(c.default)(r || (r = (0, a.A)(["\n  height: 25rem;\n  border-radius: 0.8rem;\n  @media (max-width: 480px) {\n    height: 22rem;\n  }\n"]))),
                A = (0, u.default)(c.default)(i || (i = (0, a.A)(["\n  width: 40%;\n  height: 2.6rem;\n  margin-top: 1.5rem;\n  border-radius: 0.6rem;\n"]))),
                h = (0, u.default)(c.default)(o || (o = (0, a.A)(["\n  height: 1.9rem;\n  margin-top: 1rem;\n  border-radius: 0.6rem;\n"])))
        },
        rGZ9: (e, n, t) => {
            t.d(n, {
                LU: () => i,
                fo: () => a,
                tC: () => r,
                xG: () => o
            });
            var r = "delivery",
                i = "VIEW",
                o = "https://www.zomato.com/dine-out",
                a = "https://zomato.onelink.me/xqzv/CTA"
        },
        MJVv: (e, n, t) => {
            t.d(n, {
                A: () => l
            });
            var r, i = t("RlfA"),
                o = t("q1tI"),
                a = t("vOnD"),
                s = t("BAyj"),
                u = (0, a.default)(s.default)(r || (r = (0, i.A)(["\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    0deg,\n    rgba(0, 0, 0, 0.05) 85%,\n    rgba(0, 0, 0, 0.3) 100%\n  );\n"])));
            const l = function() {
                return o.createElement(u, null)
            }
        },
        zbD0: (e, n, t) => {
            t.d(n, {
                A: () => p
            });
            var r, i, o, a = t("RlfA"),
                s = t("q1tI"),
                u = t("vOnD"),
                l = t("2fHp"),
                c = t("BAyj"),
                d = u.default.div(r || (r = (0, a.A)(["\n  margin-bottom: 10rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\n  .heading {\n    border-radius: 0.8rem;\n    margin-bottom: 2.5rem;\n    margin-top: 2rem;\n    height: 2.8rem;\n  }\n\n  .subheading-1 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 7.5rem;\n  }\n\n  .subheading-2 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 10rem;\n  }\n\n  .line {\n    margin-top: 1rem;\n  }\n"]))),
                m = u.default.div(i || (i = (0, a.A)(["\n  flex-grow: 1;\n  margin-right: 2rem;\n"]))),
                f = u.default.div(o || (o = (0, a.A)(["\n  flex-shrink: 0;\n  width: 35rem;\n  height: 42rem;\n  border-radius: 0.8rem;\n  margin-top: 2rem;\n  padding: 1rem;\n"])));
            const p = function() {
                return s.createElement(l.default, {
                    large: !0
                }, s.createElement(d, null, s.createElement(f, null, s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                })), s.createElement(m, null, s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "40rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "80%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "40rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "80%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "4rem",
                    width: "40rem"
                }))))
            }
        },
        nWop: (e, n, t) => {
            t.d(n, {
                $G: () => d,
                A4: () => I,
                C3: () => f,
                C4: () => w,
                Eb: () => p,
                I4: () => A,
                NM: () => v,
                P_: () => S,
                Pj: () => _,
                R9: () => E,
                Sk: () => i,
                T6: () => u,
                T7: () => g,
                bJ: () => m,
                by: () => T,
                cj: () => o,
                d4: () => s,
                mH: () => h,
                nW: () => R,
                oS: () => b,
                qJ: () => a,
                u: () => y,
                uD: () => l,
                uI: () => c
            });
            var r = t("77l8"),
                i = {
                    INITIATE: "GET_PAGINATED_DATA_INITIATE",
                    SUCCESS: "GET_PAGINATED_DATA_SUCCESS",
                    FAILED: "GET_PAGINATED_DATA_FAILED"
                },
                o = {
                    INITIATE: "GET_DINELINE_INITIATE",
                    SUCCESS: "GET_DINELINE_SUCCESS",
                    FAILED: "GET_DINELINE_FAILED"
                },
                a = "TOGGLE_FAVOURITE_ORDER",
                s = "TOGGLE_USER_FOLLOWING",
                u = "TOGGLE_HEADER_FOLLOWING",
                l = "CHANGE_COVER_PHOTO",
                c = "CHANGE_PROFILE_PHOTO",
                d = "EDIT_PROFILE",
                m = "PUBLISH_BLOG",
                f = "EDIT_ADDRESS",
                p = function(e, n) {
                    return {
                        type: i.INITIATE,
                        url: e,
                        params: n
                    }
                },
                A = function(e) {
                    return (0, r.A)({
                        type: i.SUCCESS
                    }, e)
                },
                h = function(e) {
                    return {
                        type: i.FAILED,
                        payload: e
                    }
                },
                g = function(e) {
                    return {
                        type: a,
                        orderId: e
                    }
                },
                v = function(e) {
                    return {
                        type: s,
                        userId: e
                    }
                },
                E = function(e) {
                    return {
                        type: u,
                        userId: e
                    }
                },
                _ = function(e, n) {
                    return {
                        type: l,
                        userId: e,
                        imageUrl: n
                    }
                },
                y = function(e, n) {
                    return {
                        type: c,
                        userId: e,
                        imageUrl: n
                    }
                },
                b = function(e, n) {
                    return {
                        type: d,
                        userId: e,
                        data: n
                    }
                },
                T = function(e) {
                    return (0, r.A)({
                        type: o.INITIATE
                    }, e)
                },
                S = function(e) {
                    return (0, r.A)({
                        type: o.SUCCESS
                    }, e)
                },
                I = function(e) {
                    return (0, r.A)({
                        type: o.FAILED
                    }, e)
                },
                w = function(e, n, t) {
                    return (0, r.A)((0, r.A)({
                        type: m
                    }, e), {}, {
                        userId: n,
                        postId: t
                    })
                },
                R = function(e, n, t, r) {
                    return {
                        type: f,
                        userId: e,
                        oldAddressId: n,
                        newAddressId: t,
                        entities: r
                    }
                }
        },
        NEP9: (e, n, t) => {
            t.d(n, {
                $h: () => E,
                Bj: () => C,
                Br: () => b,
                C4: () => L,
                Ck: () => k,
                D2: () => F,
                DK: () => h,
                Dp: () => p,
                EH: () => J,
                GF: () => l,
                KK: () => ne,
                Me: () => f,
                NG: () => z,
                P: () => M,
                R1: () => G,
                RO: () => X,
                SC: () => O,
                T0: () => _,
                TL: () => c,
                Vx: () => A,
                W7: () => T,
                WW: () => m,
                XZ: () => g,
                Yw: () => s,
                _j: () => j,
                ct: () => u,
                dG: () => v,
                dv: () => K,
                ec: () => R,
                fb: () => d,
                fv: () => q,
                h3: () => x,
                iH: () => W,
                jz: () => w,
                l_: () => H,
                p9: () => Z,
                q_: () => $,
                qn: () => U,
                r$: () => ee,
                ry: () => N,
                s$: () => I,
                sL: () => a,
                uM: () => P,
                uq: () => D,
                vg: () => Q,
                vn: () => S,
                xp: () => V,
                yc: () => B,
                zh: () => Y,
                zu: () => y
            });
            var r = t("zThL"),
                i = t("VAjR"),
                o = t("45g5"),
                a = "SECTION_USER_BASIC_INFO",
                s = "SECTION_USER_PHOTOS",
                u = "SECTION_USER_REC_VIEWED",
                l = "SECTION_USER_ORDER_HISTORY",
                c = "SECTION_USER_ADDRESS",
                d = "SECTION_USER_FOLLOWER",
                m = "SECTION_USER_REVIEWS",
                f = "SECTION_USER_ORDER_FAVORITE",
                p = "SECTION_NUTRITION_ORDERS",
                A = "SECTION_NUTRITION_ORDER_DETAILS_MODAL",
                h = "SECTION_TABLE_BOOKING",
                g = "SECTION_BLOG_POSTS",
                v = "SECTION_PROFILE_NAVIGATION",
                E = "SECTION_PENDING_BLOG_POSTS",
                _ = "SECTION_USER_FEED",
                y = "SECTION_SUGGESTED_USERS",
                b = "SECTION_USER_WIDGET",
                T = "SECTION_CDNG_HISTORY",
                S = "SECTION_CDNG_HELP",
                I = "SECTION_USER_WISHLIST",
                w = "DOTE_ORDER",
                R = "ORDER",
                N = "USER",
                O = "REVIEWS",
                C = "REVIEW_COMMENTS",
                x = "PHOTO_COMMENTS",
                M = "REVIEW_REPLIES",
                L = "TAGS",
                P = "ADDRESSES",
                D = "IMAGES",
                k = "PENDING_REVIEW",
                V = "CDNG_ORDER",
                U = "follow_user",
                F = "unfollow_user",
                G = "/webFrontend/e8dbf3973a8918dcdf9e7e61daae70f71581003303.png",
                q = "/webFrontend/0fe9c098c4a1284e04065bd13bc1dd911581004318.png",
                H = "/webFrontend/96a9a259cfa3dd8e260d65d1f135ab941581004545.png",
                z = "/webFrontend/c33e5cd0b755a03f9b2f374b1b8271a91581004801.png",
                B = "/webFrontend/1a33af2333871e0c1222a3ee21ea697f1581070577.png",
                j = "/webFrontend/691ad4ad27a5804a3033977d45390c811584432410.png",
                K = [i.RJ, i.L2, i.G_, i.xZ, i.d, i.E$, i.FI],
                Y = 150,
                W = "You can update your phone number using the Zomato app",
                J = {
                    mobile: {
                        width: "15rem",
                        height: "17rem"
                    },
                    desktop: {
                        width: "18rem",
                        height: "20rem"
                    }
                },
                Z = ["MEZZO", "MEDIO"],
                X = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, i.CK, [o.e, o.Bn]), i.Kf, [o.EO, o.Lx]), i.Np, [o.qd, o.vj]), i.LA, [o.QJ, o.Bb]), i.kd, [o.KS, o.Jf]), i.sp, [o.HD, o.Cn]), i.FP, [o.SF, o.ZM]),
                Q = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, i.CK, [o.iR]), i.Kf, [o.I1]), i.Np, [o.KW]), i.LA, [o.o2]), i.kd, [o.zs]), i.sp, [o.F3]), i.FP, [o.EV]),
                $ = [i.m3, i.jQ, i.$G, i.Xd],
                ee = [i.l4, i.YP, i.s9],
                ne = "deleteAccount"
        },
        "+Gh4": (e, n, t) => {
            t.d(n, {
                DL: () => r,
                G7: () => i,
                SC: () => l,
                So: () => m,
                TD: () => o,
                Vb: () => u,
                Ym: () => d,
                bk: () => c,
                kQ: () => s,
                q1: () => a
            });
            var r = "ADD_ITEM_TO_CART",
                i = "SET_PACKAGES_DATA",
                o = "REMOVE_ITEM_FROM_CART",
                a = "SET_PAYMENT_SDK_DATA",
                s = "PAYMENT_STATES/VALIDATION_STATUS_CHANGE",
                u = "PAYMENT_STATES/INITIATE_CHECKOUT",
                l = "PAYMENT_STATES/MARK_ORDER_CREATED",
                c = "PAYMENT_STATES/CHECKOUT_FAILED",
                d = "SET_MODAL_TYPE",
                m = "ZLIVE_EVENTS"
        },
        xTcC: (e, n, t) => {
            t.d(n, {
                A: () => A
            });
            var r, i, o, a = t("RlfA"),
                s = t("q1tI"),
                u = t("BAyj"),
                l = t("vOnD"),
                c = t("2fHp"),
                d = t("kCs9"),
                m = (0, l.default)(u.default)(r || (r = (0, a.A)(["\n  height: 64px;\n  width: 600px;\n  border-radius: 8px;\n  margin-top: 100px;\n  margin-bottom: 15px;\n\n  @media (max-width: 768px) {\n    margin-top: 75px;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 75px;\n  }\n"]))),
                f = (0, l.default)(u.default)(i || (i = (0, a.A)(["\n  height: 20px;\n  width: 700px;\n  border-radius: 8px;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 60px;\n    width: 80%;\n    margin-bottom: 25px;\n    margin: auto;\n  }\n"]))),
                p = (0, l.default)(u.default)(o || (o = (0, a.A)(["\n  height: 520px;\n  width: 100%;\n  border-radius: 8px;\n  margin: auto;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 280px;\n    margin-bottom: 25px;\n  }\n"])));
            const A = function() {
                return s.createElement(s.Fragment, null, s.createElement(d.A, null), s.createElement(c.default, null, s.createElement(m, null), s.createElement(f, null), s.createElement(p, null)))
            }
        },
        zceU: (e, n, t) => {
            t.d(n, {
                A: () => _
            });
            var r, i, o, a = t("BkpH"),
                s = t("RlfA"),
                u = t("q1tI"),
                l = t("vOnD"),
                c = t("17x9"),
                d = t.n(c),
                m = t("lFeK"),
                f = t("2fHp"),
                p = t("P62M"),
                A = ["img", "qualifiedImg", "showGradient"],
                h = (0, l.default)(f.default)(r || (r = (0, s.A)(["\n  max-width: none;\n  height: 100%;\n  width: 100%;\n  max-width: none;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin: 0;\n    max-width: none;\n  }\n\n  @media (max-width: 480px) {\n    margin: 0;\n    max-width: none;\n  }\n"]))),
                g = (0, l.default)(m.default)(i || (i = (0, s.A)(["\n  margin: auto;\n  height: 100%;\n"]))),
                v = l.default.div(o || (o = (0, s.A)(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%) rotate(-180deg);\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(rgba(0, 0, 0, 0) 57.17%, rgba(0, 0, 0, 0.46) 100%),\n    rgba(0, 0, 0, 0.3);\n  @media (max-width: 1440px) {\n    width: 100%;\n  }\n"]))),
                E = function(e) {
                    var n = e.img,
                        t = void 0 === n ? "" : n,
                        r = e.qualifiedImg,
                        i = void 0 === r ? "" : r,
                        o = e.showGradient,
                        s = void 0 === o || o,
                        l = (0, a.A)(e, A),
                        c = i || (0, p.I2)(t);
                    return u.createElement(h, l, u.createElement(g, {
                        id: "about-us-backdrop-video",
                        src: c,
                        alt: "web-backdrop",
                        height: "100%"
                    }), s && u.createElement(v, null))
                };
            E.propTypes = {
                img: d().string,
                qualifiedImg: d().string,
                showGradient: d().bool
            }, E.defaultProps = {
                img: "",
                qualifiedImg: "",
                showGradient: !0
            };
            const _ = E
        },
        CjUt: (e, n, t) => {
            t.d(n, {
                FI: () => i,
                G0: () => o,
                ne: () => r
            });
            var r = {
                    OPEN: "OPEN_PRECISE_LOCATION_BANNER",
                    CLOSE: "CLOSE_PRECISE_LOCATION_BANNER"
                },
                i = function() {
                    return {
                        type: r.CLOSE
                    }
                },
                o = function() {
                    return {
                        type: r.OPEN
                    }
                }
        },
        KKt4: (e, n, t) => {
            t.d(n, {
                A: () => c
            });
            var r, i = t("+9dH"),
                o = t("RlfA"),
                a = t("q1tI"),
                s = t("vOnD"),
                u = t("BAyj"),
                l = (0, s.default)(u.default)(r || (r = (0, o.A)(["\n  margin: ", ";\n  border-radius: ", ";\n\n  @media (max-width: 768px) {\n    margin: ", ";\n    border-radius: ", ";\n  }\n\n  @media (max-width: 480px) {\n    margin: ", ";\n    border-radius: ", ";\n  }\n"])), (function(e) {
                    return e.marginD ? e.marginD : "none"
                }), (function(e) {
                    return e.radiusD ? e.radiusD : 0
                }), (function(e) {
                    return e.marginT ? e.marginT : "none"
                }), (function(e) {
                    return e.radiusT ? e.radiusT : 0
                }), (function(e) {
                    return e.marginM ? e.marginM : "none"
                }), (function(e) {
                    return e.radiusM ? e.radiusM : 0
                }));
            const c = function(e) {
                return a.createElement(l, (0, i.A)({
                    width: "100%"
                }, e))
            }
        },
        kCs9: (e, n, t) => {
            t.d(n, {
                A: () => f
            });
            var r, i, o, a = t("RlfA"),
                s = t("q1tI"),
                u = t("BAyj"),
                l = t("vOnD"),
                c = l.default.div(r || (r = (0, a.A)(["\n  position: relative;\n  width: 100%;\n  height: 540;\n\n  @media (max-width: 768px) {\n    height: 500px;\n  }\n\n  @media (max-width: 480px) {\n    height: 412px;\n  }\n"]))),
                d = (0, l.default)(u.default)(i || (i = (0, a.A)(["\n  width: 100%;\n"]))),
                m = l.default.div(o || (o = (0, a.A)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0) 57.17%,\n      rgba(0, 0, 0, 0.46) 100%\n    ),\n    rgba(0, 0, 0, 0.6);\n"])));
            const f = function() {
                return s.createElement(s.Fragment, null, s.createElement(c, null, s.createElement(d, null), s.createElement(m, null)))
            }
        },
        HKiI: (e, n, t) => {
            t.d(n, {
                Fq: () => c,
                Tm: () => s,
                Uu: () => d,
                Wu: () => a,
                X4: () => u,
                XJ: () => i,
                hJ: () => l,
                hi: () => r,
                iE: () => o
            });
            var r = "SET_CURRENT_CITY",
                i = "SET_CURRENT_PAGE",
                o = "SET_UNIVERSAL_CART",
                a = {
                    INITIATE: "GET_PAGE_INFO_INITIATE",
                    SUCCESS: "GET_PAGE_INFO_SUCCESS",
                    FAILED: "GET_PAGE_INFO_FAILED"
                };

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.page_info,
                    t = void 0 === n ? {} : n,
                    r = e.page_data,
                    o = void 0 === r ? {} : r,
                    a = e.entities,
                    s = void 0 === a ? {} : a,
                    u = e.user,
                    l = void 0 === u ? {} : u,
                    c = e.location,
                    d = void 0 === c ? {} : c,
                    m = e.footerInfo,
                    f = void 0 === m ? {} : m,
                    p = e.langKeys,
                    A = void 0 === p ? {} : p,
                    h = e.deviceSpecificInfo,
                    g = void 0 === h ? {} : h,
                    v = e.pageBlockerInfo,
                    E = void 0 === v ? {} : v,
                    _ = e.setTransientData,
                    y = void 0 === _ || _,
                    b = e.fetchConfigs,
                    T = void 0 === b ? {} : b,
                    S = e.hrefLangInfo,
                    I = void 0 === S ? [] : S,
                    w = e.pageConfig;
                return {
                    type: i,
                    pageInfo: t,
                    pageData: o,
                    entities: s,
                    user: l,
                    location: d,
                    footerInfo: f,
                    langKeys: A,
                    deviceSpecificInfo: g,
                    pageBlockerInfo: E,
                    setTransientData: y,
                    fetchConfigs: T,
                    hrefLangInfo: I,
                    pageConfig: void 0 === w ? {} : w
                }
            }
            var u = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return {
                        type: a.INITIATE,
                        pageUrl: e,
                        location: n,
                        isMobile: t,
                        forceLoad: r
                    }
                },
                l = function(e) {
                    return {
                        type: a.SUCCESS,
                        payload: e
                    }
                },
                c = function(e) {
                    return {
                        type: a.FAILED,
                        err: e
                    }
                },
                d = function(e) {
                    return {
                        type: o,
                        data: e
                    }
                }
        },
        TESf: (e, n, t) => {
            t.d(n, {
                A: () => m
            });
            var r = t("+9dH"),
                i = t("BkpH"),
                o = t("q1tI"),
                a = t("17x9"),
                s = t.n(a),
                u = t("TRpf"),
                l = t("lXQd"),
                c = ["isMobile", "MobileComponent", "DesktopComponent", "children"],
                d = o.forwardRef((function(e, n) {
                    var t = e.isMobile,
                        a = e.MobileComponent,
                        s = e.DesktopComponent,
                        u = e.children,
                        l = (0, i.A)(e, c);
                    return t ? null !== a && o.createElement(a, (0, r.A)({}, l, {
                        ref: n
                    }), u) : null !== s && o.createElement(s, (0, r.A)({}, l, {
                        ref: n
                    }), u)
                }));
            d.propTypes = {
                isMobile: s().bool,
                MobileComponent: s().elementType,
                DesktopComponent: s().elementType,
                children: s().node
            }, d.defaultProps = {
                isMobile: !1,
                MobileComponent: null,
                DesktopComponent: null,
                children: null
            };
            const m = (0, u.Ng)((function(e) {
                return {
                    isMobile: !!(0, l.default)(e, "pages.current.isMobile", !1)
                }
            }), null, null, {
                forwardRef: !0
            })(d)
        },
        AQfp: (e, n, t) => {
            t.d(n, {
                M: () => i,
                k: () => r
            });
            var r = "RESTAURANT_BOOKMARK_PRESSED",
                i = function(e, n, t) {
                    return {
                        type: r,
                        restaurantId: e,
                        updatedBookmarkState: n,
                        bookmarkPayload: t
                    }
                }
        },
        "0elZ": (e, n, t) => {
            t.d(n, {
                Ay: () => $,
                k$: () => K
            });
            var r, i, o, a, s, u, l = t("+9dH"),
                c = t("q1tI"),
                d = t("17x9"),
                m = t.n(d),
                f = t("AkOy"),
                p = t("lXQd"),
                A = t("j399"),
                h = t("Ujff"),
                g = t("czsM"),
                v = t("oCFg"),
                E = t("HMsx"),
                _ = t("RlfA"),
                y = t("vOnD"),
                b = t("xJdj"),
                T = y.default.section(r || (r = (0, _.A)(["\n  display: flex;\n  align-items: flex-start;\n  @media (max-width: 480px) {\n    padding-right: 1rem;\n    justify-content: flex-start;\n    align-items: ", ";\n    margin-bottom: ", ";\n    margin-top: 1rem;\n  }\n"])), (function(e) {
                    return e.alignItemsMobile || "center"
                }), (function(e) {
                    return e.marginBottomMobile || "1.2rem"
                })),
                S = y.default.div(i || (i = (0, _.A)(["\n  width: 4rem;\n"]))),
                I = y.default.div(o || (o = (0, _.A)(["\n  padding: 5px;\n  background: ", ";\n  border: ", ";\n  position: relative;\n  margin-top: 5px;\n  border-radius: 8px;\n  &::after {\n    content: '';\n    position: absolute;\n    top: -5.7px;\n    left: 1.5rem;\n    right: unset;\n    background: ", ";\n    width: 10px;\n    height: 10px;\n    -webkit-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    box-sizing: border-box;\n    border-right: ", ";\n    border-top: ", ";\n  }\n"])), (function(e) {
                    return e.bgColor
                }), (function(e) {
                    var n = e.borderColor;
                    return "1px solid ".concat(n)
                }), (function(e) {
                    return e.bgColor
                }), (function(e) {
                    var n = e.borderColor;
                    return "1px solid ".concat(n)
                }), (function(e) {
                    var n = e.borderColor;
                    return "1px solid ".concat(n)
                })),
                w = y.default.div(a || (a = (0, _.A)(["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n"]))),
                R = y.default.div(s || (s = (0, _.A)(["\n  color: #293142;\n  font-size: 12px;\n  font-family: OurLexend;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n"]))),
                N = (0, y.default)(b.A)(u || (u = (0, _.A)(["\n  padding: 0px !important;\n  border-radius: 12px !important;\n  border: 2px solid #e6e9ef !important;\n  background: #fff !important;\n  position: absolute;\n    &::after {\n      display: none !important;\n    }\n  }\n"]))),
                O = t("BkpH"),
                C = {
                    RES_PAGE_DISTANCE_BASED_RATING_TOOLTIP: "RES_PAGE_DISTANCE_BASED_RATING_TOOLTIP",
                    RES_PAGE_DISTANCE_BASED_RATING_TOOLTIP_TILE: "RES_PAGE_DISTANCE_BASED_RATING_TOOLTIP_TILE"
                },
                x = {
                    DUAL_RATING_V2: "DUAL_RATING_V2"
                },
                M = t("GBU/"),
                L = {
                    text: m().string.isRequired,
                    color: m().string.isRequired,
                    bgColor: m().string.isRequired
                },
                P = function(e, n) {
                    return n ? "".concat((0, p.default)(e, "reviewCount", ""), " ").concat((0, p.default)(e, "subtitle", "")) : (0, p.default)(e, "reviewCount", "")
                },
                D = function(e, n) {
                    return n ? "" : (0, p.default)(e, "sideSubTitle", "")
                },
                k = ["data", "tab", "isMobile", "clickHandler"],
                V = function(e) {
                    var n = e.data,
                        t = e.tab,
                        r = e.isMobile,
                        i = e.clickHandler,
                        o = (0, O.A)(e, k);
                    return c.createElement(h.A, (0, l.A)({}, o, function(e) {
                        var n = e.data,
                            t = n.ratingV2,
                            r = void 0 === t ? "-" : t,
                            i = n.bgColorV2,
                            o = void 0 === i ? {
                                type: "grey",
                                tint: 500
                            } : i,
                            a = n.subtitle,
                            s = void 0 === a ? "" : a,
                            u = e.clickHandler,
                            l = void 0 === u ? A.default : u;
                        return {
                            value: r,
                            title: s,
                            color: (0, M.A)(o),
                            clickHandler: l
                        }
                    }({
                        data: n,
                        clickHandler: i
                    }), {
                        size: r ? 300 : 400,
                        sideTitle: P(t, r),
                        sideSubTitle: D(t, r),
                        showSideSubTitleUnderlined: !0
                    }))
                };
            V.propTypes = {
                clickHandler: m().func,
                isMobile: m().bool,
                data: m().objectOf(L),
                tab: m().string
            }, V.defaultProps = {
                data: {},
                tab: "",
                clickHandler: null,
                isMobile: !1
            };
            const U = V;
            var F = t("ia77"),
                G = t("F/co"),
                q = t("FR2j"),
                H = t("jXLi"),
                z = t("7wzN"),
                B = t("TESf"),
                j = {
                    text: m().string.isRequired,
                    color: m().string.isRequired,
                    bgColor: m().string.isRequired
                },
                K = function(e) {
                    var n = e.data,
                        t = n.ratingV2,
                        r = void 0 === t ? "-" : t,
                        i = n.bgColorV2,
                        o = void 0 === i ? {
                            type: "grey",
                            tint: 500
                        } : i,
                        a = n.subtitle,
                        s = void 0 === a ? "" : a,
                        u = e.clickHandler,
                        l = void 0 === u ? A.default : u;
                    return {
                        value: r,
                        title: s,
                        color: (0, M.A)(o),
                        clickHandler: l
                    }
                },
                Y = function(e, n) {
                    return n ? "".concat((0, p.default)(e, "reviewCount", ""), " ").concat((0, p.default)(e, "subtitle", "")) : (0, p.default)(e, "reviewCount", "")
                },
                W = function(e, n) {
                    return n ? "" : (0, p.default)(e, "sideSubTitle", "")
                },
                J = function(e) {
                    var n = e.newlyOpenedObj,
                        t = e.suspiciousReviewObj,
                        r = e.ratings,
                        i = e.clickHandler,
                        o = e.isMobile,
                        a = (0, p.default)(r, "DINING", {}),
                        s = (0, p.default)(r, "DELIVERY", {}),
                        u = (0, p.default)(a, "newOnDining", !1),
                        d = (0, p.default)(s, "newOnDelivery", !1),
                        m = (0, p.default)(s, "bucketRatings", {}),
                        A = (0, p.default)(m, "buckets", []),
                        v = !(0, f.default)(a) && !(0, f.default)(s) && c.createElement(S, null),
                        E = function(e) {
                            var t = e.tab;
                            return c.createElement(U, {
                                appearance: "outline",
                                textColor: g.default.z500,
                                data: n,
                                isMobile: o,
                                clickHandler: i,
                                tab: t
                            })
                        },
                        _ = function(e) {
                            var n = e.tab;
                            return !(0, f.default)(n) && c.createElement(U, {
                                data: n,
                                isMobile: o,
                                clickHandler: i,
                                tab: n
                            })
                        },
                        y = function(e, n) {
                            return e ? c.createElement(E, {
                                tab: n
                            }) : c.createElement(_, {
                                tab: n
                            })
                        };
                    if (d || u) return c.createElement(T, null, y(u, a), v, y(d, s));
                    if (!(0, f.default)(t)) return c.createElement(T, null, c.createElement(h.A, (0, l.A)({}, K({
                        data: t,
                        clickHandler: i
                    }), {
                        size: o ? 300 : 400,
                        sideTitle: (0, p.default)(t, "text", "")
                    })));
                    var b = o ? q.A : N,
                        I = !(0, f.default)(s) && !(0, f.default)(A),
                        w = "",
                        R = "";
                    return I && (w = "flex-start", R = "0.5rem"), c.createElement(T, {
                        alignItemsMobile: w,
                        marginBottomMobile: R
                    }, !(0, f.default)(a) && c.createElement(h.A, (0, l.A)({}, K({
                        data: a,
                        clickHandler: i
                    }), {
                        size: o ? 300 : 400,
                        sideTitle: Y(a, o),
                        sideSubTitle: W(a, o),
                        showSideSubTitleUnderlined: !0
                    })), !(0, f.default)(a) && !(0, f.default)(s) && c.createElement(S, null), !(0, f.default)(s) && c.createElement(F.A, {
                        position: "relative"
                    }, c.createElement(h.A, (0, l.A)({}, K({
                        data: s,
                        clickHandler: i
                    }), {
                        size: o ? 300 : 400,
                        sideTitle: Y(s, o),
                        sideSubTitle: W(s, o),
                        showSideSubTitleUnderlined: !0
                    })), I && c.createElement(F.A, {
                        position: o ? null : "absolute",
                        onMouseEnter: function() {
                            H.d.recordClick({
                                component: C.RES_PAGE_DISTANCE_BASED_RATING_TOOLTIP,
                                ui_source: x.DUAL_RATING_V2,
                                business: z.Pu.O2,
                                entity_type: z.zQ.RESTAURANT
                            })
                        }
                    }, c.createElement(b, {
                        padding: 0,
                        label: Q(A),
                        appearance: "light",
                        position: "bottom"
                    }, c.createElement(B.A, {
                        isMobile: o,
                        MobileComponent: Z,
                        DesktopComponent: X,
                        deliveryBucketRatings: m
                    })))))
                },
                Z = function(e) {
                    var n = e.deliveryBucketRatings,
                        t = (0, p.default)(n, "tooltip.title", "");
                    return c.createElement(G.A, {
                        gap: "4px",
                        alignItems: "center"
                    }, c.createElement(F.A, {
                        marginLeft: "1px",
                        margingTop: "1px",
                        fontSize: "10px",
                        lineHeight: "16px",
                        fontWeight: "400"
                    }, t), c.createElement(v.d7X, {
                        color: E.default.z900,
                        size: "10px"
                    }))
                },
                X = function(e) {
                    var n = e.deliveryBucketRatings,
                        t = (0, M.A)((0, p.default)(n, "tooltip.bgColor", {})),
                        r = (0, M.A)((0, p.default)(n, "tooltip.borderColor", {})),
                        i = (0, p.default)(n, "tooltip.title", "");
                    return c.createElement(I, {
                        bgColor: t,
                        borderColor: r
                    }, c.createElement(w, null, c.createElement(R, null, i), c.createElement(v.d7X, {
                        color: E.default.z900,
                        size: "14px"
                    })))
                },
                Q = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return function() {
                        var n = e.length - 1;
                        return (0, c.useEffect)((function() {
                            H.d.recordImpression({
                                component: C.RES_PAGE_DISTANCE_BASED_RATING_TOOLTIP_TILE,
                                ui_source: x.DUAL_RATING_V2,
                                business: z.Pu.O2,
                                entity_type: z.zQ.RESTAURANT
                            })
                        }), [e]), c.createElement(G.A, {
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%"
                        }, e.map((function(e, t) {
                            var r = e.title,
                                i = void 0 === r ? "-" : r,
                                o = e.bgColor,
                                a = void 0 === o ? {} : o,
                                s = e.rating,
                                u = void 0 === s ? "0" : s;
                            return "0" !== u && "0.0" !== u || (u = void 0), c.createElement(G.A, {
                                width: "100%",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                pt: "12px",
                                px: "12px"
                            }, c.createElement(G.A, {
                                alignItems: "center",
                                width: "100%",
                                gap: "24px"
                            }, c.createElement(F.A, {
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "18px",
                                color: E.default.z900,
                                textAlign: "start",
                                flexGrow: 1,
                                fontFamily: "OurLexend"
                            }, i), c.createElement(F.A, {
                                flexGrow: 0,
                                flexShrink: 0
                            }, c.createElement(h.A, {
                                size: 300,
                                value: u,
                                color: (0, M.A)(a)
                            }))), c.createElement(F.A, {
                                width: "100%",
                                borderBottom: t === n ? "none" : "1px dashed #e6e9ef",
                                mt: "12px"
                            }))
                        })))
                    }
                };
            J.propTypes = {
                newlyOpenedObj: m().objectOf(j),
                suspiciousReviewObj: m().objectOf(j),
                ratings: m().objectOf(m().object),
                clickHandler: m().func,
                isMobile: m().bool
            }, J.defaultProps = {
                newlyOpenedObj: {},
                suspiciousReviewObj: {},
                ratings: {},
                clickHandler: null,
                isMobile: !1
            };
            const $ = J
        },
        gZoF: (e, n, t) => {
            t.d(n, {
                Ew: () => f,
                GY: () => l,
                I: () => d,
                P1: () => m,
                jX: () => c
            });
            var r = t("F6eP"),
                i = "get-app-form-radio-type-change",
                o = "get-app-form-send-link-click",
                a = "get-app-form-send-link-success-tracking",
                s = "get-app-form-input-focus-tracking",
                u = "get_app_form_appstore_link_click",
                l = function(e) {
                    (0, r.K3)(i, e)
                },
                c = function(e) {
                    (0, r.K3)(o, e)
                },
                d = function(e) {
                    (0, r.K3)(a, e)
                },
                m = function() {
                    (0, r.K3)(s)
                },
                f = function() {
                    (0, r.K3)(u)
                }
        },
        YFsC: (e, n, t) => {
            t.d(n, {
                CE: () => b,
                Mn: () => I,
                O: () => h,
                P5: () => T,
                QP: () => d,
                RR: () => p,
                S3: () => s,
                SB: () => u,
                W$: () => o,
                YP: () => m,
                _L: () => i,
                bI: () => a,
                eW: () => M,
                fn: () => l,
                ln: () => _,
                mu: () => O,
                pK: () => y,
                r5: () => R,
                rC: () => S,
                s2: () => g,
                tt: () => f,
                uB: () => E,
                ud: () => C,
                wR: () => N,
                xL: () => A,
                xc: () => v,
                yj: () => w,
                yk: () => c
            });
            var r = t("zThL"),
                i = "Get the Zomato App",
                o = "We will send you a link, open it on your phone to download the app",
                a = "Download app from",
                s = "/web/commons/8b714f6f2ae12bf9e5f75549a984fc431564655708.png",
                u = "get-zomato-app",
                l = "https://zomato.onelink.me/xqzv/CTA",
                c = "https://zomato.onelink.me/xqzv/CTA",
                d = "email",
                m = "mobile",
                f = "",
                p = "Email",
                A = "Phone",
                h = [{
                    label: "Phone",
                    value: m
                }],
                g = [{
                    label: "Email",
                    value: d
                }, {
                    label: "Phone",
                    value: m
                }],
                v = {
                    email: "Enter your email Id",
                    mobile: "Enter your phone number",
                    default: "Please enter a valid value"
                },
                E = {
                    success: (0, r.A)((0, r.A)({}, m, "Message sent. Check your phone to find a link to download the app. Happy eating!"), d, "Email sent. Check your email id to find a link to download the app. Happy eating!"),
                    failed: (0, r.A)((0, r.A)({}, m, "Something went wrong, please try after some time"), d, "Something went wrong, please try after some time")
                },
                _ = "app-download-link",
                y = "united-sms",
                b = "Share App Link",
                T = "Share",
                S = {
                    APP_LINK: "app link",
                    DOWNLOAD_LINK: "app download home page"
                },
                I = {
                    SHARE_CLICK: "share button click",
                    DOWNLOAD_LINK: "app download link"
                },
                w = "valid_data",
                R = "invalid_data",
                N = "success",
                O = "failed",
                C = "intent://zomato.com/#Intent;package=com.application.zomato;action=android.intent.action.VIEW;scheme=zomato;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&gl=US;end",
                x = "GET_APP_FORM",
                M = {
                    COMPONENTS: {
                        INPUT_RADIO_BUTTON: "".concat(x, "_INPUT_RADIO_BUTTON"),
                        SHARE_APP_LINK_BUTTON: "".concat(x, "_SHARE_APP_LINK_BUTTON"),
                        DOWNLOAD_APP_BUTTON: "".concat(x, "_DOWNLOAD_APP_BUTTON")
                    }
                }
        },
        o59D: (e, n, t) => {
            t.d(n, {
                kJ: () => T,
                Ay: () => b,
                mp: () => I,
                Tz: () => S
            });
            var r, i = t("TRpf"),
                o = t("lXQd"),
                a = t("RlfA"),
                s = t("q1tI"),
                u = t("17x9"),
                l = t.n(u),
                c = t("vOnD"),
                d = t("2qDD"),
                m = t("e4ru"),
                f = t("LSsp"),
                p = t("nXaw"),
                A = t("Ar8T"),
                h = "web_scroll_to_top_button_visible",
                g = "web_scroll_to_top_button_click",
                v = function(e) {
                    (0, p.Z)(e), (0, A.K)(g)
                },
                E = function(e) {
                    var n = e.isVisible;
                    return (0, s.useEffect)((function() {
                        n && (0, A.K)(h)
                    }), [n]), s.createElement(y, {
                        onClick: v,
                        visible: n
                    }, s.createElement(m.default, {
                        color: f.default,
                        size: 32
                    }))
                };
            E.propTypes = {
                isVisible: l().bool
            }, E.defaultProps = {
                isVisible: !1
            };
            const _ = E;
            var y = (0, c.default)(d.default)(r || (r = (0, a.A)(["\n  position: fixed;\n  bottom: 3rem;\n  right: 3rem;\n  width: 6.8rem;\n  height: 6.8rem;\n  min-width: unset;\n  min-height: unset;\n  border-radius: 50%;\n  transition: opacity 0.8s, visibility 0.8s;\n  opacity: ", ";\n  z-index: ", ";\n  visibility: ", ";\n  box-shadow: 0 1.6rem 1.6rem rgba(54, 54, 54, 0.06),\n    0 0.8rem 0.8rem rgba(54, 54, 54, 0.08);\n  span {\n    min-width: inherit;\n    min-height: inherit;\n    width: inherit;\n    height: inherit;\n    border-radius: inherit;\n    display: flex;\n    justify-content: center;\n  }\n  &:hover i {\n    transform: unset;\n  }\n"])), (function(e) {
                return e.visible ? 1 : 0
            }), (function(e) {
                return e.visible ? 2 : 0
            }), (function(e) {
                return e.visible ? "visible" : "hidden"
            }));
            const b = (0, i.Ng)((function(e) {
                return {
                    isVisible: (0, o.default)(e, "uiLogic.isScrollToTopFloatingButtonVisible", !1)
                }
            }))(_);
            var T = {
                    HIDE: "HIDE_SCROLL_TO_TOP_FLOATING_BUTTON",
                    SHOW: "SHOW_SCROLL_TO_TOP_FLOATING_BUTTON"
                },
                S = function() {
                    return {
                        type: T.SHOW
                    }
                },
                I = function() {
                    return {
                        type: T.HIDE
                    }
                }
        },
        IDVv: (e, n, t) => {
            t.d(n, {
                A: () => A
            });
            var r = t("+9dH"),
                i = t("q1tI"),
                o = t("17x9"),
                a = t.n(o),
                s = t("AkOy"),
                u = t("lXQd"),
                l = t("j399"),
                c = t("Ujff"),
                d = t("czsM"),
                m = t("0elZ"),
                f = {
                    text: a().string.isRequired,
                    color: a().string.isRequired,
                    bgColor: a().string.isRequired
                },
                p = function(e) {
                    var n = e.newlyOpenedObj,
                        t = e.suspiciousReviewObj,
                        o = e.ratings,
                        a = e.clickHandler,
                        l = e.showConicalRating,
                        f = e.ratingV2Size;
                    if (!(0, s.default)(n)) return i.createElement(c.A, (0, r.A)({}, (0, m.k$)({
                        data: n,
                        clickHandler: a
                    }), {
                        size: f,
                        appearance: "outline",
                        textColor: d.default.z500,
                        conicalRating: l
                    }));
                    if (!(0, s.default)(t)) return i.createElement(c.A, (0, r.A)({}, (0, m.k$)({
                        data: t,
                        clickHandler: a
                    }), {
                        size: f,
                        conicalRating: l
                    }));
                    var p = (0, u.default)(o, "DELIVERY", (0, u.default)(o, "DINING", {}));
                    return !(0, s.default)(p) && i.createElement(c.A, (0, r.A)({}, (0, m.k$)({
                        data: p,
                        clickHandler: a
                    }), {
                        size: f,
                        conicalRating: l
                    }))
                };
            p.propTypes = {
                newlyOpenedObj: a().objectOf(f),
                suspiciousReviewObj: a().objectOf(f),
                ratings: a().objectOf(a().object),
                clickHandler: a().func,
                showConicalRating: a().bool,
                ratingV2Size: a().number
            }, p.defaultProps = {
                newlyOpenedObj: {},
                suspiciousReviewObj: {},
                ratings: {},
                clickHandler: l.default,
                showConicalRating: 0,
                ratingV2Size: 400
            };
            const A = p
        },
        "5RJS": (e, n, t) => {
            t.d(n, {
                A8: () => i,
                Pf: () => o,
                VU: () => a,
                b2: () => s,
                jZ: () => u
            });
            var r = t("77l8"),
                i = {
                    INITIATE: "GET_LOCATION_DETAILS_INITIATE",
                    SUCCESS: "GET_LOCATION_DETAILS_SUCCESS",
                    FAILED: "GET_LOCATION_DETAILS_FAILED"
                },
                o = function(e, n, t, o) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                        s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        u = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                    return (0, r.A)({
                        type: i.INITIATE,
                        lat: e,
                        lng: n,
                        entityId: t,
                        entityType: o,
                        persist: s,
                        storeUserSelected: u
                    }, a)
                },
                a = function(e) {
                    return {
                        type: i.SUCCESS,
                        location: e
                    }
                },
                s = function(e) {
                    return {
                        type: i.FAILED,
                        err: e
                    }
                },
                u = function(e, n, t) {
                    var r = e.entity_id,
                        o = void 0 === r ? 0 : r,
                        a = e.entity_type,
                        s = void 0 === a ? "" : a,
                        u = e.address_latitude,
                        l = void 0 === u ? 0 : u,
                        c = e.address_longitude,
                        d = void 0 === c ? 0 : c,
                        m = e.place,
                        f = void 0 === m ? {} : m,
                        p = f.placeId,
                        A = void 0 === p ? 0 : p,
                        h = f.placeType,
                        g = void 0 === h ? "" : h,
                        v = f.placeName,
                        E = void 0 === v ? "" : v,
                        _ = f.cellId,
                        y = void 0 === _ ? 0 : _,
                        b = e.id,
                        T = void 0 === b ? 0 : b;
                    return {
                        type: i.INITIATE,
                        lat: 0,
                        lng: 0,
                        entityId: o,
                        entityType: s,
                        persist: !0,
                        storeUserSelected: !0,
                        userDefinedLatitude: l,
                        userDefinedLongitude: d,
                        placeId: A,
                        placeType: g,
                        placeName: E,
                        cellId: y,
                        addressId: T,
                        autoDetectAddress: !0,
                        resId: t,
                        pageType: n
                    }
                }
        },
        TaAX: (e, n, t) => {
            t.d(n, {
                EH: () => i,
                E_: () => o,
                ku: () => a,
                rn: () => r
            });
            var r = {
                    INITIATE: "GET_POPULAR_LOCATION_INITIATE",
                    SUCCESS: "GET_POPULAR_LOCATION_SUCCESS",
                    FAILED: "GET_POPULAR_LOCATION_FAILED"
                },
                i = function(e) {
                    return {
                        type: r.INITIATE,
                        cityId: e
                    }
                },
                o = function(e) {
                    return {
                        type: r.SUCCESS,
                        locationsData: e
                    }
                },
                a = function(e) {
                    return {
                        type: r.FAILED,
                        err: e
                    }
                }
        },
        sC5X: (e, n, t) => {
            t.d(n, {
                Op: () => r,
                VZ: () => i
            });
            var r = {
                    INITIATE: "GET_POPULAR_SEARCHES_INITIATE",
                    SUCCESS: "GET_POPULAR_SEARCHES_SUCCESS",
                    FAILED: "GET_POPULAR_SEARCHES_FAILED"
                },
                i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return {
                        type: r.INITIATE,
                        entityType: e,
                        entityId: n,
                        cityId: t
                    }
                }
        },
        yL8x: (e, n, t) => {
            t.d(n, {
                J2: () => i,
                YR: () => r,
                jD: () => a,
                lC: () => s,
                x6: () => o
            });
            var r = {
                    INITIATE_GET: "RECENTLY_SELECTED_LOCATIONS_INITIATE_GET",
                    SUCCESS_GET: "RECENTLY_SELECTED_LOCATIONS_SUCCESS_GET",
                    INITIATE_SAVE: "RECENTLY_SELECTED_LOCATIONS_INITIATE_SAVE",
                    SUCCESS_SAVE: "RECENTLY_SELECTED_LOCATIONS_SUCCESS_SAVE"
                },
                i = function() {
                    return {
                        type: r.INITIATE_GET
                    }
                },
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return {
                        type: r.SUCCESS_GET,
                        recentlySelectedLocations: e
                    }
                },
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        type: r.INITIATE_SAVE,
                        recentlySelectedLocation: e
                    }
                },
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        type: r.SUCCESS_SAVE,
                        recentlySelectedLocations: e
                    }
                }
        },
        "4+bF": (e, n, t) => {
            t.d(n, {
                D2: () => s,
                Fo: () => o,
                sx: () => i,
                v7: () => a
            });
            var r = t("j399"),
                i = {
                    INITIATE: "GET_SAVED_ADDRESS_INITIATE",
                    SUCCESS: "GET_SAVED_ADDRESS_SUCCESS",
                    FAILED: "GET_SAVED_ADDRESS_FAILED"
                },
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default;
                    return {
                        type: i.INITIATE,
                        resId: e,
                        setShowShimmer: n
                    }
                },
                a = function(e) {
                    return {
                        type: i.SUCCESS,
                        savedAddress: e
                    }
                },
                s = function(e) {
                    return {
                        type: i.FAILED,
                        err: e
                    }
                }
        },
        oClw: (e, n, t) => {
            t.d(n, {
                hE: () => r,
                hg: () => o,
                t$: () => i
            });
            var r = {
                    OPEN: "OPEN_UNIVERSAL_SEARCH_MODAL",
                    CLOSE: "CLOSE_UNIVERSAL_SEARCH_MODAL"
                },
                i = function() {
                    return {
                        type: r.OPEN
                    }
                },
                o = function() {
                    return {
                        type: r.CLOSE
                    }
                }
        },
        "X2+A": (e, n, t) => {
            t.d(n, {
                C$: () => a,
                Jc: () => f,
                Le: () => o,
                OB: () => c,
                OZ: () => i,
                Sn: () => m,
                gL: () => l,
                gU: () => s,
                mv: () => r,
                qU: () => u,
                sP: () => d
            });
            var r = {
                    OPEN: "OPEN_UNIVERSAL_LOCATION_MODAL",
                    CLOSE: "CLOSE_UNIVERSAL_LOCATION_MODAL"
                },
                i = {
                    OPEN: "OPEN_UNIVERSAL_LOCATION_WITH_BANNER_MODAL",
                    CLOSE: "CLOSE_UNIVERSAL_LOCATION_WITH_BANNER_MODAL"
                },
                o = {
                    OPEN: "OPEN_UNIVERSAL_LOCATION_MODAL_WITH_DISH_CARD",
                    CLOSE: "CLOSE_UNIVERSAL_LOCATION_MODAL_WITH_DISH_CARD"
                },
                a = "SET_DISH_HEADER_HEIGHT",
                s = function() {
                    return {
                        type: r.OPEN
                    }
                },
                u = function() {
                    return {
                        type: i.OPEN
                    }
                },
                l = function() {
                    return {
                        type: r.CLOSE
                    }
                },
                c = function() {
                    return {
                        type: i.CLOSE
                    }
                },
                d = function(e) {
                    return {
                        type: o.OPEN,
                        universalLMDishCard: e
                    }
                },
                m = function() {
                    return {
                        type: o.CLOSE
                    }
                },
                f = function(e) {
                    return {
                        type: a,
                        dishHeaderHeight: e
                    }
                }
        },
        ZEPn: (e, n, t) => {
            t.d(n, {
                BO: () => s,
                UA: () => a,
                iq: () => r.i
            });
            var r = t("VXJo"),
                i = t("17x9"),
                o = t.n(i),
                a = o().shape({
                    hideCookieBanner: o().bool,
                    hideFooter: o().bool,
                    hideLogin: o().bool,
                    hideNavbar: o().bool,
                    hideNotifications: o().bool,
                    hidePageBlocker: o().bool,
                    hideStructuredData: o().bool
                }),
                s = {
                    hideCookieBanner: !1,
                    hideFooter: !1,
                    hideLogin: !1,
                    hideNavbar: !1,
                    hideNotifications: !1,
                    hidePageBlocker: !1,
                    hideStructuredData: !1
                }
        },
        VXJo: (e, n, t) => {
            t.d(n, {
                i: () => r
            });
            var r = function(e) {
                var n, t, r, i, o, a, s, u, l, c, d, m, f, p, A, h = null !== (n = e.pageConfig) && void 0 !== n ? n : {};
                return {
                    hideCookieBanner: null !== (t = h.hideCookieBanner) && void 0 !== t && t,
                    hideFooter: null !== (r = h.hideFooter) && void 0 !== r && r,
                    hideLogin: null !== (i = h.hideLogin) && void 0 !== i && i,
                    hideNavbar: null !== (o = h.hideNavbar) && void 0 !== o && o,
                    hideNotifications: null !== (a = h.hideNotifications) && void 0 !== a && a,
                    hidePageBlocker: null !== (s = h.hidePageBlocker) && void 0 !== s && s,
                    hideStructuredData: null !== (u = h.hideStructuredData) && void 0 !== u && u,
                    openAppModalV2: null !== (l = h.openAppModalV2) && void 0 !== l ? l : void 0,
                    showLocationBannerAutoPopup: null !== (c = h.showLocationBannerAutoPopup) && void 0 !== c && c,
                    isPageCacheable: null !== (d = null == h || null === (m = h.cacheMeta) || void 0 === m ? void 0 : m.cacheable) && void 0 !== d && d,
                    showResToHomeLoader: null !== (f = h.showResToHomeLoader) && void 0 !== f && f,
                    showCheckoutToResLoader: null !== (p = h.showCheckoutToResLoader) && void 0 !== p && p,
                    openAppModalV3: null !== (A = h.openAppModalV3) && void 0 !== A ? A : void 0
                }
            }
        },
        r5Zp: (e, n, t) => {
            t.d(n, {
                sR: () => T,
                nD: () => S,
                nP: () => N,
                _Y: () => O,
                r$: () => I,
                W4: () => R,
                gj: () => w,
                wG: () => M,
                GS: () => P,
                Bj: () => L,
                wr: () => C
            });
            var r = t("77l8"),
                i = t("zThL"),
                o = t("Kq5O"),
                a = t.n(o),
                s = t("IihT"),
                u = t("lXQd"),
                l = t("P62M"),
                c = t("KbIs"),
                d = t("BkpH"),
                m = t("sPea"),
                f = function(e) {
                    var n = e.oldState,
                        t = e.menuItem,
                        o = e.itemGroups,
                        a = e.menuItemPrice,
                        s = e.groups,
                        u = e.commonData,
                        l = void 0 === u ? {} : u,
                        c = t.item,
                        d = (void 0 === c ? {} : c).id,
                        m = void 0 === d ? "" : d,
                        f = n.totalItemCount,
                        p = void 0 === f ? 0 : f,
                        A = n.totalAmount,
                        h = void 0 === A ? 0 : A,
                        g = n.orderItems,
                        v = void 0 === g ? {} : g,
                        E = v[m] || {},
                        _ = E.count,
                        y = void 0 === _ ? 0 : _,
                        b = E.selectedGroups,
                        T = void 0 === b ? {} : b;
                    return (0, r.A)((0, r.A)((0, r.A)({}, n), {}, {
                        orderItems: (0, r.A)((0, r.A)({}, v), {}, (0, i.A)({}, m, (0, r.A)((0, r.A)({}, E), {}, {
                            menuItem: t,
                            selectedGroups: (0, r.A)((0, r.A)({}, T), o),
                            lastAddedItemGroups: s,
                            count: y + 1
                        })))
                    }, l), {}, {
                        totalItemCount: p + 1,
                        totalAmount: h + a
                    })
                },
                p = function(e) {
                    var n = e.oldState,
                        t = e.menuItem,
                        o = e.itemGroups,
                        a = e.menuItemPrice,
                        s = e.groups,
                        u = e.multipleItemCount,
                        l = e.commonData,
                        c = void 0 === l ? {} : l,
                        d = t.item,
                        m = (void 0 === d ? {} : d).id,
                        f = void 0 === m ? "" : m,
                        p = n.totalItemCount,
                        A = void 0 === p ? 0 : p,
                        h = n.totalAmount,
                        g = void 0 === h ? 0 : h,
                        v = n.orderItems,
                        E = void 0 === v ? {} : v,
                        _ = E[f] || {},
                        y = _.count,
                        b = void 0 === y ? 0 : y,
                        T = _.selectedGroups,
                        S = void 0 === T ? {} : T;
                    return (0, r.A)((0, r.A)((0, r.A)({}, n), {}, {
                        orderItems: (0, r.A)((0, r.A)({}, E), {}, (0, i.A)({}, f, (0, r.A)((0, r.A)({}, _), {}, {
                            menuItem: t,
                            selectedGroups: (0, r.A)((0, r.A)({}, S), o),
                            lastAddedItemGroups: s,
                            count: b + u
                        })))
                    }, c), {}, {
                        totalItemCount: A + u,
                        totalAmount: g + u * a
                    })
                },
                A = function(e) {
                    var n = e.oldState,
                        t = e.menuItem,
                        o = e.itemGroups,
                        a = e.selectedGroupPrice,
                        s = e.commonData,
                        u = void 0 === s ? {} : s,
                        l = t.item,
                        c = (void 0 === l ? {} : l).id,
                        d = void 0 === c ? "" : c,
                        m = n.totalItemCount,
                        f = void 0 === m ? 0 : m,
                        p = n.totalAmount,
                        A = void 0 === p ? 0 : p,
                        h = n.orderItems,
                        g = void 0 === h ? {} : h,
                        v = g[d] || {},
                        E = v.count,
                        _ = void 0 === E ? 0 : E,
                        y = v.selectedGroups,
                        b = void 0 === y ? {} : y;
                    return (0, r.A)((0, r.A)((0, r.A)({}, n), {}, {
                        orderItems: (0, r.A)((0, r.A)({}, g), {}, (0, i.A)({}, d, (0, r.A)((0, r.A)({}, v), {}, {
                            selectedGroups: (0, r.A)((0, r.A)({}, b), o),
                            count: _ + 1
                        })))
                    }, u), {}, {
                        totalItemCount: f + 1,
                        totalAmount: A + a
                    })
                },
                h = function(e) {
                    var n = e.oldState,
                        t = e.menuItem,
                        o = e.itemGroupIdentifier,
                        a = e.menuItemPrice,
                        s = e.commonData,
                        u = void 0 === s ? {} : s,
                        l = t.item,
                        c = (void 0 === l ? {} : l).id,
                        f = void 0 === c ? "" : c,
                        p = n.totalItemCount,
                        A = void 0 === p ? 0 : p,
                        h = n.totalAmount,
                        g = void 0 === h ? 0 : h,
                        v = n.orderItems,
                        E = void 0 === v ? {} : v,
                        _ = E[f] || {},
                        y = _.count,
                        b = void 0 === y ? 0 : y,
                        T = _.selectedGroups,
                        S = void 0 === T ? {} : T;
                    if (b > 0) {
                        var I = b - 1;
                        if (I > 0) {
                            var w = {},
                                R = (S[o] || {}).count,
                                N = void 0 === R ? 0 : R;
                            return N - 1 ? w = (0, i.A)({}, o, (0, r.A)((0, r.A)({}, S[o]), {}, {
                                count: N - 1
                            })) : delete S[o], (0, r.A)((0, r.A)((0, r.A)({}, n), {}, {
                                orderItems: (0, r.A)((0, r.A)({}, E), {}, (0, i.A)({}, f, (0, r.A)((0, r.A)({}, _), {}, {
                                    selectedGroups: (0, r.A)((0, r.A)({}, S), w),
                                    count: I
                                })))
                            }, u), {}, {
                                totalItemCount: A - 1,
                                totalAmount: g - a
                            })
                        }
                        E[f];
                        var O = (0, d.A)(E, [f].map(m.A));
                        return (0, r.A)((0, r.A)((0, r.A)({}, n), {}, {
                            orderItems: (0, r.A)({}, O)
                        }, u), {}, {
                            totalItemCount: A - 1,
                            totalAmount: g - a
                        })
                    }
                    return (0, r.A)((0, r.A)({}, n), u)
                },
                g = t("4x9D"),
                v = t("T6B4"),
                E = t("IzBX"),
                _ = t("OM32"),
                y = t("ScDn"),
                b = a().mark(C),
                T = "ADD_MENU_ITEM",
                S = "ADD_MULTIPLE_MENU_ITEM",
                I = "REMOVE_MENU_ITEM",
                w = "REPEAT_LAST_CUSTOMISATION",
                R = "REMOVE_OUT_OF_STOCK_ITEMS",
                N = "CLEAR_CART",
                O = "docr";

            function C(e) {
                var n, t, o, d, m, g, v, C, P, D, k, V, U, F, G, q, H, z, B, j, K, Y, W, J, Z, X, Q, $, ee, ne, te, re, ie, oe, ae, se, ue, le, ce, de, me, fe, pe, Ae, he, ge, ve, Ee, _e, ye, be, Te, Se, Ie, we, Re, Ne, Oe, Ce, xe, Me, Le, Pe, De, ke, Ve, Ue, Fe, Ge, qe, He, ze, Be;
                return a().wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            return n = e.data, o = (t = void 0 === n ? {} : n).actionType, d = void 0 === o ? "" : o, m = t.menuItem, g = void 0 === m ? {} : m, v = t.menuItemPrice, C = void 0 === v ? 0 : v, P = t.selectedGroupItemIdentifier, D = void 0 === P ? "" : P, k = t.groups, V = void 0 === k ? [] : k, U = t.itemCount, F = void 0 === U ? 0 : U, G = t.orderItems, q = void 0 === G ? {} : G, H = t.totalAmount, z = void 0 === H ? 0 : H, B = t.totalItemCount, j = void 0 === B ? 0 : B, K = t.freebieData, Y = void 0 === K ? {} : K, a.next = 4, (0, s.Lt)((function(e) {
                                return (0, u.default)(e, "pages.current.resId", 0)
                            }));
                        case 4:
                            return W = a.sent, a.next = 7, (0, s.Lt)((function(e) {
                                return (0, u.default)(e, "pages.restaurant.".concat(W, ".sections"), {})
                            }));
                        case 7:
                            return J = a.sent, a.next = 10, (0, s.Lt)(E.A);
                        case 10:
                            Z = a.sent, X = (0, u.default)(J, "SECTION_BASIC_INFO.res_thumb", ""), Q = (0, u.default)(J, "SECTION_BASIC_INFO.name", ""), $ = (0, u.default)(J, "SECTION_BASIC_INFO.resUrl", ""), ee = (0, u.default)(J, "SECTION_RES_HEADER_DETAILS.LOCALITY.text", ""), null === (ne = M()) && (ne = {}), te = ne.restaurantId, W !== (void 0 === te ? 0 : te) && (ne = {}), re = Date.now(), oe = (ie = ne).orderItems, ae = void 0 === oe ? {} : oe, se = ie.resImg, ue = void 0 === se ? "" : se, le = ie.resName, ce = void 0 === le ? "" : le, de = ie.resLocation, me = void 0 === de ? "" : de, fe = ie.resOrderUrl, pe = void 0 === fe ? "" : fe, Ae = g.item, ge = (he = void 0 === Ae ? {} : Ae).id, ve = void 0 === ge ? "" : ge, Ee = he.price, _e = void 0 === Ee ? 0 : Ee, ye = (0, l.EI)(V) || !D ? (0, c.i1)(ve, V) : D, be = ae[ve] || {}, Te = be.selectedGroups, Se = (void 0 === Te ? {} : Te)[ye] || {}, Ie = Se.menuItemPrice, we = void 0 === Ie ? _e : Ie, Re = Se.count, Ne = void 0 === Re ? 0 : Re, Oe = {
                                timestamp: re,
                                restaurantId: W,
                                cartSubtype: Z,
                                resImg: X,
                                resName: Q,
                                resOrderUrl: $,
                                resLocation: ee
                            }, Ce = {}, xe = {}, xe = (0, i.A)({}, ye, {
                                groups: V,
                                menuItemPrice: C,
                                count: Ne + 1
                            }), d === T && (Ce = f({
                                oldState: ne,
                                menuItem: g,
                                itemGroups: xe,
                                menuItemPrice: C,
                                groups: V,
                                commonData: Oe
                            })), d === S && (xe = (0, i.A)({}, ye, {
                                groups: V,
                                menuItemPrice: C,
                                count: Ne + F
                            }), Ce = p({
                                oldState: ne,
                                menuItem: g,
                                itemGroups: xe,
                                menuItemPrice: C,
                                groups: V,
                                multipleItemCount: F,
                                commonData: Oe
                            })), d === w && (xe = (0, i.A)({}, ye, {
                                groups: V,
                                menuItemPrice: we,
                                count: Ne + 1
                            }), Ce = A({
                                oldState: ne,
                                menuItem: g,
                                itemGroups: xe,
                                selectedGroupPrice: we,
                                commonData: Oe
                            })), d === I && (Me = x(C, we), Ce = h({
                                oldState: ne,
                                menuItem: g,
                                itemGroupIdentifier: ye,
                                menuItemPrice: Me,
                                commonData: Oe
                            })), d === R && (Ce = {
                                timestamp: re,
                                restaurantId: W,
                                orderItems: q,
                                totalItemCount: j,
                                totalAmount: z,
                                resImg: ue,
                                resName: ce,
                                resLocation: me,
                                resOrderUrl: pe,
                                cartSubtype: Z
                            }), d === N && ((0, _.Yj)(O), Ce = {}), d === y.F9 && (Ce = (0, r.A)((0, r.A)({}, ne), {}, {
                                freebieData: Y
                            }), Le = Y.itemId, Pe = void 0 === Le ? "" : Le, De = Y.numberOfFreebiesInCart, ke = void 0 === De ? 0 : De, Ve = ae[Pe] || {}, Ue = Ve.count, Fe = void 0 === Ue ? 0 : Ue, Ge = Ve.selectedGroups, qe = void 0 === Ge ? {} : Ge, He = (0, c.i1)(Pe, []), ze = qe[He], Be = void 0 === ze ? {} : ze, Pe && Fe && (Ce = (0, r.A)((0, r.A)({}, Ce), {}, {
                                orderItems: (0, r.A)((0, r.A)({}, ae), {}, (0, i.A)({}, Pe, (0, r.A)((0, r.A)({}, Ve), {}, {
                                    freebieCount: ke,
                                    selectedGroups: (0, r.A)((0, r.A)({}, qe), {}, (0, i.A)({}, He, (0, r.A)((0, r.A)({}, Be), {}, {
                                        freebieCount: ke
                                    })))
                                })))
                            }))), L(Ce);
                        case 39:
                        case "end":
                            return a.stop()
                    }
                }), b)
            }
            var x = function(e, n) {
                    return 0 === e ? n : e
                },
                M = function() {
                    try {
                        return JSON.parse(window.localStorage.getItem(v.cn))
                    } catch (e) {
                        return ""
                    }
                },
                L = function(e) {
                    window.localStorage.setItem(v.cn, JSON.stringify(e))
                },
                P = function() {
                    (0, _.Yj)(O), window.localStorage.removeItem(v.cn), (0, g.Z)()
                }
        },
        "GBU/": (e, n, t) => {
            t.d(n, {
                A: () => v,
                R: () => _
            });
            var r = t("zThL"),
                i = t("lXQd"),
                o = t("wRyO"),
                a = t("5An4"),
                s = t("LSsp"),
                u = t("pZ4b"),
                l = t("HeTv"),
                c = t("czsM"),
                d = t("HMsx"),
                m = "green",
                f = "white",
                p = "type",
                A = "tint",
                h = {
                    red: o.default,
                    orange: u.default,
                    yellow: l.default,
                    green: c.default,
                    black: a.default,
                    white: s.default,
                    grey: d.default
                },
                g = function(e) {
                    var n = (0, i.default)(e, p, f),
                        t = (0, i.default)(h, n, s.default);
                    return "black" === n || n === f ? t : t["z".concat(Number((0, i.default)(e, A, "900")))]
                };
            const v = g;
            var E = (0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)((0, r.A)({}, 0, (0, r.A)((0, r.A)({}, p, "grey"), A, 400)), 1, (0, r.A)((0, r.A)({}, p, "red"), A, 500)), 2, (0, r.A)((0, r.A)({}, p, "red"), A, 400)), 3, (0, r.A)((0, r.A)({}, p, "yellow"), A, 600)), 4, (0, r.A)((0, r.A)({}, p, m), A, 600)), 5, (0, r.A)((0, r.A)({}, p, m), A, 800)),
                _ = function(e) {
                    return g(E[e || 0])
                }
        },
        nXaw: (e, n, t) => {
            t.d(n, {
                Z: () => r
            });
            var r = function() {
                document.body.scrollIntoView({
                    behavior: "smooth"
                })
            }
        },
        sLkX: (e, n, t) => {
            t.d(n, {
                Z$: () => T,
                Zh: () => b,
                mR: () => w,
                Ay: () => k,
                k6: () => S,
                C7: () => M,
                UV: () => L,
                lR: () => P
            });
            var r = t("/0+J"),
                i = t("77l8"),
                o = t("lIP5"),
                a = t("Kq5O"),
                s = t.n(a),
                u = t("lXQd"),
                l = t("um92"),
                c = t("AkOy"),
                d = t("p99z"),
                m = t("akXP"),
                f = t("OM32"),
                p = t("Ta92"),
                A = t("F6eP"),
                h = !1,
                g = "auth_sdk_refresh_call_success",
                v = "auth_sdk_refresh_call_failure";

            function E(e, n) {
                return h ? Promise.resolve(!1) : (h = !0, (0, p.A)().refresh().then((function() {
                    return function(e) {
                        var n = e.url,
                            t = void 0 === n ? "" : n,
                            r = e.ttl,
                            i = void 0 === r ? 0 : r;
                        (0, A.K3)(g, [t, i])
                    }({
                        url: e,
                        ttl: n
                    }), h = !1, !0
                })).catch((function() {
                    return function(e) {
                        var n = e.url,
                            t = void 0 === n ? "" : n,
                            r = e.ttl,
                            i = void 0 === r ? 0 : r;
                        (0, A.K3)(v, [t, i])
                    }({
                        url: e,
                        ttl: n
                    }), h = !1, !1
                })))
            }
            var _ = function(e, n) {
                    return 1e3 * parseInt(e, 10) - Date.now() < n
                },
                y = t("uulN"),
                b = "POST",
                T = "GET";

            function S(e) {
                var n = new FormData,
                    t = function(e, r) {
                        Object.keys(r).forEach((function(i) {
                            if ("object" === (0, o.A)(r[i]) && null !== r[i]) {
                                var a = "" === e ? i : "".concat(e, "[").concat(i, "]");
                                t(a, r[i])
                            } else {
                                var s = "" === e ? i : "".concat(e, "[").concat(i, "]");
                                n.append(s, r[i])
                            }
                        }))
                    };
                return t("", e), n
            }

            function I(e) {
                return Object.keys(e).map((function(n) {
                    return t = n, r = e[n], (0, l.default)(r) ? r.map((function(e) {
                        return "".concat(t, "[]=").concat(e)
                    })).join("&") : "".concat(t, "=").concat(r);
                    var t, r
                })).join("&")
            }
            var w = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, c.default)(n) ? e : e + (-1 === e.indexOf("?") ? "?" : "&") + I(n)
                },
                R = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (0, i.A)((0, i.A)({}, (0, u.default)(n, "extra", {})), {}, {
                            headers: (0, i.A)((0, i.A)({}, n.headers || {}), {}, {
                                "x-zomato-csrft": window.csrft
                            }),
                            url: w(e, (0, u.default)(n, "params", {})),
                            method: n.method || T,
                            credentials: "same-origin",
                            redirect: "follow"
                        }),
                        r = (0, u.default)(n, "credentials", null);
                    if (r && (t.credentials = r), (0, u.default)(n, "method", T).toUpperCase() !== T) {
                        var o = (0, u.default)(n, "body", null);
                        t = (0, i.A)((0, i.A)((0, i.A)({}, t), o && {
                            body: o
                        }), r && {
                            credentials: r
                        })
                    }
                    return t
                },
                N = function(e) {
                    if (e.redirected && (window.location.href = e.url), e.ok) return e;
                    var n = new Error(e.statusText);
                    throw n.response = e, n
                },
                O = function(e) {
                    return window.csrf_set_time = (new Date).valueOf(), e
                },
                C = function() {
                    var e = (0, r.A)(s().mark((function e() {
                        var n, t, r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = new Date, t = window.csrf_set_time, !(n - t >= 144e4) && window.csrft || (0, d.Lb)()) {
                                        e.next = 15;
                                        break
                                    }
                                    return (0, d.az)(), r = {}, e.prev = 5, e.next = 8, (0, m.dq)();
                                case 8:
                                    r = e.sent, e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(5), r = {
                                        csrf: ""
                                    };
                                case 14:
                                    (0, m.uG)(r);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [5, 11]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var e = (0, r.A)(s().mark((function e(n) {
                        var t, r, o, a, u, l, c = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = c.length > 1 && void 0 !== c[1] ? c[1] : {}, r = x.fetchConfig || {}, o = r.headers, a = void 0 === o ? {} : o, e.next = 4, C();
                                case 4:
                                    if (u = (0, i.A)((0, i.A)({}, t), {}, {
                                            headers: (0, i.A)((0, i.A)({}, a), t.headers)
                                        }), l = R(n, u), (0, y.rd)()) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 9, D({
                                        url: l.url
                                    });
                                case 9:
                                    return e.abrupt("return", fetch(l.url, l).then(O).then(N));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                M = function(e) {
                    var n = e.getState().fetchConfigs;
                    x.fetchConfig = n
                },
                L = function(e) {
                    var n = e.config,
                        t = (0, u.default)(x, "fetchConfig.headers", {}),
                        r = (0, u.default)(n, "headers", {});
                    x.fetchConfig = {
                        headers: (0, i.A)((0, i.A)({}, t), r)
                    }
                },
                P = function() {
                    var e = (0, r.A)(s().mark((function e(n) {
                        var t, r, i, o;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.url, r = n.body, e.next = 3, x(t, {
                                        body: JSON.stringify(r),
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                case 3:
                                    return i = e.sent, e.next = 6, i.json();
                                case 6:
                                    return o = e.sent, e.abrupt("return", o);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                D = function() {
                    var e = (0, r.A)(s().mark((function e(n) {
                        var t, r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = n.url, r = (0, f.Ri)("ttaz"), !((0, f.Ri)("cid") && r && _(r, 6048e5))) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", E(t, r));
                                case 5:
                                    return e.abrupt("return", !0);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }();
            const k = x
        },
        U68s: (e, n, t) => {
            t.d(n, {
                P: () => m,
                H: () => b
            });
            var r = t("+9dH"),
                i = t("Vadf"),
                o = t("BkpH"),
                a = t("q1tI"),
                s = t("17x9"),
                u = t.n(s),
                l = t("j399"),
                c = ["notRequired", "checkForEmpty", "matcher", "value", "errorMessage", "name", "inputField", "onBlur", "onBlurFormElement", "isPristineForm", "formSubmitFailed"],
                d = function(e) {
                    var n = e.notRequired,
                        t = e.checkForEmpty,
                        s = e.matcher,
                        u = e.value,
                        l = e.errorMessage,
                        d = e.name,
                        m = e.inputField,
                        f = e.onBlur,
                        p = e.onBlurFormElement,
                        A = e.isPristineForm,
                        h = e.formSubmitFailed,
                        g = (0, o.A)(e, c),
                        v = (0, a.useState)(!0),
                        E = (0, i.A)(v, 2),
                        _ = E[0],
                        y = E[1];
                    (0, a.useEffect)((function() {
                        A && y(!0)
                    }), [A]);
                    var b = function() {
                        return n && (!t || "" === u) || s(u)
                    };
                    return a.createElement(m, (0, r.A)({}, g, {
                        name: d,
                        value: u,
                        errorMsg: h && !b() || !b() && !_ ? l : "",
                        onBlur: function(e) {
                            p(), _ && y(!1), f && f(e)
                        },
                        isFieldValid: b(),
                        isFieldPristine: _
                    }))
                };
            d.defaultProps = {
                notRequired: !1,
                checkForEmpty: !1,
                onBlur: l.default,
                errorMessage: "",
                isPristineForm: !0,
                onBlurFormElement: l.default,
                formSubmitFailed: !1
            }, d.propTypes = {
                notRequired: u().bool,
                checkForEmpty: u().bool,
                value: u().string.isRequired,
                name: u().string.isRequired,
                inputField: u().func.isRequired,
                matcher: u().func.isRequired,
                onBlurFormElement: u().func,
                isPristineForm: u().bool,
                onBlur: u().func,
                formSubmitFailed: u().bool,
                errorMessage: u().string
            };
            const m = d;
            var f, p, A = t("zThL"),
                h = t("77l8"),
                g = t("RlfA"),
                v = t("vOnD"),
                E = ["flexForm", "children", "onSubmit", "resetOnSubmit"],
                _ = v.default.form(f || (f = (0, g.A)(["\n  ", "\n"])), (function(e) {
                    return e.flexForm ? (0, v.css)(p || (p = (0, g.A)(["\n          display: flex;\n          justify-content: space-between;\n          flex-wrap: wrap;\n        "]))) : ""
                })),
                y = function(e) {
                    var n = e.flexForm,
                        t = e.children,
                        s = e.onSubmit,
                        u = e.resetOnSubmit,
                        l = void 0 === u || u,
                        c = (0, o.A)(e, E),
                        d = (0, a.useState)(!0),
                        m = (0, i.A)(d, 2),
                        f = m[0],
                        p = m[1],
                        g = (0, a.useState)(!1),
                        v = (0, i.A)(g, 2),
                        y = v[0],
                        b = v[1],
                        T = (0, a.useState)(!1),
                        S = (0, i.A)(T, 2),
                        I = S[0],
                        w = S[1],
                        R = (Array.isArray(t) ? t : [t]).reduce((function(e, n) {
                            return (n.props.notRequired && (!n.props.checkForEmpty || "" === n.props.value) || !n.props.matcher || n.props.matcher(n.props.value)) && e
                        }), !0),
                        N = {
                            onBlurFormElement: function() {
                                return p(!1)
                            },
                            isPristineForm: f,
                            isFormSubmitted: I,
                            formSubmitFailed: y,
                            isFormValid: R
                        },
                        O = (Array.isArray(t) ? t : [t]).map((function(e) {
                            return (0, h.A)((0, h.A)({}, e), {}, {
                                props: (0, h.A)((0, h.A)({}, e.props), N)
                            })
                        }));
                    return a.createElement(_, (0, r.A)({
                        flexForm: n
                    }, c, {
                        onSubmit: function(e) {
                            if (e.preventDefault(), I || w(!0), R) {
                                b(!1);
                                var n = O.filter((function(e) {
                                    return e.props.inputField && e.props.name
                                })).reduce((function(e, n) {
                                    return (0, h.A)((0, h.A)({}, e), {}, (0, A.A)({}, n.props.name, n.props.value))
                                }), {});
                                s(n), l && (p(!0), w(!1))
                            } else b(!0)
                        }
                    }), O)
                };
            y.defaultProps = {
                flexForm: !1,
                resetOnSubmit: !0
            }, y.propTypes = {
                flexForm: u().bool,
                children: u().arrayOf(u().node).isRequired,
                onSubmit: u().func.isRequired,
                resetOnSubmit: u().bool
            };
            const b = y
        },
        hfmy: (e, n, t) => {
            t.d(n, {
                s: () => a,
                z: () => o
            });
            var r = t("lXQd"),
                i = t("V3te"),
                o = function() {
                    switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.jd) {
                        case i.jd:
                            return 2.5;
                        case i.lS:
                            return 1;
                        case i.So:
                            return 2;
                        default:
                            return 2.5
                    }
                },
                a = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o();
                    return (0, r.default)(e, "deviceSpecificInfo.styles.extraBottomPadding", !1) ? t : n
                }
        },
        f773: (e, n, t) => {
            t.d(n, {
                FL: () => a,
                Vj: () => o,
                co: () => u
            });
            var r = new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/),
                i = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                o = function(e) {
                    return r.test(e)
                },
                a = function(e) {
                    return i.test(e)
                },
                s = ["gmail.com", "yahoo.com", "yahoo.co", "yahoo.co.in", "yahoo.co.uk", "outlook.com", "live.com", "msn.com", "rediffmail.com", "aol.com", "hotmail.com", "rocketmail.com"],
                u = function(e) {
                    return a(e) && function(e) {
                        var n = e.indexOf("@");
                        if (-1 === n) return !1;
                        var t = e.substring(n + 1).toLowerCase();
                        return !s.includes(t)
                    }(e)
                }
        },
        aMMj: (e, n, t) => {
            t.d(n, {
                Tf: () => p,
                bs: () => A,
                wu: () => d,
                wR: () => h,
                V0: () => f,
                ej: () => g,
                O4: () => m,
                yn: () => v,
                YR: () => E
            });
            var r = t("Kq5O"),
                i = t.n(r),
                o = t("lXQd"),
                a = t("IihT"),
                s = t("HKiI"),
                u = t("AdJq"),
                l = i().mark(g),
                c = i().mark(E),
                d = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        a = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return 0 === e.indexOf(u.Hc4) ? e.slice(u.Hc4.length) : e
                        }(n);
                    r && window.history.pushState({
                        url: n
                    }, "", a), e((0, s.X4)(a, t, i, o))
                },
                m = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    window.history.replaceState({
                        url: n
                    }, "", n), e((0, s.X4)(n, t, r, i))
                },
                f = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) && window.history.pushState({
                        url: e
                    }, "", e), (0, s.X4)(e, n, t)
                },
                p = "LOAD_PAGE",
                A = "REPLACE_PAGE",
                h = function(e, n, t, r, i) {
                    return {
                        type: p,
                        url: e,
                        location: n,
                        pushHistory: t,
                        isMobile: r,
                        forceLoad: i
                    }
                };

            function g(e) {
                var n, t, r, c, d;
                return i().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return n = (0, o.default)(e, "url"), t = (0, o.default)(e, "location"), r = Boolean((0, o.default)(e, "pushHistory", !0)), c = Boolean((0, o.default)(e, "isMobile", 0)), d = Boolean((0, o.default)(e, "forceLoad", 0)), 0 === n.indexOf(u.Hc4) && (n = n.slice(u.Hc4.length)), r && window.history.pushState({
                                url: n
                            }, "", n), i.next = 9, (0, a.yJ)((0, s.X4)(n, t, c ? 1 : 0, d));
                        case 9:
                        case "end":
                            return i.stop()
                    }
                }), l)
            }
            var v = function(e, n, t) {
                return {
                    type: A,
                    url: e,
                    location: n,
                    isMobile: t,
                    forceLoad: arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                }
            };

            function E(e) {
                var n, t, r, l;
                return i().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return n = _((0, o.default)(e, "url")), t = (0, o.default)(e, "location"), r = Boolean((0, o.default)(e, "isMobile", 0)), l = (0, o.default)(e, "forceLoad", !1), 0 === n.indexOf(u.Hc4) && (n = n.slice(u.Hc4.length)), window.history.replaceState({
                                url: n
                            }, "", n), i.next = 8, (0, a.yJ)((0, s.X4)(n, t, r ? 1 : 0, l));
                        case 8:
                        case "end":
                            return i.stop()
                    }
                }), c)
            }
            var _ = function(e) {
                var n = e;
                return 0 === n.indexOf(u.Hc4) && (n = e.slice(u.Hc4.length)), n
            }
        },
        "B5+Q": (e, n, t) => {
            t.d(n, {
                A: () => r
            });
            const r = function() {
                var e = window.getComputedStyle(document.documentElement).overflowY;
                ["scroll", "auto"].includes(e) ? document.body.scrollTop = 0 : window.scrollTo(0, 0)
            }
        },
        yjvN: (e, n, t) => {
            t.d(n, {
                Ai: () => a,
                Al: () => w,
                C5: () => E,
                IN: () => d,
                KG: () => v,
                Xi: () => o,
                bL: () => g,
                bp: () => l,
                fy: () => h,
                g0: () => b,
                gd: () => y,
                j3: () => I,
                jC: () => T,
                kP: () => s,
                kl: () => u,
                lc: () => S,
                nX: () => m,
                ov: () => c,
                rC: () => r,
                rJ: () => A,
                sG: () => _,
                t_: () => p,
                yj: () => i,
                zu: () => f
            });
            var r = {
                    INITIATE: "GET_USER_PERMISSION_INITIATE",
                    SUCCESS: "GET_USER_PERMISSION_SUCCESS",
                    FAILED: "GET_USER_PERMISSION_FAILED"
                },
                i = {
                    INITIATE: "GET_UUID_FROM_STORAGE_INITIATE",
                    SUCCESS: "GET_UUID_FROM_STORAGE_SUCCESS"
                },
                o = {
                    INITIATE: "GET_HOME_PAGE_INITIATE",
                    SUCCESS: "GET_HOME_PAGE_SUCCESS",
                    FAILED: "GET_HOME_PAGE_FAILED"
                },
                a = "SET_PARTNERSHIP_USER",
                s = {
                    INITIATE: "PARTNERSHIP_LOGIN_INITIATE",
                    SUCCESS: "PARTNERSHIP_LOGIN_SUCCESS",
                    FAILED: "PARTNERSHIP_LOGIN_FAILED"
                },
                u = {
                    INITIATE: "GET_GPAY_TOKENS_INITIATE",
                    SUCCESS: "GET_GPAY_TOKENS_SUCCESS",
                    FAILED: "GET_GPAY_TOKENS_FAILED"
                },
                l = "mobile",
                c = "name",
                d = "HIDE_UPFRONT_LOGIN",
                m = "SHOW_UPFRONT_LOGIN",
                f = function() {
                    return {
                        type: o.INITIATE
                    }
                },
                p = function(e) {
                    var n = e.skipPrompt,
                        t = e.flowType,
                        r = e.modalPrompt,
                        i = e.successCallback,
                        o = e.appType,
                        a = e.userId,
                        u = void 0 === a ? 0 : a;
                    return {
                        type: s.INITIATE,
                        skipPrompt: n,
                        flowType: t,
                        userId: u,
                        modalPrompt: r,
                        successCallback: i,
                        appType: o
                    }
                },
                A = function() {
                    return {
                        type: s.SUCCESS
                    }
                },
                h = function() {
                    return {
                        type: s.FAILED
                    }
                },
                g = function() {
                    return {
                        type: o.FAILED
                    }
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.successCallback,
                        t = void 0 === n ? null : n,
                        i = e.errorCallback,
                        o = void 0 === i ? null : i,
                        a = e.flowType,
                        s = void 0 === a ? "" : a,
                        u = e.skipPrompt,
                        l = void 0 !== u && u,
                        c = e.initPrompt,
                        d = void 0 !== c && c,
                        m = e.modalPrompt,
                        f = void 0 !== m && m,
                        p = e.identityToken,
                        A = void 0 === p ? "" : p,
                        h = e.phoneToken,
                        g = void 0 === h ? "" : h;
                    return {
                        type: r.INITIATE,
                        successCallback: t,
                        errorCallback: o,
                        flowType: s,
                        skipPrompt: l,
                        initPrompt: d,
                        modalPrompt: f,
                        identityToken: A,
                        phoneToken: g
                    }
                },
                E = function() {
                    return {
                        type: r.SUCCESS
                    }
                },
                _ = function(e) {
                    return {
                        type: r.FAILED,
                        payload: e
                    }
                },
                y = function() {
                    return {
                        type: i.SUCCESS
                    }
                },
                b = function(e) {
                    return {
                        type: a,
                        user: e
                    }
                },
                T = function(e) {
                    var n = e.identityToken,
                        t = e.phoneToken;
                    return {
                        type: u.SUCCESS,
                        identityToken: n,
                        phoneToken: t
                    }
                },
                S = function() {
                    return {
                        type: u.FAILED
                    }
                },
                I = function() {
                    return {
                        type: m
                    }
                },
                w = function() {
                    return {
                        type: d
                    }
                }
        },
        xm9o: (e, n, t) => {
            t.d(n, {
                A: () => O
            });
            var r, i, o, a, s, u = t("RlfA"),
                l = t("q1tI"),
                c = t("lXQd"),
                d = t("TRpf"),
                m = t("17x9"),
                f = t.n(m),
                p = t("vOnD"),
                A = t("CII1"),
                h = t("HMsx"),
                g = t("BAyj"),
                v = t("eLLh"),
                E = t("2fHp"),
                _ = t("ieZA"),
                y = t("wRyO"),
                b = t("P62M"),
                T = function(e) {
                    var n = e.fallbackScreenText,
                        t = (0, A.default)(4);
                    return l.createElement(E.default, null, l.createElement(N, null), l.createElement(w, null, l.createElement(v.default, {
                        gap: 20
                    }, t.map((function(e) {
                        return l.createElement(v.default.Item, {
                            colD: 2,
                            colM: 3,
                            key: e
                        }, l.createElement(R, null))
                    })))), l.createElement(S, null, l.createElement(I, null, n), l.createElement(_.default, {
                        size: "medium",
                        color: y.default.z500
                    })))
                },
                S = p.default.div(r || (r = (0, u.A)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n"]))),
                I = p.default.div(i || (i = (0, u.A)(["\n  font-size: 1.6rem;\n  font-weight: 400;\n  color: ", ";\n  margin-bottom: 2rem;\n"])), h.default.z600),
                w = p.default.div(o || (o = (0, u.A)(["\n  margin-top: 2rem;\n"]))),
                R = (0, p.default)(g.default)(a || (a = (0, u.A)(["\n  border-radius: 0.6rem;\n  height: 3rem;\n"]))),
                N = (0, p.default)(g.default)(s || (s = (0, u.A)(["\n  border-radius: 0.6rem;\n  height: 4rem;\n  max-width: calc(100vw-4rem);\n  margin-top: 5rem;\n"])));
            T.propTypes = {
                fallbackScreenText: f().string
            }, T.defaultProps = {
                fallbackScreenText: ""
            };
            const O = (0, d.Ng)((function(e) {
                return {
                    fallbackScreenText: (0, c.default)(e, "pages.partnershipInit.sections.SECTION_FALLBACK_SCREEN.fallbackScreenText", "Your safety is our topmost priority")
                }
            }))((0, l.memo)(T, b.Dl))
        },
        KFCZ: (e, n, t) => {
            t.d(n, {
                A: () => A
            });
            var r = t("k6Di"),
                i = t("79Ja"),
                o = t("zThL"),
                a = t("lXQd"),
                s = t("77l8"),
                u = t("yjvN"),
                l = {
                    name: {
                        scope: "user.name"
                    },
                    mobile: {
                        scope: "user.mobile"
                    }
                },
                c = function(e) {
                    return String("string" != typeof e ? e.toFixed(2) : parseFloat(e).toFixed(2))
                },
                d = function() {
                    function e() {
                        (0, r.A)(this, e), this.CLIENT_NAME = e.CLIENT_NAME
                    }
                    return (0, i.A)(e, [{
                        key: "isPlatformAvailable",
                        value: function() {
                            return window.microapps
                        }
                    }, {
                        key: "requestIdentity",
                        value: function(e) {
                            var n = {
                                skipPrompt: e
                            };
                            return window.microapps.getIdentity(n).then((function(e) {
                                return {
                                    grantToken: e,
                                    scopes: [u.ov].map((function(e) {
                                        return l[e].scope
                                    }))
                                }
                            }))
                        }
                    }, {
                        key: "requestCurrentLocation",
                        value: function() {
                            return window.microapps.getCurrentLocation().then((function(e) {
                                return e
                            }))
                        }
                    }, {
                        key: "getPaymentMethodType",
                        value: function() {
                            return e.PAYMENT_METHOD_TYPE
                        }
                    }, {
                        key: "getPaymentMethodId",
                        value: function() {
                            return e.PAYMENT_METHOD_ID
                        }
                    }, {
                        key: "requestPayment",
                        value: function(n) {
                            var t, r = (0, a.default)(n, "gpay_data", {}),
                                i = (0, a.default)(n, "tab", {}),
                                o = (0, a.default)(n, "voucher_meta_data", {}),
                                u = null !== (t = (0, a.default)(o, "voucher_code", "")) && void 0 !== t ? t : "",
                                l = {
                                    displayItems: [{
                                        type: "SUBTOTAL",
                                        price: c((0, a.default)(o, "subtotal", 0))
                                    }, {
                                        type: "DISCOUNT",
                                        price: c(-1 * (0, a.default)(o, "voucher_discount", 0))
                                    }],
                                    offerInfo: {
                                        offers: [{
                                            redemptionCode: u
                                        }]
                                    }
                                },
                                d = {
                                    apiVersion: (0, a.default)(r, "api_version", e.apiVersion),
                                    apiVersionMinor: (0, a.default)(r, "api_version_minor", e.apiVersionMinor),
                                    allowedPaymentMethods: [{
                                        type: "UPI",
                                        parameters: {
                                            payeeVpa: (0, a.default)(r, "payee_vpa", ""),
                                            payeeName: (0, a.default)(r, "payee_name", ""),
                                            mcc: (0, a.default)(r, "mcc", ""),
                                            transactionReferenceId: (0, a.default)(r, "transaction_reference_id", ""),
                                            transactionId: (0, a.default)(r, "transaction_id", "")
                                        },
                                        tokenizationSpecification: {
                                            type: "DIRECT"
                                        }
                                    }],
                                    transactionInfo: (0, s.A)({
                                        countryCode: e.COUNTRY_CODE,
                                        totalPriceStatus: e.TOTAL_PRICE_STATUS,
                                        totalPrice: c((0, a.default)(i, "order.total_cost", 0)),
                                        currencyCode: (0, a.default)(i, "currency_code", "")
                                    }, !!u && l)
                                };
                            return window.microapps.requestPayment(d).then((function(e) {
                                return {
                                    data: JSON.stringify(e)
                                }
                            }))
                        }
                    }, {
                        key: "requestUserDetails",
                        value: function(e) {
                            return window.microapps.getPhoneNumber({
                                skipPrompt: e
                            }).then((function(e) {
                                return {
                                    grantToken: e,
                                    scopes: [u.bp].map((function(e) {
                                        return l[e].scope
                                    }))
                                }
                            }))
                        }
                    }])
                }();
            (0, o.A)(d, "CLIENT_NAME", "GPAY"), (0, o.A)(d, "CLIENT_ID", "ordering_sdk_gpay_pwa_v1"), (0, o.A)(d, "PAYMENT_METHOD_TYPE", "gpay_checkout"), (0, o.A)(d, "PAYMENT_METHOD_ID", 0), (0, o.A)(d, "apiVersion", 2), (0, o.A)(d, "apiVersionMinor", 0), (0, o.A)(d, "COUNTRY_CODE", "IN"), (0, o.A)(d, "TOTAL_PRICE_STATUS", "FINAL");
            var m = t("VAjR"),
                f = t("WHL/"),
                p = {
                    ordering_sdk_gpay_pwa_v1: {
                        CLIENT_NAME: d.CLIENT_NAME,
                        CLIENT_ID: d.CLIENT_ID,
                        ZOMATO_ORDERING_API_KEY: d.ZOMATO_ORDERING_API_KEY,
                        ZOMATO_ORDERING_SECRET_KEY: d.ZOMATO_ORDERING_SECRET_KEY
                    }
                },
                A = function() {
                    function e() {
                        (0, r.A)(this, e)
                    }
                    return (0, i.A)(e, null, [{
                        key: "setClient",
                        value: function(n) {
                            var t = function(e) {
                                return p[e]
                            }(n);
                            e.client = t
                        }
                    }, {
                        key: "getClient",
                        value: function() {
                            var n;
                            if (e.client.CLIENT_NAME === d.CLIENT_NAME) n = new d;
                            return n
                        }
                    }, {
                        key: "isWhitelistedPartner",
                        value: function(n) {
                            return e.whitelistedPartners.includes(n)
                        }
                    }, {
                        key: "isRedirectAllowedPartner",
                        value: function(n) {
                            return e.redirectToOrderSummaryPartners.includes(n)
                        }
                    }, {
                        key: "setClientFromStore",
                        value: function(n) {
                            var t = n.getState(),
                                r = (0, a.default)(t, "pages.current.name", ""),
                                i = "";
                            switch (r) {
                                case m.fo:
                                    var o = (0, a.default)(t, "pages.current.resId", 0);
                                    i = (0, a.default)(t, "pages.restaurant.".concat(o, ".sections.CLIENT_DETAILS_SECTION.clientId"), "");
                                    break;
                                case m.uf:
                                    i = (0, a.default)(t, "pages.partnershipInit.sections.CLIENT_DETAILS_SECTION.clientId", "");
                                    break;
                                default:
                                    i = ""
                            }(0, f.Ay)(r) && (i = function(e) {
                                return (0, a.default)(e, "pages.current.clientId", "")
                            }(t)), e.setClient(i)
                        }
                    }])
                }();
            (0, o.A)(A, "client", {}), (0, o.A)(A, "whitelistedPartners", [d.CLIENT_NAME])
        },
        "8YR+": (e, n, t) => {
            t.d(n, {
                Ay: () => u,
                H2: () => a,
                VA: () => s
            });
            var r = "OPEN_DOES_NOT_DELIVER_MODAL",
                i = "CLOSE_DOES_NOT_DELIVER_MODAL",
                o = {
                    isVisible: !1
                },
                a = function() {
                    return {
                        type: r
                    }
                },
                s = function() {
                    return {
                        type: i
                    }
                };
            const u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
                switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
                    case r:
                        return {
                            isVisible: !0
                        };
                    case i:
                        return o;
                    default:
                        return e
                }
            }
        },
        XFDC: (e, n, t) => {
            t.d(n, {
                U: () => r,
                W: () => i
            });
            var r = "UPDATE_FETCH_CONFIG",
                i = function(e) {
                    return {
                        type: r,
                        fetchConfigs: e
                    }
                }
        },
        "1yBQ": (e, n, t) => {
            t.d(n, {
                Ay: () => d,
                I3: () => m,
                qI: () => l,
                qj: () => f,
                rK: () => s
            });
            var r = t("77l8"),
                i = t("lXQd"),
                o = t("HKiI"),
                a = "ADD_FPA_PAGE_VIEW",
                s = function(e) {
                    return {
                        type: a,
                        pageView: e
                    }
                },
                u = "DISMISS_FPA",
                l = function() {
                    return {
                        type: u
                    }
                },
                c = {
                    pageViews: [],
                    adVisible: !1
                };

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                switch (n.type) {
                    case a:
                        var t = n.pageView,
                            s = e.pageViews;
                        switch (s.length) {
                            case 0:
                                return (0, r.A)((0, r.A)({}, e), {}, {
                                    pageViews: [t]
                                });
                            case 1:
                                return (0, r.A)((0, r.A)({}, e), {}, {
                                    pageViews: [s[0], t]
                                });
                            default:
                                return (0, r.A)((0, r.A)({}, e), {}, {
                                    pageViews: [s[1], t]
                                })
                        }
                    case o.XJ:
                        var l = !!(0, i.default)(n, "pageData.sections.SECTION_FULL_PAGE_AD.ad", null);
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            adVisible: l
                        });
                    case u:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            adVisible: !1
                        });
                    default:
                        return e
                }
            }
            var m = function(e) {
                    return (0, i.default)(e, "fullPageAds.pageViews", [])
                },
                f = function(e) {
                    return (0, i.default)(e, "fullPageAds.adVisible", !1)
                }
        },
        bJA0: (e, n, t) => {
            t.d(n, {
                A: () => i,
                b: () => o
            });
            var r = "SET_ADS_DATA";

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n.type,
                    i = void 0 === t ? "" : t,
                    o = n.gAds;
                return i === r ? void 0 === o ? [] : o : e
            }
            var o = function(e) {
                return {
                    type: r,
                    gAds: e
                }
            }
        },
        "0j0V": (e, n, t) => {
            t.d(n, {
                A: () => s,
                w: () => u
            });
            var r = t("77l8"),
                i = t("HKiI"),
                o = {},
                a = "RESET_BLOCKER_DATA";

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n.type,
                    s = void 0 === t ? "" : t,
                    u = n.pageBlockerInfo,
                    l = void 0 === u ? {} : u;
                switch (s) {
                    case i.XJ:
                        return (0, r.A)((0, r.A)({}, e), l);
                    case a:
                        return {};
                    default:
                        return e
                }
            }
            var u = function() {
                return {
                    type: a
                }
            }
        },
        Mhsq: (e, n, t) => {
            t.d(n, {
                Ay: () => l,
                LJ: () => m,
                Ni: () => c,
                iT: () => d
            });
            var r = t("77l8"),
                i = t("HKiI"),
                o = t("n+uj"),
                a = {
                    showLocationBannerAutoPopup: !1
                },
                s = "LOCATION_POPUP_FLOW_ALLOWED",
                u = "DISABLE_LOCATION_BANNER_AUTO_POPUP";

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n.type,
                    l = void 0 === t ? "" : t,
                    c = n.pageConfig,
                    d = void 0 === c ? {} : c;
                switch (l) {
                    case i.XJ:
                        return (0, r.A)((0, r.A)({}, e), d);
                    case s:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isLocationPopupFlowAllowed: !1
                        });
                    case u:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            showLocationBannerAutoPopup: !1
                        });
                    case o.bb:
                        var m = n.bottomBarText,
                            f = void 0 === m ? "" : m,
                            p = e.showOpenAppBottomBar,
                            A = void 0 === p ? {} : p;
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            showOpenAppBottomBar: (0, r.A)((0, r.A)({}, A), {}, {
                                bottomBarText: f
                            })
                        });
                    default:
                        return e
                }
            }
            var c = function() {
                    return {
                        type: "UNSET_TRIGGER_LOCATION_FOR_GPAY"
                    }
                },
                d = function() {
                    return {
                        type: s
                    }
                },
                m = function() {
                    return {
                        type: u
                    }
                }
        },
        T5pW: (e, n, t) => {
            t.d(n, {
                Ay: () => l,
                be: () => s,
                lI: () => u
            });
            var r = t("77l8"),
                i = "CLOSE_PARTNER_MODAL",
                o = "OPEN_PARTNER_MODAL",
                a = {
                    isVisible: !1
                },
                s = function(e) {
                    return {
                        type: o,
                        registerModal: e
                    }
                },
                u = function() {
                    return {
                        type: i
                    }
                };
            const l = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                switch (n.type) {
                    case o:
                        return (0, r.A)({}, n.registerModal);
                    case i:
                        return a;
                    default:
                        return e
                }
            }
        },
        SEQN: (e, n, t) => {
            t.d(n, {
                Ay: () => c,
                Ml: () => l,
                W3: () => u
            });
            var r = t("77l8"),
                i = t("j399"),
                o = "CLOSE_PARTNER_LOGIN_OPTION_MODAL",
                a = "OPEN_PARTNER_LOGIN_OPTION_MODAL",
                s = {
                    isVisible: !1
                },
                u = function(e) {
                    return {
                        type: a,
                        optionModal: e
                    }
                },
                l = function(e, n, t, r, i) {
                    return {
                        type: o,
                        flowType: e,
                        calculateCartData: n,
                        successCallback: t,
                        errorCallback: r,
                        initPrompt: i
                    }
                };
            const c = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
                    n = (arguments.length > 1 ? arguments[1] : void 0) || {},
                    t = n.type,
                    u = void 0 === t ? "" : t,
                    l = n.optionModal,
                    c = void 0 === l ? {} : l,
                    d = n.flowType,
                    m = void 0 === d ? "" : d,
                    f = n.calculateCartData,
                    p = void 0 === f ? {} : f,
                    A = n.successCallback,
                    h = void 0 === A ? i.default : A,
                    g = n.errorCallback,
                    v = void 0 === g ? i.default : g,
                    E = n.initPrompt,
                    _ = void 0 !== E && E;
                switch (u) {
                    case a:
                        return (0, r.A)({}, c);
                    case o:
                        return (0, r.A)((0, r.A)({}, s), {}, {
                            flowType: m,
                            calculateCartData: p,
                            onClickHandler: h,
                            errorCallback: v,
                            initPrompt: _
                        });
                    default:
                        return e
                }
            }
        },
        Ujvf: (e, n, t) => {
            t.d(n, {
                Ay: () => C,
                BL: () => V,
                Fn: () => D,
                I6: () => k,
                K_: () => H,
                NN: () => G,
                Us: () => J,
                W2: () => P,
                bP: () => S,
                cQ: () => F,
                cl: () => z,
                du: () => L,
                eJ: () => K,
                gy: () => B,
                hS: () => U,
                kM: () => q,
                lW: () => M,
                ny: () => x,
                pq: () => j,
                up: () => W
            });
            var r = t("77l8"),
                i = t("a9dC"),
                o = t("X2+A"),
                a = t("n+uj"),
                s = t("oClw"),
                u = t("CjUt"),
                l = t("o59D"),
                c = t("HKiI"),
                d = t("cyO1"),
                m = t("yYoY"),
                f = t("WHL/"),
                p = t("EyxB"),
                A = "CHANGE_LOGIN_MODAL_STATE",
                h = "CHANGE_LOGIN_MODAL_STATE_TYPE",
                g = "CHANGE_LOGIN_TYPE",
                v = "CLOSE_TOAST",
                E = "OPEN_TOAST",
                _ = "OPEN_TOAST_V2",
                y = "CLOSE_TOAST_V2",
                b = "OPEN_NOTIFICATIONS",
                T = "CLOSE_NOTIFICATIONS",
                S = "INITIATE_LOGIN_MODAL_CLOSE",
                I = "DOTE_FAQ_ID",
                w = "UNMOUNT_PARTNERSHIP_PRECISE_LOCATION_MODAL",
                R = "MENU_MODAL_CONTINUE",
                N = "OPEN_APP_MODAL_V3_STATE",
                O = {
                    isPreciseLocationBannerOpen: !0,
                    searchPageMounted: !1,
                    isUniversalLocationWithBannerModalOpen: !1,
                    isUniversalLocationModalWithDishCardOpen: !1,
                    mountPartnershipPreciseLocationModal: !0,
                    universalLMDishCard: {},
                    promoBlockerOnPageLoadAllowed: !1
                };

            function C() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n.type,
                    f = void 0 === t ? "" : t,
                    p = n.modalState,
                    S = void 0 !== p && p,
                    C = n.loginType,
                    x = void 0 === C ? "login" : C,
                    M = n.toastDetails,
                    L = void 0 === M ? {} : M,
                    P = n.toastV2Details,
                    D = void 0 === P ? {} : P,
                    k = n.cartErrorDetails,
                    V = void 0 === k ? {} : k,
                    U = n.pageSpecific,
                    F = n.universalLMDishCard,
                    G = void 0 === F ? {} : F,
                    q = n.dishHeaderHeight,
                    H = void 0 === q ? 0 : q,
                    z = n.activeMenuIdx,
                    B = void 0 === z ? 0 : z,
                    j = n.showError,
                    K = void 0 === j || j,
                    W = n.isV3ModalOpen,
                    J = void 0 !== W && W,
                    Z = n.openAppModalV3Deeplink,
                    X = void 0 === Z ? "" : Z,
                    Q = n.openAppModalV3ContinueUrl,
                    $ = void 0 === Q ? "" : Q;
                switch (f) {
                    case c.XJ:
                        return Y(n) ? (0, r.A)((0, r.A)({}, e), {}, {
                            isPreciseLocationBannerOpen: !1
                        }) : e;
                    case A:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            loginModalOpen: S
                        });
                    case h:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            loginType: x,
                            loginModalOpen: S
                        });
                    case g:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            loginType: x
                        });
                    case v:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            toastDetails: {
                                show: !1
                            }
                        });
                    case y:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            toastV2Details: {
                                show: !1,
                                text: "",
                                isPriority: !1
                            }
                        });
                    case b:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            notificationBar: !0
                        });
                    case R:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            closeMenuModal: !0,
                            activeMenuIdx: B
                        });
                    case T:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            notificationBar: !1
                        });
                    case E:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            toastDetails: L
                        });
                    case _:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            toastV2Details: D
                        });
                    case I:
                        return (0, r.A)((0, r.A)({}, e), U);
                    case i.eS.FAILED:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            cartDetails: (0, r.A)((0, r.A)({}, V), {}, {
                                show: K
                            })
                        });
                    case i.eS.CLEAR:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            cartDetails: {
                                show: !1
                            }
                        });
                    case o.mv.OPEN:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isUniversalLocationModalOpen: !0
                        });
                    case a.d0.MOUNT:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            searchPageMounted: !0
                        });
                    case o.OZ.OPEN:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isUniversalLocationWithBannerModalOpen: !0
                        });
                    case u.ne.CLOSE:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isPreciseLocationBannerOpen: !1
                        });
                    case u.ne.OPEN:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isPreciseLocationBannerOpen: !0
                        });
                    case o.mv.CLOSE:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isUniversalLocationModalOpen: !1
                        });
                    case o.OZ.CLOSE:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isUniversalLocationWithBannerModalOpen: !1
                        });
                    case o.Le.OPEN:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isUniversalLocationModalWithDishCardOpen: !0,
                            universalLMDishCard: G
                        });
                    case o.Le.CLOSE:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isUniversalLocationModalWithDishCardOpen: !1
                        });
                    case o.C$:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            dishHeaderHeight: H
                        });
                    case s.hE.OPEN:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isUniversalSearchModalOpen: !0
                        });
                    case s.hE.CLOSE:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isUniversalSearchModalOpen: !1
                        });
                    case l.kJ.SHOW:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isScrollToTopFloatingButtonVisible: !0
                        });
                    case l.kJ.HIDE:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isScrollToTopFloatingButtonVisible: !1
                        });
                    case d.lY.OPEN:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isPromoBlockerOpen: !0
                        });
                    case d.lY.CLOSE:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isPromoBlockerOpen: !1
                        });
                    case d.rc:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            promoBlockerOnPageLoadAllowed: !0
                        });
                    case d.j$:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            promoBlockerOnPageLoadAllowed: !1
                        });
                    case m.w3.OPEN:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isContinueInAppOpen: !0
                        });
                    case m.w3.CLOSE:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isContinueInAppOpen: !1
                        });
                    case w:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            mountPartnershipPreciseLocationModal: !1
                        });
                    case N:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            isOpenAppModalV3Open: J,
                            openAppModalV3Deeplink: X,
                            openAppModalV3ContinueUrl: $
                        });
                    default:
                        return e
                }
            }
            var x = function() {
                    return {
                        type: A,
                        modalState: !0
                    }
                },
                M = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).success;
                    return {
                        type: S,
                        success: void 0 !== e && e
                    }
                },
                L = function() {
                    return {
                        type: A,
                        modalState: !1
                    }
                },
                P = function() {
                    return {
                        type: h,
                        modalState: !0,
                        loginType: "login",
                        enableScrollOnClose: !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                    }
                },
                D = function() {
                    return {
                        type: h,
                        modalState: !0,
                        loginType: "signup",
                        enableScrollOnClose: !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                    }
                },
                k = function(e) {
                    return {
                        type: g,
                        loginType: e
                    }
                },
                V = function() {
                    return {
                        type: b
                    }
                },
                U = function(e) {
                    return {
                        type: R,
                        activeMenuIdx: e
                    }
                },
                F = function() {
                    return {
                        type: v
                    }
                },
                G = function(e) {
                    return {
                        type: E,
                        toastDetails: {
                            text: e,
                            show: !0,
                            type: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "success",
                            align: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
                        }
                    }
                },
                q = function(e) {
                    return {
                        type: E,
                        toastDetails: {
                            text: e,
                            show: !0,
                            type: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "successSolid",
                            align: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
                        }
                    }
                },
                H = function() {
                    return {
                        type: E,
                        toastDetails: {
                            text: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Oops! Something went wrong. Please contact support.",
                            show: !0,
                            type: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "error",
                            align: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "bottom"
                        }
                    }
                },
                z = function() {
                    return {
                        type: _,
                        toastV2Details: {
                            show: !0,
                            text: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            isPriority: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                        }
                    }
                },
                B = function() {
                    return {
                        type: y
                    }
                },
                j = function(e) {
                    return {
                        type: E,
                        toastDetails: {
                            text: e,
                            show: !0,
                            type: "darkDefault"
                        }
                    }
                },
                K = function() {
                    return {
                        type: w
                    }
                },
                Y = function(e) {
                    if (e.type !== c.XJ) return !1;
                    var n = e.pageInfo.name;
                    return (0, f.Ay)(n)
                },
                W = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return (0, p.rZ)() ? {
                        type: N,
                        isV3ModalOpen: !1
                    } : {
                        type: N,
                        isV3ModalOpen: !0,
                        openAppModalV3Deeplink: e,
                        openAppModalV3ContinueUrl: n
                    }
                },
                J = function() {
                    return (0, p.P4)(), {
                        type: N,
                        isV3ModalOpen: !1
                    }
                }
        },
        nQUI: (e, n, t) => {
            t.d(n, {
                Ay: () => p,
                E2: () => d,
                Km: () => E,
                Nc: () => A,
                lt: () => g,
                ns: () => h,
                y4: () => v
            });
            var r = t("77l8"),
                i = t("lXQd"),
                o = t("VAjR"),
                a = t("HKiI"),
                s = t("4+bF"),
                u = t("yjvN"),
                l = "CLEAR_CURRENT_ADDRESS",
                c = "SET_USER_CURRENT_ADDRESS",
                d = "SET_LOGGED_IN_USER",
                m = "UPDATE_USERNAME",
                f = "LOGOUT_USER";

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n.type,
                    p = void 0 === t ? "" : t,
                    A = n.user,
                    h = void 0 === A ? {} : A,
                    g = n.address,
                    v = void 0 === g ? {} : g,
                    E = n.savedAddress,
                    _ = void 0 === E ? {} : E,
                    y = n.pageData,
                    b = void 0 === y ? {} : y,
                    T = n.pageInfo,
                    S = void 0 === T ? {} : T;
                switch (p) {
                    case u.Ai:
                        var I = h.thirdPartyUserId,
                            w = h.guestId,
                            R = h.email,
                            N = h.name,
                            O = {
                                basic_info: {
                                    id: I,
                                    mobile: h.phone,
                                    guestId: w,
                                    email: R,
                                    name: N
                                }
                            };
                        return (0, r.A)({}, O);
                    case d:
                    case a.XJ:
                        var C = h || {},
                            x = (0, i.default)(e, "currentAddress", {}),
                            M = (0, i.default)(S, "name", ""),
                            L = (0, i.default)(S, "subType", "order"),
                            P = (0, i.default)(b, "menuList", {}),
                            D = (0, i.default)(b, "".concat(L, ".menuList"), P),
                            k = (0, i.default)(D, "address", {}),
                            V = (0, r.A)({}, e);
                        return M === o.Wt && (V = (0, r.A)((0, r.A)({}, V), {}, {
                            currentAddress: (0, r.A)((0, r.A)({}, x), k)
                        })), (0, r.A)((0, r.A)({}, V), C);
                    case c:
                        return v && Object.keys(v).length ? (0, r.A)((0, r.A)({}, e), {}, {
                            currentAddress: v
                        }) : e;
                    case l:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            currentAddress: {}
                        });
                    case f:
                        return {};
                    case s.sx.SUCCESS:
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            savedAddress: _
                        });
                    case m:
                        var U = n.data,
                            F = void 0 === U ? {} : U,
                            G = (0, i.default)(e, "basic_info", {});
                        return (0, r.A)((0, r.A)({}, e), {}, {
                            basic_info: (0, r.A)((0, r.A)({}, G), {}, {
                                name: F.name
                            })
                        });
                    default:
                        return e
                }
            }
            var A = function() {
                    return {
                        type: l
                    }
                },
                h = function(e) {
                    return {
                        type: c,
                        address: e
                    }
                },
                g = function(e) {
                    return {
                        type: d,
                        user: e
                    }
                },
                v = function() {
                    return {
                        type: f
                    }
                },
                E = function(e) {
                    return {
                        type: m,
                        data: e
                    }
                }
        },
        alT1: (e, n, t) => {
            t.d(n, {
                M: () => o
            });
            var r = t("+1bB"),
                i = "undefined" != typeof window && window.__PRELOADED_STATE__;
            "undefined" != typeof window && delete window.__PRELOADED_STATE__;
            var o = "undefined" == typeof window ? {
                getState: function() {
                    return {}
                }
            } : (0, r.Ay)(i)
        },
        "+1bB": (e, n, t) => {
            t.d(n, {
                N3: () => Oe,
                Ay: () => Ce
            });
            var r = t("Vadf"),
                i = t("BkpH"),
                o = t("77l8"),
                a = t("q1tI"),
                s = t("17x9"),
                u = t.n(s),
                l = t("AkOy"),
                c = t("ANjH"),
                d = t("TRpf"),
                m = t("mM01"),
                f = t("j399"),
                p = t("HKiI"),
                A = {
                    name: "",
                    pageUrl: ""
                };

            function h() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    t = n.type,
                    r = void 0 === t ? "" : t,
                    i = n.pageInfo,
                    a = void 0 === i ? {} : i;
                return r === p.XJ ? (0, o.A)({}, a) : e
            }
            var g = t("Kq5O"),
                v = t.n(g),
                E = t("IihT"),
                _ = t("lXQd"),
                y = t("AdJq"),
                b = t("sLkX"),
                T = v().mark(w);

            function S(e) {
                var n = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        page_url: e,
                        location: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        isMobile: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                    }
                };
                return (0, b.Ay)(y.WuM, n).then((function(e) {
                    return e.json()
                }))
            }
            var I = function(e, n) {
                var t = e;
                return n && (t += "?location=".concat(n)), t
            };

            function w(e) {
                var n, t, r, i, o, a, s, u;
                return v().wrap((function(l) {
                    for (;;) switch (l.prev = l.next) {
                        case 0:
                            return n = {}, l.next = 3, (0, E.Lt)((function(e) {
                                return (0, _.default)(e, "pageUrlMappings")
                            }));
                        case 3:
                            return t = l.sent, l.next = 6, e.pageUrl;
                        case 6:
                            return r = l.sent, l.next = 9, e.location;
                        case 9:
                            return i = l.sent, l.next = 12, e.isMobile;
                        case 12:
                            return o = l.sent, a = e.forceLoad, s = void 0 !== a && a, l.next = 16, I(r, i);
                        case 16:
                            if (u = l.sent, t[u] && !s) {
                                l.next = 31;
                                break
                            }
                            return l.prev = 18, l.next = 21, (0, E.T1)(S, e.pageUrl, i, o);
                        case 21:
                            n = l.sent, l.next = 29;
                            break;
                        case 24:
                            return l.prev = 24, l.t0 = l.catch(18), l.next = 28, (0, E.yJ)((0, p.Fq)(l.t0));
                        case 28:
                            return l.abrupt("return");
                        case 29:
                            l.next = 32;
                            break;
                        case 31:
                            n.page_info = t[u];
                        case 32:
                            return l.next = 34, (0, E.yJ)((0, p.hJ)());
                        case 34:
                            return l.next = 36, (0, E.yJ)((0, p.Tm)(n));
                        case 36:
                        case "end":
                            return l.stop()
                    }
                }), T, null, [
                    [18, 24]
                ])
            }
            var R = t("akXP"),
                N = t("NN/6"),
                O = t("aMMj"),
                C = t("4+bF"),
                x = t("/0+J"),
                M = v().mark(P),
                L = function() {
                    var e = (0, x.A)(v().mark((function e(n) {
                        var t;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = [], e.next = 3, (0, b.Ay)(y.QXm, {
                                        params: {
                                            res_id: n
                                        }
                                    });
                                case 3:
                                    return t = e.sent, e.next = 6, t.json();
                                case 6:
                                    return t = e.sent, e.abrupt("return", t);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }();

            function P(e) {
                var n, t, r, i, o, a;
                return v().wrap((function(s) {
                    for (;;) switch (s.prev = s.next) {
                        case 0:
                            return n = {}, t = e.resId, r = void 0 === t ? 0 : t, i = e.setShowShimmer, o = void 0 === i ? f.default : i, s.prev = 2, s.next = 5, (0, E.T1)(L, r);
                        case 5:
                            n = s.sent, s.next = 19;
                            break;
                        case 8:
                            if (s.prev = 8, s.t0 = s.catch(2), a = s.t0, !s.t0.response) {
                                s.next = 15;
                                break
                            }
                            return s.next = 14, a.response.json();
                        case 14:
                            a = s.sent;
                        case 15:
                            return o(!1), s.next = 18, (0, E.yJ)((0, C.D2)(a));
                        case 18:
                            return s.abrupt("return");
                        case 19:
                            return o(!1), s.next = 22, (0, E.yJ)((0, C.v7)(n));
                        case 22:
                        case "end":
                            return s.stop()
                    }
                }), M, null, [
                    [2, 8]
                ])
            }
            var D = t("Ujvf"),
                k = t("cY/j"),
                V = t("Ht22");

            function U(e) {
                var n = e.success;
                return v().mark((function e() {
                    var t, r, i;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, E.Lt)(k.LY);
                            case 2:
                                if (e.sent === k.QW.LOGIN_IN_PROGRESS) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                if (t = "", n) {
                                    e.next = 10;
                                    break
                                }
                                t = k.QW.LOGIN_FAILED, e.next = 17;
                                break;
                            case 10:
                                return t = k.QW.LOGIN_SUCCESS, e.next = 13, (0, E.Lt)(V.A);
                            case 13:
                                return r = e.sent, i = (0, _.default)(r, "CART_LOGIN_SUCCESS_MESSAGE", "You are successfully logged in!"), e.next = 17, (0, E.yJ)((0, D.NN)(i));
                            case 17:
                                return e.next = 19, (0, E.yJ)((0, k.D$)({
                                    currentState: t
                                }));
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))()
            }
            const F = function(e) {
                var n = e.success;
                return v().mark((function e() {
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, E.T1)(U, {
                                    success: n
                                });
                            case 2:
                                return e.next = 4, (0, E.yJ)((0, D.du)());
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))()
            };
            var G = v().mark(q);

            function q() {
                return v().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, (0, E.p8)(D.bP, F);
                        case 2:
                            return e.next = 4, (0, E.p8)(p.Wu.INITIATE, w);
                        case 4:
                            return e.next = 6, (0, E.p8)(N.vj.INITIATE, R.Ay);
                        case 6:
                            return e.next = 8, (0, E.p8)(O.Tf, O.ej);
                        case 8:
                            return e.next = 10, (0, E.p8)(O.bs, O.YR);
                        case 10:
                            return e.next = 12, (0, E.p8)(C.sx.INITIATE, P);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), G)
            }
            var H = t("zThL"),
                z = t("VAjR"),
                B = {};
            t("RE6O");
            const j = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    t = n.type.match(/(_(SUCCESS|INITIATE|FAILED|CLEAR))$/g),
                    i = "",
                    a = "";
                if (t && t.length && n.type.split(t[0])[0]) {
                    var s = n.type.split(t[0]);
                    a = (0, r.A)(s, 1)[0], i = t[0].slice(1)
                }
                switch (i) {
                    case "INITIATE":
                        return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, a, {
                            isIdle: !1,
                            isFetching: !0,
                            fetchingUrl: n.pageUrl
                        }));
                    case "SUCCESS":
                        return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, a, {
                            isIdle: !1,
                            isFetching: !1,
                            success: !0
                        }));
                    case "FAILED":
                        return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, a, {
                            isIdle: !1,
                            isFetching: !1,
                            success: !1
                        }));
                    case "CLEAR":
                        return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, a, {
                            isIdle: !0,
                            isFetching: !1
                        }));
                    default:
                        return e
                }
            };
            var K = t("37Uq"),
                Y = t("ScDn"),
                W = t("AQfp"),
                J = t("en2A");
            var Z = t("sPea");
            var X = t("NEP9"),
                Q = t("nWop");
            var $ = t("+Gh4");
            const ee = (0, c.HY)({
                REVIEWS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.type,
                        r = void 0 === t ? "" : t,
                        i = n.entities,
                        a = void 0 === i ? {} : i,
                        s = (0, _.default)(a, J.SC, {});
                    switch (r) {
                        case Y.cW:
                            var u = n.reviewId,
                                l = void 0 === u ? 0 : u,
                                c = (0, _.default)(e, "".concat(l, ".isLikedByUser"), !1),
                                d = !c,
                                m = (0, _.default)(e, "".concat(l, ".likeCount"), 0),
                                f = c ? m - 1 : m + 1;
                            return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, l, (0, o.A)((0, o.A)({}, e[l]), {}, {
                                isLikedByUser: d,
                                likeCount: f
                            })));
                        case Y.Lm:
                            var p = n.reviewId,
                                A = void 0 === p ? 0 : p,
                                h = n.commentId,
                                g = void 0 === h ? 0 : h,
                                v = (0, _.default)(e, "".concat(A, ".commentCount"), 0),
                                E = (0, _.default)(e, "".concat(A, ".comments.entities.0.entity_ids"), []).slice();
                            return E.unshift(g), (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, A, (0, o.A)((0, o.A)({}, e[A]), {}, {
                                commentCount: v + 1,
                                comments: {
                                    entities: [{
                                        entity_type: J.Ob,
                                        entity_ids: E
                                    }]
                                }
                            })));
                        case Y.f9:
                            var y = n.reviewId,
                                b = void 0 === y ? 0 : y,
                                T = n.commentId,
                                S = void 0 === T ? 0 : T,
                                I = (0, _.default)(e, "".concat(b, ".commentCount"), 0),
                                w = (0, _.default)(e, "".concat(b, ".comments.entities.0.entity_ids"), []).filter((function(e) {
                                    return e !== S
                                }));
                            return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, b, (0, o.A)((0, o.A)({}, e[b]), {}, {
                                commentCount: I - 1,
                                comments: {
                                    entities: [{
                                        entity_type: J.Ob,
                                        entity_ids: w
                                    }]
                                }
                            })));
                        case Y.UA:
                            var R = n.reviewId,
                                N = void 0 === R ? 0 : R,
                                O = n.commentIds,
                                C = void 0 === O ? [] : O,
                                x = n.more,
                                M = void 0 !== x && x,
                                L = [].concat((0, K.A)((0, _.default)(e, "".concat(N, ".comments.entities.0.entity_ids"), [])), (0, K.A)(C));
                            return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, N, (0, o.A)((0, o.A)({}, e[N]), {}, {
                                moreComments: M,
                                comments: {
                                    entities: [{
                                        entity_type: J.Ob,
                                        entity_ids: L
                                    }]
                                }
                            })));
                        case Y.Oj:
                            var P = n.reviewId,
                                D = void 0 === P ? 0 : P,
                                k = n.commentIds,
                                V = void 0 === k ? [] : k,
                                U = n.more,
                                F = void 0 !== U && U,
                                G = [].concat((0, K.A)((0, _.default)(e, "".concat(D, ".managementComments.entities.0.entity_ids"), [])), (0, K.A)(V));
                            return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, D, (0, o.A)((0, o.A)({}, e[D]), {}, {
                                moreManagementComments: F,
                                managementComments: {
                                    entities: [{
                                        entity_type: J.DI,
                                        entity_ids: G
                                    }]
                                }
                            })));
                        case Y.K7:
                            var q = n.reviewId,
                                z = void 0 === q ? 0 : q,
                                B = !(0, _.default)(e, "".concat(z, ".isFollowed"));
                            return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, z, (0, o.A)((0, o.A)({}, e[z]), {}, {
                                isFollowed: B
                            })));
                        case W.k:
                            var j = n.restaurantId,
                                Z = void 0 === j ? 0 : j,
                                X = n.updatedBookmarkState,
                                Q = void 0 !== X && X,
                                $ = n.bookmarkPayload,
                                ee = (void 0 === $ ? {} : $).reviewId,
                                ne = void 0 === ee ? 0 : ee;
                            if (!ne) return e;
                            var te = (0, _.default)(e, ne, {}),
                                re = (0, _.default)(te, "resInfo", {});
                            return re.id !== Z ? e : (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, ne, (0, o.A)((0, o.A)({}, te), {}, {
                                resInfo: (0, o.A)((0, o.A)({}, re), {}, {
                                    isBookmarked: Q
                                })
                            })));
                        default:
                            if (Object.keys(s).length > 0) {
                                var ie = e;
                                return Object.keys(s).forEach((function(n) {
                                    ie = (0, o.A)((0, o.A)({}, ie), {}, (0, H.A)({}, n, (0, o.A)((0, o.A)({}, e[n]), s[n])))
                                })), ie
                            }
                            return e
                    }
                },
                IMAGES: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.type,
                        r = void 0 === t ? "" : t,
                        i = n.entities,
                        a = void 0 === i ? {} : i,
                        s = (0, _.default)(a, J.vV, {});
                    switch (r) {
                        case Y.TX:
                            var u = n.photoId,
                                l = void 0 === u ? 0 : u,
                                c = n.commentId,
                                d = void 0 === c ? 0 : c,
                                m = (0, _.default)(e, "".concat(l, ".commentCount"), 0),
                                f = (0, _.default)(e, "".concat(l, ".comments.entities.0.entity_ids"), []).slice();
                            return f.unshift(d), (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, l, (0, o.A)((0, o.A)({}, e[l]), {}, {
                                commentCount: m + 1,
                                comments: {
                                    entities: [{
                                        entity_type: J.Or,
                                        entity_ids: f
                                    }]
                                }
                            })));
                        case Y.BL:
                            var p = n.photoId,
                                A = void 0 === p ? 0 : p,
                                h = n.commentId,
                                g = void 0 === h ? 0 : h,
                                v = (0, _.default)(e, "".concat(A, ".commentCount"), 0),
                                E = (0, _.default)(e, "".concat(A, ".comments.entities.0.entity_ids"), []).filter((function(e) {
                                    return e !== g
                                }));
                            return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, A, (0, o.A)((0, o.A)({}, e[A]), {}, {
                                commentCount: v - 1,
                                comments: {
                                    entities: [{
                                        entity_type: J.Or,
                                        entity_ids: E
                                    }]
                                }
                            })));
                        case Y.P4:
                            var y = n.photoId,
                                b = void 0 === y ? 0 : y,
                                T = n.hasLiked,
                                S = void 0 !== T && T,
                                I = (0, _.default)(e, "".concat(b, ".likeCount"), 0);
                            return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, b, (0, o.A)((0, o.A)({}, e[b]), {}, {
                                likeCount: S ? I + 1 : I - 1,
                                isLiked: +S
                            })));
                        default:
                            return Object.keys(s).length > 0 ? (0, o.A)((0, o.A)({}, e), s) : e
                    }
                },
                VIDEOS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, J.n2, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                REVIEW_COMMENTS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.type,
                        r = void 0 === t ? "" : t,
                        a = n.entities,
                        s = void 0 === a ? {} : a,
                        u = (0, _.default)(s, J.Ob, {});
                    if (r === Y.f9) {
                        var l = n.commentId,
                            c = (e[l], (0, i.A)(e, [l].map(Z.A)));
                        return (0, o.A)({}, c)
                    }
                    return Object.keys(u).length > 0 ? (0, o.A)((0, o.A)({}, e), u) : e
                },
                REVIEW_REPLIES: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, J.DI, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                PHOTO_COMMENTS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.type,
                        r = void 0 === t ? "" : t,
                        a = n.entities,
                        s = void 0 === a ? {} : a,
                        u = (0, _.default)(s, J.Or, {});
                    if (r === Y.BL) {
                        var l = n.commentId,
                            c = (e[l], (0, i.A)(e, [l].map(Z.A)));
                        return (0, o.A)({}, c)
                    }
                    return Object.keys(u).length > 0 ? (0, o.A)((0, o.A)({}, e), u) : e
                },
                POSITIVE_TAGS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, J.Ro, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                NEGATIVE_TAGS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, J.v1, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                RATING: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, J.zv, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                EVENTS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, J.Ed, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                AD_BANNERS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, J.QB, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                RESTAURANTS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, J.rA, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                COLLECTIONS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, J.I3, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                ORDER: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.type,
                        r = void 0 === t ? "" : t,
                        i = n.entities,
                        a = void 0 === i ? {} : i,
                        s = (0, _.default)(a, X.ec, {});
                    if (r === Q.qJ) {
                        var u = n.orderId,
                            l = void 0 === u ? 0 : u,
                            c = (0, _.default)(e, "".concat(l, ".isFavourite"), 0) ? 0 : 1;
                        return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, l, (0, o.A)((0, o.A)({}, e[l]), {}, {
                            isFavourite: c
                        })))
                    }
                    return Object.keys(s).length > 0 ? (0, o.A)((0, o.A)({}, e), s) : e
                },
                ADDRESSES: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, X.uM, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                USER: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.type,
                        r = void 0 === t ? "" : t,
                        i = n.entities,
                        a = void 0 === i ? {} : i,
                        s = (0, _.default)(a, X.ry, {});
                    if (r === Q.d4) {
                        var u = n.userId,
                            l = void 0 === u ? 0 : u,
                            c = (0, _.default)(e, "".concat(l, ".isFollowed"), !1);
                        return (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, l, (0, o.A)((0, o.A)({}, e[l]), {}, {
                            isFollowed: !c
                        })))
                    }
                    return Object.keys(s).length > 0 ? (0, o.A)((0, o.A)({}, e), s) : e
                },
                PENDING_REVIEW: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, X.Ck, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                CDNG_ORDER: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, X.xp, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                DOTE_ORDER: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, X.jz, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                },
                ZLIVE_EVENTS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (n.type, n.entities),
                        r = void 0 === t ? {} : t,
                        i = (0, _.default)(r, $.So, {});
                    return Object.keys(i).length > 0 ? (0, o.A)((0, o.A)({}, e), i) : e
                }
            });
            var ne = t("nQUI"),
                te = t("5RJS"),
                re = t("TaAX"),
                ie = t("sC5X"),
                oe = t("yL8x");
            var ae = t("bJA0"),
                se = {
                    languages: [],
                    selectedLanguage: {}
                };
            var ue = {};
            var le = {};
            var ce = t("Mhsq"),
                de = t("0j0V"),
                me = t("1yBQ"),
                fe = t("XFDC");
            const pe = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (arguments.length > 1 ? arguments[1] : void 0) || {},
                    t = n.type,
                    r = void 0 === t ? "" : t,
                    i = n.fetchConfigs,
                    a = void 0 === i ? {} : i;
                switch (r) {
                    case p.XJ:
                    case fe.U:
                        return (0, o.A)((0, o.A)({}, e), {}, {
                            headers: (0, o.A)((0, o.A)({}, (0, _.default)(e, "headers", {})), (0, _.default)(a, "headers", {}))
                        });
                    default:
                        return e
                }
            };
            var Ae = [];
            var he = t("T5pW"),
                ge = t("SEQN"),
                ve = t("8YR+");
            var Ee = t("6x74"),
                _e = t("kHo1"),
                ye = ["root"],
                be = function() {
                    return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                },
                Te = {
                    pageUrlMappings: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
                            n = arguments.length > 1 ? arguments[1] : void 0,
                            t = n.type,
                            r = void 0 === t ? "" : t,
                            i = n.pageInfo,
                            a = void 0 === i ? {} : i,
                            s = n.pageConfig,
                            u = void 0 === s ? {} : s;
                        return r === p.XJ && ((0, _.default)(a, "subType", "") !== z.ND || (0, _.default)(u, "orderPagePerformance.storeInReducer", !0)) ? (0, o.A)((0, o.A)({}, e), {}, (0, H.A)({}, function(e) {
                            var n = e.pageUrl;
                            return e.location && (n += "?location=".concat(e.location)), n
                        }(n.pageInfo), a)) : e
                    },
                    apiState: j,
                    entities: ee,
                    user: ne.Ay,
                    uiLogic: D.Ay,
                    location: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.type,
                            r = void 0 === t ? "" : t,
                            i = n.location,
                            a = void 0 === i ? {} : i,
                            s = n.popularSearches,
                            u = void 0 === s ? [] : s,
                            l = n.locationsData,
                            c = void 0 === l ? {} : l,
                            d = (c.subzone, c.city),
                            m = void 0 === d ? {} : d,
                            f = n.recentlySelectedLocations,
                            A = void 0 === f ? [] : f;
                        switch (r) {
                            case p.XJ:
                            case te.A8.SUCCESS:
                                return (0, o.A)((0, o.A)({}, e), {}, {
                                    currentLocation: (0, o.A)((0, o.A)({}, e.currentLocation), a)
                                });
                            case re.rn.SUCCESS:
                                return (0, o.A)((0, o.A)({}, e), {}, {
                                    popularLocations: [],
                                    cityData: m
                                });
                            case ie.Op.SUCCESS:
                                return (0, o.A)((0, o.A)({}, e), {}, {
                                    popularSearches: u
                                });
                            case oe.YR.SUCCESS_GET:
                            case oe.YR.SUCCESS_SAVE:
                                return (0, o.A)((0, o.A)({}, e), {}, {
                                    recentlySelectedLocations: A
                                });
                            default:
                                return e
                        }
                    },
                    gAds: ae.A,
                    footer: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.type,
                            r = void 0 === t ? "" : t,
                            i = n.footerInfo,
                            a = void 0 === i ? {} : i;
                        switch (r) {
                            case p.XJ:
                            case "SET_FOOTER_DATA":
                                return (0, o.A)((0, o.A)({}, e), a);
                            default:
                                return e
                        }
                    },
                    langKeys: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.type,
                            r = void 0 === t ? "" : t,
                            i = n.langKeys,
                            a = void 0 === i ? {} : i;
                        switch (r) {
                            case p.XJ:
                            case "SET_STATIC_LANG_KEYS":
                                return (0, o.A)((0, o.A)({}, e), a);
                            default:
                                return e
                        }
                    },
                    deviceSpecificInfo: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.type,
                            r = void 0 === t ? "" : t,
                            i = n.deviceSpecificInfo,
                            a = void 0 === i ? {} : i;
                        switch (r) {
                            case p.XJ:
                            case "SET_DEVICE_SPECIFIC_INFO":
                                return (0, o.A)((0, o.A)({}, e), a);
                            default:
                                return e
                        }
                    },
                    pageConfig: ce.Ay,
                    pageBlockerInfo: de.A,
                    transientData: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0,
                            t = n.type,
                            r = void 0 === t ? "" : t,
                            i = n.pageInfo,
                            o = void 0 === i ? {} : i,
                            a = n.pageData,
                            s = void 0 === a ? {} : a,
                            u = n.pageConfig,
                            l = void 0 === u ? {} : u,
                            c = n.setTransientData,
                            d = void 0 === c || c;
                        return r === p.XJ ? d ? {
                            pageInfo: o,
                            pageData: s,
                            pageConfig: l
                        } : {} : e
                    },
                    fullPageAds: me.Ay,
                    networkState: Ee.Ay,
                    fetchConfigs: pe,
                    hrefLangInfo: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.type,
                            r = void 0 === t ? "" : t,
                            i = n.hrefLangInfo,
                            o = void 0 === i ? [] : i;
                        switch (r) {
                            case p.XJ:
                            case "SET_HREF_LANG_INFO":
                                return [].concat((0, K.A)(e), (0, K.A)(o));
                            default:
                                return e
                        }
                    },
                    partnershipLoginModal: he.Ay,
                    partnershipLoginOptionModal: ge.Ay,
                    doesNotDeliverModal: ve.Ay
                },
                Se = {
                    blogData: be,
                    careers: be,
                    allJobs: be,
                    department: be,
                    aboutus: be,
                    sneakpeek: be,
                    networkState: be,
                    partnershipLoginModal: be,
                    partnershipLoginOptionModal: be,
                    doesNotDeliverModal: be,
                    doteCart: be,
                    backButton: be
                },
                Ie = {
                    restaurant: be,
                    user: be,
                    awards: be,
                    sauceBlog: be,
                    Kitchen: be,
                    celebrations: be,
                    cdng: be,
                    postOrder: be,
                    zomaland: be,
                    orderOnline: be,
                    deliverycities: be,
                    zomatoForWork: be,
                    pageNotFound: be,
                    collections: be,
                    collectionDetails: be,
                    appDownload: be,
                    contests: be,
                    singleJob: be,
                    goldSubscriptionAgreement: be,
                    zoomBackgrounds: be,
                    feedingPhilippines: be,
                    feedingIndonesia: be,
                    country: be,
                    tablePostBooking: be,
                    search: be,
                    city: be,
                    gold: be,
                    talentHub: be,
                    dining: be,
                    scanner: be,
                    cupcake: be,
                    partnershipInit: be,
                    dotePdp: be,
                    doteHome: be,
                    paymentStatus: be,
                    contact: be,
                    gift: be,
                    goodbye: be,
                    planPage: be,
                    familyPlanPage: be,
                    orderCartProgress: be,
                    financialInformation: be,
                    userSettings: be,
                    investorRelations: be,
                    investorRelationsV2: be,
                    goldMarketingPage: be,
                    agentSearch: be,
                    agentRestaurant: be,
                    diningPay: be,
                    bloggers: be,
                    neighbourhoods: be,
                    resAdminToolkit: be,
                    individualPhotoPage: be,
                    openGiftCard: be,
                    proPage: be,
                    zopayStoryUploader: be,
                    orderShare: be,
                    giftCard: be,
                    zLiveHomePageReducer: be,
                    zLiveCartReducer: be,
                    zLiveModalReducer: be,
                    zLiveV2PageReducer: be,
                    zLiveV2CartReducer: be,
                    zLiveV2ModalReducer: be,
                    zLiveV2ZpaykitReducer: be,
                    zLiveV2ErrorReducer: be,
                    zLiveV2CustomerDetailsReducer: be,
                    irctcPartnership: be,
                    campaigns: be
                },
                we = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.asyncPageReducers,
                        t = void 0 === n ? {} : n,
                        r = e.asyncRootReducers,
                        i = void 0 === r ? {} : r;
                    return (0, c.HY)((0, o.A)((0, o.A)((0, o.A)((0, o.A)({}, Te), Se), i), {}, {
                        pages: (0, c.HY)((0, o.A)((0, o.A)({
                            current: h
                        }, Ie), t))
                    }))
                },
                Re = function(e) {
                    var n = (0, o.A)({}, e);
                    return n.asyncRootReducers = {}, n.asyncPageReducers = {
                        current: h
                    }, n.injectReducer = function(e, t) {
                        !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? n.asyncRootReducers[e] = t : n.asyncPageReducers[e] = t, n.replaceReducer(we(n));
                        var r = n.getState().transientData,
                            i = void 0 === r ? {} : r,
                            o = i.pageInfo,
                            a = void 0 === o ? {} : o,
                            s = i.pageData,
                            u = void 0 === s ? {} : s,
                            c = i.pageConfig,
                            d = void 0 === c ? {} : c;
                        (0, l.default)(a) || (0, l.default)(u) || n.dispatch((0, p.Tm)({
                            page_info: a,
                            page_data: u,
                            pageConfig: d,
                            setTransientData: !1
                        }))
                    }, n
                },
                Ne = function(e) {
                    var n = (0, m.Ay)(),
                        t = (0, c.Tw)(n)(c.y$),
                        r = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__,
                        i = function(e, n, t) {
                            var r = (0, o.A)({}, e),
                                i = {};
                            return r.injectSaga = function(e, t) {
                                var r = {};
                                return i[e] || (r = n(t), i[e] = r), r
                            }, r.injectSaga("root", t), r
                        }("production" === _e.Kb && r ? t(we(), e, window.__REDUX_DEVTOOLS_EXTENSION__()) : t(we(), e), n.run, q);
                    return Re(i)
                },
                Oe = function(e) {
                    var n = e.reducer,
                        t = e.children,
                        o = e.sagas,
                        s = function(e, n) {
                            var t = e.root;
                            ! function(e, n) {
                                var t = e.injectReducer,
                                    r = e.asyncPageReducers,
                                    o = e.asyncRootReducers,
                                    a = (n.root, (0, i.A)(n, ye)),
                                    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    u = Object.keys(a)[0];
                                u in (s ? o : r) || t(u, a[u], s)
                            }(n, e, void 0 !== t && t)
                        };
                    return a.createElement(d.ty.Consumer, null, (function(e) {
                        var i = e.store;
                        return function(e, n) {
                            var t = e.injectSaga;
                            Object.entries(n).forEach((function(e) {
                                var n = (0, r.A)(e, 2),
                                    i = n[0],
                                    o = n[1];
                                t(i, o)
                            }))
                        }(i, o), Array.isArray(n) ? n.forEach((function(e) {
                            return s(e, i)
                        })) : (0, l.default)(n) || s(n, i), t
                    }))
                };
            Oe.propTypes = {
                reducer: u().oneOfType([u().object, u().arrayOf(u().object)]).isRequired,
                sagas: u().objectOf(u().func),
                children: u().node.isRequired
            }, Oe.defaultProps = {
                sagas: {}
            };
            const Ce = function(e, n) {
                var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Ne(e) : function(e, n) {
                    var t = (0, c.y$)(e, {}, (0, c.Tw)(n));
                    return t.injectSaga = f.default, Re(t)
                }(t, n)
            }
        },
        OM32: (e, n, t) => {
            t.d(n, {
                Ri: () => a,
                TV: () => o,
                Yj: () => s,
                sG: () => i
            });
            var r = t("Ar8T"),
                i = ".zomato.com",
                o = function(e, n, t) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        i = new Date;
                    i.setTime(i.getTime() + 60 * t * 1e3);
                    var o = i.toGMTString(),
                        a = "".concat(e, "=").concat(n, ";expires=").concat(o, ";path=/");
                    r && (a = "".concat(e, "=").concat(n, ";domain=").concat(r, ";expires=").concat(o, ";path=/")), document.cookie = a
                },
                a = function(e) {
                    if ("undefined" == typeof document) return "";
                    try {
                        for (var n = "".concat(e, "="), t = decodeURIComponent(document.cookie).split(";"), i = 0; i < t.length; i += 1) {
                            for (var o = t[i];
                                " " === o.charAt(0);) o = o.substring(1);
                            if (0 === o.indexOf(n)) return o.substring(n.length, o.length)
                        }
                    } catch (e) {
                        (0, r.K)("DECODE_URI_MALFORMED", [document.cookie, e.message])
                    }
                    return ""
                },
                s = function(e) {
                    document.cookie = "".concat(e, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/")
                }
        },
        VHv3: (e, n, t) => {
            t.d(n, {
                A: () => a
            });
            var r = t("iFif"),
                i = t("jn0/"),
                o = t("WHL/");
            const a = function(e) {
                return (0, o.Ay)(e) ? r.xY.GPAY : (0, i.A)(e) ? r.xY.WHATSAPP_AGENT : r.xY.NORMAL
            }
        },
        qNwi: (e, n, t) => {
            t.d(n, {
                A: () => i
            });
            var r = t("lXQd");
            const i = function(e) {
                return (0, r.default)(e, "pages.current.name", "") || ""
            }
        },
        IzBX: (e, n, t) => {
            t.d(n, {
                A: () => l
            });
            var r = t("zThL"),
                i = t("lXQd"),
                o = t("VAjR"),
                a = t("qNwi"),
                s = (0, r.A)((0, r.A)((0, r.A)({}, o.RZ, o.ND), o.ix, o.s3), o.W2, o.ND),
                u = [o.RZ, o.ix, o.W2];
            const l = function(e) {
                var n = (0, a.A)(e);
                return u.includes(n) ? s[n] : (0, i.default)(e, "pages.current.subType", "") || ""
            }
        },
        MKgB: (e, n, t) => {
            t.d(n, {
                A: () => i
            });
            var r = t("lXQd");
            const i = function(e) {
                return (0, r.default)(e, "pages.current.isMobile", 0)
            }
        },
        Ht22: (e, n, t) => {
            t.d(n, {
                A: () => i
            });
            var r = t("lXQd");
            const i = function(e) {
                return (0, r.default)(e, "pages.current.resId", 0) || 0
            }
        },
        taSx: (e, n, t) => {
            t.d(n, {
                n: () => o,
                s: () => i
            });
            var r = t("lXQd"),
                i = function(e) {
                    return (0, r.default)(e, "pages.current.useAuthSdkForLogin", !1)
                },
                o = function(e) {
                    return (0, r.default)(e, "pages.current.useAuthSdkForLogout", !1)
                }
        },
        Wc2h: (e, n, t) => {
            t.d(n, {
                Mn: () => c,
                aw: () => l,
                wd: () => p,
                kz: () => u,
                c5: () => d,
                jH: () => m
            });
            var r = t("lXQd"),
                i = t("VAjR"),
                o = {
                    GLOBAL: "global",
                    CITY: "city",
                    COUNTRY: "country"
                },
                a = t("AdJq");

            function s(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                    a = t.cityName,
                    s = void 0 === a ? "" : a,
                    u = t.countryName,
                    l = void 0 === u ? "" : u,
                    c = r.basic_info,
                    d = function() {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if ("" !== e && null != e) return e;
                        var n = "Others";
                        switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") {
                            case i.Wt:
                                n = "Restaurant";
                                break;
                            case i.Dn:
                                n = "Search";
                                break;
                            case i.DH:
                                n = "Country";
                                break;
                            case i.Ak:
                                n = "City";
                                break;
                            case i.I:
                                n = "Collections";
                                break;
                            case i.QQ:
                                n = "Single Collection";
                                break;
                            case i.m3:
                                n = "Users"
                        }
                        return n
                    }(n, o);
                e.set("dimension1", c ? "true" : "false"), e.set("dimension2", l), e.set("dimension3", s), e.set("dimension4", d), e.send("pageview")
            }

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (window && window.ga) {
                    var r = e.name,
                        i = void 0 === r ? "" : r,
                        u = e.pageUrl,
                        l = void 0 === u ? "" : u,
                        c = e.pageTitle,
                        d = void 0 === c ? "" : c,
                        m = e.gaPageType,
                        f = void 0 === m ? "" : m,
                        p = l || window.location.pathname;
                    window.ga((function() {
                        Object.values(o).forEach((function(e) {
                            ! function(e, n, t, r, i, u, l) {
                                if (window && window.ga) {
                                    var c = window.ga.getByName(e);
                                    c && c.get("page") !== t && (c.set("page", t), c.set("title", u), c.set("location", "".concat(a.Hc4).concat(t)), e !== o.GLOBAL ? c.send("pageview") : s(c, n, r, i, l))
                                }
                            }(e, i, p, n, t, d, f)
                        }))
                    }))
                }
            }
            var l = {
                    BUTTON_CLICK: "button click",
                    CLICK: "click",
                    ICON_CLICK: "icon click"
                },
                c = {
                    ADD_TO_CART_CONTINUE: "add to cart continue"
                };

            function d(e) {
                var n = e.eventCategory,
                    t = void 0 === n ? "" : n,
                    r = e.eventAction,
                    i = void 0 === r ? "" : r,
                    a = e.eventLabel,
                    s = void 0 === a ? "" : a;
                window && window.ga && window.ga((function() {
                    Object.values(o).forEach((function(e) {
                        window.ga.getByName(e).send({
                            hitType: "event",
                            eventCategory: t,
                            eventAction: i,
                            eventLabel: s
                        })
                    }))
                }))
            }

            function m(e) {
                Array.isArray(e) ? e.forEach(f) : f(e)
            }

            function f(e) {
                if (window.gtag) {
                    var n = (0, r.default)(e, "eventName", "");
                    if (n) {
                        var t = (0, r.default)(e, "payload", {});
                        window.gtag("event", n, t)
                    }
                }
            }

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                "undefined" != typeof window && window.gtag && window.gtag("set", "user_data", {
                    email: e.email || "",
                    phone_number: e.mobile || ""
                })
            }
        },
        P62M: (e, n, t) => {
            t.d(n, {
                $w: () => y,
                Dl: () => g,
                EI: () => h,
                G: () => S,
                I2: () => f,
                T4: () => I,
                VU: () => _,
                f1: () => v,
                fU: () => A,
                jr: () => b,
                r8: () => w,
                tx: () => T,
                x3: () => E,
                z6: () => p
            });
            var r = t("zThL"),
                i = t("77l8"),
                o = t("q1tI"),
                a = t("bmMU"),
                s = t.n(a),
                u = t("BZFX"),
                l = t("G3hc"),
                c = t("4Pez"),
                d = t("lXQd"),
                m = t("VAjR"),
                f = function(e) {
                    var n = "https://b.zmtcdn.com";
                    return e.includes(n) ? e : n + e
                },
                p = function(e, n, t) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
                        i = n * r,
                        o = t * r,
                        a = e.indexOf("?") >= 0,
                        s = "fit=around|".concat(i, ":").concat(o, "&crop=").concat(i, ":").concat(o, ";*,*");
                    return a ? "".concat(e, "&").concat(s) : "".concat(e, "?").concat(s)
                };

            function A() {
                return !(void 0 === t.g || !t.g.ssr)
            }
            var h = function(e) {
                    return Array.isArray(e) && !!e.length
                },
                g = function(e, n) {
                    return s()((0, u.A)(e, (0, l.A)(e)), (0, u.A)(n, (0, l.A)(n)))
                },
                v = function(e) {
                    var n = (0, d.default)(e, "pages.current.subType", m.ND),
                        t = (0, d.default)(e, "pages.current.resId", 0);
                    return n === m.s3 ? (0, d.default)(e, "pages.restaurant.".concat(t, ".takeAwayDetails"), {}) : n === m.ND ? (0, d.default)(e, "pages.restaurant.".concat(t, ".orderDetails"), {}) : {}
                },
                E = function(e) {
                    var n = Number((0, d.default)(e, "user.basic_info.id", 0));
                    return n = Number.isNaN(n) ? 0 : n, Boolean(n)
                },
                _ = function(e) {
                    var n = !!(0, d.default)(e, "user.basic_info.id", 0),
                        t = !!(0, d.default)(e, "user.basic_info.guestId", 0);
                    return n && !t
                };

            function y(e) {
                if ("number" == typeof e && !Number.isNaN(e)) return e;
                if ("string" != typeof e) return null;
                var n = e.replace(/,/g, ""),
                    t = parseFloat(n);
                return Number.isNaN(t) ? null : t
            }
            var b = function(e) {
                    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                    var i = new RegExp(/(\{[\d]+\})/),
                        a = !1,
                        s = e.split(i).map((function(e) {
                            if (e.match(i)) {
                                var n = Number(e.slice(1).slice(0, -1)),
                                    r = t[n];
                                return o.isValidElement(t[n]) ? a || (a = !0) : "string" != typeof t[n] && (r = t[n].toString()), r
                            }
                            return e
                        }));
                    return a ? s : s.join("")
                },
                T = function(e) {
                    var n = {
                        login_failed_title: "Login Failed",
                        signup_failed_title: "Signup Failed",
                        otp_verification_title: "OTP Verification",
                        login_title: "Login",
                        signup_title: "Signup",
                        signup_name_error_message: "Please enter a valid name",
                        signup_empty_email_error_message: "Please enter an email",
                        signup_invalid_email_error_message: "Invalid Email id",
                        signup_phone_error_message: "Please enter phone number",
                        signup_full_name_label: "Full Name",
                        signup_email_label: "Email",
                        signup_phone_label: "Phone",
                        terms_of_service_text: "Terms of Service",
                        privacy_policy_text: "Privacy Policy",
                        content_policies: "Content Policies",
                        agree_to_zomato_policy_text: "I agree to Zomato's {0}, {1} and {2}",
                        create_account_button_text: "Create account",
                        already_have_an_account_text: "Already have an account? {0}",
                        login_with_phone_error: "Login with Phone number is not currently available",
                        new_to_zomato_text: "New to Zomato?",
                        send_otp_text: "Send One Time Password",
                        error_messaage_box_try_other_methods_text: "Try using other methods",
                        error_messaage_box_skip_for_now_text: "Skip for now",
                        new_otp_has_been_sent_text: "A new OTP has been sent",
                        not_received_otp_text: "Didn't receive OTP?",
                        resend_now_text: "Resend Now",
                        terminate_verification_text: "Are you sure you want to terminate the verification?",
                        yes_button_text: "Yes",
                        no_button_text: "No",
                        continue_with_google_button_text: "Continue with Google",
                        error_occured_text: "Error occurred!",
                        or_text: "or"
                    };
                    return Object.keys(e).reduce((function(t, o) {
                        var a = o.toLowerCase();
                        return n[a] ? (0, i.A)((0, i.A)({}, t), {}, (0, r.A)({}, a, e[o])) : t
                    }), {})
                },
                S = function(e, n) {
                    return (0, c.A)(e, (function(e) {
                        return e[n]
                    }))
                },
                I = function(e) {
                    return (0, d.default)(e, "deviceSpecificInfo.isBot", 0)
                },
                w = function(e) {
                    return (0, d.default)(e, "pages.current.isMobile", 0)
                }
        },
        PdVL: (e, n, t) => {
            t.d(n, {
                A: () => a
            });
            var r = t("qNwi"),
                i = t("IzBX"),
                o = t("VAjR");
            const a = function(e) {
                var n = (0, r.A)(e),
                    t = (0, i.A)(e);
                return !(!n || !t) && !(![o.Wt].includes(n) || ![o.ND, o.s3].includes(t))
            }
        },
        "+dRJ": (e, n, t) => {
            t.d(n, {
                X: () => o
            });
            var r = t("VAjR"),
                i = t("rGZ9"),
                o = function(e, n, t, o) {
                    return (e === r.ND && n === r.Wt || e === i.tC && n === r.Dn) && !t && o
                }
        },
        "0Rqv": (e, n, t) => {
            t.d(n, {
                y: () => i
            });
            var r = t("F6eP"),
                i = function(e, n) {
                    try {
                        window.lintrk("track", {
                            conversion_id: e
                        })
                    } catch (e) {
                        (0, r.K3)("linkedin-tracking-failure", [n, e.toString(), e.message])
                    }
                }
        },
        "WHL/": (e, n, t) => {
            t.d(n, {
                Ay: () => l,
                Lt: () => u,
                ZF: () => s
            });
            var r = t("lXQd"),
                i = t("VAjR"),
                o = [i.RC, i.fo, i.Q1, i.W2, i.uf, i.$G, i.s9, i.j5, i.eN],
                a = function(e) {
                    return o.includes(e)
                },
                s = function(e) {
                    return a((0, r.default)(e, "pages.current.name", ""))
                },
                u = function(e) {
                    return (0, r.default)(e, "uiLogic.mountPartnershipPreciseLocationModal", !0)
                };
            const l = a
        },
        "jn0/": (e, n, t) => {
            t.d(n, {
                A: () => u,
                r: () => s
            });
            var r = t("lXQd"),
                i = t("VAjR"),
                o = [i.x1, i.BZ, i.yK, i.s_],
                a = function(e) {
                    return o.includes(e)
                },
                s = function(e) {
                    return a((0, r.default)(e, "pages.current.name", ""))
                };
            const u = a
        }
    },
    e => {
        e.O(0, [5357, 5993, 8312, 6964, 533, 912, 2296, 6587, 2407, 2315, 5532], (() => {
            return n = "Z/CO", e(e.s = n);
            var n
        }));
        e.O()
    }
]);