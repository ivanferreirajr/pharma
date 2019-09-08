import Sequelize from "sequelize";
import bcrypt from "bcryptjs";
import { sequelizeAmazon } from "../database/database";

import Phone from "./phone";
import Client from "./client";
import Pharmacist from "./pharmacist";
import DeliveryMan from "./deliveryman";

const User = sequelizeAmazon.define(
  "usuario",
  {
    id_usuario: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    senha: {
      type: Sequelize.TEXT,
      required: true
    },
    nome: {
      type: Sequelize.TEXT,
      required: true
    },
    data_nasc: {
      type: Sequelize.DATE,
      required: true
    },
    email: {
      type: Sequelize.TEXT,
      required: true
    },
    id_carteira: {
      type: Sequelize.INTEGER,
      required: true
    },
    tipo_cliente: {
      type: Sequelize.BOOLEAN
    },

    tipo_farmaceutico: {
      type: Sequelize.BOOLEAN
    },
    tipo_entregador: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    schema: "pharma",
    timestamps: false,
    freezeTableName: true,
    hooks: {
      beforeCreate: user => {
        const salt = bcrypt.genSaltSync();
        user.senha = bcrypt.hashSync(user.senha, salt);
      }
    },
    instanceMethods: {
      validPassword(senha) {
        return bcrypt.compareSync(senha, this.senha);
      }
    }
  }
);

User.hasMany(Phone, {
  foreingKey: "id_usuario",
  sourceKey: "id_usuario"
});

Phone.belongsTo(User, {
  foreingKey: "id_usuario",
  sourceKey: "id_usuario"
});

User.hasOne(Client, {
  foreingKey: "id_usuario",
  sourceKey: "id_usuario"
});

Client.belongsTo(User, {
  foreingKey: "id_usuario",
  sourceKey: "id_usuario"
});

User.hasOne(Pharmacist, {
  foreingKey: "id_usuario",
  sourceKey: "id_usuario"
});

Pharmacist.belongsTo(User, {
  foreingKey: "id_usuario",
  sourceKey: "id_usuario"
});

User.hasOne(DeliveryMan, {
  foreingKey: "id_usuario",
  sourceKey: "id_usuario"
});

DeliveryMan.belongsTo(User, {
  foreingKey: "id_usuario",
  sourceKey: "id_usuario"
});

export default User;
