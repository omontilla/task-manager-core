import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as fs from 'fs';
import { config } from 'dotenv';

if (fs.existsSync('.env')) {
  config();
}

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGO_URL  || "mongodb://mongo:JKevIIuFiLeOXIibRVunsHtQCWMFtJfm@mongodb.railway.internal:27017mongodb://mongo:JKevIIuFiLeOXIibRVunsHtQCWMFtJfm@mongodb.railway.internal:27017",
        user: process.env.MONGOUSER || "mongo",
        pass: process.env.MONGOPASSWORD || "JKevIIuFiLeOXIibRVunsHtQCWMFtJfm",
        retryAttempts: 5,
        retryDelay:3000,
      }),
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}