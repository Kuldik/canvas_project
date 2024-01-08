// import utils from './utils'
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

var colors = [
    '300bdff',
    '#4d39ce',
    '#088eff',
    '#F2D194',
];

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  
  function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
  
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
  }

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects

function Particle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    // this.dx = dx;
    // this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2; // 
    this.velocity = 0.015;
    this.distanceFromCenter = randomIntFromRange(50, 120)
    this.lastMouse = {x: x, y: y};

    // this.distanceFromCenter =  this can use if we want to create a 3d like animation
    //     {x: randomIntFromRange(50, 120),
    //     y: randomIntFromRange(50, 120)};

    this.update = () => {
        const lastPoint = {x: this.x, y: this.y};
        // Move points over time
        this.radians += this.velocity

        // Drag effect
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05 
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05 

        // Circular motion
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter * 1.6;
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter * 1.6; // Crating an circling animation
        this.draw(lastPoint);
    };

    this.draw = lastPoint => {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
    };
}

let particles
function init(color) {
  particles = [];
  for (let i = 0; i < 80; i++) {
    const radius = (Math.random() * 4) + 2;
    particles.push(new Particle(canvas.width / 2, canvas.height / 2, 5, 5, radius, randomColor(colors)));
  }
//   console.log(particles);
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'rgba(255, 255, 255, 0.02)'; // this creating an a very cool-looking animation
  c.fillRect(0, 0, canvas.width, canvas.height)

  particles.forEach(particle => {
    particle.update();
  })
}

// class Object {
//   constructor(x, y, radius, color) {
//     this.x = x
//     this.y = y
//     this.radius = radius
//     this.color = color
//   }

//   update() {
//     this.draw()
//   }
//   draw() {
//     c.beginPath()
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//     c.fillStyle = this.color
//     c.fill()
//     c.closePath()
//   }


// }

// Implementation



init()
animate()
