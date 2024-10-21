import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReverseTextPipe } from '../pipes/reverse-text.pipe';

@Component({
  selector: 'app-yosra',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,ReverseTextPipe],
  templateUrl: './yosra.component.html',
  styleUrls: ['./yosra.component.css']
})
export class YosraComponent implements OnInit {

  // Form group for the reactive form
  personalInfoForm!: FormGroup;

  isVisible: boolean = true;

  // Properties to display in the card (initial values)
  displayedName: string = "Yosra";
  displayedEmail: string = "y@gmail.com";
  displayedAddress: string = "Ibn Khaldoun";
  displayedPhone: string = "587";
  displayedBirthdate: Date = new Date('2001-10-28'); // Month is 0-based, so October is 9

 

  image: string = "./yosra.png"; // property binding

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with validation
    this.personalInfoForm = this.fb.group({
      name: ['Yosra', Validators.required],
      email: ['y@gmail.com', [Validators.required, Validators.email]],
      address: ['Ibn Khaldoun', Validators.required],
      phone: ['55555555', [Validators.required, Validators.pattern(/^\d{8}$/)]], // 8 digits phone validation
      birthdate: [{ value: '2001/10/28', disabled: true }] // Birthdate remains disabled
    });
  }

  // Method to apply changes to the card when the button is clicked
  applyChanges() {
    this.displayedName = this.personalInfoForm.get('name')?.value;
    this.displayedEmail = this.personalInfoForm.get('email')?.value;
    this.displayedAddress = this.personalInfoForm.get('address')?.value;
    this.displayedPhone = this.personalInfoForm.get('phone')?.value;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
