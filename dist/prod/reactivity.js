const p = (e, t, n, o = !1) => Object.defineProperty(e, t, { value: n, enumerable: !1, writable: o }), S = (e) => typeof e == "function", E = (e) => typeof e == "boolean", N = () => !1, F = (e, t) => e === t;
/**
 * @repup/reactivity - A lightweight, smaller javascript reactivity system.
 * 
 * @author Anuj Kumar <thestackmastery@gmail.com>
 * @link https://github.com/thestackmastery/reactivity
 * @license MIT https://github.com/thestackmastery/reactivity/LICENSE
 * @version 1.0.0
 */
let b = 0, r = null;
const A = (e, t = F) => {
  const n = p(p({}, 1, 2, !0), 0, b++), o = E(t) ? N : t;
  return [() => (r && (r[n[0]] = n), e), (l) => {
    const u = S(l) ? l(e) : l;
    o(e, u) || (e = u, i(n));
  }];
}, I = (e, t) => {
  const n = [];
  r = {};
  const o = (t || e)();
  let h, s;
  for (h in r)
    s = r[h], s[s[1]] = e, n.push([s, s[1]++]);
  return r = null, n.length ? [o, () => {
    let u;
    for (u of n)
      delete u[0][u[1]];
  }] : [o, N];
}, L = (e) => {
  if (!r)
    return e();
  const t = r;
  r = null;
  const n = e();
  return r = t, n;
}, d = S(queueMicrotask) ? queueMicrotask : Promise.resolve().then;
let c = {}, _ = {}, a = !1, k = 3, f = {}, i;
const R = i = (e) => {
  c[e[0]] || (c[e[0]] = !0, f[e[0]] = e, a || (a = !0, d(g)));
}, U = (e) => {
  c[e[0]] || (c[e[0]] = !0, y(e));
}, g = () => {
  let e, t = k;
  for (; t-- > 0; )
    for (e in f)
      y(f[e]), delete f[e];
  c = {}, _ = {}, a = !1;
}, y = (e) => {
  let t;
  for (t in e)
    _[t] || (_[t] = !0, e[t]());
}, M = (e) => {
  i = U, e(), i = R, a || (_ = {}, c = {});
};
export {
  A as createSignal,
  I as observeSignal,
  L as untrackSignal,
  M as withoutBatch
};
