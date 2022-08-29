let str_mail = document.querySelector('.enter_email p');
let str_password = document.querySelector('.enter_password p');
let inputs = document.querySelectorAll('input');
function stringify(obj){
    let str = obj.innerHTML.split('');
    str = str.map(function(item,index){
        return `<span style="transition-delay:${index*50}ms;display:inline-block">${item}</span>`
    }).join('')
    obj.innerHTML = str;
}
stringify(str_mail);
stringify(str_password);

function silde(obj,distance){
    for(let span of obj.children){
        span.style.transform = `translateY(${distance})`
    }
}

inputs.forEach(function(input){
    input.addEventListener('focus',function(){
        if(input.getAttribute('data-index')==1){
            silde(str_mail,'-20px');
            str_mail.nextElementSibling.style.borderBottomColor = 'lightblue';
            str_mail.style.color = 'lightblue';
        }else{
            silde(str_password,'-20px');
            str_password.nextElementSibling.style.borderBottomColor = 'lightblue';
            str_password.style.color = 'lightblue';
        }
        
    })
    input.addEventListener('blur',function(){
        if(!input.value){
            if(input.getAttribute('data-index')==1){
                silde(str_mail,'0');
                str_mail.nextElementSibling.style.borderBottomColor = 'white';
                str_mail.style.color = 'white';
            }else{
                silde(str_password,'0');
                str_password.nextElementSibling.style.borderBottomColor = 'white';
                str_password.style.color = 'white';
            }
        }
        
    })
})
