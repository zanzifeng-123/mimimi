// var user_id = 0
export default {
    namespaced: true,
    state: {
        users: [
            {
                admin: '',
                id:''
            }
        ]
    },
    mutations: {
        /* 注册 */
        register_message(state, payload) {
            var register_state = 0;
            for (let i = 0; i < localStorage.length; i++) {
                /* 判断是否有该用户名 */
                if (localStorage.key(i).indexOf('user') != -1) {
                    if (JSON.parse(localStorage.getItem(localStorage.key(i))).admin == payload.admin) {
                        register_state = 1
                        break
                    }
                }
            }
            if (register_state == 0) {
                localStorage.setItem('user' + localStorage.length,JSON.stringify(payload))
                sessionStorage.register = 1
            } else {
                sessionStorage.register = 0
            }

        },
        /* 登录 */
        login_message(state, user) {
            var login_state = 0, user_name = '', index = 0
            /* 首先获取用户名单 */
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf('user') != -1) {
                    /* 判断该用户名是否存在于用户名单 */
                    if (JSON.parse(localStorage.getItem(localStorage.key(i))).admin == user.admin) {
                        user_name = JSON.parse(localStorage.getItem(localStorage.key(i)))
                        login_state = 1
                        // console.log(user_name);
                        index = i
                        break
                    }
                }
            }
            /* 判断该用户的密码 */
            if (login_state == 1 && user_name.password == user.password) {
                state.users.admin = user.admin
                // console.log(state.users);
                localStorage.login_name = user.admin
                sessionStorage.login = 1
                sessionStorage.user_name = user_name.admin
                sessionStorage.user_id = index
            }else{
                sessionStorage.login = 0
                sessionStorage.user_name = null
                sessionStorage.user_id = null
            }
        }
    },
    actions: {
        register_message({ commit }, payload) {

            commit('register_message', payload)
        },
        login_message({ commit }, user) {
            commit('login_message', user)
        }
    }
}