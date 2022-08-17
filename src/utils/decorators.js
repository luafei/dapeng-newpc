export function confirm(
    title = '删除',
    message = '此操作执行后将不能回退',
    cancelFn = function() {}
) {
    return function(target, name, descriptor) {
        const originFn = descriptor.value
        descriptor.value = async function(...rest) {
            try {
                await this.$dialog.confirm({
                    message,
                    title: title
                })
                originFn.apply(this, rest)
            } catch (error) {
                cancelFn && cancelFn(error)
            }
        }
    }
}