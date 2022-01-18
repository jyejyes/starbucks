let slide_text= document.querySelector('.left-text');
let slide_menus= document.querySelector('.new-menus');
window.addEventListener('scroll', ()=>{
    let scrollY_position= window.scrollY;
    
    if(scrollY_position > 200){
        slide_text.style.animation='disappear 1.5s ease-out forwards';
    }else{
        slide_text.style.animation='appear 1.5s ease-out';
    }

    if(scrollY_position > 350){
        slide_menus.style.animation='menus-appear 1.5s ease-out';
    }else{
        slide_menus.style.animation='menus-disappear 1s ease-out forwards';
    }
})