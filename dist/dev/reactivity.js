const b = (e, t, r, s = !1) => Object.defineProperty(e, t, { value: r, enumerable: !1, writable: s }), n = (e) => typeof e == "function", w = (e) => typeof e == "boolean", S = () => !1, d = (e, t) => e === t;
/**
 * @repup/reactivity - A lightweight, smaller javascript reactivity system.
 * 
 * @author Anuj Kumar <thestackmastery@gmail.com>
 * @link https://github.com/thestackmastery/reactivity
 * @license MIT https://github.com/thestackmastery/reactivity/LICENSE
 * @version 1.0.0
 */
let m = 0, o = null;
const k = (e, t = d) => {
  if (!w(t) && !n(t))
    throw new TypeError("Second parameter of `createSignal()` must be boolean value or a function which evaluate to boolean value.");
  const r = b(b({}, 1, 2, !0), 0, m++), s = w(t) ? S : t;
  return [() => (o && (o[r[0]] = r), e), (f) => {
    const c = n(f) ? f(e) : f;
    s(e, c) || (e = c, h(r));
  }];
}, R = (e, t) => {
  if (!n(e))
    throw new Error("Second parameter of `observeSignal()` must be a function.");
  if (t !== void 0 && !n(e))
    throw new Error("Third parameter of `observeSignal()` is optional, but if used it must be a function.");
  const r = [];
  o = {};
  const s = (t || e)();
  let p, u;
  for (p in o)
    u = o[p], u[u[1]] = e, r.push([u, u[1]++]);
  return o = null, r.length ? [s, () => {
    let c;
    for (c of r)
      delete c[0][c[1]];
  }] : [s, S];
}, T = (e) => {
  if (!n(e))
    throw new Error("First parameter of `untrackSignal()` must be a function.");
  if (!o)
    return e();
  const t = o;
  o = null;
  const r = e();
  return o = t, r;
}, N = n(queueMicrotask) ? queueMicrotask : Promise.resolve().then;
let a = {}, l = {}, _ = !1, g = 3, i = {}, h;
const v = h = (e) => {
  a[e[0]] || (a[e[0]] = !0, i[e[0]] = e, _ || (_ = !0, N(F)));
}, y = (e) => {
  a[e[0]] || (a[e[0]] = !0, E(e));
}, F = () => {
  let e, t = g;
  for (; t-- > 0; )
    for (e in i)
      E(i[e]), delete i[e];
  a = {}, l = {}, _ = !1;
}, E = (e) => {
  let t;
  for (t in e)
    l[t] || (l[t] = !0, e[t]());
}, U = (e) => {
  if (!n(e))
    throw new TypeError("First parameter of `withoutBatch()` must be a function.");
  h = y, e(), h = v, _ || (l = {}, a = {});
};
export {
  k as createSignal,
  R as observeSignal,
  T as untrackSignal,
  U as withoutBatch
};
