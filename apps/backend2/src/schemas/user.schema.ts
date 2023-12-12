import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = User & HydratedDocument<Types.ObjectId>;

@Schema({
    timestamps: true
})
export class User {  
    
    @Prop({type: String, required: true})
    fullName: string;

    @Prop()
    role: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);