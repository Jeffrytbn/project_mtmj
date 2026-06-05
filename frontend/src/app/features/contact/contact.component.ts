import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../core/services/contact.service';

interface ContactCard {
  icon: string;
  title: string;
  lines: string[];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  heroTitle = 'Connect with Our Engineering\nExperts';
  heroSubtitle = 'Ready to support your next industrial milestone with precision and reliability.';

  contactCards: ContactCard[] = [
    {
      icon: 'location_on',
      title: 'Head Office',
      lines: ['Jl. Industri Raya No. 45', 'Jakarta Pusat, 10610', 'Indonesia'],
    },
    {
      icon: 'phone',
      title: 'Hotline',
      lines: ['+62 21 555 0188', 'Toll-Free: 0800 1 555 018'],
    },
    {
      icon: 'email',
      title: 'Email',
      lines: ['inquiries@mtjm.co.id', 'support@mtjm.co.id'],
    },
    {
      icon: 'chat',
      title: 'WhatsApp Business',
      lines: ['Fast response for urgent', 'parts requests.', '+62 811 8888 0188'],
    },
  ];

  projectTypes = [
    'EPC Contract',
    'Engineering Only',
    'Procurement',
    'Construction',
    'Mechanical Works',
    'Consultation',
  ];

  operatingHours = 'Mon-Fri: 08:00 - 17:00 WIB';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      projectType: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;

      this.contactService.submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.projectType,
        message: formData.message,
      }).subscribe(response => {
        this.isSubmitting = false;
        this.submitSuccess = response.success;
        this.submitMessage = response.message;
        if (response.success) {
          this.contactForm.reset();
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
