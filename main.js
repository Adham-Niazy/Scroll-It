import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import './style.css';

const canvas = document.querySelector('.canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');
const frameCount = 179;

const currentFrame = (index) => `./public/optimized_blender_imgs/${(index + 1).toString()}.webp`;
const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}