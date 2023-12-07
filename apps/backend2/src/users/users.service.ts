import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";

import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async getUserById(userId: string): Promise<User> {
        return this.usersRepository.findOne({ userId })
    }

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async createUser( fullName: string, email: string, role: string , password: string ): Promise<User> {
        return this.usersRepository.create({
            fullName,
            email,
            role,
            password,
            
        })
    }

    async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
    }
}