import { Module } from '@nestjs/common';
import { MachineController } from './machine.controller.js';
import { MachineService } from './machine.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Machine, MachineSchema } from './schemas/machine.schema.js';

@Module({
  imports: [
     MongooseModule.forFeature([{ name: Machine.name, schema: MachineSchema }]),
  ],
  controllers: [MachineController],
  providers: [MachineService],
})
export class MachineModule {}
