import request from '@/utils/request'

/**
 * 业务分析页面
 * 业务办结率排名
 *  @param {*} params
 */

 export function getbusinranking (params) {
   return request ({
     url:'/gov/queryOrganizationCompletePercentRanking',
     method:'GET',
     params
   })
 }
 /**
  * 部门超时办结率
  * @param {*} params 
  */
 export function getbusinOvertime(params) {
  return request ({
    url:'/gov/queryOrganizationCompleteDelayPercentRanking',
    method:'GET',
    params
  })
}
/**
 * 部门按时办结率
 * @param {*} params 
 */
export function getbusinCompleted(params) {
  return request ({
    url:'/gov/queryOrganizationCompleteOnTimePercentRanking',
    method:'GET',
    params
  })
}
 /**
  * 业务办理时长分析
  *  @param {*} params
  */

  export function getbusinduration (params) {
    return request ({
      url:'/gov/queryBusinessProcessTime',
      method:'GET',
      params
    })
  }

  /**
   * 叫号类型占比分析
   *  @param {*} params
   */

  export function getbusincalling (params) {
    return request ({
      url:'/gov/queryCallTypeProportion',
      method:'GET',
      params
    })
  }

  /**
   * 好差评分析
   *  @param {*} params
   */

   export function getbusingood (params) {
     return request ({
       url:'/gov/queryAppraiseAnalysis',
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
   */
  export function getTerminal () {
    return request ({
      url:'/gov/queryTerminal',
      method:'GET'
    })
  }

  /**
   * 耗时分析
   * @param {*}params
   */
  export function getTimeanalysis(params) {
    return request ({
      url:'/gov/queryTimeConsuming',
      method: 'GET',
      params
    })
  }