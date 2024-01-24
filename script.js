const container = document.querySelector('#container');

 function createSmallGrid() {
for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
    }
};

function addClass(event) {
    event.target.classList.add('sketch');
}

container.addEventListener('click', addClass);
