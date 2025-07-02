import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
const router = Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).send('User exists');
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  res.json({ id: user._id });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if(!user) return res.status(400).send('Invalid');
  const ok = await bcrypt.compare(password, user.password);
  if(!ok) return res.status(400).send('Invalid');
  const token = jwt.sign({ id:user._id, role:user.role }, process.env.JWT_SECRET!);
  res.json({ token });
});

export default router;
