import mongoose, { Document } from 'mongoose';

export interface Task {
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

export interface TaskDocument extends Task, Document {
  _id: string;
  createdAt: Date;
  updateAt: Date;
}

// スキーマ
// MongoDBのデータ構造を定義するもの

const taskSchema = new mongoose.Schema<TaskDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// モデルの作成
export const TaskModel =
  mongoose.models.Task || mongoose.model('Task', taskSchema);