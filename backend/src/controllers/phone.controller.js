import Phone from "../models/phone";

export async function createPhone(req, res) {
  const { phoneNum, idUser } = req.body;
  const newPhone = await Phone.create(
    {
      num_telefone: phoneNum,
      id_usuario: idUser
    },
    {
      fields: ["num_telefone", "id_usuario"]
    }
  );
  res.json({
    message: "New phone added succesfully",
    data: newPhone
  });
}

export async function getPhone(req, res) {
  const phones = await Phone.findAll({
    attributes: ["id_telefone", "num_telefone", "id_usuario"]
  });
  res.json({ phones });
}

export async function getOnePhone(req, res) {
  const { idPhone } = req.params;
  try {
    const phone = await Phone.findOne({
      attributes: ["id_telefone", "num_telefone", "id_usuario"],
      where: {
        id_telefone: idPhone
      }
    });
    res.json(phone);
  } catch (e) {
    console.log(e);
  }
}

export async function updatePhone(req, res) {
  const { idPhone } = req.params;
  const { phoneNum, idUser } = req.body;
  const phone = await Phone.findOne({
    attributes: ["id_telefone", "num_telefone", "id_usuario"],
    where: {
      id_telefone: idPhone
    }
  });

  const updatedPhone = await Phone.update(
    {
      id_telefone: idPhone,
      num_telefone: phoneNum,
      id_usuario: idUser
    },
    {
      where: {
        id_telefone: idPhone
      }
    }
  );
  res.json({
    message: "Phone number updated",
    updatedPhone
  });
}

export async function deletePhone(req, res) {
  const { phone } = req.params;
  await Phone.destroy({
    where: {
      num_telefone: phone
    }
  });
  res.json({
    message: "Phone number deleted"
  });
}

export async function getPhoneByUser(req, res) {
  const { idUser } = req.params;
  try {
    const phones = await Phone.findAll({
      attributes: ["id_telefone", "num_telefone", "id_usuario"],
      where: {
        id_usuario: idUser
      }
    });
    res.json({ phones });
  } catch (e) {
    console.log(e);
  }
}
