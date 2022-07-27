<template lang="pug">
	section.correct-text
		.correct-text__top
			.correct-text__box
				.correct-text__row.flex.flex_vertical
					.correct-text__column.correct-text__column_left
						.correct-text__label.h3 Language
					.correct-text__column.correct-text__column_right
						.correct-text__column-buttons.flex
							button-primary.correct-text__column-btn(border medium active) En
							button-primary.correct-text__column-btn(border medium) Sp
							button-primary.correct-text__column-btn(border medium) Ru
							button-primary.correct-text__column-btn.correct-text__column-btn_add(gray icon="plusBig" medium)
			.correct-text__box
				.correct-text__row.flex.flex_vertical
					.correct-text__column.correct-text__column_left
						.correct-text__label.h3 Part of web site
					.correct-text__column.correct-text__column_right
						.correct-text__column-buttons.flex
							button-primary.correct-text__column-btn(border medium active) Front design
							button-primary.correct-text__column-btn(border medium) Back design
							button-primary.correct-text__column-btn(border medium) Menu
							button-primary.correct-text__column-btn(border medium) Contact
							button-primary.correct-text__column-btn(border medium) Popup
			.correct-text__box
				.correct-text__row.flex.flex_vertical
					.correct-text__column.correct-text__column_left
						.correct-text__label.h3 Pages
					.correct-text__column.correct-text__column_right
						.correct-text__column-buttons.flex
							button-primary.correct-text__column-btn(border medium) Home page
							button-primary.correct-text__column-btn(border medium) Login
							button-primary.correct-text__column-btn(border medium) Register
							button-primary.correct-text__column-btn(border medium) Catalog
							button-primary.correct-text__column-btn(border medium active) Contacts
							button-primary.correct-text__column-btn(border medium) Support
							button-primary.correct-text__column-btn(border medium) Other
							button-primary.correct-text__column-btn(border medium) Menu
			.correct-text__box
				.correct-text__row.flex.flex_vertical
					.correct-text__column.correct-text__column_left
						.correct-text__label.h3 Search
					.correct-text__column.correct-text__column_right
						form.correct-text__search(action="/#search")
							.correct-text__search-field
								form-input.correct-text__search-input(placeholder="Search" ref="InputSearch")
								button-action.correct-text__search-icon(icon="search" small gray)
								button-close.correct-text__search-clear(type="button" white)
							button-primary.correct-text__search-btn(blue) Search
</template>

<script>
export default {
	
}
</script>

<style lang="scss">
.correct-text {
	margin-top: 20rem;
	padding-bottom: 20rem;

	@include large-mobile {
		margin-top: 15rem;
	}

	&__box {
		padding: 30rem 0;
		border-bottom: 1px solid $light-gray;
	}

	&__label {
		font-family: 'Atyp Display';
	}

	&__column {
		&_left {
			width: 25%;
		}
		&_right {
			width: 75%;
		}
		.button-primary_border {
			color: #9A9A9A;
		}
		&-buttons {
			margin: -5rem;
		}
		&-btn {
			padding: 0 30rem;
			margin: 5rem;
			&_add {
				width: 58rem;
				padding: 0;
				.button-primary__icon {
					margin-right: 0;
					fill: #9A9A9A;
				}
			}
		}
	}

	&__search {
		display: flex;
		max-width: 870rem;
		&-field {
			width: 100%;
			position: relative;
		}
		&-clear {
			position: absolute;
			right: 25rem;
			top: 50%;
			margin-top: -17rem;
		}
		&-icon {
			position: absolute;
			left: 19rem;
			top: 50%;
			margin-top: -8rem;
		}
		&-input {
			.input__field {
				padding-left: 49rem;
				padding-right: 55rem;
			}
		}

		&-btn {
			padding: 0 24rem;
			margin-left: -15rem;
			position: relative;
			z-index: 2;
		}

		@include large-mobile {
			&-clear {
				margin-top: -14rem;
			}
			&-input {
				.input__field {
					padding-left: 39rem;
				}
			}
			&-icon {
				width: 14rem;
				height: 14rem;
				margin-top: -7rem;
				left: 15rem;
			}
		}
	}
}
</style>