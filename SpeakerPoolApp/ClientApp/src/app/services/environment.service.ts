import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  constructor() {
    if (!environment.production) {
      console.log(JSON.stringify(environment));
    }
  }

  public api: string = environment.api;
}
