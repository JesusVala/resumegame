import {
  POSITION_WIDTH,
  TILE_SIZE,
  ZOOM,
} from "../../constants.js";

export function TourBuilding() {
  const building = new THREE.Group();

  const box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      3 * TILE_SIZE * ZOOM,
      2 * POSITION_WIDTH * ZOOM,
      40 * ZOOM,
    ),
    new THREE.MeshPhongMaterial({ color: 0x9933FF, flatShading: true }),
  );
  box.position.z = 20 * ZOOM;
  box.castShadow = true;
  box.receiveShadow = true;
  building.add(box);

  return building;
}
