let container = document.querySelector('.container');
let btn = document.querySelector('#send');
let ratings = document.querySelectorAll('.rating');
let rating_boxs = document.querySelector('.rating_boxs')

let feedback = '满意';

for(let item of ratings){
    item.addEventListener('click',function(){
        if(rating_boxs.querySelector('.active')){
            rating_boxs.querySelector('.active').classList.remove('active');
        }
        this.classList.add('active');
        feedback = item.querySelector('small').innerText;
    })
}

btn.addEventListener('click', () => {
    container.innerHTML = `
    <i class="fas fa-heart" style="color: red;font-size: 30px;"></i>
        <strong class="thanks">感谢!</strong>
        <strong class="thanks">您的反馈：${feedback}</strong>
        <small class="thanks">我们会接受您的反馈并且继续努力</small>
    `
})
