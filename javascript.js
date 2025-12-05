// I learned localStorage from https://www.w3schools.com/jsref/prop_win_localstorage.asp
if(!localStorage.getItem("mode")){
    localStorage.setItem("mode", "light");
}
let styleList = ["#f5f5f5","black","blue","purple","honeydew","rgb(153, 0, 115)"];

if(!localStorage.getItem("size")){
    localStorage.setItem("size", "default");
}

window.addEventListener('DOMContentLoaded', start);

function start(){
    if(localStorage.getItem("mode") == "dark"){
        styleList = ["#4c4952","#d3cbe4ff","#93a5ffff","#e47affff","#1c3b00ff","#fffb00ff"];
    } else{
        styleList = ["#f5f5f5","black","blue","purple","honeydew","rgb(153, 0, 115)"];
    }

    document.body.style.setProperty("--main", styleList[0]);
    document.body.style.setProperty("--text", styleList[1]);
    document.body.style.setProperty("--linkun", styleList[2]);
    document.body.style.setProperty("--link", styleList[3]);
    document.body.style.setProperty("--secondary", styleList[4]);
    document.body.style.setProperty("--rev", styleList[5]);


    let posters = document.querySelectorAll(".poster");
    posters.forEach(el => el.addEventListener("click", zoom));


    if(localStorage.getItem("size") == "large"){
        document.body.style.setProperty("--size", "25px");
    } else{
        document.body.style.setProperty("--size", "18px");
    }
}

function dark(){
    if(localStorage.getItem("mode") == "light"){
       localStorage.setItem("mode", "dark"); 
       alert("Dark-Mode Activated");
    } else{
        localStorage.setItem("mode", "light");
        alert("Light-Mode Activated");
    }
    start();
}

function repage(){
    let page = (Math.floor(Math.random() * 4))
    for(i = 0; i < 4; i++){
        if(page == 0){
            window.location.href = "bg3.html";
        } else if(page == 1){
            window.location.href = "fire.html";
        } else if(page == 2){
            window.location.href = "mine.html";
        } else if(page == 3){
            window.location.href = "under.html";
        }
    }
}

function zoom(){
        this.style.width = "750px";
        this.style.height = "525px";
        this.style.paddingLeft = "30%";
}

function textSize(){
    if(localStorage.getItem("size") == "default"){
        localStorage.setItem("size", "large");
    } else{
        localStorage.setItem("size", "default");
    }
    start();
}