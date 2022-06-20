<template lang="pug">
	section.section-contacts
		.wrap
			part-page-preview.section-contacts__preview(title="Contacts" img="contacts__img.jpg")
			.section-contacts__row.flex.flex_justify
				.section-contacts__column.section-contacts__column_left
					.section-contacts__list
						item-contact.section-contacts__item(
							v-for="(contact, i) in contacts"
							:key="i"
							:title="contact.title"
							:row="contact.row"
						)
				.section-contacts__column.section-contacts__column_right
					.section-contacts__map
						.section-contacts__map-title.h3 We are on map
						.section-contacts__map-img
							img.object-fit(src="~/assets/img/contacts__map.jpg")
			part-need-help.section-contacts__help
				| Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem n
</template>

<script>
export default {
	props: {
		contacts: {
			type: Array,
			default: () => ([
			])
		}
	},
}
</script>

<style lang="scss">
.section-contacts{
	padding-bottom: 100rem;
	@include large-mobile {
		padding-bottom: 50rem;
		padding-top: 36rem;
	}
	&__preview {
		.page-preview {
			&__img {
				padding-top: div(550, 1400) * 100%;
			}
		}
		@include large-mobile {
			margin: 0;
			.page-preview {
				&__img {
					display: none;
				}
				&__title {
					position: static;
					color: inherit;
				}
			}
		}
	}
	&__row {
		margin-top: 100rem;

		@include small-tablet {
			margin-top: 40rem;
		}

		@include large-mobile {
			margin-top: 20rem;
		}
	}

	&__column {
		width: 50%;
		&_left {
			max-width: 600rem;
			padding-right: 30rem;
		}

		@include small-tablet {
			width: 100%;
			&_left {
				max-width: none;
				padding-right: 0;
			}
		}
	}
	&__item {
		padding: 50rem 0;
		border-top: 1px solid rgba(195, 200, 203, 0.6);
		padding-right: 10rem;
		&:first-child {
			border-top: 0;
			padding-top: 0;
		}
		&:last-child {
			padding-bottom: 0;
		}

		@include small-tablet {
			padding: 40rem 0;
			&:last-child {
				padding-bottom: 40rem;
				border-bottom: 1px solid rgba(195, 200, 203, 0.6);
			}
		}

		@include large-mobile {
			&:first-child {
				border-top: 1px solid rgba(195, 200, 203, 0.6);
				padding-top: 25rem;
			}
		}
	}

	&__map {
		&-img {
			overflow: hidden;
			position: relative;
			padding-top: div(458, 700) * 100%;
			border-radius: 20rem;
			margin-top: 37rem;
		}

		@include small-tablet {
			margin-top: 40rem;
		}
		@include large-mobile {
			&-img {
				margin-top: 20rem;
				padding-top: div(300, 345) * 100%;
			}
		}
	}
	&__help {
		margin-top: 100rem;
		@include large-mobile {
			margin-top: 50rem;
		}
	}
}
</style>