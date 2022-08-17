let currentPostName = 'all';
function getCurrentNavList(name) {
    let posts;
    // 默认所有tabs
    // 泥头车预警预处理   dumpTruckWarningPretreatment 
    // 泥头车预警处理     dumpTruckWarningTreatment
    // 泥头车示范路段     dumpTruckDemonstrationSection
    // 泥头车备案        dumpTruckFiling
    // 公交运力保障       busGuarantee
    // 大鹏办事处沙滩     dpOfficeBeach
    // 葵涌办事处沙滩     kcOfficeBeach
    // 南澳办事处沙滩     naOfficeBeach
    switch(name){ 
        case 'all':
            posts = ['monitor', 'manageBus','demonstration','message','leadIn','newhome'];
            break;
        // news    
        case 'dumpTruckWarningPretreatment':
            posts = ['demonstration', 'warningsList', 'message'];
            break;
        case 'dumpTruckWarningTreatment':
            posts = ['demonstration', 'warningsList', 'houseMessage'];
            break;
        case 'dumpTruckDemonstrationSection':
            posts = ['demonstration', 'warningsList', 'houseMessage'];
            break;
        case 'dumpTruckFiling':
            posts = ['demonstration', 'warningsList', 'leadIn'];
            break;
        case 'dumpTruckLeadership':
            posts = ['demonstration', 'warningsList', 'message'];
            break;
        case 'busGuarantee':
            posts = ['monitor', 'busMessage'];
            break;
        case 'dpOfficeBeach':
            posts = ['beachMonitor', 'messageBeach'];
            break;
        case 'kcOfficeBeach':
            posts = ['beachMonitor', 'messageBeach'];
            break;   
        case 'naOfficeBeach':
            posts = ['beachMonitor', 'messageBeach'];
            break;      
        default:
            posts = ['monitor', 'manageBus','demonstration','message','leadIn','newhome'];
            break;
    }
    return posts;
}

// 当前的路由path
export function currentRoutesByIob(routes) {
    if (currentPostName === 'all') {
        return routes[0];
    }else if (currentPostName === 'dumpTruckWarningPretreatment' || currentPostName === 'dumpTruckWarningTreatment' || currentPostName === 'dumpTruckDemonstrationSection' || currentPostName === 'dumpTruckFiling' || currentPostName === 'dumpTruckLeadership') {
        return routes.find(res => res.path === '/demonstration')
    }else if(currentPostName === 'operator') {
        return routes.find(res => res.path === '/leadIn')
    }else if(currentPostName === 'busGuarantee') {
        return routes.find(res => res.path === '/monitor')
    }else if(currentPostName === 'dpOfficeBeach' || currentPostName === 'kcOfficeBeach' || currentPostName === 'naOfficeBeach') {
        return routes.find(res => res.path === '/beachMonitor')
    } else {
        return routes[0];
    }
}

// 判断是否是示范路段 对应两个接口要加 
// /mobile/queryAlarmList, /mobile/UserAlarmInfoScanFlag
export function isDemonstrationSection() {
    if (currentPostName === 'all') {
        return false
    }
    return true;
}

export function getPostName() {
    return currentPostName;
}


export function filterNavBar() {
    return getCurrentNavList(currentPostName);
}

 // 设置底部navbar字段
 export function setNavBarTitle(title) {
  if (title === '示范路段') {
    if (getPostName() === 'dumpTruckWarningPretreatment' || getPostName() === 'dumpTruckWarningTreatment' || getPostName() === 'dumpTruckDemonstrationSection' || getPostName() === 'dumpTruckFiling' || getPostName() === 'dumpTruckLeadership') {
      return '首页'
    }else {
      return title
    }
  }
  if (title === '数据上传') {
    if (getPostName() === 'dumpTruckFiling') {
      return '白名单维护'
    }else {
      return title
    }
  }
  if (title === '消息') {
    if (getPostName() === 'dumpTruckWarningPretreatment' || getPostName
    () === 'dumpTruckLeadership') {
        return '预警一次处理'
    }else if(getPostName() === 'dumpTruckWarningTreatment') {
      return '预警二次处理'
    }else if(getPostName() === 'dumpTruckDemonstrationSection') {
      return '预警三次处理'
    }else {
      return title
    }
  }
}

// 设置网站title
export function setWebTitle() {
    var name = getPostName();
    switch (name){
      case 'dumpTruckWarningPretreatment':
        document.title = '泥头车预警预处理'
        break;
      case 'dumpTruckWarningTreatment':
        document.title = '泥头车预警处理'
        break;
      case 'dumpTruckDemonstrationSection':
        document.title = '泥头车示范路段'
        break;
      case 'dumpTruckFiling':
        document.title = '泥头车备案'
        break;  
      case 'busGuarantee':
        document.title = '公交运力保障'
        break;
      case 'dpOfficeBeach':
        document.title = '沙滩检测-大鹏'
        break;
      case 'kcOfficeBeach':
        document.title = '沙滩检测-葵涌'
        break;
      case 'naOfficeBeach':
        document.title = '沙滩检测-南澳'
        break;  
      default:
        document.title = '大鹏'
        break;
    }
  }

