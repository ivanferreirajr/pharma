import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

import Pharma from "./pharma";
import Order from "./order";

const Address = sequelizeAmazon.define(
  "endereco",
  {
    id_endereco: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    rua: {
      type: Sequelize.TEXT,
      required: true
    },
    numero: {
      type: Sequelize.TEXT,
      required: true
    },
    cep: {
      type: Sequelize.TEXT,
      required: true
    },
    cidade: {
      type: Sequelize.TEXT,
      required: true
    },
    estado: {
      type: Sequelize.TEXT,
      required: true
    },
    bairro: {
      type: Sequelize.TEXT,
      required: true
    },
    complemento: {
      type: Sequelize.TEXT
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true
  }
);

Address.hasOne(Pharma, {
  foreingKey: "id_endereco",
  sourceKey: "id_endereco"
});

Pharma.belongsTo(Address, {
  foreingKey: "id_endereco",
  sourceKey: "id_endereco"
});

Address.hasOne(Order, {
  foreingKey: "id_endereco",
  sourceKey: "id_endereco"
});

Order.belongsTo(Address, {
  foreingKey: "id_endereco",
  sourceKey: "id_endereco"
});

export default Address;
