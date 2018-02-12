<template>
	<div :style='{background: "url("+imgs.mapBg+") no-repeat center bottom",backgroundSize:"cover"}' :class="{'show':show}" class="zmiti-index-main-ui lt-full" >
		

		<div class="zmiti-title">
			<img :src="imgs.title" alt="">
		</div>

		<div class="zmiti-index-map">
			<img :src="imgs.map" alt="">
			<div @click='showPos(pos.key)' class="zmiti-index-pos" v-for='(pos,i) in posData' :style='pos.pos'>
				<img :src="imgs.pos" alt="">
			</div>

			<span v-tap='entryContent' :class='{"right":pos.isRight,"left":!pos.isRight}' v-for='(pos,i) in posData' v-if='i===index' class="zmiti-index-title" :style="pos.titleStyle">
					{{pos.name}}
				</span>
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
				index:-1,
				viewW:window.innerWidth,
				viewH:window.innerHeight,
			}
		},
		methods:{
			afterLeave(){
				this.showOpen = true;
			},
			showPos(key){
					this.index = key;
			},
			entryContent(key){

				var {obserable} = this;
				obserable.on('getPosData',()=>{
					return this.posData[this.index]
				});
				
				obserable.trigger({
					type:'showContentPage',
					data:{
						posData:this.posData[this.index]
					}

				})
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