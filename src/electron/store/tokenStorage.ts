import * as path from 'path';
import DataStore from 'nedb-promises';

type ITokenType = 'YouTube' | 'anime';
interface IToken {
  id: string;
  tokenType: ITokenType;
  token: string;
  name: string;
}

export class TokenStorage {
  db: DataStore;
  constructor() {
    this.db = new DataStore({
      filename: path.resolve(__dirname, 'storage', 'default.db'),
      autoload: true,
    })
  }

  async findByTokenType(tokenType: ITokenType) {
    const data = await this.db.find<IToken>({ tokenType });
    return data;
  }

  async insert(value: IToken | IToken[]) {
    await this.db.insert<IToken | IToken[]>(value);
  }
}
