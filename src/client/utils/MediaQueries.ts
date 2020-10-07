const minWidth = (bp: number) => `@media (min-width: ${bp}px)`;
const maxWidth = (bp: number) => `@media (max-width: ${bp}px)`;
const only = (from: number, to: number) => `@media (min-width: ${from}px) and (max-width: ${to}px)`;

const BREAK_POINTS = {
  SP: 768,
  TB: 1025,
  PC: 1440,
};
export const MORE_SP = minWidth(BREAK_POINTS.SP);
export const MORE_TB = minWidth(BREAK_POINTS.TB);
export const MORE_PC = minWidth(BREAK_POINTS.PC);

export const LESS_SP = maxWidth(BREAK_POINTS.SP - 1);
export const LESS_TB = maxWidth(BREAK_POINTS.TB - 1);
export const LESS_PC = maxWidth(BREAK_POINTS.PC - 1);

export const ONLY_SP = only(0, BREAK_POINTS.SP);
export const ONLY_TB = only(BREAK_POINTS.SP, BREAK_POINTS.TB);
export const ONLY_PC = only(BREAK_POINTS.TB, BREAK_POINTS.PC);
