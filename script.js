
function subpage() {
    window.location.href = "Elijah's subpage";
}
function differentPage() {
    window.location.href = "https://www.w3schools.com/";
}
function restyle() {
    document.getElementById("idBody").style.background = "skyblue";
}

function changeImage() {
    document.getElementById("img1").src = 'images/backrooms.webp';
}
function changeButtonText() {
    let butt = document.getElementById("button1")
    butt.value = "value thing";
    butt.innerHTML = "my text"
}
//--------------------increment----------\\
let number =0
function save(){
    const obj = {number:number}
    const json = JSON.stringify(obj);
    localStorage.setItem("Save Number", json)
}
function increment(){
    number++
}
function display(){
    let text = localStorage.getItem("Save Number")
    let obj2 = JSON.parse(text);
    document.getElementById("p2").innerHTML=obj2.number;
}
//------save and load checks and radio------\\
function saveOption1() {

    localStorage.setItem("option1", document.getElementById("check1").checked)
}

function loadOption1() {
    let tOF =localStorage.getItem("option1");
    document.getElementById("check1").innerHTML =tOF;
}
