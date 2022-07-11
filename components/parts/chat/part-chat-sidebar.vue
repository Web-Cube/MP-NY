<template lang="pug">
	.chat-sidebar
		.chat-sidebar__top
			.chat-sidebar__title.h3 {{title}} 
				span.color-blue ({{counter}})
			part-chat-search.chat-sidebar__search
			form-checkbox.chat-sidebar__select-all(all @change.native="panel")
				span.color-gray.h6 Select all
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
						checkbox
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
		},
		panel() {
	    	if ( window.innerWidth > 580 ) {
	    		this.panelOpen = true;
	    	} else {
	    		this.$root.$emit('bv::show::modal', 'modal-panel')
	    	}
	    },
	}
}
</script>

<style lang="scss">
.chat-sidebar{
	display: flex;
	flex-direction: column;
	height: 100%;
	padding-bottom: 20rem;

	&__top {
		padding: 32rem 25rem 14rem 25rem;
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
	}
	&__title {
		font-family: 'Atyp Display';
		line-height: .8;
	}
	&__search {
		margin-top: 24rem;
	}
	&__select-all {
		margin-top: 25rem;
	}

	&__panel {
		margin-top: -50rem;
	}
}
</style>