import { ZOOM } from "../../constants.js";

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
