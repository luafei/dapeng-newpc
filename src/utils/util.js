export const generateCode = (num) => {
    let library = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (var i = 0; i < num; i++) {
        let randomPoz = Math.floor(Math.random() * library.length);
        code += library.substring(randomPoz, randomPoz + 1);
    }
    return code;
}


export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
            // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}

import axios from 'axios'
import { getToken } from '@/utils/auth'

export function upload(url, params) {
    return new Promise((resolve, reject) => {
      const param = new FormData();
      param.append("multipartFile", params.file.file);
      const config = {
        headers: { "Content-Type": "multipart/form-data",'token': getToken()},
      };
      axios.post(url, param, config)
              .then((res) => {
                  console.log(res);
                  resolve(res.data);
                })
                .catch((err) => {
                  reject(err.data);
                });
            });
  }


  export function getCurrentFromat() {
    let strTime = parseTime(new Date().getTime(), '{y}-{m}-{d} {h}:{i}:{s}:{a}').split(' ');
    let ymd = strTime[0].split('-')
    let hisa = strTime[1].split(':')
    return `${ymd[0]}年${ymd[1]}月${ymd[2]}日  &nbsp;  ${hisa[0]}:${hisa[1]}:${hisa[2]} &nbsp; 星期${hisa[3]}`
    // return ymd[0]+'年'+ymd[1]+'月'+ymd[2] + '日  ' + hisa[0]+':'+hisa[1]+":"+hisa[2] + ' 星期'+hisa[3]
}


export function getYMDW() {
    let strTime = parseTime(new Date().getTime(), '{y}-{m}-{d} {h}:{i}:{s}:{a}').split(' ');
    let ymd = strTime[0].split('-')
    let hisa = strTime[1].split(':')
    return `${ymd[0]}年${ymd[1]}月${ymd[2]}日 星期${hisa[3]}`
}