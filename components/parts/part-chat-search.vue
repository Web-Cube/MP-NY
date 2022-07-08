<template lang="pug">
	form.chat-search(action="/")
		form-input.chat-search__input(:placeholder="placeholder" name="search" :value="value")
		button.chat-search__btn
			svg-icon(name="search")
</template>

<script>
export default {
	props: {
		placeholder: {
			type: String,
			default: "Serach"
		},
		value: {
			type: String,
			default: ""
		},
	},
}
</script>

<style lang="scss">
.chat-search {
	position: relative;
	&__input {
		.input {
			&__field {
				padding-left: 53rem;
			}
		}
	}
	&__btn {
		cursor: pointer;
		background: none;
		border: 0;
		width: 17rem;
		height: 17rem;
		position: absolute;
		left: 22rem;
		top: 50%;
		margin-top: -8rem;
		fill: $gray;
		svg {
			width: 100%;
			height: 100%;
		}
	}
}
</style>