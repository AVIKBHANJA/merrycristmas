export function createHouse(x) {
  const house = document.createElement('div');
  house.className = 'house';
  house.style.left = `${x}px`;

  const roof = document.createElement('div');
  roof.className = 'roof';

  const window1 = document.createElement('div');
  window1.className = 'window';
  window1.style.left = '20px';
  window1.style.top = '30px';

  const window2 = document.createElement('div');
  window2.className = 'window';
  window2.style.right = '20px';
  window2.style.top = '30px';

  house.appendChild(roof);
  house.appendChild(window1);
  house.appendChild(window2);

  return house;
}

export function placeHouses(container) {
  const housePositions = [200, 400, 600, 800];
  housePositions.forEach(x => {
    container.appendChild(createHouse(x));
  });
}