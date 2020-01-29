/**
 * App.js
 */

import Vue from "vue";

import App from "./components/App.vue";

import { OverlayScrollbarsPlugin } from "overlayscrollbars-vue";

Vue.use(OverlayScrollbarsPlugin);

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
		data: () => ({
			lastTouchTime: 0
		}),
		mounted() {
			this.$nextTick(() => {
				window.addEventListener(
					"touchstart",
					() => {
						this.lastTouchTime = new Date();
					},
					true
				);
				window.addEventListener("touchstart", this.disableHover, true);
				window.addEventListener("mousemove", this.enableHover, true);
				window.addEventListener(
					"mousedown",
					this.removeRippleAfterClick,
					{
						passive: true
					}
				);
				window.addEventListener(
					"mouseup",
					this.removeRippleAfterClick,
					{
						passive: true
					}
				);
				window.addEventListener(
					"touchend",
					this.removeRippleAfterClick,
					{
						passive: true
					}
				);
				window.addEventListener(
					"touchstart",
					this.removeRippleAfterClick,
					{
						passive: true
					}
				);
			});
		},
		methods: {
			removeRippleAfterClick() {
				const ripples = document.querySelectorAll(
					".mdc-ripple-upgraded--background-focused"
				);

				for (let ripple of ripples) {
					if (ripple && ripple.classList) {
						ripple.classList.remove(
							"mdc-ripple-upgraded--background-focused"
						);
					}
				}
			},
			enableHover() {
				// discard emulated mouseMove events coming from touch events
				if (new Date() - this.lastTouchTime < 500) return;
				document.body.classList.remove("disable-hover");
			},
			disableHover() {
				if (!document.body.classList.contains("disable-hover")) {
					document.body.classList.add("disable-hover");
				}
			}
		}
	});
};
init();
