import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../modules/users.module';
import { ProductsModule } from '../modules/products.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/primeunilumDB'),
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
