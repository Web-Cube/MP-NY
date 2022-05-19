<template lang="pug">
	.profile-menu
		.profile-menu__section(v-for="(menu, i) in menuList" :key="i")
			ul.profile-menu__list
				li.profile-menu__item(v-for="(item, i) in menu.items" :key="i")
					NuxtLink.profile-menu__link(:to="item.to" v-html="item.text")
		.profile-menu__section
			ul.profile-menu__list
				li.profile-menu__item
					NuxtLink.profile-menu__link.color-red(to="/") Exit
</template>

<script>
export default {
	props: {
		menuList: {
			type: [Array, Object],
			default: () => ([
			])
		}
	},
}
</script>

<style lang="scss">
.profile-menu{

	text-align: left;
	padding: 10rem 0;
	font-size: 14rem;
	line-height: 1;
	font-weight: 600;
	width: 166rem;

	&__section {
		&:not(:first-child) {
			padding-top: 20rem;
			border-top: 1px solid $light-gray;
		}
		&:not(:last-child) {
			padding-bottom: 20rem;
		}
	}

	&__list {
		list-style: none;
	}
	&__item {
		&:not(:first-child) {
			margin-top: 15rem;
		}
	}
	&__link {
		transition: ease .12s;
		&:hover:not(.color-red) {
			color: $blue;
		}
	}
}
</style>