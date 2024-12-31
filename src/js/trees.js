export function createTree(x) {
  const tree = document.createElement('div');
  tree.className = 'tree';
  tree.style.left = `${x}px`;

  const treeTop = document.createElement('div');
  treeTop.className = 'tree-top';

  const treeTrunk = document.createElement('div');
  treeTrunk.className = 'tree-trunk';

  tree.appendChild(treeTop);
  tree.appendChild(treeTrunk);

  return tree;
}

export function placeTrees(container) {
  const treePositions = [100, 300, 500, 700, 900];
  treePositions.forEach(x => {
    container.appendChild(createTree(x));
  });
}