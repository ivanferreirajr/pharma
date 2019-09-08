import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

import Inventory from "./inventory";

const Products = sequelizeAmazon.define(
  "produto",
  {
    id_produto: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nome: {
      type: Sequelize.TEXT,
      required: true
    },
    img_produto: {
      type: Sequelize.TEXT
    },
    descricao: {
      type: Sequelize.TEXT
    },
    categoria: {
      type: Sequelize.TEXT
    },
    forma_farmaceutica: {
      type: Sequelize.TEXT
    },
    fabricante: {
      type: Sequelize.TEXT,
      required: true
    },
    principio_ativo: {
      type: Sequelize.TEXT
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true
  }
);

Products.hasMany(Inventory, {
  foreingKey: "id_produto",
  sourceKey: "id_produto"
});

Inventory.belongsTo(Products, {
  foreingKey: "id_produto",
  sourceKey: "id_produto"
});

export default Products;
