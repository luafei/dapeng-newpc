import router from './router'
import store from '@/store'
import { getToken } from '@/utils/auth' // getToken from cookie
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { currentRoutesByIob } from '@/utils/setNavbar.js'
import { login, codeLogin, getUserInfo, getPicCode, dataLogin } from '@/api/user'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 判断粤政路径
function getQueryMap() {
    var href = window.location.href;
    var filterHref = href.split('#/')[0];
    var query = filterHref.slice(filterHref.indexOf('?data')+1);
  
    var result = {};
    var param = query.split('=');
    result[param[0]] = param[1];
  
    return result;
}

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    if (getToken()) {        
        if (to.path == '/login' || to.path == '/') {
            next({ path: '/home' })
        }else {
            next()
        }
        NProgress.done()
    } else {
        let queryMap = getQueryMap();
        let data = queryMap["data"];
        if (data) {
            store
                  .dispatch("loginByData", {data})
                  .then((res) => {
                    setUserInfo(res.data.id, to);
                  })
                  .catch((res) => {
                    this.loading = false;
                  });
        }else {
            if (whiteList.indexOf(to.path) !== -1) {
                next()
            } else {
                next('/login')
                NProgress.done()
            }
        }
            
    }

    async function setUserInfo(id) {
        const { data } = await getUserInfo(id)
        const { userRoles, userId, userName } = data.data
        store.commit('SET_ROLES', userRoles)
        store.commit('SET_USER_ID', userId)
        store.commit('SET_USERNAME', userName)
        if (to.path == '/login' || to.path == '/') {
            next({ path: '/home' })
            return
        }
    }
    
})

router.afterEach((to, from) => {
    NProgress.done() // finish progress bar
})