import adminApi from "../api/adminAxios";
import router from "../router/index";


export default async function checkAuth({ next, store }) {
    await adminApi.get('/auth/check-token')
        .then((res) => {
            return next();
        })
        .catch((err) => {
            store.commit('auth/logoutToken');
            return router.push({name: 'login'});
        })
}
