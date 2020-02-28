/** * Projekte */

<template>
	<glass-card title="Projekte" showBackButton>
		2 Projekte, die ich während meiner Ausbildung programmiert habe:
		<div class="project row column-sm align-center-sm">
			<div style="width: 80%" class="column width-100-sm">
				<div>
					<b>Material Design Inspired Color Picker</b>
					<div class="subline">
						Ein JavaScript Color-Picker, von Material Design
						inspiriert
					</div>
				</div>
				<div class="row grow align-center justify-center wrap buttons">
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
				src="../images/MD Color Picker.png"
				id="mdcp-img"
				@click="showPickerImage()"
				alt="Color Picker"
				title="Color Picker"
			/>
			<image-gallery ref="pickerImage" :images="pickerImage" />
		</div>
		<div class="project mfc">
			<b>Mainfrankencard-Datenbank</b>
			<div class="subline">
				Mein Abschlussprojekt. Internes Tool zum Verwalten von
				Mainfrankencard Partnern und Angeboten
			</div>

			<div class="preview-images row wrap align-center">
				<div
					v-for="img in mfcImages"
					:key="img.id"
					class="width-100-sm"
				>
					<img
						@click="showImageGallery(img.name)"
						:src="img.name"
						:alt="img.alt"
						:title="img.alt"
					/>
				</div>
			</div>

			<image-gallery ref="imageGallery" :images="mfcImages" />
		</div>
	</glass-card>
</template>

<script>
import GlassCard from "./GlassCard.vue";
import ImageGallery from "./ImageGallery.vue";
import MdButton from "./MdButton.vue";

const mfcImages = require("../images/mfc/*.png");
const pickerImage = require("../images/MD Color Picker.png");

let id = 0;
const mfcImageList = Object.keys(mfcImages).map(key => {
	id++;
	return { alt: key, name: mfcImages[key], id: id };
});

export default {
	name: "Projekte",
	components: { GlassCard, ImageGallery, MdButton },
	data: () => ({
		mfcImages: mfcImageList,
		pickerImage: [{ alt: "MD Color Picker", name: pickerImage, id: 0 }]
	}),
	methods: {
		showImageGallery(imageName) {
			this.$refs.imageGallery.show(imageName);
		},
		showPickerImage() {
			this.$refs.pickerImage.show();
		}
	}
};
</script>

<style scoped>
.project {
	padding: 0 9px;
	margin-top: 24px;
}

img {
	border-radius: 7px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
}

#mdcp-img {
	width: 20%;
}

.preview-images {
	padding-top: 9px;
}

.preview-images div {
	width: 33%;
	padding: 9px;
	padding-bottom: 0;
}

.preview-images img {
	width: 100%;
	height: auto;
}

body:not(.disable-hover) .preview-images img:hover,
body:not(.disable-hover) #mdcp-img:hover {
	transform: scale(1.06);
}

.project .buttons {
	margin: 20px 0;
}

.project .mdc-button {
	margin: 10px;
	line-height: 42px;
	height: 42px;
	padding: 0 22px;
}

@media only screen and (max-width: 764px) {
	#mdcp-img {
		width: 75%;
	}

	.project.mfc {
		margin-top: 44px;
	}

	.project .mdc-button:first-child {
		margin-right: 12px;
	}
}
</style>
