export const isValidPassword = (value) => {
    let result = [];
    // const isPass = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])[0-9a-zA-Z]{8,}$/.test(value)
    const isPass = /^.*(?=.{8,})(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*[!@#$%^&_=\-\+*?\(\)]).*$/.test(value)
    result = [isPass, isPass ? '' : '密码不少于8位数,包含数字、大小写英文字母、特殊字符']
    return result
}

export const validatePassword = (rule, value, callback) => {
    const result = isValidPassword(value)
    if (!result[0]) {
        callback(new Error(result[1]))
    } else {
        callback()
    }
}