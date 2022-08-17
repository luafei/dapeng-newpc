import request from '@/utils/request'

/**
 * 政务服务满意度时间分布
 * @param {*} params 
 */
export function getGovSatisfactionDiagram(params) {
    return request({
        url: '/gov/queryGovSatisfactionDiagram',
        method: 'get',
        params
    })
}

/**
 * 叫号类型占比分析
 * @param {*} params 
 */
export function getCallTypeProportion(params) {
    return request({
        url: '/gov/queryCallTypeProportion',
        method: 'get',
        params
    })
}

/**
 * 业务办理时长分析
 * @param {*} params 
 */
export function getBusinessProcessTime(params) {
    return request({
        url: '/gov/queryBusinessProcessTime',
        method: 'get',
        params
    })
}

/**
 * 部门业务量
 *  @param {*} params
 */
export function getsection(params) {
    return request ({
        url: '/gov/queryDepartmentBusiness',
        method:'GET',
        params
    })
}

/**
 * 业务来源业务量
 * @param {*} params
 */
export function getsource(params) {
    return request ({
        url: '/gov/queryBusinessTypeNum',
        method: 'GET',
        params
    })
}
/**
 * 窗口业务量查询
 *  @param {*} params
 */
export function getwindowservice(params) {
    return request ({
        url: '/gov/queryWindowBusinessNum',
        method: 'GET',
        params
    })
}
/**
 * 企业生命周期分析
 * @param {*} params
 */
export function getculture(params) {
    return request ({
        url: '/gov/queryCompanyBusiness',
        method: 'GET',
        params
    })
}
/**
 * 个人生命周期
 * @param {*} params
 */
export function getpersonage (params) {
    return request ({
      url: '/gov/queryLifecycleBusiness',
      method:'GET',
      params
    })
  }
/**
 * 事项业务排名
 * @param {*} params
 */
export function getranKing(params) {
    return request ({
     url:'/gov/queryItemBusinessRanking',
     method: 'GET',
     params
    })
}

/**
 * 权责清单业务
 * @param {*} params
 */
export function getqueryQZ(params) {
    return request ({
        url:'/gov/queryQZList',
        method: 'GET',
        params
    })
}
/**
 * 考核指标分析
 */
export function gettarget() {
    return request ({
        url:'/gov/queryCheckIndex',
        method: 'GET',
    })
}
/**
 * 政务服务结构化数据开关
 * @param {string} flag 0-关闭 1-打开
 */
export function openGovNetWorkConstructionData(flag) {
    return request ({
        url:'/gov/openGovNetWorkConstructionData',
        method: 'GET',
        params: {
          flag
        }
    })
}
