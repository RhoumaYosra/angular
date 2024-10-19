import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random/5'; // Fetch 5 random dog images

  constructor(private http: HttpClient) { }

  getDogs(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching dog data:', error);
        return of({ message: 'Error fetching dog data. Please try again later.' });
      })
    );
  }
}



 // getAnimals() {
  //   return [
  //     { name: 'Lion', type: 'wild', age: 5 },
  //     { name: 'Elephant', type: 'wild', age: 10 },
  //     { name: 'Dog', type: 'domestic', age: 3 },
  //     { name: 'Cat', type: 'domestic', age: 2 },
  //     { name: 'Tiger', type: 'wild', age: 6 },
  //   ];
  // }