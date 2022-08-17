import request from '@/utils/request'

/**
 * @param {*} params 
 * 获取今日车流量
 */
export function getTrafficFlow(params) {
    return request({
        url: '/traffic/queryTodayTrafficFlow',
        method: 'get',
        params
    })
}

/**
 * 获取出入口排名
 */
export function getTrafficRank(params) {
    return request({
        url: '/traffic/queryImportAndExportTopFive',
        method: 'get',
        params
    })
}
/**
 * 出入口时间分布
 * @param {*} params 
 */
export function getTimeDistribution(params) {
    return request({
        url: '/traffic/queryRouteTouristTrafficDiagram',
        method: 'get',
        params
    })
}

/**
 * 获取所有道路全部车型通行量数据
 * @param {*} params 
 */
export function getRoadFlowAllRanking(params) {
    return request({
        url: '/traffic/getRoadFlowAllRanking',
        method: 'get',
        params
    })
}

/**
 * 主要路段通行量排名
 * @param {*} params 
 */
export function getMainRoadRank(params) {
    return request({
        url: '/traffic/queryRouteTouristTrafficTop',
        method: 'get',
        params
    })
}
/**
 *工地泥头车排名查询
 * 
 */
export function getFlowRanking() {
    return request({
        url: '/traffic/queryBuildingSiteTrafficFlowRanking',
        method: 'get'
    })
}


/**
 * 获取鲨鱼涌驶入驶出的车辆数查询
 */
export function getDriveInOutNum(params) {
    return request({
        url: '/traffic/queryShaYuChongTrafficFlow',
        method: 'get',
        params
    })
}

/**
 * 获取地图图标
 */
export function getMapSite() {
    return request({
        url: '/daPeng/largeScreen/traffic/mapSite',
        method: 'get'
    })
}


/**
 * 获取车辆报警信息分析
 * @param {*} params 
 */
export function getAlertRank(params) {
    return request({
        url: '/traffic/queryAlarmAnalysis',
        method: 'get',
        params
    })
}

/**
 * 获取来源地驶入驶出 饼图
 */
export function getOriginPlace(params) {
    return request({
        url: '/traffic/queryCarAreaOfSource',
        params
    })
}


/**
 * 获取视频站点名称
 * @param {*} params 
 */
export function getVideoNameList(params) {
    return request({
        url: '/traffic/queryMapVideoPoint',
        method: 'get',
        params
    })
}

/**
 * 获取详情单
 * @param {*} params 
 */
export function getTrafficDetails(params) {
    return request({
        url: '/traffic/queryTodayTrafficFlowDetail',
        method: 'get',
        params
    })
}

/**
 * 获取地图定点视屏
 * @param {*} params 
 */
export function getMapVideoPoint(params) {
    return request({
        url: '/traffic/queryMapVideoPoint',
        method: 'get',
        params
    })
}

/**
 * 车辆轨迹特征查询
 * @param {*} params 
 */
export function getTrailQuery(params, cancelToken) {
    return request({
        url: '/traffic/queryCarFeatureAnalyze',
        method: 'get',
        params,
        cancelToken
    })
}

/**
 * 车辆轨迹特征模糊查询
 * @param {*} params 
 */
export function getTrailQueryplate(params) {
    return request({
        url: '/traffic/queryCarFeatureAnalyzePlateNo',
        method: 'get',
        params
    })
}

/**
 * 预警信息
 * @param {*} params 
 */
export function getWarningInfo(params) {
    return request({
        url: '/traffic/queryWarningInfo',
        method: 'get',
        params
    })
}
/**
 * 水球饼图
 * @param {*} params 
 */
export function queryPieChart(params) {
    return request({
        url: '/traffic/queryPieChart',
        method: 'get',
        params
    })
}
/**
 * 危化品企业
 * @param {*} params 
 */
export function queryDangerDetail(params) {
    return request({
        url: '/traffic/queryDangerDetail',
        method: 'get',
        params
    })
}
/**
 * 工地详情信息
 * @param {*} params 
 */
export function queryBuildingSiteDetail(params, cancelToken) {
    return request({
        url: '/traffic/queryBuildingSiteDetail',
        method: 'get',
        params,
        cancelToken
    })
}
/**
 * 车型数量排名
 * @param {*} params 
 */
export function queryTodayVehicleTypeRanking(params) {
    return request({
        url: '/traffic/queryTodayVehicleTypeRanking',
        method: 'get',
        params
    })
}

/**
 * 车型数量静态排名
 * @param {*} params 
 */
export function getTodayVehicleTypeStaticRanking(params) {
    return request({
        url: '/traffic/queryTodayVehicleTypeStaticRanking',
        method: 'get',
        params
    })
}

/**
 * 车辆来源地数量排名
 * @param {*} params 
 */
export function queryTodayVehicleSourceRanking(params) {
    return request({
        url: '/traffic/queryTodayVehicleSourceRanking',
        method: 'get',
        params
    })
}
/**
 * 公交站实时客流排名
 * @param {*} params 
 */
export function queryBusStationPassengerRanking(params) {
    return request({
        url: '/bus/queryBusStationPassengerRanking',
        method: 'get',
        params
    })
}
/**
 *公交站客流变化趋势
 * @param {*} params 
 */
export function queryPassengerDiagram(params) {
    return request({
        url: '/bus/queryPassengerDiagram',
        method: 'get',
        params
    })
}

/**
 * 查询公交预警数据
 * @param {*} params 
 */
export function getBusAlarmData(params) {
    return request({
        url: '/bus/queryBusAlarmData',
        method: 'get',
        params
    })
}

/**
 * 左侧下拉框 查询公交站点名称
 * @param {*} params 
 */
export function queryDicBusStations(params) {
    return request({
        url: '/bus/queryDicBusStations',
        method: 'get',
        params
    })
}

/**
 * 左侧下拉框 查询公交站点名称
 * @param {*} params 
 */
export function queryOrderIssueList(params) {
    return request({
        url: '/bus/queryOrderIssueList',
        method: 'get',
        params
    })
}
/**
 * 查询公交客流预警列表
 * @param {*} params 
 */
export function queryBusPassengerAlarmList(params) {
    return request({
        url: '/bus/queryBusPassengerAlarmList',
        method: 'get',
        params
    })
}

/**
 * 查询公交客流预警调度情况
 * @param {*} params 
 */
export function queryBusPassengerAlarmOrder(params) {
    return request({
        url: '/bus/queryBusPassengerAlarmOrder',
        method: 'get',
        params
    })
}

/**
 * 查询公交调度详情
 * @param {*} params 
 */
export function queryBusOrderIssueDetail(params) {
    return request({
        url: '/bus/queryBusOrderIssueDetail',
        method: 'get',
        params
    })
}
/**
 * 查询公交调度详情
 * @param {*} params 
 */
export function alarmLevelStatistics(params) {
    return request({
        url: '/alarm/alarmLevelStatistics',
        method: 'get',
        params
    })
}
/**
 * 查询各个部门预警统计数据
 * @param {*} params 
 */
export function alarmPartStatistics(params) {
    return request({
        url: '/alarm/alarmPartStatistics',
        method: 'get',
        params
    })
}
/**
 * 预警详情
 * @param {*} params 
 */
export function queryAlarmPages(params) {
    return request({
        url: '/alarm/queryAlarmPages',
        method: 'get',
        params
    })
}

/**
 * 预警界面预警类型下拉框列表接口
 * @param {*} params 
 */
export function queryAlarmTypeList(params) {
    return request({
        url: '/alarm/queryAlarmTypeList',
        method: 'get',
        params
    })
}

/**
 * 预警部门下拉框列表接口
 * @param {*} params 
 */
export function queryAlarmPartList(params) {
    return request({
        url: '/alarm/queryAlarmPartList',
        method: 'get',
        params
    })
}
/**
 * 各部分预警详情处理部分
 * @param {*} params 
 */
export function updateAlarmCleanInfo(params) {
    return request({
        url: '/alarm/updateAlarmCleanInfo',
        method: 'post',
        data: params
    })
}

/**
 * 分页查询预警详情
 * @param {*} params 
 */
export function queryAlarmDetailById(params) {
    return request({
        url: '/alarm/queryAlarmDetailById',
        method: 'get',
        params
    })
}

/**
//  * 获取预警页面布点信息
//  * @param {*} params 
//  */
// export function queryAlarmDetailLngLat(params) {
//     return request({
//         url: '/alarm/alarmLngLat',
//         method: 'get',
//         params
//     })
// }

/**
 * 危化企业车流量时间分布
 * @param {*} params 
 */
export function getDangerCompanyFlowDistribution(params) {
    return request({
        url: '/traffic/queryDangerCompanyFlowDistribution',
        method: 'get',
        params
    })
}

/**
 * 加油站车流量时间分布
 * @param {*} params 
 */
export function getPetrolStationFlowDistribution(params) {
    return request({
        url: '/traffic/queryPetrolStationFlowDistribution',
        method: 'get',
        params
    })
}

/**
 * 查询加油站车流量详情
 * @param {*} params 
 */
export function getPetrolStationVehicleDetail(params) {
    return request({
        url: '/traffic/queryPetrolStationVehicleDetail',
        method: 'get',
        params
    })
}

/**
 * 危险源企业通行量排名
 * @param {*} params 
 */
export function getDangerCompanyTrafficFLowRanking(params) {
    return request({
        url: '/traffic/queryDangerCompanyTrafficFLowRanking',
        method: 'get',
        params
    })
}

/**
 * 工地扬尘数据时间分布查询
 * @param {*} params 
 */
export function getSiteDustData(params) {
    return request({
        url: '/traffic/querySiteDustData',
        method: 'get',
        params
    })
}