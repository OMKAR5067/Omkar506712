const buttons = document.querySelectorAll(".btn")

buttons.forEach(btn => {

btn.addEventListener("mouseenter",()=>{

btn.style.letterSpacing="1px"

})

btn.addEventListener("mouseleave",()=>{

btn.style.letterSpacing="0px"

})

})