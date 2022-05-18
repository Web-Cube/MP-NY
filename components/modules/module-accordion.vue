<template lang="pug">
	.accordion(:class="Mods")
		.accordion__head(@click="ToggleAccordion" role="tab")
			.accordion__title {{ title }}
			.accordion__arrow
				svg-icon(name="arrowDown")
		b-collapse.accordion__body(
			v-model="active" 
			:accordion="groupName" 
			role="tabpanel" 
		)
			.accordion__list
				.accordion__item(v-for="(value, i) in list" :key="i")
					label.accordion__checkbox
						input.accordion__checkbox-input(type="checkbox" :value="value" :name="name")
						span.accordion__checkbox-btn
							span.accordion__checkbox-text {{ value }}
							span.accordion__checkbox-icon
								svg-icon(name="close")
			.accordion__more(v-if="list.length > 5") Моrе

</template>

<script>
export default {
	props: {
		groupName: {
			type: String,
			default: null
		},
		title: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			default: "name"
		},
		visible: {
			type: Boolean,
			default: false			
		},
		list: {
			type: Array,
			default: () => ([
			])
		}
	},
	data(){
		return {
			active: this.visible
		}
	},
	computed: {
		Mods(){
			return {
				'is-active': this.active
			}
		}
	},
	methods: {
		ToggleAccordion(){
			this.active = !this.active
		}
	}
}
</script>

<style lang="scss">
.accordion{
	border-bottom: 1px solid #D2D2D7;
	&.is-active {
		.accordion {
			&__arrow {
				svg {
					transform: rotate(-180deg);
				}
			}
		}
	}
	&__head {
		padding: 10rem 10rem 10rem 0;
		min-height: 54rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
	}

	&__title {
		font-weight: 600;
	}

	&__arrow {
		flex-shrink: 0;
		fill: none;
		stroke: #86868B;
		stroke-width: 2;
		margin-left: 20rem;
		width: 11rem;
		height: 7rem;
		svg {
			width: 100%;
			height: 100%;
			transition: ease .2s;
		}
	}
	&__list {
		margin-top: -6rem;
		padding-bottom: 10rem;
	}
	&__item {
		margin-top: 1px;
	}
	&__checkbox {
		margin-left: -10rem;
		line-height: 1;
		display: block;
		&:hover {
			.accordion__checkbox {
				&-btn {
					color: $blue;
					background: #F5F5F7;
				}
			}
		}
		&-input {
			display: none;

			&:checked + .accordion__checkbox {
				&-btn {
					color: $blue;
					font-weight: 600;
					background: #F5F5F7;
					.accordion__checkbox-icon {
						opacity: 1;
						visibility: visible;
					}
				}
			}
		}
		&-btn {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10rem;
			transition: ease .2s;
			border-radius: 5px;
			cursor: pointer;
		}
		&-icon {
			width: 20rem;
			height: 20rem;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			margin-left: 15rem;
			stroke: #556DEE;
			stroke-width: 2;
			stroke-linecap: square;
			margin-right: -4rem;
			transition: ease .2s;
			opacity: 0;
			visibility: hidden;
			svg {
				width: 10rem;
				height: 9rem;
			}
		}
	}

	&__more {
		display: inline-flex;
		margin-bottom: 15rem;
		line-height: 1;
		cursor: pointer;
		color: $blue;
	}
}
</style>