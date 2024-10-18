import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAnimals() {
    return [
      { name: 'Lion', type: 'wild', age: 5 },
      { name: 'Elephant', type: 'wild', age: 10 },
      { name: 'Dog', type: 'domestic', age: 3 },
      { name: 'Cat', type: 'domestic', age: 2 },
      { name: 'Tiger', type: 'wild', age: 6 },
    ];
  }
}
