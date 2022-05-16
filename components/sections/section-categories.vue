<template lang="pug">
	SECTION.section-categories
		.section-categories__wrap.wrap
			.section-categories__category(v-for="(category, i) in categories" :key="i")
				h2.section-categories__title.h3 {{ category.title }}
				.section-categories__list.flex
					item-card.section-categories__item(
						v-for="(item, i) in category.list"
						:key="i"
						:name="item.name"
					)
</template>

<script>
export default {
	props: {
		categories: {
			type: Array,
			default: () => ([
				{
					title: 'VIP advertise',
					list: [
						{
							name: 'Объектив SLR Magic. Sony E. 25mm f1.4'
						},
					]
				}
			])
		}
	},
}
</script>

<style lang="scss">
.section-categories{
	padding: 45rem 0 100rem 0;
	overflow: hidden;

	&__list {
		padding-top: 5rem;
		@include items(5, 10);
	}

	&__item {
		margin-top: 45rem;
	}
}
</style>