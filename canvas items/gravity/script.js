// -------------------------------- Resize canvas --------------------------------
const canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

var mouse = { // Задаем объкт с координатами мыши
    x: innerWidth / 2,
    y: innerHeight / 2
}



var gravity = 0.08;
var friction = 0.812;

window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.clientX; 
        mouse.y = event.clientY;
})


window.addEventListener('resize', 
    function() {
        canvas.width = window.innerWidth; 
        canvas.height = window.innerHeight; // Увеличивает или уменьшает размер canvas соразмерно размерам окна браузера
        init();
    })


addEventListener("click", function() {
    init();
})

// ------------------------------- Utitlty functions --------------------------------

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var colors = [
    '#843A27',
    '#EA7D61',
    '#F2D194',
    '#A67951',
    '#734E40',
    '#000123',
];

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}
// ------------------------------- Multiply balls --------------------------------

function Circle(x, y, dy, dx, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    // this.gravity = 1;
    this.color = color;

    // Используем this для обращения к переменным внутри функции

    this.update = function() {
        if (this.y + this.radius + this.dy > canvas.height)   { // Условине позволяющее фигуре отталкиваться от края экрана
            //                     this.dy необходимо для того чтобы фигрура не застревала снизу экрана 
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity;
        }

        if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0)  { // Эта запись позволяет фигуре не вылезти за пределы окна
            this.dx = -this.dx;
        }

        this.x += this.dx; 
        this.y += this.dy;    
        this.draw();
    }
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
        c.fillStyle = this.color
        c.fill();
        c.stroke();
        c.closePath();
    }
}


var ball;
var ballArray = [];
function init() {
    ballArray = []; // строка необходима для того, чтобы при уменьшении или увеличении ширины окна, не появлялись новые фигуры
    for (var i = 0; i < 1000; i++) {
        var radius = randomIntFromRange(4, 16);
        var x = randomIntFromRange(radius, canvas.width - radius); // - radius необходимо для того чтобы фигрура не застревала снизу экрана 
        var y = randomIntFromRange(radius, canvas.height - radius); // - radius необходимо для того чтобы фигрура не застревала снизу экрана
        var dx = randomIntFromRange(-2, 2)
        var dy = randomIntFromRange(-2, 2)
        var color = randomColor(colors);
        ballArray.push(new Circle(x, y, dx, dy, radius, color));        }
    ball = new Circle(canvas.width / 2, canvas.height / 2, 2, 30, c.fillStyle = (randomColor(color)));
    console.log(ballArray);
}
// ------------------------------- Animate circle --------------------------------
function animate() { // функция для создания анимации
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight); // Эта строка убирает фигуры, после воспроизведения анимации

    
    for (var i = 0; i < ballArray.length; i++) {
        ballArray[i].update();
    }
}
// Анимация, по своей сути являет собой постоянно обновляющуюся старницу, благодаря чему элементы могут двигаться
init();
animate();



