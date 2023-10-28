import { Sequelize } from 'sequelize';
import { ExempleModel } from 'src/models/ExempleModel';


export class Models {
  /* Coloque aqui o nome das suas entidades como o exemplo abaixo */
   public exemple: typeof ExempleModel = ExempleModel;

  constructor(db: Sequelize) {
    Object.keys(this).forEach((pModel: string) => {
      if (
        this[pModel] !== undefined &&
        this[pModel].initialization !== undefined
      ) {
        this[pModel].initialization(db);
      }
    });

    Object.keys(this).forEach((pModel: string) => {
      if (
        this[pModel] !== undefined &&
        this[pModel].association !== undefined
      ) {
        this[pModel].association(this);
      }
    });
  }
}
