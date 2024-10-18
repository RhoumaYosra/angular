import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-yosra',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './yosra.component.html',
  styleUrls: ['./yosra.component.css']  // corrected to 'styleUrls'
})
export class YosraComponent {

  // Property to toggle visibility
  isVisible: boolean = true;


  name: string = "Yosra"; // interpolation
  email: string = "y@gmail.com"; // interpolation
  address: string = "Ibn Khaldoun"; // interpolation
  phone: string = "587"; // keep as string for phone number
  displayedPhone: string = this.phone; // new property for displaying phone
  birthdate: string = "28/10/2001"; // interpolation
  image: string = "./yosra.png"; // property binding 

  // Method to update the displayed phone number
  updatePhone() {
    this.displayedPhone = this.phone; // synchronize displayed phone with the input
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

}
