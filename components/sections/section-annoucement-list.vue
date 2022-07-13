<template lang="pug">
	section.annoucement-list
		.annoucement-list__head.flex.flex_vertical.flex_justify
			.annoucement-list__title
				h1.annoucement-list__title-text.h2.h2_big {{title}}
				span.annoucement-list__title-counter.h3 ({{counter}})
			button-switcher.annoucement-list__switcher(:items="switchers" blue)
		part-search-filter.annoucement-list__filter(disabled)
			form-input.search-filter__field(
				name="name"
				label="Name"
			)
			form-input.search-filter__field(
				name="phone"
				type="tel"
				label="Phone"
			)
			form-input.search-filter__field(
				name="id"
				label="ID"
			)
			form-select.search-filter__field(
				value="Categories"
				name="category"
				:items="['Category 1', 'Category 2', 'Category 3']"
			)
			form-input.search-filter__field(
				name="cost"
				label="Cost"
			)
			form-input.search-filter__field(
				name="date"
				label="Date"
			)
		part-annoucement-table.annoucement-list__table

</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Advertises"
		},
		counter: {
			type: Number,
			default: 1540
		},
	},
	data(){
		return{
			switchers: [
				{
					value: 'On moderation',
					text: 'On moderation',
					checked: true
				},
				{
					value: 'Active',
					text: 'Active'
				},
				{
					value: 'Non Active',
					text: 'Non Active'
				}
			],
		}
	}
}
</script>

<style lang="scss">
.annoucement-list{
	padding: 30rem 0;

	@include large-mobile {
		padding: 20rem 0;
	}

	&__title {
		display: flex;
		&-text {
			font-family: 'Atyp Display';
			font-weight: 500;
		}
		&-counter {
			font-family: 'Atyp Display';
			margin-left: 10rem;
			font-weight: 500;
			padding-top: 10rem;
			font-size: 24rem;
			color: #9A9A9A;
		}

		@include large-tablet {
			&-counter {
				font-size: 18rem;
				padding-top: 8rem;
			}
		}

		@include large-mobile {
			&-counter {
				font-size: 17rem;
				padding-top: 5rem;
				margin-left: 8rem;
			}
		}
	}

	&__switcher {
		@include large-mobile {
			margin-top: 15rem;
			width: 100%;
		}
	}

	&__filter {
		margin-top: 40rem;
	}

	&__table {
		margin-top: 50rem;
	}
}
</style>