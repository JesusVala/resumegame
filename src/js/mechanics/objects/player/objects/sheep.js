import { PLAYER_SIZE, ZOOM } from "../../../../constants.js";
import { COLORS } from "../../../../assets/colors.js";

export function sheepPlayer(color) {
  let colorSheep;

  switch (color) {
    case "white":
      colorSheep = COLORS.GENERAL.WHITE;
      break;
    case "black":
      colorSheep = COLORS.GENERAL.BLACK;
      break;
    case "pink":
      colorSheep = COLORS.SHEEP.PINK;
      break;
    default:
      colorSheep = COLORS.GENERAL.WHITE;
      break;
  }

  const player = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      PLAYER_SIZE * ZOOM,
      PLAYER_SIZE * ZOOM,
      PLAYER_SIZE * ZOOM,
    ),
    new THREE.MeshPhongMaterial({
      color: colorSheep,
      flatShading: true,
    }),
    //new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  body.position.z = 8 * ZOOM;
  body.castShadow = true;
  body.receiveShadow = true;
  player.add(body);

  const nose = new THREE.Mesh(
    new THREE.BoxBufferGeometry(10 * ZOOM, 4 * ZOOM, 10 * ZOOM),
    new THREE.MeshPhongMaterial({
      color: COLORS.SHEEP.SKIN,
      flatShading: true,
    }),
  );
  nose.position.z = (PLAYER_SIZE / 2) * ZOOM;
  nose.position.y = (PLAYER_SIZE / 2) * ZOOM;
  nose.castShadow = true;
  nose.receiveShadow = false;
  player.add(nose);

  const leftEye = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 5 * ZOOM, 2 * ZOOM),
    new THREE.MeshPhongMaterial({
      color: COLORS.GENERAL.BLACK,
      flatShading: true,
    }),
  );
  leftEye.position.z = (PLAYER_SIZE / 2) * ZOOM;
  leftEye.position.y = (PLAYER_SIZE / 2) * ZOOM;
  leftEye.position.x = (PLAYER_SIZE / 4) * ZOOM;
  leftEye.castShadow = true;
  leftEye.receiveShadow = false;
  player.add(leftEye);

  const rigthEye = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 5 * ZOOM, 2 * ZOOM),
    new THREE.MeshPhongMaterial({
      color: COLORS.GENERAL.BLACK,
      flatShading: true,
    }),
  );
  rigthEye.position.z = (PLAYER_SIZE / 2) * ZOOM;
  rigthEye.position.y = (PLAYER_SIZE / 2) * ZOOM;
  rigthEye.position.x = -(PLAYER_SIZE / 4) * ZOOM;
  rigthEye.castShadow = true;
  rigthEye.receiveShadow = false;
  player.add(rigthEye);

  const leftHorn = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.SHEEP.BROWN,
      flatShading: true,
    }),
  );
  leftHorn.position.z = (PLAYER_SIZE + 1.5) * ZOOM;
  leftHorn.position.y = (PLAYER_SIZE / 3.5) * ZOOM;
  leftHorn.position.x = (PLAYER_SIZE / 3.3) * ZOOM;
  leftHorn.castShadow = true;
  leftHorn.receiveShadow = false;
  player.add(leftHorn);

  const rightHorn = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.SHEEP.BROWN,
      flatShading: true,
    }),
  );
  rightHorn.position.z = (PLAYER_SIZE + 1.5) * ZOOM;
  rightHorn.position.y = (PLAYER_SIZE / 3.5) * ZOOM;
  rightHorn.position.x = -(PLAYER_SIZE / 3.3) * ZOOM;
  rightHorn.castShadow = true;
  rightHorn.receiveShadow = false;
  player.add(rightHorn);

  const leftEar = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: colorSheep,
      flatShading: true,
    }),
  );
  leftEar.position.z = (PLAYER_SIZE / 2) * ZOOM;
  leftEar.position.y = (PLAYER_SIZE / 3.5) * ZOOM;
  leftEar.position.x = -(PLAYER_SIZE / 1.8) * ZOOM;
  leftEar.castShadow = true;
  leftEar.receiveShadow = false;
  player.add(leftEar);

  const rightEar = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: colorSheep,
      flatShading: true,
    }),
  );
  rightEar.position.z = (PLAYER_SIZE / 2) * ZOOM;
  rightEar.position.y = (PLAYER_SIZE / 3.5) * ZOOM;
  rightEar.position.x = (PLAYER_SIZE / 1.8) * ZOOM;
  rightEar.castShadow = true;
  rightEar.receiveShadow = false;
  player.add(rightEar);

  const tail = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: colorSheep,
      flatShading: true,
    }),
  );
  tail.position.z = (PLAYER_SIZE / 3) * ZOOM;
  tail.position.y = -(PLAYER_SIZE / 1.8) * ZOOM;
  tail.castShadow = true;
  tail.receiveShadow = false;
  player.add(tail);

  return player;
}
