import { Module } from '@nestjs/common';
import { databaseProviders } from './data/data.providers';


@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}