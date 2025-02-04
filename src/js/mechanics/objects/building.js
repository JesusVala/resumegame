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

export function BusSign() {
  const sign = new THREE.Group();

  const base = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      10 * ZOOM,
      10 * ZOOM,
      4 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x454A59, flatShading: true }),
  );
  base.position.z = 2 * ZOOM;
  //sign.position.x = TILE_SIZE * ZOOM / 2;
  base.castShadow = true;
  base.receiveShadow = true;
  sign.add(base);

  const pole = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      4 * ZOOM,
      4 * ZOOM,
      10 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  pole.position.z = 7 * ZOOM;
  //sign.position.x = TILE_SIZE * ZOOM / 2;
  pole.castShadow = true;
  pole.receiveShadow = true;
  sign.add(pole);

  const board = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      5 * ZOOM,
      30 * ZOOM,
      40 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  board.position.z = 34 * ZOOM;
  //sign.position.x = TILE_SIZE * ZOOM / 2;
  board.castShadow = true;
  board.receiveShadow = true;
  sign.add(board);

  return sign;
}

export function BusStop() {
  const stop = new THREE.Group();

  const base = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      TILE_SIZE * ZOOM,
      2 * POSITION_WIDTH * ZOOM,
      2 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  base.position.z = 2 * ZOOM;
  base.position.y = TILE_SIZE * ZOOM / 2;
  base.castShadow = true;
  base.receiveShadow = true;
  stop.add(base);

  const chair = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      TILE_SIZE * ZOOM / 2,
      2 * POSITION_WIDTH * ZOOM - 10,
      10 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x683500, flatShading: true }),
  );
  chair.position.z = 7 * ZOOM;
  chair.position.y = TILE_SIZE * ZOOM / 2;
  chair.position.x = -6 * ZOOM;
  chair.castShadow = true;
  chair.receiveShadow = true;
  stop.add(chair);

  const leftPole = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      4 * ZOOM,
      4 * ZOOM,
      40 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  leftPole.position.z = 21 * ZOOM;
  leftPole.position.y = -TILE_SIZE * ZOOM / 2;
  leftPole.position.x = -TILE_SIZE * ZOOM / 2;
  leftPole.castShadow = true;
  leftPole.receiveShadow = true;
  stop.add(leftPole);

  const rightPole = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      4 * ZOOM,
      4 * ZOOM,
      40 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  rightPole.position.z = 21 * ZOOM;
  rightPole.position.y = TILE_SIZE * ZOOM + TILE_SIZE * ZOOM / 2;
  rightPole.position.x = -TILE_SIZE * ZOOM / 2;
  rightPole.castShadow = true;
  rightPole.receiveShadow = true;
  stop.add(rightPole);

  const glass = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      2 * ZOOM,
      2 * TILE_SIZE * ZOOM,
      40 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x0080FF, flatShading: true }),
  );
  glass.position.z = 21 * ZOOM;
  glass.position.y = TILE_SIZE * ZOOM / 2;
  glass.position.x = -TILE_SIZE * ZOOM / 2;
  glass.castShadow = true;
  glass.receiveShadow = true;
  stop.add(glass);

  const roof = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      2 * ZOOM,
      2 * TILE_SIZE * ZOOM,
      40 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x0080FF, flatShading: true }),
  );
  roof.position.z = 51 * ZOOM;
  roof.position.y = TILE_SIZE * ZOOM / 2;
  roof.rotation.y = Math.PI / 3;
  roof.position.x = -TILE_SIZE * ZOOM / 4;
  roof.castShadow = true;
  roof.receiveShadow = true;
  stop.add(roof);

  return stop;
}

export function AGBuilding() {
  const building = new THREE.Group();

  const base = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      60 * ZOOM,
      30 * ZOOM,
      2 * TILE_SIZE * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x000000, flatShading: true }),
  );
  base.position.z = TILE_SIZE * ZOOM;
  base.position.x = TILE_SIZE * ZOOM / 2;
  base.castShadow = true;
  base.receiveShadow = true;
  building.add(base);

  const sphere = new THREE.Mesh(
    new THREE.IcosahedronGeometry(3 * ZOOM, 1),
    new THREE.MeshPhongMaterial({ color: 0xff0000, flatShading: true }),
  );
  sphere.position.z = 40 * ZOOM;
  sphere.position.x = 50 * ZOOM;
  sphere.position.y = 8 * ZOOM;
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  building.add(sphere);

  const disk = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      5 * ZOOM,
      25 * ZOOM,
      5 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  disk.position.z = 50 * ZOOM;
  disk.position.x = 50 * ZOOM;
  disk.castShadow = true;
  disk.receiveShadow = true;
  building.add(disk);


  return building;
}

export function ConstructionBuilding() {
  const building = new THREE.Group();

  const column_1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      5 * ZOOM,
      5 * ZOOM,
      2 * TILE_SIZE * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x683500, flatShading: true }),
  );
  column_1.position.z = TILE_SIZE * ZOOM;
  column_1.position.x = -TILE_SIZE * ZOOM / 2;
  column_1.position.y = -TILE_SIZE * ZOOM / 2;
  column_1.castShadow = true;
  column_1.receiveShadow = true;
  building.add(column_1);

  const column_2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      5 * ZOOM,
      5 * ZOOM,
      2 * TILE_SIZE * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x683500, flatShading: true }),
  );
  column_2.position.z = TILE_SIZE * ZOOM;
  column_2.position.y = TILE_SIZE * ZOOM / 2;
  column_2.position.x = -TILE_SIZE * ZOOM / 2 ;
  column_2.castShadow = true;
  column_2.receiveShadow = true;
  building.add(column_2);

  const column_3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      5 * ZOOM,
      5 * ZOOM,
      2 * TILE_SIZE * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x683500, flatShading: true }),
  );
  column_3.position.z = TILE_SIZE * ZOOM;
  column_3.position.y = TILE_SIZE * ZOOM / 2;
  column_3.position.x = TILE_SIZE * ZOOM / 2 ;
  column_3.castShadow = true;
  column_3.receiveShadow = true;
  building.add(column_3);

  const column_4 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      5 * ZOOM,
      5 * ZOOM,
      2 * TILE_SIZE * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x683500, flatShading: true }),
  );
  column_4.position.z = TILE_SIZE * ZOOM;
  column_4.position.y = -TILE_SIZE * ZOOM / 2;
  column_4.position.x = TILE_SIZE * ZOOM / 2 ;
  column_4.castShadow = true;
  column_4.receiveShadow = true;
  building.add(column_4);


  return building;
}
