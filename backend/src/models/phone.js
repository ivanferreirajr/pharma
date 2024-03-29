import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

const Phone = sequelizeAmazon.define(
  "telefone",
  {
    id_telefone: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    num_telefone: {
      type: Sequelize.TEXT,
      required: true
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      required: true
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true
  }
);

export default Phone;
