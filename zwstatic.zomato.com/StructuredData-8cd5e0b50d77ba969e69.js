"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2322], {
        "6AUo": (e, t, a) => {
            a.d(t, {
                Oj: () => E,
                oD: () => m,
                xd: () => g,
                HG: () => O,
                PH: () => h
            });
            var n = a("77l8"),
                r = a("Vadf"),
                o = a("lXQd"),
                i = a("AkOy"),
                l = a("VAjR"),
                d = a("P62M"),
                s = a("AdJq"),
                c = {
                    RESCHEDULED: "EventRescheduled",
                    SCHEDULED: "EventScheduled",
                    POSTPONED: "EventPostponed",
                    ONLINE: "EventMovedOnline",
                    CANCELLED: "EventCancelled"
                },
                u = {
                    OFFLINE: "OfflineEventAttendanceMode",
                    ONLINE: "OnlineEventAttendanceMode",
                    MIXED: "MixedEventAttendanceMode"
                },
                p = {
                    INSTOCK: "InStock",
                    SOLDOUT: "SoldOut",
                    PREORDER: "PreOrder"
                },
                f = {
                    PERSON: "Person",
                    ORGANIZATION: "Organization"
                },
                g = function(e, t) {
                    var a = (0, o.default)(e, "current.key", ""),
                        n = {
                            "@context": "https://schema.org",
                            "@type": "Restaurant",
                            name: "Restaurant",
                            url: "",
                            openingHours: "",
                            hasmap: "",
                            menu: "",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "",
                                addressLocality: "",
                                addressRegion: "",
                                postalCode: "",
                                addressCountry: ""
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: "",
                                longitude: ""
                            },
                            potentialAction: {
                                "@type": "OrderAction",
                                deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
                                target: {
                                    "@type": "EntryPoint",
                                    inLanguage: "en-US",
                                    url: "",
                                    actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform", "http://schema.org/IOSPlatform", "http://schema.org/AndroidPlatform"]
                                }
                            },
                            telephone: "",
                            priceRange: "",
                            paymentAccepted: "",
                            image: "",
                            servesCuisine: ""
                        },
                        r = (0, o.default)(e, "current.resId", 0),
                        i = (0, o.default)(e, "restaurant.".concat(r, ".sections"), {}),
                        s = (0, o.default)(i, "SECTION_IMAGE_CAROUSEL.entities", []).find((function(e) {
                            return "IMAGES" === e.entity_type
                        })),
                        c = (0, o.default)(s, "entity_ids", {}),
                        u = (0, o.default)(t, "IMAGES.".concat(c[0], ".url"), {});
                    n.name = (0, o.default)(i, "SECTION_BASIC_INFO.name", ""), n.openingHours = (0, o.default)(i, "SECTION_BASIC_INFO.timing.timing_desc", ""), n.potentialAction.inLanguage = (0, o.default)(i, "SECTION_BASIC_INFO.inLanguage", ""), n.telephone = (0, o.default)(i, "SECTION_RES_CONTACT.phoneDetails.phoneStr", ""), n.address.streetAddress = (0, o.default)(i, "SECTION_RES_CONTACT.address", ""), n.geo.latitude = (0, o.default)(i, "SECTION_RES_CONTACT.latitude", ""), n.geo.longitude = (0, o.default)(i, "SECTION_RES_CONTACT.longitude", ""), n.address.addressCountry = (0, o.default)(i, "SECTION_RES_CONTACT.country_name", ""), n.address.addressRegion = (0, o.default)(i, "SECTION_RES_CONTACT.city_name", ""), n.address.postalCode = (0, o.default)(i, "SECTION_RES_CONTACT.zipcode", ""), n.address.addressLocality = (0, o.default)(i, "SECTION_RES_CONTACT.locality_verbose", ""), n.priceRange = (0, o.default)(i, "SECTION_RES_DETAILS.CFT_DETAILS.cfts[0].title", ""), n.servesCuisine = (0, o.default)(i, "SECTION_BASIC_INFO.cuisine_string", ""), n.paymentAccepted = (0, o.default)(i, "SECTION_RES_DETAILS.CFT_DETAILS.accepted_payments", ""), n.hasmap = (0, o.default)(i, "SECTION_RES_CONTACT.static_map_url", ""), n.potentialAction.target.url = "".concat((0, o.default)(i, "SECTION_BASIC_INFO.resUrl", ""), "/book"), n.image = u, n.url = (0, o.default)(i, "SECTION_BASIC_INFO.resUrl", ""), n.menu = "".concat((0, o.default)(i, "SECTION_BASIC_INFO.resUrl", ""), "/menu");
                    var p = (0, o.default)(i, "SECTION_BASIC_INFO.rating.votes", ""),
                        f = (0, o.default)(i, "SECTION_BASIC_INFO.rating.aggregate_rating", "0"),
                        g = (0, o.default)(i, "SECTION_BASIC_INFO.rating.rating_text", ""),
                        m = (0, d.$w)(p),
                        O = 0 !== (0, d.$w)(f) && "NEW" !== g && m > 0;
                    if (O && (n.aggregateRating = {
                            "@type": "AggregateRating",
                            ratingValue: f,
                            ratingCount: m,
                            bestRating: 5,
                            worstRating: 0
                        }), O && a === l.Cr) {
                        var E = (0, o.default)(i, "SECTION_REVIEWS.entities", []).find((function(e) {
                                return "REVIEWS" === e.entity_type
                            })),
                            C = (0, o.default)(E, "entity_ids", []);
                        n.reviews = C.map((function(e) {
                            var a = {},
                                n = (0, o.default)(t, "REVIEWS.".concat(e), {}),
                                r = (0, o.default)(n, "rating.entities.0.entity_ids.0", ""),
                                i = (0, o.default)(t, "RATING.".concat(r, ".rating"), "");
                            return a.author = (0, o.default)(n, "userName", ""), a.url = (0, o.default)(n, "reviewUrl", ""), a.description = (0, o.default)(n, "reviewText", ""), a.reviewRating = {
                                "@type": "Rating",
                                ratingValue: i,
                                bestRating: 5,
                                worstRating: 0
                            }, a
                        }))
                    }
                    return n
                },
                m = function(e) {
                    return {
                        "@context": "http://schema.org",
                        "@type": "Organization",
                        name: "Zomato",
                        description: e.current.pageDescription,
                        url: "".concat(s.Hc4).concat(e.current.pageUrl),
                        logo: "https://b.zmtcdn.com/images/square_zomato_logo_new.svg",
                        sameAs: ["https://www.facebook.com/zomato", "https://www.twitter.com/zomato", "https://www.instagram.com/zomato", "https://plus.google.com/+zomato", "https://en.wikipedia.org/wiki/Zomato", "https://www.linkedin.com/company/zomato"]
                    }
                },
                O = function(e) {
                    return {
                        "@context": "http://schema.org",
                        "@type": "Organization",
                        name: "Zomato",
                        description: e.current.pageDescription,
                        url: "".concat(s.Hc4).concat(e.current.pageUrl),
                        telephone: "01142246966",
                        logo: "https://b.zmtcdn.com/data/o2_assets/7906bdf310a71f40e1641c439af7de521680413052.png",
                        sameAs: ["https://www.facebook.com/zomato", "https://www.twitter.com/zomato", "https://www.instagram.com/zomato", "https://plus.google.com/+zomato", "https://en.wikipedia.org/wiki/Zomato", "https://www.linkedin.com/company/zomato"]
                    }
                },
                E = function(e) {
                    return {
                        "@context": "http://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: e.map((function(e, t) {
                            var a = {
                                "@type": "ListItem",
                                position: "",
                                item: {
                                    id: "",
                                    name: "",
                                    url: ""
                                }
                            };
                            return a.position = t, a.item.id = (0, o.default)(e, "url", ""), a.item.url = (0, o.default)(e, "url", ""), a.item.name = (0, o.default)(e, "title", ""), a
                        }))
                    }
                },
                C = function() {
                    return "https://schema.org/".concat(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "")
                },
                A = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    if (0 === e.length) return e;
                    var a = e.split(" "),
                        n = (0, r.A)(a, 2),
                        o = n[0],
                        i = n[1];
                    return "".concat(o, "T").concat(i).concat(t)
                },
                h = function(e, t) {
                    var a = e.current.pageTitle,
                        r = e.current.name,
                        l = e.current.pageUrl,
                        d = "".concat(s.Hc4).concat(l),
                        g = l.replace("/".concat(r, "/"), ""),
                        m = t.ZLIVE_EVENTS[g];
                    if ((0, i.default)(m)) return null;
                    var O = (0, o.default)(m, "images", []),
                        E = (0, o.default)(m, "tickets", []),
                        h = (0, o.default)(m, "locations", []),
                        S = (0, o.default)(m, "organizer", []),
                        _ = (0, o.default)(m, "performers", []),
                        I = (0, o.default)(m, "timezone", "+05:30"),
                        v = (0, o.default)(m, "eventStatus", ""),
                        N = v === c.RESCHEDULED,
                        y = E.map((function(e) {
                            var t = (0, o.default)(e, "availability", "");
                            return {
                                "@type": "Offer",
                                url: (0, o.default)(e, "url", ""),
                                price: (0, o.default)(e, "price", ""),
                                validFrom: A((0, o.default)(e, "validFrom", ""), I),
                                inventoryLevel: (0, o.default)(e, "inventory", ""),
                                priceCurrency: (0, o.default)(e, "currency", ""),
                                availability: t.length > 0 ? C(p[t]) : ""
                            }
                        })),
                        T = h.map((function(e) {
                            return {
                                "@type": "Place",
                                name: (0, o.default)(e, "place", ""),
                                address: {
                                    "@type": "PostalAddress",
                                    streetAddress: (0, o.default)(e, "streetAddress", ""),
                                    addressLocality: (0, o.default)(e, "place", ""),
                                    addressCountry: (0, o.default)(e, "addressCountry", "")
                                }
                            }
                        })),
                        w = _.map((function(e) {
                            return {
                                "@type": f[(0, o.default)(e, "type", "Person").toUpperCase()],
                                name: (0, o.default)(e, "name", ""),
                                sameAs: (0, o.default)(e, "url", ""),
                                image: (0, o.default)(e, "image", "")
                            }
                        })),
                        R = S.map((function(e) {
                            return {
                                "@type": f[(0, o.default)(e, "type", "Organization").toUpperCase()],
                                name: (0, o.default)(e, "name", ""),
                                url: (0, o.default)(e, "url", "")
                            }
                        }));
                    return (0, n.A)((0, n.A)((0, n.A)((0, n.A)((0, n.A)({
                        "@context": "http://schema.org",
                        "@type": "Event",
                        name: a,
                        url: d,
                        description: (0, o.default)(m, "description", ""),
                        startDate: A((0, o.default)(m, "startDate", ""), I),
                        endDate: A((0, o.default)(m, "endDate", ""), I),
                        eventStatus: c[v.toUpperCase()],
                        eventAttendanceMode: u[(0, o.default)(m, "eventAttendanceMode", "").toUpperCase()],
                        isAccessibleForFree: (0, o.default)(m, "isAccessibleForFree", !1),
                        image: O
                    }, N && {
                        previousStartDate: (0, o.default)(m, "previousStartDate", "")
                    }), E.length > 0 && {
                        offers: y
                    }), h.length > 0 && {
                        location: T
                    }), S.length > 0 && {
                        organizer: R
                    }), _.length > 0 && {
                        performer: w
                    })
                }
        },
        Et5G: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => C
            });
            var n = a("zThL"),
                r = a("q1tI"),
                o = a("lXQd"),
                i = a("j399"),
                l = a("17x9"),
                d = a.n(l),
                s = a("rid2"),
                c = a("TRpf"),
                u = a("6AUo"),
                p = a("XgaV"),
                f = a("jdkn"),
                g = a("VAjR"),
                m = a("AdJq"),
                O = (0, n.A)((0, n.A)((0, n.A)((0, n.A)((0, n.A)((0, n.A)({}, g.Wt, u.xd), g.qc, (function(e) {
                    var t, a = (0, p.N)({
                            pages: e
                        }),
                        n = (0, o.default)(a, "SECTION_PRODUCT_DESCRIPTION", {}),
                        r = n.name,
                        i = void 0 === r ? "" : r,
                        l = n.description,
                        d = void 0 === l ? "" : l,
                        s = n.skuId,
                        c = void 0 === s ? "" : s,
                        u = n.brandName,
                        g = void 0 === u ? "" : u,
                        m = (0, o.default)(e, "current.pageUrl", ""),
                        O = (0, o.default)(a, "SECTION_MEDIA.items", []),
                        E = (0, o.default)(a, "SECTION_PURCHASE.inStock", !1),
                        C = {
                            "@context": "https://schema.org",
                            "@type": "Product",
                            name: i,
                            url: m,
                            description: d,
                            image: "",
                            potentialAction: {
                                "@type": "OrderAction",
                                deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
                                target: {
                                    "@type": "EntryPoint",
                                    inLanguage: "en-US",
                                    url: "",
                                    actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform", "http://schema.org/IOSPlatform", "http://schema.org/AndroidPlatform"]
                                }
                            }
                        };
                    return C.brand = {
                        "@type": "Brand",
                        name: g
                    }, C.offers = {
                        "@type": "Offer",
                        url: m,
                        priceCurrency: "INR",
                        price: (0, f.Hh)((0, o.default)(a, "SECTION_PURCHASE.price", "")),
                        itemCondition: "http://schema.org/NewCondition",
                        availability: "http://schema.org/".concat(E ? "InStock" : "OutOfStock")
                    }, C.image = (t = O.find((function(e) {
                        return "image" === e.type
                    })), (0, o.default)(t, "url") ? t.url : ""), C.sku = c, C
                })), g.ZB, (function(e) {
                    return {
                        "@context": "https://schema.org",
                        "@type": "Website",
                        name: (0, o.default)(e, "current.title", ""),
                        url: (0, o.default)(e, "current.pageUrl", "")
                    }
                })), g.RM, u.oD), g.Kj, u.HG), g.nK, u.PH),
                E = function(e) {
                    var t = e.pageName,
                        a = e.pageObject,
                        n = e.entities,
                        l = e.pageUrl,
                        d = e.canonicalUrl,
                        c = (0, o.default)(O, t, i.default)(a, n),
                        u = d || "".concat(m.Hc4).concat(l);
                    return r.createElement(s.mg, null, r.createElement("link", {
                        rel: "canonical",
                        href: u
                    }), r.createElement("script", {
                        type: "application/ld+json"
                    }, JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "WebSite",
                        name: "Zomato",
                        url: "https://www.zomato.com"
                    })), c && r.createElement("script", {
                        type: "application/ld+json"
                    }, JSON.stringify(c)))
                };
            E.propTypes = {
                pageObject: d().instanceOf(Object),
                entities: d().instanceOf(Object),
                pageName: d().string,
                pageUrl: d().string,
                canonicalUrl: d().string
            }, E.defaultProps = {
                pageName: "",
                pageUrl: "",
                pageObject: {},
                entities: {},
                canonicalUrl: ""
            };
            const C = (0, c.Ng)((function(e) {
                return {
                    pageName: (0, o.default)(e, "pages.current.name", ""),
                    pageUrl: (0, o.default)(e, "pages.current.pageUrl", ""),
                    canonicalUrl: (0, o.default)(e, "pages.current.canonicalUrl", ""),
                    pageObject: (0, o.default)(e, "pages", {}),
                    entities: (0, o.default)(e, "entities", {})
                }
            }))(E)
        },
        XgaV: (e, t, a) => {
            a.d(t, {
                N: () => r
            });
            var n = a("lXQd"),
                r = function(e) {
                    var t = (0, n.default)(e, "pages.current.skuId", 0),
                        a = (0, n.default)(e, "pages.dotePdp", {});
                    return (0, n.default)(a, "".concat(t, ".sections"), {})
                }
        },
        jdkn: (e, t, a) => {
            a.d(t, {
                Hh: () => f,
                es: () => p
            });
            var n, r, o = a("RlfA"),
                i = (a("q1tI"), a("vOnD")),
                l = a("lXQd"),
                d = a("j399"),
                s = a("tsC6"),
                c = (a("AdJq"), a("sLkX"), a("P62M")),
                u = {
                    root: null,
                    rootMargin: "0px",
                    threshold: 1
                },
                p = function(e) {
                    var t = e.observerFn,
                        n = e.ref;
                    if ("IntersectionObserver" in a.g) {
                        var r = (0, l.default)(n, "current", null),
                            o = new IntersectionObserver(t, u);
                        return r && o.observe(r),
                            function() {
                                r && o.unobserve(r)
                            }
                    }
                    return d.default
                },
                f = function(e) {
                    return "string" != typeof e ? e : (0, c.$w)(e.slice(1).split(",").join(""))
                };
            i.default.section(n || (n = (0, o.A)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 0 1.2rem;\n  width: ", ";\n"])), (function(e) {
                return e.maxContent ? "max-content" : "100%"
            })), i.default.div(r || (r = (0, o.A)(["\n  margin: 1.6rem -1.2rem;\n  overflow: auto;\n  ", ";\n"])), s.a)
        },
        tsC6: (e, t, a) => {
            a.d(t, {
                a: () => o
            });
            var n, r = a("RlfA"),
                o = (0, a("vOnD").css)(n || (n = (0, r.A)(["\n  ::-webkit-scrollbar {\n    display: none;\n    background-color: transparent;\n    width: 0;\n    height: 0;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: transparent;\n  }\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n"])))
        }
    }
]);