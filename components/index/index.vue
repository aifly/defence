<template>
	<div :style='{background: "url("+imgs.mapBg+") no-repeat center bottom",backgroundSize:"cover"}' :class="{'show':show}" class="zmiti-index-main-ui lt-full" >
		
		<div class="zmiti-index-map">
			<img :src="imgs.map" alt="">

			<div class="zmiti-index-pos" v-for='pos in posData' :style='pos.pos'>
				<img :src="imgs.pos" alt="">
			</div>
		</div>
		
	</div>
</template>

<script>
	import './index.css';
	import imgs from '../lib/assets.js';
	import zmitiUtil from '../lib/util'
	export default {
		props:['obserable'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				posData,
				showTitle:false,
				showOpen:false,
				show:true,
				viewW:window.innerWidth,
				viewH:window.innerHeight,
			}
		},
		methods:{
			afterLeave(){
				this.showOpen = true;
			},
			entryMain(){
				this.show = false;
			}
		},
		mounted(){

			var {obserable} = this;

			setTimeout(()=>{
				this.showTitle = true;
				 
			},100)

			//zmitiUtil.wxConfig(document.title,document.title);

		}
	}
</script>