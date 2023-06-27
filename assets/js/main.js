function changeHeight() {
document.getElementById('mymenu').style.height = "100%";

document.getElementById('birincisicim').style.height = "100vh";
document.getElementById('ikincisicim').style.height = "100vh";
document.getElementById('ucuncusicim').style.height = "100vh";
document.getElementById('dorduncusicim').style.height = "100vh";
document.getElementById('menuwrap').style.transform = "translateX(0%)";

setTimeout(function(){ document.getElementById('menulist').style.opacity = "1"; }, 500);


document.getElementById('mydotsmother').style.opacity = "0";
document.getElementById('menuclose').style.right = "0rem";
document.getElementById('menuclose').style.opacity = "1";

document.getElementById('menuicerik').style.display = "block";




}
function closeMenu() {
document.getElementById('mymenu').style.height = "0%";


document.getElementById('menulist').style.opacity = "0";
setTimeout(function(){ document.getElementById('menuwrap').style.transform = "translateX(-100%)"; }, 500);
document.getElementById('birincisicim').style.height = "0%";
document.getElementById('ikincisicim').style.height = "0%";
document.getElementById('ucuncusicim').style.height = "0%";
document.getElementById('dorduncusicim').style.height = "0%";
document.getElementById('mydotsmother').style.opacity = "1";
document.getElementById('menuclose').style.right = "-50%";
document.getElementById('menuclose').style.opacity = "0";
document.getElementById('menuicerik').style.display = "none";
document.getElementById('menuiceriknew').style.height = "0";


}



var a = 0;
var navmenu = document.getElementById("mobile-menu-content");
var floatbutton = document.getElementById("menuopenbtn");
var mobilemenu = document.getElementById("mobile-menu");


function mobileMenuopen() {

if (a == 0){
  
mobilemenu.classList.add("open");


setTimeout(function(){ navmenu.classList.remove("hide");
 }, 300);

$(window).scroll(function(){
  if($(this).scrollTop() > 100){
   mobileMenuclose(); 
  }
});

a = 1;
/*
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
   mobileMenuclose(); 
  }
});*/

}

else
{
 mobileMenuclose();
}

}

function mobileMenuclose() {
a = 0;

navmenu.classList.add("hide");
mobilemenu.classList.remove("open");

setTimeout(function(){ 
 }, 300);

}


/*
$('#mymenu
  ').click(function(){
    $(.mystringtheory).animate({height:'300'})
})*/