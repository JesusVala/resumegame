import { PLAYER_SIZE, ZOOM } from "../../../../constants.js";
import { COLORS } from "../assets/colors.js";
import { TEXTURES } from "../assets/textures.js";

export function bearPlayer() {
  const player = new THREE.Group();
  const materials = [
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.BEAR.RIGHT,
    }), //right
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.BEAR.LEFT,
    }), //left
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.BEAR.FRONT,
    }), //front
    new THREE.MeshBasicMaterial({
      color: COLORS.BEAR.BROWN,
      side: THREE.DoubleSide,
    }), //back
    new THREE.MeshBasicMaterial({
      color: COLORS.BEAR.BROWN,
      side: THREE.DoubleSide,
    }), //top
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
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.BEAR.BROWN,
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
      color: COLORS.BEAR.BROWN,
      flatShading: true,
    }),
  );
  rightHorn.position.z = (PLAYER_SIZE + 1.5) * ZOOM;
  rightHorn.position.y = (PLAYER_SIZE / 3.5) * ZOOM;
  rightHorn.position.x = -(PLAYER_SIZE / 3.3) * ZOOM;
  rightHorn.castShadow = true;
  rightHorn.receiveShadow = false;
  player.add(rightHorn);

  const nose = new THREE.Mesh(
    new THREE.BoxBufferGeometry(6 * ZOOM, 2 * ZOOM, 4 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.BEAR.BROWN,
      flatShading: true,
    }),
  );
  nose.position.z = (PLAYER_SIZE / 2) * ZOOM;
  nose.position.y = (PLAYER_SIZE / 2) * ZOOM;
  nose.castShadow = true;
  nose.receiveShadow = false;
  player.add(nose);

  const noseBlack = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.GENERAL.BLACK,
      flatShading: true,
    }),
  );
  noseBlack.position.z = (PLAYER_SIZE / 2 * ZOOM) + (PLAYER_SIZE / 16 * ZOOM);
  noseBlack.position.y = (PLAYER_SIZE / 2) * ZOOM;
  noseBlack.castShadow = true;
  noseBlack.receiveShadow = false;
  player.add(noseBlack);

  const tail = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.BEAR.BROWN,
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