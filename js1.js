var target = document.querySelector(".box");

target.addEventListener('mousedown', function(e){
    console.clear();
    var text = `You pressed button : ` + e.button;
    console.log(text);
});


 
var div = document.querySelector(".btn1");

function  red(){
    document.querySelector("#bo").style.background="red";
}

var di = document.querySelector(".btn2");

function black(){
    document.querySelector(".box").style.background="black";
}