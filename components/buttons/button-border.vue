<template lang="pug">
	component.button-border(
		:is="to ? 'NuxtLink' : 'button'"
		:to="to ? to : false"
		:class="Mods"
	)
		svg-icon.button-border__icon(
			:name="icon" 
			:class="`button-border__icon_${icon}`"
			v-if="icon"
		)

		span.button-border__text 
			slot
</template>

<script>
export default {
	props: {
		to: {
			type: String
		},
		icon: {
			type: String
		}
	},

	computed: {
		Mods(){
			return {
				
			}
		}
	}
}
</script>

<style lang="scss">
.button-border{
	border: 1px solid $light-gray;
	border-radius: 10rem;
	width: 100%;
	background: transparent;
	cursor: pointer;
	height: 40rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	color: #212D38;
	fill: #212D38;

	@include large-mobile {
		height: 50rem;
		font-size: 14rem;
	}

	&__icon{
		width: 13rem;
		height: 13rem;
		margin-right: 10rem;
	}
}
</style>