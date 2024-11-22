window.cxs && window.cxs.setOptions({
    prefix: "c2-"
});
window.wsb = window.wsb || {};
window.wsb["Theme13"] = window.wsb["Theme13"] || window.radpack("@widget/LAYOUT/bs-layout13-Theme-publish-Theme").then(function(t) {
    return new t.default();
});
window.wsb['context-bs-1'] = JSON.parse("{\"renderMode\":\"PUBLISH\",\"fonts\":[\"muli\",\"quicksand\",\"lato\"],\"colors\":[\"#FFFFFF\"],\"fontScale\":\"medium\",\"locale\":\"en-GB\",\"language\":\"en\",\"internalLinks\":{\"55a70764-66dd-433a-9c0d-16f5b18ffe66\":{\"pageId\":\"9a2a249f-3c02-4ee1-906e-c6ce01964394\",\"routePath\":\"/works\"},\"fd2cf4a2-9b32-4acf-8ae0-7d2d8d3617ff\":{\"pageId\":\"46c55332-b65e-46ac-9b9d-d65bf582bd72\",\"routePath\":\"/contact\"}},\"isHomepage\":true,\"navigationMap\":{\"3a746816-ba3b-46ac-9c03-d65013ab1b0f\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"3a746816-ba3b-46ac-9c03-d65013ab1b0f\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"3c4d65db-c7af-4fbf-9c4b-a82c96c7572f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3c4d65db-c7af-4fbf-9c4b-a82c96c7572f\",\"name\":\"Biography\",\"href\":\"/biography\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"46c55332-b65e-46ac-9b9d-d65bf582bd72\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"46c55332-b65e-46ac-9b9d-d65bf582bd72\",\"name\":\"Contact \",\"href\":\"/contact\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"809f1198-1d48-4ebd-8201-0b99a87d9227\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"809f1198-1d48-4ebd-8201-0b99a87d9227\",\"name\":\"CV\",\"href\":\"/cv\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"9a2a249f-3c02-4ee1-906e-c6ce01964394\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9a2a249f-3c02-4ee1-906e-c6ce01964394\",\"name\":\"Works\",\"href\":\"/works\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ce39aedb-8190-4a71-9eb8-d23e317eaf3b\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ce39aedb-8190-4a71-9eb8-d23e317eaf3b\",\"name\":\"Privacy Policy\",\"href\":\"/privacy-policy\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"da7342cb-0b9a-4b27-b984-ebafbd19ed45\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"da7342cb-0b9a-4b27-b984-ebafbd19ed45\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"fonts\":{\"primary\":{\"id\":\"muli\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":25,\"primary\":{\"id\":\"muli\",\"name\":\"Muli\",\"url\":\"//fonts.googleapis.com/css?family=Muli:400&display=swap\",\"family\":\"'Muli', sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"quicksand\",\"name\":\"Quicksand\",\"url\":\"//fonts.googleapis.com/css?family=Quicksand:400,700&display=swap\",\"family\":\"Quicksand, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"alternate\":{\"id\":\"quicksand\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":16,\"alternate\":{\"id\":\"quicksand\",\"name\":\"Quicksand\",\"url\":\"//fonts.googleapis.com/css?family=Quicksand:400,700&display=swap\",\"family\":\"Quicksand, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"logo\":{\"id\":\"lato\",\"description\":\"Distinctive fonts that give you a friendly yet professional feel.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":19,\"logo\":{\"id\":\"lato\",\"name\":\"Lato\",\"url\":\"//fonts.googleapis.com/css?family=Lato:400,700&display=swap\",\"family\":\"'Lato', arial, sans-serif\",\"size\":16,\"weight\":700,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"2px\",\"textTransform\":\"uppercase\",\"fontWeight\":700,\"fontSize\":\"xlarge\"}}}}},\"colors\":[{\"id\":\"#FFFFFF\",\"meta\":{\"primary\":\"rgb(255, 255, 255)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}]},\"theme\":\"Theme13\"}");
Core.utils.deferBootstrap({
    elId: 'bs-1',
    componentName: '@widget/LAYOUT/bs-Hamburger-Component',
    props: JSON.parse("{\"toggleId\":\"n-11135-navId-mobile\",\"uniqueId\":\"n-11135\",\"style\":{\"color\":\"highContrast\",\"marginLeft\":\"0\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"3a3fee22-009d-41e1-bbfa-11ebef64b470\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-GB\",\"renderMode\":\"PUBLISH\"}"),
    context: JSON.parse("{\"widgetId\":\"3a3fee22-009d-41e1-bbfa-11ebef64b470\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"group\":\"HeaderMedia\",\"groupType\":\"Fill\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":0.6000000000000001}}}}}}"),
    contextKey: 'context-bs-1',
    radpack: "@widget/LAYOUT/bs-Hamburger-Component"
}, false);
window.wsb["DynamicFontScaler"] = function(e) {
    let {containerId: t, targetId: a, fontSizes: o, maxLines: r, prioritizeDefault: l} = e;
    if ("undefined" == typeof document)
        return;
    const n = document.getElementById(t)
      , i = document.getElementById(a);
    function s(e) {
        return function(e) {
            const t = parseInt(g(e, "padding-left") || 0, 10)
              , a = parseInt(g(e, "padding-right") || 0, 10);
            return e.scrollWidth + t + a
        }(e) <= n.clientWidth && function(e) {
            const t = e.offsetHeight
              , a = parseInt(g(e, "line-height"), 10) || 1;
            return Math.floor(t / a)
        }(e) <= r
    }
    function c() {
        if (!n || !i)
            return;
        if (i.hasAttribute("data-font-scaled"))
            return void function() {
                i.removeAttribute("data-last-size");
                const e = document.querySelector(`#${a}-style`);
                e && e.parentNode.removeChild(e)
            }();
        const e = Array.prototype.slice.call(n.querySelectorAll(`[data-scaler-id="scaler-${t}"]`)).sort(( (e, t) => o.indexOf(e.getAttribute("data-size")) - o.indexOf(t.getAttribute("data-size"))));
        if (n.clientWidth && e.length) {
            const t = n.style.width || "";
            n.style.width = "100%",
            e.forEach((e => {
                e.style.display = "inline-block",
                e.style.maxWidth = `${n.clientWidth}px`
            }
            ));
            const o = function(e) {
                return e.find(s) || e[e.length - 1]
            }(e);
            !function(e) {
                e.forEach((e => {
                    e.style.display = "none",
                    e.style.maxWidth = ""
                }
                ))
            }(e),
            n.style.width = t;
            const r = g(o, "font-size")
              , c = i.getAttribute("data-last-size");
            if (r && r !== c) {
                if (l) {
                    const e = g(i, "font-size");
                    if (parseInt(r, 10) >= parseInt(e, 10))
                        return
                }
                i.setAttribute("data-last-size", r);
                let e = document.querySelector(`#${a}-style`);
                e || (e = document.createElement("style"),
                e.id = `${a}-style`,
                document.head.appendChild(e)),
                e.textContent = `#${i.id} { font-size: ${r} !important; }`
            }
        }
    }
    function g(e, t) {
        return document.defaultView.getComputedStyle(e).getPropertyValue(t)
    }
    if (c(),
    window.ResizeObserver && n) {
        new ResizeObserver(( () => {
            window.requestAnimationFrame(c)
        }
        )).observe(n)
    } else
        window.addEventListener("resize", c)
}
;
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-11142\",\"targetId\":\"logo-text-11143\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":false}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-11147\",\"targetId\":\"logo-text-11148\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":false}"));
Core.utils.deferBootstrap({
    elId: 'bs-2',
    componentName: '@widget/LAYOUT/bs-LinkAwareComponent',
    props: JSON.parse("{\"toggleId\":\"more-11150\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBarId-11145\",\"widgetId\":\"3a3fee22-009d-41e1-bbfa-11ebef64b470\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-GB\",\"renderMode\":\"PUBLISH\"}"),
    context: JSON.parse("{\"widgetId\":\"3a3fee22-009d-41e1-bbfa-11ebef64b470\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"group\":\"Nav\",\"groupType\":\"Default\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":0.6000000000000001}}}}}}"),
    contextKey: 'context-bs-1',
    radpack: "@widget/LAYOUT/bs-LinkAwareComponent"
}, false);
window.wsb["CalculateNavSpacing"] = function(e) {
    let {containerId: t, navId: a, logoImageId: n, inlineUtilitiesMenu: l} = e;
    let i, o, r, c, s, g, p;
    const d = document.getElementById(a);
    function u() {
        if (o || !d || !f(d))
            return;
        r = Array.from(d.children),
        r.forEach(v),
        l && (c = r.pop(),
        w(c)),
        s = r.pop();
        const e = s.querySelector("ul");
        g = e ? Array.from(e.children) : [],
        d.style.whiteSpace = "normal",
        p = f(d.parentElement, "floor"),
        d.style.whiteSpace = "nowrap",
        window.requestAnimationFrame(y)
    }
    function y() {
        const e = r.map((e => f(e)));
        const t = c ? f(c) : 0
          , a = p - t;
        if (I(e) > a) {
            const t = f(s);
            for (let n = I(e); n + t > a; n -= e.pop())
                ;
            const n = e.length;
            b(r, 0, n, w),
            b(g, 0, n, h),
            b(r, n, r.length, h),
            b(g, n, r.length, w),
            w(s)
        } else
            r.forEach(w),
            h(s);
        window.dispatchEvent(new Event("NavItemsResized"))
    }
    function m() {
        window.innerWidth < 1024 || (window.clearTimeout(i),
        i = window.setTimeout(u, 50))
    }
    function b(e, t, a, n) {
        e = e.slice(t, a).map(n).concat(e.slice(a))
    }
    function v(e) {
        e.style.visibility = "hidden",
        e.style.display = "",
        e.classList.remove("visible")
    }
    function h(e) {
        e.style.display = "none",
        e.classList.remove("visible")
    }
    function w(e) {
        e.style.visibility = "visible",
        e.style.display = "",
        e.classList.add("visible")
    }
    function I(e) {
        return e.reduce(( (e, t) => e + t), 0)
    }
    function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ceil";
        return "ceil" === t ? Math.ceil(e.getBoundingClientRect().width) : Math.floor(e.getBoundingClientRect().width)
    }
    if (m(),
    window.ResizeObserver) {
        const e = new window.ResizeObserver(m);
        return [document.getElementById(t), document.getElementById(n)].forEach((t => t && e.observe(t))),
        () => {
            o = !0,
            e.disconnect()
        }
    }
    return window.addEventListener("resize", m, {
        passive: !0
    }),
    () => {
        o = !0,
        window.removeEventListener("resize", m, {
            passive: !0
        })
    }
}
;
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-11149\",\"logoImageId\":\"logo-11144\",\"containerId\":\"navBarId-11145\"}"));
window.wsb["StickyNav"] = function(e) {
    let {uniqueId: t, logoHeight: o, hasAnimation: a, anchorId: n} = e;
    const r = o > 104 ? 120 : 80;
    let i, c, s, l, d = window.innerWidth < 768, g = 0;
    const u = () => {
        const e = Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e => e.offsetHeight));
        if (!e)
            return null;
        const t = window.getComputedStyle(e);
        return s = t.getPropertyValue("box-shadow"),
        l = t.getPropertyValue("margin-top"),
        e
    }
      , p = {
        i18nBar: document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),
        stickyNav: document.getElementById(t),
        stickyNavParent: document.querySelector("[data-stickynav-wrapper]"),
        logo: u(),
        freemiumAd: document.querySelector("[data-freemium-ad]"),
        anchor: document.getElementById(n)
    }
      , y = () => {
        const {stickyNav: e, stickyNavParent: t} = p;
        t.style.height = `${e.offsetHeight}px`
    }
    ;
    new IntersectionObserver((e => e.forEach((e => {
        let {isIntersecting: t} = e;
        return window.requestAnimationFrame(( () => (e => {
            var t;
            if (c === e)
                return;
            const {stickyNav: n, logo: i, i18nBar: u, freemiumAd: h, stickyNavParent: m} = p;
            p.freemiumAd = h || document.querySelector("[data-freemium-ad]"),
            g = g || (null === (t = p.freemiumAd) || void 0 === t ? void 0 : t.offsetHeight),
            e && m && !m.style.height && y(),
            u && (u.style.display = e ? "none" : "flex"),
            i && (i.style.cssText = e ? `max-height:${d ? 50 : 64}px;box-shadow:none;margin-top:0px;` : `max-height:${d ? r : o}px;box-shadow:${s};margin-top:${l};`,
            "HEADER_LOGO_OVERHANG_CONTAINER" === i.parentNode.getAttribute("data-aid") && (i.parentNode.style.height = e ? "auto" : "1em")),
            n.style.cssText = e ? `position:fixed;z-index:10000;left:0px;right:0px;top:${g || 0}px;` : "",
            a && (e ? n.classList.add("sticky-animate", "x-c-bg") : n.classList.remove("sticky-animate", "x-c-bg")),
            c = e
        }
        )(!t)))
    }
    )))).observe(p.anchor);
    const h = /#[^\\?]*/;
    function m(e) {
        const t = (e.target.href.match(h)[0] || []).slice(1)
          , o = document.getElementById(t);
        o && f(o)
    }
    function f(e) {
        const t = p.stickyNav.clientHeight;
        let o = e.offsetTop;
        const a = setInterval(( () => {
            e.offsetTop === o ? (clearInterval(a),
            scrollTo({
                top: e.offsetTop - t
            })) : o = e.offsetTop
        }
        ), 300)
    }
    if (Array.from(document.querySelectorAll("a")).filter((e => h.test(e.href))).forEach((e => e.addEventListener("click", m))),
    window.location.hash) {
        const e = document.getElementById(window.location.hash.slice(1));
        e && f(e)
    }
    window.addEventListener("resize", ( () => {
        clearTimeout(i),
        i = setTimeout(( () => {
            d = window.innerWidth < 768,
            p.logo = u(),
            y()
        }
        ), 250)
    }
    ), {
        passive: !0
    })
}
;
window.wsb["StickyNav"](JSON.parse("{\"uniqueId\":\"header_stickynav11137\",\"anchorId\":\"header_stickynav-anchor11138\",\"logoHeight\":80,\"hasAnimation\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-11168\",\"targetId\":\"dynamic-tagline-11169\",\"fontSizes\":[\"xxxlarge\",\"xxlarge\",\"xlarge\"],\"maxLines\":4}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-11170\",\"targetId\":\"dynamic-tagline-11171\",\"fontSizes\":[\"xxxlarge\",\"xxlarge\",\"xlarge\"],\"maxLines\":4}"));
Core.utils.deferBootstrap({
    elId: 'bs-3',
    componentName: '@widget/SUBSCRIBE/bs-subscribe2-subscribe-form',
    props: JSON.parse("{\"upgradeable\":false,\"preset\":\"subscribe2\",\"id\":\"25b21a72-00a1-41f6-8c6a-bdc21f82a55f\",\"isInternalPage\":false,\"env\":\"production\",\"websiteId\":\"4e486ff7-df00-4f44-a20e-94b70608754e\",\"accountId\":\"47d108cc-7ecb-11ec-828d-3417ebe73f23\",\"hasNonCommercePlan\":true,\"couponToggleHidden\":false,\"sectionTitle\":\"Subscribe\",\"staticContent\":{\"defaultButtonLabel\":\"Sign Up\",\"emailPlaceholderText\":\"Email Address\",\"verificationText\":\"To let us know it's really you and that you'd like to receive emails from us, please click the link in the confirmation email we just sent you. You can unsubscribe from these emails at any time.\",\"emailErrorMessage\":\"Please enter a valid email address.\"},\"confirmationMessage\":\"Excellent! We're excited to send you our next update.\",\"couponConfirmationMessage\":\"Thanks so much for signing up!\",\"description\":\"Be the first to hear about upcoming exhibitions and exciting collaborations.\",\"couponDescription\":\"Get 10% off your first purchase when you sign up for our newsletter!\",\"inputPlaceholder\":\"Email Address\",\"subscribeButtonLabel\":\"Sign up\",\"couponToggle\":false,\"widgetId\":\"25b21a72-00a1-41f6-8c6a-bdc21f82a55f\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-GB\",\"renderMode\":\"PUBLISH\"}"),
    context: JSON.parse("{\"widgetId\":\"25b21a72-00a1-41f6-8c6a-bdc21f82a55f\",\"widgetType\":\"SUBSCRIBE\",\"widgetPreset\":\"subscribe2\",\"order\":1,\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"group\":\"Group\",\"groupType\":\"Default\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),
    contextKey: 'context-bs-1',
    radpack: "@widget/SUBSCRIBE/bs-subscribe2-subscribe-form"
}, false);
Core.utils.deferBootstrap({
    elId: 'bs-4',
    componentName: '@widget/GALLERY/bs-gallery3-Gallery',
    props: JSON.parse("{\"upgradeable\":false,\"preset\":\"gallery3\",\"id\":\"9188e446-b95f-47f5-8ef5-7c323bc1582e\",\"galleryImages\":[{\"image\":{\"hasAlpha\":true,\"width\":\"100%\",\"left\":\"0%\",\"height\":\"100%\",\"position\":\"50% 50%\",\"scale\":0.04567116759332804,\"editedAspectRatio\":\"0.9809372517871326\",\"imageDimension\":null,\"overlayAlpha\":0,\"colors\":[{\"hex\":\"#6ca7f9\",\"rgb\":[108,167,249],\"hsluv\":[250.4911904034935,92.04425562188341,67.5301662880516],\"distance\":77.43040071247187},{\"hex\":\"#5d8fcf\",\"rgb\":[93,143,207],\"hsluv\":[248.87694863179723,65.56217356757388,58.27405966194192],\"distance\":65.52160187600987},{\"hex\":\"#426aa2\",\"rgb\":[66,106,162],\"hsluv\":[250.77280999906833,68.58869167623595,44.172517205912875],\"distance\":51.72797751242277},{\"hex\":\"#294f84\",\"rgb\":[41,79,132],\"hsluv\":[252.26077432449742,77.84066057563828,33.279958737724336],\"distance\":41.76474916841177},{\"hex\":\"#464b53\",\"rgb\":[70,75,83],\"hsluv\":[246.14319892034013,15.02195301595109,31.58720715482199],\"distance\":33.773133564529154},{\"hex\":\"#3a4655\",\"rgb\":[58,70,85],\"hsluv\":[244.0330883312858,33.84488501987224,29.131863772474325],\"distance\":33.194221964270675},{\"hex\":\"#293440\",\"rgb\":[41,52,64],\"hsluv\":[241.94227096015425,37.769672778371536,21.106718393878765],\"distance\":25.555747535494124},{\"hex\":\"#31363a\",\"rgb\":[49,54,58],\"hsluv\":[232.69947961774557,16.694543516138257,22.196088353794664],\"distance\":24.511930148791116},{\"hex\":\"#31352f\",\"rgb\":[49,53,47],\"hsluv\":[115.25100289125213,14.197260400423398,21.503201219390725],\"distance\":23.24306893413099},{\"hex\":\"#172840\",\"rgb\":[23,40,64],\"hsluv\":[250.50609982281088,66.01235202741515,15.775455520625336],\"distance\":23.072541000652436},{\"hex\":\"#0a1e38\",\"rgb\":[10,30,56],\"hsluv\":[252.01234869639723,81.85381374291097,11.065686812301681],\"distance\":19.951102488527216},{\"hex\":\"#020f27\",\"rgb\":[2,15,39],\"hsluv\":[255.60894984086042,91.67116120413347,4.501104885567518],\"distance\":4.501104885567518}],\"top\":\"0%\",\"oHeight\":2518,\"oWidth\":2470,\"filter\":\"NONE\",\"image\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/blob.png\",\"coordinates\":{\"x\":0,\"y\":0},\"rotation\":\"0\"}},{\"image\":{\"hasAlpha\":false,\"width\":\"100%\",\"left\":\"0%\",\"height\":\"100%\",\"position\":\"51.274223520042476% 28.79076086956522%\",\"scale\":0.10473588342440801,\"editedAspectRatio\":\"1.02367941712204\",\"imageDimension\":null,\"overlayAlpha\":0,\"colors\":[{\"hex\":\"#a9a6b9\",\"rgb\":[169,166,185],\"hsluv\":[272.08399938291893,18.09133995205291,68.65827634221743],\"distance\":71.2231992245975},{\"hex\":\"#9f9db1\",\"rgb\":[159,157,177],\"hsluv\":[269.72744289642833,17.46448462987445,65.24834297279894],\"distance\":67.7440343327209},{\"hex\":\"#4d4e80\",\"rgb\":[77,78,128],\"hsluv\":[265.301975457791,30.224628904368732,35.0354886999698],\"distance\":38.794901522233864},{\"hex\":\"#535464\",\"rgb\":[83,84,100],\"hsluv\":[263.64186014512353,10.402207228980062,36.03551528326845],\"distance\":37.80807450656958},{\"hex\":\"#262661\",\"rgb\":[38,38,97],\"hsluv\":[265.8743202181786,52.48693497980873,18.548768168352623],\"distance\":24.536001444717325},{\"hex\":\"#272756\",\"rgb\":[39,39,86],\"hsluv\":[265.8743202181788,43.40265636824495,18.079952810031095],\"distance\":23.15875822523942},{\"hex\":\"#313230\",\"rgb\":[49,50,48],\"hsluv\":[107.71355583468393,5.170732004853248,20.536188819468705],\"distance\":21.35246634171704},{\"hex\":\"#303030\",\"rgb\":[48,48,48],\"hsluv\":[0,1.9030441739252076e-12,19.778770784891982],\"distance\":19.778770784892174},{\"hex\":\"#242429\",\"rgb\":[36,36,41],\"hsluv\":[265.87432021819046,5.207932425479499,14.314645541363841],\"distance\":15.573978562295654},{\"hex\":\"#232127\",\"rgb\":[35,33,39],\"hsluv\":[279.3129589719137,8.37710551301351,13.113920390807415],\"distance\":14.727500272586305}],\"top\":\"0%\",\"oHeight\":1098,\"oWidth\":1124,\"filter\":\"NONE\",\"image\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/Screenshot%202021-08-14%20at%2012.04.58.png\",\"coordinates\":{\"x\":0,\"y\":0},\"rotation\":\"0\"}},{\"image\":{\"hasAlpha\":false,\"width\":\"100%\",\"left\":\"0%\",\"height\":\"100%\",\"position\":\"50% 50%\",\"scale\":0.04703476482617587,\"editedAspectRatio\":\"1.047034764826176\",\"imageDimension\":null,\"overlayAlpha\":0,\"colors\":[{\"hex\":\"#feba29\",\"rgb\":[254,186,41],\"hsluv\":[54.09431493385591,95.42808458805845,79.532835292984],\"distance\":89.22590573771723},{\"hex\":\"#c2932d\",\"rgb\":[194,147,45],\"hsluv\":[56.86791644876393,90.68403073479458,63.5472217466274],\"distance\":72.77359125468675},{\"hex\":\"#463fde\",\"rgb\":[70,63,222],\"hsluv\":[266.5661989802381,84.27252952145811,37.92634172233992],\"distance\":47.094056338319724},{\"hex\":\"#3c3ca6\",\"rgb\":[60,60,166],\"hsluv\":[265.87432021817835,61.40447401434519,31.554633481294857],\"distance\":38.4336206611132},{\"hex\":\"#444642\",\"rgb\":[68,70,66],\"hsluv\":[107.84378934270985,7.8772258080480135,29.300938789436103],\"distance\":30.38822745174843},{\"hex\":\"#464542\",\"rgb\":[70,69,66],\"hsluv\":[73.01230903875266,7.285532830752316,29.172596861765854],\"distance\":30.103962114393177},{\"hex\":\"#404245\",\"rgb\":[64,66,69],\"hsluv\":[244.07788776880307,6.686714749815069,27.77561388942022],\"distance\":29.122279497092848},{\"hex\":\"#313330\",\"rgb\":[49,51,48],\"hsluv\":[114.9491631673758,7.309064096033375,20.867360530318834],\"distance\":21.91757017094266},{\"hex\":\"#222737\",\"rgb\":[34,39,55],\"hsluv\":[256.6730989776319,31.338597784310917,15.761054151867022],\"distance\":19.607894760791535},{\"hex\":\"#272729\",\"rgb\":[39,39,41],\"hsluv\":[265.87432021821263,1.9489052403000517,15.635570182365722],\"distance\":16.56900048477965},{\"hex\":\"#232529\",\"rgb\":[35,37,41],\"hsluv\":[249.25626766713262,11.362329640330945,14.557793876202869],\"distance\":16.386405361533555},{\"hex\":\"#252428\",\"rgb\":[37,36,40],\"hsluv\":[276.0328002993118,4.998964257607072,14.37830989794113],\"distance\":15.644964102311036}],\"top\":\"0%\",\"oHeight\":2445,\"oWidth\":2560,\"filter\":\"NONE\",\"image\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/Screenshot%202021-08-09%20at%2013.36.38.png\",\"coordinates\":{\"x\":7.105427357601002e-15,\"y\":0},\"rotation\":\"0\"}}],\"viewDevice\":null,\"staticContent\":{\"showMore\":\"Show More\",\"demoCaption1\":\"Use captions to provide more information about your photos\",\"demoCaption2\":\"Captions can prompt viewers to act. You can even insert a link\",\"demoCaption3\":\"Use the caption to call out things the viewer may not notice\",\"showLess\":\"Show Less\"},\"title\":\"Works Gallery\",\"autoplay\":true,\"autoplayDelay\":\"3.5\",\"transitionType\":\"slide\",\"showSlideNum\":true,\"showArrows\":false,\"fullBleed\":true,\"images\":[{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/blob.png/:/\",\"index\":0,\"position\":\"50% 50%\",\"imageData\":{\"hasAlpha\":true,\"width\":\"100%\",\"left\":\"0%\",\"height\":\"100%\",\"position\":\"50% 50%\",\"scale\":0.04567116759332804,\"editedAspectRatio\":\"0.9809372517871326\",\"imageDimension\":null,\"overlayAlpha\":0,\"colors\":[{\"hex\":\"#6ca7f9\",\"rgb\":[108,167,249],\"hsluv\":[250.4911904034935,92.04425562188341,67.5301662880516],\"distance\":77.43040071247187},{\"hex\":\"#5d8fcf\",\"rgb\":[93,143,207],\"hsluv\":[248.87694863179723,65.56217356757388,58.27405966194192],\"distance\":65.52160187600987},{\"hex\":\"#426aa2\",\"rgb\":[66,106,162],\"hsluv\":[250.77280999906833,68.58869167623595,44.172517205912875],\"distance\":51.72797751242277},{\"hex\":\"#294f84\",\"rgb\":[41,79,132],\"hsluv\":[252.26077432449742,77.84066057563828,33.279958737724336],\"distance\":41.76474916841177},{\"hex\":\"#464b53\",\"rgb\":[70,75,83],\"hsluv\":[246.14319892034013,15.02195301595109,31.58720715482199],\"distance\":33.773133564529154},{\"hex\":\"#3a4655\",\"rgb\":[58,70,85],\"hsluv\":[244.0330883312858,33.84488501987224,29.131863772474325],\"distance\":33.194221964270675},{\"hex\":\"#293440\",\"rgb\":[41,52,64],\"hsluv\":[241.94227096015425,37.769672778371536,21.106718393878765],\"distance\":25.555747535494124},{\"hex\":\"#31363a\",\"rgb\":[49,54,58],\"hsluv\":[232.69947961774557,16.694543516138257,22.196088353794664],\"distance\":24.511930148791116},{\"hex\":\"#31352f\",\"rgb\":[49,53,47],\"hsluv\":[115.25100289125213,14.197260400423398,21.503201219390725],\"distance\":23.24306893413099},{\"hex\":\"#172840\",\"rgb\":[23,40,64],\"hsluv\":[250.50609982281088,66.01235202741515,15.775455520625336],\"distance\":23.072541000652436},{\"hex\":\"#0a1e38\",\"rgb\":[10,30,56],\"hsluv\":[252.01234869639723,81.85381374291097,11.065686812301681],\"distance\":19.951102488527216},{\"hex\":\"#020f27\",\"rgb\":[2,15,39],\"hsluv\":[255.60894984086042,91.67116120413347,4.501104885567518],\"distance\":4.501104885567518}],\"top\":\"0%\",\"oHeight\":2518,\"oWidth\":2470,\"filter\":\"NONE\",\"image\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/blob.png\",\"coordinates\":{\"x\":0,\"y\":0},\"rotation\":\"0\",\"src\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/blob.png\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/Screenshot%202021-08-14%20at%2012.04.58.png/:/\",\"index\":1,\"position\":\"51.274223520042476% 28.79076086956522%\",\"imageData\":{\"hasAlpha\":false,\"width\":\"100%\",\"left\":\"0%\",\"height\":\"100%\",\"position\":\"51.274223520042476% 28.79076086956522%\",\"scale\":0.10473588342440801,\"editedAspectRatio\":\"1.02367941712204\",\"imageDimension\":null,\"overlayAlpha\":0,\"colors\":[{\"hex\":\"#a9a6b9\",\"rgb\":[169,166,185],\"hsluv\":[272.08399938291893,18.09133995205291,68.65827634221743],\"distance\":71.2231992245975},{\"hex\":\"#9f9db1\",\"rgb\":[159,157,177],\"hsluv\":[269.72744289642833,17.46448462987445,65.24834297279894],\"distance\":67.7440343327209},{\"hex\":\"#4d4e80\",\"rgb\":[77,78,128],\"hsluv\":[265.301975457791,30.224628904368732,35.0354886999698],\"distance\":38.794901522233864},{\"hex\":\"#535464\",\"rgb\":[83,84,100],\"hsluv\":[263.64186014512353,10.402207228980062,36.03551528326845],\"distance\":37.80807450656958},{\"hex\":\"#262661\",\"rgb\":[38,38,97],\"hsluv\":[265.8743202181786,52.48693497980873,18.548768168352623],\"distance\":24.536001444717325},{\"hex\":\"#272756\",\"rgb\":[39,39,86],\"hsluv\":[265.8743202181788,43.40265636824495,18.079952810031095],\"distance\":23.15875822523942},{\"hex\":\"#313230\",\"rgb\":[49,50,48],\"hsluv\":[107.71355583468393,5.170732004853248,20.536188819468705],\"distance\":21.35246634171704},{\"hex\":\"#303030\",\"rgb\":[48,48,48],\"hsluv\":[0,1.9030441739252076e-12,19.778770784891982],\"distance\":19.778770784892174},{\"hex\":\"#242429\",\"rgb\":[36,36,41],\"hsluv\":[265.87432021819046,5.207932425479499,14.314645541363841],\"distance\":15.573978562295654},{\"hex\":\"#232127\",\"rgb\":[35,33,39],\"hsluv\":[279.3129589719137,8.37710551301351,13.113920390807415],\"distance\":14.727500272586305}],\"top\":\"0%\",\"oHeight\":1098,\"oWidth\":1124,\"filter\":\"NONE\",\"image\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/Screenshot%202021-08-14%20at%2012.04.58.png\",\"coordinates\":{\"x\":0,\"y\":0},\"rotation\":\"0\",\"src\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/Screenshot%202021-08-14%20at%2012.04.58.png\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/Screenshot%202021-08-09%20at%2013.36.38.png/:/\",\"index\":2,\"position\":\"50% 50%\",\"imageData\":{\"hasAlpha\":false,\"width\":\"100%\",\"left\":\"0%\",\"height\":\"100%\",\"position\":\"50% 50%\",\"scale\":0.04703476482617587,\"editedAspectRatio\":\"1.047034764826176\",\"imageDimension\":null,\"overlayAlpha\":0,\"colors\":[{\"hex\":\"#feba29\",\"rgb\":[254,186,41],\"hsluv\":[54.09431493385591,95.42808458805845,79.532835292984],\"distance\":89.22590573771723},{\"hex\":\"#c2932d\",\"rgb\":[194,147,45],\"hsluv\":[56.86791644876393,90.68403073479458,63.5472217466274],\"distance\":72.77359125468675},{\"hex\":\"#463fde\",\"rgb\":[70,63,222],\"hsluv\":[266.5661989802381,84.27252952145811,37.92634172233992],\"distance\":47.094056338319724},{\"hex\":\"#3c3ca6\",\"rgb\":[60,60,166],\"hsluv\":[265.87432021817835,61.40447401434519,31.554633481294857],\"distance\":38.4336206611132},{\"hex\":\"#444642\",\"rgb\":[68,70,66],\"hsluv\":[107.84378934270985,7.8772258080480135,29.300938789436103],\"distance\":30.38822745174843},{\"hex\":\"#464542\",\"rgb\":[70,69,66],\"hsluv\":[73.01230903875266,7.285532830752316,29.172596861765854],\"distance\":30.103962114393177},{\"hex\":\"#404245\",\"rgb\":[64,66,69],\"hsluv\":[244.07788776880307,6.686714749815069,27.77561388942022],\"distance\":29.122279497092848},{\"hex\":\"#313330\",\"rgb\":[49,51,48],\"hsluv\":[114.9491631673758,7.309064096033375,20.867360530318834],\"distance\":21.91757017094266},{\"hex\":\"#222737\",\"rgb\":[34,39,55],\"hsluv\":[256.6730989776319,31.338597784310917,15.761054151867022],\"distance\":19.607894760791535},{\"hex\":\"#272729\",\"rgb\":[39,39,41],\"hsluv\":[265.87432021821263,1.9489052403000517,15.635570182365722],\"distance\":16.56900048477965},{\"hex\":\"#232529\",\"rgb\":[35,37,41],\"hsluv\":[249.25626766713262,11.362329640330945,14.557793876202869],\"distance\":16.386405361533555},{\"hex\":\"#252428\",\"rgb\":[37,36,40],\"hsluv\":[276.0328002993118,4.998964257607072,14.37830989794113],\"distance\":15.644964102311036}],\"top\":\"0%\",\"oHeight\":2445,\"oWidth\":2560,\"filter\":\"NONE\",\"image\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/Screenshot%202021-08-09%20at%2013.36.38.png\",\"coordinates\":{\"x\":7.105427357601002e-15,\"y\":0},\"rotation\":\"0\",\"src\":\"//img1.wsimg.com/isteam/ip/4e486ff7-df00-4f44-a20e-94b70608754e/Screenshot%202021-08-09%20at%2013.36.38.png\"}}],\"renderAsThumbnail\":false,\"widgetId\":\"9188e446-b95f-47f5-8ef5-7c323bc1582e\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-GB\",\"renderMode\":\"PUBLISH\"}"),
    context: JSON.parse("{\"widgetId\":\"9188e446-b95f-47f5-8ef5-7c323bc1582e\",\"widgetType\":\"GALLERY\",\"widgetPreset\":\"gallery3\",\"order\":3,\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"group\":\"Section\",\"groupType\":\"Banner\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),
    contextKey: 'context-bs-1',
    radpack: "@widget/GALLERY/bs-gallery3-Gallery"
}, false);
window.wsb["CookieBannerScript"] = function({id: e, acceptCookie: t, dismissCookie: o}) {
    let a, n, i;
    function l(e, t=60) {
        const o = new Date;
        o.setTime(o.getTime() + 864e5 * t);
        const a = `expires=${o.toUTCString()}`;
        document.cookie = `${e}=true;${a};path=/`
    }
    function r(e) {
        return document.cookie.includes(e)
    }
    function s() {
        n && n.removeEventListener("click", c),
        i && i.removeEventListener("click", p),
        a.style.display = "none"
    }
    function c(e) {
        e.preventDefault(),
        g(),
        l(o),
        l(t),
        s()
    }
    function p(e) {
        var a;
        e.preventDefault(),
        l(o),
        r(t) && (a = t,
        document.cookie = `${a}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),
        s()
    }
    function g() {
        window._allowCT = !0,
        window._allowCTListener && window._allowCTListener.forEach((e => e()))
    }
    r(t) ? g() : r(o) || setTimeout(( () => {
        a = document.getElementById(`${e}-banner`),
        n = document.getElementById(`${e}-accept`),
        i = document.getElementById(`${e}-decline`),
        n && n.addEventListener("click", c),
        i && i.addEventListener("click", p),
        a.style.transform = "translateY(-500px)"
    }
    ), 200)
}
;
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"da12f3ed-65a9-4721-958a-bc79fab5d375\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-11134').addEventListener('click', function() {}, false);
var t = document.createElement("script");
t.type = "text/javascript",
t.addEventListener("load", () => {
    window.tti.calculateTTI( ({name: t, value: e}={}) => {
        let i = {
            "wam_site_hasPopupWidget": false,
            "wam_site_hasMessagingWidget": false,
            "wam_site_headerTreatment": "Fill",
            "wam_site_hasSlideshow": false,
            "wam_site_hasFreemiumBanner": false,
            "wam_site_homepageFirstWidgetType": "CONTENT",
            "wam_site_homepageFirstWidgetPreset": "content4",
            "wam_site_businessCategory": "artists",
            "wam_site_theme": "layout13",
            "wam_site_locale": "en-GB",
            "wam_site_fontPack": "muli",
            "wam_site_cookieBannerEnabled": true,
            "wam_site_membershipEnabled": true,
            "wam_site_hasHomepageHTML": false,
            "wam_site_hasHomepageShop": false,
            "wam_site_hasHomepageOla": false,
            "wam_site_hasHomepageBlog": false,
            "wam_site_hasShop": false,
            "wam_site_hasOla": false,
            "wam_site_planType": "personal",
            "wam_site_isHomepage": true,
            "wam_site_htmlWidget": false
        };
        window.networkInfo && window.networkInfo.downlink && (i = Object.assign({}, i, {
            ["wam_site_networkSpeed"]: window.networkInfo.downlink.toFixed(2)
        })),
        window.tti.setCustomProperties(i),
        window.tti._collectVitals({
            name: t,
            value: e
        })
    }
    )
}
),
t.setAttribute("src", "//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),
document.body.appendChild(t);
