/** * Home */

<template>
	<glass-card title="Projekte" :showBackButton="true">
		Ich bin Benjamin Franz
		<div class="subline">Junior Fullstack Entwickler</div>
	</glass-card>
</template>

<script>
import GlassCard from "./GlassCard.vue";

export default {
	name: "Home",
	components: { GlassCard },
	data: () => ({})
};
</script>

<style scoped></style>
