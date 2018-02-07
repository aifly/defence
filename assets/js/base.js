var imgs = {
	play: './assets/images/play.png',
	map: './assets/images/map.png',
	pos: './assets/images/pos.png',
	mapBg: './assets/images/map-bg.jpg',
}

var posData = [

	{
		label: '最北',
		pos: {
			left: '7.7rem',
			top: '-.5rem',
		},
		name: '北极哨所（黑龙江漠河北极村）'
	}, {
		label: '最西',
		pos: {
			left: 0,
			top: '2.7rem',
		},
		name: '西极哨所（新疆克孜勒苏州乌恰县斯姆哈纳村）'
	}, {
		label: '最东',
		pos: {
			left: '9.5rem',
			top: '1rem',
		},
		name: '东极哨所（黑龙江抚远县黑瞎子岛）'
	}, {
		label: '最南',
		pos: {
			left: '5.8rem',
			top: '8.3rem',
		},
		name: '南极哨所（南海华阳礁）'
	}
];

var arr = [];
for (var attr in imgs) {
	arr.push(imgs[attr]);
}
var loading = function(arr, fn, fnEnd) {
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
}