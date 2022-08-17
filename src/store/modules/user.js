import { login, codeLogin, getUserInfo, getPicCode, dataLogin } from '@/api/user'
import AES from '@/utils/AES'
import { setToken, getToken, removeToken } from '@/utils/auth'

const user = {
    state: {
        userName: '',
        token: getToken(),
        roles: [],
        kId: localStorage.getItem('kId'),
        userId: 0
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_KID(state, kId) {
            state.kId = kId
            localStorage.setItem('kId', kId)
        },
        SET_USER_ID(state, userId) {
            state.userId = userId
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_USERNAME(state, userName) {
            state.userName = userName
        }
    },
    actions: {
        // 用户名登录
        LoginByUsername({ commit }, userInfo) {
            const username = userInfo.username.trim()
            return new Promise(async(resolve, reject) => {
                try {
                    let postData = {
                        petName: username,
                        keyName: AES.encrypt(userInfo.password),
                        code: userInfo.code,
                        flag: userInfo.flag
                    }
                    const { data } = await login(postData)
                    const token = data.data.tokenId
                    commit('SET_KID', data.data.id)
                    commit('SET_TOKEN', token)
                    setToken(token)
                    resolve(data)
                } catch (error) {
                    reject(error)
                }
            })
        },
        // code码登录
        LoginByCode({ commit }, param) {
            return new Promise(async(resolve, reject) => {
                try {
                    const { data } = await codeLogin(param)
                    const token = data.data.tokenId
                    commit('SET_KID', data.data.id)
                    commit('SET_TOKEN', token)
                    setToken(token)
                    resolve(data)
                } catch (error) {
                    reject(error)
                }
            })
        },

        // 政粤通登陆
        loginByData({ commit }, param) {
            return new Promise(async(resolve, reject) => {
                try {
                    const { data } = await dataLogin(param)
                    const token = data.data.tokenId
                    commit('SET_KID', data.data.id)
                    commit('SET_TOKEN', token)
                    setToken(token)
                    resolve(data)
                } catch (error) {
                    reject(error)
                }
            })
        },

        // 获取用户信息
        GetUserInfo({ commit, state }) {
            console.log('GetUserInfo');
            return new Promise(async(resolve, reject) => {
                try {
                    const { data } = await getUserInfo(state.kId)
                    const { userRoles, userId, userName } = data.data
                    commit('SET_ROLES', userRoles)
                    commit('SET_USER_ID', userId)
                    commit('SET_USERNAME', userName)
                    resolve(data)
                } catch (error) {
                    reject(error)
                }
            })
        },
        // 前端 登出
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                removeToken()
                resolve()
            })
        },
        //獲取圖形碼
        GetPicCode({ commit }, params) {
            console.log('GetPicCode')
            return new Promise(async(resolve) => {

                const res = await getPicCode(params)
                resolve(res)
            })
        },
    }
}

export default user