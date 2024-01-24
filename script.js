

function createGrid(gridSize, cssClass) {
    container.innerHTML = '';
    let div;
    for (let i = 0; i < gridSize; i++) {
        div = document.createElement('div');
        div.id = "test";
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

