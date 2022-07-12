<template lang="pug">
	form.chat-form(action="/chat")
		button-file.chat-form__file
		.chat-form__field
			form-textarea.chat-form__textarea(placeholder="Enter your message" small)
			.chat-form__files(v-if="files.length > 0")
				.chat-form__files-wrap
					.chat-form__files-item(v-for="(file, i) in files" :key="i")
						item-file.chat-form__item-file(
							:img="file.img"
							:docName="file.name"
							:docSize="file.size"
						)
		button.chat-form__send
			svg-icon(name="send")
</template>

<script>
export default {
	props: {
		files: {
			type: Array,
			default: () => ([
			])
		}
	},
}
</script>

<style lang="scss">
.chat-form{
	position: relative;

	@include large-mobile  {
		display: flex;
	}
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

		@include large-mobile  {
			position: relative;
			width: 28rem;
			min-width: 28rem;
			height: 28rem;
			padding-left: 0;
			margin-top: 10rem;
			margin-right: 10rem;
		}
	}
	&__field {
		@include large-mobile {
			border: 1px solid $light-gray;
			border-radius: 10rem;
			width: 100%;
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

		@include large-mobile  {
			margin: -1px;
			.textarea {
				&__field {
					padding: 15rem;
					border: 0;
					background: none;
				}
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

		@include large-mobile  {
			position: static;
			width: 48rem;
			min-width: 48rem;
			height: 48rem;
			background: $blue;
			border-radius: 15rem;
			fill: #fff;
			margin-left: 5rem;
			svg {
				width: 18rem;
				height: 18rem;
			}
		}
	}
	&__files {
		margin: 10rem -5rem 0 -5rem;
		&-wrap {
			display: flex;
			padding: 0 5rem;
		}
		&-item {
			width: 100rem;
			&:not(:last-child) {
				margin-right: 10rem;
			}
		}
	}
}
</style>