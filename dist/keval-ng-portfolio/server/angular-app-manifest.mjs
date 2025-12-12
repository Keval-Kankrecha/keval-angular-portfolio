
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 19274, hash: 'de1f38bd5adcd55ae06e26772918e3fef04fdd35e3ecd9d9f734bb6207b4d990', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '0bb1fa3844281f921fd3b438ca99c3c692d1fa90263ffb88f473fb73880b656f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EKX3ZERP.css': {size: 34318, hash: 'pHQ2PnIjthc', text: () => import('./assets-chunks/styles-EKX3ZERP_css.mjs').then(m => m.default)}
  },
};
