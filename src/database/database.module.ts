import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
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