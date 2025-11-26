import { Module } from '@nestjs/common';
import { MachineModule } from './machine/machine.module.js';
import { UserModule } from './user/user.module.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AiModule } from './ai/ai.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MachineModule,
    UserModule,
    MongooseModule,
    MongooseModule.forRoot(process.env.DATABASE_URL !),
    AiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
