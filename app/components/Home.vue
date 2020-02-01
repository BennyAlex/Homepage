/** * Home */

<template>
	<glass-card title="Willkommen!">
		<div class="row column-sm align-center height-100" id="container">
			<img
				src="../images/selfie.png"
				class="height-100"
				id="image"
			/>

			<div class="column align-center justify-center" id="me">
				<div id="name">
					Ich bin Benjamin Franz
				</div>
				<div class="subline center">
					Junior Fullstack Entwickler<br />
					mit Leidenschaft für Webentwicklung
				</div>
				<md-button
					class="mdc-button--raised mdc-elevation--z6"
					href="https://github.com/BennyAlex/material-design-inspired-color-picker"
				>
					Lebenslauf
				</md-button>
			</div>
		</div>
	</glass-card>
</template>

<script>
import GlassCard from "./GlassCard.vue";
import MdButton from "./MdButton.vue";

export default {
	name: "Home",
	components: { GlassCard, MdButton },
	data: () => ({})
};
</script>

<style scoped>
.mdc-button {
	margin-top: 56px;
	margin-bottom: 13px;
	min-height: 62px;
	height: 62px;
	padding: 0 42px;
}

#container {
	min-height: 200px;
}

#me {
	margin-right: -13px;
	flex-grow: 1;
	flex-shrink: 0;
}

#name {
	margin-bottom: 10px;
	font-weight: 900;
}

@media only screen and (max-width: 764px) {
	.mdc-button {
		margin: 46px;
		margin-bottom: 62px;
		min-height: 54px;
		height: 54px;
		padding: 0 40px;
	}

	#image {
		order: 2;
		justify-content: center;
		height: auto;
		width: 100%;
		max-width: 380px;
	}

	#me {
		margin-right: 0;
		flex-shrink: 0;
	}

	#name {
		margin-top: 46px;
	}
}
</style>
