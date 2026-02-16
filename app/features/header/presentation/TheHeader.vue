<script setup lang="ts">

</script>

<template>
	<nav class="header">
		<div class="header__wrapper">
			<icon name="icon:cube" :size="42" icon-class="header__logo"/>
			<ul class="header__list">
				<li class="header__item"><a class="header__link" href="#">Мужчинам</a></li>
				<li class="header__item"><a class="header__link" href="#">Женщинам</a></li>
				<li class="header__item"><a class="header__link" href="#">Каталог</a></li>
				<li class="header__item"><a class="header__link" href="#">Доставка</a></li>
				<li class="header__item"><a class="header__link" href="#">Блог</a></li>
				<li class="header__item"><a class="header__link" href="#">О нас</a></li>
			</ul>
			<button class="header__burger" aria-label="Меню">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.header {
	padding: 2rem clamp(2.6rem, 5vw, 6rem);
	&__wrapper {
		display: flex;
	}
	&__list {
		background-color: #F5F5F5;
		display: flex;
		align-items: center;
		padding: 1rem 2.4rem;
		gap: 4rem;
		margin: 0 auto;
		@media (max-width: 768px) {
			display: none;
		}
	}
	&__link {
		font-size: 1.4rem;
		font-weight: 400;
		color: black;
	}
	&__burger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
		background: #F5F5F5;
		border: none;
		cursor: pointer;
		padding: 0.8rem;
		margin-left: auto;

		span {
			display: block;
			width: 2.4rem;
			height: 0.2rem;
			background-color: black;
		}

		@media (max-width: 768px) {
			display: flex;
		}
	}
}
</style>