import {
  BOARD_WIDTH,
  COLUMNS,
  LANE_SPEEDS,
  LANE_TYPES,
  POSITION_WIDTH,
  ZOOM,
} from "../../constants.js";
import {
  CVBoard,
  Grass,
  GrassTile,
  Road,
  RoadTile,
  RockTile,
  Three,
  ThreeTile,
  WaterTile,
} from "../objects/enviroment.js";
import { Car, Truck } from "../objects/vehicles.js";
import { INTROMAP, TILETYPE } from "../maps/intro_map.js";
import {
  AGBoard,
  AGBuilding,
  BoschBoard,
  BoschCubes,
  BoschDigital,
  BusSign,
  BusStop,
  LubtracBoard,
  LubtracContainner,
  TourBuilding,
} from "../objects/building.js";
import { Player } from "../objects/player/player.js";

export function generateMap(scene) {
  const tileMap = new Array(INTROMAP.length);
  for (let x = 0; x < INTROMAP.length; x++) {
    tileMap[x] = new Array(INTROMAP[x].length);
    for (let y = 0; y < INTROMAP[x].length; y++) {
      const tile = new Tile(INTROMAP[x][y], x, y);
      tile.mesh.position.x = (x * POSITION_WIDTH * ZOOM) -
        (POSITION_WIDTH * ZOOM);
      tile.mesh.position.y = y * POSITION_WIDTH * ZOOM;

      scene.add(tile.mesh);
      tileMap[x][y] = tile;
    }
  }
  return tileMap;
}

function Tile(type, x_index, y_index) {
  this.x_index = x_index;
  this.y_index = y_index;
  this.type = type;
  this.occupiedPosition = false;
  let object = null;

  switch (this.type) {
    case TILETYPE.GRASS:
      this.mesh = new GrassTile();
      break;
    case TILETYPE.ROAD:
      this.mesh = new RoadTile();
      break;
    case TILETYPE.THREE:
      this.mesh = new GrassTile();

      object = new ThreeTile();
      object.position.x = (POSITION_WIDTH * ZOOM) -
        (POSITION_WIDTH * ZOOM);

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.ROCK:
      this.mesh = new GrassTile();
      object = new RockTile();
      object.position.x = (POSITION_WIDTH * ZOOM) -
        (POSITION_WIDTH * ZOOM);

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.OCCUPIED:
      this.mesh = new RoadTile();
      this.occupiedPosition = true;
      break;
    case TILETYPE.WATER:
      this.mesh = new WaterTile();
      this.occupiedPosition = true;
      break;
    case TILETYPE.VEHICLE:
      this.mesh = new RoadTile();
      object = new Car();
      object.position.x = POSITION_WIDTH * ZOOM / 2;

      this.mesh.add(object);
      this.occupiedPosition = true;
      break;
    case TILETYPE.TEST:
      this.mesh = new GrassTile();
      object = new Player('sheep_pink');
      //object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.occupiedPosition = true;
      break;
    case TILETYPE.TOURBUILDING:
      this.mesh = new RoadTile();
      object = new TourBuilding();
      object.position.x = POSITION_WIDTH * ZOOM;
      object.position.y = (POSITION_WIDTH * ZOOM) / -2;

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.BOARD:
      this.mesh = new RoadTile();

      object = new CVBoard();

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.LUBTRAC_CONTAINNER:
      this.mesh = new RoadTile();
      object = new LubtracContainner();

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.LUBTRAC_BOARD:
      this.mesh = new RoadTile();
      object = new LubtracBoard();

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.BOSCH_CUBES:
      this.mesh = new RoadTile();
      object = new BoschCubes();

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.BOSCH_BOARD:
      this.mesh = new RoadTile();
      object = new BoschBoard();

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.BOSCH_DIGITAL:
      this.mesh = new RoadTile();
      object = new BoschDigital();

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.AG_BOARD:
      this.mesh = new RoadTile();
      object = new AGBoard();

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.BUS_SIGN:
      this.mesh = new GrassTile();
      object = new BusSign();

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.BUS_STOP:
      this.mesh = new GrassTile();
      object = new BusStop();

      this.mesh.add(object);

      this.occupiedPosition = true;
      break;
    case TILETYPE.AG_BUILDING:
      this.mesh = new RoadTile();
      object = new AGBuilding();
      this.mesh.add(object);
      this.occupiedPosition = true;
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
