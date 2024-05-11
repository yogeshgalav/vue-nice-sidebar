<template>
	<ul
		v-if="item.children?.length"
		:class="[item.top ? 'nav' : 'nav-dropdown-items']"
	>
		<li
			v-for="subItem in item.children"
			:id="'nav_item_' + subItem.unique_id"
			:key="subItem.unique_id"
			:class="[
				'nav-item',
				subItem.children?.length ? 'nav-dropdown' : '',
			]"
			:disabled="subItem.children?.length > 0"
		>
			<router-link
				v-if="!subItem.children?.length"
				:id="subItem.id"
				class="nav-link"
				:to="subItem.url"
				@click="activeClass(subItem.url)"
			>
				<i :class="['nav-icon', subItem.icon]" />

				{{ subItem.name }}
			</router-link>
			<div
				v-if="subItem.children?.length"
				class="nav-link nav-dropdown-toggle"
				@click="selectNavDropdown(subItem)"
			>
				<i :class="['nav-icon', subItem.icon]" />
				{{ subItem.name }}
			</div>
			<sidebar-item :item="subItem" />
		</li>
	</ul>
</template>
<script setup lang="ts">
import SidebarItem from "./SidebarMenuItem.vue";

type TItem = {
	top?: boolean;
	children?: Array<TItem>;
	id: string;
	unique_id: string;
	url: string;
	icon: string;
	name: string;
};

defineProps({
	item: {
		type: Object,
		default: () => {},
	},
});

function selectNavDropdown(item: TItem) {
	let selected_nav_item = document.getElementById(
		"nav_item_" + item.unique_id,
	);
	selected_nav_item?.classList.toggle("open");
}
function activeClass(url: string) {
	let old_active_link = document.querySelector(".nav-link.active");
	old_active_link?.classList.remove("active");
	let new_active_link = document.querySelector(`.nav-link[href="${url}"]`);
	new_active_link?.classList.add("active");
}
// onMounted(()=>{
// 	let new_active_link = document.querySelector(`[href="${route.path}"]`);
// 	new_active_link.classList.add('active');
// })
</script>
