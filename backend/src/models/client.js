import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

import Order from "./order";

const Client = sequelizeAmazon.define(
  "cliente",
  {
    cpf: {
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

Client.hasOne(Order, {
  foreingKey: "cpf",
  sourceKey: "cpf"
});

Order.belongsTo(Client, {
  foreingKey: "cpf",
  sourceKey: "cpf"
});

export default Client;
