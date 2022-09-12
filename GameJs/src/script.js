let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i=1; i<101; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');
let x =1,
    y = 10;

for (let i=0; i<excel.length; i++) {
    if (x>10){
        x=1;
        y--;
    }
    excel[i].setAttribute('posX', x);
    excel[x].setAttribute('pusY', y);
    x++;
}

function generateSnake() {
    let posX = Math.round(Math.random() * (10-1) + 1);
    let posY = Math.round(Math.random() * (10-1) + 1);
    return [posX, posY];
}

let coordinates = generateSnake();
let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]')];

console.log(coordinates);
console.log(snakeBody);

