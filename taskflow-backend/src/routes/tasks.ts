import { Router } from "express";
import Task from "../models/Task";
import { auth } from "../middleware/auth";
import { role } from "../middleware/roles";

const router = Router();

router.post('/', auth, role(['admin','manager']), async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

router.get('/', auth, async (req, res) => {
  const tasks = await Task.find().populate('assignedTo comments');
  res.json(tasks);
});

router.put('/:id', auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new:true });
  res.json(task);
});

router.delete('/:id', auth, role(['admin','manager']), async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
