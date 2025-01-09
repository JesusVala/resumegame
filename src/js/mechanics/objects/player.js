import { PLAYER_SIZE, ZOOM } from "../../constants.js";

const COLORS = Object.freeze({
  COW: {
    BASE: "rgb(255, 255, 255)",
    BROWN: "rgb(105, 59, 7)",
    PINK: "rgb(232, 106, 218)",
    BLACK: "rgb(0, 0, 0)",
  },
});
const TEXTURES = Object.freeze({
  COW: {
    RIGHT: new CanvasTexture(70, 70, [
      { x: 0, y: 20, w: 20, h: 40, color: COLORS.COW.BROWN },
      { x: 20, y: 30, w: 10, h: 20, color: COLORS.COW.BROWN },
      { x: 30, y: 0, w: 10, h: 10, color: COLORS.COW.PINK },
    ]),
    LEFT: new CanvasTexture(70, 70, [
      { x: 50, y: 0, w: 20, h: 40, color: COLORS.COW.BROWN },
      { x: 40, y: 0, w: 10, h: 30, color: COLORS.COW.BROWN },
      { x: 30, y: 10, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 50, y: 60, w: 20, h: 10, color: COLORS.COW.BROWN },
      { x: 10, y: 40, w: 20, h: 10, color: COLORS.COW.BROWN },
      { x: 30, y: 0, w: 10, h: 10, color: COLORS.COW.PINK },
    ]),
    FRONT: new CanvasTexture(70, 70, [
      { x: 30, y: 60, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 0, y: 40, w: 30, h: 30, color: COLORS.COW.BROWN },
      { x: 10, y: 30, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 10, y: 40, w: 10, h: 10, color: COLORS.COW.BLACK },
      { x: 50, y: 40, w: 10, h: 10, color: COLORS.COW.BLACK },
      { x: 0, y: 30, w: 10, h: 10, color: COLORS.COW.PINK },
      { x: 60, y: 30, w: 10, h: 10, color: COLORS.COW.PINK },
      { x: 20, y: 20, w: 30, h: 20, color: COLORS.COW.PINK },
    ]),
    BACK: new CanvasTexture(70, 70, [
      { x: 0, y: 0, w: 10, h: 20, color: COLORS.COW.BROWN },
      { x: 10, y: 0, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 30, y: 50, w: 10, h: 10, color: COLORS.COW.BLACK },
    ]),
    TOP: new CanvasTexture(70, 70, [
      { x: 0, y: 0, w: 30, h: 30, color: COLORS.COW.BROWN },
      { x: 30, y: 0, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 0, y: 30, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 10, y: 10, w: 10, h: 10, color: COLORS.COW.BLACK },
      { x: 50, y: 10, w: 10, h: 10, color: COLORS.COW.BLACK },
      { x: 0, y: 60, w: 20, h: 10, color: COLORS.COW.BROWN },
      { x: 60, y: 20, w: 10, h: 40, color: COLORS.COW.BROWN },
      { x: 50, y: 30, w: 10, h: 10, color: COLORS.COW.BROWN },
    ]),
  },
});
/**
 * Generates a TREE.GROUP to act as a character player
 * @returns {THREE.Group}
 */
export function Player(playerModelName) {
  switch (playerModelName) {
    case "fox":
      return cowPlayer();
    default:
      return originalChickenPlayer();
  }
}

function cowPlayer() {
  const player = new THREE.Group();

  const materials = [
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.COW.RIGHT,
    }), //right
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.COW.LEFT,
    }), //left
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.COW.FRONT,
    }), //front
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.COW.BACK,
    }), //back
    new THREE.MeshBasicMaterial({ side: THREE.DoubleSide ,map: TEXTURES.COW.TOP}), //top
    new THREE.MeshBasicMaterial({ color: 0xf01223, side: THREE.DoubleSide }), //botom
  ];

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(
      PLAYER_SIZE * ZOOM,
      PLAYER_SIZE * ZOOM,
      PLAYER_SIZE * ZOOM,
    ),
    materials,
    //new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  body.position.z = 8 * ZOOM;
  body.castShadow = true;
  body.receiveShadow = true;
  player.add(body);

  const nose = new THREE.Mesh(
    new THREE.BoxBufferGeometry(6 * ZOOM, 3 * ZOOM, 4 * ZOOM),
    new THREE.MeshLambertMaterial({ color: COLORS.COW.PINK, flatShading: true }),
  );
  nose.position.z = ((PLAYER_SIZE/2)) * ZOOM;
  nose.position.y = (PLAYER_SIZE/2) * ZOOM;
  nose.castShadow = true;
  nose.receiveShadow = false;
  player.add(nose);

  const leftHorn = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({ color: COLORS.COW.BLACK, flatShading: true }),
  );
  leftHorn.position.z = (PLAYER_SIZE+1.5) * ZOOM;
  leftHorn.position.y = (PLAYER_SIZE/3.5) * ZOOM;
  leftHorn.position.x = (PLAYER_SIZE/3.3) * ZOOM;
  leftHorn.castShadow = true;
  leftHorn.receiveShadow = false;
  player.add(leftHorn);

  const rightHorn = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({ color: COLORS.COW.BLACK, flatShading: true }),
  );
  rightHorn.position.z = (PLAYER_SIZE+1.5) * ZOOM;
  rightHorn.position.y = (PLAYER_SIZE/3.5) * ZOOM;
  rightHorn.position.x = -(PLAYER_SIZE/3.3) * ZOOM;
  rightHorn.castShadow = true;
  rightHorn.receiveShadow = false;
  player.add(rightHorn);

  const leftEar = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({ color: COLORS.COW.BASE, flatShading: true }),
  );
  leftEar.position.z = (PLAYER_SIZE-2) * ZOOM;
  leftEar.position.y = (PLAYER_SIZE/3.5) * ZOOM;
  leftEar.position.x = -(PLAYER_SIZE/1.8) * ZOOM;
  leftEar.castShadow = true;
  leftEar.receiveShadow = false;
  player.add(leftEar);

  const rightEar = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({ color: COLORS.COW.BASE, flatShading: true }),
  );
  rightEar.position.z = (PLAYER_SIZE-2) * ZOOM;
  rightEar.position.y = (PLAYER_SIZE/3.5) * ZOOM;
  rightEar.position.x = (PLAYER_SIZE/1.8) * ZOOM;
  rightEar.castShadow = true;
  rightEar.receiveShadow = false;
  player.add(rightEar);

  const tail = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 4 * ZOOM),
    new THREE.MeshLambertMaterial({ color: COLORS.COW.BLACK, flatShading: true }),
  );
  tail.position.z = (PLAYER_SIZE/3) * ZOOM;
  tail.position.y = -(PLAYER_SIZE/1.8) * ZOOM;
  tail.castShadow = true;
  tail.receiveShadow = false;
  player.add(tail);

  return player;
}

function originalChickenPlayer() {
  const player = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      PLAYER_SIZE * ZOOM,
      PLAYER_SIZE * ZOOM,
      20 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  body.position.z = 10 * ZOOM;
  body.castShadow = true;
  body.receiveShadow = true;
  player.add(body);

  const rowel = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 4 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({ color: 0xF0619A, flatShading: true }),
  );
  rowel.position.z = 21 * ZOOM;
  rowel.castShadow = true;
  rowel.receiveShadow = false;
  player.add(rowel);

  return player;
}

//[{ x: 10, y: 10, w: 30, h: 60 }]
/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} CanvasRenderingContext2DwithColor
 * @property {number} x
 * @property {number} y
 * @property {number} w
 * @property {number} h
 * @property {color} color
 */
/**
 * Support function to create CanvasTextures
 * @param {number} width
 * @param {number} height
 * @param {CanvasRenderingContext2DwithColor[]} rects
 * @returns
 */
export function CanvasTexture(width, height, rects) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");

  rects.forEach((rect) => {
    context.fillStyle = rect.color;
    context.fillRect(rect.x, rect.y, rect.w, rect.h);
  });
  /*
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "rgba(0,0,0,0.6)";
  rects.forEach((rect) => {
    context.fillRect(rect.x, rect.y, rect.w, rect.h);
  });
  */
  console.log(canvas);
  return new THREE.CanvasTexture(canvas);
}
