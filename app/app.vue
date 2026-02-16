<template>
  <div class="app">
	 <NuxtLayout>
		 <NuxtPage/>
	 </NuxtLayout>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.app {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: clamp(2rem, 7vw, 11rem);
	max-width: 1440px;
	margin: 0 auto;
}
</style>