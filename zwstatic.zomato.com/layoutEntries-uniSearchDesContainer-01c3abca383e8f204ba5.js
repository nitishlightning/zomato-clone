"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [359], {
        "b/n3": (e, o, n) => {
            n.d(o, {
                A: () => I
            });
            var t = n("q1tI"),
                a = n("17x9"),
                d = n.n(a),
                c = n("HMsx"),
                l = n("wRyO"),
                r = n("ieZA"),
                i = n("lXQd"),
                s = n("j399"),
                u = n("lHa8"),
                f = n("WjMd"),
                h = n("LxjJ"),
                L = n("fHDd"),
                g = n("eu36"),
                p = n("AdJq"),
                A = n("SyuA"),
                y = n("Uq/k"),
                C = (0, u.Ay)({
                    resolved: {},
                    chunkName: function() {
                        return "sushiweb-Order-LocationChangerModal"
                    },
                    isReady: function(e) {
                        var o = this.resolve(e);
                        return !0 === this.resolved[o] && !!n.m[o]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(5357), n.e(8849)]).then(n.bind(n, "gTJI"))
                    },
                    requireAsync: function(e) {
                        var o = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return o.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(o) {
                        var t = this.resolve(o);
                        return n(t)
                    },
                    resolve: function e() {
                        return "gTJI"
                    }
                }, {
                    ssr: !1
                }),
                b = function(e) {
                    var o = e.isDropdownVisible,
                        n = e.searchPlaceholderText,
                        a = e.showDropdown,
                        d = e.hideDropdown,
                        u = e.cursorIndex,
                        b = e.setCursorIndex,
                        I = e.selectedIndexType,
                        m = e.setSelectedIndexType,
                        v = e.isUserLoggedIn,
                        S = e.isLocationDetailsFetching,
                        D = e.locationQuery,
                        w = e.setLocationQuery,
                        T = e.handleLocationInputChange,
                        x = e.locationSearchResults,
                        k = e.handleLocationSelect,
                        M = e.handleAddressSelect,
                        O = e.handleAddAddressClick,
                        E = e.handlePopularLocationClick,
                        P = e.handleRecentLocationClick,
                        R = e.detectCurrentLocation,
                        _ = e.showShimmer,
                        j = e.dropdownDefault,
                        N = e.detectingLoc,
                        U = e.onSaveAdderessLocationModal,
                        Q = e.gMapAPIKey,
                        q = e.currentLocation,
                        H = e.onLocationModalClose,
                        K = e.showLocationModal,
                        F = e.savedAddress,
                        z = e.popularLocations,
                        G = e.openLoginModalTypeLogin,
                        X = e.locationChangerLocale,
                        B = e.isGoodbyePage,
                        J = (0, t.useRef)(),
                        W = function() {
                            d(), b(y.YX)
                        },
                        $ = function() {
                            a()
                        };
                    (0, t.useEffect)((function() {
                        S && W()
                    }), [S]);
                    return (0, t.useEffect)((function() {
                        w("")
                    }), [(0, i.default)(q, "entityName", ""), (0, i.default)(q, "orderLocationName", "")]), t.createElement(A.mO, {
                        handleClickOutside: W,
                        removeHandler: !o,
                        onKeyDown: (0, L.onKeyChoose)((function(e, o) {
                            var n = v && (0, i.default)(q, "isO2City", !0) ? y.$j : y.c2;
                            switch (n = x.length > 0 ? x.length - 1 : n + F.length + z.length - 1, o) {
                                case y.En:
                                    u === y.YX ? b(0) : u > 0 ? b(u - 1) : 0 === u && b(n);
                                    break;
                                case y.vx:
                                    u === y.YX ? b(0) : u < n ? b(u + 1) : u >= n && b(0);
                                    break;
                                case y.jD:
                                    ! function() {
                                        switch (I) {
                                            case y.RR:
                                                k(F[u - y.$j])();
                                                break;
                                            case y.LI:
                                                k(x[u])();
                                                break;
                                            case y.yg:
                                                E(z[u - F.length - y.$j])();
                                                break;
                                            case y.D4:
                                                O();
                                                break;
                                            case y.M7:
                                                R()
                                        }
                                    }()
                            }
                        })),
                        isLarge: B
                    }, S ? t.createElement(r.default, {
                        color: l.default.z500,
                        size: "small"
                    }) : t.createElement(h.default, {
                        color: l.default.z400,
                        size: 20
                    }), t.createElement(A.pd, {
                        value: D,
                        ref: J,
                        onClick: $,
                        onChange: T,
                        placeholder: B ? n : (0, i.default)(q, "orderLocationName", "") || (0, i.default)(q, "entityName", ""),
                        fullWidth: B
                    }), t.createElement(A.a$, {
                        onClick: function() {
                            o ? W() : $()
                        },
                        color: c.default.z800,
                        size: 12,
                        visible: o
                    }), t.createElement(g.A, {
                        selectedIndexType: I,
                        setSelectedIndexType: m,
                        visible: o,
                        locationSearchResults: x,
                        handleLocationSelect: k,
                        handleSavedAddressSelect: M,
                        handlePopularLocationClick: E,
                        handleAddAddressClick: O,
                        handleRecentLocationClick: P,
                        detectCurrentLocation: R,
                        cursorIndex: u,
                        showShimmer: _,
                        dropdownDefault: j,
                        detectingLoc: N
                    }), K && t.createElement(C, {
                        isOpen: K,
                        onClose: function() {
                            J.current.focus(), H()
                        },
                        fnOnAddressSelect: s.default,
                        googleMapKey: Q,
                        host: p.Hc4,
                        fnOnMapCoordChange: s.default,
                        startFromEditing: !0,
                        showBackButton: !1,
                        fnOnSaveAddress: function() {
                            a(), U()
                        },
                        defaultLatLong: {
                            lat: q.userDefinedLatitude,
                            lng: q.userDefinedLongitude
                        },
                        isLoggedIn: v,
                        notLoggedInCallback: G,
                        googleMapPromptText: X.googleMapPromptText,
                        fallback: t.createElement(f.A, {
                            active: !0
                        })
                    }))
                };
            const I = b;
            b.propTypes = {
                cursorIndex: d().number,
                setCursorIndex: d().func,
                selectedIndexType: d().string,
                setSelectedIndexType: d().func,
                isDropdownVisible: d().bool.isRequired,
                showDropdown: d().func.isRequired,
                hideDropdown: d().func.isRequired,
                isUserLoggedIn: d().bool,
                savedAddress: d().arrayOf(d().object),
                popularLocations: d().arrayOf(d().object),
                showShimmer: d().bool,
                detectingLoc: d().bool,
                dropdownDefault: d().bool,
                handleLocationSelect: d().func,
                handleAddressSelect: d().func,
                handleAddAddressClick: d().func,
                handlePopularLocationClick: d().func,
                handleRecentLocationClick: d().func,
                detectCurrentLocation: d().func,
                locationSearchResults: d().arrayOf(d().object),
                showLocationModal: d().bool,
                currentLocation: d().objectOf(d().any),
                gMapAPIKey: d().string,
                onLocationModalClose: d().func,
                onSaveAdderessLocationModal: d().func,
                locationQuery: d().string,
                setLocationQuery: d().func,
                handleLocationInputChange: d().func,
                isLocationDetailsFetching: d().bool,
                openLoginModalTypeLogin: d().func,
                locationChangerLocale: d().objectOf(d().any),
                isGoodbyePage: d().bool,
                searchPlaceholderText: d().string
            }, b.defaultProps = {
                cursorIndex: -1,
                setCursorIndex: s.default,
                selectedIndexType: "",
                setSelectedIndexType: s.default,
                isUserLoggedIn: !1,
                savedAddress: [],
                popularLocations: [],
                handleLocationSelect: s.default,
                handleAddressSelect: s.default,
                handleAddAddressClick: s.default,
                handlePopularLocationClick: s.default,
                handleRecentLocationClick: s.default,
                detectCurrentLocation: s.default,
                showShimmer: !1,
                detectingLoc: !1,
                dropdownDefault: !0,
                locationSearchResults: [],
                showLocationModal: !1,
                gMapAPIKey: "",
                onLocationModalClose: s.default,
                onSaveAdderessLocationModal: s.default,
                currentLocation: {
                    latitude: 0,
                    longitude: 0
                },
                locationQuery: "",
                setLocationQuery: s.default,
                handleLocationInputChange: s.default,
                isLocationDetailsFetching: !1,
                openLoginModalTypeLogin: s.default,
                locationChangerLocale: {},
                isGoodbyePage: !1,
                searchPlaceholderText: ""
            }
        },
        W8Qj: (e, o, n) => {
            n.r(o), n.d(o, {
                default: () => s
            });
            var t = n("TRpf"),
                a = n("lXQd"),
                d = n("P62M"),
                c = n("Ujvf"),
                l = n("b/n3"),
                r = n("X2+A"),
                i = n("hcmH");
            const s = (0, t.Ng)((function(e) {
                return {
                    isLocationDetailsFetching: (0, a.default)(e, "apiState.GET_LOCATION_DETAILS.isFetching", !1) || (0, a.default)(e, "apiState.GET_LOCATION_GEO_DATA.isFetching", !1),
                    savedAddress: (0, a.default)(e, "user.savedAddress.addresses", []),
                    popularLocations: (0, a.default)(e, "location.popularLocations", []),
                    searchPlaceholderText: (0, a.default)(e, "pages.goodbye.searchPlaceholderText", ""),
                    isUserLoggedIn: (0, d.x3)(e),
                    isDropdownVisible: (0, a.default)(e, "uiLogic.isUniversalLocationModalOpen", !1),
                    locationChangerLocale: (0, i.A)(e)
                }
            }), (function(e) {
                return {
                    showDropdown: function() {
                        return e((0, r.gU)())
                    },
                    hideDropdown: function() {
                        return e((0, r.gL)())
                    },
                    openLoginModalTypeLogin: function() {
                        return e((0, c.W2)())
                    }
                }
            }))(l.A)
        }
    }
]);