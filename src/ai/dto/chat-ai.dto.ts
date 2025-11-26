import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class MachineInputDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  temperature: number;

  @IsNotEmpty()
  energyConsumption: number;

  @IsString()
  status: string;
}

export class ChatAiDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MachineInputDto)
  machines: MachineInputDto[];
}
