import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import PhoneNumber from "./phone";

const Usuario = sequelize.define(
  "usuario",
  {
    id_usuario: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    login: {
      type: Sequelize.TEXT
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
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true
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
