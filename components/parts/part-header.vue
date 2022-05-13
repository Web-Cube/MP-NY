<template lang="pug">
	header.header
		.header__wrap.wrap
			.header__row.flex.flex_vertical.flex_justify
				.header__column.header__column_left.flex.flex_vertical
					NuxtLink.header__logo(to="/")
						img(src="~/assets/img/logo.svg")
					form-select.header__lang(lang value="Eng")
				.header__column.header__column_right.flex.flex_vertical
					button-action.header__favorite(to="#")
					button-primary.header__login(to="/" white) Login / Registration
					button-primary.header__add(to="/" light) Add advertise

</template>

<style lang="scss">
.header{
	padding: 30rem 0;
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
	}

	&__login {
		&:not(:last-child) {
			margin-right: 10rem;
		}
	}

	&__add {
		min-width: 160rem;
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
}
</style>