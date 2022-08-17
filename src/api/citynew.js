import request from '@/utils/request'

/**
 * 政务页面城市更新页面
 * 惠民利企业务分析 为新开办企业免费刻印
 *  @param {*} params
 */

export function getcitySeal (params) {
  return request ({
    url:'/gov/queryNewCompanyFreeBadgeDiagram',
    method:'GET',
    params
  })
}

/**
 * 疫情业务申报
 *  @param {*} params
 */

export function getcityOutbreak (params) {
  return request ({
    url:'/gov/queryEpidemicProjectApplyRanking',
    method:'GET',
    params
  })
}

/**
 * 更新城市业务分析0-城市更新业务/1-人才引进环节/2-人才引进后续补贴/3-企业对于就业困难人群的补贴分析/4-困难人群的补贴分析/5-疫情业务分析
 *  @param {*} params
 */

export function getcitybusiness (params) {
  return request ({
    url:'/gov/queryIndexRanking',
    method:'GET',
    params
  })
}
/**
 * 便民业务业务类型统计
 *  @param {*} params
 */
export function getbusinessType () {
  return request ({
    url: '/gov/queryServiceBusinessTypeCount',
    methods: 'GET',
  })
}
/**
 * 便民业务部门业务统计
 *  @param {*} params
 */
export function getDepbusiness () {
  return request ({
    url: '/gov/queryServiceDepBusinessCount',
    methods: 'GET',
  })
}
/**
 * 便民业务一体机分布统计
 *  @param {*} params
 */
export function getServiceTer () {
  return request ({
    url: '/gov/queryServiceTerminalCount',
    methods: 'GET',
  })
}