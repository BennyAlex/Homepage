/** * GlassCard */

<template>
	<div class="glass-card">
		<div class="title-bar">
			<div class="icon" v-if="showBackButton">
				<router-link to="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							fill="#333"
							d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
						/>
					</svg>
				</router-link>
			</div>
			<div :class="showBackButton ? 'title' : 'title title-large'">
				{{ title }}
			</div>
		</div>

		<div class="card-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "glass-card",
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
	data: () => ({})
};
</script>

<style scoped lang="stylus">
.glass-card
	margin 20px
	width 750px
	height 520px
	box-shadow 0 0 20px 0 rgba(0, 0, 0, 0.25)
	border-radius 8px
	background-color rgba(255, 255, 255, 0.25)
	backdrop-filter blur(5px)
	font-size 19px
	color rgba(0, 0, 0, 0.7)
	padding 13px


.title-bar
	display flex
	margin-bottom 6px


.icon
	width 33.333%


.title
	font-size 22px
	color rgba(0, 0, 0, 0.8)
	width 33.333%
	text-align center

.title-large
	width 100%

.card-content
	padding 13px

// media queries for mobile
@media only screen and (max-width 790px)
	.glass-card
		width 100%


@media only screen and (max-width 500px)
	.glass-card
		margin 14px
</style>
