function selector(name){
    return document.querySelector(name);
}
let circle = selector('.circle');
let container = selector('.container');
let side_nav = selector('.menu');
let flag = false;
for(let li of side_nav.children){
    li.addEventListener('mouseover',function(){
        this.style.color = 'pink';
    });
    li.addEventListener('mouseout',function(){
        this.style.color = 'white'
    })
}
circle.addEventListener('click',function(){
    if(flag == false){
    container.classList.remove('round_end')
    this.classList.add('change');
    container.classList.add('round');

    // 侧边栏出现
    side_nav.style.left = 15 +'px';

    flag = true;

    }else{
    console.log(111)
    this.classList.remove('change');
    container.classList.remove('round');
    container.classList.add('round_end')
    
    //侧边栏消失
    side_nav.style.left = -160+'px'

    flag = false;
    }



})