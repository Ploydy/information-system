import { Module } from '@nestjs/common';
import {
  MongooseModule,
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

class ConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb://localhost:27017/primeunilumDB/cats',
    };
  }
}

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: ConfigService,
    }),  
  ],
})
export class AsyncOptionsClassModule {}
