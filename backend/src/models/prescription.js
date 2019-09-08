import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

import Order from "./order";

const Prescription = sequelizeAmazon.define(
  "receita",
  {
    id_receita: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    img_receita: {
      type: Sequelize.TEXT,
      required: true
    },
    crm: {
      type: Sequelize.TEXT,
      required: true
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true
  }
);

Prescription.hasOne(Order, {
  foreingKey: "id_receita",
  sourceKey: "id_receita"
});

Order.belongsTo(Prescription, {
  foreingKey: "id_receita",
  sourceKey: "id_receita"
});

export default Prescription;
