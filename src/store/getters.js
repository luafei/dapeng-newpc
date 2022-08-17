const getters = {
    roles: state => state.user.roles,
    token: state => state.user.token,
    userId: state => state.user.userId,
    userName: state => state.user.userName,
}
export default getters