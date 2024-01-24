
function createSmallGrid() {
for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
    }
};

function addClass(event) {
    event.target.classList.add('sketch');
};

const smallGridBtn = document.querySelector('#small');
const mediumGridBtn = document.querySelector('#medium');
const bigGridBtn = document.querySelector('#big');
const container = document.querySelector('#container');

container.addEventListener('click', addClass);
smallGridBtn.addEventListener('click', createSmallGrid)

