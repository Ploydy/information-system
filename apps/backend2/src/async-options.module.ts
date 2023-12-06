import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost:27017/primeunilumDB/cats',
      }),
    }),
    CatsModule,
  ],
})
export class AsyncOptionsFactoryModule {}
