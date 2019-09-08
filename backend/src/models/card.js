import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

const Card = sequelizeAmazon.define(
  "cartao",
  {
    numero_cartao: {
      type: Sequelize.TEXT,
      primaryKey: true,
      required: true
    },
    nome_titular: {
      type: Sequelize.TEXT,
      required: true
    },
    ccv: {
      type: Sequelize.TEXT,
      required: true
    },
    data_vencimento: {
      type: Sequelize.DATE,
      required: true
    },
    id_carteira: {
      type: Sequelize.NUMBER,
      required: true
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true
  }
);

export default Card;
