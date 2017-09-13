<template>
	<div class="headinput">
		<input type="text" id="" value="" class="headinput1" v-model="audio.keyWord" @keyup.enter='ajax' />
		<i class="material-icons s-input-i" style="height: 20px; float: right;" @click='ajax'>search</i>

	</div>
</template>

<script>
	import $ from 'jquery'
	import { mapGetters, mapState, mapMutations } from 'vuex'
	export default {
		name: 'SearchBtn',
		//		props: {
		//			value: {
		//				default: []
		//			}
		//		},
		data() {
			return {
				list: []
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
				'pushsonglist' // 映射 this.increment() 为 this.$store.commit('increment')
			]),
			ajax() {
				this.list.length = 0
				this.$nextTick(() => {
					let self = this
					let num = 20
					let urlString = `/fcgi-bin/music_search_new_platform?t=0&n=${num}&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=${this.audio.keyWord}`
					$.get(urlString, (data) => {
						// let urlString = `http://s.music.qq.com/fcgi-bin/music_search_new_platform?t=0&n=${num}&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=${this.audio.keyWord}`
						// $.post('/proxy/songListProxy.php', {urlString}, (data) => {
						//						console.log(data)
						
						data = JSON.parse(data)
												console.log(data)
						data['data']['song']['list'].forEach(
							e => {
								let es = e['f'].split('|')
								self.list.push({
									songId: es[0],
									title: es[1],
									singer: es[3],
									imgId: es[4],
									album: es[5],
								})
								// 尺寸只有300,500
								this.pushsonglist(self.list)

							}
						)
					})
				})
				this.$router.push({
					path: '/search'
				})

			}
		},
		//			watch: {
		//				value(val) {
		//					this.list = val
		//				},
		//				list(val) {
		//					this.$emit('input', val)
		//					this.$emit('change', val)
		//				}
		//			}
	}
</script>

<style>
	.headinput {
		width: 200px;
		height: 20px;
		position: absolute;
		top: 50%;
		margin-top: -12px;
		margin-left: 60px;
		outline: none;
		background-color: brown;
		border-radius: 5px;
	}
	
	.headinput1 {
		width: 170px;
		height: 20px;
		position: absolute;
		outline: none;
		background-color: brown;
		border-width: 0px;
		border-radius: 5px;
	}
</style>