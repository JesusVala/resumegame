// deno-lint-ignore-file
/**
 * Description:
 *  Makes a scene to work with the game
 */

import {
  BACKGROUND_COLOR,
  BOARD_WIDTH,
  DISTANCE,
  INITIAL,
  PLAYER_INITIAL_X,
  PLAYER_INITIAL_Y,
  PLAYER_SIZE,
  POSITION_WIDTH,
  STEP_TIME,
  ZOOM,
} from "./constants.js";
import {
  addLane,
  generateLanes,
  generateMap,
} from "./mechanics/behavior/mapCreator.js";
import { INTROMAP, TILETYPE } from "./mechanics/maps/intro_map.js";
import { Player } from "./mechanics/objects/player/player.js";

//Counter of points to make
const counterDOM = document.getElementById("counter_points");
//Game over dialog
const endDOM = document.getElementById("end");
const dialogDOM = document.getElementById("dialog");

const LANES = INTROMAP[0].length;
const COLUMNS = INTROMAP.length;
const scene = new THREE.Scene();
scene.background = BACKGROUND_COLOR;

const camera = new THREE.OrthographicCamera(
  globalThis.innerWidth / -2,
  globalThis.innerWidth / 2,
  globalThis.innerHeight / 2,
  globalThis.innerHeight / -2,
  0.1,
  10000,
); // Size of the camera vision

//Inclination fo camera
camera.rotation.x = INITIAL.CAMERA.ROTATION.X;
camera.rotation.y = INITIAL.CAMERA.ROTATION.Y;
camera.rotation.z = INITIAL.CAMERA.ROTATION.Z;

//Initial potition of camera
camera.position.y = INITIAL.CAMERA.POSITION.Y;
camera.position.x = INITIAL.CAMERA.POSITION.X;
camera.position.z = DISTANCE;

//Player location variables
let lanes;
let currentLane;
let currentColumn;

//Timestamps variables
let stepStartTimestamp;
let previousTimestamp;
let startMoving;
let moves;
let pointDirection;

//Creation of player
const player = new Player("frog");
scene.add(player);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(
  INITIAL.DIR_LIGHT.POSITION.X,
  INITIAL.DIR_LIGHT.POSITION.Y,
  200,
);
dirLight.castShadow = true;
dirLight.target = player;
scene.add(dirLight);

dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.left = INITIAL.DIR_LIGHT.SHADOW.CAMERA.LEFT;
dirLight.shadow.camera.right = INITIAL.DIR_LIGHT.SHADOW.CAMERA.RIGHT;
dirLight.shadow.camera.top = INITIAL.DIR_LIGHT.SHADOW.CAMERA.TOP;
dirLight.shadow.camera.bottom = INITIAL.DIR_LIGHT.SHADOW.CAMERA.BOTTON;

const backLight = new THREE.DirectionalLight(0x000000, .4);
backLight.position.set(200, 200, 50);
backLight.castShadow = true;
scene.add(backLight);

const initaliseValues = () => {
  //lanes = generateLanes(scene);
  lanes = generateMap(scene);

  currentLane = 0;
  currentColumn = 1;
  //currentColumn = Math.floor(COLUMNS / 2);

  previousTimestamp = null;

  startMoving = false;
  moves = [];
  stepStartTimestamp;
  pointDirection = "forward";

  player.position.x = 0;
  player.position.y = 0;
  player.rotation.z = 0;

  camera.position.y = INITIAL.CAMERA.POSITION.Y;
  camera.position.x = INITIAL.CAMERA.POSITION.X;

  dirLight.position.x = INITIAL.DIR_LIGHT.POSITION.X;
  dirLight.position.y = INITIAL.DIR_LIGHT.POSITION.Y;
};

initaliseValues();

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(globalThis.innerWidth, globalThis.innerHeight);
document.body.appendChild(renderer.domElement);

/**
 * ---------------------------------------
 * ----     Behavior functions        ----
 * ---------------------------------------
 */

//Player movement
function move(direction) {
  if (moves.length >= 2) return;

  const finalPositions = moves.reduce((position, move) => {
    if (move === "forward") {
      return { lane: position.lane + 1, column: position.column };
    }
    if (move === "backward") {
      return { lane: position.lane - 1, column: position.column };
    }
    if (move === "left") {
      return { lane: position.lane, column: position.column - 1 };
    }
    if (move === "right") {
      return { lane: position.lane, column: position.column + 1 };
    }
  }, { lane: currentLane, column: currentColumn });

  if (direction === "forward") {
    if (finalPositions.lane === LANES - 1) return;
    if (
      lanes[finalPositions.column][finalPositions.lane + 1].occupiedPosition ===
        true
      //lanes[finalPositions.lane + 1].type === "forest"
      //lanes[finalPositions.lane + 1].occupiedPositions.has(finalPositions.column,)
    ) return;
    if (!stepStartTimestamp) startMoving = true;
    //addLane(scene, lanes);
  } else if (direction === "backward") {
    if (finalPositions.lane === 0) return;
    if (
      lanes[finalPositions.column][finalPositions.lane - 1].occupiedPosition ===
        true
      //lanes[finalPositions.lane - 1].type === "forest"
      //lanes[finalPositions.lane - 1].occupiedPositions.has(finalPositions.column,)
    ) return;
    if (!stepStartTimestamp) startMoving = true;
  } else if (direction === "left") {
    if (finalPositions.column === 0) return;
    if (
      lanes[finalPositions.column - 1][finalPositions.lane].occupiedPosition ===
        true
      //lanes[finalPositions.lane].type === "forest"
      //lanes[finalPositions.lane].occupiedPositions.has(finalPositions.column - 1,)
    ) return;
    if (!stepStartTimestamp) startMoving = true;
  } else if (direction === "right") {
    if (finalPositions.column === COLUMNS - 1) return;
    if (
      lanes[finalPositions.column + 1][finalPositions.lane].occupiedPosition ===
        true
      //lanes[finalPositions.lane].type === "forest"
      //lanes[finalPositions.lane].occupiedPositions.has(finalPositions.column + 1,)
    ) return;
    if (!stepStartTimestamp) startMoving = true;
  }
  moves.push(direction);
}

// Initialize values after game over
document.querySelector("#retry").addEventListener("click", () => {
  lanes.forEach((lane) => lane.forEach((tile) => scene.remove(tile)));
  initaliseValues();
  endDOM.style.visibility = "hidden";
});

document.querySelector("#dialog").addEventListener("click", () => {
  dialogDOM.style.visibility = "hidden";
});

// Key map of buttons
document.getElementById("forward").addEventListener(
  "click",
  () => move("forward"),
);
document.getElementById("backward").addEventListener(
  "click",
  () => move("backward"),
);
document.getElementById("left").addEventListener("click", () => move("left"));
document.getElementById("right").addEventListener("click", () => move("right"));
document.getElementById("action_q").addEventListener(
  "click",
  () => talk(),
);

// Key map arrows
globalThis.addEventListener("keydown", (event) => {
  if (event.keyCode == "38") {
    // up arrow
    move("forward");
  } else if (event.keyCode == "40") {
    // down arrow
    move("backward");
  } else if (event.keyCode == "37") {
    // left arrow
    move("left");
  } else if (event.keyCode == "39") {
    // right arrow
    move("right");
  } else if ("action") {
    talk();
  }
});

const getTalkable = () => {
  if (currentLane < LANES && lanes[currentColumn][currentLane + 1].talkable) {
    return lanes[currentColumn][currentLane + 1].talk;
  }
  if (currentLane > 0 && lanes[currentColumn][currentLane - 1].talkable) {
    return lanes[currentColumn][currentLane - 1].talk;
  }
  if (
    currentColumn < COLUMNS && lanes[currentColumn + 1][currentLane].talkable
  ) {
    return lanes[currentColumn + 1][currentLane].talk;
  }
  if (currentColumn > 0 && lanes[currentColumn - 1][currentLane].talkable) {
    return lanes[currentColumn - 1][currentLane].talk;
  }
  return false;
};

function talk() {
  const talk = getTalkable();
  if (
    talk !== false
  ) {
    if (dialogDOM.style.visibility === "visible") {
      dialogDOM.style.visibility = "hidden";
    } else {
      dialogDOM.children[0].innerHTML = talk;
      dialogDOM.style.visibility = "visible";
    }
  } else {
    if (dialogDOM.style.visibility === "visible") {
      dialogDOM.style.visibility = "hidden";
    }
  }
}

function animate(timestamp) {
  requestAnimationFrame(animate);

  if (!previousTimestamp) previousTimestamp = timestamp;
  const delta = timestamp - previousTimestamp;
  previousTimestamp = timestamp;

  //Animation

  lanes.forEach((lane) => {
    lane.forEach((element) => {
      if (
        element.type === TILETYPE.COIN_GRASS ||
        element.type === TILETYPE.COIN_ROAD
      ) {
        element.mesh.children.forEach((obj) => {
          if (obj.name === "coin") {
            obj.rotation.z += (1 / 100) * delta;
          }
        });
      }
    });
  });
  // Animate cars and trucks moving on the lane
  /*
  lanes.forEach((lane) => {
    if (lane.type === "car" || lane.type === "truck") {
      const aBitBeforeTheBeginingOfLane = -BOARD_WIDTH * ZOOM / 2 -
        POSITION_WIDTH * 2 * ZOOM;
      const aBitAfterTheEndOFLane = BOARD_WIDTH * ZOOM / 2 +
        POSITION_WIDTH * 2 * ZOOM;
      lane.vechicles.forEach((vechicle) => {
        if (lane.direction) {
          vechicle.position.x =
            vechicle.position.x < aBitBeforeTheBeginingOfLane
              ? aBitAfterTheEndOFLane
              : vechicle.position.x -= lane.speed / 16 * delta;
        } else {
          vechicle.position.x = vechicle.position.x > aBitAfterTheEndOFLane
            ? aBitBeforeTheBeginingOfLane
            : vechicle.position.x += lane.speed / 16 * delta;
        }
      });
    }
  });
  */

  if (startMoving) {
    stepStartTimestamp = timestamp;
    startMoving = false;
  }

  if (stepStartTimestamp) {
    const moveDeltaTime = timestamp - stepStartTimestamp;
    const moveDeltaDistance = Math.min(moveDeltaTime / STEP_TIME, 1) *
      POSITION_WIDTH * ZOOM;
    const jumpDeltaDistance =
      Math.sin(Math.min(moveDeltaTime / STEP_TIME, 1) * Math.PI) * 8 * ZOOM;
    switch (moves[0]) {
      case "forward": {
        const positionY = currentLane * POSITION_WIDTH * ZOOM +
          moveDeltaDistance;
        camera.position.y = INITIAL.CAMERA.POSITION.Y + positionY;
        dirLight.position.y = INITIAL.DIR_LIGHT.POSITION.Y + positionY;
        player.position.y = positionY; // initial player position is 0
        player.position.z = jumpDeltaDistance;

        //Rotations goal to 0
        switch (pointDirection) {
          case "left":
            player.rotation.z = -(Math.min(moveDeltaTime / STEP_TIME, 1) - 1) *
              Math.PI / 2;
            break;
          case "right":
            player.rotation.z = (Math.min(moveDeltaTime / STEP_TIME, 1) - 1) *
              Math.PI / 2;
            break;
          case "backward":
            player.rotation.z = (Math.min(moveDeltaTime / STEP_TIME, 1) - 1) *
              Math.PI;
            break;
          default:
            break;
        }

        break;
      }
      case "backward": {
        const positionY = currentLane * POSITION_WIDTH * ZOOM -
          moveDeltaDistance;
        camera.position.y = INITIAL.CAMERA.POSITION.Y + positionY;
        dirLight.position.y = INITIAL.DIR_LIGHT.POSITION.Y + positionY;
        player.position.y = positionY;
        player.position.z = jumpDeltaDistance;

        //Rotations goal to PI
        switch (pointDirection) {
          case "forward":
            player.rotation.z = -((Math.min(moveDeltaTime / STEP_TIME, 1)) *
              Math.PI);
            break;
          case "left":
            player.rotation.z =
              (Math.min(moveDeltaTime / STEP_TIME, 1) * Math.PI / 2) +
              Math.PI / 2;
            break;
          case "right":
            player.rotation.z =
              -((Math.min(moveDeltaTime / STEP_TIME, 1) * Math.PI / 2) +
                Math.PI / 2);
            break;
          default:
            break;
        }

        break;
      }
      case "left": {
        const positionX =
          (currentColumn * POSITION_WIDTH + POSITION_WIDTH / 2) * ZOOM -
          BOARD_WIDTH * ZOOM / 2 - moveDeltaDistance;
        camera.position.x = INITIAL.CAMERA.POSITION.X + positionX;
        dirLight.position.x = INITIAL.DIR_LIGHT.POSITION.X + positionX;
        player.position.x = positionX; // initial player position is 0
        player.position.z = jumpDeltaDistance;

        //Rotations goal to PI/2
        switch (pointDirection) {
          case "forward":
            player.rotation.z = (Math.min(moveDeltaTime / STEP_TIME, 1)) *
              Math.PI / 2;
            break;
          case "backward":
            player.rotation.z = -((Math.min(moveDeltaTime / STEP_TIME, 1) *
              Math.PI / 2) - Math.PI);
            break;
          case "right":
            player.rotation.z = -((Math.min(moveDeltaTime / STEP_TIME, 1) *
              Math.PI) + Math.PI / 2);
            break;
          default:
            break;
        }

        break;
      }
      case "right": {
        const positionX =
          (currentColumn * POSITION_WIDTH + POSITION_WIDTH / 2) * ZOOM -
          BOARD_WIDTH * ZOOM / 2 + moveDeltaDistance;
        camera.position.x = INITIAL.CAMERA.POSITION.X + positionX;
        dirLight.position.x = INITIAL.DIR_LIGHT.POSITION.X + positionX;
        player.position.x = positionX;
        player.position.z = jumpDeltaDistance;

        //Rotations goal to -PI/2
        switch (pointDirection) {
          case "forward":
            player.rotation.z = -((Math.min(moveDeltaTime / STEP_TIME, 1)) *
              Math.PI / 2);
            break;
          case "backward":
            player.rotation.z = (Math.min(moveDeltaTime / STEP_TIME, 1) *
              Math.PI / 2) - Math.PI;
            break;
          case "left":
            player.rotation.z = (Math.min(moveDeltaTime / STEP_TIME, 1) *
              Math.PI) + Math.PI / 2;
            break;
          default:
            break;
        }

        break;
      }
    }
    // Once a step has ended
    if (moveDeltaTime > STEP_TIME) {
      switch (moves[0]) {
        case "forward": {
          currentLane++;
          //counterDOM.innerHTML = currentLane;
          pointDirection = "forward";
          break;
        }
        case "backward": {
          currentLane--;
          //counterDOM.innerHTML = currentLane;
          pointDirection = "backward";
          break;
        }
        case "left": {
          currentColumn--;
          pointDirection = "left";
          break;
        }
        case "right": {
          currentColumn++;
          pointDirection = "right";
          break;
        }
      }
      moves.shift();
      // If more steps are to be taken then restart counter otherwise stop stepping
      stepStartTimestamp = moves.length === 0 ? null : timestamp;
    }
  }

  // Hit test coin collector
  if (lanes[currentColumn][currentLane].type === TILETYPE.COIN_GRASS) {
    lanes[currentColumn][currentLane].mesh.children.pop();
    lanes[currentColumn][currentLane].type = TILETYPE.GRASS;
    ++counterDOM.innerHTML;
  }

  if (lanes[currentColumn][currentLane].type === TILETYPE.COIN_ROAD) {
    lanes[currentColumn][currentLane].mesh.children.pop();
    lanes[currentColumn][currentLane].type = TILETYPE.ROAD;
    ++counterDOM.innerHTML;
  }

  /*
   lanes.forEach((lane) => {
    lane.forEach((element) => {
      if(element.type === TILETYPE.COIN){
        element.mesh.children.forEach((obj) => {
          if(obj.name === 'coin'){
            obj.rotation.z += (1/100) * delta;
          }
        })

      }
    });
  } );
   */

  // Hit test
  /*
  if (
    lanes[currentLane].type === "car" || lanes[currentLane].type === "truck"
  ) {
    const playerMinX = player.position.x - PLAYER_SIZE * ZOOM / 2;
    const playerMaxX = player.position.x + PLAYER_SIZE * ZOOM / 2;
    const vechicleLength = { car: 60, truck: 105 }[lanes[currentLane].type];
    lanes[currentLane].vechicles.forEach((vechicle) => {
      const carMinX = vechicle.position.x - vechicleLength * ZOOM / 2;
      const carMaxX = vechicle.position.x + vechicleLength * ZOOM / 2;
      if (playerMaxX > carMinX && playerMinX < carMaxX) {
        endDOM.style.visibility = "visible";
      }
    });
  }
    */
  renderer.render(scene, camera);
}

requestAnimationFrame(animate);
