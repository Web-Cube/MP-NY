<template lang="pug">
	section.settings
		.settings__row
			.settings__column.settings__column_left
				part-profile-box.settings__profile-box
			.settings__column.settings__column_right
				h1.section-notifications__title.h3 {{title}}
				.settings__nav
					part-back-nav.settings__nav-wrap(:nav="nav")
				.settings__list(v-if="list.length > 0")
					.settings__item(v-for="(item, i) in list" :key="i")
						.settings__item-title.h3 {{ item.title }}
						part-edit-fields.settings__field(
							v-for="(field, i) in item.fields"
							:key="i"
							:label="field.label"
							:list="field.list"
							:placeholder="field.placeholder"
							:modalName="field.modalName"
							:groupName="field.groupName"
							:icon="field.icon"
							v-if="field.option == 'groupFields'"
						)
						part-edit-field.settings__field(
							v-for="(field, i) in item.fields"
							:key="i"
							:label="field.label"
							:value="field.value"
							:name="field.name"
							:type="field.type"
							:placeholder="field.placeholder"
							:modalName="field.modalName"
							:groupName="field.groupName"
							v-if="!field.option"
						)
						part-edit-select.settings__field(
							v-for="(field, i) in item.fields"
							:key="i"
							:label="field.label"
							:value="field.value"
							:name="field.name"
							:type="field.type"
							:topPosition="field.topPosition"
							:placeholder="field.placeholder"
							:modalName="field.modalName"
							:groupName="field.groupName"
							v-if="field.option == 'select'"
						)
				.settings__blacklist(v-else-if="blacklist.length > 0")
					item-blacklist.settings__blacklist-item(
						v-for="(item, i) in blacklist"
						:key="i"
						:avatar="item.avatar"
						:name="item.name"
					)
				part-not-notification.settings__not-found(v-else img="blacklist__img.svg") The Blacklist is empty
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
			padding-top: 20rem;
		}

		@include large-tablet {
			width: 100%;
			&_right {
				margin-left: 0;
				margin-top: 30rem;
				padding-top: 0;
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

	&__blacklist {
		padding-top: 20rem;
		&-item {
			padding: 20rem;
			margin-left: -20rem;
			border-bottom: 1px solid $light-gray;
		}

		@include small-desktop {
			&-item {
				padding-right: 0;
			}
		}

		@include large-tablet {
			&-item {
				padding: 20rem 0;
				margin-left: 0;
			}
		}

		@include large-mobile {
			padding-top: 12rem;
			&-item {
				padding: 15rem 0;
			}
		}
	}
	&__not-found {
		margin-top: 150rem;

		@include large-mobile {
			margin-top: 0;
		}
	}
}
</style>