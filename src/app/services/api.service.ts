import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterModel } from '../models/Character';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getComment(id): Observable<any> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
