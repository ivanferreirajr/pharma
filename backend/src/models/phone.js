import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Phone = sequelize.define(
  "telefone",
  {
    id_telefone: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    num_telefone: {
      type: Sequelize.TEXT
    },
    id_usuario: {
      type: Sequelize.INTEGER
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true
  }
);

export default Phone;
