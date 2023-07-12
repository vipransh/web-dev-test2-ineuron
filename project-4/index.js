let hamburger=document.getElementById("hamburger");
let menu=document.getElementById("menu2")

hamburger.addEventListener("click",()=>{
   if(menu.classList.contains("closeMenu")){
    menu.classList.remove("closeMenu")
    menu.classList.add("menu2")
   }
   else{
    menu.classList.remove("menu2")
    menu.classList.add("closeMenu")
   }
})