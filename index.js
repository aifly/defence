import Vue from "vue";
import Index from './components/index/index';
import Obserable from './components/lib/obserable';
import imgs from './components/lib/assets'
import zmitiUtil from './components/lib/util.js'
import $ from 'jquery';
import './components/lib/touch.js';
var obserable = new Obserable();


//Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
	data: {
		obserable,
		rotate: false,
		imgs,
		showMask: false,
		viewH: document.documentElement.clientHeight,
		isShare: false,
		show: false,
		username: '',
		wish: '',
	},
	el: '#app',
	template: `<div>
		<Index  :obserable='obserable'></Index>
	</div>`,
	methods: {

		loading: function(arr, fn, fnEnd) {
			var len = arr.length;
			var count = 0;
			var i = 0;

			function loadimg() {
				if (i === len) {
					return;
				}
				var img = new Image();
				img.onload = img.onerror = function() {
					count++;
					if (i < len - 1) {
						i++;
						loadimg();
						fn && fn(i / (len - 1), img.src);
					} else {
						fnEnd && fnEnd(img.src);
					}
				};
				img.src = arr[i];
			}
			loadimg();
		},
		toggleMusic() {
			var music = this.$refs['audio'];
			music[music.paused ? 'play' : 'pause']()
		},
		updatePv() {
			$.ajax({
				url: window.protocol + '//api.zmiti.com/v2/custom/update_pvnum/',
				type: 'post',
				data: {
					//isrand: 0,
					customid: 36
				}
			});
		}
	},
	components: {
		Index,
	},
	mounted() {


		var username = (zmitiUtil.getQueryString('username')),
			wish = (zmitiUtil.getQueryString('wish'));

		this.isShare = (username && wish);

		this.show = true;

		this.username = decodeURI(username);
		this.wish = decodeURI(wish);

		if (this.isShare) {

			setTimeout(() => {
				obserable.trigger({
					type: 'getWish',
					data: {
						username: this.username,
						wish: this.wish
					}
				})
				obserable.trigger({
					type: 'showPoster'
				})
			}, 10)
		}



		/*this.loading(arr, (s) => {
			obserable.trigger({
				type: 'loading',
				data: s * 100 | 0
			})
		}, () => {
			obserable.trigger({
				type: 'loaded'
			})
		})*/

		obserable.on('showShare', () => {
			this.showMask = true;
		})

		return;
		$(this.$refs['audio']).on('play', () => {
			this.rotate = true;
		}).on('pause', () => {
			this.rotate = false;
		});


		this.$refs['audio'].volume = .3;
		this.$refs['audio'].play();
		var s = this;
		document.addEventListener("WeixinJSBridgeReady", function() {
			WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
				s.$refs['audio'].play();
			});
		}, false)

		obserable.on('toggleBgMusic', (data) => {
			this.$refs['audio'][data ? 'play' : 'pause']();
		});

		this.updatePv();
	}
})