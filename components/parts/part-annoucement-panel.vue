<template lang="pug">
	.annoucement-panel
		.annoucement-panel__row.flex.flex_vertical.flex_justify
			.annoucement-panel__column
				form-checkbox.annoucement-panel__select(checked light)
					strong.p 3 ad selected
			.annoucement-panel__column.flex.flex_vertical
				button-medium.annoucement-panel__btn(icon="delete" blue small) Delete
				button-medium.annoucement-panel__btn(icon="setting" blue small) Setting
				button-medium.annoucement-panel__btn(icon="cross" blue small) Deactivate
				button-medium.annoucement-panel__cancel(blue small @click.native="$emit('closePanel')") Cancel
</template>

<script>
export default {
	props: {
		nav: {
			type: Array,
			default: () => ([
				{
					icon: 'apps',
					to: '/announcements',
					name: 'My advertises'
				},
				{
					icon: 'plus',
					to: '/create',
					name: 'Create Advertise'
				},
				{
					icon: 'favorites',
					to: '/favorites',
					name: 'Favorites ad'
				},
				{
					icon: 'chat',
					to: '/chat',
					name: 'Chat'
				},
				{
					icon: 'bell',
					to: '/Notifications',
					name: 'Notifications',
					notif: true
				},
				{
					icon: 'setting',
					to: '/setting',
					name: 'Setting',
				},
				{
					icon: 'support',
					to: '/support',
					name: 'Support',
				}
			])
		},
	},
}
</script>

<style lang="scss">
.annoucement-panel {
	background: $blue;
	color: #fff;
	padding: 25rem 30rem;
	border-radius: 10rem;
	position: sticky;
	bottom: 30rem;

	&__btn {
		&:not(:first-child) {
			margin-left: 15rem;
		}
	}
	&__cancel {
		margin-left: 30rem;
	}
}
</style>