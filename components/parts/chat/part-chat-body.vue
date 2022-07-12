<template lang="pug">
	.chat-body
		.chat-body__top
			.chat-body__row.flex.flex_justify.flex_vertical
				.chat-body__column.chat-body__column_left
					.chat-body__back(@click="showSidebar")
						svg-icon(name="prev")
					item-chat(
						avatar="User4.jpg"
						name="Johnson"
						desc="Macbook pro 2016 4k"
					)
				.chat-body__column.chat-body__column_right.flex
					.chat-body__buttons.flex
						button-medium.chat-body__btn(gray icon="infoCircle" v-b-modal.modal-safety)
							span.p For your safety
						button-medium.chat-body__btn.mobile-hidden(gray square icon="dots" name="chatAction")
						button-medium.chat-body__btn.mobile-visible(gray square icon="dots" v-b-modal.modal-action)
					tippy.tippy-hide(to="chatAction" placement="bottom-end" trigger="click" )
						.chat-body__action
							.chat-body__action-item
								button-medium.chat-body__action-btn(white) Block
							.chat-body__action-item
								button-medium.chat-body__action-btn(white) Complaint
							.chat-body__action-item
								button-medium.chat-body__action-btn(white) Delete the Chat
		.chat-body__container
			.chat-body__container-wrap.css-scrollbar
				.chat-body__section(v-for="(message, i) in messages" :key="i")
					.chat-body__date(v-if="message.date")
						.chat-body__date-text {{ message.date }}
					.chat-body__list
						item-chat-message.chat-body__item(
							v-for="(item, i) in message.list"
							:key="i"
							:avatar="item.avatar"
							:name="item.name"
							:time="item.time"
							:content="item.content"
							:answer="item.answer"
							:gallery="item.gallery"
						)
		.chat-body__bottom
			part-chat-form.chat-body__form(:files="files")
</template>

<script>
export default {
	props: {
		messages: {
			type: Array,
			default: () => ([
			])
		},
	},
	data(){
		return{
			files: [
				{
					img: 'create-gallery__img5_small.jpg'
				},
				{
					img: 'create-gallery__img1_small.jpg'
				},
				{
					img: 'create-gallery__img2_small.jpg'
				},
				{
					name: 'Macbook pro 2016 4k',
					size: '73КБ'
				}
			]
		}
	},
	methods:{
		showSidebar() {
			document.querySelector(".section-chat__column_left").removeAttribute("style");
		}
	}
}
</script>

<style lang="scss">
.chat-body{
	display: flex;
	flex-direction: column;
	height: 100%;

	@include small-tablet {
		padding-bottom: 50rem;
	}

	&__top {
		padding: 15rem 0 16rem 25rem;
		position: relative;
		&:before {
			content: '';
			display: block;
			width: 3000px;
			height: 1px;
			background: $light-gray; 
			position: absolute;
			left: 0;
			bottom: 0;
		}

		@include small-tablet {
			border-top: 1px solid $light-gray;
			border-bottom: 1px solid $light-gray;
			padding: 14rem var(--wrapper-offset);
			&:before {
				display: none;
			}
		}
	}
	&__column {
		&_left {
			display: flex;
			align-items: center;
		}
	}

	&__back {
		width: 22rem;
		height: 22rem;
		margin-right: 8rem;
		margin-left: -5rem;
		cursor: pointer;
		flex-shrink: 0;
		fill: #464646;
		svg {
			width: 100%;
			height: 100%;
		}

		@include min-large-tablet {
			display: none;
		}

		@include large-mobile {
			
		}
	}
	&__container {
		flex: 1 1 auto;
		position: relative;
		margin-top: 10rem;
		&-wrap {
			padding-top: 2px;
			padding-bottom: 2px;
			position: absolute;
			left: 0;
			top: 0;
			width: calc( 100% + 10rem );
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
			padding-right: 10rem;
			padding-left: 25rem;
		}

		@include small-tablet {
			margin-top: 20rem;
			&-wrap {
				padding: 10rem calc( var(--wrapper-offset) + 10rem ) 10rem var(--wrapper-offset);
			}
		}
	}

	&__btn {
		&:not(:last-child) {
			margin-right: 10rem;
		}

		@include large-mobile {
			padding: 0;
			width: 40rem;
			&:not(:last-child) {
				margin-right: 5rem;
			}
			.button-medium {
				&__icon {
					margin-right: 0;
				}
				&__text {
					display: none;
				}
			}
		}
	}
	&__action {
		text-align: left;
		margin: -10rem;
		min-width: 220rem;
		&-btn {
			padding: 5rem 19rem;
			font-size: 17rem;
			width: 100%;
			justify-content: flex-start;
			font-weight: 500;
			&:hover {
				background: #F5F5F7;
			}
		}
	}

	&__bottom {
		padding: 24rem 0 20rem 25rem;

		@include small-tablet {
			padding: 5rem var(--wrapper-offset);
			margin-top: 20rem;
		}

		@include large-mobile {
			border-top: 1px solid $light-gray;
		}
	}

	&__section {
		&:not(:first-child) {
			margin-top: 40rem;
		}

		@include large-mobile {
			&:not(:first-child) {
				margin-top: 30rem;
			}
		}
	}

	&__date {
		display: flex;
		overflow: hidden;
		justify-content: center;
		&-text {
			position: relative;
			color: $gray;
			&:before, &:after {
				content: '';
				display: block;
				position: absolute;
				top: 50%;
				height: 1px;
				width: 1000px;
				background: $light-gray;
			}
			&:before {
				right: 100%;
				margin-right: 20rem;
			}
			&:after {
				left: 100%;
				margin-left: 20rem;
			}
		}

		@include large-mobile {
			&-text {
				&:before {
					margin-right: 15rem;
				}
				&:after {
					margin-left: 15rem;
				}
			}
		}
	}

	&__list {
		&:not(:first-child) {
			margin-top: 40rem;
		}

		@include large-mobile {
			&:not(:first-child) {
				margin-top: 30rem;
			}
		}
	}
	&__item {
		&:not(:first-child) {
			margin-top: 30rem;
		}
	}
}
</style>