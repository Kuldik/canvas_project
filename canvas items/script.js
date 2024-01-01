// -------------------------------- Resize canvas --------------------------------

const canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// c.fillRect(100, 100, 100, 100)
// c.fillStyle = 'rgba(12, 255, 0, 0.5)';  // Позволяет менять стили создаваемых фигур, и, оно должно находиться над созданной фигурой
// c.fillRect(100, 100, 100, 100) // Используется для позиционирования и изменения размеров фигур
// c.fillStyle = 'rgba(0, 0, 155, 0.1)';
// c.fillRect(400, 100, 100, 100)
// c.fillStyle = 'rgba(0, 25, 0, 0.1)';
// c.fillRect(300, 300, 100, 100)



// -------------------------------- Lines --------------------------------

// c.beginPath();
// c.moveTo(100, 150);
// c.lineTo(425, 150);
// c.lineTo(350, 300);
// c.lineTo(200, 200);
// c.strokeStyle = "rgba(black, 0, 0, 1)"; // Позволяет менять стили создаваемых линий
// c.stroke();



// -------------------------------- Acr / circle --------------------------------

// Для того чтобы добавить больше фигур можно использовать цикл
// for (let i = 0; i < 3; i++) {
//     // Для того чтобы изменить положение фигур, можно использовать метод Math.random(); - присваивает случайное значение от 0 до 1
//     let x = Math.random() * window.innerWidth; // метод * window.innerWidth распределяет фигуры по ширине окна браузера
//     let y = Math.random() * window.innerHeight; // метод * window.innerHeight распределяет фигуры по высоте окна браузера
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();

//     c.beginPath(); // При появлении круга появлялась новая линия, чтобы ее убрать можно использовать эту строку
//     // c.arc(200, 300, 30, 0, Math.PI * 2, false); 
//     // c.arc(x, y, r, sAngle, eAngle, counterclockwise); 
//     // sAngle	Начальный угол в радианах (0 — позиция на 3 часа)
//     // eAngle	Конечный угол в радианах
//     c.strokeStyle = 'blue';
//     c.stroke();
// }



// ------------------------------- Multiply circle --------------------------------

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = x;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
        c.strokeStyle = 'red';
        c.stroke();
        c.fill();
    }

    // Используем this для обращения к переменным внутри функции
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0)  { // Эта запись позволяет фигуре не вылезти за пределы окна
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0)  { // Эта запись позволяет фигуре не вылезти за пределы окна
            this.dy = -this.dy;
        }
    
        this.x += this.dx; // увеличиваем переменную, создавая анимацию
        this.y += this.dy;
        
        this.draw();
    }
}

var circleArray = [];
var cirlce = new Circle(x, y, dx, dy, radius);

for (var i = 0; i < 140; i++) {
    var radius = 30; // создаем переменную для радиуса
    var x = Math.random() * (innerWidth - radius * 2) + radius; // создаем переменную для анимации ось x, так же прибавляем радиус для того чтобы фигура не застревала в углу экрана
    var y = Math.random() * (innerHeight - radius * 2) + radius; // создаем переменную для анимации ось y
    var dx = (Math.random() - 0.5) * 3; // создаем переменную для изменения скорости оси x
    var dy = (Math.random() - 0.5) * 3; // создаем переменную для изменения скорости оси y
    circleArray.push(new Circle(x, y, dx, dy, radius));
    // var cirlce = new Circle(200, 200, 3, 3, 39);
}

cirlce.draw();

console.log(circleArray);

// ------------------------------- Animate circle --------------------------------

function animate() { // функция для создания анимации
    requestAnimationFrame(animate);
    // c.clearRect(0, 0, innerWidth, innerHeight); // Эта строка убирает фигуры, после воспроизведения анимации

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update(); // создаем функцию обновления
    }
    
}
// Анимация, по своей сути являет собой постоянно обновляющуюся старницу, благодаря чему элементы могут двигаться
animate();


