<template lang="pug">
	.users-table(:class="Mods")
		table
			thead.color-gray
				tr
					th
						form-checkbox.users-table__checkbox(@change.native="$emit('showPanel')")
					th
						| User
					th
						| Email
					th
						| Phone
					th
						| Date register
					th
						| ID
			tbody
				tr(v-for="(row, i) in rows" :key="i")
					td
						form-checkbox.users-table__checkbox(@change.native="$emit('showPanel')")
					td {{row.user}}
					td {{row.email}}
					td {{row.phone}}
					td {{row.date}}
					td 
						.users-table__id
							.users-table__id-text {{row.id}}
							button-switcher.users-table__switcher(:items="switchers" light :name="row.id")
</template>

<script>
export default {
	props: {
		moderator: {
			type: Boolean,
			default: false
		},
		rows: {
			type: Array,
			default: () => ([
			])
		},
	},
	data(){
		return{
			switchers: [
				{
					value: 'Ban',
					text: 'Ban'
				},
				{
					value: 'Check',
					text: 'Check',
					checked: true
				}
			],
		}
	},
	computed: {
		Mods(){
			return {
				'users-table_moderator': this.moderator,
			}
		}
	}
}
</script>

<style lang="scss">
.users-table{
	table {
		width: 100%;
	}
	th {
		font-weight: 500;
		text-align: left;
		padding-bottom: 17rem;
	}
	th, td {
		border-bottom: 1px solid $light-gray;
		&:first-child {
			width: 80rem;
		}
		&:last-child {
			width: 40%;
		}
	}
	td {
		padding: 20rem 0;
		font-size: 15rem;
	}

	&__id {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&_moderator {
		.users-table {
			&__switcher {
				.button-switcher__list {
					flex-direction: row-reverse;
				}
			}
		}
	}

	&__switcher {
		margin-left: 10rem;
	}

	@include large-tablet {
		th, td {
			&:first-child {
				width: 35rem;
			}
			&:nth-child(3) {
				display: none;
			}
		}
	}
}
</style>