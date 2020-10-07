
/**
 * hex値からRGBAArrayに変更
 */
export const numHexToRgbaArray = (num: number, alpha = 1): [number, number, number, number] => {
  const r = (num & 0xff0000) >> 16;
  const g = (num & 0x00ff00) >> 8;
  const b = (num & 0x0000ff);
  return [r, g, b, alpha];
}

// linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);
export interface ILinerGradientTo {
  bottom?: boolean,
  left?: boolean,
  top?: boolean,
  right?: boolean,
}

export interface ILinerGradientColor {
  percentage: number;
  color: number;
  alpha?: number;
}

/**
 * liner gradient対応表
 * @param colors
 * @param from
 */
export const createLinerGradient = (colors: ILinerGradientColor[], from: ILinerGradientTo = {}) => {
  const FromMapper = Object.entries(from)
    .map(([key, value]) => value ? key : null )
    .filter((value): value is string => value != null);

  const strFrom = FromMapper.length === 0 ? null : `to ${FromMapper.join(' ')}`;
  const srtColors = colors.map(({percentage, color, alpha}) => {

    return `rgba(${numHexToRgbaArray(color, alpha).join(',')}) ${percentage * 100}%`
  });;
  const value =  [strFrom, srtColors].filter(value => value != null).join(', ');
  return `linear-gradient(${value})`;
};

interface IBoxShadowProps {
  x?: number;
  y?: number;
  blur?: number;
  scale?: number;
  inset?: boolean;
  color: {
    hex: number;
    opacity?: number;
  };
}

const createBoxShadowInitialProps: Required<IBoxShadowProps> =  {
  x: 0,
  y: 0,
  blur: 0,
  scale: 0,
  inset: false,
  color: {
    hex: 0x000000,
    opacity: 1,
  }
};

/**
 * box shadow
 */
const _createBoxShadow = (props: IBoxShadowProps) => {
  const { x, y, blur, scale, color } = {...createBoxShadowInitialProps, ...props, color: {...createBoxShadowInitialProps.color, ...props.color }};
  const rgba = `rgba(${numHexToRgbaArray(color.hex, color.opacity).join(', ')})`;
  return `${props.inset ? 'inset' : ''} ${x}px ${y}px ${blur}px ${scale}px ${rgba}`;
}

export const createBoxShadow = (props: IBoxShadowProps | IBoxShadowProps[]) => {
  if (Array.isArray(props)) {
    return props.map(value => _createBoxShadow(value)).join(', ');
  }
  return _createBoxShadow(props);
}
