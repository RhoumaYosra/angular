import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  // Property to toggle visibility
  isVisible: boolean = true;

  // Array of animals
  animals: any[] = []; // Initialize an empty array

constructor(private dataService:DataService){}
  ngOnInit() {
    // Get the animals data from the service on component initialization
    this.animals = this.dataService.getAnimals();

  }
  // Method to toggle visibility
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
