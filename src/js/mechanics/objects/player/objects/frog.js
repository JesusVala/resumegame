import { PLAYER_SIZE, ZOOM } from "../../../../constants.js";
import { COLORS } from "../../../../assets/colors.js";
import { TEXTURES } from "../../../../assets/textures.js";

/**
 * Creates a Cow player
 * @returns {THREE.Group}
 */
export function frogPlayer() {
  const player = new THREE.Group();

  const materials = [
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.FROG.RIGHT,
    }), //right
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.FROG.LEFT,
    }), //left
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.FROG.FRONT,
    }), //front
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.FROG.BACK,
    }), //back
    new THREE.MeshBasicMaterial({ color: COLORS.FROG.GREEN, side: THREE.DoubleSide }), //top
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

  const leftHorn = new THREE.Mesh(
    new THREE.BoxBufferGeometry(6 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.FROG.GREEN,
      flatShading: true,
    }),
  );
  leftHorn.position.z = (PLAYER_SIZE + 1.5) * ZOOM;
  leftHorn.position.y = (PLAYER_SIZE / 2.3) * ZOOM;
  leftHorn.position.x = (PLAYER_SIZE / 3.3) * ZOOM;
  leftHorn.castShadow = true;
  leftHorn.receiveShadow = false;
  player.add(leftHorn);

  const rightHorn = new THREE.Mesh(
    new THREE.BoxBufferGeometry(6 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.FROG.GREEN,
      flatShading: true,
    }),
  );
  rightHorn.position.z = (PLAYER_SIZE + 1.5) * ZOOM;
  rightHorn.position.y = (PLAYER_SIZE / 2.3) * ZOOM;
  rightHorn.position.x = -(PLAYER_SIZE / 3.3) * ZOOM;
  rightHorn.castShadow = true;
  rightHorn.receiveShadow = false;
  player.add(rightHorn);

  const leftArm = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 4 * ZOOM, 4 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.FROG.GREEN,
      flatShading: true,
    }),
  );
  leftArm.position.z = (PLAYER_SIZE/10) * ZOOM;
  leftArm.position.y = (PLAYER_SIZE / 2) * ZOOM;
  leftArm.position.x = -(PLAYER_SIZE / 2) * ZOOM;
  leftArm.castShadow = true;
  leftArm.receiveShadow = false;
  player.add(leftArm);

  const rightArm = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 4 * ZOOM, 4 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.FROG.GREEN,
      flatShading: true,
    }),
  );
  rightArm.position.z = (PLAYER_SIZE /10) * ZOOM;
  rightArm.position.y = (PLAYER_SIZE / 2) * ZOOM;
  rightArm.position.x = (PLAYER_SIZE / 2) * ZOOM;
  rightArm.castShadow = true;
  rightArm.receiveShadow = false;
  player.add(rightArm);

  const leftLeg = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 4 * ZOOM, 4 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.FROG.GREEN,
      flatShading: true,
    }),
  );
  leftLeg.position.z = (PLAYER_SIZE/10) * ZOOM;
  leftLeg.position.y = -(PLAYER_SIZE / 4) * ZOOM;
  leftLeg.position.x = -(PLAYER_SIZE / 1.7) * ZOOM;
  leftLeg.castShadow = true;
  leftLeg.receiveShadow = false;
  player.add(leftLeg);

  const rightLeg = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 4 * ZOOM, 4 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.FROG.GREEN,
      flatShading: true,
    }),
  );
  rightLeg.position.z = (PLAYER_SIZE /10) * ZOOM;
  rightLeg.position.y = -(PLAYER_SIZE / 4) * ZOOM;
  rightLeg.position.x = (PLAYER_SIZE / 1.7) * ZOOM;
  rightLeg.castShadow = true;
  rightLeg.receiveShadow = false;
  player.add(rightLeg);

  return player;
}