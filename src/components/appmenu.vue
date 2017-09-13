<template>
	<div class="menu">
		<Menu :theme="theme3" active-name="1" style="background-color: rgb(247,247,247);">
			<Menu-group title="推荐">
				<Menu-item name="1-1">
					<Icon type="music-note"></Icon>
					发现音乐
				</Menu-item>
				<Menu-item name="1-2">
					<Icon type="monitor"></Icon>
					MV
				</Menu-item>
				<Menu-item name="1-4">
					<Icon type="person-stalker"></Icon>
					朋友
				</Menu-item>
			</Menu-group>
			<Menu-group title="我的音乐">
				<Menu-item name="2-1">
					<Icon type="headphone"></Icon>
					本地音乐
				</Menu-item>
				<Menu-item name="2-2">
					<Icon type="ios-download-outline"></Icon>
					下载管理
				</Menu-item>
				<Menu-item name="2-3">
					<Icon type="ios-cloud-outline"></Icon>
					我的音乐云盘
				</Menu-item>
			</Menu-group>
			<Menu-group title="收藏的歌单">
				<Menu-item name="3-1">
					<Icon type="heart"></Icon>
					我喜欢的音乐
				</Menu-item>
			</Menu-group>
		</Menu>
		<song></song>
	</div>
</template>
<script>
	import song from '../components/song.vue'
	export default {
	components: {
		song,
	},
		data() {
			return {
				theme3: 'light'
			}
		},
	}
</script>
<style>
.menu{
	width: 240px;
	background-color: rgb(247,247,247);
}
</style>