// I learned localStorage from https://www.w3schools.com/jsref/prop_win_localstorage.asp
if(!localStorage.getItem("mode")){
    localStorage.setItem("mode", "light");
}
let styleList = ["#4c4952","","","","",""]
window.addEventListener('DOMContentLoaded', start);

function start(){
    if(localStorage.getItem("mode") === "dark"){
        document.body.style.setProperty("--main", "#4c4952");
        document.body.style.setProperty("--text", "#d3cbe4ff");
        document.body.style.setProperty("--linkun", "#93a5ffff");
        document.body.style.setProperty("--link", "#e47affff");
        document.body.style.setProperty("--secondary", "#1c3b00ff");
        document.body.style.setProperty("--rev", "#fffb00ff");
    } else{
        document.body.style.setProperty("--main", "#f5f5f5");
        document.body.style.setProperty("--text", "black");
        document.body.style.setProperty("--linkun", "blue");
        document.body.style.setProperty("--link", "purple");
        document.body.style.setProperty("--secondary", "honeydew");
        document.body.style.setProperty("--rev", "rgb(153, 0, 115)");
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
