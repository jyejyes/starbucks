let slide_text= document.querySelector('.left-text');
let slide_menus= document.querySelector('.new-menus');
let coffeebtn= document.querySelector('.coffeebtn');
let noncoffeebtn= document.querySelector('.non-coffeebtn');
let storebtn= document.querySelector('.storebtn');
let coffee= document.querySelector('.coffee');
let non_coffee=document.querySelector('.non-coffee');
let store= document.querySelector('.store');

coffeebtn.addEventListener('mouseout', ()=>{
    coffee.style.display="none";   
})
coffeebtn.addEventListener('mouseover', ()=>{
    coffee.style.display='flex';
})
noncoffeebtn.addEventListener('mouseout', ()=>{
    non_coffee.style.display="none";   
})
noncoffeebtn.addEventListener('mouseover', ()=>{
    non_coffee.style.display='flex';
})
storebtn.addEventListener('mouseout', ()=>{
    store.style.display="none";   
})
storebtn.addEventListener('mouseover', ()=>{
    store.style.display='flex';
})

// 스크롤 시 글자, 그림 슬라이드 되는
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