<script setup lang="ts">

</script>

<template>
	<section class="hero">
		<div class="hero__inner container">
			<h1 class="hero__title">тестовое задание</h1>
			<NuxtLink to="/catalog/" class="hero__button">В каталог</NuxtLink>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.hero {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	&__inner {
		display: flex;
		flex-direction: column;
		gap: clamp(2rem, 3vw, 4rem);
	}
	&__title {
		text-transform: uppercase;
		font-size: clamp(2.6rem, 7vw, 6.4rem);
		font-weight: 600;
	}
	&__button {
		width: fit-content;
		background-color: red;
		padding: clamp(0.8rem, 1vw, 1rem) clamp(1.6rem, 2vw, 2.4rem);
		font-size: 1.4rem;
		font-weight: 400;
		line-height: 2rem;
		color: white;
	}
}
</style>