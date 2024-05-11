<template>
	<div class="sidebar">
		<nav class="sidebar-nav">
			<section
				class="ps-container scroll-area ps ps--theme_default ps--active-y"
			>
				<sidebar-item :item="{ children: props.navItems, top: true }" />
			</section>
		</nav>
		<button
			type="button"
			class="sidebar-minimizer"
			@click="minimizeSidebar"
		/>
	</div>
</template>
<script setup lang="ts">
import SidebarItem from "./SidebarMenuItem.vue";
import { onMounted } from "vue";

let props = defineProps({
	navItems: {
		type: Array,
		default: () => [],
	},
});

onMounted(() => {
	document.body.classList.add("header-fixed");
	document.body.classList.add("sidebar-fixed");
	document.body.classList.add("sidebar-lg-show");
});

function minimizeSidebar() {
	document.body.classList.toggle("sidebar-minimized");
	document.body.classList.toggle("brand-minimized");
}
</script>
<style>
@media (min-width: 992px) {
	.sidebar-fixed .app-header + .app-body .sidebar {
		height: calc(100vh - 55px);
	}
	html:not([dir="rtl"]) .sidebar-lg-show .sidebar,
	html:not([dir="rtl"]) .sidebar-show .sidebar {
		margin-left: 0;
	}
	.sidebar-fixed .sidebar {
		position: fixed;
		z-index: 1019;
		width: 200px;
		height: 100vh;
	}
}
html:not([dir="rtl"]) .sidebar {
	margin-left: -200px;
}

.app-body .sidebar {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 200px;
	flex: 0 0 200px;
	-ms-flex-order: -1;
	order: -1;
}
.sidebar {
	-webkit-transition:
		margin-left 0.25s,
		margin-right 0.25s,
		width 0.25s,
		-webkit-box-flex 0.25s;
	transition:
		margin-left 0.25s,
		margin-right 0.25s,
		width 0.25s,
		flex 0.25s,
		-webkit-box-flex 0.25s,
		-ms-flex 0.25s;
}
.sidebar {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	padding: 0;
	color: #fff;
	background: #2f353a;
}

/* sidebar-nav */
.sidebar > .sidebar-nav {
	overflow-x: hidden;
	overflow-y: auto;
}
.sidebar .sidebar-nav,
.sidebar .sidebar-scroll {
	position: relative;
	-webkit-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
	width: 200px;
}
.sidebar-nav {
	-webkit-transition: width 0.25s;
	transition: width 0.25s;
}

.scroll-area {
	overflow-y: auto !important;
	overflow-x: hidden !important;
	position: absolute;
	height: 100%;
	margin: auto;
}

/* .nav */
.sidebar .nav {
	width: 200px;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	min-height: 100%;
	padding: 0;
}
.nav {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
}

/* nav-item */
.sidebar .nav-item {
	/* color: white;     */
	position: relative;
	margin: 0;
	-webkit-transition: background 0.3s ease-in-out;
	transition: background 0.3s ease-in-out;
}

/* nav-link nav-dropdown-toggle */
.sidebar .nav-dropdown-toggle {
	/* display: block; */
	position: relative;
}
.sidebar .nav-dropdown-toggle:before {
	position: absolute;
	top: 50%;
	right: 1rem;
	display: block;
	width: 8px;
	height: 8px;
	padding: 0;
	margin-top: -4px;
	content: "";
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3Cpath fill='%2373818f' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: 50%;
	-webkit-transition: -webkit-transform 0.3s;
	transition: -webkit-transform 0.3s;
	transition: transform 0.3s;
	transition:
		transform 0.3s,
		-webkit-transform 0.3s;
}
.sidebar .nav-link {
	display: block;
	padding: 0.75rem 1rem;
	color: #fff;
	text-decoration: none;
	background: transparent;
}
.nav-link {
	cursor: pointer;
}
.sidebar .nav-link .nav-icon {
	display: inline-block;
	width: 1.09375rem;
	margin: 0 0.5rem 0 0;
	font-size: 0.875rem;
	color: #73818f;
	text-align: center;
}
/* nav-dropdown-items */
.sidebar .nav-dropdown-items {
	max-height: 0;
	padding: 0;
	margin: 0;
	overflow-y: hidden;
	-webkit-transition: max-height 0.3s ease-in-out;
	transition: max-height 0.3s ease-in-out;
}
.sidebar .nav-dropdown-items .nav-item {
	padding: 0;
	list-style: none;
}
.sidebar .sidebar-minimizer {
	position: relative;
	-webkit-box-flex: 0;
	-ms-flex: 0 0 50px;
	flex: 0 0 50px;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.2);
	border: 0;
}
.sidebar .sidebar-minimizer:hover {
	background-color: rgba(0, 0, 0, 0.3);
}
.sidebar .sidebar-minimizer:hover:before {
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3Cpath fill='%23fff' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/%3E%3C/svg%3E");
}
.sidebar .sidebar-minimizer:before {
	position: absolute;
	top: 0;
	right: 0;
	width: 50px;
	height: 50px;
	content: "";
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3Cpath fill='%2373818f' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 12.5px;
	-webkit-transition: 0.3s;
	transition: 0.3s;
}
</style>
