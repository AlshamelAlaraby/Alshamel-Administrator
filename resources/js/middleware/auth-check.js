import adminApi from "../api/adminAxios";


export default async function checkAuth({ next, store }) {
    console.log("check-auth middleware run ...");
    await adminApi.get('/v1/auth/checkToken')
        .then((res) => {
            let l =res.data.data;
            store.commit('auth/editPermission',l.permission);

            return next();
        })
        .catch((err) => {
            store.commit('auth/logoutToken');
            return next({name: 'login'});
        });
}
