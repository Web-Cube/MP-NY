<template lang="pug">
	.container
		.container__row
			.container__column.container__column_left
				part-back-sidebar
			.container__column.container__column_right
				.container__inner
					part-header(back)
				Nuxt
				part-mobile-menu
				modal-search
		module-page-helper
</template>