import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { RocketService } from './rocket.service';

@Controller('rocket')
export class RocketController {
    constructor(private rocketService: RocketService) { }

    @MessagePattern('get-next-launch-remaining-time')
    getNextLaunchRemainingTime(): Observable<string> {
        return this.rocketService.getNextLaunchRemaningTime();
    }
}

