<script setup lang="ts">
import TheHeader from "~/features/header/presentation/TheHeader.vue";
import TheFooter from "~/features/footer/presentation/TheFooter.vue";
</script>

<template>
		<TheHeader/>
		<slot/>
		<TheFooter/>
</template>

<style scoped lang="scss">

</style>