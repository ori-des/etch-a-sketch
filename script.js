let buttonPress = 0;

function createGrid(gridSize, cssClass) {
    let div;
    buttonPress++;
    if (buttonPress === 1) {
        for (let i = 0; i < gridSize; i++) {
            div = document.createElement('div');
            div.id = "test";
            div.classList.add(cssClass);
            container.appendChild(div);
        }
    } if (buttonPress > 1) {
        for (let i = 0; i < gridSize; i++) {
            div = document.getElementById('test');
            container.removeChild(div);
            div = document.createElement('div');
            div.classList.add(cssClass);
            container.appendChild(div);
        }
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

