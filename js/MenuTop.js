	window.onscroll=function(){ /*菜单栏悬浮置顶*/
		var Num=document.documentElement.scrollTop||document.body.scrollTop;
		var oMenuBar=document.getElementById("MenuBar");
		var oMenuBarLogo=document.getElementById("MenuBarLogo");
		var oReturnBtn=document.getElementById("ReturnTopBtn");
		if(Num>336){//满足条件时固定菜单栏，并显示返回顶部按钮
			oMenuBar.style.position="fixed";
			oMenuBar.style.top="0px";
			oMenuBar.style.paddingLeft="0px";
			oMenuBarLogo.style.display="block";
			oReturnBtn.style.display="block";
		}else{ //满足条件时取消固定菜单栏，返回顶部按钮消失
			oMenuBar.style.position="relative";
			oMenuBar.style.paddingLeft="220px";
			oMenuBarLogo.style.display="none";
			oReturnBtn.style.display="none";
		}
	};