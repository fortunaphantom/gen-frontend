/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import { WagmiPlugin } from "@wagmi/vue";
import { config } from "./wagmi/config";
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";

// Components
import App from "./App.vue";
import "./styles/global.scss";

// Composables
import { createApp } from "vue";

const queryClient = new QueryClient();
const app = createApp(App)
  .use(WagmiPlugin, { config })
  .use(VueQueryPlugin, { queryClient });

registerPlugins(app);

app.mount("#app");
