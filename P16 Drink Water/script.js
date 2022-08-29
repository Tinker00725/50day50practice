let cups = document.querySelectorAll('#bottle');
let miniBox = document.querySelector('.mini-bottle');
let waterCard = document.querySelector('.watercard');
let whiteCard = document.querySelector('.big-bottle');
let bigBottle = document.querySelector('.box');

for (let i = 0; i < cups.length; i++) {
    cups[i].setAttribute('data-index', i + 1);
    cups[i].setAttribute('data-click', false);
}

for (let cup of cups) {
    cup.addEventListener('click', function () {
        let num = this.getAttribute('data-index');
        if (this.getAttribute('data-click') === 'false') {
            let waterh = num * 40.25;
            waterCard.style.height = waterh + 'px';
            whiteCard.style.height = bigBottle.offsetHeight - waterh + 'px';
            for (let i = 0; i < num; i++) {
                cups[i].classList.add('active');
                cups[i].setAttribute('data-click', true);
            }
            messageNumber(waterh);
        } else {
            if (miniBox.querySelectorAll('.active').length > num) {
                let waterh = num * 40.25;
                waterCard.style.height = waterh + 'px';
                whiteCard.style.height = bigBottle.offsetHeight - waterh + 'px';
                for (let j = num; j < cups.length; j++) {
                    cups[j].classList.remove('active');
                    cups[j].setAttribute('data-click', false);
                }
                messageNumber(waterh)

            } else {
                let waterh2 = (num - 1) * 40.25;
                waterCard.style.height = waterh2 + 'px';
                whiteCard.style.height = bigBottle.offsetHeight - waterh2 + 'px';
                this.setAttribute('data-click', false);
                this.classList.remove('active');
                if (waterh2 == 0) {
                    waterCard.innerHTML = '';
                } else {
                    messageNumber(waterh2)
                }

            }
        }

    })
}
function messageNumber(waterh) {
    let message = `${Math.ceil((waterh / bigBottle.offsetHeight) * 100) + 2}%`
    waterCard.innerHTML = message;
}
