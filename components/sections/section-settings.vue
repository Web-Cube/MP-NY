<template lang="pug">
	section.settings
		.settings__row
			.settings__column.settings__column_left
				part-profile-box.settings__profile-box
			.settings__column.settings__column_right
				h1.section-notifications__title.h3 {{title}}
				.settings__nav
					part-back-nav.settings__nav-wrap(:nav="nav")
				.settings__list
					.settings__item(v-for="(item, i) in list" :key="i")
						.settings__item-title.h3 {{ item.title }}
						part-edit-field.settings__field(
							v-for="(field, i) in item.fields"
							:key="i"
							:label="field.label"
							:value="field.value"
							:name="field.name"
							:type="field.type"
							:placeholder="field.placeholder"
							v-if="!field.option"
						)
						part-edit-select.settings__field(
							v-for="(field, i) in item.fields"
							:key="i"
							:label="field.label"
							:value="field.value"
							:name="field.name"
							:type="field.type"
							:placeholder="field.placeholder"
							v-else-if="field.option == 'select'"
						)
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
		nav: {
			type: Array,
			default: () => ([
			])
		},
	},
}
</script>

<style lang="scss">
.settings {
	padding: 44rem 0 80rem 0;

	@include large-mobile {
		padding: 13rem 0 60rem 0;
	}

	&__row {
		display: flex;

		@include large-tablet {
			flex-wrap: wrap;
		}
	}

	&__column {
		&_left {
			width: 310rem;
			min-width: 310rem;
		}
		&_right {
			width: 100%;
			margin-left: 70rem;
		}

		@include large-tablet {
			width: 100%;
			&_right {
				margin-left: 0;
				margin-top: 30rem;
			}
		}
	}

	&__nav {
		margin-top: 30rem;
		margin-left: -20rem;
		&-wrap {
			padding-left: 20rem;
		}

		@include large-tablet {
			margin-left: 0;
			&-wrap {
				padding-left: 0;
			}
		}
	}

	&__item {
		margin-top: 60rem;

		@include large-mobile {
			margin-top: 40rem;
		}
	}

	&__field {
		padding: 20rem;
		margin-left: -20rem;
		border-bottom: 1px solid $light-gray;

		@include small-desktop {
			padding-right: 0;
		}

		@include large-tablet {
			padding: 15rem 0;
			margin-left: 0;
		}

		@include large-mobile {
			padding: 27rem 0 20rem 0;
		}
	}
}
</style>