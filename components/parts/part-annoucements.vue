<template lang="pug">
	.annoucements
		h3.annoucements__inner.h3 {{title}}
		//.annoucements__nav.flex.flex_justify
			.annoucements__nav-list.flex
				module-tag.annoucements__nav-btn(
					v-for="(tag, i) in tags"
					:key="i"
					:text="tag.text"
					:counter="tag.counter"
					:to="tag.to"
					:active="tag.active"
					button
				)
			.annoucements__sort
				form-select.annoucements__select(label="Sort by" :items="['Newest', 'Popular']" value="Newest" noBorder)
		part-back-nav.annoucements__nav(:nav="nav" mobile)
			form-select.back-nav__sort(label="Sort by" :items="['Newest', 'Popular']" value="Newest" noBorder)
		.annoucements__container
			form-checkbox.annoucements__select-all(@change.native="panel")
				span.color-gray.h6 Select all
			.annoucements__list
				item-annoucement.annoucements__item(
					v-for="(item, i) in list"
					:key="i"
					:name="item.name"
					:city="item.city"
					:distance="item.distance"
					:date="item.date"
					:price="item.price"
					:phoneNumber="item.phoneNumber"
					:to="item.to"
					:preview="item.preview"
					:statistics="item.statistics"
					@showPanel="panel"
				)
			transition(name="fade")
				part-annoucement-panel.annoucements__panel(v-if="panelOpen" @closePanel="panelOpen = false")
		modal-panel
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "My advertises"
		},
		list: {
			type: Array,
			default: () => ([
				{
					name: 'Объектив SLR Magic. Sony E. 25mm f1.4',
					city: 'New Your',
					to: '#',
					distance: '2 km near you',
					date: '11.12.2022 - 13.12.2022',
					price: 124,
					preview: 'item-card__img1.jpg',
					statistics: [
						{
							icon: 'favorites',
							name: 'Favorites',
							number: '8'
						},
						{
							icon: 'view',
							name: 'Views',
							number: '5 К'
						},
						{
							icon: 'call',
							name: 'Calls',
							number: '95'
						}
					]
				},
				{},
				{}
			])
		},
	},
	data() {
		return {
			panelOpen: false,
			nav: [
				{
					text: 'Active',
					class: 'isActive'
				},
				{
					text: 'Non active',
				},
				{
					text: 'Draft',
				},
			],
		};
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
.annoucements {
	padding-bottom: 60rem;
	&__nav {
		margin-top: 40rem;
		border-bottom: 1px solid $light-gray;

		@include large-mobile {
			margin-top: 15rem;
			&-list {
				@include items(3, 1);
				width: 100%;
			}
			&-btn {
				height: 38rem;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				padding: 0 10rem;
				border: 0;
				border-radius: 8rem;
				&.is-active {
					background: #F4F3F4;
				}
			}
		}
	}

	&__container {
		margin-top: 40rem;

		@include large-mobile {
			margin-top: 20rem;
		}
	}

	&__item {
		padding: 25rem 15rem 25rem 0;
		border-bottom: 1px solid $light-gray;

		@include large-mobile {
			padding: 20rem 0;
			&:first-child {
				padding-bottom: 15rem;
			}
		}
	}

	&__panel {
		margin-top: 30rem;

		@include small-tablet {
			margin-top: 20rem;
			bottom: 60rem;
		}
	}
}
</style>