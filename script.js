
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
    var butt = document.getElementById("button1")
    butt.value = "value thing";
    butt.innerHTML = "my text"
}