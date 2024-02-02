import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export class User {
  constructor(public id: string, public name: string, public email: string) {}
}