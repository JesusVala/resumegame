import { CanvasTexture } from "../player.js";
import { COLORS } from "./colors.js";

export const TEXTURES = {
  COW: {
    RIGHT: new CanvasTexture(70, 70, [
      { x: 0, y: 20, w: 20, h: 40, color: COLORS.COW.BROWN },
      { x: 20, y: 30, w: 10, h: 20, color: COLORS.COW.BROWN },
      { x: 30, y: 0, w: 10, h: 10, color: COLORS.COW.PINK },
    ]),
    LEFT: new CanvasTexture(70, 70, [
      { x: 50, y: 0, w: 20, h: 40, color: COLORS.COW.BROWN },
      { x: 40, y: 0, w: 10, h: 30, color: COLORS.COW.BROWN },
      { x: 30, y: 10, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 50, y: 60, w: 20, h: 10, color: COLORS.COW.BROWN },
      { x: 10, y: 40, w: 20, h: 10, color: COLORS.COW.BROWN },
      { x: 30, y: 0, w: 10, h: 10, color: COLORS.COW.PINK },
    ]),
    FRONT: new CanvasTexture(70, 70, [
      { x: 30, y: 60, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 0, y: 40, w: 30, h: 30, color: COLORS.COW.BROWN },
      { x: 10, y: 30, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 10, y: 40, w: 10, h: 10, color: COLORS.COW.BLACK },
      { x: 50, y: 40, w: 10, h: 10, color: COLORS.COW.BLACK },
      { x: 0, y: 30, w: 10, h: 10, color: COLORS.COW.PINK },
      { x: 60, y: 30, w: 10, h: 10, color: COLORS.COW.PINK },
      { x: 20, y: 20, w: 30, h: 20, color: COLORS.COW.PINK },
    ]),
    BACK: new CanvasTexture(70, 70, [
      { x: 0, y: 0, w: 10, h: 20, color: COLORS.COW.BROWN },
      { x: 10, y: 0, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 30, y: 50, w: 10, h: 10, color: COLORS.COW.BLACK },
    ]),
    TOP: new CanvasTexture(70, 70, [
      { x: 0, y: 0, w: 30, h: 30, color: COLORS.COW.BROWN },
      { x: 30, y: 0, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 0, y: 30, w: 10, h: 10, color: COLORS.COW.BROWN },
      { x: 10, y: 10, w: 10, h: 10, color: COLORS.COW.BLACK },
      { x: 50, y: 10, w: 10, h: 10, color: COLORS.COW.BLACK },
      { x: 0, y: 60, w: 20, h: 10, color: COLORS.COW.BROWN },
      { x: 60, y: 20, w: 10, h: 40, color: COLORS.COW.BROWN },
      { x: 50, y: 30, w: 10, h: 10, color: COLORS.COW.BROWN },
    ]),
  },
  PANDA: {
    RIGHT: new CanvasTexture(64, 64, [
      { x: 40, y: 8, w: 24, h: 48, color: COLORS.GENERAL.BLACK },
      { x: 24, y: 16, w: 16, h: 32, color: COLORS.GENERAL.BLACK },
      { x: 8, y: 32, w: 16, h: 16, color: COLORS.GENERAL.BLACK },
      { x: 0, y: 40, w: 8, h: 8, color: COLORS.GENERAL.BLACK },
    ]),
    LEFT: new CanvasTexture(64, 64, [
      { x: 0, y: 8, w: 24, h: 48, color: COLORS.GENERAL.BLACK },
      { x: 24, y: 16, w: 16, h: 32, color: COLORS.GENERAL.BLACK },
      { x: 40, y: 32, w: 16, h: 16, color: COLORS.GENERAL.BLACK },
      { x: 56, y: 40, w: 8, h: 8, color: COLORS.GENERAL.BLACK },
    ]),
    FRONT: new CanvasTexture(64, 64, [
      { x: 8, y: 32, w: 16, h: 16, color: COLORS.GENERAL.BLACK },
      { x: 40, y: 32, w: 16, h: 16, color: COLORS.GENERAL.BLACK },
      { x: 24, y: 16, w: 16, h: 8, color: COLORS.GENERAL.BLACK },
    ]),
    BACK: new CanvasTexture(64, 64, [
      { x: 24, y: 40, w: 16, h: 16, color: COLORS.GENERAL.BLACK },
    ]),
    TOP: new CanvasTexture(64, 64, [
      { x: 0, y: 8, w: 24, h: 8, color: COLORS.GENERAL.BLACK },
      { x: 40, y: 8, w: 24, h: 8, color: COLORS.GENERAL.BLACK },
      { x: 0, y: 40, w: 64, h: 8, color: COLORS.GENERAL.BLACK },
    ]),
  },
  BEAR: {
    RIGHT: new CanvasTexture(64, 64, [
      { x: 0, y: 0, w: 64, h: 64, color: COLORS.BEAR.BROWN },
      { x: 32, y: 0, w: 8, h: 8, color: COLORS.BEAR.PINK },
    ]),
    LEFT: new CanvasTexture(64, 64, [
      { x: 0, y: 0, w: 64, h: 64, color: COLORS.BEAR.BROWN },
      { x: 24, y: 0, w: 8, h: 8, color: COLORS.BEAR.PINK },
    ]),
    FRONT: new CanvasTexture(64, 64, [
      { x: 0, y: 0, w: 64, h: 64, color: COLORS.BEAR.BROWN },
      { x: 16, y: 40, w: 8, h: 8, color: COLORS.GENERAL.BLACK },
      { x: 40, y: 40, w: 8, h: 8, color: COLORS.GENERAL.BLACK },
      { x: 0, y: 24, w: 8, h: 8, color: COLORS.BEAR.PINK },
      { x: 56, y: 24, w: 8, h: 8, color: COLORS.BEAR.PINK },
    ]),
  },
  PORK: {
    RIGHT: new CanvasTexture(64, 64, [
      { x: 0, y: 0, w: 64, h: 64, color: COLORS.PORK.PINK },
      { x: 32, y: 0, w: 8, h: 8, color: COLORS.PORK.DARKPINK },
      { x: 56, y: 0, w: 8, h: 64, color: COLORS.PORK.BROWN },
      { x: 48, y: 0, w: 8, h: 16, color: COLORS.PORK.BROWN },
      { x: 48, y: 32, w: 16, h: 16, color: COLORS.PORK.BROWN },
    ]),
    LEFT: new CanvasTexture(64, 64, [
      { x: 0, y: 0, w: 64, h: 64, color: COLORS.PORK.PINK },
      { x: 24, y: 0, w: 8, h: 8, color: COLORS.PORK.DARKPINK },
      { x: 0, y: 0, w: 8, h: 64, color: COLORS.PORK.BROWN },
      { x: 8, y: 0, w: 8, h: 16, color: COLORS.PORK.BROWN },
      { x: 8, y: 32, w: 16, h: 16, color: COLORS.PORK.BROWN },
    ]),
    FRONT: new CanvasTexture(64, 64, [
      { x: 0, y: 0, w: 64, h: 64, color: COLORS.PORK.PINK },
      { x: 16, y: 40, w: 8, h: 8, color: COLORS.GENERAL.BLACK },
      { x: 40, y: 40, w: 8, h: 8, color: COLORS.GENERAL.BLACK },
      { x: 0, y: 24, w: 8, h: 8, color: COLORS.PORK.DARKPINK },
      { x: 56, y: 24, w: 8, h: 8, color: COLORS.PORK.DARKPINK },
      { x: 0, y: 0, w: 16, h: 8, color: COLORS.PORK.BROWN },
      { x: 48, y: 0, w: 16, h: 8, color: COLORS.PORK.BROWN },
    ]),
    BACK: new CanvasTexture(64, 64, [
      { x: 0, y: 0, w: 64, h: 64, color: COLORS.PORK.PINK },
      { x: 0, y: 56, w: 64, h: 8, color: COLORS.PORK.BROWN },
      { x: 40, y: 40, w: 16, h: 16, color: COLORS.PORK.BROWN },
    ]),
  },
};
