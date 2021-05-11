export default {
  state: {
    appName: '业绩管理系统',
    collapse: false
  },
  getters: {
    collapse(state) {
      return collapse;
    }
  },
  mutations: {
    collapse(state) {
      state.collapse = !state.collapse;
    }
  },
  actions: {}
}
