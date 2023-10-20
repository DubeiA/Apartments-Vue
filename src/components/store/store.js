import { createStore } from "vuex";
import auth from "./modules/auth";
import createPersistedState from "vuex-persistedstate";

const dataState = createPersistedState({
  paths: ["auth.token"],
});

const store = createStore({
  modules: {
    auth,
  },
  plugins: [dataState],
});

export default store;
