import bcrypt from "bcryptjs";
import Usuario from "../models/user";

export async function getUser(req, res) {
  try {
    const users = await Usuario.findAll();
    res.json({
      data: users
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(req, res) {
  const { email, senha, nome, dataNasc, idCarteira } = req.body;
  try {
    if (await Usuario.findOne({ where: { email } })) {
      return res.status(400).send({ error: "User already exists" });
    }
    const newUser = await Usuario.create(
      {
        email,
        senha,
        nome,
        data_nasc: dataNasc,
        id_carteira: idCarteira
      },
      {
        fields: ["email", "senha", "nome", "data_nasc", "id_carteira"]
      }
    );

    newUser.senha = undefined;

    return res.json({
      message: "User created successfully",
      data: newUser
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: "Something goes wrong...",
      error: err.name
    });
  }
}

export async function authenticateUser(req, res) {
  const { email, senha } = req.body;

  const user = await Usuario.findOne({ where: { email } });
  if (!user) {
    return res.status(400).send({ error: "User not found" });
  }
  if (!(await bcrypt.compare(senha, user.senha))) {
    return res.status(400).send({ error: "Invalid password" });
  }
  user.senha = undefined;
  res.send({ user });
}

export async function getOneUser(req, res) {
  const { id } = req.params;
  try {
    const user = await Usuario.findOne({
      where: {
        id_usuario: id
      }
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  const deleteRowCount = await Usuario.destroy({
    where: {
      id_usuario: id
    }
  });
  res.json({
    message: "User Deleted Sucessfully",
    count: deleteRowCount
  });
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { login, senha, nome, dataNasc, email, idCarteira } = req.body;
  try {
    const users = await Usuario.findAll({
      attributes: [
        "id_usuario",
        "email",
        "senha",
        "nome",
        "data_nasc",
        "id_carteira"
      ],
      where: {
        id_usuario: id
      }
    });
    console.log(nome);
    if (users.length > 0) {
      users.forEach(async user => {
        await user.update({
          id_usuario: id,
          senha,
          nome,
          data_nasc: dataNasc,
          email,
          id_carteira: idCarteira
        });
      });
    }
    res.json({
      message: "User update succesfully",
      data: users
    });
  } catch (e) {
    console.log(e);
  }
}
