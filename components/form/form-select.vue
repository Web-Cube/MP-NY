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
	&__head {
		border-left: 1px solid $light-gray;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 50rem;
		color: $gray;
		padding: 0 30rem;
		cursor: pointer;

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

		@include large-mobile {
			width: 8rem;
			height: 5rem;
		}
	}
}
</style>