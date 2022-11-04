import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService 
{
    supplyPower(watts: Number)
    {
        console.log (`Supplying ${watts} worth of power.`);
    }
}
