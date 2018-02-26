/*Smoothscroll.js*/

! function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports && "object" == typeof module ? module.exports = e() : t.smoothScroll = e()
}(this, function () {
    "use strict";
    if ("object" == typeof window && void 0 !== document.querySelectorAll && void 0 !== window.pageYOffset && void 0 !== history.pushState) {
        for (var t, e = function (t) {
                if ("HTML" === t.nodeName) return -window.pageYOffset;
                var e, n, i = t.getBoundingClientRect().top + window.pageYOffset,
                    o = (e = document.body, n = document.documentElement, Math.max(e.scrollHeight, e.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)),
                    s = window.innerHeight;
                return i + s > o ? o - s : i
            }, n = function (t, e, n, i) {
                return n > i ? e : t + (e - t) * (.5 > (o = n / i) ? 4 * o * o * o : (o - 1) * (2 * o - 2) * (2 * o - 2) + 1);
                var o
            }, i = function (t, i, o, s) {
                i = i || 1250, s = s || window;
                var r = window.pageYOffset;
                if ("number" == typeof t) var a = parseInt(t);
                else a = e(t);
                var f = Date.now(),
                    c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                        window.setTimeout(t, 15)
                    },
                    l = function () {
                        var e = Date.now() - f;
                        s !== window ? s.scrollTop = n(r, a, e, i) : window.scroll(0, n(r, a, e, i)), e > i ? "function" == typeof o && o(t) : c(l)
                    };
                l()
            }, o = function (t) {
                t.preventDefault(), i(document.getElementById(this.hash.substring(1)), 1250)
            }, s = document.querySelectorAll('#js-nav a[href^="#"]'), r = s.length; t = s[--r];) t.addEventListener("click", o, !1);
        return i
    }
}),
function () {
    "use strict";

    function t() {
        for (; s.length;) s[0](), s.shift()
    }

    function e(t) {
        this.a = f, this.b = void 0, this.f = [];
        var e = this;
        try {
            t(function (t) {
                ! function t(e, n) {
                    if (e.a === f) {
                        if (n === e) throw new TypeError("Promise settled with itself.");
                        var s = !1;
                        try {
                            var r = n && n.then;
                            if (null !== n && "object" == typeof n && "function" == typeof r) return void r.call(n, function (n) {
                                s || t(e, n), s = !0
                            }, function (t) {
                                s || i(e, t), s = !0
                            })
                        } catch (t) {
                            return void(s || i(e, t))
                        }
                        e.a = 0, e.b = n, o(e)
                    }
                }(e, t)
            }, function (t) {
                i(e, t)
            })
        } catch (t) {
            i(e, t)
        }
    }

    function n(t) {
        return new e(function (e) {
            e(t)
        })
    }

    function i(t, e) {
        if (t.a === f) {
            if (e === t) throw new TypeError("Promise settled with itself.");
            t.a = 1, t.b = e, o(t)
        }
    }

    function o(t) {
        var e;
        e = function () {
            if (t.a !== f)
                for (; t.f.length;) {
                    var e = (o = t.f.shift())[0],
                        n = o[1],
                        i = o[2],
                        o = o[3];
                    try {
                        0 === t.a ? i("function" == typeof e ? e.call(void 0, t.b) : t.b) : 1 === t.a && ("function" == typeof n ? i(n.call(void 0, t.b)) : o(t.b))
                    } catch (t) {
                        o(t)
                    }
                }
        }, s.push(e), 1 === s.length && a()
    }
    var s = [];
    if (window.MutationObserver) {
        var r = document.createElement("div");
        new MutationObserver(t).observe(r, {
            attributes: !0
        });
        var a = function () {
            r.setAttribute("x", 0)
        }
    } else a = function () {
        setTimeout(t)
    };
    var f = 2;
    e.prototype.g = function (t) {
        return this.c(void 0, t)
    }, e.prototype.c = function (t, n) {
        var i = this;
        return new e(function (e, s) {
            i.f.push([t, n, e, s]), o(i)
        })
    }, window.Promise || (window.Promise = e, window.Promise.resolve = n, window.Promise.reject = function (t) {
        return new e(function (e, n) {
            n(t)
        })
    }, window.Promise.race = function (t) {
        return new e(function (e, i) {
            for (var o = 0; o < t.length; o += 1) n(t[o]).c(e, i)
        })
    }, window.Promise.all = function (t) {
        return new e(function (e, i) {
            function o(n) {
                return function (i) {
                    r[n] = i, (s += 1) === t.length && e(r)
                }
            }
            var s = 0,
                r = [];
            0 === t.length && e(r);
            for (var a = 0; a < t.length; a += 1) n(t[a]).c(o(a), i)
        })
    }, window.Promise.prototype.then = e.prototype.c, window.Promise.prototype.catch = e.prototype.g)
}(),
function () {
    "use strict";

    function t(t) {
        this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(t)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.g = document.createElement("span"), this.f = -1, this.b.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.g.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;", this.b.appendChild(this.h), this.c.appendChild(this.g), this.a.appendChild(this.b), this.a.appendChild(this.c)
    }

    function e(t, e, n) {
        t.a.style.cssText = "min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:" + e + ";" + n
    }

    function n(t) {
        var e = t.a.offsetWidth,
            n = e + 100;
        return t.g.style.width = n + "px", t.c.scrollLeft = n, t.b.scrollLeft = t.b.scrollWidth + 100, t.f !== e && (t.f = e, !0)
    }

    function i(t, e) {
        t.b.addEventListener("scroll", function () {
            n(t) && null !== t.a.parentNode && e(t.f)
        }, !1), t.c.addEventListener("scroll", function () {
            n(t) && null !== t.a.parentNode && e(t.f)
        }, !1), n(t)
    }

    function o(t, e) {
        var n = e || {};
        this.family = t, this.style = n.style || "normal", this.variant = n.variant || "normal", this.weight = n.weight || "normal", this.stretch = n.stretch || "normal", this.featureSettings = n.featureSettings || "normal"
    }
    var s = null;
    o.prototype.a = function (n, o) {
        var r = n || "BESbswy",
            a = o || 3e3,
            f = "font-style:" + this.style + ";font-variant:" + this.variant + ";font-weight:" + this.weight + ";font-stretch:" + this.stretch + ";font-feature-settings:" + this.featureSettings + ";-moz-font-feature-settings:" + this.featureSettings + ";-webkit-font-feature-settings:" + this.featureSettings + ";",
            c = document.createElement("div"),
            l = new t(r),
            u = new t(r),
            d = new t(r),
            h = -1,
            p = -1,
            w = -1,
            m = -1,
            v = -1,
            y = -1,
            g = this;
        return new Promise(function (t, n) {
            function o() {
                null !== c.parentNode && c.parentNode.removeChild(c)
            }

            function r() {
                if ((-1 !== h && -1 !== p || -1 !== h && -1 !== w || -1 !== p && -1 !== w) && (h === p || h === w || p === w)) {
                    if (null === s) {
                        var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                        s = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
                    }
                    s && (h === m && p === m && w === m || h === v && p === v && w === v || h === y && p === y && w === y) || (o(), t(g))
                }
            }
            var b;
            b = function () {
                var t = Date.now();
                e(l, "sans-serif", f), e(u, "serif", f), e(d, "monospace", f), c.appendChild(l.a), c.appendChild(u.a), c.appendChild(d.a), document.body.appendChild(c), m = l.a.offsetWidth, v = u.a.offsetWidth, y = d.a.offsetWidth,
                    function e() {
                        if (Date.now() - t >= a) o(), n(g);
                        else {
                            var i = document.hidden;
                            (!0 === i || void 0 === i) && (h = l.a.offsetWidth, p = u.a.offsetWidth, w = d.a.offsetWidth, r()), setTimeout(e, 50)
                        }
                    }(), i(l, function (t) {
                        h = t, r()
                    }), e(l, '"' + g.family + '",sans-serif', f), i(u, function (t) {
                        p = t, r()
                    }), e(u, '"' + g.family + '",serif', f), i(d, function (t) {
                        w = t, r()
                    }), e(d, '"' + g.family + '",monospace', f)
            }, document.body ? b() : document.addEventListener("DOMContentLoaded", b)
        })
    }, window.FontFaceObserver = o, window.FontFaceObserver.prototype.check = o.prototype.a
}();



/*scrollreveal.js*/

! function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.scrollReveal = t()
}(this, function () {
    return window.scrollReveal = function (e) {
        "use strict";

        function t(i) {
            return this instanceof t ? ((r = this).elems = {}, r.serial = 1, r.blocked = !1, r.config = o(r.defaults, i), r.isMobile() && !r.config.mobile || !r.isSupported() ? void r.destroy() : (r.config.viewport === e.document.documentElement ? (e.addEventListener("scroll", a, !1), e.addEventListener("resize", a, !1)) : r.config.viewport.addEventListener("scroll", a, !1), void r.init(!0))) : new t(i)
        }
        var i, o, a, r;
        return t.prototype = {
            defaults: {
                enter: "bottom",
                move: "8px",
                over: "0.6s",
                wait: "0s",
                easing: "ease",
                scale: {
                    direction: "up",
                    power: "5%"
                },
                rotate: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                opacity: 0,
                mobile: !1,
                reset: !1,
                viewport: e.document.documentElement,
                delay: "once",
                vFactor: .6,
                complete: function () {}
            },
            init: function (e) {
                var t, i;
                Array.prototype.slice.call(r.config.viewport.querySelectorAll("[data-sr]")).forEach(function (e) {
                    t = r.serial++, (i = r.elems[t] = {
                        domEl: e
                    }).config = r.configFactory(i), i.styles = r.styleFactory(i), i.seen = !1, e.removeAttribute("data-sr"), e.setAttribute("style", i.styles.inline + i.styles.initial)
                }), r.scrolled = r.scrollY(), r.animate(e)
            },
            animate: function (e) {
                function t(e) {
                    var t = r.elems[e];
                    setTimeout(function () {
                        t.domEl.setAttribute("style", t.styles.inline), t.config.complete(t.domEl), delete r.elems[e]
                    }, t.styles.duration)
                }
                var i, o, a;
                for (i in r.elems) r.elems.hasOwnProperty(i) && (o = r.elems[i], a = r.isElemInViewport(o), a ? ("always" === r.config.delay || "onload" === r.config.delay && e || "once" === r.config.delay && !o.seen ? o.domEl.setAttribute("style", o.styles.inline + o.styles.target + o.styles.transition) : o.domEl.setAttribute("style", o.styles.inline + o.styles.target + o.styles.reset), o.seen = !0, o.config.reset || o.animating || (o.animating = !0, t(i))) : !a && o.config.reset && o.domEl.setAttribute("style", o.styles.inline + o.styles.initial + o.styles.reset));
                r.blocked = !1
            },
            configFactory: function (e) {
                var t = {},
                    i = {},
                    a = e.domEl.getAttribute("data-sr").split(/[, ]+/);
                return a.forEach(function (e, i) {
                    switch (e) {
                        case "enter":
                            t.enter = a[i + 1];
                            break;
                        case "wait":
                            t.wait = a[i + 1];
                            break;
                        case "move":
                            t.move = a[i + 1];
                            break;
                        case "ease":
                            t.move = a[i + 1], t.ease = "ease";
                            break;
                        case "ease-in":
                            if ("up" == a[i + 1] || "down" == a[i + 1]) {
                                t.scale.direction = a[i + 1], t.scale.power = a[i + 2], t.easing = "ease-in";
                                break
                            }
                            t.move = a[i + 1], t.easing = "ease-in";
                            break;
                        case "ease-in-out":
                            if ("up" == a[i + 1] || "down" == a[i + 1]) {
                                t.scale.direction = a[i + 1], t.scale.power = a[i + 2], t.easing = "ease-in-out";
                                break
                            }
                            t.move = a[i + 1], t.easing = "ease-in-out";
                            break;
                        case "ease-out":
                            if ("up" == a[i + 1] || "down" == a[i + 1]) {
                                t.scale.direction = a[i + 1], t.scale.power = a[i + 2], t.easing = "ease-out";
                                break
                            }
                            t.move = a[i + 1], t.easing = "ease-out";
                            break;
                        case "hustle":
                            if ("up" == a[i + 1] || "down" == a[i + 1]) {
                                t.scale.direction = a[i + 1], t.scale.power = a[i + 2], t.easing = "cubic-bezier( 0.6, 0.2, 0.1, 1 )";
                                break
                            }
                            t.move = a[i + 1], t.easing = "cubic-bezier( 0.6, 0.2, 0.1, 1 )";
                            break;
                        case "over":
                            t.over = a[i + 1];
                            break;
                        case "flip":
                        case "pitch":
                            t.rotate = t.rotate || {}, t.rotate.x = a[i + 1];
                            break;
                        case "spin":
                        case "yaw":
                            t.rotate = t.rotate || {}, t.rotate.y = a[i + 1];
                            break;
                        case "roll":
                            t.rotate = t.rotate || {}, t.rotate.z = a[i + 1];
                            break;
                        case "reset":
                            t.reset = "no" != a[i - 1];
                            break;
                        case "scale":
                            if (t.scale = {}, "up" == a[i + 1] || "down" == a[i + 1]) {
                                t.scale.direction = a[i + 1], t.scale.power = a[i + 2];
                                break
                            }
                            t.scale.power = a[i + 1];
                            break;
                        case "vFactor":
                        case "vF":
                            t.vFactor = a[i + 1];
                            break;
                        case "opacity":
                            t.opacity = a[i + 1];
                            break;
                        default:
                            return
                    }
                }), i = o(i, r.config), "top" === (i = o(i, t)).enter || "bottom" === i.enter ? i.axis = "Y" : ("left" === i.enter || "right" === i.enter) && (i.axis = "X"), ("top" === i.enter || "left" === i.enter) && (i.move = "-" + i.move), i
            },
            styleFactory: function (e) {
                function t() {
                    0 !== parseInt(s.move) && (o += " translate" + s.axis + "(" + s.move + ")", r += " translate" + s.axis + "(0)"), 0 !== parseInt(s.scale.power) && ("up" === s.scale.direction ? s.scale.value = 1 - .01 * parseFloat(s.scale.power) : "down" === s.scale.direction && (s.scale.value = 1 + .01 * parseFloat(s.scale.power)), o += " scale(" + s.scale.value + ")", r += " scale(1)"), s.rotate.x && (o += " rotateX(" + s.rotate.x + ")", r += " rotateX(0)"), s.rotate.y && (o += " rotateY(" + s.rotate.y + ")", r += " rotateY(0)"), s.rotate.z && (o += " rotateZ(" + s.rotate.z + ")", r += " rotateZ(0)"), o += "; opacity: " + s.opacity + "; ", r += "; opacity: 1; "
                }
                var i, o, a, r, n, s = e.config,
                    c = 1e3 * (parseFloat(s.over) + parseFloat(s.wait));
                return i = e.domEl.getAttribute("style") ? e.domEl.getAttribute("style") + "; visibility: visible; " : "visibility: visible; ", n = "-webkit-transition: -webkit-transform " + s.over + " " + s.easing + " " + s.wait + ", opacity " + s.over + " " + s.easing + " " + s.wait + "; transition: transform " + s.over + " " + s.easing + " " + s.wait + ", opacity " + s.over + " " + s.easing + " " + s.wait + "; -webkit-perspective: 1000;-webkit-backface-visibility: hidden;", a = "-webkit-transition: -webkit-transform " + s.over + " " + s.easing + " 0s, opacity " + s.over + " " + s.easing + " 0s; transition: transform " + s.over + " " + s.easing + " 0s, opacity " + s.over + " " + s.easing + " 0s; -webkit-perspective: 1000; -webkit-backface-visibility: hidden; ", o = "transform:", r = "transform:", t(), o += "-webkit-transform:", r += "-webkit-transform:", t(), {
                    transition: n,
                    initial: o,
                    target: r,
                    reset: a,
                    inline: i,
                    duration: c
                }
            },
            getViewportH: function () {
                var t = r.config.viewport.clientHeight,
                    i = e.innerHeight;
                return r.config.viewport === e.document.documentElement && i > t ? i : t
            },
            scrollY: function () {
                return r.config.viewport === e.document.documentElement ? e.pageYOffset : r.config.viewport.scrollTop + r.config.viewport.offsetTop
            },
            getOffset: function (e) {
                var t = 0,
                    i = 0;
                do {
                    isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (i += e.offsetLeft)
                } while (e = e.offsetParent);
                return {
                    top: t,
                    left: i
                }
            },
            isElemInViewport: function (t) {
                var i, o, a, n, s, c = t.domEl.offsetHeight,
                    l = r.getOffset(t.domEl).top,
                    m = l + c,
                    p = t.config.vFactor || 0;
                return o = l + c * p, a = m - c * p, n = r.scrolled + r.getViewportH(), s = r.scrolled, n > o && a > s || "fixed" === ((i = t.domEl).currentStyle || e.getComputedStyle(i, null)).position
            },
            isMobile: function () {
                var t = navigator.userAgent || navigator.vendor || e.opera;
                return !(!/(ipad|playbook|silk|android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)))
            },
            isSupported: function () {
                for (var e = document.createElement("sensor"), t = ("transition " + "Webkit,Moz,O,".split(",").join("transition,")).split(","), i = 0; i < t.length; i++)
                    if ("" === !e.style[t[i]]) return !1;
                return !0
            },
            destroy: function () {
                var e = r.config.viewport;
                Array.prototype.slice.call(e.querySelectorAll("[data-sr]")).forEach(function (e) {
                    e.removeAttribute("data-sr")
                })
            }
        }, a = function () {
            r.blocked || (r.blocked = !0, r.scrolled = r.scrollY(), i(function () {
                r.animate()
            }))
        }, o = function (e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e
        }, i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (t) {
            e.setTimeout(t, 1e3 / 60)
        }, t
    }(window), scrollReveal
});







/* browser feature detection */
var browserHas = [];
// pushState
browserHas.pushstate = (history.pushState) ? true : false;

/* detect touch event */
document.documentElement.classList.add(("ontouchstart" in window) ? "is-touch" : "no-touch");

/* detect Mac OS */
navigator.platform.toUpperCase().indexOf("MAC") >= 0 && document.documentElement.classList.add("is-mac");

/* document ready */
Zepto(function ($) {

    /* prevent/allow body scrolling */
    var scroll_position = 0,
        classname_noscroll = "js-noscroll",
        el_window = $(window),
        el_body = $("body");

    function prevent_body_scroll() {
        scroll_position = el_window.scrollTop();
        el_body.addClass(classname_noscroll);
    }

    function allow_body_scroll() {
        el_body.removeClass(classname_noscroll);
        el_window.scrollTop(scroll_position);
    }


    /* google analytics event tracking */
    $("[data-ga-event]").on("click", function () {
        ga("send", "event", "External links", "click", $(this).attr("href"));
    });

    /* init scrollReveal.js if window is scrolled to top and font is loaded */
    if (!is_lightbox_opened && $(window).scrollTop() < 160 && scrollReveal.prototype.isSupported() && !scrollReveal.prototype.isMobile()) {
        var clavo_i = new FontFaceObserver("Clavo", {
            style: "italic",
            weight: "normal"
        });
        var clavo_bi = new FontFaceObserver("Clavo", {
            style: "italic",
            weight: "bold"
        });
        Promise.all([clavo_i.check(), clavo_bi.check()]).then(function () {
            window.sr = new scrollReveal({
                move: 0,
                over: ".75s",
                vFactor: 0
            });
        });
    } else {
        $("[data-sr]").css("visibility", "visible");
    }

});
