<template lang="pug">
	.back-sidebar
		.back-sidebar__top
			button-back.back-sidebar__roll-up Roll up
		.back-sidebar__body
			.back-sidebar__nav
				.back-sidebar__nav-item(v-for="(item, i) in nav" :key="i")
					button-nav.back-sidebar__nav-btn(
						:icon="item.icon"
						:to="item.to"
						:notif="item.notif"
					) {{item.name}}
		.back-sidebar__bottom
			button-nav.back-sidebar__logout(red small icon="logout") Exit
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
.back-sidebar{
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 30rem 15rem;

	&__body {
		margin-top: 75rem;
		flex: 1 1 auto;
	}

	&__bottom {
		margin-top: 75rem;
	}

	&__logout {
		width: 100%;
	}

	&__nav {
		&-item {
			&:not(:first-child) {
				margin-top: 20rem;
			}
		}
		&-btn {
			width: 100%;
		}
	}
}
</style>