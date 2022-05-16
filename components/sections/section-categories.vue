<template lang="pug">
	SECTION.section-categories
		.section-categories__wrap.wrap
			.section-categories__category
				h2.section-categories__title.h3 VIP advertise
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Search. Buy. <span class='color-blue'>Sell.</span>"
		},
		list: {
			type: Array,
			default: () => ([])
		}
	}
}
</script>

<style lang="scss">
.section-categories{
	padding: 45rem 0 100rem 0;
	overflow: hidden;
}
</style>