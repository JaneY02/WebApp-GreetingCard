window.onload = function() {
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");

	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

	// 当音乐播放完毕，自动停止光盘旋转效果(添加监听事件)
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);

	// 点击音乐图标控制音乐播放
	//（鼠标事件）
	// music.onclick = function(){
	// 	if(audio.paused) {
	// 		audio.play();
	// 		this.setAttribute("class","play");//效果不好看
	// 		// this.style.animationPlayState = "running";//兼容性差
	// 	}else {
	// 		audio.pause();
	// 		this.setAttribute("class","");
	// 		// this.style.animationPlayState = "paused";
	// 	}
	// }
	music.addEventListener("touchstart",function(event){
		if(audio.paused) {
			audio.play();
			this.setAttribute("class","play");//效果不好看
			// this.style.animationPlayState = "running";//兼容性差
		}else {
			audio.pause();
			this.setAttribute("class","");
			// this.style.animationPlayState = "paused";
		}
	},false);

	// 实现页面过渡跳转
	page1.addEventListener("touchstart",function(){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top 	= "100%";

		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},5500);
	},false);
















}
