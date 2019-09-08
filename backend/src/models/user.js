import Sequelize from "sequelize";
import bcrypt from "bcryptjs";
import { sequelizeAmazon } from "../database/database";

import PhoneNumber from "./phone";

const Usuario = sequelizeAmazon.define(
  "usuario",
  {
    id_usuario: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    senha: {
      type: Sequelize.TEXT
    },
    nome: {
      type: Sequelize.TEXT
    },
    data_nasc: {
      type: Sequelize.DATE
    },
    email: {
      type: Sequelize.TEXT
    },
    id_carteira: {
      type: Sequelize.INTEGER
    },
    tipo_entregador: {
      type: Sequelize.BOOLEAN
    },
    tipo_farmaceutico: {
      type: Sequelize.BOOLEAN
    },
    tipo_cliente: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true,
    hooks: {
      beforeCreate: user => {
        const salt = bcrypt.genSaltSync();
        user.senha = bcrypt.hashSync(user.senha, salt);
      }
    },
    instanceMethods: {
      validPassword(senha) {
        return bcrypt.compareSync(senha, this.senha);
      }
    }
  }
);

Usuario.hasMany(PhoneNumber, {
  foreingKey: "id_usuario",
  sourceKey: "id_usuario"
});
PhoneNumber.belongsTo(Usuario, {
  foreingKey: "id_usuario",
  sourceKey: "id_usuario"
});
export default Usuario;
