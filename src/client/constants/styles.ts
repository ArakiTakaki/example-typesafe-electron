import { createBoxShadow } from "../utils/styling";

export const basicUnevenness = (depth: number = 1) => createBoxShadow([
  {
    x: -2 * depth,
    y: -2 * depth,
    inset: true,
    blur: 3,
    color: {
      hex: 0xFFFFFF,
      opacity: 0.5,
    }
  },
  {
    x: 2 * depth,
    y: 2 * depth,
    inset: true,
    blur: 3,
    color: {
      hex: 0x000000,
      opacity: 0.1,
    }
  },
  {
    x: -4,
    y: -4,
    blur: 10,
    scale: 2,
    color: {
      hex: 0xFFFFFF,
      opacity: 0.5,
    }
  },
  {
    x: 4,
    y: 6,
    blur: 10,
    scale: 2,
    color: {
      hex: 0x000000,
      opacity: 0.1,
    }
  }
]);