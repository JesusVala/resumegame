import { ZOOM, POSITION_WIDTH, BOARD_WIDTH } from "../../constants.js";
const threeHeights = [20, 45, 60];

/**
 * Generates a Three object in a random height 
 * @returns THREE.Group
 */
export function Three() {
  const three = new THREE.Group();

  const trunk = new THREE.Mesh(
    new THREE.BoxBufferGeometry(15 * ZOOM, 15 * ZOOM, 20 * ZOOM),
    new THREE.MeshPhongMaterial({ color: 0x4d2926, flatShading: true }),
  );
  trunk.position.z = 10 * ZOOM;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  three.add(trunk);

  const height = threeHeights[Math.floor(Math.random() * threeHeights.length)];

  const crown = new THREE.Mesh(
    new THREE.BoxBufferGeometry(30 * ZOOM, 30 * ZOOM, height * ZOOM),
    new THREE.MeshLambertMaterial({ color: 0x7aa21d, flatShading: true }),
  );
  crown.position.z = (height / 2 + 20) * ZOOM;
  crown.castShadow = true;
  crown.receiveShadow = false;
  three.add(crown);

  return three;
}

/**
 * Generates a tile of grass to put in the floor
 * @returns THREE.Group
 */
export function Grass() {
  const grass = new THREE.Group();

  const createSection = (color) =>
    new THREE.Mesh(
      new THREE.BoxBufferGeometry(
        BOARD_WIDTH * ZOOM,
        POSITION_WIDTH * ZOOM,
        3 * ZOOM,
      ),
      new THREE.MeshPhongMaterial({ color }),
    );

  const middle = createSection(0xbaf455);
  middle.receiveShadow = true;
  grass.add(middle);

  /*
  const left = createSection(0x99C846);
  left.position.x = -BOARD_WIDTH * ZOOM;
  grass.add(left);
  

  const right = createSection(0x99C846);
  right.position.x = BOARD_WIDTH * ZOOM;
  grass.add(right);
  */

  grass.position.z = 1.5 * ZOOM;
  return grass;
}

/**
 * Generates a tile of grass to put in the floor
 * @returns 
 */
export function Road() {
  const road = new THREE.Group();

  const createSection = (color) =>
    new THREE.Mesh(
      new THREE.PlaneBufferGeometry(BOARD_WIDTH * ZOOM, POSITION_WIDTH * ZOOM),
      new THREE.MeshPhongMaterial({ color }),
    );

  const middle = createSection(0x454A59);
  middle.receiveShadow = true;
  road.add(middle);

  const left = createSection(0x393D49);
  left.position.x = -BOARD_WIDTH * ZOOM;
  road.add(left);

  const right = createSection(0x393D49);
  right.position.x = BOARD_WIDTH * ZOOM;
  road.add(right);

  return road;
}
