import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

const OrderItems = sequelizeAmazon.define(
  "itens_pedido",
  {
    id_pedido: {
      type: Sequelize.INTEGER,
      required: true
    },
    nome_produto: {
      type: Sequelize.TEXT,
      required: true
    },
    valor: {
      type: Sequelize.DOUBLE,
      required: true
    },
    quantidade: {
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

export default OrderItems;
