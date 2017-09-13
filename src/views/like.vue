<template>
	<div id="" style="position: absolute; width: 100px;top:100px;left: 300px;">
			<button @click='ajax' >123</button>
	</div>

</template>

<script>
	import $ from 'jquery'
	import { mapGetters, mapState, mapMutations } from 'vuex'
	export default {

		data() {
			return {
				likeList:[],
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
			ajax() {
					this.$nextTick(() => {
					let self = this
					let urlString = '/api/userLike'
					
					$.get(urlString, (data) => {
							let id=data.data[0].songId
							 console.log(id)
							 console.log(data.data)
															
						})
					})
				}
				
				
			}
		}
	
	
</script>

<style>
</style>