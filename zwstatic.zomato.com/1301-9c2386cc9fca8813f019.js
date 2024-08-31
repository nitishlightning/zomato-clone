"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1301], {
        "0zwj": (e, t, n) => {
            var a = n("JMD1"),
                r = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("UNXm")),
                o = y(n("q1tI")),
                i = a(n("17x9")),
                u = y(n("vOnD")),
                d = a(n("j399")),
                f = a(n("6jlT")),
                c = a(n("5An4")),
                m = a(n("HMsx")),
                s = a(n("ukK4")),
                p = a(n("PQmA")),
                g = a(n("RuGz")),
                h = a(n("cjht")),
                v = a(n("eLLh")),
                b = a(n("NANp"));

            function w(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (w = function(e) {
                    return e ? n : t
                })(e)
            }

            function y(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != r(e) && "function" != typeof e) return {
                    default: e
                };
                var n = w(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                        var i = l ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(a, o, i) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            var C = {
                    DESKTOP: 650,
                    TABLET: 500,
                    MOBILE: 300
                },
                x = function e(t) {
                    var n = t.country,
                        a = void 0 === n ? "" : n,
                        r = t.value,
                        i = void 0 === r ? "" : r,
                        u = t.countries,
                        c = void 0 === u ? [] : u,
                        m = t.onSelect,
                        s = void 0 === m ? d.default : m,
                        h = t.isFooter,
                        b = void 0 !== h && h,
                        w = (0, o.useState)(a),
                        y = (0, l.default)(w, 2),
                        x = y[0],
                        k = y[1],
                        M = (0, o.useState)(i),
                        S = (0, l.default)(M, 2),
                        j = S[0],
                        O = S[1],
                        _ = (0, o.useState)(!1),
                        z = (0, l.default)(_, 2),
                        D = z[0],
                        q = z[1],
                        P = (0, o.useState)(0),
                        A = (0, l.default)(P, 2),
                        R = A[0],
                        T = A[1],
                        W = function(e, t, n) {
                            k(e), O(t), s(t, n)
                        },
                        F = "undefined" != typeof window ? window.innerWidth / 2 + Math.min(900, window.innerWidth) / 2 : 0,
                        N = (0, o.useRef)();
                    (0, o.useEffect)((function() {
                        var e = function() {
                                var e = "undefined" != typeof window ? window.innerWidth : 0;
                                return e >= 768 ? "DESKTOP" : e < 768 && e > 480 ? "TABLET" : "MOBILE"
                            }(),
                            t = b ? 300 : function(e) {
                                return C[e] || 650
                            }(e),
                            n = N.current.getBoundingClientRect().x,
                            a = n <= 0 ? n : n + t >= F ? n + t - F : 0;
                        a && T(-1 * (a + 10))
                    }), []);
                    var H = (0, f.default)();
                    return o.default.createElement(E, {
                        handleClickOutside: function() {
                            return q(!1)
                        }
                    }, o.default.createElement(e.Wrapper, {
                        onClick: function() {
                            return q(!D)
                        },
                        tabIndex: "0",
                        "aria-labelledby": "country-dropdown-label"
                    }, o.default.createElement(e.label, null, "Select Country"), o.default.createElement(e.Arrow, {
                        visible: D
                    }), o.default.createElement(e.Menu, {
                        visible: D,
                        tabIndex: "-1",
                        "aria-activedescendant": "country-active_".concat(H),
                        ref: N,
                        left: R,
                        isFooter: b
                    }, o.default.createElement(I, {
                        gap: 5,
                        visible: D
                    }, c.map((function(e) {
                        return o.default.createElement(v.default.Item, {
                            colD: b ? 5 : 3,
                            colT: 4,
                            colM: 6,
                            key: e.value
                        }, o.default.createElement(L, {
                            name: e.name,
                            value: e.value,
                            onSelect: W,
                            selected: j === e.value,
                            countryObj: e,
                            uniqueId: H
                        }))
                    })))), o.default.createElement(e.Head, null, o.default.createElement(g.default, {
                        country: j,
                        width: 22
                    }), o.default.createElement(e.CountryName, null, x), o.default.createElement(p.default, {
                        size: 15
                    }))))
                },
                I = (0, u.default)(v.default).withConfig({
                    componentId: "sc-10ugfab-0"
                })(["display:", ";"], (function(e) {
                    return e.visible ? "inital" : "none"
                })),
                E = (0, u.default)(h.default).withConfig({
                    componentId: "sc-10ugfab-1"
                })(["max-width:100%;"]),
                k = function(e) {
                    return e.visible ? "1rem 1.4rem 1.4rem 1.4rem" : 0
                },
                L = function e(t) {
                    var n = t.name,
                        a = void 0 === n ? "" : n,
                        r = t.value,
                        l = void 0 === r ? "" : r,
                        i = t.onSelect,
                        u = void 0 === i ? d.default : i,
                        f = t.selected,
                        c = void 0 !== f && f,
                        m = t.countryObj,
                        s = t.uniqueId;
                    return o.default.createElement(e.Wrapper, {
                        onClick: function() {
                            return u(a, l, m)
                        },
                        isSelected: c,
                        id: c ? "country-active_".concat(s) : "country-".concat(l, "_").concat(s)
                    }, o.default.createElement(g.default, {
                        country: l,
                        width: 24
                    }), o.default.createElement(e.CountryName, null, a))
                };
            x.label = u.default.label.withConfig({
                componentId: "sc-10ugfab-2"
            })(["display:none;"]), L.CountryName = u.default.span.withConfig({
                componentId: "sc-10ugfab-3"
            })(["font-size:1.4rem;color:", ";line-height:1.6rem;margin:0 0.5rem 0 0.8rem;font-weight:400;"], c.default), L.propTypes = {
                name: i.default.string,
                value: i.default.string,
                onSelect: i.default.func,
                selected: i.default.bool,
                countryObj: i.default.object.isRequired
            }, L.Wrapper = u.default.div.withConfig({
                componentId: "sc-10ugfab-4"
            })(["display:flex;align-items:center;cursor:pointer;width:96%;padding:1%;:hover{background:", ";}", ""], m.default.z100, (function(e) {
                return e.isSelected && (0, u.css)(["background:", ";"], s.default.z100)
            })), x.propTypes = {
                country: i.default.string,
                countries: i.default.array,
                onSelect: i.default.func,
                value: i.default.string,
                isFooter: i.default.bool
            }, x.Arrow = u.default.span.withConfig({
                componentId: "sc-10ugfab-5"
            })(["display:", ";position:absolute;top:-1.7rem;left:3.1rem;width:2.1rem;height:2.3rem;transform:rotate(45deg);border-radius:2.2rem 0 0.4rem 0;background:#fff;z-index:11;"], (function(e) {
                return e.visible ? "block" : "none"
            })), x.Menu = u.default.div.withConfig({
                componentId: "sc-10ugfab-6"
            })(["position:absolute;opacity:", ";bottom:4rem;left:", "px;width:", ";visibility:", ";height:", ";background-color:#fff;box-shadow:0.1rem 4rem 4rem rgba(0,0,0,0.15);border-radius:", ";padding:", ";cursor:default;transform-origin:0 100%;transition-property:opacity,padding;will-change:opacity,padding;transition-duration:", ";@media (max-width:768px) and (min-width:481px){width:50rem;}@media (max-width:480px) and (min-width:321px){padding:", ";width:30rem;}@media (max-width:320px){padding:", ";width:28rem;}z-index:10;"], (function(e) {
                return e.visible ? 1 : 0
            }), (function(e) {
                return e.left
            }), (function(e) {
                return e.visible ? e.isFooter ? "33rem" : "65rem" : 0
            }), (function(e) {
                return e.visible ? "visible" : "hidden"
            }), (function(e) {
                return e.visible ? "auto" : 0
            }), b.default.radius, (function(e) {
                return e.visible ? "1.2rem 1.6rem 1.6rem 1.6rem" : 0
            }), b.default.animationDuration, k, k), x.Head = u.default.div.withConfig({
                componentId: "sc-10ugfab-7"
            })(["display:flex;align-items:center;max-width:100%;overflow:hidden;text-overflow:ellipsis;"]), x.CountryName = u.default.span.withConfig({
                componentId: "sc-10ugfab-8"
            })(["font-size:1.8rem;line-height:2rem;max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:", ";margin:0 0.5rem 0 0;font-weight:400;@media (max-width:480px){font-size:1.6rem;}"], c.default), x.Wrapper = u.default.div.withConfig({
                componentId: "sc-10ugfab-9"
            })(["min-width:10rem;width:max-content;max-width:100%;cursor:pointer;position:relative;padding:0.3rem 0.7rem;border:1px solid ", ";border-radius:0.6rem;"], m.default.z400);
            t.default = x
        },
        BYLu: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("0zwj"));
            t.default = r.default
        },
        meID: (e, t, n) => {
            var a = n("JMD1"),
                r = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("pP/M")),
                o = a(n("q1tI")),
                i = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                            var i = l ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(a, o, i) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n("vOnD")),
                u = a(n("17x9")),
                d = n("fHDd");
            a(n("HMsx"));

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (f = function(e) {
                    return e ? n : t
                })(e)
            }
            var c = function e(t) {
                    var n = t.width,
                        a = void 0 === n ? 45 : n,
                        r = t.country,
                        i = g(void 0 === r ? "" : r),
                        u = s(45, a),
                        d = m(u, 45);
                    return o.default.createElement(e.Image, (0, l.default)({}, t, {
                        width: 45,
                        xy: i,
                        scaleFactor: u,
                        leftMargin: d
                    }))
                },
                m = function(e, t) {
                    return e ? Math.floor((t * e - t) / 2) : 0
                },
                s = function(e, t) {
                    return t / e
                },
                p = {
                    malaysia: 1,
                    philippines: 2,
                    srilanka: 3,
                    india: 4,
                    canada: 5,
                    chile: 6,
                    "united-states": 7,
                    newzealand: 8,
                    southafrica: 9,
                    ireland: 10,
                    uk: 11,
                    uae: 12,
                    "czech-republic": 13,
                    "singapore-country": 14,
                    portugal: 15,
                    qatar: 16,
                    australia: 17,
                    slovakia: 18,
                    brasil: 19,
                    poland: 20,
                    indonesia: 21,
                    lebanon: 22,
                    italy: 23,
                    turkey: 24,
                    india2: 25
                },
                g = function(e) {
                    var t = (p[e] || 0) - 1;
                    return "".concat(-(45 * t + 2 * t), "px 0px")
                };
            c.propTypes = {
                width: u.default.number,
                country: u.default.string
            }, c.Image = i.default.span.withConfig({
                componentId: "sc-13tn0rn-0"
            })(["width:", "rem;height:", "rem;display:inline-block;background:url(", ") no-repeat;background-position:", ";transform:scale(", ");", ""], (function(e) {
                return e.width / 10
            }), (function(e) {
                return e.width / 10 * .667
            }), (0, d.getCDN)("data/webuikit/0687ff554c86e36cda9498212e221af61563274375.png"), (function(e) {
                return e.xy
            }), (function(e) {
                return e.scaleFactor
            }), (function(e) {
                return !!e.leftMargin && (0, i.css)(["margin-left:", "rem;"], e.leftMargin / 10)
            }));
            t.default = c
        },
        RuGz: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("meID"));
            t.default = r.default
        },
        Fptk: (e, t, n) => {
            var a = n("JMD1"),
                r = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("pP/M")),
                o = a(n("q1tI")),
                i = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                            var i = l ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(a, o, i) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n("vOnD")),
                u = a(n("HMsx")),
                d = a(n("lXQd")),
                f = a(n("17x9")),
                c = n("9quZ"),
                m = a(n("BYLu")),
                s = a(n("z5gk")),
                p = a(n("eLLh")),
                g = a(n("j399"));

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (h = function(e) {
                    return e ? n : t
                })(e)
            }
            var v = (0, n("fHDd").getCDN)("web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"),
                b = function(e) {
                    var t = e.data,
                        n = e.fallback;
                    return null != t && t.content.length ? {
                        name: null == t ? void 0 : t.title,
                        columnContent: null == t ? void 0 : t.content
                    } : {
                        name: null == n ? void 0 : n.title,
                        columnContent: null == n ? void 0 : n.content
                    }
                },
                w = function e(t) {
                    var n = t.fnCountrySelect,
                        a = void 0 === n ? g.default : n,
                        r = t.fnLanguageSelect,
                        i = void 0 === r ? g.default : r,
                        u = t.companyContent,
                        f = t.foodiesContent,
                        m = t.restaurantsContent,
                        s = t.enterpriseContent,
                        p = t.forYouContent,
                        h = t.learnMoreContent,
                        w = t.zomaverseContent,
                        x = t.aboutusContent,
                        I = t.icons,
                        E = t.disclaimer,
                        k = t.countries,
                        L = t.languages,
                        M = t.storeLinks,
                        S = void 0 === M ? {} : M,
                        j = S.appStoreLink,
                        z = void 0 === j ? "" : j,
                        q = S.playStoreLink,
                        P = void 0 === q ? "" : q,
                        A = t.onStoreClick,
                        R = void 0 === A ? g.default : A,
                        T = t.selectedCountry,
                        W = t.selectedLanguage,
                        F = t.large,
                        N = void 0 !== F && F,
                        H = t.showQrCode,
                        U = void 0 !== H && H,
                        J = t.qrCode,
                        Y = J.qrId,
                        B = void 0 === Y ? "" : Y,
                        Q = J.qrInnerId,
                        K = void 0 === Q ? "" : Q,
                        Z = J.qrLink,
                        X = void 0 === Z ? "" : Z,
                        G = J.qrImageUrl,
                        V = void 0 === G ? "" : G,
                        $ = t.footerDataArray,
                        ee = t.isMobile,
                        te = t.zLogoImg,
                        ne = t.isTwinColumnCountryList,
                        ae = void 0 !== ne && ne,
                        re = t.medium,
                        le = void 0 !== re && re,
                        oe = (0, d.default)($, "COMPANY", "Company"),
                        ie = (0, d.default)($, "FOR_FOODIES", "For Foodies"),
                        ue = (0, d.default)($, "FOR_RESTAURANTS", "For Restaurants"),
                        de = (0, d.default)($, "ABOUT_US", "About Zomato"),
                        fe = (0, d.default)($, "ZOMAVERSE", "Zomaverse"),
                        ce = (0, d.default)($, "LEARN_MORE", "Learn More"),
                        me = (0, d.default)($, "FOR_YOU", "For You"),
                        se = (0, d.default)($, "SOCIAL_LINKS", "Social links"),
                        pe = (0, d.default)($, "FOR_ENTERPRISES", "For Enterprises") || "For Enterprises";
                    return o.default.createElement(e.Wrapper, null, o.default.createElement(e.Content, {
                        large: N,
                        medium: le
                    }, o.default.createElement(e.Top, null, o.default.createElement(e.Img, {
                        src: te || v,
                        alt: "Zomato logo"
                    }), o.default.createElement(_, null), o.default.createElement(O, {
                        languages: L,
                        countries: k,
                        handleCountrySelect: a,
                        handleLangSelect: i,
                        selectedCountry: T,
                        selectedLanguage: W,
                        horizontal: !0,
                        isTwinColumnCountryList: ae
                    })), o.default.createElement(e.List, null, o.default.createElement(e.Column, (0, l.default)({
                        colM: 7,
                        colD: 2.2,
                        colT: 2.2,
                        fnCountrySelect: a,
                        fnLanguageSelect: i,
                        countries: k,
                        languages: L
                    }, b({
                        data: {
                            title: de,
                            content: x
                        },
                        fallback: {
                            title: oe,
                            content: u
                        }
                    }))), o.default.createElement(e.Column, (0, l.default)({
                        colM: 5,
                        colD: 2.3
                    }, b({
                        data: {
                            title: fe,
                            content: w
                        },
                        fallback: {
                            title: ie,
                            content: f
                        }
                    }))), o.default.createElement(e.ColumnContainer, {
                        colM: 7,
                        colD: 3
                    }, !!m.length && o.default.createElement(e.Column, {
                        colM: 7,
                        colD: 3,
                        name: ue,
                        columnContent: m,
                        noContainer: !0
                    }), Array.isArray(s) && !!s.length && o.default.createElement(e.Column, {
                        colM: 7,
                        colD: 3,
                        noContainer: !0,
                        name: pe,
                        columnContent: s
                    })), o.default.createElement(e.Column, (0, l.default)({
                        colM: 5,
                        colD: 2
                    }, b({
                        data: {
                            title: ce,
                            content: h
                        },
                        fallback: {
                            title: me,
                            content: p
                        }
                    }))), U ? o.default.createElement(D, {
                        qrId: B,
                        innerId: K,
                        link: X,
                        imageUrl: V
                    }) : o.default.createElement(o.default.Fragment, null, !!ee && o.default.createElement(C, null, o.default.createElement(e.MobileStoreLinks, {
                        onClick: R
                    }, o.default.createElement(c.Appstore, {
                        link: z
                    }), o.default.createElement(c.Playstore, {
                        link: P
                    }))), !!ee && o.default.createElement(C, {
                        colM: 12
                    }, o.default.createElement(y, null, se)), o.default.createElement(e.Links, {
                        colM: 12,
                        colD: 2.2,
                        name: se,
                        icons: I,
                        appStoreLink: z,
                        playStoreLink: P,
                        isMobile: ee,
                        onStoreClick: R
                    }))), o.default.createElement(e.HR, null), o.default.createElement(e.Disclaimer, null, E)))
                };
            w.MobileStoreLinks = i.default.div.withConfig({
                componentId: "sc-elhb8j-0"
            })(["display:flex;justify-content:space-around;"]), w.Img = i.default.img.withConfig({
                componentId: "sc-elhb8j-1"
            })(["@media (max-width:480px){margin-bottom:3rem;}height:2.8rem;width:13.2rem;"]), w.Top = i.default.section.withConfig({
                componentId: "sc-elhb8j-2"
            })(["display:flex;align-items:center;width:100%;justify-content:space-between;margin-bottom:4rem;@media (max-width:480px){flex-direction:column;align-items:flex-start;}"]);
            var y = i.default.p.withConfig({
                    componentId: "sc-elhb8j-3"
                })(["margin:0;margin-top:0.4rem;font-size:1.6rem;text-align:center;"]),
                C = (0, i.default)(p.default.Item).withConfig({
                    componentId: "sc-elhb8j-4"
                })(["display:none;@media (max-width:480px){display:block;margin-bottom:1.5rem;}"]),
                x = function(e) {
                    var t = e.appStoreLink,
                        n = e.playStoreLink,
                        a = e.showInMobile,
                        r = void 0 === a || a,
                        l = e.onStoreClick;
                    return o.default.createElement(w.StoreLinksContainer, {
                        showInMobile: r,
                        onClick: l
                    }, o.default.createElement(c.Appstore, {
                        link: t
                    }), o.default.createElement(_, null), o.default.createElement(c.Playstore, {
                        link: n
                    }))
                };
            x.propTypes = {
                appStoreLink: f.default.string.isRequired,
                playStoreLink: f.default.string.isRequired,
                showInMobile: f.default.bool,
                horizontal: f.default.bool
            };
            var I = f.default.shape({
                    name: f.default.string,
                    value: f.default.string
                }),
                E = I,
                k = {
                    name: "India",
                    value: "india"
                },
                L = {
                    name: "English",
                    value: "EN"
                };
            w.propTypes = {
                fnCountrySelect: f.default.func,
                fnLanguageSelect: f.default.func,
                companyContent: f.default.array,
                foodiesContent: f.default.array,
                learnMoreContent: f.default.arrayOf(f.default.any),
                zomaverseContent: f.default.arrayOf(f.default.any),
                aboutusContent: f.default.arrayOf(f.default.any),
                restaurantsContent: f.default.array,
                enterpriseContent: f.default.array,
                forYouContent: f.default.array,
                icons: f.default.array,
                disclaimer: f.default.string,
                countries: f.default.array,
                languages: f.default.array,
                storeLinks: f.default.shape({
                    appStoreLink: f.default.string.isRequired,
                    playStoreLink: f.default.string.isRequired
                }).isRequired,
                selectedLanguage: E,
                selectedCountry: I,
                large: f.default.bool,
                showQrCode: f.default.bool,
                qrCode: f.default.shape({
                    qrId: f.default.string,
                    qrInnerId: f.default.string,
                    qrLink: f.default.string,
                    qrImageUrl: f.default.string
                }),
                footerDataArray: f.default.objectOf(f.default.any),
                isMobile: f.default.bool,
                onStoreClick: f.default.func,
                isTwinColumnCountryList: f.default.bool,
                medium: f.default.bool
            }, w.defaultProps = {
                showQrCode: !1,
                qrCode: {
                    qrId: "",
                    qrInnerId: "",
                    qrLink: "",
                    qrImageUrl: ""
                },
                restaurantsContent: [],
                learnMoreContent: [],
                zomaverseContent: [],
                aboutusContent: [],
                companyContent: [],
                foodiesContent: [],
                forYouContent: [],
                selectedCountry: k,
                selectedLanguage: L,
                footerDataArray: {},
                isMobile: !0,
                onStoreClick: g.default,
                zLogoImg: ""
            }, w.Disclaimer = i.default.p.withConfig({
                componentId: "sc-elhb8j-5"
            })(["font-size:1.3rem;color:", ";line-height:1.7rem;margin-top:2.3rem;@media (max-width:480px){margin-bottom:3rem;}"], u.default.z800), w.Links = function(e) {
                var t = e.name,
                    n = void 0 === t ? "" : t,
                    a = e.icons,
                    r = void 0 === a ? [] : a,
                    l = e.appStoreLink,
                    i = e.playStoreLink,
                    u = e.isMobile,
                    d = e.onStoreClick;
                return o.default.createElement(w.LinksContainer, e, o.default.createElement(j, null, n), o.default.createElement(w.IconContainer, null, r.map((function(e) {
                    return o.default.createElement(w.Item.A, {
                        key: e.name,
                        href: e.link,
                        target: "_blank",
                        isIcon: !0
                    }, !u && o.default.createElement(S, null, o.default.createElement(e.component, {
                        size: 22
                    })), !!u && o.default.createElement(M, null, o.default.createElement(e.component, {
                        size: 28
                    })))
                }))), o.default.createElement(_, null), o.default.createElement(_, null), o.default.createElement(x, {
                    appStoreLink: l,
                    playStoreLink: i,
                    showInMobile: !1,
                    onStoreClick: d
                }))
            };
            var M = i.default.div.withConfig({
                    componentId: "sc-elhb8j-6"
                })(["display:none;@media (max-width:480px){display:block;}"]),
                S = i.default.div.withConfig({
                    componentId: "sc-elhb8j-7"
                })(["@media (max-width:480px){display:none;}"]),
                j = i.default.h6.withConfig({
                    componentId: "sc-elhb8j-8"
                })(["font-size:1.4rem;letter-spacing:0.2rem;text-transform:uppercase;font-weight:500;margin:0 0 1.2rem 0;@media (max-width:480px){display:none;}"]);
            w.NormalContainer = i.default.div.withConfig({
                componentId: "sc-elhb8j-9"
            })(["margin-bottom:3rem;&:last-of-type{margin-bottom:0;}"]), w.Column = function(e) {
                var t = e.name,
                    n = void 0 === t ? "" : t,
                    a = e.columnContent,
                    r = void 0 === a ? [] : a,
                    l = e.noContainer,
                    i = void 0 !== l && l,
                    u = o.default.createElement(o.default.Fragment, null, o.default.createElement(w.Heading, null, n), o.default.createElement("nav", null, r.map((function(e) {
                        return o.default.createElement(w.Item, {
                            key: e.label,
                            label: e.label,
                            link: e.link
                        })
                    }))));
                return i ? o.default.createElement(w.NormalContainer, null, u) : o.default.createElement(w.ColumnContainer, e, u)
            }, w.Item = function(e) {
                return o.default.createElement(w.Item.A, {
                    href: e.link
                }, o.default.createElement(w.Item.P, null, e.label))
            }, w.Locale = function(e) {
                var t = e.name,
                    n = void 0 === t ? "" : t,
                    a = e.columnContent,
                    r = void 0 === a ? [] : a;
                return o.default.createElement(w.LocaleContainer, e, o.default.createElement(w.Column, {
                    colM: 7,
                    colD: 2,
                    columnContent: r,
                    name: n
                }), o.default.createElement(_, null))
            };
            var O = function(e) {
                var t = e.selectedLanguage,
                    n = e.selectedCountry,
                    a = e.languages,
                    r = e.countries,
                    l = e.handleCountrySelect,
                    i = e.handleLangSelect,
                    u = e.showInMobile,
                    d = void 0 === u || u,
                    f = e.isTwinColumnCountryList,
                    c = void 0 !== f && f,
                    p = e.horizontal,
                    g = void 0 !== p && p;
                return o.default.createElement(w.DropdownContainer, {
                    showInMobile: d,
                    horizontal: g
                }, o.default.createElement(m.default, {
                    country: n.name,
                    value: n.value,
                    countries: r,
                    onSelect: l,
                    isFooter: c
                }), o.default.createElement(_, {
                    horizontal: g
                }), o.default.createElement(s.default, {
                    lang: t.name,
                    value: t.value,
                    languages: a,
                    onSelect: i
                }))
            };
            O.propTypes = {
                languages: f.default.array.isRequired,
                countries: f.default.array.isRequired,
                handleCountrySelect: f.default.func.isRequired,
                handleLangSelect: f.default.func.isRequired,
                showInMobile: f.default.bool,
                horizontal: f.default.bool,
                selectedCountry: I,
                isTwinColumnCountryList: f.default.bool,
                selectedLanguage: E
            }, O.defaultProps = {
                selectedCountry: k,
                selectedLanguage: L
            }, w.Locale.propTypes = {
                name: f.default.string,
                columnContent: f.default.array
            }, w.DropdownContainer = i.default.section.withConfig({
                componentId: "sc-elhb8j-10"
            })(["", " ", ""], (function(e) {
                return e.horizontal && (0, i.css)(["display:flex;"])
            }), (function(e) {
                return !e.showInMobile && (0, i.css)(["@media (max-width:480px){display:none;}"])
            })), w.StoreLinksContainer = i.default.section.withConfig({
                componentId: "sc-elhb8j-11"
            })(["", ""], (function(e) {
                return !e.showInMobile && (0, i.css)(["@media (max-width:480px){display:none;}"])
            }));
            var _ = i.default.div.withConfig({
                componentId: "sc-elhb8j-12"
            })(["margin-top:", ";", " @media (max-width:768px) and (min-width:481px){margin-right:1.2rem;}"], (function(e) {
                return e.m ? "".concat(e.m, "px") : "1.2rem"
            }), (function(e) {
                return e.horizontal && (0, i.css)(["margin-left:2rem;"])
            }));
            w.Links.propTypes = {
                name: f.default.string,
                icons: f.default.array,
                appStoreLink: f.default.string,
                playStoreLink: f.default.string
            }, w.Column.propTypes = {
                name: f.default.string,
                columnContent: f.default.array,
                noContainer: f.default.bool
            }, w.Item.propTypes = {
                label: f.default.string,
                link: f.default.string
            }, w.HR = i.default.hr.withConfig({
                componentId: "sc-elhb8j-13"
            })(["margin-top:5rem;border:0;border-top:1px solid ", ";@media (max-width:480px){margin-top:4.4rem;}"], u.default.z300), w.LinksContainer = (0, i.default)(p.default.Item).withConfig({
                componentId: "sc-elhb8j-14"
            })(["display:flex;flex-direction:column;@media (max-width:480px){margin-top:0.5rem;flex-direction:row;width:100%;justify-content:center;}"]), w.IconContainer = i.default.div.withConfig({
                componentId: "sc-elhb8j-15"
            })(["display:flex;justify-content:flex-start;@media (max-width:480px){margin-left:0.6rem;}@media (max-width:550px) and (min-width:481px){flex-direction:column;}"]), w.Item.P = i.default.p.withConfig({
                componentId: "sc-elhb8j-16"
            })(["font-size:1.4rem;line-height:2.1rem;color:", ";margin:0.5rem 0;@media (max-width:480px){font-size:1.3rem;line-height:1.6rem;}:hover{color:#1c1c1c;}"], u.default.z700), w.Item.A = i.default.a.withConfig({
                componentId: "sc-elhb8j-17"
            })(["text-decoration:none;", ""], (function(e) {
                return e.isIcon && (0, i.css)(["margin-right:0.8rem;@media (max-width:550px) and (min-width:481px){margin-top:0.8rem;}"])
            })), w.Heading = i.default.h6.withConfig({
                componentId: "sc-elhb8j-18"
            })(["font-size:1.4rem;letter-spacing:0.2rem;text-transform:uppercase;font-weight:500;margin:0 0 1.2rem 0;"]), w.LocaleContainer = (0, i.default)(p.default.Item).withConfig({
                componentId: "sc-elhb8j-19"
            })(["@media (max-width:480px){margin-bottom:3rem;}"]), w.ColumnContainer = (0, i.default)(p.default.Item).withConfig({
                componentId: "sc-elhb8j-20"
            })(["@media (max-width:480px){margin-bottom:3rem;}"]), w.Wrapper = i.default.footer.withConfig({
                componentId: "sc-elhb8j-21"
            })(["width:100%;background:", ";display:flex;justify-content:center;@media (min-width:768px) and (max-width:900px){&{padding:0 1.5rem;}}"], u.default.z95);
            var z = function(e) {
                return e.large ? "110rem" : e.medium ? "100.6rem" : "90rem"
            };
            w.Content = i.default.div.withConfig({
                componentId: "sc-elhb8j-22"
            })(["max-width:", ";width:", ";padding:4.8rem 0 2.2rem 0;position:relative;@media (max-width:768px) and (min-width:481px){padding:4.8rem 2.4rem 2.2rem 2.4rem;}@media (max-width:480px){padding:4.8rem 1rem 14.2rem 1rem;}"], z, z), w.List = (0, i.default)(p.default).withConfig({
                componentId: "sc-elhb8j-23"
            })(["justify-content:space-between;"]);
            var D = function(e) {
                var t = e.qrId,
                    n = void 0 === t ? "" : t,
                    a = e.innerId,
                    r = void 0 === a ? "" : a,
                    l = e.link,
                    i = void 0 === l ? "" : l,
                    u = e.imageUrl,
                    d = void 0 === u || u;
                return o.default.createElement(w.Qr, null, o.default.createElement("div", {
                    id: n
                }, o.default.createElement("div", {
                    id: r
                }, o.default.createElement("a", {
                    href: i
                }, o.default.createElement("img", {
                    src: d
                })))))
            };
            w.Qr = i.default.div.withConfig({
                componentId: "sc-elhb8j-24"
            })(["width:13rem;img{width:100%;}@media (max-width:480px){margin:0 auto;}"]), D.propTypes = {
                qrId: f.default.string.isRequired,
                innerId: f.default.string.isRequired,
                link: f.default.string.isRequired,
                imageUrl: f.default.string.isRequired
            };
            t.default = w
        },
        "94yn": (e, t, n) => {
            var a = n("JMD1");
            t.A = void 0;
            var r = a(n("Fptk"));
            t.A = r.default
        },
        RhL5: (e, t, n) => {
            var a = n("JMD1"),
                r = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("UNXm")),
                o = w(n("q1tI")),
                i = w(n("vOnD")),
                u = a(n("17x9")),
                d = a(n("j399")),
                f = a(n("6jlT")),
                c = a(n("5An4")),
                m = a(n("HMsx")),
                s = a(n("ukK4")),
                p = a(n("PQmA")),
                g = a(n("aQdf")),
                h = a(n("NANp")),
                v = a(n("cjht"));

            function b(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (b = function(e) {
                    return e ? n : t
                })(e)
            }

            function w(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != r(e) && "function" != typeof e) return {
                    default: e
                };
                var n = b(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                        var i = l ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(a, o, i) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            var y = function e(t) {
                    var n = t.lang,
                        a = void 0 === n ? "" : n,
                        r = t.value,
                        i = void 0 === r ? "," : r,
                        u = t.onSelect,
                        c = void 0 === u ? d.default : u,
                        m = t.languages,
                        s = void 0 === m ? [] : m,
                        h = (0, o.useState)(a),
                        b = (0, l.default)(h, 2),
                        w = b[0],
                        y = b[1],
                        x = (0, o.useState)(i),
                        I = (0, l.default)(x, 2),
                        E = I[0],
                        k = I[1],
                        L = (0, o.useState)(!1),
                        M = (0, l.default)(L, 2),
                        S = M[0],
                        j = M[1],
                        O = function(e, t) {
                            y(e), k(t), c(t)
                        },
                        _ = (0, f.default)();
                    return o.default.createElement(v.default, {
                        handleClickOutside: function() {
                            return j(!1)
                        }
                    }, o.default.createElement(e.Wrapper, {
                        onClick: function() {
                            return j(!S)
                        },
                        tabIndex: "0",
                        "aria-labelledby": "language-dropdown-label"
                    }, o.default.createElement(e.ariaLabel, {
                        id: "language-dropdown-label"
                    }, "Select Language"), o.default.createElement(e.Menu, {
                        visible: S,
                        tabIndex: "-1",
                        "aria-activedescendant": "lang-active_".concat(_)
                    }, o.default.createElement(e.Arrow, {
                        visible: S
                    }), o.default.createElement(e.LanguageContainer, null, S && s.map((function(e) {
                        return o.default.createElement(C, {
                            name: e.name,
                            value: e.value,
                            key: e.value,
                            onSelect: O,
                            selected: e.value == E,
                            uniqueId: _
                        })
                    })))), o.default.createElement(e.Head, null, o.default.createElement(g.default, {
                        size: 18
                    }), o.default.createElement(e.Label, null, w), o.default.createElement(p.default, {
                        size: 15
                    }))))
                },
                C = function e(t) {
                    var n = t.name,
                        a = t.value,
                        r = t.onSelect,
                        l = t.selected,
                        i = void 0 !== l && l,
                        u = t.uniqueId,
                        d = void 0 === u ? "" : u;
                    return o.default.createElement(e.Wrapper, {
                        onClick: function() {
                            return r(n, a)
                        },
                        isSelected: i,
                        id: i ? "lang-active_".concat(d) : "lang-".concat(a, "_").concat(d)
                    }, n)
                };
            C.propTypes = {
                name: u.default.string,
                value: u.default.string,
                onSelect: u.default.func,
                selected: u.default.bool
            }, C.Wrapper = i.default.div.withConfig({
                componentId: "sc-zqptxt-0"
            })(["padding:0.6rem 0.5rem;min-width:10rem;:hover{background:", ";}cursor:pointer;", ""], m.default.z100, (function(e) {
                return e.isSelected && (0, i.css)(["background:", ";"], s.default.z100)
            })), y.ariaLabel = i.default.label.withConfig({
                componentId: "sc-zqptxt-1"
            })(["display:none;"]), y.propTypes = {
                lang: u.default.string,
                value: u.default.string,
                onSelect: u.default.func,
                languages: u.default.array
            }, y.LanguageContainer = i.default.section.withConfig({
                componentId: "sc-zqptxt-2"
            })(["display:flex;flex-direction:column;"]), y.Arrow = i.default.span.withConfig({
                componentId: "sc-zqptxt-3"
            })(["display:", ";position:absolute;bottom:-1rem;left:6rem;width:2.1rem;height:2.3rem;transform:rotate(45deg);border-radius:2.2rem 0 0.4rem 0;background:#fff;"], (function(e) {
                return e.visible ? "block" : "none"
            })), y.Menu = i.default.div.withConfig({
                componentId: "sc-zqptxt-4"
            })(["left:-2.3rem;position:absolute;opacity:", ";bottom:4rem;width:", ";height:", ";background-color:#fff;box-shadow:0.1rem 4rem 4rem rgba(0,0,0,0.15);border-radius:", ";padding:", ";cursor:default;transform-origin:0 100%;transition-property:transform,opacity,padding;will-change:transform,opacity,padding;transition-duration:", ";z-index:10;"], (function(e) {
                return e.visible ? 1 : 0
            }), (function(e) {
                return e.visible ? "max-content" : 0
            }), (function(e) {
                return e.visible ? "auto" : 0
            }), h.default.radius, (function(e) {
                return e.visible ? "1rem 1.4rem 1.4rem 1.4rem" : 0
            }), h.default.animationDuration), y.Head = i.default.div.withConfig({
                componentId: "sc-zqptxt-5"
            })(["display:flex;align-items:center;"]), y.Label = i.default.span.withConfig({
                componentId: "sc-zqptxt-6"
            })(["font-size:1.8rem;line-height:2rem;color:", ";margin:0 0.5rem 0 0.8rem;margin-top:0.2rem;font-weight:400;@media (max-width:480px){font-size:1.6rem;}"], c.default), y.Wrapper = i.default.div.withConfig({
                componentId: "sc-zqptxt-7"
            })(["position:relative;cursor:pointer;min-width:10rem;width:max-content;padding:0.7rem;border:1px solid ", ";border-radius:0.6rem;"], m.default.z400);
            t.default = y
        },
        z5gk: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("RhL5"));
            t.default = r.default
        }
    }
]);