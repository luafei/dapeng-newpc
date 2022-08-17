import axios from 'axios'
import store from '@/store'
import { getToken, removeToken } from '@/utils/auth'
// import { Notify } from 'vant';
import router from '@/router'

const service = axios.create({
    baseURL: process.env.NODE_ENV == 'production' ? process.env.VUE_APP_BASE_API : '', // 开发环境时本地配置proxy跨域，生产环境时补全接口路径
    timeout: 60000 // request timeout
})


service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['token'] = getToken()
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.status && res.status !== 0) {
            if (res.status == 201) {
                // token不对，请检查请求头
                removeToken();
                router.replace({path: 'login'})
                return Promise.reject(new Error(res.data || res.msg || 'Error'));
            }
            // Notify({ type: 'danger', message: res.msg });
            // return Promise.reject(new Error(res.data || res.msg || 'Error'));
            return Promise.reject(new Error(res.data || res.msg || 'Error'))
        } else {
            return response
        }
    },
    error => {
        Promise.reject(error)
    }
)

export default service