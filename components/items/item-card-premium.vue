<template lang="pug">
	NuxtLink.card-premium(:to="to")
		span.card-premium__wrap
			span.card-premium__img(v-if="img")
				img(:src="require(`~/assets/img/${img}`)")
			span.card-premium__name.h4(v-html="name")
			svg-icon.card-premium__arrow(name="arrowRight")
</template>

<script>
export default{
	props: {
		name: {
			type: String,
			default: "Объектив SLR Magic. Sony E. 25mm f1.4"
		},
		to: {
			type: String,
			default: "#"
		},
		img: {
			type: String,
			default: ""
		},
	}
}
</script>

<style lang="scss">
.card-premium {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 30rem 20rem;
	&:before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(239.83deg, #E0F0FF 10.5%, #FFE3D3 124.13%);
		opacity: 0.7;
		border-radius: 10px;
		transform: matrix(-1, 0, 0, 1, 0, 0);
	}
	&__wrap {
		position: relative;
		text-align: center;
		display: block;
	}
	&__name {
		letter-spacing: 0.01em;
		display: block;

		@include large-mobile {
			font-size: 14rem;
		}
	}
	&__img {
		display: block;
		margin-bottom: 20rem;
		img {
			max-height: 130rem;
		}

		@include large-mobile {
			margin-bottom: 17rem;
			img {
				max-height: 114rem;
			}
		}
	}
	&__arrow {
		width: 9rem;
		height: 11rem;
		display: block;
		margin: 20rem auto 0 auto;
		fill: none;
		stroke: $default;
		stroke-width: 2;

		@include large-mobile {
			margin-top: 10rem;
		}
	}
}
</style>