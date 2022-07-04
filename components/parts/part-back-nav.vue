<template lang="pug">
	.back-nav(:class="Mods")
		.back-nav__row.flex.flex_justify
			.back-nav__column.back-nav__column_left
				.back-nav__list.flex
					.back-nav__item(v-for="(item, i) in nav")
						.back-nav__btn(
							:class="item.class"
						) {{item.text}}
			.back-nav__column.back-nav__column_right
				slot
</template>

<script>
export default {
	props: {
		nav: {
			type: Array,
			default: () => ([
			])
		},
		blue: {
			type: Boolean,
			default: false
		},
		mobile: {
			type: Boolean,
			default: false
		},
	},
	computed: {
		Mods(){
			return {
				'back-nav_blue': this.blue,
				'back-nav_mobile': this.mobile,
			}
		}
	}
}
</script>

<style lang="scss">
.back-nav{
	border-bottom: 1px solid $light-gray;

	@include large-mobile {
		&_mobile {
			border: 1px solid $light-gray;
			border-radius: 10rem;
			padding: 2px;
			.back-nav {
				&__btn {
					width: 100%;
					height: 38rem;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					padding: 0 10rem;
					border: 0;
					border-radius: 8rem;
					margin-bottom: 0;
					font-size: 15rem;
					&.isActive {
						background: #F4F3F4;
					}
				}	
			}
		}
	}
	&_blue {
		.back-nav {
			&__btn {
				&.isActive {
					border-color: $blue;
					color: $blue;
				}
			}
		}
	}
	&__sort {
		font-weight: 600;
		font-size: 17rem;
		color: $default;
		.select {
			&__value {
				color: $default;
			}
			&__arrow {
				margin-left: 6rem;
			}
			&__label {
				color: #9A9A9A;
			}
			&__head {
				padding-right: 0;
			}
		}
	}

	&__column {

		@include large-mobile {
			width: 100%;
			&_right {
				display: none;
			}
		}
	}

	&__list {
		width: 100%;
		flex-wrap: nowrap;
	}

	&__item {
		@include large-mobile {
			width: 100%;
		}
	}

	&__btn {
		padding: 0 25rem 10rem 25rem;
		margin-bottom: -1px;
		position: relative;
		transition: ease .15s;
		color: #9A9A9A;
		font-weight: 600;
		font-size: 16rem;
		line-height: 19rem;
		cursor: pointer;
		border-bottom: 2px solid transparent;
		text-align: center;
		&.isActive {
			color: $default;
			border-color: $default;
		}

		@include large-mobile {
			padding-left: 15rem;
			padding-right: 15rem;
		}
	}
}
</style>