import { Dialect, Options, Sequelize } from 'sequelize';
import { Models } from './models';

class DataSource {
  private config: Options;
  public sequelize: Sequelize;
  public models: Models;

  constructor() {
    this.config = {
      database: process.env.DATABASE,
      username: 'postgres',
      password: process.env.PASSWORD,
      host: process.env.HOST,
      port: Number(process.env.PORT),
      dialect: process.env.DB as Dialect,
      define: { freezeTableName: true },
      sync: { force: true },
    };
    this.sequelize = new Sequelize(this.config);
    this.models = new Models(this.sequelize);
  }
}

export const db = new DataSource();

(async () => {
  await db.sequelize.sync();
})();
