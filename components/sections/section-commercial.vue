<template lang="pug">
	section.commercial
		button-switcher.commercial__switcher(:items="switchers" blue)
		.commercial__row(v-if="banner")
			.commercial__column.commercial__column_left
				.commercial__top
					.commercial__top-row
						.commercial__field
							label.commercial__label.h4 Client
							form-input.commercial__input(disabled value="Client 1")
								.input__change(v-b-modal.modal-commercial) Сhange
						.commercial__field
							label.commercial__label.h4 Banner
							form-input.commercial__input(disabled value="Banner 1")
								.input__change(v-b-modal.modal-commercial) Сhange
				.commercial__body
					.commercial__head.flex.flex_vertical.flex_justify
						h2.commercial__title.h3 {{title}}
						button-primary.commercial__add(light icon="plusBig") Add new
					module-add-avatar.commercial__add-avatar
						| Add your photo for answers, comments and reviews

					.commercial__fields
						.commercial__field
							label.commercial__label.h4 Name 
							form-input.commercial__input(value="Объектив SLR Magic. Sony E. 25mm f1.4")
						.commercial__field
							label.commercial__label.h4 Location
							form-select.commercial__input(
								value="The second row of the catalog" 
								default
								:items="['The second row of the catalog','The second row of the catalog 2','The second row of the catalog 3']"
							)
						.commercial__field
							label.commercial__label.h4 Link 
							form-input.commercial__input(value="http//:" type="url")
					.commercial__fields
						.commercial__field
							.commercial__field
								.commercial__field-row.flex.flex_vertical.flex_justify
									label.commercial__label.h4 Mobile view
									form-radio-switch.commercial__radio-switch(rotate) Disable Mobile view
							.commercial__field
								label.commercial__label.h4 Display type
								.commercial__checkbox-list.flex
									form-checkbox.commercial__checkbox
										.p.color-gray Horizontal
									form-checkbox.commercial__checkbox
										.p.color-gray Vertical
							.commercial__field
								label.commercial__label.h4 Location
								form-select.commercial__input(
									value="The second row of the catalog" 
									default
									:items="['The second row of the catalog','The second row of the catalog 2','The second row of the catalog 3']"
								)

					.commercial__bottom
						button-primary.commercial__btn.commercial__btn_save(gray)
							span.mobile-hidden Save as draft
							span.mobile-visible Draft
						.commercial__buttons.flex
							button-primary.commercial__btn.commercial__btn_delete(gray icon="close")
								| Delete
								span.mobile-hidden  {{deleteButton}}
							button-primary.commercial__btn.commercial__btn_create(blue) Create

			.commercial__column.commercial__column_right
				.commercial__sidebar
					.commercial__sidebar-title.h3 Final view:
					item-tariff.commercial__tariff(
						img="diamond.png"
						title="Up to 10 times more views"
						:price="228"
						time="Pery month"
						:list="tariffList"
						blue
					)
		.commercial__row(v-else)
			.commercial__column.commercial__column_left
				.commercial__top
					.commercial__field
						label.commercial__label.h4 Select the banner to edit:
						form-input.commercial__input(disabled value="Up to 10 times more views")
							.input__change(v-b-modal.modal-commercial) Сhange
				.commercial__body
					.commercial__head.flex.flex_vertical.flex_justify
						h2.commercial__title.h3 {{title}}
						button-primary.commercial__add(light icon="plusBig") Add new
					module-add-avatar.commercial__add-avatar
						| Add your photo for answers, comments and reviews

					.commercial__fields
						.commercial__field
							label.commercial__label.h4 Name 
							form-input.commercial__input(placeholder="Up to 10 times more views")
						.commercial__field
							label.commercial__label.h4 Decription 
							form-textarea.commercial__input(
								placeholder=`• Your sales statistics \n• Maximum calls and messages \n• Up to 10 times more views \n• Your sales statistics \n• Maximum calls and messages \n• Up to 10 times more views`
								big
							)
						.commercial__field
							label.commercial__label.h4 How long?
							form-select.commercial__input(
								value="$ 32.0" 
								default
								:items="['$ 32.0','$ 33.0','$ 34.0']"
							)
						.commercial__field
							label.commercial__label.h4 How long?
							form-select.commercial__input(
								value="1 months" 
								default
								:items="['1 months','2 months','3 months']"
							)
						.commercial__field
							label.commercial__label.h4 How many times to gep up ?
							form-select.commercial__input(
								value="3 per times week,or nothing" 
								default
								:items="['3 per times week,or nothing','2 months','3 months']"
							)
					.commercial__bottom
						button-primary.commercial__btn.commercial__btn_save(gray)
							span.mobile-hidden Save as draft
							span.mobile-visible Draft
						.commercial__buttons.flex
							button-primary.commercial__btn.commercial__btn_delete(gray icon="close")
								| Delete
								span.mobile-hidden  {{deleteButton}}
							button-primary.commercial__btn.commercial__btn_create(blue) Create

			.commercial__column.commercial__column_right
				.commercial__sidebar
					.commercial__sidebar-title.h3 Final view:
					item-tariff.commercial__tariff(
						img="diamond.png"
						title="Up to 10 times more views"
						:price="228"
						time="Pery month"
						:list="tariffList"
						blue
					)
		modal-commercial(:rows="rows")

</template>

<script>
export default {
	props: {
		switchers: {
			type: Array,
			default: () => ([
			])
		},
		title: {
			type: String,
			default: 'Type of banner'
		},
		deleteButton: {
			type: String,
			default: 'this plan'
		},
		banner: {
			type: Boolean,
			default: false
		}
	},
	data(){
		return{
			rows: [
				{
					title: 'Up to 10 times more views',
					price: '32.0',
					date: '31/02/2021'
				},
				{
					title: 'Up to 10 times more views',
					price: '32.0',
					date: '31/02/2021'
				},
				{
					title: 'Up to 10 times more views',
					price: '32.0',
					date: '31/02/2021'
				},
				{
					title: 'Up to 10 times more views',
					price: '32.0',
					date: '31/02/2021'
				},
				{
					title: 'Up to 10 times more views',
					price: '32.0',
					date: '31/02/2021'
				},
				{
					title: 'Up to 10 times more views',
					price: '32.0',
					date: '31/02/2021'
				},
				{
					title: 'Up to 10 times more views',
					price: '32.0',
					date: '31/02/2021'
				},
			],
			tariffList: [
				"Your sales statistics",
				"Maximum calls and messages",
				"Up to 10 times more views",
				"Your sales statistics",
				"Maximum calls and messages",
				"Up to 10 times more views",
			]
		}
	}
}
</script>

<style lang="scss">
.commercial {
	padding: 5rem 0 55rem 0;
	@include small-tablet {
		padding-bottom: 100rem;
	}
	@include large-mobile {
		padding: 15rem 0 60rem 0;
	}
	&__switcher {
		display: inline-flex;
		@include large-mobile {
			display: flex;
		}
	}

	&__row {
		display: flex;
		margin-top: 40rem;

		@include large-mobile {
			margin-top: 25rem;
		}
	}

	&__column {
		&_left {
			width: 62.5%
		}
		&_right {
			width: 37.5%;
			padding-left: 105rem;
			position: relative;
		}

		@include large-tablet {
			width: 100%;
			&_right {
				display: none;
			}
		}
	}

	&__sidebar {
		position: sticky;
		top: 50rem;
		&-title {
			font-size: 24rem;
			font-weight: 600;
		}
	}

	&__label {
		display: block;
		font-family: 'Gilroy';
		font-weight: 600;
		@include large-mobile {
			font-size: 16rem;
		}
	}
	&__top {
		margin-top: -30rem;
		padding-bottom: 30rem;
		border-bottom: 1px solid $light-gray;
		&-row {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.commercial__field {
				width: 48.5%;
			}
		}

		@include large-mobile {
			padding-bottom: 15rem;
		}
	}

	&__field {
		margin-top: 30rem;
		&-row {
			padding-bottom: 23rem;
			border-bottom: 1px solid $light-gray;
		}
	}

	&__input {
		margin-top: 15rem;
		.input__field:disabled, .select__value {
			color: $default;
		}
		@include large-mobile {
			margin-top: 10rem;
		}
	}

	&__tariff {
		margin-top: 30rem;
		max-width: 300rem;
	}

	&__body {
		padding-top: 22rem;
	}

	&__title {
		font-family: 'Atyp Display';
		@include large-mobile {
			font-weight: 500;
		}
	}
	&__add {
		min-width: 160rem;
		@include large-mobile {
			min-width: 140rem;
		}
	}
	&__add-avatar {
		margin-top: 27rem;
		@include large-mobile {
			margin-top: 22rem;
		}
	}
	&__fields {
		&:not(:first-child) {
			margin-top: 50rem;
		}
		@include large-mobile {
			&:not(:first-child) {
				margin-top: 30rem;
			}
		}
	}
	&__bottom {
		margin-top: 40rem;
		display: flex;
		justify-content: space-between;
		@include large-mobile {
			margin: 30rem -15rem 0 -15rem;
			padding: 10rem 15rem 0 15rem;
			border-top: 1px solid $light-gray;
		}
	}
	&__btn {
		padding: 0 30rem;
		&:not(:last-child) {
			margin-right: 10rem;
		}
		@include large-mobile {
			padding: 0 20rem;
			&_save {
				background: none;
				border: 1px solid $light-gray;
				color: $gray;
			}
			&_delete {
				color: $gray;
				.button-primary__icon {
					display: none;
				}
			}
			&:not(:last-child) {
				margin-right: 5rem;
			}
			&_create {
				min-width: 120rem;
			}
		}
	}
	&__radio-switch {
		font-size: inherit;
	}
	&__checkbox {
		margin-top: 15rem;
		&-list {
			padding-top: 10rem;
		}
		&:not(:last-child) {
			margin-right: 25rem;
		}
	}
}
</style>