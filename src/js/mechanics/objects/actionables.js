import { IMAGES } from "../../assets/images.js";
import { PLAYER_SIZE, TILE_SIZE, ZOOM } from "../../constants.js";
import { Player } from "../objects/player/player.js";
import { BoschBoard } from "./building.js";

export function Dialog() {
  const dialog = new THREE.Group();

  const box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      20 * ZOOM,
      2 * ZOOM,
      13 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffa500, flatShading: true }),
  );

  box.position.z = 20 * ZOOM;
  box.castShadow = true;
  box.receiveShadow = false;
  dialog.add(box);

  const whiteBox = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      17 * ZOOM,
      3 * ZOOM,
      10 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );

  whiteBox.position.z = 20 * ZOOM;
  dialog.add(whiteBox);

  const firstDot = new THREE.Mesh(
    new THREE.CylinderGeometry(
      1 * ZOOM,
      1 * ZOOM,
      5 * ZOOM,
      10,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffa500, flatShading: true }),
  );
  firstDot.position.z = 20 * ZOOM;
  firstDot.position.x = 4 * ZOOM;
  dialog.add(firstDot);

  const secondDot = new THREE.Mesh(
    new THREE.CylinderGeometry(
      1 * ZOOM,
      1 * ZOOM,
      5 * ZOOM,
      10,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffa500, flatShading: true }),
  );
  secondDot.position.z = 20 * ZOOM;
  dialog.add(secondDot);

  const thirdDot = new THREE.Mesh(
    new THREE.CylinderGeometry(
      1 * ZOOM,
      1 * ZOOM,
      5 * ZOOM,
      10,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffa500, flatShading: true }),
  );
  thirdDot.position.z = 20 * ZOOM;
  thirdDot.position.x = -4 * ZOOM;
  dialog.add(thirdDot);

  return dialog;
}

export function Coin() {
  const coin = new THREE.Group();
  coin.name = "coin";

  const metal = new THREE.Mesh(
    new THREE.CylinderGeometry(
      10 * ZOOM,
      10 * ZOOM,
      2 * ZOOM,
      10,
    ),
    new THREE.MeshPhongMaterial({ color: 0xE1B530, flatShading: true }),
  );

  metal.castShadow = true;
  metal.position.z = 10 * ZOOM;
  coin.add(metal);

  return coin;
}

export function talkableCharacter(type) {
  const talkable = new THREE.Group();

  const player = new Player(type);

  talkable.add(player);

  const dialog = new Dialog();

  talkable.add(dialog);
  dialog.position.z = PLAYER_SIZE * ZOOM;

  return talkable;
}

function monolite(image) {
  const monolite = new THREE.Group();

  const base = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      TILE_SIZE * ZOOM,
      20 * ZOOM,
      2 * TILE_SIZE * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0xA1ADA9, flatShading: true }),
  );
  base.position.z = TILE_SIZE * ZOOM;
  //base.position.y = -TILE_SIZE * ZOOM / 2;
  base.castShadow = true;
  base.receiveShadow = true;
  monolite.add(base);

  const blackMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

  const canvas = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      TILE_SIZE * ZOOM,
      3 * ZOOM,
      TILE_SIZE * ZOOM,
    ),
    [
      blackMaterial,
      blackMaterial,
      blackMaterial,
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(image),
      }),
      blackMaterial,
      blackMaterial,
    ],
    //new THREE.MeshBasicMaterial({ color: 0xffffff, flatShading: true }),
  );
  canvas.position.z = TILE_SIZE * ZOOM;
  canvas.position.y = -10 * ZOOM;
  canvas.castShadow = true;
  canvas.receiveShadow = true;
  monolite.add(canvas);

  return monolite;
}

export function monoliteTechnologies(playerModelName) {
  switch (playerModelName) {
    case "js":
      return monolite(IMAGES.MONOLITES.JS);
    case "html":
      return monolite(IMAGES.MONOLITES.HTML5);
    case "react":
      return monolite(IMAGES.MONOLITES.REACT_NATIVE);
    case "sql":
      return monolite(IMAGES.MONOLITES.SQL);
    case "git":
      return monolite(IMAGES.MONOLITES.GIT);
    case "azure":
      return monolite(IMAGES.MONOLITES.AZURE);
    case "iteso":
      return monolite(IMAGES.MONOLITES.ITESO);
    default:
      return monolite(IMAGES.TEXTURES.DUMMY.IMAGE_600_400);
  }
}
