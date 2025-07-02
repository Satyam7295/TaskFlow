import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './src/models/User';

dotenv.config(); // Load .env file

const createTestUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const hashedPassword = await bcrypt.hash('yourPassword123', 10); // 👈 your desired password

    const user = await User.create({
      name: 'Satyam',
      email: 'satyam@example.com', // 👈 your desired email
      password: hashedPassword,
      role: 'admin' // or 'manager' or 'member'
      // team: optional
    });

    console.log('✅ User created:', user);
    mongoose.disconnect();
  } catch (error) {
    console.error('❌ Error creating user:', error);
    mongoose.disconnect();
  }
};

createTestUser();
