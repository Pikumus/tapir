export function useProductPrice(price: () => number) {
	const formattedPrice = computed(() =>
		price().toLocaleString('ru-RU')
	)

	const creditPrice = computed(() => {
		const monthly = Math.ceil(price() / 2)
		return monthly.toLocaleString('ru-RU')
	})

	return { formattedPrice, creditPrice }
}