$("#menuDropDown").toggle()
$("#menuIcon").click(function () {
    $("#menuDropDown").toggle()
})
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('bgMusic').play();
    document.removeEventListener('click', musicPlay);
}
let bgMusic = $("#bgMusic")
bgMusic[0].volume = 0.1
let logo = $("#logoSvg")
logo.hover(function () {
    logo.animate({height: "6vh", margin: "2vh"}, "slow")
    logo.animate({height: "8vh", margin: "1vh"}, "slow")

})