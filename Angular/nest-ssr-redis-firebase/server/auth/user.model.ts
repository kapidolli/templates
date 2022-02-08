import { Entity, Schema } from "redis-om";

export class User extends Entity {
  uid!: string;
  email!: string;
}

export const userSchema = new Schema(
  User,
  {
    email: { type: 'string' }
  },
  {
    dataStructure: 'JSON',
  }
);
