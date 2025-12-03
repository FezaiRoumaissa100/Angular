import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToasterService } from '../services/toaster-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  private toasterService = inject(ToasterService);

  processForm(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    }
  }
}
