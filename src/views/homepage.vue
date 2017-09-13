<template>
	<div class="homepage">
		<div class="homepagehead">
			<div class="homepageheadbtn">
				<span class="unactive">个性推荐</span>
				<span class="unactive">歌单</span>

			</div>

		</div>
		<div class="sliderimg">
			<slider v-bind="setting" style="sliderimg"></slider>
		</div>
		<div class="homepageRecommend">
			<div style="border-bottom: 1px solid rgb(230,230,230);">
				<h2>推荐歌单</h2>
			<span>更多></span>
			</div>
			
			<div class="homepageRecommendBox">
				<div class="homepageRecommendBoxItem" @mouseover="showCopywrite(-1)" @mouseout="showCopywrite(-2)">
					<div class="copywrite" :class="{'show-copywrite': -1 === showIndex}" @mouseover="showCopywrite(-1)" @mouseout="showCopywrite(-2)">
			根据您的音乐口味生成每日更新
		</div>
					<div class="homepageDateWeek">{{week}}</div>
					<div class="homepageDateDays">
						{{days}}
					</div>
				</div>
				<itemImg v-bind="img1"></itemImg>
				<itemImg v-bind="img2"></itemImg>
				<itemImg v-bind="img3"></itemImg>

				
			</div>
			<div class="homepageRecommendBox" style="top: 320px;">
				
				<itemImg v-bind="img4"></itemImg>
				<itemImg v-bind="img5"></itemImg>
				<itemImg v-bind="img6"></itemImg>

				
			</div>
		</div>
		
	</div>

</template>

<script>
	import slider from 'vue-image-scroll';
	import itemImg from '../components/itemImg.vue';
	export default {

		components: {
			itemImg,
			slider
		},
		data() {

			return {
				
				showIndex: -2,
				isActive1: false,
				isActive2: false,
				days: 0,
				week: 0,
				img1:{
					imgUrl:'../static/img/1-1.jpg',
					imgTitle:'根据您的音乐口味生成每日更新',
					imgFooter:'123'
				},
				img2:{
					imgUrl:'../static/img/1-2.jpg',
					imgTitle:'根据您的音乐口味生成每日更新',
					imgFooter:'456'
				},
				img3:{
					imgUrl:'../static/img/1-3.jpg',
					imgTitle:'根据您的音乐口味生成每日更新',
					imgFooter:'789'
				},
				img4:{
					imgUrl:'../static/img/1-3.jpg',
					imgTitle:'根据您的音乐口味生成每日更新',
					imgFooter:'789'
				},img5:{
					imgUrl:'../static/img/1-3.jpg',
					imgTitle:'根据您的音乐口味生成每日更新',
					imgFooter:'789'
				},img6:{
					imgUrl:'../static/img/1-3.jpg',
					imgTitle:'根据您的音乐口味生成每日更新',
					imgFooter:'789'
				},
				
				setting: {
					styleObject: {
						width: '800',
						height: '200'
					},

					image: ['../static/img/1-1.jpg', '../static/img/1-2.jpg', '../static/img/1-3.jpg', '../static/img/1-4.jpg', '../static/img/1-5.jpg'],
					imgStyle: {},
					interval: 5000,
					
				}
			}
		},
		mounted() {
			this.getdays()

		},

		methods: {
			getdays() {
				var date = new Date();
				this.days = date.getDate()
				if (this.days<10) {
					this.days="0"+ this.days
				}
				var weekday = new Array(7)
				weekday[0] = "星期天"
				weekday[1] = "星期一"
				weekday[2] = "星期二"
				weekday[3] = "星期三"
				weekday[4] = "星期四"
				weekday[5] = "星期五"
				weekday[6] = "星期六"
				this.week=weekday[date.getDay()]
			},
			showCopywrite(index) {
				this.showIndex = index
			}
		}

	}
</script>

<style scoped>
	.homepage {
		background-color: rgb(250,250,250);
		overflow-y: scroll;
		position: absolute;
		height: 630px;
		width: 1126px;
		top: 50px;
		right: 0px;
	}
	
	.sliderimg {
		position: absolute;
		top: 40px;
		left: 200px;
	}
	
	.homepagehead {
		width: 1050px;
		height: 40px;
		left: 45px;
		position: absolute;
		border-bottom: 1px solid rgb(230,230,230);
	}

	.unactive {
		bottom: 0px;
		float: left;
		color: black;
		font-size: 125%;
		margin: 17px 0px 0px 40px;
		user-select: none;
		cursor: default;
	}
	
	.homepageheadbtn {
		position: absolute;
		width: 524px;
		height: 40px;
		left: 300px;
		bottom: 0px;
	}
	
	.homepageRecommend {
		cursor: default;
		position: absolute;
		top: 15rem;
		left: 45px;
		height: 50rem;
		width: 65rem;
	}
	
	.homepageRecommend h2 {
		cursor: default;
		display: inline-block;
		font-weight: 500;
		font-family: "微软雅黑";
	}
	
	.homepageRecommend span {
		cursor: default;
		position: absolute;
		right: 3rem;
		top: 8px;
	}
	
	.homepageRecommendBox {
		display: flex;
		flex-wrap: wrap;
		justify-content:flex-start;
		align-items: flex-start;
		position: absolute;
		height: 18rem;
		width: 65rem;
	}
	
	span.unactive:hover {
		color: red;
		border-bottom: 2px solid red;
	}

	.homepageDateDays{
		position: relative;
		top: 3rem;
		text-align: center;
		font-size: 1000%; 
		color: rgb(200,50,50);
		
		
	}
	.homepageDateWeek{
		position: relative;
		top: 3rem;
		left: 6rem;
		font-size: 150% ;
		text-align: center;
	}
	.homepageRecommendBoxItem{
		position: relative;
		overflow: hidden;
		display: inline-flex;
		flex: 0 0 auto;
		border: 1px solid rgb(230,230,230); 
		width: 15rem;
		height: 15rem;
		margin:0.5rem 0 0.5rem 1rem;
		::after:{
			content: "123";
			
		}
		
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
	::-webkit-scrollbar{
		width: 8px;
	}
	::-webkit-scrollbar-thumb{
		border-radius: 5px;
		background-color: rgb(230,230,230);
	}
</style>