import axios from "axios";
import Cookies from "js-cookie";


const adminApi = axios.create({
    baseURL: `${process.env.MIX_APP_URL}api/`
});

adminApi.interceptors.request.use(
    function(config) {
        config.headers['lang'] = localStorage.getItem("lang") || 'ar';
        config.headers['Authorization'] = "Bearer " + (Cookies.get("token") || '');
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

adminApi.defaults.headers.common['secretApi'] = 'Snr92EUKCmrE06PiJ';
adminApi.defaults.headers.common['Accept'] = 'application/json';
// end axios

export default adminApi;