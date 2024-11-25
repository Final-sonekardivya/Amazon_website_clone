let slideBtnleft=document.getElementById("slide-btn-left");
let slideBtnRight=document.getElementById("slide-btn-right");
let Imgitem=document.querySelectorAll(".image-item");
 
console.log(Imgitem.length-1);

let starts = 0 ;
let endslider=(Imgitem.length-1) * 100;
slideBtnleft.addEventListener("click",()=>{
    if(starts < 0){
        starts = starts + 100;
    }

    Imgitem.forEach(element =>{
    element.style.transform=`translateX(${starts}%)`;
    }) 
});
slideBtnRight.addEventListener("click",()=>{
    if(starts >= -endslider+100){
        starts = starts - 100;
    }

    Imgitem.forEach(element =>{
    element.style.transform=`translateX(${starts}%)`;
    })   
});

/************slidebar Navigation*********** **/
const sidebarNavigationEl=document.getElementById("slide-bar_show");
const sidebarOpenNavigationEl=document.getElementById("open-nav-slidebar");
const slidebarCloseNavigationEl=document.getElementById("slidebar-navigation-close");


sidebarOpenNavigationEl.addEventListener("click",()=>{
    sidebarNavigationEl.classList.toggle("slide-bar_show")
})
slidebarCloseNavigationEl.addEventListener("click",()=>{
    
    sidebarNavigationEl.classList.toggle("slide-bar_show")

})
