import Sequelize from "sequelize";
import { sequelizeAmazon } from "../database/database";

import Prescription from "./prescription";

const Doctor = sequelizeAmazon.define(
  "medico",
  {
    crm: {
      type: Sequelize.TEXT,
      primaryKey: true,
      required: true
    },
    nome: {
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

Doctor.hasMany(Prescription, {
  foreingKey: "crm",
  sourceKey: "crm"
});

Prescription.belongsTo(Doctor, {
  foreingKey: "crm",
  sourceKey: "crm"
});

export default Doctor;
