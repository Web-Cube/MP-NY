<template lang="pug">
	.statistic(:class="Mods")
		.statistic__list.flex
			.statistic__item(v-for="(item, i) in statistics" :key="i")
				.statistic__number.color-blue {{item.number}}
				.statistic__name
					svg-icon.statistic__icon(:name="item.icon" :class="`button-nav__icon_${item.icon}`")
					.statistic__text {{item.name}}
</template>

<script>
export default {
	props: {
		statistics: {
			type: Array,
			default: () => ([
				
			])
		},
		light: {
			type: Boolean,
			default: false
		},
	},
	computed: {
		Mods(){
			return {
				'statistic_light': this.light,
			}
		}
	}
}
</script>

<style lang="scss">
.statistic{
	&_light {
		.statistic {
			&__item {
				display: flex;
				flex-direction: column-reverse;
				&:not(:first-child) {
					&:before {
						display: none;
					}
				}
			}
			&__name {
				margin-top: 0;
				display: flex;
				align-items: center;
			}
			&__number {
				font-size: 24rem;
				font-family: 'Gilroy';
				margin-top: 7rem;
			}
			&__icon {
				width: 13rem;
				height: 13rem;
				flex-shrink: 0;
				display: block;
				margin-right: 7rem;
				fill: #9A9A9A;
			}
		}
	}
	&__icon {
		display: none;

		@include large-mobile {
			width: 13rem;
			height: 13rem;
			flex-shrink: 0;
			display: block;
			margin-right: 7rem;
			fill: #9A9A9A;
		}
	}

	&__number {
		font-size: 26rem;
		font-weight: 600;
		line-height: 1.2;
		font-family: 'Atyp Display';

		@include large-mobile {
			font-family: 'Gilroy';
			margin-top: 6rem;
		}
	}

	&__name {
		margin-top: 3rem;

		@include large-mobile {
			margin-top: 0;
			display: flex;
			align-items: center;
		}
	}

	&__item {
		position: relative;
		&:not(:first-child) {
			padding-left: 25rem;

			&:before {
				content: '';
				display: block;
				position: absolute;
				height: 30rem;
				width: 1px;
				background: $light-gray;
				left: 0;
				top: 50%;
				margin-top: -10rem;
			}
		}
		&:not(:last-child) {
			padding-right: 25rem;
		}

		@include large-tablet {
			&:not(:first-child) {
				padding-left: 20rem;
			}
			&:not(:last-child) {
				padding-right: 20rem;
			}
		}
		@include small-tablet {
			&:not(:first-child) {
				padding-left: 25rem;
			}
			&:not(:last-child) {
				padding-right: 25rem;
			}
		}

		@include large-mobile {
			display: flex;
			flex-direction: column-reverse;
			&:not(:first-child) {
				&:before {
					height: 43rem;
					margin-top: -22rem;
				}
			}
		}
	}
}
</style>