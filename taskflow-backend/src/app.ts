import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import taskRoutes from './routes/tasks';
// import teamRoutes, commentRoutes similarly

const app = express();
app.use(cors(), express.json());
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
// mount other routers similarly
export default app;
