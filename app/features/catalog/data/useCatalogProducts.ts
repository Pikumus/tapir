import type { Product, ProductsResponse } from '~/features/catalog/data/types'

export async function useCatalogProducts() {
	const products = ref<Product[]>([])
	const currentPage = ref(1)
	const totalPages = ref(1)

	const { data, status, error, refresh } = await useAsyncData<ProductsResponse>(
		'products-list',
		() => $fetch('https://test-task-api.tapir.ws/products', {
			params: { page: currentPage.value, limit: 16 },
		}),
	)

	const loading = computed(() => status.value === 'pending')
	const hasError = computed(() => !!error.value)
	const hasMore = computed(() => currentPage.value < totalPages.value)

	watch(data, (newData) => {
		if (!newData) return
		const existingIds = new Set(products.value.map(p => p.id))
		const newProducts = newData.products.filter(p => !existingIds.has(p.id))
		products.value.push(...newProducts)
		totalPages.value = newData.totalPages
	}, { immediate: true })

	async function loadMore() {
		if (!hasMore.value || loading.value) return
		currentPage.value++
		await refresh()
	}

	return { products, loading, hasError, hasMore, loadMore }
}