<template lang="pug">
	section.section-chat
		.section-chat__row
			.section-chat__column.section-chat__column_left
				part-chat-sidebar.section-chat__sidebar(:list="list")
			.section-chat__column.section-chat__column_right
				part-chat-body.section-chat__body(:messages="messages")

		modal-safety
			p
				| Pick it up from the pick-up point before 21:00 on Thursday, January 27, then the order will have to be canceled. Entering the pick—up point only with a mask and gloves - this will help.
			p
				| Pick it up from the pick-up point before 21:00 on Thursday, January 27, then the order will have to be canceled. Entering the pick—up point only with a mask and gloves - this will help.
				
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Settings"
		},
		blacklist: {
			type: Array,
			default: () => ([
			])
		},
	},
	data(){
		return{
			list: [
				{
					text: 'A pleasure to contact with you pleasure to contact with you',
				},
				{
					name: 'Johnson',
					avatar: 'User4.jpg',
					desc: 'Macbook pro 2016 text',
					text: 'A pleasure to contact with you pleasure to contact with you',
					counter: 2
				},
				{
					name: 'Johnson',
					avatar: 'User4.jpg',
					desc: 'Macbook pro 2016 text',
					text: 'A pleasure to contact with you pleasure to contact with you',
				},
				{
					name: 'Alexandr',
					avatar: 'User3.jpg',
					desc: 'Macbook pro 2016 text',
					text: 'A pleasure to contact with you pleasure to contact with you',
					counter: 2
				},
				{
					name: 'Johnson',
					avatar: 'User4.jpg',
					desc: 'Macbook pro 2016 text',
					text: 'A pleasure to contact with you pleasure to contact with you',
					counter: 2
				},
				{
					name: 'Johnson',
					avatar: 'User4.jpg',
					desc: 'Macbook pro 2016 text',
					text: 'A pleasure to contact with you pleasure to contact with you',
				},
				{
					name: 'Alexandr',
					avatar: 'User3.jpg',
					desc: 'Macbook pro 2016 text',
					text: 'A pleasure to contact with you pleasure to contact with you',
					counter: 2
				},
				{
					name: 'Johnson',
					avatar: 'User4.jpg',
					desc: 'Macbook pro 2016 text',
					text: 'A pleasure to contact with you pleasure to contact with you',
					counter: 2
				},
				{
					name: 'Johnson',
					avatar: 'User4.jpg',
					desc: 'Macbook pro 2016 text',
					text: 'A pleasure to contact with you pleasure to contact with you',
				},
				{
					name: 'Alexandr',
					avatar: 'User3.jpg',
					desc: 'Macbook pro 2016 text',
					text: 'A pleasure to contact with you pleasure to contact with you',
					counter: 2
				},
			],
			messages: [
				{
					list: [
						{
							avatar: 'User3.jpg',
							name: 'Alexandr',
							time: '06:50 am',
							answer: true,
							content: [
								{
									text: 'A pleasure to contact with you again! A pleasure to contact with you again!',
									read: true
								}
							]
						},
						{
							avatar: 'User4.jpg',
							name: 'Janson',
							content: [
								{
									text: 'A pleasure to contact with you again!',
								}
							],
							gallery: [
								'create-gallery__img5_big.jpg',
								'item-card__img4.jpg'
							]
						}
					]
				},
				{
					date: 'Today',
					list: [
						{
							avatar: 'User3.jpg',
							name: 'Alexandr',
							time: '06:50 am',
							answer: true,
							content: [
								{
									text: 'A pleasure to contact with you again!',
									read: true
								}
							]
						},
						{
							avatar: 'User4.jpg',
							name: 'Janson',
							content: [
								{
									text: 'A pleasure to contact with you again!',
								},
								{
									text: 'A pleasure to contact with you again! A pleasure to contact with you again!',
								}
							],
						}
					]
				}
			]
		}
	}
}
</script>

<style lang="scss">
.section-chat {
	position: relative;
	border-top: 1px solid $light-gray;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;

	@include small-tablet {
		margin-left: -32px;
		margin-right: -32px;
		border-top: 0;
	}

	@include large-mobile {
		margin-left: -15rem;
		margin-right: -15rem;
	}

	&__row {
		display: flex;
		flex: 1 1 auto;
		flex-direction: row;
		max-width: 1500rem;
		padding-right: 50rem;

		@include large-desktop {
	    	padding-right: 40rem;
    	}

    	@include large-tablet {
    		flex-wrap: wrap;
    	}

    	@include small-tablet {
    		padding: 0;
    	}
	}

	&__column {
		height: 100%;
		position: relative;
		&_left {
			width: 423rem;
			min-width: 423rem;
		}
		&_right {
			width: 100%;
			border-left: 1px solid $light-gray;
		}

		@include large-tablet {
			width: 100%;
			&_left {
				min-width: inherit;
			}
			&_right {
				border-left: 0;
			}
		}
	}
}
</style>