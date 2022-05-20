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
			.accordion__content(v-if="content")
				slot
			.accordion__list(v-else)
				.accordion__item(v-for="(value, i) in list" :key="i")
					label.accordion__checkbox
						input.accordion__checkbox-input(type="checkbox" :value="value" :name="name")
						span.accordion__checkbox-btn
							span.accordion__checkbox-text {{ value }}
							span.accordion__checkbox-icon
								svg-icon(name="close")
								svg-icon(name="check")
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
		content: {
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
	border-top: 1px solid #D2D2D7;
	&.is-active {
		.accordion {
			&__arrow {
				svg {
					transform: rotate(-180deg);
				}
			}
			&__head {
				padding-bottom: 15rem;
			}
		}
	}

	@include large-mobile {
		&.is-active {
			.accordion {
				&__head {
					padding-bottom: 20rem;
				}
			}
		}
	}
	&__head {
		padding: 20rem 10rem 20rem 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		line-height: 1;
		transition: ease .15s;

		@include small-tablet {
			min-height: inherit;
			padding: 25rem 10rem;
			line-height: 1;
		}
	}

	&__title {
		font-weight: 600;

		@include small-tablet {
			font-size: 15rem;
		}
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
		@include small-tablet {
			margin-top: 0;
			padding-bottom: 20rem;
			padding-left: 10rem;
		}
	}
	&__item {
		margin-top: 1px;

		@include large-mobile {
			margin-top: 0;
			&:not(:first-child) {
				margin-top: 18rem;
			}
		}
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
				&:nth-child(2) {
					display: none;
				}
			}
		}

		@include large-mobile {
			margin-left: 0;
			font-size: 14rem;
			line-height: 1;
			&:hover {
				.accordion__checkbox {
					&-btn {
						color: $default;
						background: none;
					}
				}
			}
			&-btn {
				padding: 0 7rem 0 0;
				background: none;
				font-weight: 600;
			}
			&-icon {
				width: 15rem;
				height: 15rem;
				visibility: visible;
				opacity: 1;
				border: 1px solid $light-gray;
				border-radius: 3px;
				margin-right: 0;
				svg {
					opacity: 0;
					&:first-child {
						display: none;
					}
					&:nth-child(2) {
						display: block;
						width: 9rem;
						height: 8rem;
						fill: none;
						stroke: #fff;
						transition: ease .12s;
						stroke-width: 2;
					}
				}
			}
			&-input {

				&:checked + .accordion__checkbox {
					&-btn {
						background: none;
						color: $blue;
						.accordion__checkbox-icon {
							border-color: $blue;
							background: $blue;
							svg {
								opacity: 1;
							}
						}
					}
				}
			}
		}
	}

	&__more {
		display: inline-flex;
		margin-bottom: 15rem;
		line-height: 1;
		cursor: pointer;
		color: $blue;

		@include small-tablet {
			margin-bottom: 20rem;
			margin-left: 10rem;
			font-size: 14rem;
		}
	}

	&__fields {
		display: flex;
		.input {
			width: 100%;
		}

		@include large-mobile {
			@include items(2, 5);
		}
	}
}
</style>