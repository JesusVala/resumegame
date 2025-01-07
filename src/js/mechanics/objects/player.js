/**
 * Generates a TREE.GROUP to act as a character player
 * @param {number} playerSize
 * @param {number} zoom
 * @returns
 */
export function Player(zoom, playerSize) {
  const player = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
      playerSize * zoom,
      playerSize * zoom,
      20 * zoom,
    ),
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
  );
  body.position.z = 10 * zoom;
  body.castShadow = true;
  body.receiveShadow = true;
  player.add(body);

  const rowel = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 * zoom, 4 * zoom, 2 * zoom),
    new THREE.MeshLambertMaterial({ color: 0xF0619A, flatShading: true }),
  );
  rowel.position.z = 21 * zoom;
  rowel.castShadow = true;
  rowel.receiveShadow = false;
  player.add(rowel);

  return player;
}
