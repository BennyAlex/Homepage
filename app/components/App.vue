/** * App */

<template>
	<div id="app-container">
		<main id="main" ref="main">
			<!-- <div id="navbar">
				<router-link id="title" to="/" class="navbar-item">
					Benjamin Franz
				</router-link>
				<router-link to="/projekte" class="navbar-item">
					Projekte
				</router-link>
			</div> -->

			<transition
				name="fade"
				mode="out-in"
				:duration="{ enter: 250, leave: 250 }"
				appear="appear"
			>
				<router-view></router-view>
			</transition>

			<a
				href="https://github.com/BennyAlex/Resuemee"
				target="_blank"
				id="github"
			>
				Sourcecode in Github anzeigen
			</a>
		</main>

		<div id="navbar-top">
			<router-link id="title" to="/" class="navbar-item">
				Benjamin Franz
			</router-link>
			<router-link to="/projekte" class="navbar-item">
				Projekte
			</router-link>

			<div id="menu-button" class="menu-cross-s" ref="button" @click="toggleSidebar()">
				<div class="ani" ref="ani"></div>
			</div>
		</div>

		<div id="sidebar" ref="sidebar">
			<ul id="sidebar-list" ref="sidebar-list">
				<li class="sidebar-item">
					<a href="#">Item 1</a>
				</li>
				<li class="sidebar-item">
					<a href="#">Item 2</a>
				</li>
				<li class="sidebar-item">
					<a href="#">Item 3</a>
				</li>
				<li class="sidebar-item">
					<a href="#">Item 4</a>
				</li>
				<li class="sidebar-item">
					<router-link to="/projekte" class="navbar-item">
						Projekte
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./Home.vue";
import Projekte from "./Projekte.vue";

Vue.use(VueRouter);

// Routes
const routes = [
	{
		path: "/",
		component: Home
	},
	{
		path: "/projekte",
		component: Projekte
	},
	// not found
	{
		path: "*",
		redirect: "/"
	}
];

export default {
	name: "App",
	router: new VueRouter({ routes }),
	data: () => ({
		sideBarOpen: false
	}),
	methods: {
		toggleSidebar() {
			// this.$refs.sidebar.classList.toggle("open");
			this.$refs.main.classList.toggle("move-to-left");
			// this.$refs.button.classList.toggle("ani");
			this.$refs.ani.classList.toggle("ani");

			for (let link of this.$refs["sidebar-list"].children) {
				link.classList.toggle("active");
			}

			this.sideBarOpen = !this.sideBarOpen;
		}
	}
};
</script>

<style lang="stylus">
#app-container
	height 100vh
	width 100vw

#main
	display flex
	align-items center
	justify-content center
	padding-top 65px

/* navigation styles */
#navbar-top
	display flex
	align-items center
	justify-content flex-end
	box-shadow 0 0 20px 0 rgba(0, 0, 0, 0.25)
	position fixed
	top 0
	left 0
	width 100%
	height 64px
	background-color rgba(255, 255, 255, 0.4)
	backdrop-filter blur(6px)
	font-size 21px
	z-index 5

#navbar-top .navbar-item
	text-decoration none
	color rgba(0, 0, 0, 0.85)
	padding 0 17px
	height 64px
	line-height 64px

#navbar-top a:hover
	background rgba(255, 255, 255, 0.5) !important

#navbar-top #title
	font-weight 700
	margin-right auto

#navbar-top .router-link-exact-active:not(#title)
	text-decoration underline
	background rgba(255, 255, 255, 0.3)
	color rgba(0, 0, 0, 0.01)

#github
	position absolute
	color rgba(255, 255, 255, 0.8)
	bottom 9px
	left 50%
	transform translate(-50%, 0)
	text-decoration none

@media only screen and (max-width 790px)
	#github
		display none

@media only screen and (max-height 623px)
	#app-container
		height auto
</style>
