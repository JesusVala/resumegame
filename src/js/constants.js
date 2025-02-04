// DEV helper guides
export const DEV = true;

// Core time of game
export const STEP_TIME = 200; // Miliseconds it takes for the player to take a step forward, backward, left or right

// Camera properties to scale objects
export const ZOOM = 2;
export const DISTANCE = 500;

// Colors
export const BACKGROUND_COLOR = new THREE.Color().setHex(0x87ceeb);

//Lights
export const INITIAL_DIR_LIGHT_POSITION_X = -100;
export const INITIAL_DIR_LIGHT_POSITION_Y = -100;
export const INITIAL_DIR_LIGHT_SHADOW_BASE = 2000;

export const INITIAL_CAMERA_ROTATION_X = 50 * Math.PI / 180;
export const INITIAL_CAMERA_ROTATION_Y = 20 * Math.PI / 180;
export const INITIAL_CAMERA_ROTATION_Z = 10 * Math.PI / 180;

export const INITIAL_CAMERA_POSITION_Y = -Math.tan(INITIAL_CAMERA_ROTATION_X) *
  DISTANCE;
export const INITIAL_CAMERA_POSITION_X = Math.tan(INITIAL_CAMERA_ROTATION_Y) *
  Math.sqrt(DISTANCE ** 2 + INITIAL_CAMERA_POSITION_Y ** 2);

export const INITIAL = Object.freeze({
  DIR_LIGHT: {
    POSITION: {
      X: INITIAL_DIR_LIGHT_POSITION_X,
      Y: INITIAL_DIR_LIGHT_POSITION_Y,
    },
    SHADOW: {
      CAMERA: {
        LEFT: -INITIAL_DIR_LIGHT_SHADOW_BASE,
        RIGHT: INITIAL_DIR_LIGHT_SHADOW_BASE,
        TOP: INITIAL_DIR_LIGHT_SHADOW_BASE,
        BOTTON: -INITIAL_DIR_LIGHT_SHADOW_BASE,
      },
    },
  },
  CAMERA: {
    ROTATION: {
      X: INITIAL_CAMERA_ROTATION_X,
      Y: INITIAL_CAMERA_ROTATION_Y,
      Z: INITIAL_CAMERA_ROTATION_Z,
    },
    POSITION: {
      X: INITIAL_CAMERA_POSITION_X,
      Y: INITIAL_CAMERA_POSITION_Y,
    },
  },
});
//Player size
export const PLAYER_SIZE = 15;

//Sizes of map
export const POSITION_WIDTH = 42;
export const COLUMNS = 3;
export const LANES = 3;
export const BOARD_WIDTH = POSITION_WIDTH * COLUMNS;
export const TILE_SIZE = 42;

//Lane
export const LANE_TYPES = ["car", "truck", "forest"];
export const LANE_SPEEDS = [2, 2.5, 3];
