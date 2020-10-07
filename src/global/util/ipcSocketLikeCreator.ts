import { createCommand } from '../soket';
type ITokenName = 'github' | 'anime';

export const ipcCommands = {
  token: createCommand<{ tokenName: ITokenName, token: string }>('token'),
}