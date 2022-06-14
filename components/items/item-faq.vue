<template lang="pug">
	.item-faq
		.item-faq__head
			.item-faq__title.h5 {{title}}
			.item-faq__arrow
				svg-icon(name="close" viewBox="0 0 10 9")
		.item-faq__body
			.item-faq__content(v-html="content")
</template>

<script>
export default{
	props: {
		title: {
			type: String
		},
		content: {
			type: String
		},
	},
	data(){
		return {
			active: false
		}
	},
	methods:{
		toggle() {
			this.active = !this.active;
		},
	}
}
</script>

<style lang="scss">
.item-faq{
	border-bottom: 1px solid $light-gray;
	&.isActive {
		.item-faq {
			&__head {
				color: $blue;
			}
			&__arrow {
				svg {
					transform: rotate(0);
					stroke: $blue;
				}
			}
			&__body {
				display: block;
			}
		}
	}
	&__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rem 15rem 20rem 0;
		min-height: 76rem;
		cursor: pointer;
		transition: ease .15s;

		@include large-mobile {
			min-height: 56rem;
			padding-right: 0;
		}
	}
	&__title {
		@include large-mobile {
			font-size: 16rem;
			font-weight: 500;
		}
	}
	&__arrow {
		width: 20rem;
		height: 20rem;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			width: 13rem;
			height: 13rem;
			stroke: $gray;
			stroke-width: 1;
			transform: rotate(-45deg);
			transition: ease .2s;
		}
	}

	&__body {
		padding-bottom: 30rem;
		display: none;
	}

	&__content {
		margin-top: -10rem;
		max-width: 790rem;
		color: $gray;
		line-height: 1.4;
		p {
			&:not(:first-child) {
				margin-top: 10rem;
			}
		}

		@include large-mobile {
			margin-top: 0;
		}
	}
}
</style>