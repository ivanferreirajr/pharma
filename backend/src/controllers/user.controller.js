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
  const { login, senha, nome, dataNasc, email, idCarteira } = req.body;
  try {
    const newUser = await Usuario.create(
      {
        login,
        senha,
        nome,
        data_nasc: dataNasc,
        email,
        id_carteira: idCarteira
      },
      {
        fields: ["login", "senha", "nome", "data_nasc", "email", "id_carteira"]
      }
    );
    if (newUser) {
      return res.json({
        message: "User created successfully",
        data: newUser
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something goes wrong...",
      error: e.name
    });
  }
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
        "login",
        "senha",
        "nome",
        "data_nasc",
        "email",
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
          login,
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
