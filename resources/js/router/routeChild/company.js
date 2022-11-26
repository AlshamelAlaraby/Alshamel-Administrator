import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/company',
        name: 'company',
        component: () => import('../../views/pages/company/index'),
        meta: {
            middleware: [auth,checkAuth]
        },
    },
];
