import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

interface PhoneItem {
  icon: string;
  label: string;
  number: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  companyTagline = 'MTJM is an EPC general contractors that designs, engineers, and constructs power plant, oil & gas, water treatment, mining, plant and industrial projects.';

  socials: SocialLink[] = [
    { label: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { label: 'LinkedIn', icon: 'linked_in', url: 'https://linkedin.com' },
    { label: 'Twitter', icon: 'close', url: 'https://twitter.com' },
    { label: 'YouTube', icon: 'play_circle', url: 'https://youtube.com' },
  ];

  contactInfo = {
    address: 'Jl. Bumur I No 72, Kranggan Bekasi – Jawa Barat',
    emails: [
      'inquiry@pt-mtjm.co.id',
      'poltak.sinaga@pt-mtjm.co.id',
    ],
    phones: [
      { icon: 'phone', label: '+62 21 2128 4567', number: '+622121284567' },
      { icon: 'smartphone', label: '+62 811 8702 119', number: '+628118702119' },
    ] as PhoneItem[],
  };

  // Google Maps embed — PT Multi Tehnik Jaya Mandiri, Bekasi
  mapUrl: SafeResourceUrl;
  mapDirectionsUrl = 'https://maps.google.com/?q=PT+Multi+Tehnik+Jaya+Mandiri,+Bekasi';

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d107.0!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPT+Multi+Tehnik+Jaya+Mandiri!5e0!3m2!1sid!2sid!4v1'
    );
  }
}