import adminApi from "../api/adminAxios";


export default async function checkAuth({ next, store }) {
    console.log("check-auth middleware run ...");
    await adminApi.get('/auth/check-token')
        .then((res) => {
            let l =res.data.data;
            console.log(res);
            // store.commit('auth/ad',l.permission);

            return next();
        })
        .catch((err) => {
            store.commit('auth/logoutToken');
            return next({name: 'login'});
        })
}
