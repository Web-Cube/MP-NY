<template lang="pug">
	.container
		.container__row
			.container__column.container__column_left
				part-back-sidebar
			.container__column.container__column_right
				part-header(back)
				main.main
					Nuxt
				part-mobile-menu
				modal-search
		module-page-helper
</template>