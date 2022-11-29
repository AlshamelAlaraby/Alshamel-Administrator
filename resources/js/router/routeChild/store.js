import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/store',
        name: 'store',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/store/index'),
    },
];
