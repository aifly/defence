<template>
	<div v-show='show' class="zmiti-share-main-ui lt-full " :class='{"active":show}' :style='{background:"url("+imgs.shareBg+") no-repeat center top",backgroundSize:"cover"}'>
		

		<div class="zmiti-share-img-ui lt-full ">
			
			

			<div class="lt-full">
				
				<div v-if='createImg' class="zmiti-create-img">
					<img :src='createImg'/>
				</div>

				<span  class="zmiti-pos-title"><img :src='posData.img' /></span>

				<div v-if='posData.merge.length && posData.merge[0].direction<=-1' class="zmiti-merge-img">
					<img :src="src" alt="">
				</div>
				<div v-if='posData.merge.length && posData.merge[0].direction>-1' class="zmiti-merge-img zmiti-merge-img1">
					<div v-if='posData.merge[0].direction'>
						<img :src="posData.merge[0].img" alt="">
						<img :src="src" alt="">
					</div>
					<div v-if='!posData.merge[0].direction'>
						<img :src="src" alt="">
						<img :src="posData.merge[0].img" alt="">
					</div>
				</div>
				<div class="zmiti-pic-title">
					<img style="opacity:0;" :src="imgs.picTitle" alt="" />
					<img  :src="imgs.picTitle" alt="" />
				</div>
			</div>

			<div class="zmiti-share-corner">
				<img :src="imgs.corner1" alt="">
			</div>
			<div class="zmiti-share-corner zmiti-share-corner1">
				<img :src="imgs.corner1" alt="">
			</div>
		</div>

		<div class="lt-full zmiti-cache-page" ref='zmiti-cache-page'>
				<div v-if='posData.merge.length && posData.merge[0].direction<=-1' class="zmiti-merge-img">
					<img :src="src" alt="">
					<span class="zmiti-pos-title"><img :src='posData.img' /></span>
				</div>
				<div v-if='posData.merge.length && posData.merge[0].direction>-1' class="zmiti-merge-img zmiti-merge-img1">
					<span  class="zmiti-pos-title"><img :src='posData.img' /></span>
					<div v-if='posData.merge[0].direction'>
						<img :src="posData.merge[0].img" alt="">
						<img :src="src" alt="">
					</div>
					<div v-if='!posData.merge[0].direction'>
						<img :src="src" alt="">
						<img :src="posData.merge[0].img" alt="">
					</div>
				</div>
				<div class="zmiti-pic-title">
					<img style="opacity:0;" :src="imgs.picTitle" alt="" />
					<img  :src="imgs.picTitle" alt="" />
				</div>
			</div>

		<div class="zmiti-share-btns" v-if='!isShare'>
			<div v-tap='rephoto'>
				<span>重新拍照</span>
				<img :src="imgs.shareBtnBg" alt="">
			</div>
			<div @click='showMasks'>
				<span>转发朋友</span>
				<img :src="imgs.shareBtnBg" alt="">
			</div>
		</div>
		<div  class="zmiti-share-btns" v-if='isShare'>
			<div v-tap='restart' class="zmiti-restart-btn">
				<span>我也要为祖国守边防</span>
				<img :src="imgs.shareBtnBg" alt="">
			</div>
		</div>
		<div v-if='showMask' @touchstart='showMask = false' class="zmiti-mask">
			<img :src="imgs.arrow" />
		</div>

		<div class="zmiti-copyright">
			<span>新华社解放军分社、新华社新媒体中心联合出品</span>
			<span>技术支持：天天P图</span>
		</div>
	</div>
</template>


<script>
	import './index.css';
	import imgs from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	import $ from 'jquery';
	import '../lib/html2canvas';
	export default {
		name:'upload1',
		props:['obserable'],
		data(){
			return {
				show:false,
				imgs,
				isShare:false,
				posData:{
					merge:[]
				},
				createImg:'',
				viewW:document.documentElement.clientWidth,
				viewH:document.documentElement.clientHeight,
				showMask:false,
				src:'http://'+window.server+'.zmiti.com/zmiti_ele/public/f2d2fbbb2096c31a9bed133074d5a341.png',
				isMan:true
			}
		},
		methods:{

			restart(){
				window.location.href = window.location.href.split('?')[0];
			},

			showMasks(){
				this.showMask = true;
			},

			hideMasks(){
				this.showMask = false;
			},

			rephoto(){
				var {obserable} = this;

				obserable.trigger({
					type:'reupload'
				})
				obserable.trigger({
					type:'toggleSharePage',
					data:{
						show:false
					}
				})
			},
			deleteImg(url){//删除原图

				setTimeout(()=>{
					$.ajax({
						url: window.protocol+'//'+window.server+'.zmiti.com/v2/share/delete_file/',

						type:'post',
						data:{
							filepath:url
						},
						success(data){
							console.log(data);
						}
					})

				},2000)
			}
			
			
		},
		mounted(){
			var {obserable} = this;
			var s = this;

			obserable.on('showSharePage',(data)=>{
				this.show = true;
				this.isShare = true;
				this.createImg = data.src;
				window.nickname = data.username;
				var address = data.address;

				var url = window.location.href.split('#')[0];
					url = zmitiUtil.changeURLPar(url,'src',data.src);
					url = zmitiUtil.changeURLPar(url,'nickname',encodeURI(window.nickname));
					url = zmitiUtil.changeURLPar(url,'address',encodeURI(address))

					zmitiUtil.wxConfig(window.nickname+'在'+address+'为祖国站岗守岁，祝您新春快乐，阖家幸福！',window.desc,url)
			})

			obserable.on('toggleSharePage',(dt)=>{
				this.show = dt.show;
				if(dt.img){
					this.src = dt.img;

					var img = new Image();
					img.onload = ()=>{
						
						var dpi = 2;

						var address = obserable.trigger({
										type:'getPosData'
									});

						s.posData = address;
						setTimeout(()=>{
							var dom = this.$refs['zmiti-cache-page'];
							html2canvas(dom,{
								useCORS: true,
								onrendered: function(canvas) {
							        var url = canvas.toDataURL();
							        $.ajax({
							          //url: window.protocol+'//api.zmiti.com/v2/share/base64_image/',
							          url:window.protocol+'//'+window.server+'.zmiti.com/v2/share/base64_image/',
							          type: 'post',
							          data: {
							            setcontents: url,
							            setwidth: s.viewW*2,
							            setheight: s.viewH*2
							          },
							          success: function(data) {
							          	console.log(data);
							            if (data.getret === 0) {
							            	s.deleteImg(dt.img);
							              var src = data.getimageurl;
							              	s.createImg = src;

											var url = window.location.href.split('#')[0];
											url = zmitiUtil.changeURLPar(url,'src',src);
											url = zmitiUtil.changeURLPar(url,'nickname',encodeURI(window.nickname));
											url = zmitiUtil.changeURLPar(url,'address',encodeURI(address.name))

											zmitiUtil.wxConfig(window.nickname+'在'+address.name+'为祖国站岗守岁，祝您新春快乐，阖家幸福！',window.desc,url)
										       
							            }

							          }
							        })


							      },
							      width: s.viewW*2,
							      height: s.viewH*2
							})
						},3000)
						
					}
					img.src = this.src;

					
				}
			})



			
		}
	}
</script>