import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './Dto/create-machine.dto';
import { UpdateMachineDto } from './Dto/update-machine.dto';
import { MachineStatus } from './schemas/machine.schema';

@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Post()
  create(@Body() createMachineDto: CreateMachineDto) {
    return this.machineService.create(createMachineDto);
  }

  @Get()
  findAll(@Query('status') status?: 'Running' | 'Idle') {
    const statusEnum = status ? (status as MachineStatus) : undefined;
    return this.machineService.findAll(statusEnum);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMachineDto: UpdateMachineDto) {
    return this.machineService.update(id, updateMachineDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.machineService.delete(id);
  }
}
