/** * App */

<template>
	<div id="app-container">
		<div id="navbar">
			<div id="title">
				<router-link to="/">Benjamin Franz</router-link>
			</div>
			<router-link to="/projekte">Projekte</router-link>
		</div>

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
	router: new VueRouter({ routes })
};
</script>

<style lang="stylus">
#app-container
	display flex
	align-items center
	justify-content center
	height 100vh
	width 100vw
	padding-top 65px

/* navigation styles */
#navbar
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
	z-index 99

#navbar a
	text-decoration none
	color rgba(0, 0, 0, 0.85)
	padding 0 17px


#navbar #title
	margin 0
	font-size 22px
	font-weight 700
	margin-right auto


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
