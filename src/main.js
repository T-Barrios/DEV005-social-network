import { onAuthStateChanged } from 'firebase/auth';
import login from './Views/login';
import register from './Views/register';
import error from './Views/error';
import post from './Views/post';
import welcome from './Views/welcome';
import { auth } from './lib/index.js';

const defaultRoute = '/';
const root = document.getElementById('root');

const routes = [
  { path: '/', component: login },
  { path: '/register', component: register },
  { path: '/error', component: error },
  { path: '/post', component: post },
  { path: '/welcome', component: welcome },
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    navigateTo('/post');
  } else if (window.location.pathname !== '/post' && user == null) {
    navigateTo(window.location.pathname || defaultRoute);
  } else {
    navigateTo(defaultRoute);
  }
});
