import Vuex from "vuex";

export default {
  state: {
    ischeckall: false,
    selected: [],
    all: [
      { id: 1, name: "test 1" },
      { id: 2, name: "test 2" },
      { id: 3, name: "test 3" }
    ]
  },
  getters: {
    getAll(state) {
      console.log(state);
      return state.all;
    },
    getChecked(state) {
      return state.posts.filter(post => post.checked);
    }
  },
  mutations: {
    selectItem(state, item) {
      state.selected.push(item);
    }
  }
};
