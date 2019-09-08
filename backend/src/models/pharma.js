import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

import Pharmacist from "./pharmacist";
import Order from "./order";
import Inventory from "./inventory";

const Pharma = sequelizeAmazon.define(
  "farmacia",
  {
    cnpj: {
      type: Sequelize.TEXT,
      primaryKey: true,
      required: true
    },
    nome: {
      type: Sequelize.TEXT,
      required: true
    },
    img_farmacia: {
      type: Sequelize.TEXT
    },
    id_carteira: {
      type: Sequelize.INTEGER
    },
    id_endereco: {
      type: Sequelize.INTEGER
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true
  }
);

Pharma.hasMany(Inventory, {
  foreingKey: "cnpj",
  sourceKey: "cnpj"
});

Inventory.belongsTo(Pharma, {
  foreingKey: "cnpj",
  sourceKey: "cnpj"
});

Pharma.hasMany(Pharmacist, {
  foreingKey: "cnpj",
  sourceKey: "cnpj"
});

Pharmacist.belongsTo(Pharma, {
  foreingKey: "cnpj",
  sourceKey: "cnpj"
});

Pharma.hasOne(Order, {
  foreingKey: "cnpj",
  sourceKey: "cnpj"
});

Order.belongsTo(Pharma, {
  foreingKey: "cnpj",
  sourceKey: "cnpj"
});

export default Pharma;
