import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

import Vehicle from "./vehicle";
import Order from "./order";

const DeliveryMan = sequelizeAmazon.define(
  "entregador",
  {
    cnh: {
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

DeliveryMan.hasMany(Vehicle, {
  foreingKey: "cnh",
  sourceKey: "cnh"
});

Vehicle.belongsTo(DeliveryMan, {
  foreingKey: "cnh",
  sourceKey: "cnh"
});

DeliveryMan.hasOne(Order, {
  foreingKey: "cnh",
  sourceKey: "cnh"
});

Order.belongsTo(DeliveryMan, {
  foreingKey: "cnh",
  sourceKey: "cnh"
});

export default DeliveryMan;
