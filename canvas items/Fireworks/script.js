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


// ------------------------------- Utitlty functions --------------------------------

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// var colors = [
//     '#843A27',
//     '#EA7D61',
//     '#F2D194',
//     '#A67951',
//     '#734E40',
//     '#000123',
// ];

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}


window.addEventListener('resize', 
    function() {
        canvas.width = window.innerWidth; 
        canvas.height = window.innerHeight; // Увеличивает или уменьшает размер canvas соразмерно размерам окна браузера
        init();
    })

addEventListener("click", function() {
    init();
})
// ------------------------------- Multiply balls --------------------------------

const gravity = 0.0051;
const friction = 0.99785;
class Particle {
    constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.alpha = 1
    }

    // Используем this для обращения к переменным внутри функции
   draw() {
        c.save
        c.globalAlpha = this.alpha
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
        c.fillStyle = this.color
        c.fill();
        c.closePath();
        c.restore
    }

   update() {
        this.draw();
        this.velocity.y += gravity  
        this.velocity.x *= friction
        this.velocity.y *= friction
        this.x += this.velocity.x // Создает анимацию увеличение фигуры горизонтально
        this.y += this.velocity.y
        this.alpha -= 0.0015
    }
}

let particles
function init() {
    particles = [];
}
function animate() { // функция для создания анимации
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(0, 0, 0, 0.01)';
    c.fillRect(0, 0, canvas.width, canvas.height);    

    particles.forEach((particle, i) => {
        if (particle.alpha > 0) { // конструкция для очистки анимации которая прошла свой цикл
            particle.update();
        } else {
            particles.splice(i, 1);
        }
    })
}
init();
animate();

addEventListener("click", (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
    
    const particleCount = 800
    const angleIncrement = (Math.PI * 2) / particleCount;
    const power = 8;

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(mouse.x, mouse.y, 5, `hsl(${Math.random() * 360}, 50%, 50%)`, 
        {
            x: Math.cos(angleIncrement * i) * Math.random() * power, 
            y: Math.sin(angleIncrement * i) * Math.random() * power
        },
        ));
    }
})

// {x: (Math.random() - 0.5) * 3, y: (Math.random() - 0.5) * 3}