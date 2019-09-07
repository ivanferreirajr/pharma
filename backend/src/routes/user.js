import { Router } from "express";

import {
  createUser,
  getUser,
  getOneUser,
  deleteUser,
  updateUser
} from "../controllers/user.controller";

const router = Router();
// /api/usuarios
router.post("/", createUser);
router.get("/", getUser);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
