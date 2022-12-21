import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/company-module',
        name: 'company-module',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/company-module/index')
    },
];
