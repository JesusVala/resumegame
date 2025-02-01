import { IMAGES } from "../../assets/images.js";
import {
  BOARD_WIDTH,
  POSITION_WIDTH,
  TILE_SIZE,
  ZOOM,
} from "../../constants.js";
const threeHeights = [20, 45, 60];



/**
 * Generates a Three object in a random height
 * @returns THREE.Group
 */
export function Three() {
  const three = new THREE.Group();

  const trunk = new THREE.Mesh(
    new THREE.BoxBufferGeometry(15 * ZOOM, 15 * ZOOM, 20 * ZOOM),
    new THREE.MeshPhongMaterial({ color: 0x4d2926, flatShading: true }),
  );
  trunk.position.z = 10 * ZOOM;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  three.add(trunk);

  const height = threeHeights[Math.floor(Math.random() * threeHeights.length)];

  const crown = new THREE.Mesh(
    new THREE.BoxBufferGeometry(30 * ZOOM, 30 * ZOOM, height * ZOOM),
    new THREE.MeshLambertMaterial({ color: 0x7aa21d, flatShading: true }),
  );
  crown.position.z = (height / 2 + 20) * ZOOM;
  crown.castShadow = true;
  crown.receiveShadow = false;
  three.add(crown);

  return three;
}

/**
 * Generates a tile of grass to put in the floor
 * @returns THREE.Group
 */
export function Grass() {
  const grass = new THREE.Group();

  const createSection = (color) =>
    new THREE.Mesh(
      new THREE.BoxBufferGeometry(
        BOARD_WIDTH * ZOOM,
        POSITION_WIDTH * ZOOM,
        //3 * ZOOM,
      ),
      new THREE.MeshPhongMaterial({ color }),
    );

  const middle = createSection(0xbaf455);
  middle.receiveShadow = true;
  grass.add(middle);

  const left = createSection(0x99C846);
  left.position.x = -BOARD_WIDTH * ZOOM;
  grass.add(left);

  const right = createSection(0x99C846);
  right.position.x = BOARD_WIDTH * ZOOM;
  grass.add(right);

  grass.position.z = 1.5 * ZOOM;
  return grass;
}

export function GrassTile() {
  const grass = new THREE.Group();

  const createSection = (color) =>
    new THREE.Mesh(
      new THREE.BoxBufferGeometry(
        TILE_SIZE * ZOOM,
        POSITION_WIDTH * ZOOM,
        //3 * ZOOM,
      ),
      new THREE.MeshPhongMaterial({ color }),
      //new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load(IMAGES.TEXTURES.DUMMY.IMAGE_600_400) } ),
    );

  const tile = createSection(0xbaf455);
  tile.receiveShadow = true;
  grass.add(tile);

  grass.position.z = 1.5 * ZOOM;
  return grass;
}

export function RoadTile() {
  const grass = new THREE.Group();

  const createSection = (color) =>
    new THREE.Mesh(
      new THREE.BoxBufferGeometry(
        TILE_SIZE * ZOOM,
        POSITION_WIDTH * ZOOM,
        //3 * ZOOM,
      ),
      new THREE.MeshPhongMaterial({ color }),
    );

  const tile = createSection(0x454A59);
  tile.receiveShadow = true;
  grass.add(tile);

  grass.position.z = 1.5 * ZOOM;
  return grass;
}

export function WaterTile() {
  const grass = new THREE.Group();

  const createSection = (color) =>
    new THREE.Mesh(
      new THREE.BoxBufferGeometry(
        TILE_SIZE * ZOOM,
        POSITION_WIDTH * ZOOM,
        //3 * ZOOM,
      ),
      new THREE.MeshPhongMaterial({ color }),
    );

  const tile = createSection(0x0080FF);
  tile.receiveShadow = true;
  grass.add(tile);

  grass.position.z = 1.5 * ZOOM;
  return grass;
}

/**
 * Generates a Three object for an tile of grass
 * @returns THREE.Group
 */
export function ThreeTile() {
  const three = new THREE.Group();

  const trunk = new THREE.Mesh(
    new THREE.BoxBufferGeometry(15 * ZOOM, 15 * ZOOM, 20 * ZOOM),
    new THREE.MeshPhongMaterial({ color: 0x4d2926, flatShading: true }),
  );
  trunk.position.z = 10 * ZOOM;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  three.add(trunk);

  const height = threeHeights[Math.floor(Math.random() * threeHeights.length)];

  const crown = new THREE.Mesh(
    new THREE.BoxBufferGeometry(30 * ZOOM, 30 * ZOOM, height * ZOOM),
    new THREE.MeshLambertMaterial({ color: 0x7aa21d, flatShading: true }),
  );
  crown.position.z = (height / 2 + 20) * ZOOM;
  crown.castShadow = true;
  crown.receiveShadow = false;
  three.add(crown);

  return three;
}

/**
 * Generates a Three object for an tile of grass
 * @returns THREE.Group
 */
export function RockTile() {
  const rock = new THREE.Group();

  const r1 = new THREE.Mesh(
    new THREE.IcosahedronGeometry(15 * ZOOM, 1),
    new THREE.MeshPhongMaterial({ color: 0x808080, flatShading: true }),
  );
  //r1.position.z = 10 * ZOOM;
  r1.castShadow = true;
  r1.receiveShadow = true;
  rock.add(r1);

  return rock;
}

export function CVBoard(){
  const board = new THREE.Group();

  const trunk = new THREE.Mesh(
    new THREE.BoxBufferGeometry(5 * ZOOM, 5 * ZOOM, 80 * ZOOM),
    new THREE.MeshPhongMaterial({ color: 0x808080, flatShading: true }),
  );
  trunk.position.z = 40 * ZOOM;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  board.add(trunk);

  const sign = new THREE.Mesh(
    new THREE.BoxBufferGeometry(130 * ZOOM, 5 * ZOOM, 80 * ZOOM),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABZBAMAAAC08tVoAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAeUExURQAAABYcLhYcLj6GmFqzrEBOddW1g5d7a+/hq////55qkaMAAAACdFJOUwBQHficzAAAAAFiS0dECfHZpewAAAAHdElNRQfpAR8WMCFDAXf8AAAAAW9yTlQBz6J3mgAAA0dJREFUSMftlrty4kAQRUGZs8VfoL0CYVKNKed4qjbHxQ8oGHCqAOUEqiElsv52b7cQRi+0yWbuAAQ66vd0azL5kf8lwD+CARD+G49ISGAUDfCehPw0dgwN5lbIubVWvXhgfG43oXza9+SxUrwqaaygD8mIJAJYa+Yj5iPzukFlXBx+SFqjpN3MR8jImK26aWEehoTI7HYfRtD1x0OSOV/vjDF0IFmMpGlBnQmLGSUjVQqIbqXsSMZqrxScw3q0TQRYHl26w3hHBVSppEvH2iR2KvxOoU+i/wlV6Q6+SFE4qD9x2k8uCXpKAe+c9PXG9fvLcKjRl18eL/4E9vUAGUDJc+l9+uLJYD5oPL9a9ynobAg7QGKp3JnWT5nQw2SubvqyLIvs/FWQXPaSgZBqu/RFJgmA+bNHr/FjRZYl9TGuFK+bZQ+JG+mF9CXzH5llFvaAeYP0zGhk3nJ0nARIHnwlRcqrYgXzFqPjZFaTZ/GTqSd5MaadJ8aNb9JrkbxfXSKDVj3pJNHausRdk0ncJTMW81DckafVBW3zjCfPU9QkUy8RnVZHRDZqklR5dEzolfRKYuXSyL43HGVArOQ+iw9VQs9f+wPT+emkTHGbZNqBK+k9SR6mwwm2Qx71pIHRu4o8yaHyHKiNkGoylYMeC8rLWGpLEo2QtDtqFHre5UDziJgO6XqEB5Tjv0VKF8tJb5Cf7tTRGWBZoV5nQ6Enz33SmdcOqeNDG65WzbSiS05QocpWI0eqibBL6kisUuWuHQWsdJWh06Eq8bXrT/JjpauvTdbovQjZ1VlP7zsJn/gndyS65OKeW2wrEn3kbXtQdryUPzftkR/U979FyEAapqnzyplv8GOHp6oijTFSqVxwHd5AI6SobJJ8dJ/JPpQlW8laySTmjQbJP0TpjSO5xdMl6iNlNNyppPFQSBkZkybpcqj5GmToTzAJ8qyPVLTOkb5nJe3Ec7vt87uUbjXfAednZ9ey57OQKu/KqW8cy04pJaHT50aD/J70z3nemTVbib8HdsdsVt0XUXQ2sI+mMzE+u8pzRfbuuOk9WKFD5M307OZA/y6ezjryPLDfe8iBd4au0sH3kDb64N2m4cCvyWOZ3vT9yE3+AkeBuA+G1edxAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTAxLTMxVDIyOjQ4OjE4KzAwOjAwsHzXFgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wMS0zMVQyMjo0ODoxOCswMDowMMEhb6oAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDEtMzFUMjI6NDg6MzMrMDA6MDDWFh3yAAAAAElFTkSuQmCC' ) })
    //new THREE.MeshPhongMaterial({ color: 0x808080, flatShading: true }),
  );
  sign.position.z = 120 * ZOOM;
  sign.castShadow = true;
  sign.receiveShadow = true;
  board.add(sign);

  return board;
}

/**
 * Generates a tile of grass to put in the floor
 * @returns
 */
export function Road() {
  const road = new THREE.Group();

  const createSection = (color) =>
    new THREE.Mesh(
      new THREE.PlaneBufferGeometry(BOARD_WIDTH * ZOOM, POSITION_WIDTH * ZOOM),
      new THREE.MeshPhongMaterial({ color }),
    );

  const middle = createSection(0x454A59);
  middle.receiveShadow = true;
  road.add(middle);

  const left = createSection(0x393D49);
  left.position.x = -BOARD_WIDTH * ZOOM;
  road.add(left);

  const right = createSection(0x393D49);
  right.position.x = BOARD_WIDTH * ZOOM;
  road.add(right);

  return road;
}
