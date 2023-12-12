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
  readonly _id!: object;
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
