/** * Projekte */

<template>
	<glass-card title="Projekte" :showBackButton="true">
		2 Projekte, die ich während der Ausbildung programmiert habe
		<div class="project left-image">
			<h2>Material Design Inspired Color Picker</h2>
			<div class="subline"></div>
		</div>
		<div class="project right-image">

			<h2>Mainfrankencard Admintool</h2>
			<div class="subline"></div>

				<div class="preview-images">
				<img
					v-for="img in images"
					:key="img.id"
					@click="showLightbox(img.name)"
					:src="img.name"
					:alt="img.alt"
					:title="img.alt"
				/>
				</div>

			<image-gallery
				id="mylightbox"
				ref="lightbox"
				:images="images"
			/>
		</div>
	</glass-card>
</template>

<script>
import GlassCard from "./GlassCard.vue";
import ImageGallery from "./ImageGallery.vue";

const images = require("../images/mfc/*.jpg");

let id = 0;
const imageList = Object.keys(images).map(key => {
	id++
	return {alt: key, name: images[key], id: id};
});

export default {
	name: "Projekte",
	components: { GlassCard, ImageGallery },
	data: () => ({
		images: imageList
	}),
	methods: {
		showLightbox: function(imageName) {
			this.$refs.lightbox.show(imageName);
		}
	}
};
</script>

<style scoped>
.preview-images {
	padding: 8px;
}

.preview-images img {
	width: 33%;
	height: auto;
	padding: 8px;
	border-radius: 5px;
	cursor: pointer;
}
</style>
