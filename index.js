class Pomo {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.baseY =  Math.random() * 650;
        this.el = document.createElement('img');
        this.el.src = 'imgs/pomo.gif';
        this.el.alt = 'Pomo';

        this.node = document.querySelector('#pomos').appendChild(this.el);
    }

    move() {
        this.x += 6;
        this.y = this.baseY + Math.cos(this.x) * 20;

        if (this.x >= window.innerWidth){
            this.x = 0;
            this.baseY = Math.random() * 650;
        }
    
        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

let pomo = [new Pomo()];

setInterval(() => {
    for(let i=0; i<pomo.length; i++){
        pomo[i].move();
    }
}, 33);

let botão1 = document.querySelector("#bt1");
botão1.addEventListener('click', () => {
    pomo.push(new Pomo)
});

let botão2 = document.querySelector("#bt2");
botão2.addEventListener('click', () => {
    pomo.pop().node.remove();
});