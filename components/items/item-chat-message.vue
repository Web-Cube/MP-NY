<template lang="pug">
	.chat-message(:class="Mods")
		.chat-message__avatar(v-if="avatar")
			img.object-fit(:src="require(`~/assets/img/${avatar}`)")
		.chat-message__info
			.chat-message__head
				.chat-message__name.p.b {{name}}
				.chat-message__time {{time}}
			.chat-message__list
				.chat-message__item(v-for="(item, i) in content" :key="i")
					.chat-message__item-wrap
						.chat-message__text.p(v-html="item.text")
						.chat-message__read(v-if="item.read")
							svg-icon(name="readMessage")
			.chat-message__gallery.flex(v-if="gallery.length > 0")
				.chat-message__gallery-item(v-for="(img, i) in gallery" :key="i")
					.chat-message__gallery-img
						img.object-fit(:src="require(`~/assets/img/${img}`)")
</template>

<script>
export default{
	props: {
		avatar: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			default: "Johnson"
		},
		time: {
			type: String,
			default: "07:00 am"
		},
		answer: {
			type: Boolean,
			default: false
		},
		content: {
			type: Array,
			default: () => ([
			])
		},
		gallery: {
			type: Array,
			default: () => ([
			])
		},
	},

	computed: {
		Mods(){
			return {
				'chat-message_answer': this.answer,
			}
		}
	}
}
</script>

<style lang="scss">
.chat-message {
	display: flex;

	&_answer {
		justify-content: flex-end;
		.chat-message {
			&__head {
				justify-content: flex-end;
			}
			&__name {
				order: 2;
			}
			&__time {
				margin-left: 0;
				margin-right: 10rem;
			}
			&__avatar {
				order: 2;
			}
			&__info {
				order: 1;
				margin-left: 0;
				margin-right: 20rem;
			}
			&__item {
				display: flex;
				justify-content: flex-end;
				&-wrap {
					background: #EEF1FE;
				}
				&:first-child {
					.chat-message__item-wrap {
						border-radius: 10rem 0 10rem 10rem;
					}
				}
			}
		}

		@include large-mobile {
			.chat-message {
				&__info {
					margin-right: 0;
				}
			}
		}
	}

	&__avatar {
		width: 40rem;
		height: 40rem;
		min-width: 40rem;
		position: relative;
		overflow: hidden;
		border-radius: 100%;

		@include large-mobile {
			display: none;
		}
	}

	&__info {
		margin-left: 20rem;
		width: 100%;
		@include large-mobile {
			margin: 0;
		}
	}

	&__head {
		display: flex;
	}
	&__name {
		@include large-mobile {
			font-size: 16rem;
		}
	}
	&__time {
		margin-left: 10rem;
		padding-top: 3rem;
		color: #AEAEAE;
		@include large-mobile {
			padding-top: 2rem;
			font-weight: normal;
		}
	}

	&__list {
		margin-top: 5rem;
	}

	&__item {
		&:not(:first-child) {
			margin-top: 10rem;
		}
		&-wrap {
			display: inline-flex;
			align-items: flex-end;
			padding: 15rem 20rem;
			background: #F4F3F4;
			border-radius: 10rem;
			max-width: 530rem;
		}
		&:first-child {
			.chat-message__item-wrap {
				border-radius: 0 10rem 10rem 10rem;
			}
		}
	}

	&__read {
		width: 18rem;
		height: 11rem;
		flex-shrink: 0;
		stroke: $blue;
		stroke-width: 1.5;
		fill: none;
		margin-left: 15rem;
		margin-bottom: 4rem;
		svg {
			width: 100%;
			height: 100%;
		}
	}

	&__gallery {
		padding-top: 5rem;
		margin-left: -10rem;
		&-item {
			width: 265rem;
			margin-left: 10rem;
			margin-top: 10rem;
		}
		&-img {
			position: relative;
			overflow: hidden;
			padding-top: 100%;
			border-radius: 6rem;
		}

		@include large-mobile {
			&-item {
				width: calc( 50% - 10rem );
			}
		}
	}
}
</style>