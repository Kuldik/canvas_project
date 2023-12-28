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


var x = 200; // создаем переменную для анимации
var dx = 10; // создаем переменную для изменения скорости
var radius = 40; // создаем переменную для радиуса, он необходим для того чтобы 
function animate() { // функция для создания анимации
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); // Эта строка убирает фигуры, после воспроизведения анимации
    
    c.beginPath(); // Создаем один круг для дальнейшей анимации
    c.arc(x, 200, radius, 0, Math.PI * 2, false); 
    c.strokeStyle = 'blue';
    c.stroke();

    if (x + radius> innerWidth || x - radius < 0)  { // Эта запись позволяет фигуре 
        dx = -dx;
    }
    x += dx; // увеличиваем переменную, создавая анимацию
}
// Анимация, по своей сути являет собой постоянно обновляющуюся старницу, благодаря чему элементы могут двигаться
animate();