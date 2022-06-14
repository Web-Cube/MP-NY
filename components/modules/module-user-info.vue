<template lang="pug">
	.user-info(:class="Mods")
		.user-info__avatar
			img.object-fit(
				:src="require(`~/assets/img/${avatar}`)"
			)
		.user-info__data
			.user-info__name.h5(v-if="name") 
				| {{ name }}
				part-verified.user-info__verified(v-if="verified" :content="content")
			.user-info__about.color-gray(v-if="about") {{ about }}
			.user-info__confimed(v-if="vertical")
				.user-info__confimed-icon
					img(src="~/assets/img/verified.svg")
				.user-info__confimed-text(v-html="content")
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
		},
		vertical: {
			type: Boolean
		},
		content: {
			type: String,
			default: '<strong>Phone / Еmail confirmed</strong>'
		},
	},
	computed: {
		Mods(){
			return {
				'user-info_vertical': this.vertical,
			}
		}
	}
}
</script>

<style lang="scss">
.user-info{
	display: flex;
	align-items: center;

	@include min-large-mobile {
		&_vertical {
			.user-info {
				&__verified {
					display: none;
				}
				&__data {
					display: flex;
					align-items: center;
				}
				&__about {
					margin-top: 0;
					margin-left: 20rem;
				}
			}
		}
	}

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
			margin-top: 6rem;
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

	&__confimed {
		display: flex;
		align-items: center;
		margin-left: 20rem;
		&-icon {
			width: 12rem;
			height: 12rem;
			margin-right: 10rem;
		}

		@include large-mobile {
			display: none;
		}
	}
}
</style>