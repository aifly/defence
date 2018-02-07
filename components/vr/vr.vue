<template>
	<div  :class="{'show':show}" class="zmiti-vr-main-ui lt-full" ref='page'>
		<div class="zmiti-vr-bottom">
			<img :src='imgs.vrBottom' />
		</div>

		<div class="zmiti-vr-dog" v-tap='showInfo'>
			<img :src='imgs.dog' />
		</div>

		<div @touchstart='showTip = false' v-if='showTip' class="zmiti-tip">
			<img :src='imgs.swipe' />
		</div>

		<iframe :src="vrLink" frameborder="0"></iframe>

		<div class="zmiti-vr-nav">
			<div class="zmiti-vr-lantern">
				<img :src='imgs.bglantern' />
			</div>

			<ul>

				<transition name='zmiti-nav'>
				<li  v-if='this.retractIndex<=4'>
					<img :src='imgs.vrNavBg' />
					<img :src='imgs.dong' />
				</li>
				</transition>

				<transition name='zmiti-nav'>
				<li  v-if='this.retractIndex<=3'>
					<img :src='imgs.vrNavBg' />
					<img :src='imgs.nan' />
				</li>
				</transition>

				<transition name='zmiti-nav'>
				<li  v-if='this.retractIndex<=2'>
					<img :src='imgs.vrNavBg' />
					<img :src='imgs.xi' />
				</li>
				</transition>

				<transition name='zmiti-nav'>
				<li  v-if='this.retractIndex<=1'>
					<img :src='imgs.vrNavBg' />
					<img :src='imgs.bei' />
				</li>
				</transition>

				<transition name='zmiti-nav'>
				<li v-if='this.retractIndex<=0'>
					<img :src='imgs.vrNavBg' />
					<img :src='imgs.zhong' />
				</li>
				</transition>

				<transition name='zmiti-nav'>
					<li :style="{WebkitTransform:'translateY('+(5-retractIndex)*1.4+'rem)'}" v-tap='toggleVrNav'>
						<img :src='imgs.vrNavBg' />
						<img :src='imgs.retract' v-if='navState === "open"' />
						<img :src='imgs.unretract' v-if='navState === "close"' />
					</li>
				</transition>
			</ul>

		</div>

		<div v-show='showPosterInfo' class="zmiti-poster-info lt-full">
			<div class="zmiti-poster-info-C">
				<div class="zmiti-poster-dog">
					<img :src='imgs.dog1' />
				</div>
				<div class="zmiti-poster-yearofdog">
					<img :src='imgs.yearofdog' />
				</div>
				<div class="zmiti-wish-C">
					<img :src='imgs.wishBg' />
					<div class="zmiti-poster-form">
						<h2>-生成祝福海报-</h2>
						<div class="zmiti-form-item">祝</div>
						<div class="zmiti-form-item zmiti-form-item1">
							<input v-model='username' type='text' placeholder="输入被祝福人的名字" />
						</div>
						<div class="zmiti-form-item" >祝福语</div>
						<div class="zmiti-form-item zmiti-form-item2">
							<textarea v-model='wishWords' :placeholder='placeholders[placeholderIndex]'></textarea>
							<div class="zmiti-change" v-tap='changePlaceholder'>换一换</div>
						</div>
						<div class="zmiti-create-poster-btn " :class="{'disabled':username.length<=0}" v-tap='createPoster'>生成海报</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
	import './vr.css';
	import imgs from '../lib/assets.js';
	import zmitiUtil  from '../lib/util.js';
	export default {
		name:'zmitipage1',
		props:['obserable'],
		data(){
			return {
				imgs,
				play:false,
				index:-1,
				showTip:true,
				navState:'open',
				vrLink:'http://webapp.vizen.cn/album_pano/v1.0.37/index.html?albumId=5BC2108EC5204C8F80EED479FCC22BB8&lang=&vrflag=on',
				show:false,
				retractIndex:0,
				showPosterInfo:false,
				username:'',
				wishWords:'',
				placeholderIndex:0,
				placeholders:[
					'腰带渐短终难弃，每逢佳节胖三斤',
					'洛阳亲友如相问，还行可以正在谈',
					'一年将尽夜，万里未归人',
					'万物迎春送残腊，一年结局在今宵',
					'明年岂无年，心事恐蹉跎',
					'人生如逆旅，我亦是行人',
					'时人不识凌云木，直待凌云始道高',
					'等闲识得东风面，万紫千红总是春',
					'数人世相逢，百年欢笑，能得几回又',
					'山有木兮木有枝，心悦君兮君不知',
					'新年新颜新时代，中意中坚中国梦',
					'耕种岁月，勿负芳华',
					'又老一岁，你在哪里？'
				]
			}
		},
		methods:{
			changePlaceholder(){
				this.placeholderIndex += 1;
				this.placeholderIndex %= this.placeholders.length;

			},
			createPoster(){



				var {obserable,username,wishWords,placeholders,placeholderIndex} = this;

				if(username.length<=0){
					return;
				}
				if(wishWords.length<=0){
					wishWords = placeholders[placeholderIndex]
				}

				obserable.trigger({
					type:'getWish',
					data:{
						username,
						wish:wishWords
					}
				});
				obserable.trigger({
					type:'showPoster'
				});

				var url = window.location.href.split('#')[0];
				url = zmitiUtil.changeURLPar(url,'username',encodeURI(username));
				url = zmitiUtil.changeURLPar(url,'wish',encodeURI(wishWords));
				
				zmitiUtil.wxConfig(document.title,document.title,url);
			},
			showInfo(){
				this.showPosterInfo = true
			},
			toggleVrNav(){//展开收起菜单
				if(this.navState === 'open'){//
					this.navState = 'close';
					//this.retractIndex++;
					var t = setInterval(()=>{
						if(this.retractIndex>=5){
							this.retractIndex=5;
							clearInterval(t);
						}
						else{
							this.retractIndex++;
						}
						console.log(this.retractIndex,this.retractIndex*1.4)

					},100)


				}else{
					this.navState = 'open';
					var t = setInterval(()=>{
						if(this.retractIndex<=0){
							this.retractIndex=0;
							clearInterval(t);
						}
						else{
							this.retractIndex--;
						}

						console.log(this.retractIndex,this.retractIndex*1.4)

					},100)

				}
			}
		},
		components:{
		},
		mounted(){
			
			var {obserable} = this;
			//this.wishWords = this.placeholders[0];

		}
	}
</script>