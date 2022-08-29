let head = document.querySelector('.head');
let as = document.querySelectorAll('a');
as[0].style.color = "#c0392b"
window.addEventListener('scroll',function(){
    if(window.pageYOffset>=100){
        head.classList.add('scrolling');
    }else{
        head.classList.remove('scrolling');
    }
})