let nav=false;

const handleClick=()=>{
    const menuLinks=document.querySelector(".menu-links");
    const line1=document.querySelector("#line1");
    const line2=document.querySelector("#line2");
    const background=document.querySelector(".background");

    if(nav){
        menuLinks.style.cssText="right: 70%; transition: all 0.5s;";
        line1.style.cssText="transform: rotate(0deg);";      //Rotating lines to original position      
        line2.style.cssText="transform: rotate(0deg);";      //Rotating lines to original position
        background.style.cssText="transform: scale(0);";
        nav=!nav;
    }
    else{
        menuLinks.style.cssText="right: 0; transition: all 0.5s;";
        line1.style.cssText="transform: rotate(45deg);";               //Rotating lines form a X
        line2.style.cssText="transform: rotate(135deg); margin-top: -7px;";               //Rotating lines form a X
        background.style.cssText="transform: scale(50);";
        nav=!nav;
    }
};