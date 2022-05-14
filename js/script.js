let btn = document.querySelector(".header-btn")
btn.addEventListener("click",() => {
    document.querySelector(".header-gen").style.display = "block"
})


let btnClose = document.querySelector(".header-block__close")
btnClose.addEventListener("click",() => {
    document.querySelector(".header-gen").style.display = "none"
})