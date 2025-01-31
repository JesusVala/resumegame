import { bearPlayer } from "./objects/bear.js";
import { cowPlayer } from "./objects/cow.js";
import { pandaPlayer } from "./objects/panda.js";
import { porkPlayer } from "./objects/pork.js";
import { sheepPlayer } from "./objects/sheep.js";
import { frogPlayer } from "./objects/frog.js";
import { fishPlayer } from "./objects/fish.js";

/**
 * Generates a TREE.GROUP to act as a character player
 * @returns {THREE.Group}
 */
export function Player(playerModelName) {
  switch (playerModelName) {
    case "cow":
      return cowPlayer();
    case "panda":
      return pandaPlayer();
    case "bear":
      return bearPlayer();
    case "pork":
      return porkPlayer();
    case "sheep":
      return sheepPlayer("white");
    case "sheep_black":
      return sheepPlayer("black");
    case "sheep_pink":
      return sheepPlayer("pink");
    case 'frog':
      return frogPlayer();
    case 'fish':
      return fishPlayer();
    default:
      return originalChickenPlayer();
  }
}

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

  return new THREE.CanvasTexture(canvas);
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
