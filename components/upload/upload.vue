<template>
	<div v-show='show' class="zmiti-upload-main-ui lt-full" :style='{background:"url("+imgs.uploadBg+") no-repeat center top",backgroundSize:"cover"}'>
		
		
		<div class="zmiti-upload-form">
			<div class="zmiti-upload-input">
				<input @change='uploadFile' type="file" name="" ref='file'>
				<img :style='{opacity:uploadState === 0 ? 1:0}' :src="imgs.upload" />
				<div class="zmtit-uploading animate" v-show='uploadState === 1'>
					{{msg}}
				</div>

				<div class="zmtit-uploading" v-show='uploadState === 2'>
					<img :src="src" alt="">
				</div>
			</div>

			<div class="zmiti-upload-radio">
				<span @touchstart='isMan=true' :class="{'active':isMan}"></span>
				<span @touchstart='isMan = false' :class="{'active':!isMan}"></span>
			</div>
		</div>


		<div v-tap='createImg' class="zmiti-create-btn" :class='{"disabled":!mergePic}'>
			<span>生成贺卡照片</span>
			<img :src="imgs.create" />
		</div>


	</div>
</template>


<script>
	import './upload.css';
	import imgs from '../lib/assets.js';
	import $ from 'jquery';
	export default {
		name:'upload1',
		props:['obserable'],
		data(){
			return {

				show:false,
				imgs,
				isMan:true,
				uploadState:0,
				src:'',
				mergePic:'',
				msg:'上传中...'
			}
		},
		methods:{
			uploadFile(){
				var {obserable} = this;

				this.uploadState = 1;

				var formData = new FormData();
	  		    var s = this;
	  					
			      formData.append('setupfile', this.$refs['file'].files[0]);
			      formData.append('uploadtype', 0);
			     
			      $.ajax({
			        type: "POST",
			        contentType: false,
			        processData: false,
			        url: window.protocol+'//api.zmiti.com/v2/share/upload_file/',
			        data: formData,
			        error(e){
			        	
			        },
			        success(data){
			        	 
				        if (data.getret === 0) {
				          var url = data.getfileurl[0].datainfourl;
				          s.mergeImg(url);
				          s.src = url;
				  		  s.uploadState = 2;
				          

				        }else{
				        	
				        }
			        }
			      });

			},
			mergeImg(url){

				var {obserable} = this;
				var posData = obserable.trigger({type:'getPosData'});
				var s = this;
				$.ajax({
				  	url:window.protocol+'//api.zmiti.com/v2/aiapi/ptu_facemerge',
				  	type:"post",
				  	data:{
				  		image:url,
				  		model:posData.merge[s.isMan|0].id,
				  		appid:posData.merge[s.isMan|0].appid,
				  		imagetype:1
				  	}
				  }).done((data)=>{
				  	if(data.getret ===0 ){


						this.mergePic = data.imageurl;				 
 
				  	}
				  	else if(data.getret === 1000){
				  		if(!data.airesult.length){
							this.msg = '未能检测到人脸';
							this.uploadState = 1;

							setTimeout(()=>{
								this.msg = '上传中...';
								this.uploadState = 0;
							},2000)
							return;
						}
				  	}
				  })

				  this.deleteImg(url); 
			},
			createImg(){
				if(!this.mergePic){
					return;
				}
				var {obserable} = this;
				obserable.trigger({
					type:'toggleSharePage',
					data:{
						show:true,
						img:this.mergePic
					}
				})
			},
			deleteImg(url){//删除原图

				setTimeout(()=>{
					$.ajax({
						url: window.protocol+'//api.zmiti.com/v2/share/delete_file/',

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
			obserable.on('showUploadPage',()=>{
				this.show = true;
			});
			obserable.on('reupload',()=>{
				this.uploadState = 0;
				this.src = '';
			})
		}
	}
</script>