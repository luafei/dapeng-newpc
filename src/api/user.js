import request from '@/utils/request'

/**
 * 登录接口
 * @param params 
 */
export const login = (params) =>
    request({
        url: '/permit/loginUser',
        method: 'get',
        params
    })
export const codeLogin = (params) =>
    request({
        url: '/permit/loginGovChatUser',
        method: 'get',
        params:{
            code:params.code,
            secret: params.secret
        }
    })

// 政粤通对接 
export const dataLogin = (params) => 
    request({
        url: '/permit/loginOther',
        method: 'get',
        params: {
            data: params.data
        }
    })

/**
 * 获取用户信息
 * @param id 主键ID
 */
export const getUserInfo = (id) =>
    request({
        url: '/permit/queryUserInfo',
        method: 'get',
        params: {
            id
        }
    })

/**
 * 生成图形验证码
 * @param flag 时间戳
 */
export const getPicCode = (params) =>
    request({
        url: '/permit/createPicCode',
        method: 'get',
        params,
        responseType: 'arraybuffer'
    })