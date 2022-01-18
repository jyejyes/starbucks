let slide_text= document.querySelector('.left-text');

window.addEventListener('scroll', ()=>{
    let scrollY_position= window.scrollY;
    
    if(scrollY_position > 200){
        slide_text.style.animation='disapper 1.5s ease-out forwards';
    }else{
        slide_text.style.animation='apper 1.5s ease-out';
    }
})