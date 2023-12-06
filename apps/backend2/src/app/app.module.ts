import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from '../cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/primeunilumDB'), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


/* 
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/primeunilumDB', {
      connectionName: 'cats',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/primeunilumDB', {
      connectionName: 'Users',
    }),
  ],
  
})
export class AppModule {} 
*/