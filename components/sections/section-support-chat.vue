<template lang="pug">
	section.support-chat
		.support-chat__head.flex.flex_vertical.flex_justify
			h1.support-chat__title.h2.h2_big {{title}}
			button-switcher.support-chat__switcher(:items="switchers" blue)
		part-search-filter.support-chat__filter(disabled)
			form-input.search-filter__field(
				name="Title"
				label="Title"
			)
			form-input.search-filter__field(
				name="Description"
				label="Description"
			)
			form-input.search-filter__field(
				name="Status"
				label="Status"
			)
			form-input.search-filter__field(
				name="Date"
				label="Date"
			)
		part-back-nav.support-chat__nav(:nav="nav")
		part-chat-table.support-chat__table(:rows="rows")
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Themes"
		},
		
	},
	data(){
		return{
			switchers: [
				{
					value: 'New (+13)',
					text: 'New',
					counter: +313,
					checked: true
				},
				{
					value: 'Viewed (313)',
					text: 'Viewed',
					counter: 313,
				},
				{
					value: 'Expectation (14)',
					text: 'Expectation',
					counter: 14,
				},
				{
					value: 'Close (313)',
					text: 'Close',
					counter: 313,
				},
			],
			nav: [
				{
					text: 'Register',
					counter: 3,
					class: 'isActive'
				},
				{
					text: 'Login',
					counter: 1,
				},
				{
					text: 'Claim',
					counter: 3,
				},
				{
					text: 'Other',
					counter: 4,
				},
				{
					text: 'Closed',
					counter: 4,
				}
			],
			rows: [
				{
					title: 'I forgot my password',
					desc: 'I forgot my password, help me please forgot my password, help me please forgot my password',
					status: 'Wait for answer',
					date: '31/02/2021',
				},
				{
					title: 'I forgot my password',
					desc: 'I forgot my password, help me please forgot my password, help me please forgot my password',
					status: 'Wait for answer',
					date: '31/02/2021',
				},
				{
					title: 'I forgot my password',
					desc: 'I forgot my password, help me please forgot my password, help me please forgot my password',
					status: 'Wait for answer',
					date: '31/02/2021',
				},
				{
					title: 'I forgot my password',
					desc: 'I forgot my password, help me please forgot my password, help me please forgot my password',
					status: 'Wait for answer',
					date: '31/02/2021',
				},
				{
					title: 'I forgot my password',
					desc: 'I forgot my password, help me please forgot my password, help me please forgot my password',
					status: 'Wait for answer',
					date: '31/02/2021',
				},
				{
					title: 'I forgot my password',
					desc: 'I forgot my password, help me please forgot my password, help me please forgot my password',
					status: 'Wait for answer',
					date: '31/02/2021',
				},
				{
					title: 'I forgot my password',
					desc: 'I forgot my password, help me please forgot my password, help me please forgot my password',
					status: 'Wait for answer',
					date: '31/02/2021',
				},
			]
		}
	}
}
</script>

<style lang="scss">
.support-chat{
	padding: 33rem 0 80rem 0;

	&__filter {
		margin-top: 30rem;
	}

	&__nav {
		margin-top: 50rem;
	}

	&__table {
		margin-top: 50rem;
	}
}
</style>