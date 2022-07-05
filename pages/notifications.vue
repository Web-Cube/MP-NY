<template lang="pug">
	section-notifications(:list="list")
</template>

<script>
export default {
	layout: 'back',
	data(){
		return{
			list: [
				{
					title: 'Did you buy something? Leave a review about the seller',
					unread: true,
					desc: 'Pick it up from the Ozon pick-up point before 21:00 on Thursday, January 27, then the order will have to be canceled. Entering the pick—up point only with a mask and gloves - this will help ...',
					date: '22.04.2022 - 11:22'
				},
				{
					title: 'Did you buy something? Leave a review about the seller',
					unread: true,
					desc: 'Pick it up from the Ozon pick-up point before 21:00 on Thursday, January 27, then the order will have to be canceled. Entering the pick—up point only with a mask and gloves - this will help ...',
					date: '22.04.2022 - 11:22'
				},
				{
					title: 'Did you buy something? Leave a review about the seller',
					desc: 'Pick it up from the Ozon pick-up point before 21:00 on Thursday, January 27, then the order will have to be canceled. Entering the pick—up point only with a mask and gloves - this will help ...',
					date: '22.04.2022 - 11:22'
				}
			]
		}
	}
}
</script>
