!(function(win, doc) {
	var logo = "我是一个俗人 ,,,,看山是山 ,,,,看海是海 ,,,,看花是花 ,,,,唯独见了你 ,,,,心潮开始翻涌 ,,,,山岳百川开始震荡 ,,,,满天星光开始闪烁 ,,,,无需你一声令下 ,,,,我和天地间万物 ,,,,便通通奔向你";
	    var ptext = document.getElementsByClassName('text-index')[0];
	    var flag = 0;
	    var show = true;
	    var mouse = document.createElement("span");
	    mouse.style.position='absolute';
	    mouse.style.left ='0';
	    mouse.style.top ='0';
	    mouse.innerText = "__"
	    ptext.append(mouse);
	    var timer = setInterval(function(){
	        if(flag<logo.length){
	            if(logo.charAt(flag)!=","){
	                mouse.style.left =  parseInt(mouse.style.left) + "px"
	            }
	
	            if(logo.charAt(flag) == " "){
	                mouse.style.left = 0 + "px"
	                mouse.style.top = 29 + parseInt(mouse.style.top)+"px"
	                ptext.appendChild(document.createElement("br"))
	            }else if(logo.charAt(flag) == ","){
	                if(!show){
	                    mouse.style.display = "inline-block";
	                }else{
	                    mouse.style.display = "none";
	                }
	                show =!show;
	            }else{
	                mouse.style.left = 20 +parseInt(mouse.style.left) + "px"
	                var span = document.createElement("span");
	                span.innerText = logo.charAt(flag);
	                ptext.append(span)
	            }
	
	            flag++;
	
	
	        }else{
	            clear();
	            mouse.style.display='none'
	        }
	    },150)
	    function clear(){
	        clearInterval(timer)
	    }
})(window, document);
