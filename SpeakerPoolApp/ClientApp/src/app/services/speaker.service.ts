import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { of } from 'rxjs';
import { catchError, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  constructor(private http: HttpClient, private env: EnvironmentService) {}

  public $getSpeakers = () =>
    this.http.get<Speaker[]>(`${this.env.api}/speaker`).pipe(
      share(),
      catchError(err => of([]))
    );

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
