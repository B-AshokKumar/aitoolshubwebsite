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
