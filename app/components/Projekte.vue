/** * Projekte */

<template>
	<glass-card title="Projekte" showBackButton>
		2 Projekte, die ich während meiner Ausbildung programmiert habe:
		<br /><br />
		<div class="project row column-sm wrap">
			<div style="width: 82%" class="column width-100-sm">
				<div>
					<b>Material Design Inspired Color Picker</b>
					<div class="subline">
						Ein JavaScript Color-Picker, von Material Design
						inspiriert
					</div>
				</div>
				<div class="row grow align-center justify-center">
					<md-button
						class="mdc-button--unelevated"
						href="https://bennyalex.github.io/material-design-inspired-color-picker/"
					>
						Demo
					</md-button>
					<md-button
						class="mdc-button--outlined"
						href="https://github.com/BennyAlex/material-design-inspired-color-picker"
					>
						In Github ansehen
					</md-button>
				</div>
			</div>
			<img
				src="../images/md-color-picker.png"
				style="width: 18%"
				class="width-100-sm"
			/>
		</div>
		<div class="project mfc">
			<b>Mainfrankencard Admintool</b>
			<div class="subline"></div>

			<div class="preview-images">
				<div v-for="img in images" :key="img.id">
					<img
						@click="showImageGallery(img.name)"
						:src="img.name"
						:alt="img.alt"
						:title="img.alt"
					/>
				</div>
			</div>

			<image-gallery ref="imageGallery" :images="images" />
		</div>
	</glass-card>
</template>

<script>
import GlassCard from "./GlassCard.vue";
import ImageGallery from "./ImageGallery.vue";
import MdButton from "./MdButton.vue";

const images = require("../images/mfc/*.jpg");

let id = 0;
const imageList = Object.keys(images).map(key => {
	id++;
	return { alt: key, name: images[key], id: id };
});

export default {
	name: "Projekte",
	components: { GlassCard, ImageGallery, MdButton },
	data: () => ({
		images: imageList
	}),
	methods: {
		showImageGallery(imageName) {
			this.$refs.imageGallery.show(imageName);
		}
	}
};
</script>

<style scoped>
.project {
	padding: 0 8px;
}

.preview-images {
	padding-top: 8px;
	display: flex;
	align-items: center;
}

.preview-images div {
	width: 33%;
	padding: 8px;
	padding-bottom: 0;
}

.preview-images img {
	width: 100%;
	height: auto;
	border-radius: 7px;
	cursor: pointer;
}

.project .mdc-button {
	margin: 18px 10px;
}

.project.mfc {
	margin-top: 16px;
}

@media only screen and (max-width: 788px) {
	.project .mdc-button {
		margin: 18px 0;
	}

	.project .mdc-button:first-child {
		margin-right: 12px;
	}
}
</style>
