import { lazy } from 'react';

const routes = [
    {
        path: 'login',
        component: lazy(() => import('./components/Login')),
        exact: true
    },
    {
        path: 'home',
        component: lazy(() => import('./components/home')),
        exact: true
    },

];

export default routes;