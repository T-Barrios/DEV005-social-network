import login from './Views/login'; 
import register from './Views/register';
import error from './Views/error';

const defaultRoute = '/';
const root = document.getElementById('root');

const routes = [
  { path: '/', component: login },
  { path: '/register', component: register },
  { path: '/error', component: error },
];

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
navigateTo(window.location.pathname || defaultRoute);