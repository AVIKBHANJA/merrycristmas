import { createStars } from './src/js/stars.js';
import { placeTrees } from './src/js/trees.js';
import { placeHouses } from './src/js/houses.js';

document.addEventListener('DOMContentLoaded', () => {
  const scene = document.querySelector('.village-scene');
  
  // Create the village elements
  createStars(scene);
  placeTrees(scene);
  placeHouses(scene);
});