export default {
    state: {
        // 设置变量默认关闭
        isCollapse: false
    },
    mutations: {
        collapseMenu(state) {
            // 取反
            state.isCollapse = !state.isCollapse
        }
    }
}