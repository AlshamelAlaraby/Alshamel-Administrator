import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/customer',
        name: 'module',
        component: () => import('../../views/pages/customer/index'),
        meta: {
            middleware: [auth,checkAuth]
        },
    },
];
