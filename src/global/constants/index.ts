export const isBrowser = typeof window === 'object';
export const isPreload = process.env.ELECTRON_PROCESS === 'preload';