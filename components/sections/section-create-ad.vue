<template lang="pug">
	section.create-ad
		.create-ad__step
			.create-ad__inner
				h3.create-ad__title.h3 {{title}}
				.create-ad__desc.p.color-gray.flex.flex_center.flex_vertical
					span Upload images or
					button-primary(light verysmall).create-ad__desc-skip skip
					span this step
				part-add-photo.create-ad__add-photo
			.create-ad__bottom.flex.flex_justify
				.create-ad__bottom-column
					button-primary.create-ad__bottom-btn(border) Cancel
				.create-ad__bottom-column.flex
					button-primary.create-ad__bottom-btn(gray) Skip
					button-primary.create-ad__bottom-btn(blue) Next
		modal-question
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "What do you want to sell?"
		},
	}
}
</script>

<style lang="scss">
.create-ad{
	position: relative;
	height: 100%;
	padding-top: 50rem;

	@include small-tablet {
		padding-bottom: 53rem;
	}

	@include large-mobile {
		padding-top: 38rem;
		padding-bottom: 48rem;
	}

	&__step {
		position: relative;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	&__inner {
		max-width: 872rem;
		width: 100%;
		margin: 0 auto;
		flex: 1 1 auto;
	}
	&__bottom {
		width: 100%;
		margin-top: 40rem;
		padding: 20rem 0;
		position: sticky;
		z-index: 100;
		bottom: 0;
		background: #fff;
		&-btn {
			min-width: 160rem;
			&:not(:last-child) {
				margin-right: 15rem;
			}
		}

		@include large-mobile {
			margin-left: -15rem;
			width: calc( 100% + 30rem );
			padding: 10rem 15rem;
			border-top: 1px solid $light-gray;
			&-btn {
				min-width: 86rem;
				padding: 0 20rem;
				height: 40rem;
				&:not(:last-child) {
					margin-right: 5rem;
				}
			}
		}
	}
	&__add-photo {
		margin-top: 40rem;

		@include large-mobile {
			margin-top: 30rem;
		}
	}

	&__title {
		text-align: center;

		@include large-mobile {
			font-size: 24rem;
		}
	}
	&__desc {
		margin-top: 15rem;
		&-skip {
			min-width: 90rem;
			margin: 0 10rem;
		}
		@include large-mobile {
			&-skip {
				margin: 0 5rem;
				min-width: inherit;
				height: auto;
				font-style: 14rem;
				color: $gray;
				padding: 0;
				background: none !important;
			}
		}
	}
}
</style>