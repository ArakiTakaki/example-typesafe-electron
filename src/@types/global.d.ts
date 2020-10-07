import { injectionAPI } from "../preload";
import logger from "../global/logger";

interface MyWindow extends Window {
  api: typeof injectionAPI;
}

declare global {
  interface Window {
    api: typeof injectionAPI;
  }
}
declare var window: MyWindow;
