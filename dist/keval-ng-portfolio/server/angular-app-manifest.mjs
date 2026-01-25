
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 19274, hash: 'caeb0908c2dee69001b882483acd13f4afb172d67b9ff1665085531ee8283f58', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '288571d4fc3f5b7732414959503bd050b32c9c63534362c186515648c9347b44', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EKX3ZERP.css': {size: 34318, hash: 'pHQ2PnIjthc', text: () => import('./assets-chunks/styles-EKX3ZERP_css.mjs').then(m => m.default)}
  },
};
