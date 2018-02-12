var imgs = {
	play: './assets/images/play.png',
	map: './assets/images/map.png',
	pos: './assets/images/pos.png',
	title: './assets/images/title.png',
	mapBg: './assets/images/map-bg.jpg',
	beijiImg: './assets/images/beiji.jpg',
	dongjiImg: './assets/images/dongji.jpg',
	xijiImg: './assets/images/xiji.jpg',
	alashankouImg: './assets/images/alashankou.jpg',
	heweitanImg: './assets/images/heweitan.jpg',
	sanjiaoshanImg: './assets/images/sanjiaoshan.jpg',
	zhanniangsheImg: './assets/images/zhanniangshe.jpg',
	nanhaihuayangjiaoImg: './assets/images/nanhaihuayangjiao.jpg',

	defence: './assets/images/defence.png',
	uploadBg:'./assets/images/upload-bg.jpg',
	upload:'./assets/images/upload.png',
	create:'./assets/images/create.png',
	shareBg:'./assets/images/create-bg.png',
	picTitle:'./assets/images/pic-title.jpg',
	shareBtnBg:'./assets/images/share-bg.png',
	corner1:'./assets/images/corner1.png',
	back:'./assets/images/back.png',
	arrow:'./assets/images/arrow.png',
	xijiSoldier:'./assets/images/nan-xiji.jpg',
	heweitanSoldier:'./assets/images/nan-heweitan.jpg',
	sanjiaoshanSoldier:'./assets/images/nan-sanjiaoshan.jpg',
	zhanniangsheSoldier:'./assets/images/nan-zhanniangshe.jpg',
	dongjiSoldier:'./assets/images/nan-dongji.jpg',


	title001:'./assets/images/001.png',
	title002:'./assets/images/002.png',
	title003:'./assets/images/003.png',
	title004:'./assets/images/004.png',
	title005:'./assets/images/005.png',
	title006:'./assets/images/006.png',
	title007:'./assets/images/007.png',
	title008:'./assets/images/008.png',
}

var posData = [

	{
		label: '最北',
		isRight:true,
		pos: {
			left: '7.7rem',
			top: '-.5rem',
		},
		img:imgs.title002,
		merge:[
			{//女的
				id:6440,
				direction:-1,
				appid:'1106658093',
			},
			{//男的
				id:6448,
				direction:-1,//0:左 ; 1: 右 ; -1无
				appid:'1106658091'
			}
		],

		name: '北极哨所',
		titleStyle:{
			left:'5.4rem',
			top:"-.7rem"
		},
		title: '北极哨所（黑龙江漠河北极村）',
		content:[
			'北极哨所位于黑龙江省大兴安岭地区漠河县北极镇北极村。驻地环境艰苦，气候恶劣，年平均气温在零下5.5度，最低气温曾达零下52.3度，每年无霜期仅为80天。',
			'自1965年3月建哨以来，哨所官兵始终继承和发扬“身处极地、挑战极寒、追求极致、打造极品”的“四极”拼搏精神，多次荣立集体二等功、三等功。',
		],
		bgStyle:{
			background:'url('+imgs.beijiImg+') no-repeat center top',
			backgroundSize:'cover'
		},

	}, {
		label: '最西',
		pos: {
			left: 0,
			top: '2.7rem',
		},
		img:imgs.title005,
		merge:[
			{//女的
				id:6445,
				direction:1,
				appid:'1106658093',
				img:imgs.xijiSoldier

			},
			{//男的
				id:6453,
				direction:1,//0:左 ; 1: 右 ; -1无
				appid:'1106658091',
				img:imgs.xijiSoldier
			}
		],
		name: '西极哨所',
		titleStyle:{
			left:'.7rem',
			top:'2.7rem'
		},
		title: '西极哨所（新疆克孜勒苏州乌恰县斯姆哈纳村）',
		content:[
			'坐落在帕米尔高原上的斯姆哈纳哨所是中国送走最后一缕阳光的地方，被誉为“西陲第一哨”。哨所驻地环境艰苦，守卫的边防线全在崇山峻岭中，常年气候变化无常。',
			'建哨以来，一代代官兵用忠诚和信仰捍卫祖国西部边关的安全与稳定，先后20多次被表彰为先进单位和标兵连队，被上级授予“西陲戍边模范连”荣誉称号。',
		],
		bgStyle:{
			backgroundSize:'url('+imgs.xijiImg+') no-repeat center top',
			backgroundSize:'cover'
		},
	}, {
		label: '最东',
		isRight:true,
		pos: {
			left: '9.5rem',
			top: '1rem',
		},
		img:imgs.title001,
		merge:[
			{//女的
				id:6441,
				direction:1,
				appid:'1106658093',
				img:imgs.dongjiSoldier
			},
			{//男的
				id:6449,
				direction:1,//0:左 ; 1: 右 ; -1无
				appid:'1106658091',
				img:imgs.dongjiSoldier
			}
		],
		name: '东极哨所',
		titleStyle:{
			left:'7.2rem',
			top:'.8rem'
		},
		title: '东极哨所（黑龙江抚远县黑瞎子岛）',
		content:[
			'东极哨所位于中国陆地版图最东端的黑瞎子岛，是最早把太阳迎进祖国的哨所。岛上沼泽密布、河流纵横，平均海拔37米，夏季潮热短暂，冬季严寒漫长，最低温度达零下46度。2008年10月14日，中国正式对黑瞎子岛行使主权。',
			'黑瞎子岛厚重的历史，特殊的位置，让哨所官兵对脚下守卫的土地有着深沉的热爱，每一名官兵都立志于做无愧朝阳的东极卫士！',
		],
		bgStyle:{
			background:'url('+imgs.dongjiImg+') no-repeat center top',
			backgroundSize:'cover'
		},
	}, {
		label: '最南',
		isRight:true,
		pos: {
			left: '5.8rem',
			top: '8.3rem',
		},
		img:imgs.title008,
		merge:[
			{//女的
				id:6443,
				direction:-1,
				appid:'1106658093'
			},
			{//男的
				id:6451,
				direction:-1,//0:左 ; 1: 右 ; -1无
				appid:'1106658091'
			}
		],
		name: '南极哨所',
		titleStyle:{
			left:'3.6rem',
			top:'8.2rem'
		},
		title: '南极哨所（南海华阳礁）',
		content:[
			'华阳礁地处中国南沙驻守岛礁最南端，孤礁悬外，海空情况复杂、战备任务艰巨，被誉为“南海第一哨”。',
			'劈波斩浪三千里，守礁卫国写忠诚。近30年来，守礁官兵克服艰苦恶劣的自然环境，坚定报国信念、矢志精武强能，牢牢守住了祖国的南大门，傲然挺立在万里海疆的最前沿。',
		],
		bgStyle:{
			background:'url('+imgs.nanhaihuayangjiaoImg+') no-repeat center top',
			backgroundSize:'cover'
		},

	}, {
		label: '最冷',
		pos: {
			left: '2.2rem',
			top: '1rem',
		},
		img:imgs.title006,
		merge:[
			{//女的
				id:6442,
				direction:0,
				appid:'1106658093',
				img:imgs.heweitanSoldier
			},
			{//男的
				id:6450,
				direction:0,//0:左 ; 1: 右 ; -1无
				appid:'1106658091',
				img:imgs.heweitanSoldier
			}
		],
		name: '最冷哨所',
		titleStyle:{
			left:'2.9rem',
			top:'.9rem'
		},
		title: '最冷哨所（新疆阿勒泰红山嘴）',
		content:[
			'河尾滩边防连位于喀喇昆仑山脉中段，海拔5418米，为我军海拔最高的驻兵点。这里四季飘雪，终年冰封，高寒、缺氧、低压，官兵执勤、训练和生活条件十分艰苦。',
			'自组建以来，哨所官兵以“海拔高斗志更高，缺氧不缺精神”的革命意志，在寸草不生的地方扎下了跟、站住了脚，多次立功受奖，在雪域高原向祖国和人民交上了一份满意的答卷。',
		],
		bgStyle:{
			background:'url('+imgs.heweitanImg+') no-repeat center top',
			backgroundSize:'cover'
		},
	}, {
		label: '最暖',
		isRight:true,
		pos: {
			left: '7.1rem',
			top: '1rem',
		},
		img:imgs.title003,
		merge:[
			{//女的
				id:6444,
				direction:0,
				appid:'1106658093',
				img:imgs.sanjiaoshanSoldier
			},
			{//男的
				id:6452,
				direction:0,//0:左 ; 1: 右 ; -1无
				appid:'1106658091',
				img:imgs.sanjiaoshanSoldier
			}
		],
		name: '暖心哨所',
		titleStyle:{
			left:'4.9rem',
			top:'.9rem'
		},
		title: '最“暖”哨所（内蒙古阿尔山市三角山）',
		content:[
			'三角山哨所地处大兴安岭西麓，担负中蒙边界阿尔山－松贝尔口岸地区的执勤守卫任务。这里冬季漫长，冰冻期长达7个月，最低气温可达零下50多摄氏度。',
			'历任官兵牢记使命、戍边备战，成为守卫一方、团结一方、稳定一方的“北疆卫士”。2014年1月26日，习主席顶着凛冽的寒风，沿着58级陡峭的台阶来到哨所，在观察登记本上签下名字，跟官兵们一起执勤站岗。'
		],
		bgStyle:{
			background:'url('+imgs.sanjiaoshanImg+') no-repeat center top',
			backgroundSize:'cover'
		},
	}, {
		label: '最险',
		pos: {
			left: '3rem',
			top: '4.9rem',
		},
		merge:[
			{//女的
				id:6446,
				direction:0,
				appid:'1106658093',
				img:imgs.zhanniangsheSoldier
			},
			{//男的
				id:6454,
				direction:0,//0:左 ; 1: 右 ; -1无
				appid:'1106658091',
				img:imgs.zhanniangsheSoldier
			}
		],
		img:imgs.title007,
		name: '最险哨所',
		titleStyle:{
			left:'3.8rem',
			top:'4.7rem'
		},
		title: '最险哨所（西藏亚东县詹）',
		content:[
			'位于西藏亚东边防的詹娘舍哨所，海拔4655米，建在雪山之巅，四周都是接近垂直的悬崖峭壁，是名副其实的“云端哨所”，一年中大雪封山期长达7个月，6级以上的大风一刮就是300天，最低温度达零下40摄氏度。',
			'这里还是著名的雷暴区，每天下午3点准时打雷。用水靠天，物资靠背，是哨所官兵生活的真实写照。海拔高，使命更高。一代代守防官兵坚守岗位、挑战极限，不断书写着生命的高度。',
		],
		bgStyle:{
			background:'url('+imgs.zhanniangsheImg+') no-repeat center top',
			backgroundSize:'cover'
		},
	}, {
		label: '最险',
		pos: {
			left: '.9rem',
			top: '3.9rem',
		},
		merge:[
			{//女的
				id:6439,
				direction:-1,
				appid:'1106658093',
			},
			{//男的
				id:6447,
				direction:-1,//0:左 ; 1: 右 ; -1无
				appid:'1106658091',
			}
		],
		img:imgs.title004,
		name: '最高哨所',
		titleStyle:{
			left:'1.6rem',
			top:'3.9rem'
		},
		title: '最高哨所（新疆和田皮山县赛图拉镇神仙湾）',
		content:[
			'阿拉山口哨所位于新疆博尔塔拉蒙古自治州境内，这里每年八级以上大风刮160多天，是有名的“世界级”大风口，哨所被称为“风口第一哨”。',
			'1962年8月，首任站长吴光胜带领17名官兵，凭着“三峰骆驼一口锅，顶风冒雪睡地窝”的毅力，在石头缝里建起了第一座边防站。如今，官兵驻守的阿拉山口口岸已成为新亚欧大陆桥中国段的西桥头堡。',
		],
		bgStyle:{
			background:'url('+imgs.alashankouImg+') no-repeat center top',
			backgroundSize:'cover'
		},
	}
];


posData.forEach(function(item,i){
	item.key = i;
})
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