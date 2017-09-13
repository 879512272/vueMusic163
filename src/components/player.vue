<template>
	
	<div class="player-box" :class='{Act:view.openFlag}'>
		<audio  ref="player" id="player" :src="audio.songUrl" @vol='soundChange' @timeupdate='currentTime' @canplay='songLengths' controls loop autoplay></audio>
		<!--<i class="material-icons"@click='soundChange'>{{volValue}}</i>-->

		<div class="a-btn">
			<i class="material-icons a-btn-i" @click='prev'>skip_previous</i>
			<i class="material-icons a-btn-i" @click="togglePanel">{{playValue}}</i>
			<i class="material-icons a-btn-i" @click='next'>skip_next</i>
		</div>
		<div class="a-slider">
			<p v-show='!view.openFlag' class="a-slider-p">{{audio.currentLength | time}}</p>
			<div class="a-slider-box">
				<vslider v-model="sliderValue" @changeEvent='currentChange'></vslider>
			</div>
			<p v-show='!view.openFlag' class="a-slider-p">{{songLength | time}}</p>
			
		</div>
		
		<div class="v-slider">
			
				<i v-if="volFlag" @click="volChange" class="fa fa-volume-up fa-lg"></i>
				<i v-else @click="volChange" class="fa fa-volume-off fa-lg"></i>
				<Slider style="position:relative;top: 5px; float: right; width: 100px;" v-model="value9" :tip-format="format" ></Slider>
			
		</div>
		<div class="list" @click='changeshowlist'>
			<Icon type="navicon-round"></Icon>
		</div>
		<!--<div class="a-play" v-show='!view.openFlag'>
      <p>{{audio.title}}</p>
      <p>{{audio.singer}}</p>
    </div>-->
    </div>
</template>
<script>
	import { mapState, mapMutations } from 'vuex'
	import vslider from './vslider.vue'
	export default {
		name: 'player',
		components: {
			vslider
		},
		data() {
			return {
				songLength: 0,
				volFlag: true,
				value9: 50,
				volOff:0,
				nowVol:0,
				
				
			}
		},
		computed: {

			sliderValue() {
				let a = this.songLength === 0 ? 0 : Math.round((this.audio.currentLength / this.songLength) * 100)
				return a
			},
			volValue() {
				return this.volFlag ? 'volume_up' : 'volume_off'
			},
			playValue() {
				return this.audio.currentFlag ? 'pause' : 'play_arrow'
			},
			...mapState([
				'audio',
				'view'
			])
		},
		watch:{
			value9:function(val){
				let a=val*0.01;
				this.$refs.player.volume=a.toFixed(2);
				if(this.value9!=0){
					this.volFlag=true;
				}
			}
		},
		methods: {
			volChange(val){
				if(this.volFlag==true){
					this.nowVol=this.value9;
					this.value9=0;
					this.volFlag=!this.volFlag;
				}
				else if(this.volFlag==false){
					this.value9=this.nowVol;
					this.volFlag=!this.volFlag;
				}
			
			},
			
			format (val) {

				return '音量' + val + '%';
                
            },
			togglePanel() {
				let player = this.$refs.player
				if(player.src !== '') {
					if(!player.paused) {
						player.pause()
						document.title = ``
						this.audio.currentFlag = false
					} else {
						player.play()
						document.title = `▶ - ${this.audio.title} `
						this.audio.currentFlag = true
					}
				}
			},
			currentTime() {
				this.audio.currentLength = this.$refs.player.currentTime
			},
			songLengths() {
				this.songLength = this.$refs.player.duration
				document.title = `▶ - ${this.audio.title} `
			},
			soundChange() {
				this.volFlag = !this.volFlag
				this.$refs.player.muted = !this.$refs.player.muted
			},
			currentChange(val) {
				this.$refs.player.currentTime = this.$refs.player.duration * val / 100
			},
			...mapMutations([
				'prev',
				'next',
				'changeshowlist'
			])
		},
		filters: {
			time(value) {
				var length = Math.floor(value)
				var minute = Math.floor(value / 60)
				if(minute < 10) {
					minute = '0' + minute
				}
				var second = length % 60
				if(second < 10) {
					second = '0' + second
				}
				return minute + ':' + second
			}
		}
	}

</script>
<style scoped>
	audio {
		display: none;
	}
	
	.player-box {
		background-color: rgb(247,247,247);
		position: fixed;
		display: flex;
		justify-content:space-around;
		align-items: center;
		cursor: default;
		bottom: 0rem;
		width: 1366px;
		line-height: 3rem;
		border:1px solid rgb(230,230,230);
		
	}
	
	.a-play {
		position: absolute;
		top: -3rem;
		;
		left: 0;
		height: 3rem;
		line-height: 1.5rem;
		width: 100%;
		padding: 0 1rem;
		font-size: 0.8rem;
		text-align: left;
		background-color: #4a4a4a;
		background-color: rgba(74, 74, 74, 0.9);
	}
	
	.a-slider {
		width: 70%;
		display: inline-flex;
	
		flex: 1 1 auto;
	}
	
	.player-box.Act .a-slider {
		flex: 1 1 auto;
	}
	
	.a-slider-box {
		display: inline-block;
		width: 100%;
		padding: 0 0.5rem;
	}
	
	.a-slider-p {
		font-size: 1rem;
	}
	
	.a-btn {
		font-size: 0;
		display: inline-flex;
		align-items: center;
		/*justify-content: center;*/
		flex: 1 0 3rem;
	}
	
	.player-box.Act .a-btn {}
	
	.a-btn-i {
		line-height: 2rem;
		font-size: 2rem;
	}
	
	.a-btn-i:nth-of-type(2) {
		font-size: 2rem;
	}
	
	.v-slider {
		
		flex: 1 0 7rem;
		padding-left: 2rem;
		
	}
	.list{
		flex: 1 0 2rem;
		padding-left: 1rem;
	}
	
	/*.player-box.Act .a-btn-i{
  line-height: 2;  
  font-size: 1.5rem;
}*/
</style>