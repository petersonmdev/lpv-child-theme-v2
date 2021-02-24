! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	"use strict";

	function n(e, t) {
		t = t || te;
		var n = t.createElement("script");
		n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
	}

	function i(e) {
		var t = !!e && "length" in e && e.length,
			n = he.type(e);
		return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	function o(e, t, n) {
		return he.isFunction(t) ? he.grep(e, function(e, i) {
			return !!t.call(e, i, e) !== n
		}) : t.nodeType ? he.grep(e, function(e) {
			return e === t !== n
		}) : "string" != typeof t ? he.grep(e, function(e) {
			return ae.call(t, e) > -1 !== n
		}) : ke.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) {
			return ae.call(t, e) > -1 !== n && 1 === e.nodeType
		}))
	}

	function r(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function a(e) {
		var t = {};
		return he.each(e.match(Ae) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function s(e) {
		return e
	}

	function l(e) {
		throw e
	}

	function c(e, t, n) {
		var i;
		try {
			e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
		} catch (e) {
			n.call(void 0, e)
		}
	}

	function u() {
		te.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), he.ready()
	}

	function d() {
		this.expando = he.expando + d.uid++
	}

	function p(e) {
		return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : He.test(e) ? JSON.parse(e) : e)
	}

	function f(e, t, n) {
		var i;
		if (void 0 === n && 1 === e.nodeType)
			if (i = "data-" + t.replace(qe, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
				try {
					n = p(n)
				} catch (o) {}
				Pe.set(e, t, n)
			} else n = void 0;
		return n
	}

	function h(e, t, n, i) {
		var o, r = 1,
			a = 20,
			s = i ? function() {
				return i.cur()
			} : function() {
				return he.css(e, t, "")
			},
			l = s(),
			c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
			u = (he.cssNumber[t] || "px" !== c && +l) && We.exec(he.css(e, t));
		if (u && u[3] !== c) {
			c = c || u[3], n = n || [], u = +l || 1;
			do r = r || ".5", u /= r, he.style(e, t, u + c); while (r !== (r = s() / l) && 1 !== r && --a)
		}
		return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
	}

	function g(e) {
		var t, n = e.ownerDocument,
			i = e.nodeName,
			o = Ue[i];
		return o ? o : (t = n.body.appendChild(n.createElement(i)), o = he.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ue[i] = o, o)
	}

	function m(e, t) {
		for (var n, i, o = [], r = 0, a = e.length; r < a; r++) i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = Re.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && _e(i) && (o[r] = g(i))) : "none" !== n && (o[r] = "none", Re.set(i, "display", n)));
		for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
		return e
	}

	function v(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
	}

	function y(e, t) {
		for (var n = 0, i = e.length; n < i; n++) Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"))
	}

	function b(e, t, n, i, o) {
		for (var r, a, s, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
			if (r = e[f], r || 0 === r)
				if ("object" === he.type(r)) he.merge(p, r.nodeType ? [r] : r);
				else if (Ke.test(r)) {
			for (a = a || d.appendChild(t.createElement("div")), s = (Ve.exec(r) || ["", ""])[1].toLowerCase(), l = Qe[s] || Qe._default, a.innerHTML = l[1] + he.htmlPrefilter(r) + l[2], u = l[0]; u--;) a = a.lastChild;
			he.merge(p, a.childNodes), a = d.firstChild, a.textContent = ""
		} else p.push(t.createTextNode(r));
		for (d.textContent = "", f = 0; r = p[f++];)
			if (i && he.inArray(r, i) > -1) o && o.push(r);
			else if (c = he.contains(r.ownerDocument, r), a = v(d.appendChild(r), "script"), c && y(a), n)
			for (u = 0; r = a[u++];) Xe.test(r.type || "") && n.push(r);
		return d
	}

	function x() {
		return !0
	}

	function w() {
		return !1
	}

	function T() {
		try {
			return te.activeElement
		} catch (e) {}
	}

	function C(e, t, n, i, o, r) {
		var a, s;
		if ("object" == typeof t) {
			"string" != typeof n && (i = i || n, n = void 0);
			for (s in t) C(e, s, n, i, t[s], r);
			return e
		}
		if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = w;
		else if (!o) return e;
		return 1 === r && (a = o, o = function(e) {
			return he().off(e), a.apply(this, arguments)
		}, o.guid = a.guid || (a.guid = he.guid++)), e.each(function() {
			he.event.add(this, t, o, i, n)
		})
	}

	function k(e, t) {
		return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
	}

	function E(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function S(e) {
		var t = it.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function D(e, t) {
		var n, i, o, r, a, s, l, c;
		if (1 === t.nodeType) {
			if (Re.hasData(e) && (r = Re.access(e), a = Re.set(t, r), c = r.events)) {
				delete a.handle, a.events = {};
				for (o in c)
					for (n = 0, i = c[o].length; n < i; n++) he.event.add(t, o, c[o][n])
			}
			Pe.hasData(e) && (s = Pe.access(e), l = he.extend({}, s), Pe.set(t, l))
		}
	}

	function $(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function N(e, t, i, o) {
		t = oe.apply([], t);
		var r, a, s, l, c, u, d = 0,
			p = e.length,
			f = p - 1,
			h = t[0],
			g = he.isFunction(h);
		if (g || p > 1 && "string" == typeof h && !pe.checkClone && nt.test(h)) return e.each(function(n) {
			var r = e.eq(n);
			g && (t[0] = h.call(this, n, r.html())), N(r, t, i, o)
		});
		if (p && (r = b(t, e[0].ownerDocument, !1, e, o), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || o)) {
			for (s = he.map(v(r, "script"), E), l = s.length; d < p; d++) c = r, d !== f && (c = he.clone(c, !0, !0), l && he.merge(s, v(c, "script"))), i.call(e[d], c, d);
			if (l)
				for (u = s[s.length - 1].ownerDocument, he.map(s, S), d = 0; d < l; d++) c = s[d], Xe.test(c.type || "") && !Re.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(ot, ""), u))
		}
		return e
	}

	function A(e, t, n) {
		for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || he.cleanData(v(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
		return e
	}

	function j(e, t, n) {
		var i, o, r, a, s = e.style;
		return n = n || st(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !pe.pixelMarginRight() && at.test(a) && rt.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
	}

	function O(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function I(e) {
		if (e in pt) return e;
		for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
			if (e = dt[n] + t, e in pt) return e
	}

	function L(e, t, n) {
		var i = We.exec(t);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
	}

	function R(e, t, n, i, o) {
		var r, a = 0;
		for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (a += he.css(e, n + Me[r], !0, o)), i ? ("content" === n && (a -= he.css(e, "padding" + Me[r], !0, o)), "margin" !== n && (a -= he.css(e, "border" + Me[r] + "Width", !0, o))) : (a += he.css(e, "padding" + Me[r], !0, o), "padding" !== n && (a += he.css(e, "border" + Me[r] + "Width", !0, o)));
		return a
	}

	function P(e, t, n) {
		var i, o = !0,
			r = st(e),
			a = "border-box" === he.css(e, "boxSizing", !1, r);
		if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
			if (i = j(e, t, r), (i < 0 || null == i) && (i = e.style[t]), at.test(i)) return i;
			o = a && (pe.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + R(e, t, n || (a ? "border" : "content"), o, r) + "px"
	}

	function H(e, t, n, i, o) {
		return new H.prototype.init(e, t, n, i, o)
	}

	function q() {
		ht && (e.requestAnimationFrame(q), he.fx.tick())
	}

	function F() {
		return e.setTimeout(function() {
			ft = void 0
		}), ft = he.now()
	}

	function W(e, t) {
		var n, i = 0,
			o = {
				height: e
			};
		for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Me[i], o["margin" + n] = o["padding" + n] = e;
		return t && (o.opacity = o.width = e), o
	}

	function M(e, t, n) {
		for (var i, o = (U.tweeners[t] || []).concat(U.tweeners["*"]), r = 0, a = o.length; r < a; r++)
			if (i = o[r].call(n, t, e)) return i
	}

	function _(e, t, n) {
		var i, o, r, a, s, l, c, u, d = "width" in t || "height" in t,
			p = this,
			f = {},
			h = e.style,
			g = e.nodeType && _e(e),
			v = Re.get(e, "fxshow");
		n.queue || (a = he._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
			a.unqueued || s()
		}), a.unqueued++, p.always(function() {
			p.always(function() {
				a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
			})
		}));
		for (i in t)
			if (o = t[i], gt.test(o)) {
				if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
					if ("show" !== o || !v || void 0 === v[i]) continue;
					g = !0
				}
				f[i] = v && v[i] || he.style(e, i)
			}
		if (l = !he.isEmptyObject(t), l || !he.isEmptyObject(f)) {
			d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = v && v.display, null == c && (c = Re.get(e, "display")), u = he.css(e, "display"), "none" === u && (c ? u = c : (m([e], !0), c = e.style.display || c, u = he.css(e, "display"), m([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (p.done(function() {
				h.display = c
			}), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
			})), l = !1;
			for (i in f) l || (v ? "hidden" in v && (g = v.hidden) : v = Re.access(e, "fxshow", {
				display: c
			}), r && (v.hidden = !g), g && m([e], !0), p.done(function() {
				g || m([e]), Re.remove(e, "fxshow");
				for (i in f) he.style(e, i, f[i])
			})), l = M(g ? v[i] : 0, i, p), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
		}
	}

	function B(e, t) {
		var n, i, o, r, a;
		for (n in e)
			if (i = he.camelCase(n), o = t[i], r = e[n], he.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = he.cssHooks[i], a && "expand" in a) {
				r = a.expand(r), delete e[i];
				for (n in r) n in e || (e[n] = r[n], t[n] = o)
			} else t[i] = o
	}

	function U(e, t, n) {
		var i, o, r = 0,
			a = U.prefilters.length,
			s = he.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (o) return !1;
				for (var t = ft || F(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(r);
				return s.notifyWith(e, [c, r, n]), r < 1 && l ? n : (s.resolveWith(e, [c]), !1)
			},
			c = s.promise({
				elem: e,
				props: he.extend({}, t),
				opts: he.extend(!0, {
					specialEasing: {},
					easing: he.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: ft || F(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						i = t ? c.tweens.length : 0;
					if (o) return this;
					for (o = !0; n < i; n++) c.tweens[n].run(1);
					return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
				}
			}),
			u = c.props;
		for (B(u, c.opts.specialEasing); r < a; r++)
			if (i = U.prefilters[r].call(c, e, u, c.opts)) return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), i;
		return he.map(u, M, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), he.fx.timer(he.extend(l, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}

	function z(e) {
		var t = e.match(Ae) || [];
		return t.join(" ")
	}

	function V(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function X(e, t, n, i) {
		var o;
		if (he.isArray(t)) he.each(t, function(t, o) {
			n || St.test(e) ? i(e, o) : X(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
		});
		else if (n || "object" !== he.type(t)) i(e, t);
		else
			for (o in t) X(e + "[" + o + "]", t[o], n, i)
	}

	function Q(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, o = 0,
				r = t.toLowerCase().match(Ae) || [];
			if (he.isFunction(n))
				for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function K(e, t, n, i) {
		function o(s) {
			var l;
			return r[s] = !0, he.each(e[s] || [], function(e, s) {
				var c = s(t, n, i);
				return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
			}), l
		}
		var r = {},
			a = e === qt;
		return o(t.dataTypes[0]) || !r["*"] && o("*")
	}

	function Y(e, t) {
		var n, i, o = he.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
		return i && he.extend(!0, e, i), e
	}

	function G(e, t, n) {
		for (var i, o, r, a, s = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
		if (i)
			for (o in s)
				if (s[o] && s[o].test(i)) {
					l.unshift(o);
					break
				}
		if (l[0] in n) r = l[0];
		else {
			for (o in n) {
				if (!l[0] || e.converters[o + " " + l[0]]) {
					r = o;
					break
				}
				a || (a = o)
			}
			r = r || a
		}
		if (r) return r !== l[0] && l.unshift(r), n[r]
	}

	function Z(e, t, n, i) {
		var o, r, a, s, l, c = {},
			u = e.dataTypes.slice();
		if (u[1])
			for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
		for (r = u.shift(); r;)
			if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
				if ("*" === r) r = l;
				else if ("*" !== l && l !== r) {
			if (a = c[l + " " + r] || c["* " + r], !a)
				for (o in c)
					if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
						a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], u.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (d) {
					return {
						state: "parsererror",
						error: a ? d : "No conversion from " + l + " to " + r
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function J(e) {
		return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var ee = [],
		te = e.document,
		ne = Object.getPrototypeOf,
		ie = ee.slice,
		oe = ee.concat,
		re = ee.push,
		ae = ee.indexOf,
		se = {},
		le = se.toString,
		ce = se.hasOwnProperty,
		ue = ce.toString,
		de = ue.call(Object),
		pe = {},
		fe = "3.1.1",
		he = function(e, t) {
			return new he.fn.init(e, t)
		},
		ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		me = /^-ms-/,
		ve = /-([a-z])/g,
		ye = function(e, t) {
			return t.toUpperCase()
		};
	he.fn = he.prototype = {
		jquery: fe,
		constructor: he,
		length: 0,
		toArray: function() {
			return ie.call(this)
		},
		get: function(e) {
			return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = he.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return he.each(this, e)
		},
		map: function(e) {
			return this.pushStack(he.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(ie.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: re,
		sort: ee.sort,
		splice: ee.splice
	}, he.extend = he.fn.extend = function() {
		var e, t, n, i, o, r, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
			if (null != (e = arguments[s]))
				for (t in e) n = a[t], i = e[t], a !== i && (c && i && (he.isPlainObject(i) || (o = he.isArray(i))) ? (o ? (o = !1, r = n && he.isArray(n) ? n : []) : r = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(c, r, i)) : void 0 !== i && (a[t] = i));
		return a
	}, he.extend({
		expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === he.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			var t = he.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== le.call(e)) && (!(t = ne(e)) || (n = ce.call(t, "constructor") && t.constructor, "function" == typeof n && ue.call(n) === de))
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[le.call(e)] || "object" : typeof e
		},
		globalEval: function(e) {
			n(e)
		},
		camelCase: function(e) {
			return e.replace(me, "ms-").replace(ve, ye)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t) {
			var n, o = 0;
			if (i(e))
				for (n = e.length; o < n && t.call(e[o], o, e[o]) !== !1; o++);
			else
				for (o in e)
					if (t.call(e[o], o, e[o]) === !1) break; return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(ge, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : ae.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
			return e.length = o, e
		},
		grep: function(e, t, n) {
			for (var i, o = [], r = 0, a = e.length, s = !n; r < a; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
			return o
		},
		map: function(e, t, n) {
			var o, r, a = 0,
				s = [];
			if (i(e))
				for (o = e.length; a < o; a++) r = t(e[a], a, n), null != r && s.push(r);
			else
				for (a in e) r = t(e[a], a, n), null != r && s.push(r);
			return oe.apply([], s)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, i, o;
			if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = ie.call(arguments, 2), o = function() {
				return e.apply(t || this, i.concat(ie.call(arguments)))
			}, o.guid = e.guid = e.guid || he.guid++, o
		},
		now: Date.now,
		support: pe
	}), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		se["[object " + t + "]"] = t.toLowerCase()
	});
	var be = function(e) {
		function t(e, t, n, i) {
			var o, r, a, s, l, c, u, p = t && t.ownerDocument,
				h = t ? t.nodeType : 9;
			if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
			if (!i && ((t ? t.ownerDocument || t : M) !== I && O(t), t = t || I, R)) {
				if (11 !== h && (l = ve.exec(e)))
					if (o = l[1]) {
						if (9 === h) {
							if (!(a = t.getElementById(o))) return n;
							if (a.id === o) return n.push(a), n
						} else if (p && (a = p.getElementById(o)) && F(t, a) && a.id === o) return n.push(a), n
					} else {
						if (l[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
						if ((o = l[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(o)), n
					}
				if (T.qsa && !V[e + " "] && (!P || !P.test(e))) {
					if (1 !== h) p = t, u = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((s = t.getAttribute("id")) ? s = s.replace(we, Te) : t.setAttribute("id", s = W), c = S(e), r = c.length; r--;) c[r] = "#" + s + " " + f(c[r]);
						u = c.join(","), p = ye.test(e) && d(t.parentNode) || t
					}
					if (u) try {
						return Z.apply(n, p.querySelectorAll(u)), n
					} catch (g) {} finally {
						s === W && t.removeAttribute("id")
					}
				}
			}
			return $(e.replace(se, "$1"), t, n, i)
		}

		function n() {
			function e(n, i) {
				return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[W] = !0, e
		}

		function o(e) {
			var t = I.createElement("fieldset");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function r(e, t) {
			for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
		}

		function a(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function s(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function l(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function c(e) {
			return function(t) {
				return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function u(e) {
			return i(function(t) {
				return t = +t, i(function(n, i) {
					for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
				})
			})
		}

		function d(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function p() {}

		function f(e) {
			for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
			return i
		}

		function h(e, t, n) {
			var i = t.dir,
				o = t.next,
				r = o || i,
				a = n && "parentNode" === r,
				s = B++;
			return t.first ? function(t, n, o) {
				for (; t = t[i];)
					if (1 === t.nodeType || a) return e(t, n, o);
				return !1
			} : function(t, n, l) {
				var c, u, d, p = [_, s];
				if (l) {
					for (; t = t[i];)
						if ((1 === t.nodeType || a) && e(t, n, l)) return !0
				} else
					for (; t = t[i];)
						if (1 === t.nodeType || a)
							if (d = t[W] || (t[W] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
							else {
								if ((c = u[r]) && c[0] === _ && c[1] === s) return p[2] = c[2];
								if (u[r] = p, p[2] = e(t, n, l)) return !0
							} return !1
			}
		}

		function g(e) {
			return e.length > 1 ? function(t, n, i) {
				for (var o = e.length; o--;)
					if (!e[o](t, n, i)) return !1;
				return !0
			} : e[0]
		}

		function m(e, n, i) {
			for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
			return i
		}

		function v(e, t, n, i, o) {
			for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
			return a
		}

		function y(e, t, n, o, r, a) {
			return o && !o[W] && (o = y(o)), r && !r[W] && (r = y(r, a)), i(function(i, a, s, l) {
				var c, u, d, p = [],
					f = [],
					h = a.length,
					g = i || m(t || "*", s.nodeType ? [s] : s, []),
					y = !e || !i && t ? g : v(g, p, e, s, l),
					b = n ? r || (i ? e : h || o) ? [] : a : y;
				if (n && n(y, b, s, l), o)
					for (c = v(b, f), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
				if (i) {
					if (r || e) {
						if (r) {
							for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
							r(null, b = [], c, l)
						}
						for (u = b.length; u--;)(d = b[u]) && (c = r ? ee(i, d) : p[u]) > -1 && (i[c] = !(a[c] = d))
					}
				} else b = v(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, l) : Z.apply(a, b)
			})
		}

		function b(e) {
			for (var t, n, i, o = e.length, r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = h(function(e) {
					return e === t
				}, a, !0), c = h(function(e) {
					return ee(t, e) > -1
				}, a, !0), u = [function(e, n, i) {
					var o = !r && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
					return t = null, o
				}]; s < o; s++)
				if (n = C.relative[e[s].type]) u = [h(g(u), n)];
				else {
					if (n = C.filter[e[s].type].apply(null, e[s].matches), n[W]) {
						for (i = ++s; i < o && !C.relative[e[i].type]; i++);
						return y(s > 1 && g(u), s > 1 && f(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(se, "$1"), n, s < i && b(e.slice(s, i)), i < o && b(e = e.slice(i)), i < o && f(e))
					}
					u.push(n)
				}
			return g(u)
		}

		function x(e, n) {
			var o = n.length > 0,
				r = e.length > 0,
				a = function(i, a, s, l, c) {
					var u, d, p, f = 0,
						h = "0",
						g = i && [],
						m = [],
						y = N,
						b = i || r && C.find.TAG("*", c),
						x = _ += null == y ? 1 : Math.random() || .1,
						w = b.length;
					for (c && (N = a === I || a || c); h !== w && null != (u = b[h]); h++) {
						if (r && u) {
							for (d = 0, a || u.ownerDocument === I || (O(u), s = !R); p = e[d++];)
								if (p(u, a || I, s)) {
									l.push(u);
									break
								}
							c && (_ = x)
						}
						o && ((u = !p && u) && f--, i && g.push(u))
					}
					if (f += h, o && h !== f) {
						for (d = 0; p = n[d++];) p(g, m, a, s);
						if (i) {
							if (f > 0)
								for (; h--;) g[h] || m[h] || (m[h] = Y.call(l));
							m = v(m)
						}
						Z.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
					}
					return c && (_ = x, N = y), g
				};
			return o ? i(a) : a
		}
		var w, T, C, k, E, S, D, $, N, A, j, O, I, L, R, P, H, q, F, W = "sizzle" + 1 * new Date,
			M = e.document,
			_ = 0,
			B = 0,
			U = n(),
			z = n(),
			V = n(),
			X = function(e, t) {
				return e === t && (j = !0), 0
			},
			Q = {}.hasOwnProperty,
			K = [],
			Y = K.pop,
			G = K.push,
			Z = K.push,
			J = K.slice,
			ee = function(e, t) {
				for (var n = 0, i = e.length; n < i; n++)
					if (e[n] === t) return n;
				return -1
			},
			te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ne = "[\\x20\\t\\r\\n\\f]",
			ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
			re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
			ae = new RegExp(ne + "+", "g"),
			se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
			le = new RegExp("^" + ne + "*," + ne + "*"),
			ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
			ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
			de = new RegExp(re),
			pe = new RegExp("^" + ie + "$"),
			fe = {
				ID: new RegExp("^#(" + ie + ")"),
				CLASS: new RegExp("^\\.(" + ie + ")"),
				TAG: new RegExp("^(" + ie + "|[*])"),
				ATTR: new RegExp("^" + oe),
				PSEUDO: new RegExp("^" + re),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + te + ")$", "i"),
				needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
			},
			he = /^(?:input|select|textarea|button)$/i,
			ge = /^h\d$/i,
			me = /^[^{]+\{\s*\[native \w/,
			ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ye = /[+~]/,
			be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
			xe = function(e, t, n) {
				var i = "0x" + t - 65536;
				return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			Te = function(e, t) {
				return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			Ce = function() {
				O()
			},
			ke = h(function(e) {
				return e.disabled === !0 && ("form" in e || "label" in e)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			Z.apply(K = J.call(M.childNodes), M.childNodes), K[M.childNodes.length].nodeType
		} catch (Ee) {
			Z = {
				apply: K.length ? function(e, t) {
					G.apply(e, J.call(t))
				} : function(e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}
		T = t.support = {}, E = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, O = t.setDocument = function(e) {
			var t, n, i = e ? e.ownerDocument || e : M;
			return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, L = I.documentElement, R = !E(I), M !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), T.attributes = o(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), T.getElementsByTagName = o(function(e) {
				return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
			}), T.getElementsByClassName = me.test(I.getElementsByClassName), T.getById = o(function(e) {
				return L.appendChild(e).id = W, !I.getElementsByName || !I.getElementsByName(W).length
			}), T.getById ? (C.filter.ID = function(e) {
				var t = e.replace(be, xe);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}, C.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && R) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (C.filter.ID = function(e) {
				var t = e.replace(be, xe);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}, C.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && R) {
					var n, i, o, r = t.getElementById(e);
					if (r) {
						if (n = r.getAttributeNode("id"), n && n.value === e) return [r];
						for (o = t.getElementsByName(e), i = 0; r = o[i++];)
							if (n = r.getAttributeNode("id"), n && n.value === e) return [r]
					}
					return []
				}
			}), C.find.TAG = T.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, i = [],
					o = 0,
					r = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = r[o++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return r
			}, C.find.CLASS = T.getElementsByClassName && function(e, t) {
				if ("undefined" != typeof t.getElementsByClassName && R) return t.getElementsByClassName(e)
			}, H = [], P = [], (T.qsa = me.test(I.querySelectorAll)) && (o(function(e) {
				L.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || P.push(".#.+[+~]")
			}), o(function(e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var t = I.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
			})), (T.matchesSelector = me.test(q = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(e) {
				T.disconnectedMatch = q.call(e, "*"), q.call(e, "[s!='']:x"), H.push("!=", re)
			}), P = P.length && new RegExp(P.join("|")), H = H.length && new RegExp(H.join("|")), t = me.test(L.compareDocumentPosition), F = t || me.test(L.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function(e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, X = t ? function(e, t) {
				if (e === t) return j = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === M && F(M, e) ? -1 : t === I || t.ownerDocument === M && F(M, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
			} : function(e, t) {
				if (e === t) return j = !0, 0;
				var n, i = 0,
					o = e.parentNode,
					r = t.parentNode,
					s = [e],
					l = [t];
				if (!o || !r) return e === I ? -1 : t === I ? 1 : o ? -1 : r ? 1 : A ? ee(A, e) - ee(A, t) : 0;
				if (o === r) return a(e, t);
				for (n = e; n = n.parentNode;) s.unshift(n);
				for (n = t; n = n.parentNode;) l.unshift(n);
				for (; s[i] === l[i];) i++;
				return i ? a(s[i], l[i]) : s[i] === M ? -1 : l[i] === M ? 1 : 0
			}, I) : I
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if ((e.ownerDocument || e) !== I && O(e), n = n.replace(ue, "='$1']"), T.matchesSelector && R && !V[n + " "] && (!H || !H.test(n)) && (!P || !P.test(n))) try {
				var i = q.call(e, n);
				if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			} catch (o) {}
			return t(n, I, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return (e.ownerDocument || e) !== I && O(e), F(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== I && O(e);
			var n = C.attrHandle[t.toLowerCase()],
				i = n && Q.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !R) : void 0;
			return void 0 !== i ? i : T.attributes || !R ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, t.escape = function(e) {
			return (e + "").replace(we, Te)
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				i = 0,
				o = 0;
			if (j = !T.detectDuplicates, A = !T.sortStable && e.slice(0), e.sort(X), j) {
				for (; t = e[o++];) t === e[o] && (i = n.push(o));
				for (; i--;) e.splice(n[i], 1)
			}
			return A = null, e
		}, k = t.getText = function(e) {
			var t, n = "",
				i = 0,
				o = e.nodeType;
			if (o) {
				if (1 === o || 9 === o || 11 === o) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
				} else if (3 === o || 4 === o) return e.nodeValue
			} else
				for (; t = e[i++];) n += k(t);
			return n
		}, C = t.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: fe,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(be, xe).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = U[e + " "];
					return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, i) {
					return function(o) {
						var r = t.attr(o, e);
						return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
					}
				},
				CHILD: function(e, t, n, i, o) {
					var r = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === i && 0 === o ? function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var c, u, d, p, f, h, g = r !== a ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							v = s && t.nodeName.toLowerCase(),
							y = !l && !s,
							b = !1;
						if (m) {
							if (r) {
								for (; g;) {
									for (p = t; p = p[g];)
										if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? m.firstChild : m.lastChild], a && y) {
								for (p = m, d = p[W] || (p[W] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === _ && c[1], b = f && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
									if (1 === p.nodeType && ++b && p === t) {
										u[e] = [_, f, b];
										break
									}
							} else if (y && (p = t, d = p[W] || (p[W] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === _ && c[1], b = f), b === !1)
								for (;
									(p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[W] || (p[W] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [_, b]), p !== t)););
							return b -= o, b === i || b % i === 0 && b / i >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return r[W] ? r(n) : r.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
						for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]), e[i] = !(t[i] = o[a])
					}) : function(e) {
						return r(e, 0, o)
					}) : r
				}
			},
			pseudos: {
				not: i(function(e) {
					var t = [],
						n = [],
						o = D(e.replace(se, "$1"));
					return o[W] ? i(function(e, t, n, i) {
						for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
					}) : function(e, i, r) {
						return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
					}
				}),
				has: i(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: i(function(e) {
					return e = e.replace(be, xe),
						function(t) {
							return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
						}
				}),
				lang: i(function(e) {
					return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
						function(t) {
							var n;
							do
								if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1;
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === L
				},
				focus: function(e) {
					return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: c(!1),
				disabled: c(!0),
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !C.pseudos.empty(e)
				},
				header: function(e) {
					return ge.test(e.nodeName)
				},
				input: function(e) {
					return he.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: u(function() {
					return [0]
				}),
				last: u(function(e, t) {
					return [t - 1]
				}),
				eq: u(function(e, t, n) {
					return [n < 0 ? n + t : n]
				}),
				even: u(function(e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);
					return e
				}),
				odd: u(function(e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);
					return e
				}),
				lt: u(function(e, t, n) {
					for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
					return e
				}),
				gt: u(function(e, t, n) {
					for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}, C.pseudos.nth = C.pseudos.eq;
		for (w in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) C.pseudos[w] = s(w);
		for (w in {
				submit: !0,
				reset: !0
			}) C.pseudos[w] = l(w);
		return p.prototype = C.filters = C.pseudos, C.setFilters = new p, S = t.tokenize = function(e, n) {
			var i, o, r, a, s, l, c, u = z[e + " "];
			if (u) return n ? 0 : u.slice(0);
			for (s = e, l = [], c = C.preFilter; s;) {
				i && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({
					value: i,
					type: o[0].replace(se, " ")
				}), s = s.slice(i.length));
				for (a in C.filter) !(o = fe[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
					value: i,
					type: a,
					matches: o
				}), s = s.slice(i.length));
				if (!i) break
			}
			return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
		}, D = t.compile = function(e, t) {
			var n, i = [],
				o = [],
				r = V[e + " "];
			if (!r) {
				for (t || (t = S(e)), n = t.length; n--;) r = b(t[n]), r[W] ? i.push(r) : o.push(r);
				r = V(e, x(o, i)), r.selector = e
			}
			return r
		}, $ = t.select = function(e, t, n, i) {
			var o, r, a, s, l, c = "function" == typeof e && e,
				u = !i && S(e = c.selector || e);
			if (n = n || [], 1 === u.length) {
				if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === t.nodeType && R && C.relative[r[1].type]) {
					if (t = (C.find.ID(a.matches[0].replace(be, xe), t) || [])[0], !t) return n;
					c && (t = t.parentNode), e = e.slice(r.shift().value.length)
				}
				for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !C.relative[s = a.type]);)
					if ((l = C.find[s]) && (i = l(a.matches[0].replace(be, xe), ye.test(r[0].type) && d(t.parentNode) || t))) {
						if (r.splice(o, 1), e = i.length && f(r), !e) return Z.apply(n, i), n;
						break
					}
			}
			return (c || D(e, u))(i, t, !R, n, !t || ye.test(e) && d(t.parentNode) || t), n
		}, T.sortStable = W.split("").sort(X).join("") === W, T.detectDuplicates = !!j, O(), T.sortDetached = o(function(e) {
			return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
		}), o(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || r("type|href|height|width", function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), T.attributes && o(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || r("value", function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), o(function(e) {
			return null == e.getAttribute("disabled")
		}) || r(te, function(e, t, n) {
			var i;
			if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), t
	}(e);
	he.find = be, he.expr = be.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = be.uniqueSort, he.text = be.getText, he.isXMLDoc = be.isXML, he.contains = be.contains, he.escapeSelector = be.escape;
	var xe = function(e, t, n) {
			for (var i = [], o = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (o && he(e).is(n)) break;
					i.push(e)
				}
			return i
		},
		we = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		Te = he.expr.match.needsContext,
		Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		ke = /^.[^:#\[\.,]*$/;
	he.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, he.fn.extend({
		find: function(e) {
			var t, n, i = this.length,
				o = this;
			if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
				for (t = 0; t < i; t++)
					if (he.contains(o[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, o[t], n);
			return i > 1 ? he.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(o(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(o(this, e || [], !0))
		},
		is: function(e) {
			return !!o(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
		}
	});
	var Ee, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		De = he.fn.init = function(e, t, n) {
			var i, o;
			if (!e) return this;
			if (n = n || Ee, "string" == typeof e) {
				if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (i[1]) {
					if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(i[1]) && he.isPlainObject(t))
						for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
					return this
				}
				return o = te.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
		};
	De.prototype = he.fn, Ee = he(te);
	var $e = /^(?:parents|prev(?:Until|All))/,
		Ne = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	he.fn.extend({
		has: function(e) {
			var t = he(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (he.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, i = 0,
				o = this.length,
				r = [],
				a = "string" != typeof e && he(e);
			if (!Te.test(e))
				for (; i < o; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
							r.push(n);
							break
						}
			return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r)
		},
		index: function(e) {
			return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), he.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return xe(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return xe(e, "parentNode", n)
		},
		next: function(e) {
			return r(e, "nextSibling")
		},
		prev: function(e) {
			return r(e, "previousSibling")
		},
		nextAll: function(e) {
			return xe(e, "nextSibling")
		},
		prevAll: function(e) {
			return xe(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return xe(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return xe(e, "previousSibling", n)
		},
		siblings: function(e) {
			return we((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return we(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || he.merge([], e.childNodes)
		}
	}, function(e, t) {
		he.fn[e] = function(n, i) {
			var o = he.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = he.filter(i, o)), this.length > 1 && (Ne[e] || he.uniqueSort(o), $e.test(e) && o.reverse()), this.pushStack(o)
		}
	});
	var Ae = /[^\x20\t\r\n\f]+/g;
	he.Callbacks = function(e) {
		e = "string" == typeof e ? a(e) : he.extend({}, e);
		var t, n, i, o, r = [],
			s = [],
			l = -1,
			c = function() {
				for (o = e.once, i = t = !0; s.length; l = -1)
					for (n = s.shift(); ++l < r.length;) r[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = r.length, n = !1);
				e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
			},
			u = {
				add: function() {
					return r && (n && !t && (l = r.length - 1, s.push(n)), function i(t) {
						he.each(t, function(t, n) {
							he.isFunction(n) ? e.unique && u.has(n) || r.push(n) : n && n.length && "string" !== he.type(n) && i(n)
						})
					}(arguments), n && !t && c()), this
				},
				remove: function() {
					return he.each(arguments, function(e, t) {
						for (var n;
							(n = he.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
					}), this
				},
				has: function(e) {
					return e ? he.inArray(e, r) > -1 : r.length > 0
				},
				empty: function() {
					return r && (r = []), this
				},
				disable: function() {
					return o = s = [], r = n = "", this
				},
				disabled: function() {
					return !r
				},
				lock: function() {
					return o = s = [], n || t || (r = n = ""), this
				},
				locked: function() {
					return !!o
				},
				fireWith: function(e, n) {
					return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
				},
				fire: function() {
					return u.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return u
	}, he.extend({
		Deferred: function(t) {
			var n = [
					["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
					["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
				],
				i = "pending",
				o = {
					state: function() {
						return i
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					"catch": function(e) {
						return o.then(null, e)
					},
					pipe: function() {
						var e = arguments;
						return he.Deferred(function(t) {
							he.each(n, function(n, i) {
								var o = he.isFunction(e[i[4]]) && e[i[4]];
								r[i[1]](function() {
									var e = o && o.apply(this, arguments);
									e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					then: function(t, i, o) {
						function r(t, n, i, o) {
							return function() {
								var c = this,
									u = arguments,
									d = function() {
										var e, d;
										if (!(t < a)) {
											if (e = i.apply(c, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
											d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? o ? d.call(e, r(a, n, s, o), r(a, n, l, o)) : (a++, d.call(e, r(a, n, s, o), r(a, n, l, o), r(a, n, s, n.notifyWith))) : (i !== s && (c = void 0, u = [e]), (o || n.resolveWith)(c, u))
										}
									},
									p = o ? d : function() {
										try {
											d()
										} catch (e) {
											he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (i !== l && (c = void 0, u = [e]), n.rejectWith(c, u))
										}
									};
								t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
							}
						}
						var a = 0;
						return he.Deferred(function(e) {
							n[0][3].add(r(0, e, he.isFunction(o) ? o : s, e.notifyWith)), n[1][3].add(r(0, e, he.isFunction(t) ? t : s)), n[2][3].add(r(0, e, he.isFunction(i) ? i : l))
						}).promise()
					},
					promise: function(e) {
						return null != e ? he.extend(e, o) : o
					}
				},
				r = {};
			return he.each(n, function(e, t) {
				var a = t[2],
					s = t[5];
				o[t[1]] = a.add, s && a.add(function() {
					i = s
				}, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), r[t[0]] = function() {
					return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
				}, r[t[0] + "With"] = a.fireWith
			}), o.promise(r), t && t.call(r, r), r
		},
		when: function(e) {
			var t = arguments.length,
				n = t,
				i = Array(n),
				o = ie.call(arguments),
				r = he.Deferred(),
				a = function(e) {
					return function(n) {
						i[e] = this, o[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || r.resolveWith(i, o)
					}
				};
			if (t <= 1 && (c(e, r.done(a(n)).resolve, r.reject), "pending" === r.state() || he.isFunction(o[n] && o[n].then))) return r.then();
			for (; n--;) c(o[n], a(n), r.reject);
			return r.promise()
		}
	});
	var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	he.Deferred.exceptionHook = function(t, n) {
		e.console && e.console.warn && t && je.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
	}, he.readyException = function(t) {
		e.setTimeout(function() {
			throw t
		})
	};
	var Oe = he.Deferred();
	he.fn.ready = function(e) {
		return Oe.then(e)["catch"](function(e) {
			he.readyException(e)
		}), this
	}, he.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? he.readyWait++ : he.ready(!0)
		},
		ready: function(e) {
			(e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || Oe.resolveWith(te, [he]))
		}
	}), he.ready.then = Oe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
	var Ie = function(e, t, n, i, o, r, a) {
			var s = 0,
				l = e.length,
				c = null == n;
			if ("object" === he.type(n)) {
				o = !0;
				for (s in n) Ie(e, t, s, n[s], !0, r, a)
			} else if (void 0 !== i && (o = !0, he.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
					return c.call(he(e), n)
				})), t))
				for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
			return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
		},
		Le = function(e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};
	d.uid = 1, d.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var i, o = this.cache(e);
			if ("string" == typeof t) o[he.camelCase(t)] = n;
			else
				for (i in t) o[he.camelCase(i)] = t[i];
			return o
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, i = e[this.expando];
			if (void 0 !== i) {
				if (void 0 !== t) {
					he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(Ae) || []), n = t.length;
					for (; n--;) delete i[t[n]]
				}(void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !he.isEmptyObject(t)
		}
	};
	var Re = new d,
		Pe = new d,
		He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		qe = /[A-Z]/g;
	he.extend({
		hasData: function(e) {
			return Pe.hasData(e) || Re.hasData(e)
		},
		data: function(e, t, n) {
			return Pe.access(e, t, n)
		},
		removeData: function(e, t) {
			Pe.remove(e, t)
		},
		_data: function(e, t, n) {
			return Re.access(e, t, n)
		},
		_removeData: function(e, t) {
			Re.remove(e, t)
		}
	}), he.fn.extend({
		data: function(e, t) {
			var n, i, o, r = this[0],
				a = r && r.attributes;
			if (void 0 === e) {
				if (this.length && (o = Pe.get(r), 1 === r.nodeType && !Re.get(r, "hasDataAttrs"))) {
					for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), f(r, i, o[i])));
					Re.set(r, "hasDataAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function() {
				Pe.set(this, e)
			}) : Ie(this, function(t) {
				var n;
				if (r && void 0 === t) {
					if (n = Pe.get(r, e), void 0 !== n) return n;
					if (n = f(r, e), void 0 !== n) return n
				} else this.each(function() {
					Pe.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				Pe.remove(this, e)
			})
		}
	}), he.extend({
		queue: function(e, t, n) {
			var i;
			if (e) return t = (t || "fx") + "queue", i = Re.get(e, t), n && (!i || he.isArray(n) ? i = Re.access(e, t, he.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = he.queue(e, t),
				i = n.length,
				o = n.shift(),
				r = he._queueHooks(e, t),
				a = function() {
					he.dequeue(e, t)
				};
			"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Re.get(e, n) || Re.access(e, n, {
				empty: he.Callbacks("once memory").add(function() {
					Re.remove(e, [t + "queue", n])
				})
			})
		}
	}), he.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = he.queue(this, e, t);
				he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				he.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, i = 1,
				o = he.Deferred(),
				r = this,
				a = this.length,
				s = function() {
					--i || o.resolveWith(r, [r])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Re.get(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
			return s(), o.promise(t)
		}
	});
	var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		We = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
		Me = ["Top", "Right", "Bottom", "Left"],
		_e = function(e, t) {
			return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
		},
		Be = function(e, t, n, i) {
			var o, r, a = {};
			for (r in t) a[r] = e.style[r], e.style[r] = t[r];
			o = n.apply(e, i || []);
			for (r in t) e.style[r] = a[r];
			return o
		},
		Ue = {};
	he.fn.extend({
		show: function() {
			return m(this, !0)
		},
		hide: function() {
			return m(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				_e(this) ? he(this).show() : he(this).hide()
			})
		}
	});
	var ze = /^(?:checkbox|radio)$/i,
		Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		Xe = /^$|\/(?:java|ecma)script/i,
		Qe = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td;
	var Ke = /<|&#?\w+;/;
	! function() {
		var e = te.createDocumentFragment(),
			t = e.appendChild(te.createElement("div")),
			n = te.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
	}();
	var Ye = te.documentElement,
		Ge = /^key/,
		Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Je = /^([^.]*)(?:\.(.+)|)/;
	he.event = {
		global: {},
		add: function(e, t, n, i, o) {
			var r, a, s, l, c, u, d, p, f, h, g, m = Re.get(e);
			if (m)
				for (n.handler && (r = n, n = r.handler, o = r.selector), o && he.find.matchesSelector(Ye, o), n.guid || (n.guid = he.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
						return "undefined" != typeof he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
					}), t = (t || "").match(Ae) || [""], c = t.length; c--;) s = Je.exec(t[c]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f && (d = he.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = he.event.special[f] || {}, u = he.extend({
					type: f,
					origType: g,
					data: i,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && he.expr.match.needsContext.test(o),
					namespace: h.join(".")
				}, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), he.event.global[f] = !0)
		},
		remove: function(e, t, n, i, o) {
			var r, a, s, l, c, u, d, p, f, h, g, m = Re.hasData(e) && Re.get(e);
			if (m && (l = m.events)) {
				for (t = (t || "").match(Ae) || [""], c = t.length; c--;)
					if (s = Je.exec(t[c]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
						for (d = he.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = p.length; r--;) u = p[r], !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
						a && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || he.removeEvent(e, f, m.handle), delete l[f])
					} else
						for (f in l) he.event.remove(e, f + t[c], n, i, !0);
				he.isEmptyObject(l) && Re.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, i, o, r, a, s = he.event.fix(e),
				l = new Array(arguments.length),
				c = (Re.get(this, "events") || {})[s.type] || [],
				u = he.event.special[s.type] || {};
			for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
			if (s.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, s) !== !1) {
				for (a = he.event.handlers.call(this, s, c), t = 0;
					(o = a[t++]) && !s.isPropagationStopped();)
					for (s.currentTarget = o.elem, n = 0;
						(r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, i = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== i && (s.result = i) === !1 && (s.preventDefault(), s.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, s), s.result
			}
		},
		handlers: function(e, t) {
			var n, i, o, r, a, s = [],
				l = t.delegateCount,
				c = e.target;
			if (l && c.nodeType && !("click" === e.type && e.button >= 1))
				for (; c !== this; c = c.parentNode || this)
					if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
						for (r = [], a = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === a[o] && (a[o] = i.needsContext ? he(o, this).index(c) > -1 : he.find(o, this, null, [c]).length), a[o] && r.push(i);
						r.length && s.push({
							elem: c,
							handlers: r
						})
					}
			return c = this, l < t.length && s.push({
				elem: c,
				handlers: t.slice(l)
			}), s
		},
		addProp: function(e, t) {
			Object.defineProperty(he.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: he.isFunction(t) ? function() {
					if (this.originalEvent) return t(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(e) {
			return e[he.expando] ? e : new he.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== T() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === T() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
				},
				_default: function(e) {
					return he.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, he.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, he.Event = function(e, t) {
		return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? x : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
	}, he.Event.prototype = {
		constructor: he.Event,
		isDefaultPrevented: w,
		isPropagationStopped: w,
		isImmediatePropagationStopped: w,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, he.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(e) {
			var t = e.button;
			return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, he.event.addProp), he.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		he.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, i = this,
					o = e.relatedTarget,
					r = e.handleObj;
				return o && (o === i || he.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), he.fn.extend({
		on: function(e, t, n, i) {
			return C(this, e, t, n, i)
		},
		one: function(e, t, n, i) {
			return C(this, e, t, n, i, 1)
		},
		off: function(e, t, n) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, t, e[o]);
				return this
			}
			return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = w), this.each(function() {
				he.event.remove(this, e, n, t)
			})
		}
	});
	var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		tt = /<script|<style|<link/i,
		nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		it = /^true\/(.*)/,
		ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	he.extend({
		htmlPrefilter: function(e) {
			return e.replace(et, "<$1></$2>")
		},
		clone: function(e, t, n) {
			var i, o, r, a, s = e.cloneNode(!0),
				l = he.contains(e.ownerDocument, e);
			if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
				for (a = v(s), r = v(e), i = 0, o = r.length; i < o; i++) $(r[i], a[i]);
			if (t)
				if (n)
					for (r = r || v(e), a = a || v(s), i = 0, o = r.length; i < o; i++) D(r[i], a[i]);
				else D(e, s);
			return a = v(s, "script"), a.length > 0 && y(a, !l && v(e, "script")), s
		},
		cleanData: function(e) {
			for (var t, n, i, o = he.event.special, r = 0; void 0 !== (n = e[r]); r++)
				if (Le(n)) {
					if (t = n[Re.expando]) {
						if (t.events)
							for (i in t.events) o[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
						n[Re.expando] = void 0
					}
					n[Pe.expando] && (n[Pe.expando] = void 0)
				}
		}
	}), he.fn.extend({
		detach: function(e) {
			return A(this, e, !0)
		},
		remove: function(e) {
			return A(this, e)
		},
		text: function(e) {
			return Ie(this, function(e) {
				return void 0 === e ? he.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return N(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = k(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return N(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = k(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return N(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return N(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(v(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return he.clone(this, e, t)
			})
		},
		html: function(e) {
			return Ie(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !tt.test(e) && !Qe[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = he.htmlPrefilter(e);
					try {
						for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(v(t, !1)), t.innerHTML = e);
						t = 0
					} catch (o) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = [];
			return N(this, arguments, function(t) {
				var n = this.parentNode;
				he.inArray(this, e) < 0 && (he.cleanData(v(this)), n && n.replaceChild(t, this))
			}, e)
		}
	}), he.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		he.fn[e] = function(e) {
			for (var n, i = [], o = he(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), he(o[a])[t](n), re.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var rt = /^margin/,
		at = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
		st = function(t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		};
	! function() {
		function t() {
			if (s) {
				s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(a);
				var t = e.getComputedStyle(s);
				n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, Ye.removeChild(a), s = null
			}
		}
		var n, i, o, r, a = te.createElement("div"),
			s = te.createElement("div");
		s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(pe, {
			pixelPosition: function() {
				return t(), n
			},
			boxSizingReliable: function() {
				return t(), i
			},
			pixelMarginRight: function() {
				return t(), o
			},
			reliableMarginLeft: function() {
				return t(), r
			}
		}))
	}();
	var lt = /^(none|table(?!-c[ea]).+)/,
		ct = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ut = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		dt = ["Webkit", "Moz", "ms"],
		pt = te.createElement("div").style;
	he.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = j(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, r, a, s = he.camelCase(t),
					l = e.style;
				return t = he.cssProps[s] || (he.cssProps[s] = I(s) || s), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = We.exec(n)) && o[1] && (n = h(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (he.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n)), void 0)
			}
		},
		css: function(e, t, n, i) {
			var o, r, a, s = he.camelCase(t);
			return t = he.cssProps[s] || (he.cssProps[s] = I(s) || s), a = he.cssHooks[t] || he.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = j(e, t, i)), "normal" === o && t in ut && (o = ut[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
		}
	}), he.each(["height", "width"], function(e, t) {
		he.cssHooks[t] = {
			get: function(e, n, i) {
				if (n) return !lt.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? P(e, t, i) : Be(e, ct, function() {
					return P(e, t, i)
				})
			},
			set: function(e, n, i) {
				var o, r = i && st(e),
					a = i && R(e, t, i, "border-box" === he.css(e, "boxSizing", !1, r), r);
				return a && (o = We.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = he.css(e, t)), L(e, n, a)
			}
		}
	}), he.cssHooks.marginLeft = O(pe.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), he.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		he.cssHooks[e + t] = {
			expand: function(n) {
				for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Me[i] + t] = r[i] || r[i - 2] || r[0];
				return o
			}
		}, rt.test(e) || (he.cssHooks[e + t].set = L)
	}), he.fn.extend({
		css: function(e, t) {
			return Ie(this, function(e, t, n) {
				var i, o, r = {},
					a = 0;
				if (he.isArray(t)) {
					for (i = st(e), o = t.length; a < o; a++) r[t[a]] = he.css(e, t[a], !1, i);
					return r
				}
				return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
			}, e, t, arguments.length > 1)
		}
	}), he.Tween = H, H.prototype = {
		constructor: H,
		init: function(e, t, n, i, o, r) {
			this.elem = e, this.prop = n, this.easing = o || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (he.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = H.propHooks[this.prop];
			return e && e.get ? e.get(this) : H.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = H.propHooks[this.prop];
			return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
		}
	}, H.prototype.init.prototype = H.prototype, H.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
			},
			set: function(e) {
				he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, he.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, he.fx = H.prototype.init, he.fx.step = {};
	var ft, ht, gt = /^(?:toggle|show|hide)$/,
		mt = /queueHooks$/;
	he.Animation = he.extend(U, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return h(n.elem, e, We.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
				for (var n, i = 0, o = e.length; i < o; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
			},
			prefilters: [_],
			prefilter: function(e, t) {
				t ? U.prefilters.unshift(e) : U.prefilters.push(e)
			}
		}), he.speed = function(e, t, n) {
			var i = e && "object" == typeof e ? he.extend({}, e) : {
				complete: n || !n && t || he.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !he.isFunction(t) && t
			};
			return he.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
			}, i
		}, he.fn.extend({
			fadeTo: function(e, t, n, i) {
				return this.filter(_e).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			},
			animate: function(e, t, n, i) {
				var o = he.isEmptyObject(e),
					r = he.speed(t, n, i),
					a = function() {
						var t = U(this, he.extend({}, e), r);
						(o || Re.get(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
			},
			stop: function(e, t, n) {
				var i = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						o = null != e && e + "queueHooks",
						r = he.timers,
						a = Re.get(this);
					if (o) a[o] && a[o].stop && i(a[o]);
					else
						for (o in a) a[o] && a[o].stop && mt.test(o) && i(a[o]);
					for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
					!t && n || he.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = Re.get(this),
						i = n[e + "queue"],
						o = n[e + "queueHooks"],
						r = he.timers,
						a = i ? i.length : 0;
					for (n.finish = !0, he.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
					for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete n.finish
				})
			}
		}), he.each(["toggle", "show", "hide"], function(e, t) {
			var n = he.fn[t];
			he.fn[t] = function(e, i, o) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, o)
			}
		}), he.each({
			slideDown: W("show"),
			slideUp: W("hide"),
			slideToggle: W("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			he.fn[e] = function(e, n, i) {
				return this.animate(t, e, n, i)
			}
		}), he.timers = [], he.fx.tick = function() {
			var e, t = 0,
				n = he.timers;
			for (ft = he.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
			n.length || he.fx.stop(), ft = void 0
		}, he.fx.timer = function(e) {
			he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
		}, he.fx.interval = 13, he.fx.start = function() {
			ht || (ht = e.requestAnimationFrame ? e.requestAnimationFrame(q) : e.setInterval(he.fx.tick, he.fx.interval))
		}, he.fx.stop = function() {
			e.cancelAnimationFrame ? e.cancelAnimationFrame(ht) : e.clearInterval(ht), ht = null
		}, he.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, he.fn.delay = function(t, n) {
			return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
				var o = e.setTimeout(n, t);
				i.stop = function() {
					e.clearTimeout(o)
				}
			})
		},
		function() {
			var e = te.createElement("input"),
				t = te.createElement("select"),
				n = t.appendChild(te.createElement("option"));
			e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
		}();
	var vt, yt = he.expr.attrHandle;
	he.fn.extend({
		attr: function(e, t) {
			return Ie(this, he.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				he.removeAttr(this, e)
			})
		}
	}), he.extend({
		attr: function(e, t, n) {
			var i, o, r = e.nodeType;
			if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (o = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? void 0 : i))
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!pe.radioValue && "radio" === t && he.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, i = 0,
				o = t && t.match(Ae);
			if (o && 1 === e.nodeType)
				for (; n = o[i++];) e.removeAttribute(n)
		}
	}), vt = {
		set: function(e, t, n) {
			return t === !1 ? he.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = yt[t] || he.find.attr;
		yt[t] = function(e, t, i) {
			var o, r, a = t.toLowerCase();
			return i || (r = yt[a], yt[a] = o, o = null != n(e, t, i) ? a : null, yt[a] = r), o
		}
	});
	var bt = /^(?:input|select|textarea|button)$/i,
		xt = /^(?:a|area)$/i;
	he.fn.extend({
		prop: function(e, t) {
			return Ie(this, he.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[he.propFix[e] || e]
			})
		}
	}), he.extend({
		prop: function(e, t, n) {
			var i, o, r = e.nodeType;
			if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = he.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), pe.optSelected || (he.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		he.propFix[this.toLowerCase()] = this
	}), he.fn.extend({
		addClass: function(e) {
			var t, n, i, o, r, a, s, l = 0;
			if (he.isFunction(e)) return this.each(function(t) {
				he(this).addClass(e.call(this, t, V(this)))
			});
			if ("string" == typeof e && e)
				for (t = e.match(Ae) || []; n = this[l++];)
					if (o = V(n), i = 1 === n.nodeType && " " + z(o) + " ") {
						for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
						s = z(i), o !== s && n.setAttribute("class", s)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, i, o, r, a, s, l = 0;
			if (he.isFunction(e)) return this.each(function(t) {
				he(this).removeClass(e.call(this, t, V(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof e && e)
				for (t = e.match(Ae) || []; n = this[l++];)
					if (o = V(n), i = 1 === n.nodeType && " " + z(o) + " ") {
						for (a = 0; r = t[a++];)
							for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
						s = z(i), o !== s && n.setAttribute("class", s)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
				he(this).toggleClass(e.call(this, n, V(this), t), t)
			}) : this.each(function() {
				var t, i, o, r;
				if ("string" === n)
					for (i = 0, o = he(this), r = e.match(Ae) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
				else void 0 !== e && "boolean" !== n || (t = V(this), t && Re.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Re.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n, i = 0;
			for (t = " " + e + " "; n = this[i++];)
				if (1 === n.nodeType && (" " + z(V(n)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var wt = /\r/g;
	he.fn.extend({
		val: function(e) {
			var t, n, i, o = this[0]; {
				if (arguments.length) return i = he.isFunction(e), this.each(function(n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, he(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : he.isArray(o) && (o = he.map(o, function(e) {
						return null == e ? "" : e + ""
					})), t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
				});
				if (o) return t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
			}
		}
	}), he.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = he.find.attr(e, "value");
					return null != t ? t : z(he.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, i, o = e.options,
						r = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						l = a ? r + 1 : o.length;
					for (i = r < 0 ? l : a ? r : 0; i < l; i++)
						if (n = o[i], (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
							if (t = he(n).val(), a) return t;
							s.push(t)
						}
					return s
				},
				set: function(e, t) {
					for (var n, i, o = e.options, r = he.makeArray(t), a = o.length; a--;) i = o[a], (i.selected = he.inArray(he.valHooks.option.get(i), r) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), r
				}
			}
		}
	}), he.each(["radio", "checkbox"], function() {
		he.valHooks[this] = {
			set: function(e, t) {
				if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
			}
		}, pe.checkOn || (he.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Tt = /^(?:focusinfocus|focusoutblur)$/;
	he.extend(he.event, {
		trigger: function(t, n, i, o) {
			var r, a, s, l, c, u, d, p = [i || te],
				f = ce.call(t, "type") ? t.type : t,
				h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = s = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(f + he.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[he.expando] ? t : new he.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), d = he.event.special[f] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
				if (!o && !d.noBubble && !he.isWindow(i)) {
					for (l = d.delegateType || f, Tt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
					s === (i.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
				}
				for (r = 0;
					(a = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, u = (Re.get(a, "events") || {})[t.type] && Re.get(a, "handle"), u && u.apply(a, n), u = c && a[c], u && u.apply && Le(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
				return t.type = f, o || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !Le(i) || c && he.isFunction(i[f]) && !he.isWindow(i) && (s = i[c], s && (i[c] = null), he.event.triggered = f, i[f](), he.event.triggered = void 0, s && (i[c] = s)), t.result
			}
		},
		simulate: function(e, t, n) {
			var i = he.extend(new he.Event, n, {
				type: e,
				isSimulated: !0
			});
			he.event.trigger(i, null, t)
		}
	}), he.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				he.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return he.event.trigger(e, t, n, !0)
		}
	}), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
		he.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), he.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), pe.focusin = "onfocusin" in e, pe.focusin || he.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			he.event.simulate(t, e.target, he.event.fix(e))
		};
		he.event.special[t] = {
			setup: function() {
				var i = this.ownerDocument || this,
					o = Re.access(i, t);
				o || i.addEventListener(e, n, !0), Re.access(i, t, (o || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this,
					o = Re.access(i, t) - 1;
				o ? Re.access(i, t, o) : (i.removeEventListener(e, n, !0), Re.remove(i, t))
			}
		}
	});
	var Ct = e.location,
		kt = he.now(),
		Et = /\?/;
	he.parseXML = function(t) {
		var n;
		if (!t || "string" != typeof t) return null;
		try {
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch (i) {
			n = void 0
		}
		return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
	};
	var St = /\[\]$/,
		Dt = /\r?\n/g,
		$t = /^(?:submit|button|image|reset|file)$/i,
		Nt = /^(?:input|select|textarea|keygen)/i;
	he.param = function(e, t) {
		var n, i = [],
			o = function(e, t) {
				var n = he.isFunction(t) ? t() : t;
				i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
			o(this.name, this.value)
		});
		else
			for (n in e) X(n, e[n], t, o);
		return i.join("&")
	}, he.fn.extend({
		serialize: function() {
			return he.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = he.prop(this, "elements");
				return e ? he.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !he(this).is(":disabled") && Nt.test(this.nodeName) && !$t.test(e) && (this.checked || !ze.test(e))
			}).map(function(e, t) {
				var n = he(this).val();
				return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Dt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Dt, "\r\n")
				}
			}).get()
		}
	});
	var At = /%20/g,
		jt = /#.*$/,
		Ot = /([?&])_=[^&]*/,
		It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Rt = /^(?:GET|HEAD)$/,
		Pt = /^\/\//,
		Ht = {},
		qt = {},
		Ft = "*/".concat("*"),
		Wt = te.createElement("a");
	Wt.href = Ct.href, he.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ct.href,
			type: "GET",
			isLocal: Lt.test(Ct.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Ft,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": he.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Y(Y(e, he.ajaxSettings), t) : Y(he.ajaxSettings, e)
		},
		ajaxPrefilter: Q(Ht),
		ajaxTransport: Q(qt),
		ajax: function(t, n) {
			function i(t, n, i, s) {
				var c, p, f, x, w, T = n;
				u || (u = !0, l && e.clearTimeout(l), o = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (x = G(h, C, i)), x = Z(h, x, C, c), c ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (he.lastModified[r] = w), w = C.getResponseHeader("etag"), w && (he.etag[r] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, p = x.data, f = x.error, c = !f)) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", c ? v.resolveWith(g, [p, T, C]) : v.rejectWith(g, [C, T, f]), C.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : f]), y.fireWith(g, [C, T]), d && (m.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (n = t, t = void 0), n = n || {};
			var o, r, a, s, l, c, u, d, p, f, h = he.ajaxSetup({}, n),
				g = h.context || h,
				m = h.context && (g.nodeType || g.jquery) ? he(g) : he.event,
				v = he.Deferred(),
				y = he.Callbacks("once memory"),
				b = h.statusCode || {},
				x = {},
				w = {},
				T = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (u) {
							if (!s)
								for (s = {}; t = It.exec(a);) s[t[1].toLowerCase()] = t[2];
							t = s[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return u ? a : null
					},
					setRequestHeader: function(e, t) {
						return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == u && (h.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (u) C.always(e[C.status]);
							else
								for (t in e) b[t] = [b[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || T;
						return o && o.abort(t), i(0, t), this
					}
				};
			if (v.promise(C), h.url = ((t || h.url || Ct.href) + "").replace(Pt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ae) || [""], null == h.crossDomain) {
				c = te.createElement("a");
				try {
					c.href = h.url, c.href = c.href, h.crossDomain = Wt.protocol + "//" + Wt.host != c.protocol + "//" + c.host
				} catch (k) {
					h.crossDomain = !0
				}
			}
			if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), K(Ht, h, n, C), u) return C;
			d = he.event && h.global, d && 0 === he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Rt.test(h.type), r = h.url.replace(jt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (f = h.url.slice(r.length), h.data && (r += (Et.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (r = r.replace(Ot, "$1"), f = (Et.test(r) ? "&" : "?") + "_=" + kt++ +f), h.url = r + f), h.ifModified && (he.lastModified[r] && C.setRequestHeader("If-Modified-Since", he.lastModified[r]), he.etag[r] && C.setRequestHeader("If-None-Match", he.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]);
			for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
			if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || u)) return C.abort();
			if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), o = K(qt, h, n, C)) {
				if (C.readyState = 1, d && m.trigger("ajaxSend", [C, h]), u) return C;
				h.async && h.timeout > 0 && (l = e.setTimeout(function() {
					C.abort("timeout")
				}, h.timeout));
				try {
					u = !1, o.send(x, i)
				} catch (k) {
					if (u) throw k;
					i(-1, k)
				}
			} else i(-1, "No Transport");
			return C
		},
		getJSON: function(e, t, n) {
			return he.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return he.get(e, void 0, t, "script")
		}
	}), he.each(["get", "post"], function(e, t) {
		he[t] = function(e, n, i, o) {
			return he.isFunction(n) && (o = o || i, i = n, n = void 0), he.ajax(he.extend({
				url: e,
				type: t,
				dataType: o,
				data: n,
				success: i
			}, he.isPlainObject(e) && e))
		}
	}), he._evalUrl = function(e) {
		return he.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, he.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(e) {
			return he.isFunction(e) ? this.each(function(t) {
				he(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = he(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = he.isFunction(e);
			return this.each(function(n) {
				he(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				he(this).replaceWith(this.childNodes)
			}), this
		}
	}), he.expr.pseudos.hidden = function(e) {
		return !he.expr.pseudos.visible(e)
	}, he.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, he.ajaxSettings.xhr = function() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	};
	var Mt = {
			0: 200,
			1223: 204
		},
		_t = he.ajaxSettings.xhr();
	pe.cors = !!_t && "withCredentials" in _t, pe.ajax = _t = !!_t, he.ajaxTransport(function(t) {
		var n, i;
		if (pe.cors || _t && !t.crossDomain) return {
			send: function(o, r) {
				var a, s = t.xhr();
				if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (a in t.xhrFields) s[a] = t.xhrFields[a];
				t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
				for (a in o) s.setRequestHeader(a, o[a]);
				n = function(e) {
					return function() {
						n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Mt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
							binary: s.response
						} : {
							text: s.responseText
						}, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
					4 === s.readyState && e.setTimeout(function() {
						n && i()
					})
				}, n = n("abort");
				try {
					s.send(t.hasContent && t.data || null)
				} catch (l) {
					if (n) throw l
				}
			},
			abort: function() {
				n && n()
			}
		}
	}), he.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), he.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return he.globalEval(e), e
			}
		}
	}), he.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), he.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(i, o) {
					t = he("<script>").prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
					}), te.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var Bt = [],
		Ut = /(=)\?(?=&|$)|\?\?/;
	he.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Bt.pop() || he.expando + "_" + kt++;
			return this[e] = !0, e
		}
	}), he.ajaxPrefilter("json jsonp", function(t, n, i) {
		var o, r, a, s = t.jsonp !== !1 && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
		if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ut, "$1" + o) : t.jsonp !== !1 && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
			return a || he.error(o + " was not called"), a[0]
		}, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
			a = arguments
		}, i.always(function() {
			void 0 === r ? he(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Bt.push(o)), a && he.isFunction(r) && r(a[0]), a = r = void 0
		}), "script"
	}), pe.createHTMLDocument = function() {
		var e = te.implementation.createHTMLDocument("").body;
		return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
	}(), he.parseHTML = function(e, t, n) {
		if ("string" != typeof e) return [];
		"boolean" == typeof t && (n = t, t = !1);
		var i, o, r;
		return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), o = Ce.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = b([e], t, r), r && r.length && he(r).remove(), he.merge([], o.childNodes))
	}, he.fn.load = function(e, t, n) {
		var i, o, r, a = this,
			s = e.indexOf(" ");
		return s > -1 && (i = z(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && he.ajax({
			url: e,
			type: o || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			r = arguments, a.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, r || [e.responseText, t, e])
			})
		}), this
	}, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		he.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), he.expr.pseudos.animated = function(e) {
		return he.grep(he.timers, function(t) {
			return e === t.elem
		}).length
	}, he.offset = {
		setOffset: function(e, t, n) {
			var i, o, r, a, s, l, c, u = he.css(e, "position"),
				d = he(e),
				p = {};
			"static" === u && (e.style.position = "relative"), s = d.offset(), r = he.css(e, "top"), l = he.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
		}
	}, he.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				he.offset.setOffset(this, e, t)
			});
			var t, n, i, o, r = this[0];
			if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), i.width || i.height ? (o = r.ownerDocument, n = J(o), t = o.documentElement, {
				top: i.top + n.pageYOffset - t.clientTop,
				left: i.left + n.pageXOffset - t.clientLeft
			}) : i) : {
				top: 0,
				left: 0
			}
		},
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					i = {
						top: 0,
						left: 0
					};
				return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (i = e.offset()), i = {
					top: i.top + he.css(e[0], "borderTopWidth", !0),
					left: i.left + he.css(e[0], "borderLeftWidth", !0)
				}), {
					top: t.top - i.top - he.css(n, "marginTop", !0),
					left: t.left - i.left - he.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
				return e || Ye
			})
		}
	}), he.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = "pageYOffset" === t;
		he.fn[e] = function(i) {
			return Ie(this, function(e, i, o) {
				var r = J(e);
				return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
			}, e, i, arguments.length)
		}
	}), he.each(["top", "left"], function(e, t) {
		he.cssHooks[t] = O(pe.pixelPosition, function(e, n) {
			if (n) return n = j(e, t), at.test(n) ? he(e).position()[t] + "px" : n
		})
	}), he.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		he.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, i) {
			he.fn[i] = function(o, r) {
				var a = arguments.length && (n || "boolean" != typeof o),
					s = n || (o === !0 || r === !0 ? "margin" : "border");
				return Ie(this, function(t, n, o) {
					var r;
					return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? he.css(t, n, s) : he.style(t, n, o, s)
				}, t, a ? o : void 0, a)
			}
		})
	}), he.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
		return he
	});
	var zt = e.jQuery,
		Vt = e.$;
	return he.noConflict = function(t) {
		return e.$ === he && (e.$ = Vt), t && e.jQuery === he && (e.jQuery = zt), he
	}, t || (e.jQuery = e.$ = he), he
}),
function(e, t, n, i) {
	"use strict";
	var o = n("html"),
		r = n(e),
		a = n(t),
		s = n.fancybox = function() {
			s.open.apply(this, arguments)
		},
		l = navigator.userAgent.match(/msie/i),
		c = null,
		u = t.createTouch !== i,
		d = function(e) {
			return e && e.hasOwnProperty && e instanceof n
		},
		p = function(e) {
			return e && "string" === n.type(e)
		},
		f = function(e) {
			return p(e) && e.indexOf("%") > 0
		},
		h = function(e) {
			return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
		},
		g = function(e, t) {
			var n = parseInt(e, 10) || 0;
			return t && f(e) && (n = s.getViewport()[t] / 100 * n), Math.ceil(n)
		},
		m = function(e, t) {
			return g(e, t) + "px"
		};
	n.extend(s, {
		version: "2.1.5",
		defaults: {
			padding: 15,
			margin: 20,
			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1,
			autoSize: !0,
			autoHeight: !1,
			autoWidth: !1,
			autoResize: !0,
			autoCenter: !u,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: .5,
			leftRatio: .5,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3e3,
			preload: 3,
			modal: !1,
			loop: !0,
			ajax: {
				dataType: "html",
				headers: {
					"X-fancyBox": !0
				}
			},
			iframe: {
				scrolling: "auto",
				preload: !0
			},
			swf: {
				wmode: "transparent",
				allowfullscreen: "true",
				allowscriptaccess: "always"
			},
			keys: {
				next: {
					13: "left",
					34: "up",
					39: "left",
					40: "up"
				},
				prev: {
					8: "right",
					33: "down",
					37: "right",
					38: "down"
				},
				close: [27],
				play: [32],
				toggle: [70]
			},
			direction: {
				next: "left",
				prev: "right"
			},
			scrollOutside: !0,
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},
			openEffect: "fade",
			openSpeed: 250,
			openEasing: "swing",
			openOpacity: !0,
			openMethod: "zoomIn",
			closeEffect: "fade",
			closeSpeed: 250,
			closeEasing: "swing",
			closeOpacity: !0,
			closeMethod: "zoomOut",
			nextEffect: "elastic",
			nextSpeed: 250,
			nextEasing: "swing",
			nextMethod: "changeIn",
			prevEffect: "elastic",
			prevSpeed: 250,
			prevEasing: "swing",
			prevMethod: "changeOut",
			helpers: {
				overlay: !0,
				title: !0
			},
			onCancel: n.noop,
			beforeLoad: n.noop,
			afterLoad: n.noop,
			beforeShow: n.noop,
			afterShow: n.noop,
			beforeChange: n.noop,
			beforeClose: n.noop,
			afterClose: n.noop
		},
		group: {},
		opts: {},
		previous: null,
		coming: null,
		current: null,
		isActive: !1,
		isOpen: !1,
		isOpened: !1,
		wrap: null,
		skin: null,
		outer: null,
		inner: null,
		player: {
			timer: null,
			isActive: !1
		},
		ajaxLoad: null,
		imgPreload: null,
		transitions: {},
		helpers: {},
		open: function(e, t) {
			if (e && (n.isPlainObject(t) || (t = {}), !1 !== s.close(!0))) return n.isArray(e) || (e = d(e) ? n(e).get() : [e]), n.each(e, function(o, r) {
				var a, l, c, u, f, h, g, m = {};
				"object" === n.type(r) && (r.nodeType && (r = n(r)), d(r) ? (m = {
					href: r.data("fancybox-href") || r.attr("href"),
					title: r.data("fancybox-title") || r.attr("title"),
					isDom: !0,
					element: r
				}, n.metadata && n.extend(!0, m, r.metadata())) : m = r), a = t.href || m.href || (p(r) ? r : null), l = t.title !== i ? t.title : m.title || "", c = t.content || m.content, u = c ? "html" : t.type || m.type, !u && m.isDom && (u = r.data("fancybox-type"), u || (f = r.prop("class").match(/fancybox\.(\w+)/), u = f ? f[1] : null)), p(a) && (u || (s.isImage(a) ? u = "image" : s.isSWF(a) ? u = "swf" : "#" === a.charAt(0) ? u = "inline" : p(r) && (u = "html", c = r)), "ajax" === u && (h = a.split(/\s+/, 2), a = h.shift(), g = h.shift())), c || ("inline" === u ? a ? c = n(p(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : m.isDom && (c = r) : "html" === u ? c = a : u || a || !m.isDom || (u = "inline", c = r)), n.extend(m, {
					href: a,
					type: u,
					content: c,
					title: l,
					selector: g
				}), e[o] = m
			}), s.opts = n.extend(!0, {}, s.defaults, t), t.keys !== i && (s.opts.keys = !!t.keys && n.extend({}, s.defaults.keys, t.keys)), s.group = e, s._start(s.opts.index)
		},
		cancel: function() {
			var e = s.coming;
			e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(e))
		},
		close: function(e) {
			s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && e !== !0 ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut())))
		},
		play: function(e) {
			var t = function() {
					clearTimeout(s.player.timer)
				},
				n = function() {
					t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
				},
				i = function() {
					t(), a.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
				},
				o = function() {
					s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, a.bind({
						"onCancel.player beforeClose.player": i,
						"onUpdate.player": n,
						"beforeLoad.player": t
					}), n(), s.trigger("onPlayStart"))
				};
			e === !0 || !s.player.isActive && e !== !1 ? o() : i()
		},
		next: function(e) {
			var t = s.current;
			t && (p(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
		},
		prev: function(e) {
			var t = s.current;
			t && (p(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
		},
		jumpto: function(e, t, n) {
			var o = s.current;
			o && (e = g(e), s.direction = t || o.direction[e >= o.index ? "next" : "prev"], s.router = n || "jumpto", o.loop && (e < 0 && (e = o.group.length + e % o.group.length), e %= o.group.length), o.group[e] !== i && (s.cancel(), s._start(e)))
		},
		reposition: function(e, t) {
			var i, o = s.current,
				r = o ? o.wrap : null;
			r && (i = s._getPosition(t), e && "scroll" === e.type ? (delete i.position, r.stop(!0, !0).animate(i, 200)) : (r.css(i), o.pos = n.extend({}, o.dim, i)))
		},
		update: function(e) {
			var t = e && e.type,
				n = !t || "orientationchange" === t;
			n && (clearTimeout(c), c = null), s.isOpen && !c && (c = setTimeout(function() {
				var i = s.current;
				i && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && i.autoResize) && s._setDimension(), "scroll" === t && i.canShrink || s.reposition(e), s.trigger("onUpdate"), c = null)
			}, n && !u ? 0 : 300))
		},
		toggle: function(e) {
			s.isOpen && (s.current.fitToView = "boolean" === n.type(e) ? e : !s.current.fitToView, u && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
		},
		hideLoading: function() {
			a.unbind(".loading"), n("#fancybox-loading").remove()
		},
		showLoading: function() {
			var e, t;
			s.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), a.bind("keydown.loading", function(e) {
				27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
			}), s.defaults.fixed || (t = s.getViewport(), e.css({
				position: "absolute",
				top: .5 * t.h + t.y,
				left: .5 * t.w + t.x
			}))
		},
		getViewport: function() {
			var t = s.current && s.current.locked || !1,
				n = {
					x: r.scrollLeft(),
					y: r.scrollTop()
				};
			return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = u && e.innerWidth ? e.innerWidth : r.width(), n.h = u && e.innerHeight ? e.innerHeight : r.height()), n
		},
		unbindEvents: function() {
			s.wrap && d(s.wrap) && s.wrap.unbind(".fb"), a.unbind(".fb"), r.unbind(".fb")
		},
		bindEvents: function() {
			var e, t = s.current;
			t && (r.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), e = t.keys, e && a.bind("keydown.fb", function(o) {
				var r = o.which || o.keyCode,
					a = o.target || o.srcElement;
				return (27 !== r || !s.coming) && void(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || a && (a.type || n(a).is("[contenteditable]")) || n.each(e, function(e, a) {
					return t.group.length > 1 && a[r] !== i ? (s[e](a[r]), o.preventDefault(), !1) : n.inArray(r, a) > -1 ? (s[e](), o.preventDefault(), !1) : void 0
				}))
			}), n.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function(e, i, o, r) {
				for (var a = e.target || null, l = n(a), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) c = h(l[0]), l = n(l).parent();
				0 === i || c || s.group.length > 1 && !t.canShrink && (r > 0 || o > 0 ? s.prev(r > 0 ? "down" : "left") : (r < 0 || o < 0) && s.next(r < 0 ? "up" : "right"), e.preventDefault())
			}))
		},
		trigger: function(e, t) {
			var i, o = t || s.coming || s.current;
			if (o) {
				if (n.isFunction(o[e]) && (i = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), i === !1) return !1;
				o.helpers && n.each(o.helpers, function(t, i) {
					i && s.helpers[t] && n.isFunction(s.helpers[t][e]) && s.helpers[t][e](n.extend(!0, {}, s.helpers[t].defaults, i), o)
				}), a.trigger(e)
			}
		},
		isImage: function(e) {
			return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
		},
		isSWF: function(e) {
			return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
		},
		_start: function(e) {
			var t, i, o, r, a, l = {};
			if (e = g(e), t = s.group[e] || null, !t) return !1;
			if (l = n.extend(!0, {}, s.opts, t), r = l.margin, a = l.padding, "number" === n.type(r) && (l.margin = [r, r, r, r]), "number" === n.type(a) && (l.padding = [a, a, a, a]), l.modal && n.extend(!0, l, {
					closeBtn: !1,
					closeClick: !1,
					nextClick: !1,
					arrows: !1,
					mouseWheel: !1,
					keys: null,
					helpers: {
						overlay: {
							closeClick: !1
						}
					}
				}), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = s.group, l.index = e, s.coming = l, !1 === s.trigger("beforeLoad")) return void(s.coming = null);
			if (o = l.type, i = l.href, !o) return s.coming = null, !(!s.current || !s.router || "jumpto" === s.router) && (s.current.index = e, s[s.router](s.direction));
			if (s.isActive = !0, "image" !== o && "swf" !== o || (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === o && (l.aspectRatio = !0), "iframe" === o && u && (l.scrolling = "scroll"), l.wrap = n(l.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), n.extend(l, {
					skin: n(".fancybox-skin", l.wrap),
					outer: n(".fancybox-outer", l.wrap),
					inner: n(".fancybox-inner", l.wrap)
				}), n.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
					l.skin.css("padding" + t, m(l.padding[e]))
				}), s.trigger("onReady"), "inline" === o || "html" === o) {
				if (!l.content || !l.content.length) return s._error("content")
			} else if (!i) return s._error("href");
			"image" === o ? s._loadImage() : "ajax" === o ? s._loadAjax() : "iframe" === o ? s._loadIframe() : s._afterLoad()
		},
		_error: function(e) {
			n.extend(s.coming, {
				type: "html",
				autoWidth: !0,
				autoHeight: !0,
				minWidth: 0,
				minHeight: 0,
				scrolling: "no",
				hasError: e,
				content: s.coming.tpl.error
			}), s._afterLoad()
		},
		_loadImage: function() {
			var e = s.imgPreload = new Image;
			e.onload = function() {
				this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
			}, e.onerror = function() {
				this.onload = this.onerror = null, s._error("image")
			}, e.src = s.coming.href, e.complete !== !0 && s.showLoading()
		},
		_loadAjax: function() {
			var e = s.coming;
			s.showLoading(), s.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
				url: e.href,
				error: function(e, t) {
					s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
				},
				success: function(t, n) {
					"success" === n && (e.content = t, s._afterLoad())
				}
			}))
		},
		_loadIframe: function() {
			var e = s.coming,
				t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : e.iframe.scrolling).attr("src", e.href);
			n(e.wrap).bind("onReset", function() {
				try {
					n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
				} catch (e) {}
			}), e.iframe.preload && (s.showLoading(), t.one("load", function() {
				n(this).data("ready", 1), u || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
			})), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
		},
		_preloadImages: function() {
			var e, t, n = s.group,
				i = s.current,
				o = n.length,
				r = i.preload ? Math.min(i.preload, o - 1) : 0;
			for (t = 1; t <= r; t += 1) e = n[(i.index + t) % o], "image" === e.type && e.href && ((new Image).src = e.href)
		},
		_afterLoad: function() {
			var e, t, i, o, r, a, l = s.coming,
				c = s.current,
				u = "fancybox-placeholder";
			if (s.hideLoading(), l && s.isActive !== !1) {
				if (!1 === s.trigger("afterLoad", l, c)) return l.wrap.stop(!0).trigger("onReset").remove(), void(s.coming = null);
				switch (c && (s.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), e = l, t = l.content, i = l.type, o = l.scrolling, n.extend(s, {
					wrap: e.wrap,
					skin: e.skin,
					outer: e.outer,
					inner: e.inner,
					current: e,
					previous: c
				}), r = e.href, i) {
					case "inline":
					case "ajax":
					case "html":
						e.selector ? t = n("<div>").html(t).find(e.selector) : d(t) && (t.data(u) || t.data(u, n('<div class="' + u + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function() {
							n(this).find(t).length && t.hide().replaceAll(t.data(u)).data(u, !1)
						}));
						break;
					case "image":
						t = e.tpl.image.replace("{href}", r);
						break;
					case "swf":
						t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + r + '"></param>', a = "", n.each(e.swf, function(e, n) {
							t += '<param name="' + e + '" value="' + n + '"></param>', a += " " + e + '="' + n + '"'
						}), t += '<embed src="' + r + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
				}
				d(t) && t.parent().is(e.inner) || e.inner.append(t), s.trigger("beforeShow"), e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? c.prevMethod && s.transitions[c.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? e.nextMethod : e.openMethod](), s._preloadImages()
			}
		},
		_setDimension: function() {
			var e, t, i, o, r, a, l, c, u, d, p, h, v, y, b, x = s.getViewport(),
				w = 0,
				T = !1,
				C = !1,
				k = s.wrap,
				E = s.skin,
				S = s.inner,
				D = s.current,
				$ = D.width,
				N = D.height,
				A = D.minWidth,
				j = D.minHeight,
				O = D.maxWidth,
				I = D.maxHeight,
				L = D.scrolling,
				R = D.scrollOutside ? D.scrollbarWidth : 0,
				P = D.margin,
				H = g(P[1] + P[3]),
				q = g(P[0] + P[2]);
			if (k.add(E).add(S).width("auto").height("auto").removeClass("fancybox-tmp"), e = g(E.outerWidth(!0) - E.width()), t = g(E.outerHeight(!0) - E.height()), i = H + e, o = q + t, r = f($) ? (x.w - i) * g($) / 100 : $, a = f(N) ? (x.h - o) * g(N) / 100 : N, "iframe" === D.type) {
				if (y = D.content, D.autoHeight && 1 === y.data("ready")) try {
					y[0].contentWindow.document.location && (S.width(r).height(9999), b = y.contents().find("body"), R && b.css("overflow-x", "hidden"), a = b.outerHeight(!0))
				} catch (F) {}
			} else(D.autoWidth || D.autoHeight) && (S.addClass("fancybox-tmp"), D.autoWidth || S.width(r), D.autoHeight || S.height(a), D.autoWidth && (r = S.width()), D.autoHeight && (a = S.height()), S.removeClass("fancybox-tmp"));
			if ($ = g(r), N = g(a), u = r / a, A = g(f(A) ? g(A, "w") - i : A), O = g(f(O) ? g(O, "w") - i : O), j = g(f(j) ? g(j, "h") - o : j), I = g(f(I) ? g(I, "h") - o : I), l = O, c = I, D.fitToView && (O = Math.min(x.w - i, O), I = Math.min(x.h - o, I)), h = x.w - H, v = x.h - q, D.aspectRatio ? ($ > O && ($ = O, N = g($ / u)), N > I && (N = I, $ = g(N * u)), $ < A && ($ = A, N = g($ / u)), N < j && (N = j, $ = g(N * u))) : ($ = Math.max(A, Math.min($, O)), D.autoHeight && "iframe" !== D.type && (S.width($), N = S.height()), N = Math.max(j, Math.min(N, I))), D.fitToView)
				if (S.width($).height(N), k.width($ + e), d = k.width(), p = k.height(), D.aspectRatio)
					for (;
						(d > h || p > v) && $ > A && N > j && !(w++ > 19);) N = Math.max(j, Math.min(I, N - 10)), $ = g(N * u), $ < A && ($ = A, N = g($ / u)), $ > O && ($ = O, N = g($ / u)), S.width($).height(N), k.width($ + e), d = k.width(), p = k.height();
				else $ = Math.max(A, Math.min($, $ - (d - h))), N = Math.max(j, Math.min(N, N - (p - v)));
			R && "auto" === L && N < a && $ + e + R < h && ($ += R), S.width($).height(N), k.width($ + e), d = k.width(), p = k.height(), T = (d > h || p > v) && $ > A && N > j, C = D.aspectRatio ? $ < l && N < c && $ < r && N < a : ($ < l || N < c) && ($ < r || N < a), n.extend(D, {
				dim: {
					width: m(d),
					height: m(p)
				},
				origWidth: r,
				origHeight: a,
				canShrink: T,
				canExpand: C,
				wPadding: e,
				hPadding: t,
				wrapSpace: p - E.outerHeight(!0),
				skinSpace: E.height() - N
			}), !y && D.autoHeight && N > j && N < I && !C && S.height("auto")
		},
		_getPosition: function(e) {
			var t = s.current,
				n = s.getViewport(),
				i = t.margin,
				o = s.wrap.width() + i[1] + i[3],
				r = s.wrap.height() + i[0] + i[2],
				a = {
					position: "absolute",
					top: i[0],
					left: i[3]
				};
			return t.autoCenter && t.fixed && !e && r <= n.h && o <= n.w ? a.position = "fixed" : t.locked || (a.top += n.y, a.left += n.x), a.top = m(Math.max(a.top, a.top + (n.h - r) * t.topRatio)), a.left = m(Math.max(a.left, a.left + (n.w - o) * t.leftRatio)), a
		},
		_afterZoomIn: function() {
			var e = s.current;
			e && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened"), s.update(), (e.closeClick || e.nextClick && s.group.length > 1) && s.inner.css("cursor", "pointer").bind("click.fb", function(t) {
				n(t.target).is("a") || n(t.target).parent().is("a") || (t.preventDefault(), s[e.closeClick ? "close" : "next"]())
			}), e.closeBtn && n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function(e) {
				e.preventDefault(), s.close()
			}), e.arrows && s.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && n(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play()) : s.play(!1))
		},
		_afterZoomOut: function(e) {
			e = e || s.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(s, {
				group: {},
				opts: {},
				router: !1,
				current: null,
				isActive: !1,
				isOpened: !1,
				isOpen: !1,
				isClosing: !1,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			}), s.trigger("afterClose", e)
		}
	}), s.transitions = {
		getOrigPosition: function() {
			var e = s.current,
				t = e.element,
				n = e.orig,
				i = {},
				o = 50,
				r = 50,
				a = e.hPadding,
				l = e.wPadding,
				c = s.getViewport();
			return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), d(n) ? (i = n.offset(), n.is("img") && (o = n.outerWidth(), r = n.outerHeight())) : (i.top = c.y + (c.h - r) * e.topRatio, i.left = c.x + (c.w - o) * e.leftRatio), ("fixed" === s.wrap.css("position") || e.locked) && (i.top -= c.y, i.left -= c.x), i = {
				top: m(i.top - a * e.topRatio),
				left: m(i.left - l * e.leftRatio),
				width: m(o + l),
				height: m(r + a)
			}
		},
		step: function(e, t) {
			var n, i, o, r = t.prop,
				a = s.current,
				l = a.wrapSpace,
				c = a.skinSpace;
			"width" !== r && "height" !== r || (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (n = 1 - n), i = "width" === r ? a.wPadding : a.hPadding, o = e - i, s.skin[r](g("width" === r ? o : o - l * n)), s.inner[r](g("width" === r ? o : o - l * n - c * n)))
		},
		zoomIn: function() {
			var e = s.current,
				t = e.pos,
				i = e.openEffect,
				o = "elastic" === i,
				r = n.extend({
					opacity: 1
				}, t);
			delete r.position, o ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), s.wrap.css(t).animate(r, {
				duration: "none" === i ? 0 : e.openSpeed,
				easing: e.openEasing,
				step: o ? this.step : null,
				complete: s._afterZoomIn
			})
		},
		zoomOut: function() {
			var e = s.current,
				t = e.closeEffect,
				n = "elastic" === t,
				i = {
					opacity: .1
				};
			n && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), s.wrap.animate(i, {
				duration: "none" === t ? 0 : e.closeSpeed,
				easing: e.closeEasing,
				step: n ? this.step : null,
				complete: s._afterZoomOut
			})
		},
		changeIn: function() {
			var e, t = s.current,
				n = t.nextEffect,
				i = t.pos,
				o = {
					opacity: 1
				},
				r = s.direction,
				a = 200;
			i.opacity = .1, "elastic" === n && (e = "down" === r || "up" === r ? "top" : "left", "down" === r || "right" === r ? (i[e] = m(g(i[e]) - a), o[e] = "+=" + a + "px") : (i[e] = m(g(i[e]) + a), o[e] = "-=" + a + "px")), "none" === n ? s._afterZoomIn() : s.wrap.css(i).animate(o, {
				duration: t.nextSpeed,
				easing: t.nextEasing,
				complete: s._afterZoomIn
			})
		},
		changeOut: function() {
			var e = s.previous,
				t = e.prevEffect,
				i = {
					opacity: .1
				},
				o = s.direction,
				r = 200;
			"elastic" === t && (i["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=" + r + "px"), e.wrap.animate(i, {
				duration: "none" === t ? 0 : e.prevSpeed,
				easing: e.prevEasing,
				complete: function() {
					n(this).trigger("onReset").remove()
				}
			})
		}
	}, s.helpers.overlay = {
		defaults: {
			closeClick: !0,
			speedOut: 200,
			showEarly: !0,
			css: {},
			locked: !u,
			fixed: !0
		},
		overlay: null,
		fixed: !1,
		el: n("html"),
		create: function(e) {
			e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(s.coming ? s.coming.parent : e.parent), this.fixed = !1, e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
		},
		open: function(e) {
			var t = this;
			e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (r.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
				if (n(e.target).hasClass("fancybox-overlay")) return s.isActive ? s.close() : t.close(), !1
			}), this.overlay.css(e.css).show()
		},
		close: function() {
			var e, t;
			r.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = r.scrollTop(), t = r.scrollLeft(), this.el.removeClass("fancybox-lock"), r.scrollTop(e).scrollLeft(t)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
				overlay: null,
				fixed: !1
			})
		},
		update: function() {
			var e, n = "100%";
			this.overlay.width(n).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), a.width() > e && (n = a.width())) : a.width() > r.width() && (n = a.width()), this.overlay.width(n).height(a.height())
		},
		onReady: function(e, t) {
			var i = this.overlay;
			n(".fancybox-overlay").stop(!0, !0), i || this.create(e), e.locked && this.fixed && t.fixed && (i || (this.margin = a.height() > r.height() && n("html").css("margin-right").replace("px", "")), t.locked = this.overlay.append(t.wrap), t.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
		},
		beforeShow: function(e, t) {
			var i, o;
			t.locked && (this.margin !== !1 && (n("*").filter(function() {
				return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
			}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = r.scrollTop(), o = r.scrollLeft(), this.el.addClass("fancybox-lock"), r.scrollTop(i).scrollLeft(o)), this.open(e)
		},
		onUpdate: function() {
			this.fixed || this.update()
		},
		afterClose: function(e) {
			this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
		}
	}, s.helpers.title = {
		defaults: {
			type: "float",
			position: "bottom"
		},
		beforeShow: function(e) {
			var t, i, o = s.current,
				r = o.title,
				a = e.type;
			if (n.isFunction(r) && (r = r.call(o.element, o)), p(r) && "" !== n.trim(r)) {
				switch (t = n('<div class="fancybox-title fancybox-title-' + a + '-wrap">' + r + "</div>"), a) {
					case "inside":
						i = s.skin;
						break;
					case "outside":
						i = s.wrap;
						break;
					case "over":
						i = s.inner;
						break;
					default:
						i = s.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(g(t.css("margin-bottom")))
				}
				t["top" === e.position ? "prependTo" : "appendTo"](i)
			}
		}
	}, n.fn.fancybox = function(e) {
		var t, i = n(this),
			o = this.selector || "",
			r = function(r) {
				var a, l, c = n(this).blur(),
					u = t;
				r.ctrlKey || r.altKey || r.shiftKey || r.metaKey || c.is(".fancybox-wrap") || (a = e.groupAttr || "data-fancybox-group", l = c.attr(a), l || (a = "rel", l = c.get(0)[a]), l && "" !== l && "nofollow" !== l && (c = o.length ? n(o) : i, c = c.filter("[" + a + '="' + l + '"]'), u = c.index(this)), e.index = u, s.open(c, e) !== !1 && r.preventDefault())
			};
		return e = e || {}, t = e.index || 0, o && e.live !== !1 ? a.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", r) : i.unbind("click.fb-start").bind("click.fb-start", r), this.filter("[data-fancybox-start=1]").trigger("click"), this
	}, a.ready(function() {
		var t, r;
		n.scrollbarWidth === i && (n.scrollbarWidth = function() {
			var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
				t = e.children(),
				i = t.innerWidth() - t.height(99).innerWidth();
			return e.remove(), i
		}), n.support.fixedPosition === i && (n.support.fixedPosition = function() {
			var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
				t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
			return e.remove(), t
		}()), n.extend(s.defaults, {
			scrollbarWidth: n.scrollbarWidth(),
			fixed: n.support.fixedPosition,
			parent: n("body")
		}), t = n(e).width(), o.addClass("fancybox-lock-test"), r = n(e).width(), o.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (r - t) + "px;}</style>").appendTo("head")
	})
}(window, document, jQuery), + function(e) {
	"use strict";

	function t() {
		var e = document.createElement("bootstrap"),
			t = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var n in t)
			if (void 0 !== e.style[n]) return {
				end: t[n]
			};
		return !1
	}
	e.fn.emulateTransitionEnd = function(t) {
		var n = !1,
			i = this;
		e(this).one("bsTransitionEnd", function() {
			n = !0
		});
		var o = function() {
			n || e(i).trigger(e.support.transition.end)
		};
		return setTimeout(o, t), this
	}, e(function() {
		e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
			bindType: e.support.transition.end,
			delegateType: e.support.transition.end,
			handle: function(t) {
				if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
			}
		})
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var n = e(this),
				o = n.data("bs.alert");
			o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
		})
	}
	var n = '[data-dismiss="alert"]',
		i = function(t) {
			e(t).on("click", n, this.close)
		};
	i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
		function n() {
			a.detach().trigger("closed.bs.alert").remove()
		}
		var o = e(this),
			r = o.attr("data-target");
		r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
		var a = e(r);
		t && t.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
	};
	var o = e.fn.alert;
	e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
		return e.fn.alert = o, this
	}, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var i = e(this),
				o = i.data("bs.button"),
				r = "object" == typeof t && t;
			o || i.data("bs.button", o = new n(this, r)), "toggle" == t ? o.toggle() : t && o.setState(t)
		})
	}
	var n = function(t, i) {
		this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
	};
	n.VERSION = "3.3.4", n.DEFAULTS = {
		loadingText: "loading..."
	}, n.prototype.setState = function(t) {
		var n = "disabled",
			i = this.$element,
			o = i.is("input") ? "val" : "html",
			r = i.data();
		t += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function() {
			i[o](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
		}, this), 0)
	}, n.prototype.toggle = function() {
		var e = !0,
			t = this.$element.closest('[data-toggle="buttons"]');
		if (t.length) {
			var n = this.$element.find("input");
			"radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
		e && this.$element.toggleClass("active")
	};
	var i = e.fn.button;
	e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
		return e.fn.button = i, this
	}, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
		var i = e(n.target);
		i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), n.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
		e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var i = e(this),
				o = i.data("bs.carousel"),
				r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
				a = "string" == typeof t ? t : r.slide;
			o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof t ? o.to(t) : a ? o[a]() : r.interval && o.pause().cycle()
		})
	}
	var n = function(t, n) {
		this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
	};
	n.VERSION = "3.3.4", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, n.prototype.keydown = function(e) {
		if (!/input|textarea/i.test(e.target.tagName)) {
			switch (e.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			e.preventDefault()
		}
	}, n.prototype.cycle = function(t) {
		return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
	}, n.prototype.getItemIndex = function(e) {
		return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
	}, n.prototype.getItemForDirection = function(e, t) {
		var n = this.getItemIndex(t),
			i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
		if (i && !this.options.wrap) return t;
		var o = "prev" == e ? -1 : 1,
			r = (n + o) % this.$items.length;
		return this.$items.eq(r)
	}, n.prototype.to = function(e) {
		var t = this,
			n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
			t.to(e)
		}) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
	}, n.prototype.pause = function(t) {
		return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, n.prototype.next = function() {
		if (!this.sliding) return this.slide("next")
	}, n.prototype.prev = function() {
		if (!this.sliding) return this.slide("prev")
	}, n.prototype.slide = function(t, i) {
		var o = this.$element.find(".item.active"),
			r = i || this.getItemForDirection(t, o),
			a = this.interval,
			s = "next" == t ? "left" : "right",
			l = this;
		if (r.hasClass("active")) return this.sliding = !1;
		var c = r[0],
			u = e.Event("slide.bs.carousel", {
				relatedTarget: c,
				direction: s
			});
		if (this.$element.trigger(u), !u.isDefaultPrevented()) {
			if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var d = e(this.$indicators.children()[this.getItemIndex(r)]);
				d && d.addClass("active")
			}
			var p = e.Event("slid.bs.carousel", {
				relatedTarget: c,
				direction: s
			});
			return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function() {
				r.removeClass([t, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
					l.$element.trigger(p)
				}, 0)
			}).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
		}
	};
	var i = e.fn.carousel;
	e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
		return e.fn.carousel = i, this
	};
	var o = function(n) {
		var i, o = e(this),
			r = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
		if (r.hasClass("carousel")) {
			var a = e.extend({}, r.data(), o.data()),
				s = o.attr("data-slide-to");
			s && (a.interval = !1), t.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
		}
	};
	e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function() {
		e('[data-ride="carousel"]').each(function() {
			var n = e(this);
			t.call(n, n.data())
		})
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
		return e(i)
	}

	function n(t) {
		return this.each(function() {
			var n = e(this),
				o = n.data("bs.collapse"),
				r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
			!o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]()
		})
	}
	var i = function(t, n) {
		this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	i.VERSION = "3.3.4", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
		toggle: !0
	}, i.prototype.dimension = function() {
		var e = this.$element.hasClass("width");
		return e ? "width" : "height"
	}, i.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(o && o.length && (t = o.data("bs.collapse"), t && t.transitioning))) {
				var r = e.Event("show.bs.collapse");
				if (this.$element.trigger(r), !r.isDefaultPrevented()) {
					o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
					var a = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var s = function() {
						this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!e.support.transition) return s.call(this);
					var l = e.camelCase(["scroll", a].join("-"));
					this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
				}
			}
		}
	}, i.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var t = e.Event("hide.bs.collapse");
			if (this.$element.trigger(t), !t.isDefaultPrevented()) {
				var n = this.dimension();
				this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var o = function() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
			}
		}
	}, i.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, i.prototype.getParent = function() {
		return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
			var o = e(i);
			this.addAriaAndCollapsedClass(t(o), o)
		}, this)).end()
	}, i.prototype.addAriaAndCollapsedClass = function(e, t) {
		var n = e.hasClass("in");
		e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
	};
	var o = e.fn.collapse;
	e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
		return e.fn.collapse = o, this
	}, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
		var o = e(this);
		o.attr("data-target") || i.preventDefault();
		var r = t(o),
			a = r.data("bs.collapse"),
			s = a ? "toggle" : o.data();
		n.call(r, s)
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		t && 3 === t.which || (e(o).remove(), e(r).each(function() {
			var i = e(this),
				o = n(i),
				r = {
					relatedTarget: this
				};
			o.hasClass("open") && (o.trigger(t = e.Event("hide.bs.dropdown", r)), t.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r)))
		}))
	}

	function n(t) {
		var n = t.attr("data-target");
		n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
		var i = n && e(n);
		return i && i.length ? i : t.parent()
	}

	function i(t) {
		return this.each(function() {
			var n = e(this),
				i = n.data("bs.dropdown");
			i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n)
		})
	}
	var o = ".dropdown-backdrop",
		r = '[data-toggle="dropdown"]',
		a = function(t) {
			e(t).on("click.bs.dropdown", this.toggle)
		};
	a.VERSION = "3.3.4", a.prototype.toggle = function(i) {
		var o = e(this);
		if (!o.is(".disabled, :disabled")) {
			var r = n(o),
				a = r.hasClass("open");
			if (t(), !a) {
				"ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
				var s = {
					relatedTarget: this
				};
				if (r.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
				o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", s)
			}
			return !1
		}
	}, a.prototype.keydown = function(t) {
		if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
			var i = e(this);
			if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
				var o = n(i),
					a = o.hasClass("open");
				if (!a && 27 != t.which || a && 27 == t.which) return 27 == t.which && o.find(r).trigger("focus"), i.trigger("click");
				var s = " li:not(.disabled):visible a",
					l = o.find('[role="menu"]' + s + ', [role="listbox"]' + s);
				if (l.length) {
					var c = l.index(t.target);
					38 == t.which && c > 0 && c--, 40 == t.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
				}
			}
		}
	};
	var s = e.fn.dropdown;
	e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function() {
		return e.fn.dropdown = s, this
	}, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
		e.stopPropagation()
	}).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery), + function(e) {
	"use strict";

	function t(t, i) {
		return this.each(function() {
			var o = e(this),
				r = o.data("bs.modal"),
				a = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
			r || o.data("bs.modal", r = new n(this, a)), "string" == typeof t ? r[t](i) : a.show && r.show(i)
		})
	}
	var n = function(t, n) {
		this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	n.VERSION = "3.3.4", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, n.prototype.toggle = function(e) {
		return this.isShown ? this.hide() : this.show(e)
	}, n.prototype.show = function(t) {
		var i = this,
			o = e.Event("show.bs.modal", {
				relatedTarget: t
			});
		this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
			i.$element.one("mouseup.dismiss.bs.modal", function(t) {
				e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var o = e.support.transition && i.$element.hasClass("fade");
			i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
			var r = e.Event("shown.bs.modal", {
				relatedTarget: t
			});
			o ? i.$dialog.one("bsTransitionEnd", function() {
				i.$element.trigger("focus").trigger(r)
			}).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
		}))
	}, n.prototype.hide = function(t) {
		t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
	}, n.prototype.enforceFocus = function() {
		e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
			this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
		}, this))
	}, n.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
			27 == e.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, n.prototype.resize = function() {
		this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
	}, n.prototype.hideModal = function() {
		var e = this;
		this.$element.hide(), this.backdrop(function() {
			e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
		})
	}, n.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, n.prototype.backdrop = function(t) {
		var i = this,
			o = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var r = e.support.transition && o;
			if (this.$backdrop = e('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
			r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var a = function() {
				i.removeBackdrop(), t && t()
			};
			e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
		} else t && t()
	}, n.prototype.handleUpdate = function() {
		this.adjustDialog()
	}, n.prototype.adjustDialog = function() {
		var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
		})
	}, n.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, n.prototype.checkScrollbar = function() {
		var e = window.innerWidth;
		if (!e) {
			var t = document.documentElement.getBoundingClientRect();
			e = t.right - Math.abs(t.left);
		}
		this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
	}, n.prototype.setScrollbar = function() {
		var e = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
	}, n.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	}, n.prototype.measureScrollbar = function() {
		var e = document.createElement("div");
		e.className = "modal-scrollbar-measure", this.$body.append(e);
		var t = e.offsetWidth - e.clientWidth;
		return this.$body[0].removeChild(e), t
	};
	var i = e.fn.modal;
	e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
		return e.fn.modal = i, this
	}, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
		var i = e(this),
			o = i.attr("href"),
			r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
			a = r.data("bs.modal") ? "toggle" : e.extend({
				remote: !/#/.test(o) && o
			}, r.data(), i.data());
		i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
			e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
				i.is(":visible") && i.trigger("focus")
			})
		}), t.call(r, a, this)
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var i = e(this),
				o = i.data("bs.tooltip"),
				r = "object" == typeof t && t;
			!o && /destroy|hide/.test(t) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof t && o[t]())
		})
	}
	var n = function(e, t) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", e, t)
	};
	n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, n.prototype.init = function(t, n, i) {
		if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
			var a = o[r];
			if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
			else if ("manual" != a) {
				var s = "hover" == a ? "mouseenter" : "focusin",
					l = "hover" == a ? "mouseleave" : "focusout";
				this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = e.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, n.prototype.getDefaults = function() {
		return n.DEFAULTS
	}, n.prototype.getOptions = function(t) {
		return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
			show: t.delay,
			hide: t.delay
		}), t
	}, n.prototype.getDelegateOptions = function() {
		var t = {},
			n = this.getDefaults();
		return this._options && e.each(this._options, function(e, i) {
			n[e] != i && (t[e] = i)
		}), t
	}, n.prototype.enter = function(t) {
		var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
		return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
			"in" == n.hoverState && n.show()
		}, n.options.delay.show)) : n.show())
	}, n.prototype.leave = function(t) {
		var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
		return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
			"out" == n.hoverState && n.hide()
		}, n.options.delay.hide)) : n.hide()
	}, n.prototype.show = function() {
		var t = e.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(t);
			var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (t.isDefaultPrevented() || !i) return;
			var o = this,
				r = this.tip(),
				a = this.getUID(this.type);
			this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
			var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
				l = /\s?auto?\s?/i,
				c = l.test(s);
			c && (s = s.replace(l, "") || "top"), r.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
			var u = this.getPosition(),
				d = r[0].offsetWidth,
				p = r[0].offsetHeight;
			if (c) {
				var f = s,
					h = this.options.container ? e(this.options.container) : this.$element.parent(),
					g = this.getPosition(h);
				s = "bottom" == s && u.bottom + p > g.bottom ? "top" : "top" == s && u.top - p < g.top ? "bottom" : "right" == s && u.right + d > g.width ? "left" : "left" == s && u.left - d < g.left ? "right" : s, r.removeClass(f).addClass(s)
			}
			var m = this.getCalculatedOffset(s, u, d, p);
			this.applyPlacement(m, s);
			var v = function() {
				var e = o.hoverState;
				o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
			};
			e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
		}
	}, n.prototype.applyPlacement = function(t, n) {
		var i = this.tip(),
			o = i[0].offsetWidth,
			r = i[0].offsetHeight,
			a = parseInt(i.css("margin-top"), 10),
			s = parseInt(i.css("margin-left"), 10);
		isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top = t.top + a, t.left = t.left + s, e.offset.setOffset(i[0], e.extend({
			using: function(e) {
				i.css({
					top: Math.round(e.top),
					left: Math.round(e.left)
				})
			}
		}, t), 0), i.addClass("in");
		var l = i[0].offsetWidth,
			c = i[0].offsetHeight;
		"top" == n && c != r && (t.top = t.top + r - c);
		var u = this.getViewportAdjustedDelta(n, t, l, c);
		u.left ? t.left += u.left : t.top += u.top;
		var d = /top|bottom/.test(n),
			p = d ? 2 * u.left - o + l : 2 * u.top - r + c,
			f = d ? "offsetWidth" : "offsetHeight";
		i.offset(t), this.replaceArrow(p, i[0][f], d)
	}, n.prototype.replaceArrow = function(e, t, n) {
		this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
	}, n.prototype.setContent = function() {
		var e = this.tip(),
			t = this.getTitle();
		e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
	}, n.prototype.hide = function(t) {
		function i() {
			"in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
		}
		var o = this,
			r = e(this.$tip),
			a = e.Event("hide.bs." + this.type);
		if (this.$element.trigger(a), !a.isDefaultPrevented()) return r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
	}, n.prototype.fixTitle = function() {
		var e = this.$element;
		(e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
	}, n.prototype.hasContent = function() {
		return this.getTitle()
	}, n.prototype.getPosition = function(t) {
		t = t || this.$element;
		var n = t[0],
			i = "BODY" == n.tagName,
			o = n.getBoundingClientRect();
		null == o.width && (o = e.extend({}, o, {
			width: o.right - o.left,
			height: o.bottom - o.top
		}));
		var r = i ? {
				top: 0,
				left: 0
			} : t.offset(),
			a = {
				scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
			},
			s = i ? {
				width: e(window).width(),
				height: e(window).height()
			} : null;
		return e.extend({}, o, a, s, r)
	}, n.prototype.getCalculatedOffset = function(e, t, n, i) {
		return "bottom" == e ? {
			top: t.top + t.height,
			left: t.left + t.width / 2 - n / 2
		} : "top" == e ? {
			top: t.top - i,
			left: t.left + t.width / 2 - n / 2
		} : "left" == e ? {
			top: t.top + t.height / 2 - i / 2,
			left: t.left - n
		} : {
			top: t.top + t.height / 2 - i / 2,
			left: t.left + t.width
		}
	}, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
		var o = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return o;
		var r = this.options.viewport && this.options.viewport.padding || 0,
			a = this.getPosition(this.$viewport);
		if (/right|left/.test(e)) {
			var s = t.top - r - a.scroll,
				l = t.top + r - a.scroll + i;
			s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
		} else {
			var c = t.left - r,
				u = t.left + r + n;
			c < a.left ? o.left = a.left - c : u > a.width && (o.left = a.left + a.width - u)
		}
		return o
	}, n.prototype.getTitle = function() {
		var e, t = this.$element,
			n = this.options;
		return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
	}, n.prototype.getUID = function(e) {
		do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
		return e
	}, n.prototype.tip = function() {
		return this.$tip = this.$tip || e(this.options.template)
	}, n.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, n.prototype.enable = function() {
		this.enabled = !0
	}, n.prototype.disable = function() {
		this.enabled = !1
	}, n.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, n.prototype.toggle = function(t) {
		var n = this;
		t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
	}, n.prototype.destroy = function() {
		var e = this;
		clearTimeout(this.timeout), this.hide(function() {
			e.$element.off("." + e.type).removeData("bs." + e.type)
		})
	};
	var i = e.fn.tooltip;
	e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
		return e.fn.tooltip = i, this
	}
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var i = e(this),
				o = i.data("bs.popover"),
				r = "object" == typeof t && t;
			!o && /destroy|hide/.test(t) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof t && o[t]())
		})
	}
	var n = function(e, t) {
		this.init("popover", e, t)
	};
	if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
	n.VERSION = "3.3.4", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
		return n.DEFAULTS
	}, n.prototype.setContent = function() {
		var e = this.tip(),
			t = this.getTitle(),
			n = this.getContent();
		e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
	}, n.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, n.prototype.getContent = function() {
		var e = this.$element,
			t = this.options;
		return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
	}, n.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var i = e.fn.popover;
	e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
		return e.fn.popover = i, this
	}
}(jQuery), + function(e) {
	"use strict";

	function t(n, i) {
		this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
	}

	function n(n) {
		return this.each(function() {
			var i = e(this),
				o = i.data("bs.scrollspy"),
				r = "object" == typeof n && n;
			o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]()
		})
	}
	t.VERSION = "3.3.4", t.DEFAULTS = {
		offset: 10
	}, t.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, t.prototype.refresh = function() {
		var t = this,
			n = "offset",
			i = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
			var t = e(this),
				o = t.data("target") || t.attr("href"),
				r = /^#./.test(o) && e(o);
			return r && r.length && r.is(":visible") && [
				[r[n]().top + i, o]
			] || null
		}).sort(function(e, t) {
			return e[0] - t[0]
		}).each(function() {
			t.offsets.push(this[0]), t.targets.push(this[1])
		})
	}, t.prototype.process = function() {
		var e, t = this.$scrollElement.scrollTop() + this.options.offset,
			n = this.getScrollHeight(),
			i = this.options.offset + n - this.$scrollElement.height(),
			o = this.offsets,
			r = this.targets,
			a = this.activeTarget;
		if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = r[r.length - 1]) && this.activate(e);
		if (a && t < o[0]) return this.activeTarget = null, this.clear();
		for (e = o.length; e--;) a != r[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(r[e])
	}, t.prototype.activate = function(t) {
		this.activeTarget = t, this.clear();
		var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
			i = e(n).parents("li").addClass("active");
		i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
	}, t.prototype.clear = function() {
		e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var i = e.fn.scrollspy;
	e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
		return e.fn.scrollspy = i, this
	}, e(window).on("load.bs.scrollspy.data-api", function() {
		e('[data-spy="scroll"]').each(function() {
			var t = e(this);
			n.call(t, t.data())
		})
	})
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var i = e(this),
				o = i.data("bs.tab");
			o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
		})
	}
	var n = function(t) {
		this.element = e(t)
	};
	n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
		var t = this.element,
			n = t.closest("ul:not(.dropdown-menu)"),
			i = t.data("target");
		if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
			var o = n.find(".active:last a"),
				r = e.Event("hide.bs.tab", {
					relatedTarget: t[0]
				}),
				a = e.Event("show.bs.tab", {
					relatedTarget: o[0]
				});
			if (o.trigger(r), t.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
				var s = e(i);
				this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
					o.trigger({
						type: "hidden.bs.tab",
						relatedTarget: t[0]
					}), t.trigger({
						type: "shown.bs.tab",
						relatedTarget: o[0]
					})
				})
			}
		}
	}, n.prototype.activate = function(t, i, o) {
		function r() {
			a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
		}
		var a = i.find("> .active"),
			s = o && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
		a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
	};
	var i = e.fn.tab;
	e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
		return e.fn.tab = i, this
	};
	var o = function(n) {
		n.preventDefault(), t.call(e(this), "show")
	};
	e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(e) {
	"use strict";

	function t(t) {
		return this.each(function() {
			var i = e(this),
				o = i.data("bs.affix"),
				r = "object" == typeof t && t;
			o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]()
		})
	}
	var n = function(t, i) {
		this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	n.VERSION = "3.3.4", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
		offset: 0,
		target: window
	}, n.prototype.getState = function(e, t, n, i) {
		var o = this.$target.scrollTop(),
			r = this.$element.offset(),
			a = this.$target.height();
		if (null != n && "top" == this.affixed) return o < n && "top";
		if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= e - i) && "bottom";
		var s = null == this.affixed,
			l = s ? o : r.top,
			c = s ? a : t;
		return null != n && o <= n ? "top" : null != i && l + c >= e - i && "bottom"
	}, n.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(n.RESET).addClass("affix");
		var e = this.$target.scrollTop(),
			t = this.$element.offset();
		return this.pinnedOffset = t.top - e
	}, n.prototype.checkPositionWithEventLoop = function() {
		setTimeout(e.proxy(this.checkPosition, this), 1)
	}, n.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var t = this.$element.height(),
				i = this.options.offset,
				o = i.top,
				r = i.bottom,
				a = e(document.body).height();
			"object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
			var s = this.getState(a, t, o, r);
			if (this.affixed != s) {
				null != this.unpin && this.$element.css("top", "");
				var l = "affix" + (s ? "-" + s : ""),
					c = e.Event(l + ".bs.affix");
				if (this.$element.trigger(c), c.isDefaultPrevented()) return;
				this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == s && this.$element.offset({
				top: a - t - r
			})
		}
	};
	var i = e.fn.affix;
	e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
		return e.fn.affix = i, this
	}, e(window).on("load", function() {
		e('[data-spy="affix"]').each(function() {
			var n = e(this),
				i = n.data();
			i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
		})
	})
}(jQuery),
function(e) {
	var t = {
			common: {
				init: function() {
					function t() {
						var t = 10;
						e(window).scrollTop() > t ? e(".navbar").addClass("scrolled") : e(".navbar").removeClass("scrolled")
					}

					function n() {
						"none" === e(".sampleClass").css("float") && e(".nav a").on("click", function() {
							e(".navbar-toggle").click()
						})
					}
					e(".navbar").length > 0 && e(window).on("scroll load resize", function() {
						t()
					}), e(function() {
						e("a.page-scroll").click(function() {
							if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
								var t = e(this.hash);
								if (t = t.length ? t : e("[name=" + this.hash.slice(1) + "]"), t.length) return e("html,body").animate({
									scrollTop: t.offset().top
								}, 1e3), !1
							}
						})
					}), e(document).ready(function() {
						n(), e(window).resize(n)
					}), e(".nav li").removeClass("active")
				},
				finalize: function() {}
			},
			home: {
				init: function() {
					jQuery(document).ready(function(e) {
						function t(t, i) {
							e(n[t].content).collapse("hide"), e(n[t].change).show(), e(n[t].titleBar).addClass("complete"), e(n[i].titleBar).removeClass("hidden"), e(n[i].content).collapse("show")
						}
						e("#order-form").each(function() {
							this.reset()
						}), e("#step1 .product-title").text(function(t, n) {
							var i = n.indexOf("+");
							if (i > 0) {
								var o = n.substring(i),
									r = "<span class='text-orange'>" + o + "</span>",
									a = n.replace(o, r);
								return e(this).replaceWith("<h3 class='product-title'>" + a + "</h3>")
							}
						});
						var n = {
							s1: {
								title: ".s1-panel .panel-heading .panel-title",
								titleBar: ".s1-panel .panel-heading",
								change: ".s1-panel .panel-heading a",
								content: ".s1-panel #step1",
								titleText: ""
							},
							s2: {
								title: ".s2-panel .panel-heading .panel-title",
								titleBar: ".s2-panel .panel-heading",
								change: ".s2-panel .panel-heading a",
								content: ".s2-panel #step2",
								gifts: ".s2-panel #step2 .gifts",
								titleText: ""
							},
							s2a: {
								title: ".s2a-panel .panel-heading .panel-title",
								titleBar: ".s2a-panel .panel-heading",
								change: ".s2a-panel .panel-heading a",
								content: ".s2a-panel #step2a"
							},
							s3: {
								title: ".s3-panel .panel-heading .panel-title",
								change: ".s3-panel .panel-heading a",
								titleBar: ".s3-panel .panel-heading",
								content: ".s3-panel #step3",
								titleText: ""
							},
							s4: {
								title: ".s4-panel .panel-heading .panel-title",
								change: ".s4-panel .panel-heading a",
								titleBar: ".s4-panel .panel-heading",
								content: ".s4-panel #step4"
							}
						};
						n.s1.titleText = e(n.s1.title).html(), n.s2.titleText = e(n.s2.title).html(), n.s3.titleText = e(n.s3.title).html();
						var i = "",
							o = "";
						e("#order-form .s1-panel .change").click(function() {
							e(n.s1.title).text(""), e(n.s1.title).append(n.s1.titleText), e(n.s2.title).text(""), e(n.s2.title).append(n.s2.titleText), e(n.s3.title).text(""), e(n.s3.title).append(n.s3.titleText), e(n.s1.titleBar).removeClass("complete"), e(n.s2.titleBar).removeClass("complete"), e(n.s3.titleBar).removeClass("complete"), e(n.s2.titleBar).addClass("hidden"), e(n.s3.titleBar).addClass("hidden"), e(n.s1.content + " input").prop("checked", !1), e(n.s2.content + " input").prop("checked", !1), e(n.s2a.content + " input").prop("checked", !1), e(n.s3.content + " input").prop("checked", !1), e("#step2").collapse("hide"), e("#step2a").collapse("hide"), e("#step3").collapse("hide"), e("#step4").collapse("hide"), e(n.s1.change).hide(), e(n.s2.change).hide(), e(n.s3.change).hide(), e(n.s2.gifts).hide()
						}), e("#order-form .s2-panel .change").click(function() {
							e(n.s2.title).text(""), e(n.s2.title).append(n.s2.titleText), e(n.s3.title).text(""), e(n.s3.title).append(n.s3.titleText), e(n.s2.titleBar).removeClass("complete"), e(n.s3.titleBar).removeClass("complete"), e(n.s3.titleBar).addClass("hidden"), e(n.s2.content + " input").prop("checked", !1), e(n.s2a.content + " input").prop("checked", !1), e(n.s3.content + " input").prop("checked", !1), e("#step2a").collapse("hide"), e("#step3").collapse("hide"), e("#step4").collapse("hide"), e(n.s2.change).hide(), e(n.s3.change).hide(), e(n.s2.gifts).hide()
						}), e('#order-form .next input:radio[name="s1"]').change(function() {
							if (e(this).is(":checked")) {
								switch (i = e(this).attr("data-name"), o = e(this).attr("data-sub"), e(n.s3.content + " .panel-body div").hide(), i) {
									case "30 Strips ":
										e(".deliver-30").show();
										break;
									case "60 Strips + 30 FREE ":
										e(".deliver-60").show();
										break;
									case "90 Strips + 60 FREE ":
										e(".deliver-90").show()
								}
								e(n.s1.title).text("Step 1: " + i), t("s1", "s2")
							}
						}), e('#order-form input:radio[name="s2"]').change(function() {
							e(this).is(":checked") && ("subscribe" === e(this).val() && (e(n.s2.gifts).show(), e("body").animate({
								scrollTop: e("#gifts-avail").offset().top
							}, 1e3), i = e(this).attr("data-name"), e('input[name="s3"]').val(o), e('#order-form input:radio[name="gifts"]').change(function() {
								e(this).is(":checked") && (gift = e(this).attr("data-name"), e(n.s2.title).text("Step 2: " + i + " + " + gift), console.log(o), t("s2", "s4"))
							})), "ordernow" === e(this).val() && (i = e(this).attr("data-name"), e(n.s2.title).text("Step 2: " + i), t("s2", "s2a")))
						})
					})
				},
				finalize: function() {}
			},
			about_us: {
				init: function() {}
			}
		},
		n = {
			fire: function(e, n, i) {
				var o, r = t;
				n = void 0 === n ? "init" : n, o = "" !== e, o = o && r[e], o = o && "function" == typeof r[e][n], o && r[e][n](i)
			},
			loadEvents: function() {
				n.fire("common"), e.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(e, t) {
					n.fire(t), n.fire(t, "finalize")
				}), n.fire("common", "finalize")
			}
		};
	e(document).ready(n.loadEvents)
	// $(".btn-buy").click(function(event){
	// 	event.preventDefault();
	// 	$('html,body').animate({scrollTop:$(this.hash).offset().top-113}, 900);
	// });

	$(".btn-buy").click(function(event){        
	    event.preventDefault();
	    if ( $(window).width() <= 991 ) {
	    	$('html,body').animate({scrollTop:$(this.hash).offset().top -200}, 700);
	    } else {
	    	$('html,body').animate({scrollTop:$(this.hash).offset().top -200}, 700);
	    }
	});
}(jQuery);