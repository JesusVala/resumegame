import {
  BOARD_WIDTH,
  POSITION_WIDTH,
  TILE_SIZE,
  ZOOM,
} from "../../constants.js";
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
        //3 * ZOOM,
      ),
      new THREE.MeshPhongMaterial({ color }),
    );

  const middle = createSection(0xbaf455);
  middle.receiveShadow = true;
  grass.add(middle);

  const left = createSection(0x99C846);
  left.position.x = -BOARD_WIDTH * ZOOM;
  grass.add(left);

  const right = createSection(0x99C846);
  right.position.x = BOARD_WIDTH * ZOOM;
  grass.add(right);

  grass.position.z = 1.5 * ZOOM;
  return grass;
}

export function GrassTile() {
  const grass = new THREE.Group();

  const createSection = (color) =>
    new THREE.Mesh(
      new THREE.BoxBufferGeometry(
        TILE_SIZE * ZOOM,
        POSITION_WIDTH * ZOOM,
        //3 * ZOOM,
      ),
      new THREE.MeshPhongMaterial({ color }),
    );

  const tile = createSection(0xbaf455);
  tile.receiveShadow = true;
  grass.add(tile);

  grass.position.z = 1.5 * ZOOM;
  return grass;
}

export function RoadTile() {
  const grass = new THREE.Group();

  const createSection = (color) =>
    new THREE.Mesh(
      new THREE.BoxBufferGeometry(
        TILE_SIZE * ZOOM,
        POSITION_WIDTH * ZOOM,
        //3 * ZOOM,
      ),
      new THREE.MeshPhongMaterial({ color }),
    );

  const tile = createSection(0x454A59);
  tile.receiveShadow = true;
  grass.add(tile);

  grass.position.z = 1.5 * ZOOM;
  return grass;
}

/**
 * Generates a Three object for an tile of grass
 * @returns THREE.Group
 */
export function ThreeTile() {
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
 * Generates a Three object for an tile of grass
 * @returns THREE.Group
 */
export function RockTile() {
  const rock = new THREE.Group();

  const r1 = new THREE.Mesh(
    new THREE.IcosahedronGeometry(15 * ZOOM, 1),
    new THREE.MeshPhongMaterial({ color: 0x808080, flatShading: true }),
  );
  //r1.position.z = 10 * ZOOM;
  r1.castShadow = true;
  r1.receiveShadow = true;
  rock.add(r1);

  return rock;
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
