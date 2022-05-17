export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  age?: number;
}
