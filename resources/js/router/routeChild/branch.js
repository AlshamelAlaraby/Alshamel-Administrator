import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/branch',
        name: 'branch',
        component: () => import('../../views/pages/branch/index'),
        meta: {
            middleware: [auth,checkAuth]
        },
    },
];
