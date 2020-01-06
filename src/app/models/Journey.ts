import { Time } from '@angular/common';
import { Services } from './Services';

export class Journey {
    constructor(

        departure: string,
        arrival: string,
        journeyId: string,
        date: Date,
        time: Time,
        services: Services

    ) {}
}
