"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5865], {
        "6rry": (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => I
            });
            var a, s = n("RlfA"),
                r = n("q1tI"),
                o = n("TRpf"),
                l = n("17x9"),
                i = n.n(l),
                u = n("vOnD"),
                d = n("lXQd"),
                c = n("j399"),
                g = n("HMsx"),
                R = n("T9qK"),
                f = n("P62M"),
                h = n("Mifg"),
                T = function(e, t, n) {
                    return [{
                        key: h.e3.SIGNIN,
                        src: "",
                        activePages: [],
                        title: n.LOGIN_TITLE || h.e3.SIGNIN,
                        fnOnClick: e
                    }, {
                        key: h.e3.SIGNUP,
                        src: "",
                        activePages: [],
                        title: n.SIGNUP_TITLE || h.e3.SIGNUP,
                        fnOnClick: t
                    }]
                },
                p = function(e, t) {
                    return [{
                        key: h.e3.ADDRESTAURANT,
                        src: "",
                        activePages: [],
                        title: e || h.e3.ADDRESTAURANT,
                        fnOnClick: t
                    }]
                },
                v = function(e, t) {
                    return [{
                        key: h.e3.INVESTOR_RELATIONS,
                        src: "",
                        activePages: [],
                        title: e || h.e3.INVESTOR_RELATIONS,
                        fnOnClick: t
                    }]
                },
                S = function(e) {
                    var t = e.handleSignin,
                        n = e.handleSignup,
                        a = e.locale,
                        s = e.currentPageSubType,
                        o = e.breadcrumbs,
                        l = e.transparentPages,
                        i = e.showZomatoLogo,
                        u = e.showAddRestaurant,
                        d = e.addRestaurantText,
                        c = e.handleAddRestaurantClick,
                        g = e.showInvestorRelations,
                        f = e.investorRelationsText,
                        h = e.handleInvestorRelationsClick,
                        S = e.isDesktopLogoCentered,
                        I = function(e, t) {
                            var n = "restaurant" === t ? 2 : 3,
                                a = e[e.length - n] || {},
                                s = a.url,
                                r = void 0 === s ? "" : s,
                                o = a.title;
                            return {
                                text: void 0 === o ? "" : o,
                                link: r
                            }
                        }(o, s);
                    return r.createElement(A, null, r.createElement(R.A, {
                        transparentPages: l,
                        navbarLinks: T(t, n, a),
                        addRestaurantNavLink: p(d, c),
                        showAddRestaurant: u,
                        investorRelationsNavLink: v(f, h),
                        showInvestorRelations: g,
                        backToSearchPageDetails: I,
                        showZomatoLogo: i,
                        isDesktopLogoCentered: S
                    }))
                },
                A = u.default.div(a || (a = (0, s.A)(["\n  box-shadow: inset 0px -0.5px 0px ", ";\n"])), g.default.z200);
            S.propTypes = {
                handleSignin: i().func,
                handleSignup: i().func,
                locale: i().objectOf(i().string),
                breadcrumbs: i().arrayOf(i().object),
                currentPageSubType: i().string,
                transparentPages: i().arrayOf(i().string),
                showZomatoLogo: i().bool,
                showAddRestaurant: i().bool,
                addRestaurantText: i().string,
                handleAddRestaurantClick: i().func,
                showInvestorRelations: i().bool,
                investorRelationsText: i().string,
                handleInvestorRelationsClick: i().func,
                isDesktopLogoCentered: i().bool.isRequired
            }, S.defaultProps = {
                handleSignin: c.default,
                handleSignup: c.default,
                locale: {},
                breadcrumbs: [],
                currentPageSubType: "",
                transparentPages: [],
                showZomatoLogo: !0,
                showAddRestaurant: !1,
                addRestaurantText: "",
                handleAddRestaurantClick: c.default,
                showInvestorRelations: !1,
                investorRelationsText: "",
                handleInvestorRelationsClick: c.default
            };
            const I = (0, o.Ng)((function(e) {
                var t = (0, d.default)(e, "pages.current.resId", 0);
                return {
                    breadcrumbs: (0, d.default)(e, "pages.restaurant.".concat(t, ".sections.SECTION_BREADCRUMBS"), []),
                    currentPageSubType: (0, d.default)(e, "pages.current.subType", ""),
                    locale: (0, d.default)(e, "langKeys", {})
                }
            }), null)((0, r.memo)(S, f.Dl))
        }
    }
]);