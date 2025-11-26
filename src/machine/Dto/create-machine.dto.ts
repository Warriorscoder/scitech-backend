export class CreateMachineDto {
  name: string;
  temperature: number;
  energyConsumption: number;
  status: 'Running' | 'Idle';
}
