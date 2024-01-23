const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
}

// const grid = document.querySelector('.grid');

// for (let i = 0; i < 15; i++) {
//   let div = document.createElement('div');
//   grid.appendChild(div);
//   div.textContent = "Test";
// }