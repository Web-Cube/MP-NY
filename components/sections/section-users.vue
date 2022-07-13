<template lang="pug">
	section.section-users
		.section-users__head.flex.flex_vertical.flex_justify
			.section-users__head-column.section-users__head-column_left
				h1.section-users__title.h2.h2_big {{title}}
			.section-users__head-column.section-users__head-column_right.flex.flex_vertical
				form-select.section-users__sort(label="Sort by" :items="['Newest', 'Popular']" value="Newest" noBorder)
				button-switcher.section-users__switcher(:items="switchers" blue)
		part-search-filter.annoucement-list__filter(disabled)
			form-input.search-filter__field(
				name="name"
				label="Name"
			)
			form-input.search-filter__field(
				name="phone"
				type="tel"
				label="Phone"
			)
			form-input.search-filter__field(
				name="id"
				label="ID"
			)
			form-select.search-filter__field(
				value="Categories"
				name="category"
				:items="['Category 1', 'Category 2', 'Category 3']"
			)
			form-input.search-filter__field(
				name="cost"
				label="Cost"
			)
			form-input.search-filter__field(
				name="date"
				label="Date"
			)
		part-users-table.section-users__table(
			:rows="rows" 
			:moderator="moderator" 
			@showPanel="panel"
		)

		.section-users__bottom.flex.flex_justify
			.section-users__bottom-column
				button-primary.section-users__btn(blue) Load more
			.section-users__bottom-column.flex
				button-primary.section-users__btn(gray icon="plusBig" v-if="add") Add moderator
				button-primary.section-users__btn(gray icon="download" to="#") Download base EXCL
		transition(name="fade")
			part-annoucement-panel.section-users__panel(v-if="panelOpen" @closePanel="panelOpen = false")
				button-medium.annoucement-panel__btn(icon="noneUser" blue small) Ban
				button-medium.annoucement-panel__btn(icon="user" blue small) Check
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Users"
		},
		moderator: {
			type: Boolean,
			default: false
		},
		add: {
			type: Boolean,
			default: false
		},
	},
	data(){
		return{
			panelOpen: false,
			switchers: [
				{
					value: 'Active',
					text: 'Active',
					checked: true
				},
				{
					value: 'Ban',
					text: 'Ban'
				}
			],
			rows: [
				{
					user: 'Johnson',
					email: 'Bari56@mail.ru',
					phone: '+7 747 609 99 95',
					date: '11.04.22',
					id: '114575854'
				},
				{
					user: 'Johnson',
					email: 'Bari56@mail.ru',
					phone: '+7 747 609 99 95',
					date: '11.04.22',
					id: '114575454'
				},
				{
					user: 'Johnson',
					email: 'Bari56@mail.ru',
					phone: '+7 747 609 99 95',
					date: '11.04.22',
					id: '114575852'
				},
				{
					user: 'Johnson',
					email: 'Bari56@mail.ru',
					phone: '+7 747 609 99 95',
					date: '11.04.22',
					id: '414575854'
				},
				{
					user: 'Johnson',
					email: 'Bari56@mail.ru',
					phone: '+7 747 609 99 95',
					date: '11.04.22',
					id: '114335854'
				},
				{
					user: 'Johnson',
					email: 'Bari56@mail.ru',
					phone: '+7 747 609 99 95',
					date: '11.04.22',
					id: '114577854'
				}
			]
		}
	},
	methods: {
	    panel() {
	    	if ( window.innerWidth > 580 ) {
	    		this.panelOpen = true;
	    	} else {
	    		this.$root.$emit('bv::show::modal', 'modal-panel')
	    	}
	    },
	},
}
</script>

<style lang="scss">
.section-users{
	padding: 30rem 0;

	@include large-mobile {
		padding: 20rem 0;
	}

	&__head {
		@include large-mobile {
			&-column {
				width: 100%;
				&_right {
					margin-top: 15rem;
				}
			}
		}
	}

	&__switcher {
		@include large-mobile {
			width: 100%;
		}
	}

	&__filter {
		margin-top: 45rem;
	}

	&__table {
		margin-top: 45rem;
	}

	&__sort {
		margin-right: 20rem;
	}

	&__bottom {
		margin-top: 40rem;
	}

	&__btn {
		font-size: 14rem;
		min-width: 146rem;
		padding: 0 30rem;

		&:not(:last-child) {
			margin-right: 10rem;
		}
	}

	&__panel {
		margin-left: 0;
		margin-right: 0;
		margin-top: 30rem;
	}
}
</style>