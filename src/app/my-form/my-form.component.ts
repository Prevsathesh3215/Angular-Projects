import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-my-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './my-form.component.html',
  standalone: true,
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {

  submit(login: NgForm){
    console.log('Form submitted.', login)
  }

}
