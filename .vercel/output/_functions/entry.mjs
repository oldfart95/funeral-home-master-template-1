import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './assets/_@astrojs-ssr-adapter.Dzcmv6Vm.js';
import { manifest } from './manifest_Yf-d3osA.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/500.astro.mjs');
const _page3 = () => import('./pages/accessibility.astro.mjs');
const _page4 = () => import('./pages/api/contact.astro.mjs');
const _page5 = () => import('./pages/burial.astro.mjs');
const _page6 = () => import('./pages/burial-es.astro.mjs');
const _page7 = () => import('./pages/catholic.astro.mjs');
const _page8 = () => import('./pages/catholic-burial.astro.mjs');
const _page9 = () => import('./pages/catholic-burial-es.astro.mjs');
const _page10 = () => import('./pages/catholic-cremation.astro.mjs');
const _page11 = () => import('./pages/catholic-cremation-es.astro.mjs');
const _page12 = () => import('./pages/catholic-es.astro.mjs');
const _page13 = () => import('./pages/cremation.astro.mjs');
const _page14 = () => import('./pages/cremation-es.astro.mjs');
const _page15 = () => import('./pages/es.astro.mjs');
const _page16 = () => import('./pages/immediate-need.astro.mjs');
const _page17 = () => import('./pages/pre-planning.astro.mjs');
const _page18 = () => import('./pages/privacy-policy.astro.mjs');
const _page19 = () => import('./pages/traditional-services.astro.mjs');
const _page20 = () => import('./pages/veteran.astro.mjs');
const _page21 = () => import('./pages/veteran-burial.astro.mjs');
const _page22 = () => import('./pages/veteran-burial-es.astro.mjs');
const _page23 = () => import('./pages/veteran-cremation.astro.mjs');
const _page24 = () => import('./pages/veteran-cremation-es.astro.mjs');
const _page25 = () => import('./pages/veteran-es.astro.mjs');
const _page26 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/accessibility.astro", _page3],
    ["src/pages/api/contact.ts", _page4],
    ["src/pages/burial.astro", _page5],
    ["src/pages/burial-es.astro", _page6],
    ["src/pages/catholic.astro", _page7],
    ["src/pages/catholic-burial.astro", _page8],
    ["src/pages/catholic-burial-es.astro", _page9],
    ["src/pages/catholic-cremation.astro", _page10],
    ["src/pages/catholic-cremation-es.astro", _page11],
    ["src/pages/catholic-es.astro", _page12],
    ["src/pages/cremation.astro", _page13],
    ["src/pages/cremation-es.astro", _page14],
    ["src/pages/es.astro", _page15],
    ["src/pages/immediate-need.astro", _page16],
    ["src/pages/pre-planning.astro", _page17],
    ["src/pages/privacy-policy.astro", _page18],
    ["src/pages/traditional-services.astro", _page19],
    ["src/pages/veteran.astro", _page20],
    ["src/pages/veteran-burial.astro", _page21],
    ["src/pages/veteran-burial-es.astro", _page22],
    ["src/pages/veteran-cremation.astro", _page23],
    ["src/pages/veteran-cremation-es.astro", _page24],
    ["src/pages/veteran-es.astro", _page25],
    ["src/pages/index.astro", _page26]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "39c45815-8b5a-4256-aec6-2e43d2060947",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
