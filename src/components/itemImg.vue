<template>

	<div id="">
			<div class="homepageRecommendBoxItem" @mouseover="showCopywrite(-1)" @mouseout="showCopywrite(-2)">
		<div class="copywrite" :class="{'show-copywrite': -1 === showIndex}" @mouseover="showCopywrite(-1)" @mouseout="showCopywrite(-2)">
			{{this.imgTitle}}
		</div>
		<img style="width: 100%;height: 100%;" :src="imgUrl" />
		
	</div>
	
		<span id="">
			{{this.imgFooter}}
		</span>
	</div>
</template>

<script>
	export default {
		name: 'itemImg',
		props: {
			imgUrl: {

			},
			imgTitle:{
				
			},
			imgFooter:{
				
			}

		},
		data() {
			return {

				showIndex: -2
			}
		},
		methods: {
			showCopywrite(index) {
				this.showIndex = index
			}
		}

	}
</script>

<style scoped>
	.homepageRecommendBoxItem {
		position: relative;
		overflow: hidden;
		display: inline-flex;
		flex: 0 0 auto;
		border: 1px solid rgb(230, 230, 230);
		width: 15rem;
		height: 15rem;
		margin: 0.5rem 0 0.5rem 1rem;
	}
	
	.copywrite {
		position: absolute;
		width: 15rem;
		height: 2.5rem;
		padding: .5rem 1rem;
		transform: translateY(-130%);
		transition: transform .2s;
		color: #eee;
		font-size: 0.8rem;
		background: rgba(0, 0, 0, .4);
		z-index: 2;
		cursor: pointer;
		>div{
			position: absolute;
			top: 50%;
			left: 50%;
			width: 15rem;
			transform: translateY(-50%) translateX(-50%);
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
		}
	}
	
	.show-copywrite {
		transform: translateY(0);
	}
	span{
		position: relative;
		font-size: medium;
		color:  black;
		display: block;
		left: 0.5rem;
	}
</style>