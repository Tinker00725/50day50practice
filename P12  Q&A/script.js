let btns = document.querySelectorAll('span');
for (let btn of btns) {
    btn.setAttribute('data-case', 0);
    btn.addEventListener('click', function () {
        if (btn.getAttribute('data-case') == 0) {
            this.parentElement.classList.add('active');
            this.classList.add('change');
            this.nextElementSibling.style.display = 'block';
            this.innerHTML = '×';
            this.setAttribute('data-case', 1)
        } else {
            this.parentElement.classList.remove('active');
            this.classList.remove('change');
            this.innerHTML = '↓';
            this.setAttribute('data-case', 0);
            this.nextElementSibling.style.display = 'none';
        }
    })
}