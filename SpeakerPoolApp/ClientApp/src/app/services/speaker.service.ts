import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  constructor(private http: HttpClient, private env: EnvironmentService) {}

  public getSpeakers = () =>
    this.http.get<Speaker[]>(`${this.env.api}/speaker`);

  public addSpeaker = (speaker: Speaker) => {
    let headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    let options = {
      headers
    };
    return this.http.post<Speaker>(
      `${this.env.api}/speaker`,
      JSON.stringify(speaker),
      options
    );
  };
}
