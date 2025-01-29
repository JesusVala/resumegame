import { POSITION_WIDTH, TILE_SIZE, ZOOM } from "../../constants.js";

export function TourBuilding() {
  const building = new THREE.Group();

  const box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * TILE_SIZE * ZOOM,
      2 * POSITION_WIDTH * ZOOM,
      20 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x9933FF, flatShading: true }),
  );
  box.position.z = 10 * ZOOM;
  box.castShadow = true;
  box.receiveShadow = true;
  building.add(box);

  const box1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * TILE_SIZE * ZOOM,
      1 * POSITION_WIDTH * ZOOM,
      20 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x9933FF, flatShading: true }),
  );
  box1.position.z = 30 * ZOOM;
  box1.position.y = TILE_SIZE;
  box1.castShadow = true;
  box1.receiveShadow = true;
  building.add(box1);

  const roof = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * TILE_SIZE * ZOOM,
      2 * POSITION_WIDTH * ZOOM,
      2 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x9933FF, flatShading: true }),
  );
  roof.position.z = 41 * ZOOM;
  roof.castShadow = true;
  roof.receiveShadow = true;
  building.add(roof);

  const board = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * TILE_SIZE * ZOOM,
      2 * ZOOM,
      20 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x683500, flatShading: true }),
  );
  board.position.z = TILE_SIZE * ZOOM + TILE_SIZE / 2;
  board.position.y = -TILE_SIZE * ZOOM;
  board.castShadow = true;
  board.receiveShadow = true;
  building.add(board);

  return building;
}
