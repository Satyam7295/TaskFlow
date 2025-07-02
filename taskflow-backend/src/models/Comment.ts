import { Schema, model } from "mongoose";
export interface IComment { taskId:any; user:any; text:string; createdAt:Date; }
const CommentSchema = new Schema<IComment>({
  taskId: { type: Schema.Types.ObjectId, ref:'Task' },
  user: { type: Schema.Types.ObjectId, ref:'User' },
  text: String,
  createdAt: { type: Date, default: Date.now }
});
export default model<IComment>('Comment', CommentSchema);
