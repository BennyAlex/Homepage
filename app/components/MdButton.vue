/** * IconButton */

<template>
	<button class="mdc-button no-select" ref="button">
		<div class="mdc-button__ripple"></div>
		<span class="mdc-button__label">
			<slot></slot>
		</span>
	</button>
</template>

<script>
import { MDCRipple } from "@material/ripple";

export default {
	name: "MdButton",
	props: {
		to: {
			type: String,
			required: false
		}
	},
	data: () => ({}),
	mounted() {
		const iconButtonRipple = new MDCRipple(this.$refs.button);
	}
};
</script>

<style scoped>
.mdc-icon-button {
	width: 36px;
	height: 36px;
	padding: 6px;
	color: rgba(0, 0, 0, 0.8);
}
</style>
