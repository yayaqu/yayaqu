window.onload=function(){
   var tu=getId("play");
   var a=["fh62.png","fh63.png","fh62.png","fh63.png"];
   var num=0;
   var nuu;
   
setInterval(coo,1000);

var Oul=getId("zixuntu");
var Ouli=Oul.getElementsByTagName("li");
var basewidth=Ouli[0].offsetWidth;
var Oli=getId("zixuntiao");
var OLli=Oli.getElementsByTagName("li");
 a1=setInterval(col,1000);
for(var i=0;i<OLli.length;i++){
 	OLli[i].index=i;
 	OLli[i].onmouseover=function(){
 		clearInterval(a1);
 		for(var i=0;i<OLli.length;i++){
 			Ouli[i].style.display="none";
 		}
 		Ouli[this.index].style.display="block";
 		nuu=this.index;
 	}
 	OLli[i].onmouseout=function(){
 		 a1=setInterval(col,1000);
 		for(var i=0;i<OLli.length;i++){
 			Ouli[i].style.display="block";
 		}
 	}
 }
 
function col(){
  if(nuu===Ouli.length){
  	nuu=0;
  }
  else{
  	Oul.style.left=-(basewidth*nuu)+"px";
  	//alert(Ouli[0].style.left);
  	nuu++;
  }
}
//Oli.AddEvent("click",alert(0));


function AddEvent(x,y){
   if(addEventListener()){
   	addEventListener(x,y);
   }
   else if(attachEvent()){
   	attachEvent(x,y);
   }
}



function coo(){
	if(num===a.length){
        num=0;
	}
	else{
		tu.src="images/"+a[num];
		num++;
	}
}


	
}