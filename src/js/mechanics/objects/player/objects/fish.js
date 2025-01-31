import { PLAYER_SIZE, ZOOM } from "../../../../constants.js";
import { COLORS } from "../assets/colors.js";
import { TEXTURES } from "../assets/textures.js";

/**
 * Creates a Cow player
 * @returns {THREE.Group}
 */
export function fishPlayer() {
  const player = new THREE.Group();

  const materials = [
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.FISH.RIGHT,
    }), //right
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.FISH.LEFT,
    }), //left
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: TEXTURES.FISH.FRONT,
    }), //front
    new THREE.MeshBasicMaterial({
      color: COLORS.FISH.DARKYELLOW,
      side: THREE.DoubleSide,
    }), //back
    new THREE.MeshBasicMaterial({
      color: COLORS.FISH.DARKYELLOW,
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

  const topWing = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 10 * ZOOM, 3 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.FISH.YELLOW,
      flatShading: true,
    }),
  );
  topWing.position.z = (PLAYER_SIZE + 1.5) * ZOOM;
  topWing.castShadow = true;
  topWing.receiveShadow = false;
  player.add(topWing);

  const leftWing = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.FISH.YELLOW,
      flatShading: true,
    }),
  );
  leftWing.position.z = (PLAYER_SIZE / 2) * ZOOM;
  leftWing.position.y = (PLAYER_SIZE / 4) * ZOOM;
  leftWing.position.x = -(PLAYER_SIZE / 1.8) * ZOOM;
  leftWing.castShadow = true;
  leftWing.receiveShadow = false;
  player.add(leftWing);

  const rightWing = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 4 * ZOOM, 2 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.FISH.YELLOW,
      flatShading: true,
    }),
  );
  rightWing.position.z = (PLAYER_SIZE / 2) * ZOOM;
  rightWing.position.y = (PLAYER_SIZE / 4) * ZOOM;
  rightWing.position.x = (PLAYER_SIZE / 1.8) * ZOOM;
  rightWing.castShadow = true;
  rightWing.receiveShadow = false;
  player.add(rightWing);

  const tail = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * ZOOM, 2 * ZOOM, 4 * ZOOM),
    new THREE.MeshLambertMaterial({
      color: COLORS.FISH.YELLOW,
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
