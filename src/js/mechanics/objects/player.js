import { PLAYER_SIZE, ZOOM } from "../../constants.js";

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

  const body = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      PLAYER_SIZE * ZOOM,
      PLAYER_SIZE * ZOOM,
      20 * ZOOM,
    ),
    [
      new THREE.MeshPhongMaterial({
        color: 0x1100FFFF,
        flatShading: true,
        map: new Texture(25, 30, [{
          x: 0,
          y: 5,
          w: 10,
          h: 10,
        }]),
      }), // back
      new THREE.MeshPhongMaterial({
        color: 0x6D3C3CFF,
        flatShading: true,
        map: new Texture(25, 30, [{
          x: 0,
          y: 5,
          w: 10,
          h: 10,
        }]),
      }),
      new THREE.MeshPhongMaterial({
        color: 0xA8CD20FF,
        flatShading: true,
        map: new Texture(25, 30, [{
          x: 0,
          y: 5,
          w: 10,
          h: 10,
        }]),
      }),
      new THREE.MeshPhongMaterial({
        color: 0x9500FFFF,
        flatShading: true,
        map: new Texture(25, 30, [{
          x: 0,
          y: 5,
          w: 10,
          h: 10,
        }]),
      }),
      new THREE.MeshPhongMaterial({
        color: 0x20D757FF,
        flatShading: true,
        map: new Texture(25, 30, [{
          x: 0,
          y: 5,
          w: 10,
          h: 10,
        }]),
      }), // top
      new THREE.MeshPhongMaterial({
        color: 0x000000FF,
        flatShading: true,
        map: new Texture(25, 30, [{
          x: 0,
          y: 5,
          w: 10,
          h: 10,
        }]),
      }), // bottom
    ],
    //new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  body.position.z = 10 * ZOOM;
  body.castShadow = true;
  body.receiveShadow = true;
  player.add(body);

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

/**
 * Support function to create CanvasTextures
 * @param {number} width
 * @param {number} height
 * @param {CanvasRenderingContext2D[]} rects
 * @returns
 */
export function Texture(width, height, rects) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "rgba(0,0,0,0.6)";
  rects.forEach((rect) => {
    context.fillRect(rect.x, rect.y, rect.w, rect.h);
  });
  return new THREE.CanvasTexture(canvas);
}
