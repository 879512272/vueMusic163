<template>
	<div :class="{'list-box':this.showlist,'nolist-box':!this.showlist}">
		<div class="listBoxHead">
			<div class="listBoxHeadTitle" id="listBoxHeadTitle">
				<span>歌曲名称</span>
				<span>歌手</span>
			</div>
		</div>
		<div id="list">
			<ul class="view-ul">
      	<li v-for="(i,n) in list" class="view-li">
        <p @click="fillSong({list,n})" class="view-p"><span class="view-p-title">{{ i.title }}</span><span class="view-p-singer">{{i.singer}}</span></p>
      </li>
    </ul>
		</div>
		
 <!--   <Table :columns="columns1" :data="data1"></Table>-->
	</div>
	
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed: {

			list() {
				return this.historyList
			},
			...mapState([
				'historyList',
				'showlist'
			])
		},
		created() {},
		mounted(){
			
		},
		watch:{
			 
		},
		methods: {

			...mapMutations([
				'fillSong',

			]),
			
		}

	}
</script>

<style scoped>
	.nolist-box {
		display: none;
	}
	.listBoxHead{
		position: relative;
		width: 600px;
		height: 100px;
		top: 0px;
		left: 0px;
		
	}
	.list-box {
		position: absolute;
		z-index: 1;
		width: 600px;
		height: 400px;
		background-color: white;
		right: 0rem;
		bottom: 3rem;
		box-shadow: 1px 1px 1px 1px grey;
		overflow-y: scroll;
		overflow-x: hidden;
		cursor: default;
	}
	.view-ul{
	height: auto;
	width: 600px;
	display: flex;
	flex-direction:column;
	flex-wrap: wrap;
	justify-content: space-between;
}
	.view-li {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		
	}
	
	.view-p {
		display: flex;
		justify-content: space-around;
	}
	
	.view-p-title {
		width: 15rem;
	}
	
	.view-p-singer {
		width: 15rem;
	}
	
	li:nth-of-type(even){
		background-color: rgb(240,240,240);
		
	}
	::-webkit-scrollbar{
		width: 5px;
	}
	::-webkit-scrollbar-thumb{
		border-radius: 5px;
		background-color: rgb(230,230,230);
	}
	.listBoxHeadTitle{
	position: relative;
	height: 34px;
	border: 1px solid rgb(230,230,230);
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-around;
	top: 66px;
	
	}
	.listBoxHeadTitle span{
		flex: 1 0 auto;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		margin-left: 0px;
		margin-right: 60px;
		padding-left: 10px;
		border-left: 1px solid rgb(230,230,230);
		
	}
	#list{
		overflow-x: hidden;
		overflow-y: scroll;
	}
</style>