<template lang="pug">
	.filter
		.filter__nav.flex.flex_vertical
			button-filter.filter__title(:counter="counter")
			.filter__nav-item
				.filter__reset
					svg-icon.filter__reset-icon(name="reset")
					.filter__reset-text {{ resetText }}
		.filter__body
			.filter__list
				module-accordion.filter__accordion(
					v-for="(item, i) in filters"
					:key="i"
					:title="item.title"
					:list="item.list"
					:visible="item.visible"
					:name="item.name"
				)
			.filter__cost
				.filter__cost-title.strong {{costTitle}}
				.filter__cost-fields
					form-input(:value="`${'$ ' + numberWithSpaces(costFrom)}`" placeholder="From" separator)
					form-input(:value="`${'$ ' + numberWithSpaces(costTo)}`" placeholder="To" separator)
			button-primary.filter__btn(blue) {{ btnText }}

		//.modal-categories__category(v-for="(category, i) in categories" :key="i")
			h2.modal-categories__title.h5 {{ category.title }}
			ul.modal-categories__list
				li.modal-categories__item(v-for="(item, i) in category.list" :key="i")
					NuxtLink.modal-categories__link(:to="item.to") {{ item.text }}
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
		costTitle: {
			type: String,
			default: "Cost"
		},
		filters: {
			type: Array,
			default: () => ([
			])
		}
	},
	data(){
		return {
			numberWithSpaces
		}		
	},
}
</script>

<style lang="scss">
.filter{
	@include small-tablet {
		visibility: hidden;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
	&__nav {
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

	&__reset {
		display: inline-flex;
		cursor: pointer;
		align-items: center;
		font-weight: 600;
		color: $blue;
		&-icon {
			display: none;
		}
	}
	&__body {
		margin-top: 20rem;
		border-top: 1px solid #D2D2D7;
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
	}
}
</style>