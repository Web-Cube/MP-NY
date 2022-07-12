<template lang="pug">
	section.annoucement-list
		.annoucement-list__head.flex.flex_vertical.flex_justify
			.annoucement-list__title
				h1.annoucement-list__title-text.h2.h2_big {{title}}
				span.annoucement-list__title-counter.h3 ({{counter}})
			button-switcher.annoucement-list__switcher(:items="switchers" blue)

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
}
</style>