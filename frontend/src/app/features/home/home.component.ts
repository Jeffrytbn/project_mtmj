import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface HeroStat {
  value: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  heroTitle = 'Engineering Excellence For Industrial Growth';

  heroDescription =
    'PT Multi Tehnik Jaya Mandiri menyediakan solusi Engineering, Procurement, ' +
    'Construction, Mechanical, Electrical, Civil, Water Treatment, dan Industrial ' +
    'Services untuk berbagai sektor industri di Indonesia.';

  heroStats: HeroStat[] = [
    { value: '100+', label: 'PROJECTS COMPLETED' },
    { value: '15+', label: 'YEARS EXPERIENCE' },
    { value: '50+', label: 'INDUSTRIAL CLIENTS' },
    { value: '', label: 'SAFETY FIRST', icon: 'verified_user' },
  ];
}
