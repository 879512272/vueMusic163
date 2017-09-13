<template>
	<div class="preview">
		<div class="imgBox">
			<img :src="this.audio.imgUrl" style="width:100% ;">
		</div>
		<div class="songName">
		<ul>
			<li>{{this.audio.title}}</li>
			<li>{{this.audio.singer}}</li>
		</ul>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters, mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed: {

			...mapGetters([
				// ...

			]),
			...mapState([
				'audio',

			])
		},
		methods: {
			...mapMutations([
				// 映射 this.increment() 为 this.$store.commit('increment')
			]),

		}

	}
</script>

<style scoped>
	.preview {
		width: 240px;
		height: 68px;
		border-top: 1px solid #e1e1e2;
		border-right:1px solid #e1e1e2;
		background-color: rgb(247,247,247);
	
	}
	.imgBox{
		width: 60px;
		height: 60px;
		position: absolute;
		margin: 4px 4px 4px 4px;
	}
	.songName{
	 	position: absolute;
	 	margin: 4px 4px 4px 4px;
		width: 130px;
		height: 60px;
		left: 70px;
	}
	li{
		height: 24px;
		margin: 5px;
	}
</style>