import { Model, DataTypes, Sequelize } from 'sequelize';
import { Models } from '../database/models';

export class ExempleModel extends Model {
  /* Coloque aqui suas entidades. Use o exemplo a
  seguir para criar suas próprias entidades */

  public idExemple!: string;
  public name!: string;

  static initialization(db: Sequelize) {
    this.init(
      {
        idExemple: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },


      {
        sequelize: db,
        modelName: 'Exemple', // O nome da tabela
      },
    );
  }

  /* Coloque aqui suas associações */

  // static association(models: Models) {
  //   this.belongsTo(models.nomeDeQuemElaPertence, {
  //     as: 'nomeDoModeloQueElaPertence. Ex: empresa',
  //     foreignKey: {
  //       field: 'ChaveEstrangeiraQueElaPertence. Ex: idEmpresa',
  //       name: 'ChaveEstrangeiraQueElaPertence. Ex: idEmpresa',
  //     },
  //   });
  // }


}
