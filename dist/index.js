function e(e){return globalThis.document.querySelectorAll(`[${e}]`)}function t(e,t){return e instanceof HTMLElement?e.dataset[t]:null}function n(e){const n=t(e,"classOffset");return n?parseFloat(n):null}function o(e){let t=new Set;for(let o of e){const e=n(o);e&&t.add(e)}return t.size>0?Array.from(t):.4}const s=new Set;let c;function r(){let t=e("data-add-class");const n=o(t);c=new IntersectionObserver(l,{threshold:n});for(let e of t)s.add(e),c.observe(e);s.size<=0&&c.disconnect()}function l(e,o){for(let o of e){let e=o.target;const s=n(e)??.4;if(o.intersectionRatio>=s){const n=t(e,"addClass");n&&e.classList.add(n),i(e)}}}function i(e){s.delete(e),c.unobserve(e),s.size<=0&&c.disconnect()}const a=new Set;let d;function f(){let t=e("data-remove-class");const n=o(t);d=new IntersectionObserver(u,{threshold:n});for(let e of t)a.add(e),d.observe(e);a.size<=0&&d.disconnect()}function u(e,o){for(let o of e){let e=o.target;const s=n(e)??.4;if(o.intersectionRatio>=s){const n=t(e,"removeClass");n&&e.classList.remove(n),v(e)}}}function v(e){a.delete(e),d.unobserve(e),a.size<=0&&d.disconnect()}globalThis.addEventListener("load",(()=>{r(),f()}),!1);
//# sourceMappingURL=index.js.map