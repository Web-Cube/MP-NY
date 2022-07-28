<template lang="pug">
	.replace-photo
		.replace-photo__img(v-if="img")
			img.object-fit(:src="require(`~/assets/img/${img}`)")
		.replace-photo__buttons.flex
			button-primary.replace-photo__btn(blue icon="penEdit") Replace Photo
			button-primary.replace-photo__btn(gray square icon="close")
</template>

<script>
export default{
	props: {
		img: {
			type: String,
			default: "contacts__img.jpg"
		},
	},
}
</script>

<style lang="scss">
.replace-photo {
	&__img {
		position: relative;
		overflow: hidden;
		border-radius: 20rem;
		padding-top: div( 460, 874 ) * 100%;

		@include large-mobile {
			border-radius: 7px;
			padding-top: div( 202, 345 ) * 100%;
		}
	}

	&__buttons {
		margin-top: 20rem;
		@include large-mobile {
			margin-top: 10rem;
		}
	}

	&__btn {
		&:not(:last-child) {
			margin-right: 15rem;
		}
		@include large-mobile {
			&:not(:last-child) {
				margin-right: 5rem;
			}
		}
	}

}
</style>