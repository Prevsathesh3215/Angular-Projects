import { Component } from '@angular/core';
import { ReactiveFormsModule,  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-my-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './my-form.component.html',
  standalone: true,
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10,12}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
    }, {
      validators: this.passwordMatchValidator,
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }


}
