const threeHeights = [20, 45, 60];

/**
 * Generates a Three object in a random height
 * @param {number} zoom 
 * @returns THREE.Group
 */
export function Three(zoom) {
  const three = new THREE.Group();

  const trunk = new THREE.Mesh(
    new THREE.BoxBufferGeometry(15 * zoom, 15 * zoom, 20 * zoom),
    new THREE.MeshPhongMaterial({ color: 0x4d2926, flatShading: true }),
  );
  trunk.position.z = 10 * zoom;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  three.add(trunk);

  const height = threeHeights[Math.floor(Math.random() * threeHeights.length)];

  const crown = new THREE.Mesh(
    new THREE.BoxBufferGeometry(30 * zoom, 30 * zoom, height * zoom),
    new THREE.MeshLambertMaterial({ color: 0x7aa21d, flatShading: true }),
  );
  crown.position.z = (height / 2 + 20) * zoom;
  crown.castShadow = true;
  crown.receiveShadow = false;
  three.add(crown);

  return three;
}

/**
 * Generates a tile of grass to put in the floor
 * @param {number} zoom 
 * @param {number} boardWidth 
 * @param {number} positionWidth 
 * @returns THREE.Group
 */
export function Grass(zoom, boardWidth, positionWidth) {
  const grass = new THREE.Group();

  const createSection = (color) =>
    new THREE.Mesh(
      new THREE.BoxBufferGeometry(
        boardWidth * zoom,
        positionWidth * zoom,
        3 * zoom,
      ),
      new THREE.MeshPhongMaterial({ color }),
    );

  const middle = createSection(0xbaf455);
  middle.receiveShadow = true;
  grass.add(middle);

  const left = createSection(0x99C846);
  left.position.x = -boardWidth * zoom;
  grass.add(left);

  const right = createSection(0x99C846);
  right.position.x = boardWidth * zoom;
  grass.add(right);

  grass.position.z = 1.5 * zoom;
  return grass;
}

/**
 * Generates a tile of grass to put in the floor
 * @param {number} zoom 
 * @param {number} boardWidth 
 * @param {number} positionWidth 
 * @returns 
 */
export function Road(zoom, boardWidth, positionWidth) {
  const road = new THREE.Group();

  const createSection = (color) =>
    new THREE.Mesh(
      new THREE.PlaneBufferGeometry(boardWidth * zoom, positionWidth * zoom),
      new THREE.MeshPhongMaterial({ color }),
    );

  const middle = createSection(0x454A59);
  middle.receiveShadow = true;
  road.add(middle);

  const left = createSection(0x393D49);
  left.position.x = -boardWidth * zoom;
  road.add(left);

  const right = createSection(0x393D49);
  right.position.x = boardWidth * zoom;
  road.add(right);

  return road;
}
