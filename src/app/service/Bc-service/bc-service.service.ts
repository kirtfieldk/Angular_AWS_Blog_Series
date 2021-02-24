import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BootcampFullResponse } from 'src/app/models/Bootcamp.model';

@Injectable({
  providedIn: 'root',
})
export class BcServiceService {
  bootcampResponse: Observable<BootcampFullResponse>;
  constructor(private httpClient: HttpClient) {}

  fetchCamps(): void {
    this.bootcampResponse = this.httpClient.get<BootcampFullResponse>(
      'http://localhost:5000/v1/bootcamps',
    );
  }
}
