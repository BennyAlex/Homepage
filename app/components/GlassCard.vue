/** * GlassCard */

<template>
	<div class="glass-card column mdc-elevation--z10">
		<div class="title-bar row align-center no-select">
			<div class="icon" v-if="showBackButton">
				<icon-button @click.native="goBack">
					arrow_back
				</icon-button>
			</div>
			<div :class="showBackButton ? 'title' : 'title title-large'">
				{{ title }}
			</div>
		</div>
		<div class="card-content os-host-flexbox">
			<overlay-scrollbars
				:options="{
					className: 'os-theme-dark width-100 height-100 card-scrollbar'
				}"
			>
				<slot></slot>
			</overlay-scrollbars>
		</div>
	</div>
</template>

<script>
import IconButton from "./IconButton.vue";

export default {
	name: "glass-card",
	components: { IconButton },
	props: {
		title: {
			type: String,
			required: false
		},
		showBackButton: {
			type: Boolean,
			default: false,
			required: false
		}
	},
	data: () => ({}),
	methods: {
		goBack() {
			this.$router.go(-1);
		}
	}
};
</script>

<style scoped lang="stylus">
.glass-card
	width 100%
	height 100%
	border-radius 8px
	background rgba(255, 255, 255, 0.25)
	backdrop-filter blur(5px)
	font-size 19px
	color rgba(0, 0, 0, 0.75)
	padding 13px

.title-bar
	margin-bottom 10px

.icon
	width 33.333%

.mdc-icon-button {
	color: rgba(0, 0, 0, 0.8);
}

.title
	font-size 22px
	color rgba(0, 0, 0, 0.8)
	width 33.333%
	text-align center

.title-large
	width 100%

.card-content
	width 100%
	height 100%
	padding 13px
	position relative
</style>
