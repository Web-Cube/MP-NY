<template lang="pug">
	section.chat
		.chat__row
			.chat__column.chat__column_left
				part-chat-sidebar.chat__sidebar
			.chat__column.chat__column_right
				
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Settings"
		},
		list: {
			type: Array,
			default: () => ([
			])
		},
		blacklist: {
			type: Array,
			default: () => ([
			])
		},
	},
	data(){
		return{
			nav: [
				{
					text: 'Profile',
					to: '/setting',
				},
				{
					to: '/safety',
					text: 'Safety',
				},
				{
					to: '/blacklist',
					text: 'Blacklist',
				},
				{
					to: '/not-blacklist',
					text: 'Blacklist is empty',
				},
			],
		}
	}
}
</script>

<style lang="scss">
.chat {
	position: relative;
	border-top: 1px solid $light-gray;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;

	&__row {
		display: flex;
		flex: 1 1 auto;
		flex-direction: row;
		max-width: 1500rem;
		padding-right: 50rem;

		@include large-desktop {
	    	padding-right: 40rem;
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
	}
}
</style>