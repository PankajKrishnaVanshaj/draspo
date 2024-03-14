// models/User.ts
import mongoose, { Document, Schema, models } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const UserModel = models.User || mongoose.model<IUser>("User", userSchema);

export default UserModel;
