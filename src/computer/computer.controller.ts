import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController 
{
    constructor (
        private cpuService : CpuService,
        private diskService : DiskService
    ) {}

    @Get('run')
    run ()
    {
        return [
            this.cpuService.compute (15445, 6),
            this.diskService.getData ()
        ];
    }

}
