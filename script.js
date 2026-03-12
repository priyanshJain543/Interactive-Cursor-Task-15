var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(flag){
    crsr.style.left = flag.x +"px"
    crsr.style.top = flag.y +"px"
})
