import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Bootcamp,
  BootcampFullResponse,
} from 'src/app/models/Bootcamp.model';

@Injectable({
  providedIn: 'root',
})
export class BcServiceService {
  bootcampResponse: Observable<Bootcamp[]>;
  constructor(private httpClient: HttpClient) {}
  /*  This method returns the array of camps found */
  fetchCamps(): Observable<Bootcamp[]> {
    return this.httpClient
      .get<BootcampFullResponse>('http://localhost:5000/v1/bootcamps')
      .pipe(
        map((el: BootcampFullResponse) => {
          return el.data;
        }),
      );
  }
}
