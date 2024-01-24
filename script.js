

function createGrid(gridSize, cssClass) {
    let div;
    container.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        div = document.createElement('div');
        div.classList.add(cssClass);
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
smallGridBtn.addEventListener('click', () => createGrid(256, 'smallGrid'));
mediumGridBtn.addEventListener('click', () => createGrid(1024, 'mediumGrid'));
bigGridBtn.addEventListener('click', () => createGrid(4096, 'bigGrid'));

