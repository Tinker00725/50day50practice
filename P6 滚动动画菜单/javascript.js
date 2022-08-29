const box = document.querySelector('.box');
const cards = document.querySelectorAll('.card');
for(let i=0;i<3;i++){
    box.children[i].classList.add('active');
};
let count = 2;
window.addEventListener('scroll',function(){
    let Top_distance = window.pageYOffset + window.innerHeight;
    console.log(Top_distance)//窗口内容区域的高度innerHeight
    for(let card of cards){
        if(Top_distance >= card.offsetTop+200){
            card.classList.add('active')
        }else{
            card.classList.remove('active')
        }
    }
})