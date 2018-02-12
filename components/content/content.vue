<template>
	<div v-show='show' ref='content'  class="lt-full zmiti-content-main-ui"
	data-friction-x="0.05"
	data-scalar-x="25"
	data-scalar-y="0"
	data-limit-y='0'
	>
		<div :style="posData.bgStyle" class="zmiti-content-bg">
			
		</div>
		<div class="zmiti-content-C">
			<div v-for='div in posData.content'>
				{{div}}
			</div>
		</div>

		<div class="zmiti-content-defence" v-tap='entryUpload'>
			<span>我也要为祖国守边防</span>
			<img :src='imgs.defence' />
		</div>
	</div>
</template>
<script>
	import './content.css';
	import imgs from '../lib/assets.js';
	import $ from 'jquery';
	import '../lib/jquery.parallax';
	export default {
		props:['obserable'],
		name:'Copyright',
		data(){
			return {
				imgs,
				show:false,
				posData:{
					content:[]
				}
			}
		},
		methods:{
			entryUpload(){
				var {obserable} = this;
				obserable.trigger({
					type:'showUploadPage'
				})
			}
		},
		mounted(){
			var {obserable} = this;
			console.log(this.posData)

			obserable.on('showContentPage',(data)=>{
				this.show = true;
				this.posData = data.posData;
				$(this.$refs['content']).parallax();
			})
			

		}
	}
</script>