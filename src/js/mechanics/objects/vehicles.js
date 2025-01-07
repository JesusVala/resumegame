import { ZOOM } from "../../constants.js";

const vechicleColors = [0xa52523, 0xbdb638, 0x78b14b];
const carFrontTexture = new Texture(40, 80, [{ x: 0, y: 10, w: 30, h: 60 }]);
const carBackTexture = new Texture(40, 80, [{ x: 10, y: 10, w: 30, h: 60 }]);
const carRightSideTexture = new Texture(110, 40, [
  { x: 10, y: 0, w: 50, h: 30 },
  { x: 70, y: 0, w: 30, h: 30 },
]);
const carLeftSideTexture = new Texture(110, 40, [
  { x: 10, y: 10, w: 50, h: 30 },
  { x: 70, y: 10, w: 30, h: 30 },
]);
const truckFrontTexture = new Texture(30, 30, [{ x: 15, y: 0, w: 10, h: 30 }]);
const truckRightSideTexture = new Texture(25, 30, [{
  x: 0,
  y: 15,
  w: 10,
  h: 10,
}]);
const truckLeftSideTexture = new Texture(25, 30, [{
  x: 0,
  y: 5,
  w: 10,
  h: 10,
}]);

/**
 * Generates a TREE.GROUP similar a Car
 * @returns {THREE.Group}
 */
export function Car() {
  const car = new THREE.Group();
  const color =
    vechicleColors[Math.floor(Math.random() * vechicleColors.length)];

  const main = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60 * ZOOM, 30 * ZOOM, 15 * ZOOM),
    new THREE.MeshPhongMaterial({ color, flatShading: true }),
  );
  main.position.z = 12 * ZOOM;
  main.castShadow = true;
  main.receiveShadow = true;
  car.add(main);

  const cabin = new THREE.Mesh(
    new THREE.BoxBufferGeometry(33 * ZOOM, 24 * ZOOM, 12 * ZOOM),
    [
      new THREE.MeshPhongMaterial({
        color: 0xcccccc,
        flatShading: true,
        map: carBackTexture,
      }),
      new THREE.MeshPhongMaterial({
        color: 0xcccccc,
        flatShading: true,
        map: carFrontTexture,
      }),
      new THREE.MeshPhongMaterial({
        color: 0xcccccc,
        flatShading: true,
        map: carRightSideTexture,
      }),
      new THREE.MeshPhongMaterial({
        color: 0xcccccc,
        flatShading: true,
        map: carLeftSideTexture,
      }),
      new THREE.MeshPhongMaterial({ color: 0xcccccc, flatShading: true }), // top
      new THREE.MeshPhongMaterial({ color: 0xcccccc, flatShading: true }), // bottom
    ],
  );
  cabin.position.x = 6 * ZOOM;
  cabin.position.z = 25.5 * ZOOM;
  cabin.castShadow = true;
  cabin.receiveShadow = true;
  car.add(cabin);

  const frontWheel = new Wheel();
  frontWheel.position.x = -18 * ZOOM;
  car.add(frontWheel);

  const backWheel = new Wheel();
  backWheel.position.x = 18 * ZOOM;
  car.add(backWheel);

  car.castShadow = true;
  car.receiveShadow = false;

  return car;
}

/**
 * Generates a TREE.GROUP similar a Truck
 * @returns {THREE.Group}
 */
export function Truck() {
  const truck = new THREE.Group();
  const color =
    vechicleColors[Math.floor(Math.random() * vechicleColors.length)];

  const base = new THREE.Mesh(
    new THREE.BoxBufferGeometry(100 * ZOOM, 25 * ZOOM, 5 * ZOOM),
    new THREE.MeshLambertMaterial({ color: 0xb4c6fc, flatShading: true }),
  );
  base.position.z = 10 * ZOOM;
  truck.add(base);

  const cargo = new THREE.Mesh(
    new THREE.BoxBufferGeometry(75 * ZOOM, 35 * ZOOM, 40 * ZOOM),
    new THREE.MeshPhongMaterial({ color: 0xb4c6fc, flatShading: true }),
  );
  cargo.position.x = 15 * ZOOM;
  cargo.position.z = 30 * ZOOM;
  cargo.castShadow = true;
  cargo.receiveShadow = true;
  truck.add(cargo);

  const cabin = new THREE.Mesh(
    new THREE.BoxBufferGeometry(25 * ZOOM, 30 * ZOOM, 30 * ZOOM),
    [
      new THREE.MeshPhongMaterial({ color, flatShading: true }), // back
      new THREE.MeshPhongMaterial({
        color,
        flatShading: true,
        map: truckFrontTexture,
      }),
      new THREE.MeshPhongMaterial({
        color,
        flatShading: true,
        map: truckRightSideTexture,
      }),
      new THREE.MeshPhongMaterial({
        color,
        flatShading: true,
        map: truckLeftSideTexture,
      }),
      new THREE.MeshPhongMaterial({ color, flatShading: true }), // top
      new THREE.MeshPhongMaterial({ color, flatShading: true }), // bottom
    ],
  );
  cabin.position.x = -40 * ZOOM;
  cabin.position.z = 20 * ZOOM;
  cabin.castShadow = true;
  cabin.receiveShadow = true;
  truck.add(cabin);

  const frontWheel = new Wheel();
  frontWheel.position.x = -38 * ZOOM;
  truck.add(frontWheel);

  const middleWheel = new Wheel();
  middleWheel.position.x = -10 * ZOOM;
  truck.add(middleWheel);

  const backWheel = new Wheel();
  backWheel.position.x = 30 * ZOOM;
  truck.add(backWheel);

  return truck;
}

/**
 * Creates a THREE.Mesh similar as a wheel, ready to use as a subgroup of a vehicle
 * @returns {THREE.Mesh}
 */
export function Wheel() {
  const wheel = new THREE.Mesh(
    new THREE.BoxBufferGeometry(12 * ZOOM, 33 * ZOOM, 12 * ZOOM),
    new THREE.MeshLambertMaterial({ color: 0x333333, flatShading: true }),
  );
  wheel.position.z = 6 * ZOOM;
  return wheel;
}

/**
 * A point on a two dimensional plane.
 * @typedef {Object} CanvasRenderingContext2D
 * @property {number} x
 * @property {number} y
 * @property {number} w
 * @property {number} h
 */

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
