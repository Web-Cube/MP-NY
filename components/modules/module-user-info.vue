<template lang="pug">
	.user-info
		.user-info__avatar
			img.object-fit(
				:src="require(`~/assets/img/${avatar}`)"
			)
		.user-info__data
			.user-info__name.h5(v-if="name") 
				| {{ name }}
				part-verified.user-info__verified(v-if="verified")
			.user-info__about.color-gray(v-if="about") {{ about }}
</template>

<script>
export default {
	props: {
		avatar: {
			type:String
		},
		name: {
			type:String
		},
		about: {
			type:String
		},
		verified: {
			type: Boolean
		}
	}
}
</script>

<style lang="scss">
.user-info{
	display: flex;
	align-items: center;

	&__avatar{
		flex: 0 0 auto;
		width: 38rem;
		margin-right: 10rem;
		position: relative;

		&:before{
			padding-top: 100%;
			content: '';
			display: block;
		}

		img{
			border-radius: 50%;
		}
	}

	&__name{
		@extend %text-overflow;
	}

	&__about{
		// margin-top: 10rem;
		font-weight: 500;
		margin-top: 5rem;
		// line-height: 1em;

		// @extend %text-overflow;

		@include large-mobile {
			font-size: 14rem;
			line-height: 1em;
			margin-top: 10rem;
		}
	}

	&__verified{
		margin-left: 3rem;
		@include large-mobile {
			margin-left: 11rem;
		}
	}

	&__data{
		flex: 1 1 auto;
	}
}
</style>