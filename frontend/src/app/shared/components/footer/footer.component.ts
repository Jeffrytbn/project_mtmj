import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
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

  companyTagline = 'Engineering Excellence for Industrial Growth.';

  footerLinks: FooterLink[] = [
    { label: 'Services', route: '/services' },
    { label: 'Projects', route: '/projects' },
    { label: 'Contact', route: '/contact' },
    { label: 'Company Profile Download', route: '/about' },
  ];

  contactInfo = {
    location: 'Jakarta, Indonesia',
    email: 'info@mtjm.co.id',
  };
}
