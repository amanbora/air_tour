import { Time } from '@angular/common';
import { ServicesOpted } from './ServicesOpted';

export class Journey {
    constructor(

        departure: string,
        arrival: string,
        journeyId: string,
        datetime: Date,
        services: ServicesOpted

    ) {}
}
