<template lang="pug">
	.edit-field
		.edit-field__row
			.edit-field__column.edit-field__column_left
				.edit-field__label.color-gray.p {{label}}
			.edit-field__column.edit-field__column_center
				form-input(
					:value="value"
					:name="name"
					:placeholder="placeholder"
					:type="type"
					v-if="edit"
				)
				.edit-field__placeholder.h4(v-else) {{placeholder}}
			.edit-field__column.edit-field__column_right
				.edit-field__nav.mobile-hidden(v-if="edit")
					.edit-field__nav-item
						.edit-field__link.color-gray(@click="closeEdit") Cancel
					.edit-field__nav-item
						.edit-field__link.color-blue(@click="closeEdit") Save
				.edit-field__nav.mobile-hidden(v-else)
					.edit-field__nav-item
						.edit-field__link.color-blue(@click="showEdit") Edit
				.edit-field__nav.mobile-visible
					.edit-field__nav-item
						.edit-field__link.color-blue(@click="$bvModal.show(`${modalName}`)") Edit 
		modal-field(:id="modalName" :title="groupName")
			.modal-field__list
				.modal-field__item
					.modal-field__label {{label}}
					form-input.modal-field__input(
						:value="value"
						:name="name"
						:placeholder="placeholder"
						:type="type"
					)

</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: 'Label name'
		},
		name: {
			type: String,
			default: 'name'
		},
		value: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: 'Alexandr'
		},
		type: {
			type: String,
			default: ''
		},
		modalName: {
			type: String,
			default: ''
		},
		groupName: {
			type: String,
			default: ''
		},
	},
	data(){
		return {
			edit: false,
		}
	},
	methods:{
		showEdit() {
			this.edit = true;
		},
		closeEdit() {
			this.edit = false;
		},
	}
}
</script>

<style lang="scss">
@import '~/assets/сss/components/edit-field.scss';
</style>