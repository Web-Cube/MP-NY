<template lang="pug">
	.filter.js-filter(:class="mods" ref="filter")
		.filter__bg
		.filter__box
			.filter__nav.flex.flex_vertical
				button-filter.filter__title(:counter="counter")
				.filter__nav-item
					.filter__reset
						svg-icon.filter__reset-icon(name="reset"  viewBox="0 0 12 11")
						.filter__reset-text {{ resetText }}
				.filter__close(@click="closeFilter()")
					svg-icon(name="close" viewBox="0 0 10 9")
			.filter__body
				.filter__body-wrap.css-scrollbar
					.filter__list
						module-accordion.filter__accordion(
							v-for="(item, i) in filters"
							:key="i"
							:title="item.title"
							:list="item.list"
							:visible="item.visible"
							:name="item.name"
						)
						module-accordion.filter__accordion(
							content
							title="Cost"
							visible
						)
							.accordion__fields
								form-input(:value="`${'$ ' + numberWithSpaces(costFrom)}`" placeholder="From" separator)
								form-input(:value="`${'$ ' + numberWithSpaces(costTo)}`" placeholder="To" separator)
			.filter__bottom
				button-primary.filter__btn(blue) {{ btnText }}
</template>

<script>
import {numberWithSpaces} from '~/assets/js/functions';
export default {
	props: {
		counter: {
			type: Number,
			default: 2
		},
		costFrom: {
			type: Number,
			default: 5000
		},
		costTo: {
			type: Number,
			default: 10000
		},
		resetText: {
			type: String,
			default: "Reset"
		},
		btnText: {
			type: String,
			default: "Apply"
		},
		filters: {
			type: Array,
			default: () => ([
			])
		}
	},
	data(){
		return {
			numberWithSpaces,
			show: false
		}		
	},
	computed: {
		mods() {
			return {
				'visible' : this.show,
			}
		}
	},
	methods: {
	    closeFilter() {
	    	this.$refs.filter.classList.remove('visible');
			document.querySelector("body").classList.remove("js-locked");
			document.querySelector("body").removeAttribute("style");
	    },
	    openFilter() {
	    	this.show = true;
			document.querySelector("body").classList.add("js-locked");
			let div = document.createElement('div');

			div.style.overflowY = 'scroll';
			div.style.width = '50px';
			div.style.height = '50px';
			document.body.append(div);
			let scrollWidth = div.offsetWidth - div.clientWidth;

			div.remove();

			document.querySelector("body").style.marginRight = scrollWidth + "px";
	    }
	}
}
</script>

<style lang="scss">
.filter{
	@include small-tablet {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
		visibility: hidden;
		&.visible {
			visibility: visible;
			.filter {
				&__bg {
					opacity: 1;
				}
				&__box {
					opacity: 1;
					margin-top: 0;
				}
			}
		}
	}

	&__bg {
		display: none;
		@include small-tablet {
			width: 100%;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: rgba($default, .2);
			display: block;
			opacity: 0;
			transition: ease .3s;
		}
	}

	&__box {
		@include small-tablet {
			position: absolute;
			background: #fff;
			left: 0;
			bottom: 0;
			width: 100%;
			height: calc( 70vh );
			display: flex;
			flex-direction: column;
			padding: 16rem 15rem 26rem 15rem;
			border-radius: 10rem 10rem 0 0;
			opacity: 0;
			margin-top: 50px;
			transition: ease .5s;
		}
		@include large-mobile {
			height: calc( 100vh - 90rem );
		}
	}
	&__title {
		@include small-tablet {
			display: none;
		}
	}
	&__nav {

		@include min-small-tablet {
			&-item {
				display: flex;
				align-items: center;
				min-height: 22rem;
				&:not(:first-child) {
					margin-left: 20rem;
					border-left: 1px solid #D2D2D7;
					padding-left: 20rem;
				}
			}
		}

		@include small-tablet {
			justify-content: space-between;
		}
	}

	&__close {
		display: none;

		@include small-tablet {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 28rem;
			height: 28rem;
			background: #F4F3F4;
			border-radius: 100%;
			svg {
				width: 10rem;
				height: 9rem;
				stroke: $gray;
				stroke-width: 2;
			}
		}
	}

	&__reset {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		align-items: center;
		font-weight: 600;
		color: $blue;
		&-icon {
			display: none;
		}
		@include small-tablet {
			font-size: 14rem;
			line-height: 1;
			&-icon {
				display: block;
				width: 12rem;
				height: 11rem;
				flex-shrink: 0;
				margin-right: 5rem;
				fill: $blue;
			}
			&-text {
				padding-top: 1px;
			}
		}
	}
	&__body {
		margin-top: 20rem;
		@include small-tablet {
			margin-top: 10rem;
			flex: 1 1 auto;
			position: relative;
			&-wrap {
				position: absolute;
				left: 0;
				top: 0;
				width: calc( 100% + 8rem );
				padding-right: 7rem;
				padding-bottom: 10rem;
				height: 100%;
				overflow-x: hidden;
				overflow-y: auto;

			}
		}
	}
	&__accordion {
		@include small-tablet {
			&:first-child {
				border-top: 0;
			}
		}
	}
	&__cost {
		margin-top: 20rem;
		&-fields {
			display: flex;
			margin-top: 20rem;
			.input {
				width: 50%;
			}
		}
	}
	&__btn {
		width: 100%;
		margin-top: 30rem;

		@include small-tablet {
			margin-top: 25rem;
		}
	}
}
</style>