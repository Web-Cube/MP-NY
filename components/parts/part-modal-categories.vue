<template lang="pug">
	.modal-categories.css-scrollbar
		.modal-categories__category(v-for="(category, i) in categories" :key="i")
			h2.modal-categories__title.h5 {{ category.title }}
			ul.modal-categories__list
				li.modal-categories__item(v-for="(item, i) in category.list" :key="i")
					NuxtLink.modal-categories__link(:to="item.to") {{ item.text }}
</template>

<script>
export default {
	props: {
		categories: {
			type: Array,
			default: () => ([
			])
		}
	},
}
</script>

<style lang="scss">
.modal-categories{
	padding-bottom: 10rem;
	margin-top: 10rem;
	width: 256rem;
	max-height: 570rem;
	overflow-x: hidden;
	overflow-y: auto;
	padding-right: 10rem;
	margin-right: -10rem;
	text-align: left;
	font-size: 14rem;
	line-height: 1;

	&__category {
		padding: 20rem 0;
		border-top: 1px solid #D2D2D7;
		&:first-child {
			padding-top: 0;
			border-top: 0;
		}
		&:last-child {
			padding-bottom: 0;
		}
	}

	&__list {
		list-style: none;
		margin-top: 15rem;
	}
	&__item {
		display: block;
		&:not(:first-child) {
			margin-top: 15rem;
		}
	}
	&__link {
		display: block;
		transition: ease .12s;
		color: $gray;
		&:hover {
			color: $blue;
		}
	}
}
</style>