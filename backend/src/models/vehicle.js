import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

const Vehicle = sequelizeAmazon.define(
  "veiculo",
  {
    placa: {
      type: Sequelize.TEXT,
      primaryKey: true,
      required: true
    },
    cor: {
      type: Sequelize.TEXT
    },
    nome: {
      type: Sequelize.TEXT
    },
    marca: {
      type: Sequelize.TEXT
    },
    tipo: {
      type: Sequelize.TEXT
    },
    cnh: {
      type: Sequelize.TEXT,
      required: true
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true
  }
);

export default Vehicle;
