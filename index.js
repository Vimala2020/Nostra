//close of signup bar
var signup = document.querySelector(".signup")

document.getElementById("signup_cross").addEventListener("click",function(){
    signup.style.display="none"
})


var sideNavMenu=document.querySelector("title_menubar")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})


