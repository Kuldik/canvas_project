const canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// c.fillRect(x, y, width, height); - используется для позиционирования и изменения размеров фигур, который можно строить внутри canvas

c.fillRect(30, 100, 100, 100)
c.fillRect(100, 200, 100, 100)
c.fillRect(300, 100, 100, 100)

