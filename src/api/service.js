import request from '@/utils/request'

/**
 * 政务分析页面 总体业务量
 * @param {*} params
 */

export function getoverall(params) {
  return request ({
    url:'/gov/queryTotalBusinessDiagram',
    method:'GET',
    params
  })
}

 /**
    *  获取服务网点经纬度
    */
 
   export function getbusinNetwork () {
    return request ({
      url:'/gov/queryGovNetWorkList',
      method:'GET'
    })
  }
/**
   *  获取一体机纬度
   *  @param {*} id
   */
  export function getTerminal (id) {
    return request ({
      url:'/gov/queryTerminal',
      method:'GET',
      params:{
        id
      }
    })
  }
/**
 * 获取服务网点详情查询
 * @param {*} id
 */
export function getbusinDetail (id, cancelToken) {
  return request ({
    url: '/gov/queryGovNetWorkDetail',
    method:'GET',
    params:{
      id
    },
    cancelToken
  })
}
/**
 * 事项业务排名
 *  @param {*} parmas
 */
export function getmatters (params) {
  return request ({
    url: '/gov/queryItemBusinessRanking',
    method:'GET',
    params
  })
}

/**
 * 总体业务下钻业务列表查询
 * @param {*} params 
 */
export function getBusinessList (params) {
  return request ({
    url: '/gov/queryBusinessList',
    method:'GET',
    params
  })
}

/**
 * 事项业务排名
 *  @param {*} params 
 */
export function getItemnumber(params) {
  return request ({
    url: '/gov/queryItemBusinessList',
    method: 'GET',
    params
  })
}
/**
 * 部门业务量
 * @param {*} params
 */
export function getDepartment(params) {
  return request ({
    url: '/gov/queryOrganizationBusinessList',
    method:'GET',
    params
  })
}
/**
 * 个人生命周期
 * @param {*} params
 */
export function getPersonal (params) {
  return request ({
    url:'/gov/queryLifecycleBusinessList',
    method:'GET',
    params
  })
}
/**
 * 业务来源
 * @param {*} params
 */
export function getSourceList(params) {
  return request ({
    url: '/gov/queryBusinessSourceList',
    method: 'GET',
    params
  })
}
/**
 * 窗口业务量
 *  @param {*} params
 */
export function getWindowservice(params) {
  return request ({
    url:'/gov/queryWindowBusinessList',
    method:'GET',
    params
  })
}
/**
 * 二级下钻
 *  @param {*} params
 */
export function gettwoBusinessList(params) {
  return request ({
    url:'/gov/querySubLevelBusinessList',
    method: 'GET',
    params
  })
}