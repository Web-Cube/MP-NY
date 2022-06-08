<template lang="pug">
	main.main
		section-contacts(:contacts="contacts")
</template>

<script>
export default {
	data(){
		return{
			contacts: [
				{
					title: 'Phone numbers',
					row: [
						{
							label: 'For customers',
							list: [
								'<a href="tel:+13034200031">+1 303 420 00 31</a>',
								'<a href="tel:+14655864824">+1 465 586 48 24</a>'
							]
						},
						{
							label: 'For cooperation',
							list: [
								'<a href="tel:+13034200031">+1 303 420 00 31</a>',
								'<a href="tel:+14655864824">+1 465 586 48 24</a>'
							]
						}
					],
				},
				{
					title: 'E-mails',
					row: [
						{
							label: 'For cooperation',
							list: [
								'<a href="Info@marketplace.org" class="color-blue email">Info@marketplace.org</a>',
							]
						},
						{
							label: 'For support',
							list: [
								'<a href="support@marketplace.org" class="color-blue email">support@marketplace.org</a>',
							]
						}
					],
				},
				{
					title: 'Address',
					row: [
						{
							label: 'New York Office',
							list: [
								'New Your, 45 Broadway #520 100341',
							]
						},
						{
							label: 'Boston Office',
							list: [
								'Boston, 45 Broadway #520 100341',
							]
						}
					],
				},
			]
		}
	}
}
</script>
