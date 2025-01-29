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

export function LubtracContainner() {
  const building = new THREE.Group();

  const containner = new THREE.Mesh(
    new THREE.CylinderGeometry(
      35 * ZOOM,
      35 * ZOOM,
      2 * TILE_SIZE * ZOOM,
      10,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  containner.position.z = TILE_SIZE * ZOOM;
  containner.position.y = TILE_SIZE * ZOOM / 2;
  containner.position.x = TILE_SIZE * ZOOM / 2;
  containner.rotation.x = Math.PI / 2;
  containner.castShadow = true;
  containner.receiveShadow = true;
  building.add(containner);

  return building;
}

export function LubtracBoard() {
  const board = new THREE.Group();

  const leftPole = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * ZOOM,
      3 * ZOOM,
      60 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x1447FF, flatShading: true }),
  );
  leftPole.position.z = 30 * ZOOM;
  leftPole.position.y = TILE_SIZE * ZOOM / -2;
  leftPole.castShadow = true;
  leftPole.receiveShadow = true;
  board.add(leftPole);

  const rightPole = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * ZOOM,
      3 * ZOOM,
      60 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x1447FF, flatShading: true }),
  );
  rightPole.position.z = 30 * ZOOM;
  rightPole.position.y = TILE_SIZE * ZOOM / 2;
  rightPole.castShadow = true;
  rightPole.receiveShadow = true;
  board.add(rightPole);

  const lubtracBoard = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * ZOOM,
      TILE_SIZE * ZOOM,
      20 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  lubtracBoard.position.z = 30 * ZOOM;
  lubtracBoard.castShadow = true;
  lubtracBoard.receiveShadow = true;
  board.add(lubtracBoard);

  const mobilBoard = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      6 * ZOOM,
      TILE_SIZE * ZOOM,
      30 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  mobilBoard.position.z = 75 * ZOOM;
  mobilBoard.castShadow = true;
  mobilBoard.receiveShadow = true;
  board.add(mobilBoard);

  return board;
}

export function BoschCubes() {
  const bd = new THREE.Group();

  const cubeGreen = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      10 * ZOOM,
      10 * ZOOM,
      10 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x124727, flatShading: true }),
  );
  cubeGreen.position.z = 5 * ZOOM;
  cubeGreen.position.y = TILE_SIZE * ZOOM / -4;
  cubeGreen.position.x = TILE_SIZE * ZOOM / -4;
  cubeGreen.castShadow = true;
  cubeGreen.receiveShadow = true;
  bd.add(cubeGreen);

  const cubePurple = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      10 * ZOOM,
      10 * ZOOM,
      10 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x1447FF, flatShading: true }),
  );
  cubePurple.position.z = 5 * ZOOM;
  cubePurple.position.y = TILE_SIZE * ZOOM / 4;
  cubePurple.castShadow = true;
  cubePurple.receiveShadow = true;
  bd.add(cubePurple);

  const cubeBlue = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      10 * ZOOM,
      10 * ZOOM,
      10 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x9933FF, flatShading: true }),
  );
  cubeBlue.position.z = 5 * ZOOM;
  cubeBlue.position.y = TILE_SIZE * ZOOM / -4;
  cubeBlue.position.x = TILE_SIZE * ZOOM / 4;
  cubeBlue.castShadow = true;
  cubeBlue.receiveShadow = true;
  bd.add(cubeBlue);

  return bd;
}

export function BoschBoard() {
  const board = new THREE.Group();

  const leftPole = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * ZOOM,
      3 * ZOOM,
      60 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x1447FF, flatShading: true }),
  );
  leftPole.position.z = 30 * ZOOM;
  leftPole.position.y = TILE_SIZE * ZOOM / -2;
  leftPole.castShadow = true;
  leftPole.receiveShadow = true;
  board.add(leftPole);

  const rightPole = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * ZOOM,
      3 * ZOOM,
      60 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x1447FF, flatShading: true }),
  );
  rightPole.position.z = 30 * ZOOM;
  rightPole.position.y = TILE_SIZE * ZOOM / 2;
  rightPole.castShadow = true;
  rightPole.receiveShadow = true;
  board.add(rightPole);

  const mobilBoard = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      6 * ZOOM,
      TILE_SIZE * ZOOM,
      30 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x1447FF, flatShading: true }),
  );
  mobilBoard.position.z = 75 * ZOOM;
  mobilBoard.castShadow = true;
  mobilBoard.receiveShadow = true;
  board.add(mobilBoard);

  return board;
}

export function BoschDigital() {
  const board = new THREE.Group();

  const sign = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * ZOOM,
      TILE_SIZE * ZOOM,
      TILE_SIZE * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x000000, flatShading: true }),
  );
  sign.position.z = TILE_SIZE * ZOOM / 2;
  //sign.position.x = TILE_SIZE * ZOOM / 2;
  sign.castShadow = true;
  sign.receiveShadow = true;
  board.add(sign);

  return board;
}

export function AGBoard() {
  const board = new THREE.Group();

  const sign = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * ZOOM,
      TILE_SIZE * ZOOM,
      TILE_SIZE * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xFF8000, flatShading: true }),
  );
  sign.position.z = TILE_SIZE * ZOOM / 2;
  //sign.position.x = TILE_SIZE * ZOOM / 2;
  sign.castShadow = true;
  sign.receiveShadow = true;
  board.add(sign);

  return board;
}
