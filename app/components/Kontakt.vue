/** * Kontakt */

<template>
	<glass-card title="Kontakt" showBackButton>
		<div class="row column-sm justify-space-between-sm height-100-sm">
			<div class="width-50 width-100-sm height-50-sm" ref="contact">
				Adresse
				<div class="subline">Junior Fullstack Entwickler</div>
			</div>

			<div class="width-50 width-100-sm height-50-sm">
				<div id="map" :style="{ height: mapHeight }"></div>
			</div>
		</div>
	</glass-card>
</template>

<script>
import GlassCard from "./GlassCard.vue";
import leaflet from "leaflet";

export default {
	name: "Kontakt",
	components: { GlassCard },
	data: () => ({
		mapHeight: ""
	}),
	mounted() {
		window.addEventListener("resize", this.resizeMap);
		this.resizeMap();

		this.$nextTick(() => {
			const lng = 9.87759;
			const lat = 49.78168;
			const latlng = L.latLng(lat, lng);

			var mymap = L.map("map").setView(latlng, 18);

			L.tileLayer(
				"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
				{
					attribution: "",
					maxZoom: 21,
					id: "mapbox/streets-v11", // mapbox/dark-v10
					accessToken:
						"sk.eyJ1IjoiYmVubnlhbGV4IiwiYSI6ImNrNXdyZzhmejBvMGgza3J2cHNlcWtwM2wifQ.c4Iq6VYUmn3TY7G9wAOgdA"
				}
			).addTo(mymap);

			const marker = L.marker(latlng, {
				keyboard: false,
				title: "Benjamin Franz",
				alt: "Benjamin Franz"
			})
				.addTo(mymap)
				.bindPopup("Benjamin Franz", {
					closeButton: false,
					autoClose: false,
					closeOnClick: false,
					closeOnEscapeKey: false
				})
				.openPopup();
		});
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.resizeMap);
	},
	methods: {
		resizeMap() {
			this.mapHeight = window.getComputedStyle(this.$refs.contact).height;
		}
	}
};
</script>

<style scoped>
#map {
	min-height: 250px !important;
}
</style>
