<template lang="pug">
	.mobile-menu
		.mobile-menu__list.flex.flex_vertical.flex_justify
			.mobile-menu__item
				button-action.mobile-menu__btn(icon="home")
			.mobile-menu__item
				button-action.mobile-menu__btn(icon="search")
			.mobile-menu__item
				button-action.mobile-menu__btn(icon="add")
			.mobile-menu__item
				button-action.mobile-menu__btn(icon="heart")
			.mobile-menu__item
				item-profile.mobile-menu__profile
</template>

<script>
export default {
}
</script>

<style lang="scss">
.mobile-menu{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background: #fff;
	border-top: 1px solid #DDE1E3;
	padding: 0 22rem;
	z-index: 200;
	&__list {
		min-height: 48rem;
	}

	&__btn {
		width: 30rem;
		height: 30rem;
	}
}
</style>