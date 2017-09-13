<template>
	<div class="search">
		<div class="searchHead">
			
		</div>
		<div class="list">
			<div class="listHead">
					<span >名称</span>
					<span >歌手</span>
					<span >专辑</span>
				
			</div>
			<ul class="view-ul">
			<li v-for="(i,n) in list" class="view-li">
				<p @click="fillSong({list,n})" class="view-p">
					<span class="view-p-title">{{ i.title }}</span>
					<span class="view-p-singer">{{i.singer}}</span>
					<span class="view-p-singer">{{i.album}}</span>
				</p>
			</li>
			</ul>
			<div class="listBottom">
				
			</div>
		</div>
		
		</div>
</template>

<script>
	import { mapGetters, mapState, mapMutations } from 'vuex'
	export default {
		components: {

		},
		data() {
			return {
				islist:[]
			}
		},
		created() {},
		computed: {
			
			...mapGetters([
				// ...
			]),
			...mapState([
				'audio',
				'songlist'
			]),

			list: function() {
				
				return this.islist.concat(this.songlist)
			},

			

		},
		methods: {
			

			...mapMutations([
				'fillSong' // 映射 this.increment() 为 this.$store.commit('increment')
			])
		}
	}
	
</script>

<style scoped>

.search{
	background-color: rgb(247,247,247);
		overflow-y:scroll;
		position: absolute;
		height: 540px;
		width: 1126px;
		top: 50px;
		right: 0px;
		cursor: default;
		
}
.list{
	position: absolute;
	top: 8rem;
	left: 0rem;
}
.listHead{
	height: 34px;
	border: 1px solid rgb(230,230,230);
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-around;
	
}
.listHead span{
		flex: 1 0 auto;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		margin-left: 60px;
		margin-right: 60px;
		padding-left: 10px;
		border-left: 1px solid rgb(230,230,230);
		
	}
.listBottom{
	height: 50px;
}
.view-ul{
	height: auto;
	width: 1118px;
	display: flex;
	flex-direction:column;
	flex-wrap: wrap;
	justify-content: space-between;
}
.view-li{
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}
.view-p{
	display: flex;
	justify-content:space-around;
}
.view-p-title{
	width: 15rem;
}
.view-p-singer{
	width: 15rem;
}
li:nth-of-type(even){
		background-color: rgb(240,240,240);
		
}
::-webkit-scrollbar{
		width: 8px;
	}
::-webkit-scrollbar-thumb{
		border-radius: 5px;
		background-color: rgb(230,230,230);
	}

</style>