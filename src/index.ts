import { App } from "vue";
import VueNiceSidebar from "./VueNiceSidebar.vue";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const VnSidebar = VueNiceSidebar;

export default {
	install(app: App) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		app.component("VnSidebar", VueNiceSidebar);
	},
};
