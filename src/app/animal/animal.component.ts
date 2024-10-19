import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  // Property to toggle visibility
  isVisible: boolean = true;

  // Array to hold dog images
  dogs: string[] = []; // Initialize an empty array

  // Error message to display in case of an error
  errorMessage: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Get the dogs data from the service on component initialization
    this.dataService.getDogs().subscribe(
      (response) => {
        if (response.message) {
          this.dogs = response.message; // Assuming the response has a 'message' field with the image URLs
        }
      },
      (error) => {
        console.error('Error fetching dogs:', error);
        this.errorMessage = 'Failed to load dog images. Please try again later.';
      }
    );
  }

  // Method to toggle visibility
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
