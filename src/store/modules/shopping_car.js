var user_message = ''
export default {
    namespaced: true,
    state: {
        commodity: []
    },
    mutations: {
        /* 读取用户购物车 */
        goshopping_car_init(state) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf('user') != -1) {
                    /* 判断该用户是否存在于名单中 */
                    if (JSON.parse(localStorage.getItem(localStorage.key(i))).admin == localStorage.login_name) {
                        if (JSON.parse(localStorage.getItem(localStorage.key(i))).commodity) {
                            state.commodity = JSON.parse(localStorage.getItem(localStorage.key(i))).commodity
                        }
                    }
                }
            }
            // console.log(state.commodity);
        },
        goshopping_car(state, commodity) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf('user') != -1) {
                    /* 判断该用户是否存在于名单中 */
                    if (JSON.parse(localStorage.getItem(localStorage.key(i))).admin == localStorage.login_name) {
                        /* 如果该用户没有加购过物品 */
                        if (!JSON.parse(localStorage.getItem(localStorage.key(i))).commodity) {
                            user_message = Object.assign(JSON.parse(localStorage.getItem(localStorage.key(i))), { commodity: [commodity] })
                            console.log(1);
                        } else {
                            /* 如果用户购物车有信息 */
                            state.commodity = JSON.parse(localStorage.getItem(localStorage.key(i))).commodity
                            state.commodity.push(commodity)
                            user_message = Object.assign(JSON.parse(localStorage.getItem(localStorage.key(i))), { commodity: state.commodity })
                        }

                        // console.log(`${localStorage.key(i)}`,user_message);
                        localStorage.setItem(`${localStorage.key(i)}`, JSON.stringify(user_message))
                        // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));

                    }
                }
            }
        },
        delete_commodity(state, index) {
            state.commodity.splice(index, 1)
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf('user') != -1) {
                    /* 判断该用户是否存在于名单中 */
                    if (JSON.parse(localStorage.getItem(localStorage.key(i))).admin == localStorage.login_name) {
                        user_message = Object.assign(JSON.parse(localStorage.getItem(localStorage.key(i))), { commodity: state.commodity })
                        localStorage.setItem(`${localStorage.key(i)}`, JSON.stringify(user_message))
                    }
                }
            }
        }
    },
    actions: {
        goshopping_car({ commit }, commodity) {
            commit('goshopping_car', commodity)
        },
        goshopping_car_init({ commit }) {
            commit('goshopping_car_init')
        },
        delete_commodity({ commit }, index) {
            commit('delete_commodity', index)
        }
    }
}