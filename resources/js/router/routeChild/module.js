import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/module',
        name: 'module',
        component: () => import('../../views/pages/module/index'),
        meta: {
            middleware: [auth,checkAuth]
        },
    },
];
