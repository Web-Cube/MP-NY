<template lang="pug">
	.chat-sidebar(:class="Mods")
		.chat-sidebar__top
			button-link-arrow.chat-sidebar__back(:to="backLink" v-if="moderator == true")
			.chat-sidebar__title.h3 {{title}} 
				span.color-blue ({{counter}})
			part-chat-search.chat-sidebar__search(v-if="search == true")
			form-checkbox.chat-sidebar__select-all(all @change.native="panel" v-if="moderator == false")
				span.color-gray.h6 Select all
		.chat-sidebar__stat(v-if="statText")
			.chat-sidebar__stat-text
				| {{statText}} 
				span.color-blue ({{statCounter}})
		.chat-sidebar__container
			.chat-sidebar__container-wrap
				.chat-sidebar__list
					item-chat.chat-sidebar__item(
						v-for="(item, i) in list"
						:key="i"
						:name="item.name"
						:avatar="item.avatar"
						:time="item.time"
						:counter="item.counter"
						:desc="item.desc"
						:status="item.status"
						:checkbox="checkbox"
						:small="small"
						button

						:class="{isActive:number == i}"
						@change="tabList(i)"
						@showPanel="panel"
					)
						| {{item.text}}
		transition(name="fade")
			part-chat-panel.chat-sidebar__panel(v-if="panelOpen" @closePanel="panelOpen = false")
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Messages'
		},
		counter: {
			type: Number,
			default: 20
		},
		statCounter: {
			type: Number,
			default: null
		},
		statText: {
			type: String,
			default: ''
		},
		search: {
			type: Boolean,
			default: true
		},
		moderator: {
			type: Boolean,
			default: false
		},
		checkbox: {
			type: Boolean,
			default: true
		},
		small: {
			type: Boolean,
			default: false
		},
		backLink: {
			type: String,
			default: '#'
		},
		list: {
			type: Array,
			default: () => ([
			])
		}
	},
	data(){
		return {
			panelOpen: false,
			number: 2,
			i: 2
		}
	},
	methods:{
		tabList(i) {
			this.number = i;

			if ( window.innerWidth < 1121 ) {
				if ( document.querySelector(".section-chat__column_left") ) {
					document.querySelector(".section-chat__column_left").style.display = "none";
				}
			}
		},
		panel() {
	    	this.panelOpen = true;
	    },
	},
	computed: {
		Mods(){
			return {
				'chat-sidebar_moderator': this.moderator
			}
		}
	}
}
</script>

<style lang="scss">
.chat-sidebar{
	display: flex;
	flex-direction: column;
	height: 100%;
	padding-bottom: 20rem;

	@include small-tablet {
		padding-bottom: 60rem;
	}

	&_moderator {
		.chat-sidebar {
			&__top {
				min-height: 91rem;
				border-bottom: 1px solid $light-gray;
				padding-top: 20rem;
				padding-bottom: 20rem;
				display: flex;
				align-items: center;
			}
		}
	}

	&__back {
		margin-right: 25rem;
		.link-arrow {
			&__icon {
				width: 15rem;
				height: 17rem;
				transform: rotate(180deg);
				stroke: $default;
			}
		}
	}

	&__top {
		padding: 32rem 25rem 14rem 25rem;

		@include large-tablet {
			padding-right: 0;
		}

		@include small-tablet {
			padding: 20rem var(--wrapper-offset) 5rem var(--wrapper-offset);
		}
	}
	&__container {
		flex: 1 1 auto;
		position: relative;
		&-wrap {
			position: absolute;
			left: 0;
			top: 0;
			width: calc( 100% - 4px );
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
			padding-right: 4px;
			padding-left: 10px;
			&::-webkit-scrollbar {
				width: 2px;
			}

			/* Track */
			&::-webkit-scrollbar-track {
				background: none;
			}

			/* Handle */
			&::-webkit-scrollbar-thumb {
				background: $blue;
				border-radius: 5px;
			}
		}
		@include small-tablet {
			overflow: hidden;
			&-wrap {
				width: calc( 100% + 12rem );
				padding: 0 32rem 0 20rem;
			}
		}
	}
	&__title {
		font-family: 'Atyp Display';
		line-height: .8;
		@include large-mobile {
			font-weight: 500;
		}
	}
	&__search {
		margin-top: 24rem;

		@include large-mobile {
			margin-top: 17rem;
		}
	}
	&__select-all {
		margin-top: 25rem;

		@include large-mobile {
			display: none;
		}
	}

	&__panel {
		margin-top: -50rem;
	}

	&__item {
		&:not(:first-child) {
			border-top: 1px solid #F4F3F4;
		}
	}

	&__stat {
		padding: 22rem 10rem 14rem 30rem;
		font-size: 16rem;
		font-weight: 600;
	}
}
</style>