import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  Machine,
  MachineDocument,
  MachineStatus,
} from './schemas/machine.schema';
import { CreateMachineDto } from './Dto/create-machine.dto';
import { UpdateMachineDto } from './Dto/update-machine.dto';

@Injectable()
export class MachineService {
  constructor(
    @InjectModel(Machine.name)
    private machineModel: Model<MachineDocument>,
  ) {}

  // CREATE
  async create(createMachineDto: CreateMachineDto): Promise<Machine> {
    const machine = new this.machineModel(createMachineDto);
    return machine.save();
  }

  // FIND ALL 
  async findAll(status?: MachineStatus): Promise<Machine[]> {
    if (status) {
      return this.machineModel.find({ status }).exec();
    }
    return this.machineModel.find().exec();
  }

  // FIND BY ID
  async findOne(id: string): Promise<Machine | null> {
    return this.machineModel.findById(id).exec();
  }

  // UPDATE
  async update(
    id: string,
    updateMachineDto: UpdateMachineDto,
  ): Promise<Machine | null> {
    return this.machineModel
      .findByIdAndUpdate(id, updateMachineDto, { new: true })
      .exec();
  }

  // DELETE
  async delete(id: string): Promise<Machine | null> {
    return this.machineModel.findByIdAndDelete(id).exec();
  }
}
