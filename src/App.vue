<template>
	<div id="app">
		<vhead></vhead>
		<appmenu></appmenu>
		<router-view></router-view>
		<listbox></listbox>
		<player></player>
				
	</div>
</template>

<script>
import listbox from './components/listbox.vue'
import appmenu from './components/appmenu.vue'
import vhead from './components/vhead.vue'
import player from './components/player.vue'
import { mapGetters, mapState } from 'vuex'
	export default {
		name: 'app',
		components: {
			vhead,
			player,
			listbox,
			appmenu,
		},
		data() {
			return{}
		},
		computed: {
    ...mapGetters([
      // ...
    ]),
    ...mapState([
      
      
    ])
  },

  
}	
</script>

<style>
	#app {
		width: 1366px;
		height: 635px;
		position: relative;
		user-select: none;
		
		
	}
	
	.sliderimg {
		z-index: 1;
	}
</style>