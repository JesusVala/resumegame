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
  ConstructionBuilding,
  LubtracBoard,
  LubtracContainner,
  mailBuilding,
  TourBuilding,
} from "../objects/building.js";
import {
  Coin,
  monoliteTechnologies,
  talkableCharacter,
} from "../objects/actionables.js";
import { TEXT } from "../../assets/textCharacter.js";

export function generateMap(scene) {
  const tileMap = new Array(INTROMAP.length);
  for (let x = 0; x < INTROMAP.length; x++) {
    tileMap[x] = new Array(INTROMAP[x].length);
    for (let y = 0; y < INTROMAP[x].length; y++) {
      const tile = new Tile(INTROMAP[x][y], x, y);
      tile.mesh.position.x = (x * POSITION_WIDTH * ZOOM) -
        (POSITION_WIDTH * ZOOM);
      tile.mesh.position.y = y * POSITION_WIDTH * ZOOM;
      tile.mesh.position.z = 0;

      scene.add(tile.mesh);
      tileMap[x][y] = tile;
    }
  }
  console.log(tileMap);
  return tileMap;
}

function Tile(type, x_index, y_index) {
  this.x_index = x_index;
  this.y_index = y_index;
  this.type = type;
  this.occupiedPosition = false;
  this.talk = "";
  this.talkable = false;
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
      object = new monoliteTechnologies("sql");
      //object.rotation.z = -Math.PI / 2;
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
    case TILETYPE.COIN_GRASS:
      this.mesh = new GrassTile();
      object = new Coin();
      this.mesh.add(object);
      break;
    case TILETYPE.COIN_ROAD:
      this.mesh = new RoadTile();
      object = new Coin();
      this.mesh.add(object);
      break;
    case TILETYPE.CONSTRUCTION:
      this.mesh = new RoadTile();
      object = new ConstructionBuilding();
      this.mesh.add(object);
      this.occupiedPosition = true;
      break;
    case TILETYPE.PLAYER_AG:
      this.mesh = new RoadTile();
      object = new talkableCharacter("cow");
      object.rotation.z = -Math.PI / 2;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.AG;
      this.occupiedPosition = true;
      break;
    case TILETYPE.PLAYER_LUBTRAC:
      this.mesh = new RoadTile();
      object = new talkableCharacter("panda");
      object.rotation.z = -Math.PI / 2;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.LUBTRAC;
      this.occupiedPosition = true;
      break;
    case TILETYPE.PLAYER_BOSCH:
      this.mesh = new RoadTile();
      object = new talkableCharacter("bear");
      object.rotation.z = -Math.PI / 2;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.BOSCH;
      this.occupiedPosition = true;
      break;
    case TILETYPE.PLAYER_BUILDING:
      this.mesh = new RoadTile();
      object = new talkableCharacter("pork");
      object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.CONSTRUCTOR;
      this.occupiedPosition = true;
      break;
    case TILETYPE.PLAYER_MAIL:
      this.mesh = new RoadTile();
      object = new talkableCharacter("sheep");
      object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.MAIL;
      this.occupiedPosition = true;
      break;
    case TILETYPE.MAIL_BUILDING:
      this.mesh = new GrassTile();
      object = new mailBuilding();
      this.mesh.add(object);
      this.occupiedPosition = true;
      break;
    case TILETYPE.PLAYER_TOUR:
      this.mesh = new RoadTile();
      object = new talkableCharacter("sheep_pink");
      object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.TOUR_WELCOME;
      this.occupiedPosition = true;
      break;
    case TILETYPE.MONOLITE_JS:
      this.mesh = new GrassTile();
      object = new monoliteTechnologies("js");
      this.mesh.add(object);
      this.occupiedPosition = true;
      break;
    case TILETYPE.NPC_JS:
      this.mesh = new GrassTile();
      object = new talkableCharacter("bear");
      object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.JS;
      this.occupiedPosition = true;
      break;
    case TILETYPE.MONOLITE_HTML:
      this.mesh = new GrassTile();
      object = new monoliteTechnologies("html");
      this.mesh.add(object);
      this.occupiedPosition = true;
      break;
    case TILETYPE.NPC_HMTL:
      this.mesh = new GrassTile();
      object = new talkableCharacter("cow");
      object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.HTML;
      this.occupiedPosition = true;
      break;
    case TILETYPE.MONOLITE_REACT:
      this.mesh = new GrassTile();
      object = new monoliteTechnologies("react");
      this.mesh.add(object);
      this.occupiedPosition = true;
      break;
    case TILETYPE.NPC_REACT:
      this.mesh = new GrassTile();
      object = new talkableCharacter("sheep_black");
      object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.REACT;
      this.occupiedPosition = true;
      break;
    case TILETYPE.MONOLITE_SQL:
      this.mesh = new GrassTile();
      object = new monoliteTechnologies("sql");
      this.mesh.add(object);
      this.occupiedPosition = true;
      break;
    case TILETYPE.NPC_SQL:
      this.mesh = new GrassTile();
      object = new talkableCharacter("panda");
      object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.SQL;
      this.occupiedPosition = true;
      break;
    case TILETYPE.MONOLITE_GIT:
      this.mesh = new GrassTile();
      object = new monoliteTechnologies("git");
      this.mesh.add(object);
      this.occupiedPosition = true;
      break;
    case TILETYPE.NPC_GIT:
      this.mesh = new GrassTile();
      object = new talkableCharacter("sheep");
      object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.GIT;
      this.occupiedPosition = true;
      break;
    case TILETYPE.MONOLITE_AZURE:
      this.mesh = new GrassTile();
      object = new monoliteTechnologies("azure");
      this.mesh.add(object);
      this.occupiedPosition = true;
      break;
    case TILETYPE.NPC_AZURE:
      this.mesh = new GrassTile();
      object = new talkableCharacter("sheep_pink");
      object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.AZURE;
      this.occupiedPosition = true;
      break;
    case TILETYPE.MONOLITE_ITESO:
      this.mesh = new GrassTile();
      object = new monoliteTechnologies("iteso");
      this.mesh.add(object);
      this.occupiedPosition = true;
      break;
    case TILETYPE.NPC_ITESO:
      this.mesh = new GrassTile();
      object = new talkableCharacter("sheep");
      object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.ITESO;
      this.occupiedPosition = true;
      break;
    case TILETYPE.NPC_LAB:
      this.mesh = new GrassTile();
      object = new talkableCharacter("pork");
      object.rotation.z = Math.PI;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.NPM_LAB;
      this.occupiedPosition = true;
      break;
    case TILETYPE.NPC_FISH_1:
      this.mesh = new WaterTile();
      object = new talkableCharacter("fish");
      object.rotation.z = Math.PI / 2;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.FISH_1;
      this.occupiedPosition = true;
      break;
    case TILETYPE.NPC_WORKER:
      this.mesh = new GrassTile();
      object = new talkableCharacter("pork");
      object.rotation.z = -Math.PI / 2;
      this.mesh.add(object);
      this.talkable = true;
      this.talk = TEXT.NPC.WORKER;
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
