window.onload = function () {
    function selector(name) {
        return document.querySelector(name);
    }
    let box = selector('.box')
    function Panel(img, p, className) {
        this.img = img;
        this.p = p;
        this.className = className
        this.creatDOM();
    }
    Panel.prototype.creatDOM = function () {
        let div = document.createElement('div');
        div.style.backgroundImage = this.img;
        let p = document.createElement('p');
        p.innerHTML = this.p;
        div.appendChild(p);
        div.className = this.className
        box.appendChild(div);
    }

    let panel1 = new Panel("url('./image/photo-1572276596237-5db2c3e16c5d.avif')",
        'Explore The World', 'panel active'),
        panel2 = new Panel("url('./image/photo-1558979158-65a1eaa08691 (1).avif')",
            'Wild Forest', 'panel '),
        panel3 = new Panel("url('./image/photo-1549880338-65ddcdfd017b.avif')",
            'Sunny Beach', 'panel '),
        panel4 = new Panel("url('./image/photo-1551009175-8a68da93d5f9.avif')",
            'City on Winter', 'panel '),
        panel5 = new Panel("url('./image/photo-1507525428034-b723cf961d3e.avif')",
            'Mountains - Clouds', 'panel ');


    const panels = document.querySelectorAll('.panel');
    console.log(panels)
    panels.forEach(function (item) {
        item.addEventListener('click', () => {
            removeAllActiveClass();
            item.classList.add('active');
        });

    })
    function removeAllActiveClass() {
        panels.forEach(function (item) {
            item.classList.remove('active');
        })
    }
}