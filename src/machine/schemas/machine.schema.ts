import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MachineDocument = Machine & Document;

export enum MachineStatus {
  Running = 'Running',
  Idle = 'Idle',
  Stopped = 'Stopped',
}

@Schema({ timestamps: true })
export class Machine {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: MachineStatus, default: MachineStatus.Idle })
  status: MachineStatus;

  @Prop({ required: true })
  temperature: number;

  @Prop({ required: true })
  energyConsumption: number;
}

export const MachineSchema = SchemaFactory.createForClass(Machine);
