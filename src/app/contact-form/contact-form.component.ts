import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: false,
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  sendEmail(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.toastService.error('Please fill all fields');
      return;
    }

    this.loading = true;

    const serviceID = 'service_flybors';
    const templateID = 'template_0x4fnab';
    const publicKey = 'JPtOYOMj9rFB42WTL';

    emailjs
      .send(serviceID, templateID, this.contactForm.value, publicKey)
      .then(() => {
        this.toastService.success('Message sent successfully!');
        this.contactForm.reset();
        this.loading = false;
      })
      .catch((error) => {
        console.error('Email send error:', error);
        this.toastService.error(
          'Failed to send message, please try again later.',
        );
        this.loading = false;
      });
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
}
