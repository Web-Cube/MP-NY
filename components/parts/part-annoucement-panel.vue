<template lang="pug">
	.annoucement-panel
		.annoucement-panel__row.flex.flex_vertical.flex_justify
			.annoucement-panel__column
				form-checkbox.annoucement-panel__select(checked light)
					strong.p 3 ad selected
			.annoucement-panel__column.flex.flex_vertical
				slot
				button-medium.annoucement-panel__cancel(blue small @click.native="$emit('closePanel')") Cancel
</template>

<script>
export default {
	props: {
		
	},
}
</script>

<style lang="scss">
.annoucement-panel {
	background: $blue;
	color: #fff;
	padding: 20rem 30rem;
	border-radius: 10rem;
	position: sticky;
	bottom: 30rem;
	margin-left: -20rem;
	margin-right: -20rem;

	&__btn {
		&:not(:first-child) {
			margin-left: 15rem;
		}

		@include small-tablet {
			&:not(:first-child) {
				margin-left: 10rem;
			}
		}
	}
	&__cancel {
		margin-left: 30rem;

		@include large-tablet {
			margin-left: 20rem;
		}
		@include small-tablet {
			margin-left: 10rem;
		}
	}
}
</style>