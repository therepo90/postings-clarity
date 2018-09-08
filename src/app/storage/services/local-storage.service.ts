import { Injectable } from '@angular/core';
import { PlainObject } from '../models/plain.object';
import { StorageService } from './storage.service';

@Injectable()
export class LocalStorageService extends StorageService {
  get(key: string): PlainObject | string | null {
    const val = window.localStorage.getItem(key);
    try {
      return JSON.parse(val);
    } catch (e) {
      return val; // string
    }
  }

  save(key: string, val: any) {
    window.localStorage.setItem(key, JSON.stringify(val, null, 2));
  }
}
