import { Schema, model } from "mongoose";
export interface ITeam { name: string; members: any[]; }
const TeamSchema = new Schema<ITeam>({ name:String, members: [{ type: Schema.Types.ObjectId, ref:'User' }] });
export default model<ITeam>('Team', TeamSchema);
