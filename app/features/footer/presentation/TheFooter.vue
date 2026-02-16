<script setup lang="ts">
const columns = [
	{
		title: 'Каталог',
		links: ['Все бренды', 'Nike', 'Adidas', 'Puma', 'New Balance'],
	},
	{
		title: 'Помощь',
		links: ['Доставка', 'Заказ и оплата', 'Обмен и Возврат', 'F. A. Q.'],
	},
	{
		title: 'Информация',
		links: ['Преимущества', 'Гарантия и безопасность', 'Индивидуальный заказ', 'Акции'],
	},
	{
		title: 'Компания',
		links: ['О нас', 'Блог', 'Отзывы', 'Контакты'],
	},
]
</script>

<template>
	<footer class="footer">
		<div class="footer__inner container">
			<div v-for="column in columns" :key="column.title" class="footer__column">
				<h4 class="footer__title">{{ column.title }}</h4>
				<ul class="footer__list">
					<li v-for="link in column.links" :key="link" class="footer__item">
						<a href="#" class="footer__link">{{ link }}</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	background-color: black;
	padding: 10rem 0.6rem;

	&__inner {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
	}

	&__title {
		font-size: 1.4rem;
		font-weight: 500;
		color: #6F6F6F;
		line-height: 140%;
		margin-bottom: 1.6rem;
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	&__link {
		font-size: 1.4rem;
		color: white;
	}
}
</style>