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

for(let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}