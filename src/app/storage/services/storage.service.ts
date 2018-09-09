import { Injectable } from '@angular/core';
import { PlainObject } from '../models/plain.object';

@Injectable()
export abstract class StorageService {
    constructor() {}

    abstract save(key: string, val: any);
    abstract get(key: string): PlainObject | string | null ;
}
