<template>
	<div class="head">
		<span class="head1">
			<p class="p" @click="tohomepage">
				<font>∮网易云音乐</font>
			</p>
		</span>
		<span class="head2">
			<button class="btn1" @click="historyback"><font><</font></button>
			<button class="btn2" @click="historyGo"><font>></font></button>
			<searchbtn ></searchbtn>
	</span>
		<span class="headuser">

		</span>
		<span class="headbtn">

		</span>
		<span class="headbtn2">
			<i class="fa fa-window-minimize " style="color: rgb(240,240,240);"></i>
			<i class="fa fa-window-maximize " style="color: rgb(240,240,240);"></i>
			<i class="fa fa-close fa-lg" style="color: rgb(240,240,240);"></i>
		</span>

	</div>

</template>

<script>
	import searchbtn from '../components/searchbtn.vue'
	import { mapGetters, mapState, mapMutations } from 'vuex'
	export default {
		components: {
			searchbtn
		},
		data() {
			return {
				list:[]
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
			
		},
		
		methods: {
			historyback(){
				window.history.back()
			},
			historyGo(){
				window.history.go(+1)
			},
			tohomepage(){
				this.$router.push({ path: '/' })
			},
			
			...mapMutations([
				'fillSong' // 映射 this.increment() 为 this.$store.commit('increment')
			])
		}
	}
	
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.head {
		
		position: relative;
		width: 1366px;
		height: 50px;
		top: 0px;
		left: 0px;
		background-color: #c62f2f;
	}
	
	.head1 {
		position: absolute;
		text-align:center;
		width: 130px;
		height: 50px;
		top: 0px;
		left: 0px;
		background-color: #c62f2f;
	}
	
	.head1 .p {
		cursor: default;
		position: absolute;
		height: 50px;
		line-height: 50px;
		width: 130px;
		overflow: hidden;
		font-family: "微软雅黑";
		color: white;
		font-size: 130%;
	}
	
	.head2 {
		position: absolute;
		width: 285px;
		height: 50px;
		left: 190px;
		top: 0px;
	}
	
	.btn1 {
		width: 25px;
		height: 20px;
		position: absolute;
		top: 50%;
		margin-top: -10px;
		background-color: #c62f2f;
		border: 1px solid rgb(200,200,200);
		border-radius: 3px;
		outline: none;
		color: white;
		font-size: 110%;
	}
	
	.btn2 {
		width: 25px;
		height: 20px;
		position: absolute;
		top: 50%;
		margin-top: -10px;
		margin-left: 25px;
		background-color: #c62f2f;
		border: 1px solid rgb(200,200,200);
		border-radius: 2px;
		outline: none;
		color: white;
		font-size: 110%;
	}
	.headbtn2{
		position: absolute;
		width: 100px;
		height: 30px;
		right: 0px;
		top: 10px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>