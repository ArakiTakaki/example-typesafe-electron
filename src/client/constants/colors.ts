import { createLinerGradient } from "../utils/styling";

export const COLORS = {
  BACKGROUND: 0xEBECF0,
  LIGHT: 0xFFFFFF,
  SHADOW: 0xBABECC,
};
export const GRADATION = {
  BACKGROUND_BASE: createLinerGradient([
    {
      percentage: 1,
      color: 0xf3f0f1 - 0x111111,
      alpha: 1,
    },
    {
      percentage: 1,
      color: 0xCBD6E1 - 0x111111,
      alpha: 1,
    }
  ], {
    top: true,
    left: true,
  }),
  COMPONENT_BASE: createLinerGradient([
    {
      percentage: 1,
      color: 0xf3f0f1,
      alpha: 1,
    },
    {
      percentage: 1,
      color: 0xCBD6E1,
      alpha: 1,
    }
  ], {
    top: true,
    left: true,
  }),
}
