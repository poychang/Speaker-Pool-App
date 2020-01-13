import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  constructor(private http: HttpClient, private env: EnvironmentService) {}

  public getSpeakers = () => this.http.get<Speaker[]>(`${this.env.api}/speaker`);
}
