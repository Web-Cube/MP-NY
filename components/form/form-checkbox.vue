<template lang="pug">
	label.checkbox
		input.checkbox__input(:name="name" :value="value" type="checkbox")
		.checkbox__btn
			.checkbox__icon
				svg-icon(name="check" viewBox="0 0 9 8")
			.checkbox__text
				slot

</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: 'name'
		},
	},
}
</script>

<style lang="scss">
.checkbox{
	position: relative;
	display: inline-flex;
	cursor: pointer;
	font-size: 14rem;

	&__btn {
		display: flex;
		align-items: center;
	}

	&__input {
		display: none;

		&:checked + .checkbox__btn {
			.checkbox {
				&__icon {
					border-color: $blue;
					background: $blue;
					svg {
						opacity: 1;
					}
				}
			}
		}
	}

	&__icon {
		width: 20rem;
		height: 20rem;
		border: 1px solid $light-gray;
		border-radius: 5px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: ease .15s;
		flex-shrink: 0;
		margin-right: 10rem;
		svg {
			width: 11rem;
			height: 9em;
			fill: none;
			stroke: #fff;
			stroke-width: 1.5;
			opacity: 0;
			transition: ease .15s;
		}
	}
}
</style>