import { Test, TestingModule } from '@nestjs/testing';
import { MachineController } from './machine.controller.js';
import { MachineService } from './machine.service.js';


describe('MachineController', () => {
  let controller: MachineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MachineController],
      providers: [MachineService],
    }).compile();

    controller = module.get<MachineController>(MachineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
