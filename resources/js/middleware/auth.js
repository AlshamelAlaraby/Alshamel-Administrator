export default function auth({ next, store }){
    if (!store.getters["auth/token"]) {
        return next({name: 'login'});
    } else {
        return next();
    }
}
