import { Schema, model } from "mongoose";
export interface ITask {
  title:string; description:string; assignedTo:any; status:string;
  deadline:Date; subtasks:any[]; comments:any[];
}
const TaskSchema = new Schema<ITask>({
  title:String, description:String, assignedTo:{ type: Schema.Types.ObjectId, ref:'User' },
  status: { type:String, enum:['todo','in-progress','done'], default:'todo' },
  deadline:Date,
  subtasks: [{ type: Schema.Types.ObjectId, ref:'Task' }],
  comments: [{ type: Schema.Types.ObjectId, ref:'Comment' }]
});
export default model<ITask>('Task', TaskSchema);
