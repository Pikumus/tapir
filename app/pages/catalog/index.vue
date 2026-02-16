<script setup lang="ts">
import CatalogCard from '~/features/catalog/presentation/CatalogCard.vue'
import { useCatalogProducts } from '~/features/catalog/data/useCatalogProducts'

const { products, loading, hasError, hasMore, loadMore } = await useCatalogProducts()
</script>

<template>
	<section class="catalog container">
		<h1 class="catalog__title">Каталог</h1>
		<div class="catalog__wrapper">
			<CatalogCard
					v-for="product in products"
					:key="product.id"
					v-bind="product"
			/>
		</div>
		
		<p v-if="loading" class="catalog__loading">Загрузка...</p>
		
		<div v-else-if="hasError" class="catalog__error">
			<p>Произошла ошибка, попробуйте позже</p>
			<button class="catalog__button" @click="loadMore">Повторить</button>
		</div>
		
		<button
				v-else-if="hasMore"
				class="catalog__button"
				@click="loadMore"
		>
			Показать ещё
		</button>
	</section>
</template>

<style scoped lang="scss">
.catalog {
	padding-top: clamp(2rem, 7vw, 11rem);
	padding-bottom: clamp(2rem, 7vw, 11rem);
	display: flex;
	flex-direction: column;
	gap: clamp(4rem, 7vw, 11rem);

	&__title {
		text-align: center;
		text-transform: uppercase;
		font-size: clamp(2.8rem, 4vw, 4.2rem);
		line-height: 110%;
		font-weight: 500;
	}

	&__wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
		gap: clamp(2rem, 3vw, 4rem);
		@media (max-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	&__button {
		align-self: center;
		font-size: 1.4rem;
		padding: 1rem 2.4rem;
		background-color: white;
		border: 1px solid black;
		cursor: pointer;
	}

	&__loading {
		align-self: center;
		font-size: 1.6rem;
	}

	&__error {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		font-size: 1.6rem;
	}
}
</style>