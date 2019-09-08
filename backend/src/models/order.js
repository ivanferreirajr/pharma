import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

import OrderItems from "./order.items";

const Order = sequelizeAmazon.define(
  "pedido",
  {
    id_pedido: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    valor: {
      type: Sequelize.DOUBLE,
      required: true
    },
    id_receita: {
      type: Sequelize.INTEGER
    },
    id_endereco: {
      type: Sequelize.INTEGER,
      required: true
    },
    cnh: {
      type: Sequelize.TEXT,
      required: true
    },
    cpf: {
      type: Sequelize.TEXT,
      required: true
    },
    cnpj: {
      type: Sequelize.TEXT,
      required: true
    },
    data_pedido: {
      type: Sequelize.DATE,
      required: true
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true
  }
);

Order.hasMany(OrderItems, {
  foreingKey: "id_pedido",
  sourceKey: "id_pedido"
});

OrderItems.belongsTo(Order, {
  foreingKey: "id_pedido",
  sourceKey: "id_pedido"
});

export default Order;
