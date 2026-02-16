<script setup lang="ts">
import type { Product } from '~/features/catalog/data/types'
import { useProductPrice } from '~/features/catalog/data/useProductPrice'

const props = defineProps<Product>()

const { formattedPrice, creditPrice } = useProductPrice(() => props.price)
</script>

<template>
	<NuxtLink to="#" class="catalog-card">
		<div class="catalog-card__image-wrapper">
			<NuxtImg :src="props.image" class="catalog-card__image" />
			<button class="catalog-card__favorite" aria-label="В избранное">
				<icon name="icon:favorite" :size="24" />
			</button>
		</div>
		<div class="catalog-card__info">
			<div class="catalog-card__prices">
				<span class="catalog-card__price">{{ formattedPrice }} ₽</span>
				<span class="catalog-card__credit">{{ creditPrice }} ₽ × 2</span>
			</div>
			<p class="catalog-card__name">{{ props.name }}</p>
		</div>
	</NuxtLink>
</template>

<style scoped lang="scss">
.catalog-card {
	display: flex;
	flex-direction: column;
	gap: 3.1rem;
	
	&__image-wrapper {
		position: relative;
		width: 100%;
		height: 180px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&__favorite {
		position: absolute;
		top: 1.2rem;
		right: 1.2rem;
		background: none;
		border: none;
		cursor: pointer;
	}

	&__info {
		padding-top: 1.2rem;
	}

	&__prices {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	&__price {
		font-size: 2.4rem;
		font-weight: 500;
		line-height: 140%;
	}

	&__credit {
		font-size: 1.4rem;
		color: white;
		background-color: black;
		padding: 0.2rem 0.6rem;
	}

	&__name {
		margin-top: 0.5rem;
		font-size: 1.6rem;
	}
}
</style>