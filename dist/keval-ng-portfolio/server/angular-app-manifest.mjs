
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 19274, hash: 'dbe5b55fc74b276df4580ec0f17936da4bd54ffc74377e44f95e9bbd40f7ee52', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '8863cd0d72adc42b5eda79cbca5398e820edeeb954aa60d8f54de3d1effa69c9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EKX3ZERP.css': {size: 34318, hash: 'pHQ2PnIjthc', text: () => import('./assets-chunks/styles-EKX3ZERP_css.mjs').then(m => m.default)}
  },
};
