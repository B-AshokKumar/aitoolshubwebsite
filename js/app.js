document
.getElementById("searchBtn")
.addEventListener("click",function(){

let keyword=document
.querySelector("input")
.value;

if(keyword==""){

alert("Please enter AI tool name.");

return;

}

alert("Searching for: "+keyword);

});

const menuBtn=document.getElementById("menuBtn");

const nav=document.getElementById("navMenu");

menuBtn.onclick=function(){

nav.classList.toggle("show");

}
