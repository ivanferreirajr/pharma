import { Router } from "express";

import {
  createUser,
  getUser,
  getOneUser,
  deleteUser,
  updateUser,
  authenticateUser
} from "../controllers/user.controller";

const router = Router();
// /api/usuarios
router.post("/register/", createUser);
router.post("/authenticate/", authenticateUser);
router.get("/", getUser);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
