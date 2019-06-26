
window.onload = function(){
	fnTime();   //显示系统时间
	setInterval(fnTime,1000); //API系统函数
	function fnTime(){
		var myTime = new Date();
		var iHuors = myTime.getHours();
		var iMin = myTime.getMinutes();
		var iSec = myTime.getSeconds();
		var Str;
		var oTime = document.getElementById("system-time");
		var oWea = document.getElementById("Weather");
		Str =twoNum(iHuors)+':'+twoNum(iMin)+':'+twoNum(iSec);
		oTime.innerHTML = Str;
		//StrcharAt(0);
		if(iHuors>=7 && iHuors<19){ //根据系统时间，更改天气图片
		oWea.src="images/Top-navigation/weather01.png";
		}else{
		oWea.src="images/Top-navigation/weather02.png";
		}
	}; 
	function twoNum(num){
		return num<10? '0'+num:num;
	};
	
	//搜索框样式
	var oSeaImg = document.getElementById("search-images-top");
	var oSeaUl = document.getElementById("search-images-ul");
	var oSeaLi = oSeaUl.getElementsByTagName("img");
	var n,i=1;
	var oSeaBox = document.getElementById("Search-box");
	var oLine = document.getElementById("line");
	var oSbt = document.getElementById("Submit");
	oSeaImg.onclick=function(){
		if(oSeaUl.style.display=="none")i=1;
		oLine.style.display="block";
		oSeaBox.style.display="none";
		oSbt.style.left="396px";
		if(i==1){oSeaUl.style.display="block";i=0;return;}
		if(i==0){oSeaUl.style.display="none";i=1;return;}
	};
	oSeaLi[0].onclick=function(){ //更换图片
		n=0;
		n=oSeaLi[0].src;
		oSeaLi[0].src=oSeaImg.src;
		oSeaImg.src=n;
		oSeaUl.style.display="none";
	};
	oSeaLi[1].onclick=function(){
		n=0;
		n=oSeaLi[1].src;
		oSeaLi[1].src=oSeaImg.src;
		oSeaImg.src=n;
		oSeaUl.style.display="none";
	};
	oSeaLi[2].onclick=function(){
		n=0;
		n=oSeaLi[2].src;
		oSeaLi[2].src=oSeaImg.src;
		oSeaImg.src=n;
		oSeaUl.style.display="none";
	};
	oSeaLi[3].onclick=function(){
		n=0;
		n=oSeaLi[3].src;
		oSeaLi[3].src=oSeaImg.src;
		oSeaImg.src=n;
		oSeaUl.style.display="none";
	};
	oSeaBox.onclick=function(){
		oSeaUl.style.display="none";
	};
	oLine.onclick=function(){
		oLine.style.display="none";
		oSeaBox.style.display="block";
		oSbt.style.left="844px";
		oSbt.style.cursor="pointer";
	};
	
	//添加收藏时调用的函数
	var oFrameP = document.getElementById("ProjectileFrameP");
	var oFrame = document.getElementById("ProjectileFrame");
	var oFrameCover = document.getElementById("ProjectileFrameCover");
	var oColAdd = document.getElementById("Top03CollectAdd");
	var oFrameBtn = document.getElementById("ProjectileFrameBtn");
	var oFrame1 = document.getElementById("ProjectileFrame1");
	var oFrame2 = document.getElementById("ProjectileFrame2");
	var oCtmLi = document.getElementById("CustomLi");
	var oCtmImg = document.getElementById("CustomImg");
	var oCtmSpan = document.getElementById("CustomSpan");
	var oCtmA = document.getElementById("CustomA");
	var oMenuBar = document.getElementById("MenuBar");
	var oBody = document.getElementById("Body");
	oColAdd.onclick=function(){
		oFrame.style.display="block";
		oFrameCover.style.display="block";
		oMenuBar.style.display="none";
		oBody.style.overflow="hidden";
	}
	oFrameP.onclick= function (){
		oFrame.style.display="none";
		oFrameCover.style.display="none";
		oMenuBar.style.display="block";
		oBody.style.overflowY="scroll";
	}
	oFrameBtn.onclick=function(){
		oFrame.style.display="none";
		oFrameCover.style.display="none";
		oCtmLi.style.display="inline-block";
		oMenuBar.style.display="block";
		oCtmA.href=oFrame1.value; //获取输入的网址并赋值给a标签
		oFrame1.value=null;
		oFrame2.value=null;
		oBody.style.overflowY="scroll";
	}
};