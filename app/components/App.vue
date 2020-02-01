/** * App */

<template>
	<div id="app-container">
		<main id="main" ref="main" class="column align-center justify-center">
			<div id="router-view">
				<transition
					name="fade"
					mode="out-in"
					:duration="{ enter: 250, leave: 250 }"
					appear="appear"
				>
					<router-view></router-view>
				</transition>
			</div>

			<a
				href="https://github.com/BennyAlex/Resuemee"
				target="_blank"
				class="github"
			>
				Sourcecode in Github anzeigen
			</a>
		</main>

		<div id="navbar-top" class="mdc-elevation--z20">
			<md-button id="app-title" @click.native="transitionTo($event, '/')">
				Benjamin Franz
			</md-button>

			<!-- <md-button @click.native="transitionTo($event, '/')">
				Lebenslauf
			</md-button> -->

			<md-button @click.native="transitionTo($event, '/kontakt')">
				Kontakt
			</md-button>

			<md-button @click.native="transitionTo($event, '/projekte')">
				Projekte
			</md-button>

			<icon-button id="menu-icon-button" @click.native="toggleSidebar">
				<div id="menu-button" class="menu-cross-s" ref="menuButton">
					<div id="ani" class="ani"></div>
				</div>
			</icon-button>
		</div>

		<div id="sidebar" ref="sidebar" class="mdc-elevation--z1">
			<!-- <md-button @click.native="transitionTo($event, '/')">
				Lebenslauf
			</md-button> -->

			<md-button @click.native="transitionTo($event, '/kontakt')">
				Kontakt
			</md-button>

			<md-button @click.native="transitionTo($event, '/projekte')">
				Projekte
			</md-button>

			<a
				href="https://github.com/BennyAlex/Resuemee"
				target="_blank"
				class="github github-sidebar"
			>
				<md-button>
					Sourcecode in Github anzeigen
				</md-button>
			</a>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./Home.vue";
import IconButton from "./IconButton.vue";
import Kontakt from "./Kontakt.vue";
import Projekte from "./Projekte.vue";
import MdButton from "./MdButton.vue";

import { MDCRipple } from "@material/ripple";

Vue.use(VueRouter);

// Routes
const routes = [
	{
		path: "/",
		component: Home
	},
	{
		path: "/kontakt",
		component: Kontakt
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
	components: { IconButton, MdButton },
	data: () => ({
		sideBarOpen: false
	}),
	methods: {
		toggleSidebar() {
			this.$refs.sidebar.classList.toggle("open");
			this.$refs.main.classList.toggle("move-to-left");
			this.$refs.menuButton.classList.toggle("animate");
			this.sideBarOpen = !this.sideBarOpen;
		},
		closeSidebar(e) {
			if (this.sideBarOpen) {
				if (
					e.target.id !== "menu-button" &&
					e.target.id !== "sidebar" &&
					e.target.id !== "ani"
				) {
					this.toggleSidebar();
				}
			}
		},
		transitionTo(event, targetRoute) {
			if (this.$router.currentRoute.path !== targetRoute) {
				this.$router.push(targetRoute);
			}
		},
		setActiveButton() {
			const currentRoute = this.$router.currentRoute.path;
			const activeButtons = document.querySelectorAll(".active-route");
			if (activeButtons) {
				for (let button of activeButtons) {
					button.classList.remove("active-route");
				}
			}
			if (currentRoute === "/") {
				document
					.querySelector("#app-title")
					.classList.add("active-route");
			} else {
				const navButtons = [
					...document.querySelectorAll("#navbar-top .mdc-button"),
					...document.querySelectorAll("#sidebar .mdc-button")
				];
				for (let button of navButtons) {
					if (
						button.innerText.toLowerCase() ===
						currentRoute.replace("/", "")
					) {
						button.classList.add("active-route");
					}
				}
			}
		}
	},
	mounted() {
		window.addEventListener("click", this.closeSidebar);
		this.setActiveButton();
	},
	updated() {
		this.setActiveButton();
	}
};
</script>

<style lang="stylus">
#app-container, main
	height 100%
	width 100%

#main
	padding-top 65px
	position relative

/* navigation styles */
#navbar-top
	display flex
	align-items center
	justify-content flex-end
	position fixed
	top 0
	left 0
	width 100%
	height 64px
	background-color rgba(255, 255, 255, 0.4)
	backdrop-filter blur(5px)
	z-index 5

#navbar-top .mdc-button
	height 100%
	padding 0 16px
	text-decoration none
	color rgba(0, 0, 0, 0.85)
	font-size 19px
	border-radius 0

#navbar-top .mdc-button .mdc-button__ripple
	border-radius 0

#navbar-top #app-title
	font-weight 700
	margin-right auto

#navbar-top .mdc-button:not(#app-title).active-route
	background rgba(0, 0, 0, 0.19)
	text-decoration underline

body:not(.disable-hover) #navbar-top .mdc-button:hover
	background rgba(0, 0, 0, 0.24)

body.disable-hover #navbar-top .mdc-button:hover, body.disable-hover #navbar-top .mdc-button:hover *
	background rgba(0, 0, 0, 0) !important

.github
	position absolute
	color rgba(255, 255, 255, 0.8)
	bottom 12px
	left 50%
	transform translate(-50%, 0)
	text-decoration none

#router-view
	margin-top -8px // 3/4 of github bottom
	padding 14px
	width 760px
	height 546px


@media only screen and (max-width 764px)
	.github:not(.github-sidebar)
		display none

	#navbar-top .mdc-button:not(#app-title)
		display none

	#router-view
		width 100%
		margin-top 0
		height 100%
		padding 30px 24px

@media only screen and (max-width 470px), only screen and (max-height 692px)
	.github:not(.github-sidebar)
		display none

	#router-view
		margin-top 0
		padding 24px 18px
		height 100%
</style>
