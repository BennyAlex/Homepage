/** * Kontakt */

<template>
	<glass-card title="Kontakt" showBackButton>
		<div class="row">
			<div style="width: 50%">
				Adresse
				<div class="subline">Junior Fullstack Entwickler</div>
			</div>

			<div style="width: 50%;">
				<div id="map" :style="{ height: mapHeight }"></div>
			</div>
		</div>
	</glass-card>
</template>

<script>
import GlassCard from "./GlassCard.vue";

export default {
	name: "Kontakt",
	components: { GlassCard },
	data: () => ({
		mapHeight: '300px'
	}),
	mounted() {
		const el = document.querySelector(".glass-card .card-content");
		this.mapHeight = el.clientHeight - 26 + "px";

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

			L.marker(latlng)
				.addTo(mymap)
				.bindPopup("Benjamin Franz", {
					closeButton: false,
					autoClose: false,
					closeOnClick: false
				})
				.openPopup();
		});
	}
};
</script>

<style scoped></style>
