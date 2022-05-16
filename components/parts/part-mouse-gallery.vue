<template lang="pug">
	.mouse-gallery.absolute(v-if="list.length" @mouseleave="selectBullet")
		.mouse-gallery__list.absolute
			.mouse-gallery__item(v-for="(image, i) in list" :key="i" @mouseenter="selectBullet(i)")
				.mouse-gallery__image-wrapper.absolute
					img.mouse-gallery__image.object-fit(:src="require(`~/assets/img/${image}`)")
		.mouse-gallery__nav(v-if="list.length > 1")
			.mouse-gallery__dot(v-for="(image, i) in list" :key="i" ref="bullet")
</template>

<script>
export default {
	props:{
		list: {
			type: Array,
			default: () => ([])
		}
	},
	methods: {
		clearAll(){
			const $bullets = this.$refs.bullet;

			if($bullets === undefined) return false;

			$bullets.forEach(bullet => {
				bullet.classList.remove('is-active')
			});
		},
		selectBullet(index = -1){
			const $bullets = this.$refs.bullet;

			if($bullets === undefined) return false;

			if(index !== -1 && $bullets[index] !== undefined){
				this.clearAll()

				$bullets[index].classList.add('is-active')
			}else{
				this.clearAll()
			}
		}
	}
}
</script>

<style lang="scss">
	.mouse-gallery{
		

		&__list{
			display: flex;
		}

		&__nav{
			pointer-events: none;
			display: flex;
			
			padding-left: 10rem;
			padding-right: 10rem;
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			z-index: 15;

		}

		&__image-wrapper{
			z-index: -2;
			opacity: 0;

		}

		&__dot{
			// position: absolute;
			// left: 0;
			flex: 1;
			position: relative;
			margin-bottom: 10rem;
			
			&:before{
				content: '';
				display: block;
				position: absolute;
				left: 2px;
				right: 2px;
				height: 2px;
				bottom: 0;
				background: rgba(255, 255, 255, 0.44);
				border-radius: 1px;

			}

			&.is-active{
				&:before{
					background-color: #fff;
				}
			}
		}

		&__item{
			height: 100%;
			flex: 1;
			// background-color: red;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;

			&:hover, &:first-child{

				.mouse-gallery__image-wrapper{
					z-index: -1;
					opacity: 1;						
				}
			}
		}
	}
</style>