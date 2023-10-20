import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import Notifications from "@kyvg/vue3-notification";
import store from "./components/store/store";
import router from "./router";

createApp(App).use(store).use(router).use(Notifications).mount("#app");
