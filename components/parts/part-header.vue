<template lang="pug">
	header.header
		.header__wrap.wrap
			.header__row.flex.flex_vertical.flex_justify
				.header__column.header__column_left.flex.flex_vertical
					NuxtLink.header__logo(to="/")
						img(src="~/assets/img/logo.svg")
					form-select.header__lang(lang value="Eng" name="lang" :items="['Ru', 'Ukr']")
				.header__column.header__column_right.flex.flex_vertical
					button-action.header__favorite(to="#" content="<strong>Избранное</strong>" v-tippy="{ trigger: 'mouseenter' }")

					item-profile.header__profile(v-if="login" name="profileMenu")
					tippy.tippy-hide(to="profileMenu" placement="bottom-start")
						part-profile-menu(:menuList="menuList")
					.header__nav(v-if="login !== true")
						NuxtLink.header__login.link.p(to="#") Login 
						span  / 
						NuxtLink.header__reg.link.p(to="#") Registration

					button-primary.header__add(to="/" light) Add advertise

</template>

<script>
export default {
	props: {
		login: {
			type: Boolean,
			default: true
		},
	},
	data(){
		const menuList = [
			{
				items: [
					{
						text: 'Favorites ad',
						to: '#',
					},
					{
						text: 'Creat Advertise',
						to: '#',
					},
					{
						text: 'Favorites ad',
						to: '#',
					},
				],
			},
			{
				items: [
					{
						text: 'Chat',
						to: '#',
					},
					{
						text: 'Notifications',
						to: '#',
					},
				],
			},
			{
				items: [
					{
						text: 'Setting',
						to: '#',
					},
					{
						text: 'Support',
						to: '#',
					},
				],
			}
		];
		return {
			menuList
		}
	}
}
</script>

<style lang="scss">
.header{
	padding: 30rem 0;
	width: 100%;
	@include large-mobile {
		padding: 20rem 0;
	}
	&__logo {
		display: block;
		width: 168rem;

		@include large-mobile {
			width: 120rem;
		}
	}
	&__lang {
		margin-left: 30rem;
		.select__head {
			padding-right: 0;
		}
	}

	&__nav {
		margin-left: 20rem;

		@include small-tablet {
			margin-left: 10rem;
		}
	}

	&__add {
		min-width: 160rem;
		margin-left: 30rem;
		@include small-tablet {
			margin-left: 20rem;
		}
	}
	&__column {
		@include large-mobile {
			&_right {
				display: none;
			}
			&_left {
				width: 100%;
				justify-content: space-between;
			}
		}
	}
	&__profile {
		margin: 0 20rem;
	}
}
</style>