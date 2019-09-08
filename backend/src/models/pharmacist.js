import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

const Pharmacist = sequelizeAmazon.define(
  "farmaceutico",
  {
    crf: {
      type: Sequelize.TEXT,
      primaryKey: true,
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

export default Pharmacist;
