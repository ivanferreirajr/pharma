import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

const Inventory = sequelizeAmazon.define(
  "estoque",
  {
    cnpj: {
      type: Sequelize.TEXT,
      required: true
    },
    id_produto: {
      type: Sequelize.INTEGER,
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

export default Inventory;
