<template lang="pug">
	.select(:class="Mods")
		.select__head
			.select__value {{ value }}
			.select__arrow
				svg-icon(name="arrowDown" viewBox="0 0 11 7")
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: 'Select'
		},
		big: {
			type: Boolean,
			default: false
		},
		lang: {
			type: Boolean,
			default: false
		},
		borderRight: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		Mods(){
			return {
				'select_lang': this.lang,
				'select_big': this.big,
				'select_border-right': this.borderRight,
			}
		}
	}
}
</script>

<style lang="scss">
.select{
	&_lang {
		.select {
			&__head {
				height: 40rem;
				font-size: 17rem;
				color: $default;
				font-weight: 600;
			}
			&__arrow {
				stroke: $default;
				margin-left: 5rem;
			}
		}

		@include large-mobile {
			.select {
				&__head {
					height: 20rem;
					font-size: 14rem;
				}
			}
		}
	}
	&_big {
		.select {
			&__head {
				font-size: 17rem;
				color: $default;
				font-weight: 600;
			}
			&__arrow {
				stroke: $default;
				margin-left: 14rem;
			}
		}

		@include large-mobile {
			.select {
				&__head {
					height: 20rem;
					font-size: 14rem;
				}
			}
		}
	}
	&_border-right {
		.select {
			&__head {
				border-left: 0;
				border-right: 1px solid $light-gray;
			}
		}
	}
	&__head {
		border-left: 1px solid $light-gray;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 56rem;
		color: $gray;
		padding: 0 30rem;
		cursor: pointer;
		white-space: nowrap;

		@include large-mobile {
			height: 20rem;
			font-size: 14rem;
			padding: 0;
			border: 0;
		}
	}

	&__arrow {
		flex-shrink: 0;
		margin-left: 5px;
		width: 11rem;
		height: 7rem;
		fill: none;
		stroke: $gray;
		stroke-width: 2;
		margin-left: 18rem;

		@include large-mobile {
			width: 8rem;
			height: 5rem;
		}
	}
}
</style>