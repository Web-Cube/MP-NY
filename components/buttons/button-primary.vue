<template lang="pug">
	component.button-primary.h5(
		:is="to !== '' ? 'NuxtLink' : 'button'"
		:to="to !== '' ? to : false"
		:class="Mods"
	) 
		span.button-primary__text
			slot

</template>

<script>
export default {
	props: {
		to: {
			type: String,
			default: ""
		},
		white: {
			type: Boolean,
			default: false
		},
		light: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		Mods(){
			return {
				'button-primary_white': this.white,
				'button-primary_light': this.light
			}
		}
	}
}
</script>

<style lang="scss">
.button-primary{
	border: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 60rem;
	padding: 0 20rem;
	border-radius: 10rem;
	font-size: 17rem;
	font-weight: 600;

	&_white {
		background: #fff;
	}

	&_light {
		background: rgba(85, 109, 238, 0.1);
		color: $blue;
	}
}
</style>