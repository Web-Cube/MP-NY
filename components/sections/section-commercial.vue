<template lang="pug">
	section.commercial
		button-switcher.commercial__switcher(:items="switchers" blue)
		.commercial__row
			.commercial__column.commercial__column_left
				.commercial__top
					.commercial__field
						label.commercial__label.h4 Select the banner to edit:
						form-input.commercial__input(disabled value="Up to 10 times more views")
							.input__change(v-b-modal.modal-commercial) Сhange
			.commercial__column.commercial__column_right

		modal-commercial(:rows="rows")

</template>

<script>
export default {
	props: {
		switchers: {
			type: Array,
			default: () => ([
			])
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
		}
	}
}
</script>

<style lang="scss">
.commercial {
	padding: 5rem 0 55rem 0;
	&__switcher {
		display: inline-flex;
	}

	&__row {
		display: flex;
		margin-top: 40rem;
	}

	&__column {
		&_left {
			width: 62.5%
		}
		&_right {
			width: 37.5rem;
			padding-left: 105rem;
			position: relative;
		}
	}

	&__label {
		display: block;
		font-family: 'Gilroy';
		font-weight: 600;
	}
	&__top {
		margin-top: -30rem;
		padding-bottom: 30rem;
		border-bottom: 1px solid $light-gray;
	}

	&__field {
		margin-top: 30rem;
	}

	&__input {
		margin-top: 15rem;
		.input__field:disabled {
			color: inherit;
		}
	}
}
</style>