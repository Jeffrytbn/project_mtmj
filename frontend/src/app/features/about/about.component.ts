import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CompanyStat {
  value: string;
  label: string;
}

interface InfraFeature {
  icon: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  // --- Hero ---
  heroLabel = 'OUR STORY';
  heroTitle = 'Engineering Excellence, Driven by Integrity';
  heroSubtitle =
    'Building the foundation of tomorrow through world-class engineering, procurement, ' +
    'construction, and industrial services across Indonesia.';

  // --- About The Firm ---
  aboutLabel = 'ABOUT THE FIRM';
  aboutTitle = 'Leading M&E Partner in Indonesia';
  aboutDescription =
    'Didirikan di Balikpapan, PT Multi Tehnik Jaya Mandiri (MTJM) telah ' +
    'berkembang menjadi salah satu perusahaan engineering terkemuka di Indonesia. ' +
    'Dengan pengalaman lebih dari 15 tahun, kami menyediakan solusi terintegrasi ' +
    'dalam bidang Engineering, Procurement, Construction (EPC), serta layanan ' +
    'Mekanikal, Elektrikal, dan Industrial untuk berbagai sektor industri. Visi kami ' +
    'adalah menjadi mitra teknik terpercaya yang mengutamakan kualitas, keselamatan, ' +
    'dan inovasi dalam setiap proyek yang kami kerjakan.';

  companyStats: CompanyStat[] = [
    { value: '15+', label: 'Years of Service' },
    { value: '3', label: 'Corporate Legal Office' },
  ];

  // --- Infrastructure ---
  infraLabel = 'OUR INFRASTRUCTURE';
  infraTitle = 'Purpose-Built Operating Center';
  infraDescription =
    'Our modern facilities enable us to deliver end-to-end industrial solutions, ' +
    'from precision fabrication to large-scale project execution, supported by ' +
    'state-of-the-art equipment and rigorous quality controls.';

  infraFeatures: InfraFeature[] = [
    {
      icon: 'precision_manufacturing',
      title: 'Adaptive Mechanical',
      description:
        'Advanced mechanical workshop equipped with CNC machines, lathes, and welding stations ' +
        'for precision fabrication and assembly of industrial components.',
    },
    {
      icon: 'trending_up',
      title: 'Progressive Capacity',
      description:
        'Continuously expanding our operational capacity with new equipment, trained personnel, ' +
        'and enhanced processes to meet growing industry demands.',
    },
    {
      icon: 'verified',
      title: 'Quality Control',
      description:
        'Dedicated quality assurance laboratory with NDT testing, pressure testing, and ' +
        'dimensional inspection capabilities certified to international standards.',
    },
  ];

  // --- Leadership ---
  leadershipLabel = 'LEADERSHIP';
  leadershipTitle = 'The Team Behind Every Milestone';

  teamMembers: TeamMember[] = [
    {
      name: 'Hendra Wijaya',
      position: 'Chief Executive Officer',
      imageUrl: '/assets/images/team/ceo.jpg',
    },
    {
      name: 'Rizky Hidayat',
      position: 'Director of Operations',
      imageUrl: '/assets/images/team/director-ops.jpg',
    },
    {
      name: 'Sari Wulandari',
      position: 'Director of Engineering',
      imageUrl: '/assets/images/team/director-eng.jpg',
    },
    {
      name: 'Ahmad Faisal',
      position: 'Commercial Director',
      imageUrl: '/assets/images/team/director-comm.jpg',
    },
  ];

  // --- CTA ---
  ctaTitle = 'Ready to partner with an industry leader?';
  ctaDescription =
    'Discover how MTJM\'s engineering expertise and industrial capabilities enable businesses ' +
    'to achieve operational excellence.';
}
