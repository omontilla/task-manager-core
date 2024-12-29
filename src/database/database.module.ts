import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}