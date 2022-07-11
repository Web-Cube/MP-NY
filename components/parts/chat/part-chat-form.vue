<template lang="pug">
	form.chat-form(action="/chat")
		button-file.chat-form__file
		.chat-form__field
			form-textarea.chat-form__textarea(placeholder="Enter your message" small)
		button.chat-form__send
			svg-icon(name="send")
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Messages'
		},
		counter: {
			type: Number,
			default: 20
		},
		list: {
			type: Array,
			default: () => ([
			])
		}
	},
	data(){
		return {
			
		}
	},
}
</script>

<style lang="scss">
.chat-form{
	position: relative;
	&__file {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 3;
		width: 50rem;
		padding-left: 12rem;
		.button-file {
			&__wrap {
				border: 0;
				svg {
					stroke: #464646;
				}
			}
		}
	}
	&__textarea {
		position: relative;
		.textarea {
			&__field {
				padding-left: 57rem;
				padding-right: 70rem;
			}
		}
	}

	&__send {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		right: 0;
		top: 0;
		height: 60rem;
		width: 65rem;
		border: 0;
		background: none;
		cursor: pointer;
		fill: $blue;
		svg {
			width: 24rem;
			height: 24rem;
		}
	}
}
</style>