import { Schema, model } from "mongoose";
export interface IUser { name:string; email:string; password:string; role:string; team?:any; }
const UserSchema = new Schema<IUser>({
  name: String, email: { type: String, unique: true },
  password: String, role: { type: String, enum:['admin','manager','member'], default:'member' },
  team: { type: Schema.Types.ObjectId, ref: 'Team' }
});
export default model<IUser>('User', UserSchema);
