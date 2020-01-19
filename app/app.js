/**
 * App.js
 */

import Vue from "vue";

import App from "./components/App.vue";

// Vue setup
if (process.env.NODE_ENV == "production") {
	Vue.config.silent = true;
	Vue.config.devtools = false;
	Vue.config.productionTip = false;
}

let init = () => {
	// New app instance
	new Vue({
		el: "#app",
		render: h => h(App),
		mounted() {
			this.$nextTick(function() {
				this.isSmallScreen();
				window.addEventListener("resize", this.isSmallScreen);
			});
		},
		methods: {
			isSmallScreen() {
				const documentWidth =
					document.body.clientWidth ||
					document.documentElement.clientWidth ||
					window.innerWidth;

				window.isSmallScreen = documentWidth <= 790;
			}
		}
	});
};
init();
