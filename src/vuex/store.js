import Vue from 'vue'
import Vuex from 'vuex'
import { unique } from '../utils/utils.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		view: {
			openFlag: true,
			aboutFlag: false,
			imgFlag: false
		},
		audio: {
			songUrl: '',
			songId: '',
			imgUrl: '',
			title: '',
			singer: '',
			album:'',
			currentLength: 0,
			songLength: 0,
			currentFlag: true,
			keyWord: 'My Army',
			songIndex: 0
		},
		audioList: [],
		historyList: [],
		songlist: [],
		showlist:false
	},
	getters: {},
	mutations: {
		changeshowlist (state){
  		state.showlist=!state.showlist
  		},
		pushsonglist(state, payload){
			state.songlist=payload;
		},
		setAudio() {},
		
		fillSong(state, f) {
			let i = f.list[f.n]
			state.audio.songUrl = `http://ws.stream.qqmusic.qq.com/${i.songId}.m4a?fromtag=46`
			state.audio.imgUrl = `http://imgcache.qq.com/music/photo/album_500/${i.imgId % 100}/500_albumpic_${i.imgId}_0.jpg`
			state.audio.title = i.title
			state.audio.singer = i.singer
			state.audio.album=i.album
			state.audio.currentFlag = true
			state.audio.currentFlag = true
			state.historyList.push(i)
			state.historyList = unique(state.historyList, 'songId')
			state.audioList = []
			state.audioList = f.list
			state.view.openFlag = false
			state.view.imgFlag = true
			document.querySelector('#player').play()
		},
		prev(state) {
			var list = state.audioList
			if(state.audio.songIndex === 0) {
				state.audio.songIndex = list.length
			} else {
				state.audio.songIndex--
			}
			store.commit('fillSong', {
				list: list,
				n: state.audio.songIndex
			})
		},
		next(state) {
			var list = state.audioList
			if(state.audio.songIndex === list.length - 1) {
				state.audio.songIndex = 0
			} else {
				++state.audio.songIndex
			}
			store.commit('fillSong', {
				list: list,
				n: state.audio.songIndex
			})
		}
	}
})

export default store