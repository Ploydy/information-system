
export function mylib(): string {
  return 'mylib';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// start user 
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
} // end user 


// start product

export class CreateProductDto {
  readonly title!: string;
  readonly description!: string;
  readonly price!: number;
  readonly category!: number;

}

export class UpdateProductDto {
  readonly _id!: string;
  readonly title!: string;
  readonly description!: string;
  readonly price!: number;
  readonly category!: number;
}

export type ProductResponse = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: number;
}
export type ProductRequest = {
  title: string;
  description: string;
  price: number;
  category: number; 
} // end product


// start aluminum 

export class CreateAluminumDto {
  readonly title!: string;
  readonly description!: string;
  readonly price!: number;
  readonly category!: number;

}

export class UpdateAluminumDto {
  readonly _id!: string;
  readonly title!: string;
  readonly description!: string;
  readonly price!: number;
  readonly category!: number;
}

export type AluminumResponse = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: number;
}
export type AluminumRequest = {
  title: string; 
  description: string;
  price: number;
  category: number; 
} //end aluminum

// start glass
export class CreateGlassDto {
  readonly title!: string;
  readonly description!: string;
  readonly price!: number;
  readonly category!: number;

}

export class UpdateGlassDto {
  readonly _id!: string;
  readonly title!: string;
  readonly description!: string;
  readonly price!: number;
  readonly category!: number;
}

export type GlassResponse = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: number;
}
export type GlassRequest = {
  title: string; 
  description: string;
  price: number;
  category: number; 
}// end glass
