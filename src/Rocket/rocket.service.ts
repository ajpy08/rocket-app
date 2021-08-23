import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import * as countdown from 'countdown';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class RocketService {
    constructor(private http: HttpService) { }

    getNextLaunchRemaningTime() {
        return this.http.get('https://api.spacexdata.com/v4/launches/next').pipe(
            map((response) => response.data),
            map((launch) => countdown(new Date(), new Date(launch.date_utc)).toString(),
            ),
        );
    }
}
