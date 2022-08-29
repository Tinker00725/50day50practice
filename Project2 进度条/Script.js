window.onload = function () {
    function selector(name) {
        return document.querySelector(name);
    }
    let prev = selector('.btn>.prev'),
        next = selector('.btn>.next'),
        change = selector('.change'),
        button = selector('button');
    let actives = document.querySelectorAll('.active')
    let circles = document.querySelectorAll('.circle');
    let currentActive = 1;

    function update() {
        actives = document.querySelectorAll('.active')
        if (currentActive == 1) {
            prev.disabled = true
        } else if (currentActive == 4) {
            next.disabled = true
        } else {
            prev.disabled = false;
            next.disabled = false;
        }
    }

    next.onclick = function () {
        (!(currentActive == 4)) ? currentActive++ : currentActive == 4;
        if (actives.length < currentActive) {
            for (let i = 1; i <= currentActive - 1; i++) {
                circles[i].classList.add('active');
            }
        }
        update();
        change.style.width = (actives.length - 1) / (circles.length - 1) * 400 + 'px';
    }

    prev.onclick = function () {
        (!(currentActive == 1)) ? currentActive-- : currentActive == 1;
        if (actives.length > currentActive) {
            for (let i = 3; i >= currentActive; i--) {
                circles[i].classList.remove('active');
            }
        }
        update();
        change.style.width = (actives.length - 1) / (circles.length - 1) * 400 + 'px';
    }

}