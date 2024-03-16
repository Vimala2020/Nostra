//close of signup bar
var signup = document.querySelector(".signup")

document.getElementById("signup_cross").addEventListener("click",function(){
    signup.style.display="none"
})
 var imgslider =document.getElementById("img-slider");
 function handleClick(direction){
    imgslider.scrollLeft=direction == 'right'? imgslider.scrollLeft + 300 : imgslider.scrollLeft - 100;
 }          



