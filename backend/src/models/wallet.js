import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

import Card from "./card";
import User from "./user";
import Pharma from "./pharma";

const Wallet = sequelizeAmazon.define(
  "carteira",
  {
    id_carteira: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    dados_carteira: {
      type: Sequelize.TEXT
    },
    saldo: {
      type: Sequelize.FLOAT
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true
  }
);

Wallet.hasMany(Card, {
  foreingKey: "id_carteira",
  sourceKey: "id_carteira"
});

Card.belongsTo(Wallet, {
  foreingKey: "id_carteira",
  sourceKey: "id_carteira"
});

Wallet.hasOne(User, {
  foreingKey: "id_carteira",
  sourceKey: "id_carteira"
});

User.belongsTo(Wallet, {
  foreingKey: "id_carteira",
  sourceKey: "id_carteira"
});

Wallet.hasOne(Pharma, {
  foreingKey: "id_carteira",
  sourceKey: "id_carteira"
});

Pharma.belongsTo(Wallet, {
  foreingKey: "id_carteira",
  sourceKey: "id_carteira"
});

export default Wallet;
