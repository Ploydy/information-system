export function mylib(): string {
  return 'mylib';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class CreateUserDto {
  readonly fullName!: string;
  readonly email!: string;
  readonly role!: string;
  readonly password!: string;
}

export class UpdateUserDto {
  readonly _id!: string;
  readonly fullName!: string;
  readonly email!: string;
  readonly role!: string;
  readonly password!: string;
}

export type UserResponse = {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  password: string;
}
export type UserRequest = {
  fullName: string;
  email: string;
  role: string;
  password: string; 
}


export class CreateProductDto {
  readonly title!: string;
  readonly description!: string;
  readonly price!: number;
  readonly category!: string;

}

export class UpdateProductDto {
  readonly _id!: string;
  readonly title!: string;
  readonly description!: string;
  readonly price!: number;
  readonly category!: string;
}

export type ProductResponse = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
}
export type ProductRequest = {
  title: string;
  description: string;
  price: number;
  category: string; 
}
