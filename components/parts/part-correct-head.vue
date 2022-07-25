<template lang="pug">
	.correct-head
		.correct-head__row.flex.flex_vertical.flex_justify
			.correct-head__column.correct-head__column_left
				h1.correct-head__title.h2.h2_big {{title}}
			.correct-head__column.correct-head__column_right
				button-switcher.correct-head__switcher(:items="switchers" blue name="correct")
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Web site corrections'
		},
	},
	data(){
		return{
			switchers: [
				{
					value: 'Web site',
					text: 'Web site',
					checked: true
				},
				{
					value: 'Categories',
					text: 'Categories',
				},
				{
					value: 'Gallery',
					text: 'Gallery',
				},
			],
		}
	}
}
</script>

<style lang="scss">
.correct-head {
	margin-top: 30rem;

	@include large-mobile {
		margin-top: 15rem;
	}

	&__column {
		@include large-mobile {
			width: 100%;
			&_left {
				display: none;
			}
		}
	}
}
</style>