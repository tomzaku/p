if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),u={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-d333966c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/en.9719e976.js",revision:null},{url:"assets/index.150c20aa.css",revision:null},{url:"assets/index.9d2be882.js",revision:null},{url:"assets/vi.753701cd.js",revision:null},{url:"assets/workbox-window.prod.es5.6a7d11e0.js",revision:null},{url:"index.html",revision:"b0d1bff77c5bc8ffd469e2041341ed52"},{url:"manifest.webmanifest",revision:"24beb201a976c65981a0a98a0173c19f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
