<template lang="pug">
	.analytics-box
		.analytics-box__inner
			h2.analytics-box__title.h2.h2_big {{title}}
			.analytics-box__desc {{desc}}
			part-statistic.analytics-box__statistic(:statistics="statistics")
		.analytics-box__img
			img(:src="require(`~/assets/img/${img}`)")
		.analytics-box__nav
			button-arrow.analytics-box__btn(prev)
			button-arrow.analytics-box__btn
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Hello, Sergey!"
		},
		desc: {
			type: String,
			default: "Your analytics on all ads"
		},
		img: {
			type: String,
			default: "analytics-box__img.svg"
		},
		statistics: {
			type: Array,
			default: () => ([
				
			])
		},
	},
}
</script>

<style lang="scss">
.analytics-box{
	border: 1px solid $light-gray;
	border-radius: 20rem;
	padding: 50rem 50rem 30rem 50rem;
	position: relative;
	overflow: hidden;

	@include large-tablet {
		padding: 50rem 30rem 30rem 30rem;
	}
	@include large-mobile {
		padding: 0;
		border: 0;
		overflow: visible;
	}
	&__inner {
		position: relative;
		z-index: 2;
		width: 50%;
		max-width: 380rem;

		@include small-tablet {
			width: auto;
			max-width: inherit;
		}
	}

	&__title {
		line-height: 1;
	}

	&__desc {
		margin-top: 10rem;
		font-size: 18rem;
		font-weight: 500;
		line-height: 1.5;
		color: #6E6E73;
		@include large-mobile {
			font-size: inherit;
			line-height: inherit;
		}
	}

	&__statistic {
		margin-top: 44rem;

		@include large-tablet {
			margin-top: 30rem;
		}

		@include large-mobile {
			margin-top: 20rem;
		}
	}

	&__img {
		position: absolute;
		right: 185rem;
		top: -49rem;
		width: 633rem;
		pointer-events: none;

		@include large-desktop {
			right: 120rem;
			width: 580rem;
			top: -20rem;
		}

		@include large-tablet {
			right: 10rem;
			width: 400rem;
			top: 10rem;
		}

		@include small-tablet {
			display: none;
		}
	}

	&__nav {
		position: absolute;
		right: 20rem;
		bottom: 20rem;

		@include small-tablet {
			bottom: 30rem;
			right: 30rem;
		}

		@include large-mobile {
			display: none;
		}
	}

	&__btn {
		&:not(:first-child) {
			margin-left: 6rem;
		}
	}
}
</style>