//left  menu bar 
var open = document.getElementById("open");
var close = document.getElementById("close");
var sidemenu = document.getElementById("sidemenu");
var svgedit = document.getElementById("svgedit");
// open
open.addEventListener("click", function(){
    svgedit.style.left = "0px";
    svgedit.style.transition = "ease-in-out 0.5s";
    open.style.left = "100px";
    sidemenu.style.left = "0px";
    open.style.display = "none";
    close.style.left = "225px";
    close.classList.add("closesmoth");
    close.style.display = "block";
    
});
// close
close.addEventListener("click", function(){
    svgedit.style.left = "-220px";
    sidemenu.style.left = "-220px";
    close.style.display = "none";
    open.style.left = "5px";
    open.classList.add("closesmoth");
    open.style.display = "block";
    
});
//-------------------------------
// cancel
var cancel = document.getElementById("cancel");
var textarea = document.getElementById("textarea");
// cleartooth
var cleartooth = document.getElementById("cleartooth");


cancel.addEventListener("click",function cancelBtn() {
    textarea.value = "";
});

var tooth_11 = document.getElementById("tooth_11");
var tooth_12 = document.getElementById("tooth_12");

tooth_11.addEventListener("click",function () {  
        tooth_11.style.fill="#245a0b";
});
tooth_12.addEventListener("click",function () {  
    tooth_12.style.fill="#245a0b";
});
// tooth_11.addEventListener("mouseover",function () {  
//     tooth_11.style.fill="white";
// });
cleartooth.addEventListener("click",function () {  
    tooth_11.style.fill="white";
    tooth_12.style.fill="white";
});