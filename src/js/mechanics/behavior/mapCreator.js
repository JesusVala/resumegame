import {
  BOARD_WIDTH,
  COLUMNS,
  LANE_SPEEDS,
  LANE_TYPES,
  POSITION_WIDTH,
  ZOOM,
} from "../../constants.js";
import { Grass, GrassTile, RoadTile, Road, Three } from "../objects/enviroment.js";
import { Car, Truck } from "../objects/vehicles.js";
import { INTROMAP, TILE_TYPE } from "../maps/intro_map.js";

export function generateMap(scene) {
  for (let x = 0; x < INTROMAP.length; x++) {
    for (let y = 0; y < INTROMAP[x].length; y++) {
      //generateTile(INTROMAP, x, y);
      const tile = new Tile(INTROMAP[x][y], x, y);
      //tile.mesh.position.x = x * ZOOM;
      tile.mesh.position.x = (x * POSITION_WIDTH * ZOOM) -
        (POSITION_WIDTH * ZOOM);
      tile.mesh.position.y = y * POSITION_WIDTH * ZOOM;
      scene.add(tile.mesh);
      //lane.mesh.position.y = index * POSITION_WIDTH * ZOOM;
      //scene.add(lane.mesh);
      //return lane;
    }
  }
}

function Tile(type, x_index, y_index) {
  this.x_index = x_index;
  this.y_index = y_index;
  this.type = TILE_TYPE[type];
  this.occupiedPositions = new Set();

  switch (this.type) {
    case "grass":
      this.mesh = new GrassTile();
      break;

    case "road":
      this.mesh = new RoadTile();
      break;
    default:
      this.mesh = new GrassTile();
      break;
  }
}

export const initaliseValues = (
  scene,
  _lanes,
  _currentLane,
  _currentColumn,
  _previousTimestamp,
  _startMoving,
  _moves,
  stepStartTimestamp,
  player,
  camera,
  dirLight,
) => {
  lanes = generateLanes(scene);

  currentLane = 0;
  currentColumn = Math.floor(COLUMNS / 2);

  previousTimestamp = null;

  startMoving = false;
  moves = [];
  stepStartTimestamp;

  player.position.x = 0;
  player.position.y = 0;

  camera.position.y = initialCameraPositionY;
  camera.position.x = initialCameraPositionX;

  dirLight.position.x = initialDirLightPositionX;
  dirLight.position.y = initialDirLightPositionY;
};

export const generateLanes = (scene) =>
  [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
    (index) => {
      const lane = new Lane(index);
      lane.mesh.position.y = index * POSITION_WIDTH * ZOOM;
      scene.add(lane.mesh);
      return lane;
    },
  ).filter((lane) => lane.index >= 0);

//Lane generator
export const addLane = (scene, lanes) => {
  const index = lanes.length;
  const lane = new Lane(index);
  lane.mesh.position.y = index * POSITION_WIDTH * ZOOM;
  scene.add(lane.mesh);
  lanes.push(lane);
};

function Lane(index) {
  this.index = index;
  this.type = index <= 0
    ? "field"
    : LANE_TYPES[Math.floor(Math.random() * LANE_TYPES.length)];

  switch (this.type) {
    case "field": {
      this.type = "field";
      this.mesh = new Grass();
      break;
    }
    case "forest": {
      this.mesh = new Grass();

      this.occupiedPositions = new Set();
      this.threes = [1, 2, 3, 4].map(() => {
        const three = new Three();
        let position;
        do {
          position = Math.floor(Math.random() * COLUMNS);
        } while (this.occupiedPositions.has(position));
        this.occupiedPositions.add(position);
        three.position.x =
          (position * POSITION_WIDTH + POSITION_WIDTH / 2) * ZOOM -
          BOARD_WIDTH * ZOOM / 2;
        this.mesh.add(three);
        return three;
      });
      break;
    }
    case "car": {
      this.mesh = new Road();
      this.direction = Math.random() >= 0.5;

      const occupiedPositions = new Set();
      this.vechicles = [1, 2, 3].map(() => {
        const vechicle = new Car();
        let position;
        do {
          position = Math.floor(Math.random() * COLUMNS / 2);
        } while (occupiedPositions.has(position));
        occupiedPositions.add(position);
        vechicle.position.x =
          (position * POSITION_WIDTH * 2 + POSITION_WIDTH / 2) * ZOOM -
          BOARD_WIDTH * ZOOM / 2;
        if (!this.direction) vechicle.rotation.z = Math.PI;
        this.mesh.add(vechicle);
        return vechicle;
      });

      this.speed = LANE_SPEEDS[Math.floor(Math.random() * LANE_SPEEDS.length)];
      break;
    }
    case "truck": {
      this.mesh = new Road();
      this.direction = Math.random() >= 0.5;

      const occupiedPositions = new Set();
      this.vechicles = [1, 2].map(() => {
        const vechicle = new Truck();
        let position;
        do {
          position = Math.floor(Math.random() * COLUMNS / 3);
        } while (occupiedPositions.has(position));
        occupiedPositions.add(position);
        vechicle.position.x =
          (position * POSITION_WIDTH * 3 + POSITION_WIDTH / 2) * ZOOM -
          BOARD_WIDTH * ZOOM / 2;
        if (!this.direction) vechicle.rotation.z = Math.PI;
        this.mesh.add(vechicle);
        return vechicle;
      });

      this.speed = LANE_SPEEDS[Math.floor(Math.random() * LANE_SPEEDS.length)];
      break;
    }
  }
}
