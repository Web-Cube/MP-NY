<template lang="pug">
	.chat-body
		.chat-body__top
			.chat-body__row.flex.flex_justify.flex_vertical
				.chat-body__column.chat-body__column_left
					item-chat(
						avatar="User4.jpg"
						name="Johnson"
						desc="Macbook pro 2016 4k"
					)
				.chat-body__column.chat-body__column_right.flex
					.chat-body__buttons.flex
						button-medium.chat-body__btn(gray icon="infoCircle" v-b-modal.modal-safety)
							span.p For your safety
						button-medium.chat-body__btn(gray square icon="dots" name="chatAction")
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
				.chat-body__list(style="height: 2000px")
					item-chat.chat-sidebar__item(
						v-for="(message, i) in messages"
						:key="i"
						:name="item.name"
						:avatar="item.avatar"
						:time="item.time"
						:counter="item.counter"
						:desc="item.desc"
						checkbox
						button
						:class="{isActive:number == i}"
						@change="tabList(i)"
						@showPanel="panel"
					)
						| {{item.text}}
		.chat-body__bottom
			part-chat-form.chat-body__form
</template>

<script>
export default {
	props: {
		messages: {
			type: Array,
			default: () => ([
			])
		}
	},
}
</script>

<style lang="scss">
.chat-body{
	display: flex;
	flex-direction: column;
	height: 100%;

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
			padding-right: 8rem;
			padding-left: 25rem;
		}
	}

	&__btn {
		&:not(:last-child) {
			margin-right: 10rem;
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
	}
}
</style>