const routes = new Map();

export function register(path, page) {
  routes.set(path, page);
}

export function navigate(path) {
  window.location.hash = '#' + path;
}

function currentPath() {
  const hash = window.location.hash;
  if (!hash || hash === '#') return '/';
  // Strip leading '#' and any query string so only the path is matched
  return hash.replace(/^#/, '').split('?')[0] || '/';
}

function render() {
  const path = currentPath();
  const page = routes.get(path) ?? routes.get('/');
  if (page) page();

  // Push a virtual pageview so GTM tags can react to SPA navigation
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'virtualPageView',
    page: path,
    title: document.title,
  });
}

export function init() {
  window.addEventListener('hashchange', render);
  render();
}
