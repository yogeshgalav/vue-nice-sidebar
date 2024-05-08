import VueNiceSidebar from "./VueNiceSidebar.vue";

export const VnSidebar = VueNiceSidebar;

export default {
	install(app) {
		app.component(VueNiceSidebar);
	}
}