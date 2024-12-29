import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {config} from 'dotenv';

config();

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGO_URL,
        user: process.env.MONGOUSER,
        pass: process.env.MONGOPASSWORD,
      }),
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}