"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7721], {
        XwKE: (e, r, n) => {
            n.r(r), n.d(r, {
                default: () => p
            });
            var t = n("lXQd"),
                i = n("q1tI"),
                s = n("17x9"),
                u = n.n(s),
                o = n("TRpf"),
                c = n("lHa8"),
                l = n("VAjR"),
                a = (0, c.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "FeedingPhilippinesFooter"
                    },
                    isReady: function(e) {
                        var r = this.resolve(e);
                        return !0 === this.resolved[r] && !!n.m[r]
                    },
                    importAsync: function() {
                        return n.e(1083).then(n.bind(n, "N7Ro"))
                    },
                    requireAsync: function(e) {
                        var r = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return r.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(r) {
                        var t = this.resolve(r);
                        return n(t)
                    },
                    resolve: function e() {
                        return "N7Ro"
                    }
                }),
                v = (0, c.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "ZomatoFooter"
                    },
                    isReady: function(e) {
                        var r = this.resolve(e);
                        return !0 === this.resolved[r] && !!n.m[r]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(1301), n.e(7578)]).then(n.bind(n, "CiQE"))
                    },
                    requireAsync: function(e) {
                        var r = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return r.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(r) {
                        var t = this.resolve(r);
                        return n(t)
                    },
                    resolve: function e() {
                        return "CiQE"
                    }
                }),
                h = (0, c.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "InvestorRelationsFooter"
                    },
                    isReady: function(e) {
                        var r = this.resolve(e);
                        return !0 === this.resolved[r] && !!n.m[r]
                    },
                    importAsync: function() {
                        return n.e(3683).then(n.bind(n, "ewnD"))
                    },
                    requireAsync: function(e) {
                        var r = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return r.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(r) {
                        var t = this.resolve(r);
                        return n(t)
                    },
                    resolve: function e() {
                        return "ewnD"
                    }
                }),
                f = (0, c.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "PartnershipFooter"
                    },
                    isReady: function(e) {
                        var r = this.resolve(e);
                        return !0 === this.resolved[r] && !!n.m[r]
                    },
                    importAsync: function() {
                        return n.e(8024).then(n.bind(n, "SdFs"))
                    },
                    requireAsync: function(e) {
                        var r = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return r.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(r) {
                        var t = this.resolve(r);
                        return n(t)
                    },
                    resolve: function e() {
                        return "SdFs"
                    }
                });

            function d(e, r, n) {
                var t = [l.o5, l.Zk, l.Pb, l.ky, l.b$, l.RZ, l.EG, l.k5, l.RC, l.uf, l.W2, l.j5, l.$G, l.eN, l.Xd, l.r6, l.Hi, l.k3, l.m0, l.r9, l.pN, l.he, l.Gk, l.nK, l.Iz, l.mO, l.Qg, l.hV, l.VO, l.tV, l.iV, l.sU],
                    i = [l.s3, l.ND],
                    s = e === l.Wt && i.includes(r) && n,
                    u = e === l.m3 && n && r === l.UU;
                return !!(t.includes(e) || s || u)
            }
            var y = function(e) {
                var r = e.currentPageName,
                    n = e.currentPageSubtype,
                    t = e.isMobile,
                    s = [l.zs, l._G, l.$s],
                    u = [l.Q1, l.fo],
                    o = [l.BR];
                return d(r, n, t) ? null : o.includes(r) ? i.createElement(h, null) : s.includes(r) ? i.createElement(a, null) : u.includes(r) ? i.createElement(f, null) : i.createElement(v, {
                    isMobile: t
                })
            };
            y.propTypes = {
                currentPageName: u().string,
                currentPageSubtype: u().string,
                isMobile: u().bool
            }, y.defaultProps = {
                currentPageName: "",
                currentPageSubtype: "",
                isMobile: !1
            };
            var m = function(e) {
                return {
                    currentPageName: (0, t.default)(e, "pages.current.name", ""),
                    currentPageSubtype: (0, t.default)(e, "pages.current.subType", ""),
                    isMobile: !!(0, t.default)(e, "pages.current.isMobile", 0)
                }
            };
            const p = (0, o.Ng)(m)(y)
        }
    }
]);