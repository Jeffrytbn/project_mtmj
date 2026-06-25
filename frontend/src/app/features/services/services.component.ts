import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

interface BenefitItem {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  sectionLabel = 'EPC ENGINEERING';
  sectionTitle = 'Our Service Portfolio';

  activeIndex = 0;

  services: ServiceItem[] = [
    {
      icon: 'factory',
      title: 'Pembangkit Listrik',
      description:
        'MTJM menyediakan layanan yang komprehensif untuk Pembangkit Listrik EPC, termasuk mesin gas, mini hidro, genset, dan pembangkit listrik tenaga batubara.',
      features: [
        'Pembangkit Listrik Tenaga Mesin Gas (PLTMG)',
        'Pembangkit Listrik Tenaga Minihidro (PLTM)',
        'Pembangkit Listrik Tenaga Mesin Diesel (PLTMD)',
        'Pembangkit Listrik Tenaga Batu Bara',
      ],
      imageUrl: 'assets/images/services/power-plant.jpg',
    },
    {
      icon: 'settings',
      title: 'Mekanikal',
      description:
        'Kami menyediakan layanan EPC Mechanical yang lengkap, termasuk desain, instalasi, dan pemeliharaan sistem perpipaan, sistem pemadam kebakaran dan perlindungan, HVAC (pemanas, ventilasi, dan pendingin ruangan), dan sistem pompa untuk memenuhi beragam kebutuhan industri dan komersial.',
      features: [
        'Sistem Perpipaan',
        'Sistem Pemadaman Dan Perlindungan Kebakaran',
        'HVAC',
        'Sistem Pompa',
      ],
      imageUrl: 'assets/images/services/mechanical.jpg',
    },
    {
      icon: 'bolt',
      title: 'Elektrikal',
      description:
        'Kami menawarkan layanan kelistrikan EPC yang komprehensif, termasuk pemasangan dan pemeliharaan jalur transmisi dan distribusi listrik, solusi penerangan untuk gedung, pabrik, dan jalan, pemasangan instrumen dan sistem kontrol, serta pembuatan dan pemasangan panel tegangan menengah dan rendah untuk memastikan infrastruktur kelistrikan yang efisien dan andal.',
      features: [
        'Jalur Transmisi & Distribusi Listrik',
        'Listrik untuk Gedung/Pabrik & Penerangan Jalan',
        'Instalasi Instrumen & Kontrol',
        'Pembuat & Pemasangan Panel MV & LV',
      ],
      imageUrl: 'assets/images/services/electrical.jpg',
    },
    {
      icon: 'architecture',
      title: 'Sipil & Arsitektur',
      description:
        'Kami menyediakan layanan EPC sipil dan arsitektur yang lengkap, termasuk desain, konstruksi, dan finishing interior struktur baja dan bangunan untuk memenuhi berbagai kebutuhan dan spesifikasi proyek.',
      features: [
        'Struktur Baja',
        'Gedung',
        'HVAC',
        'Interior',
      ],
      imageUrl: 'assets/images/services/civil.jpg',
    },
    {
      icon: 'water_drop',
      title: 'Pengolahan Air',
      description:
        'Kami menyediakan layanan EPC lengkap untuk instalasi pengolahan air, termasuk pengolahan limbah, pengolahan air bersih, dan pengolahan air limbah, untuk memastikan pengelolaan sumber daya air yang efisien dan ramah lingkungan.',
      features: [
        'Instalasi Pengolahan Limbah',
        'Instalasi Pengolahan Air Bersih',
        'Instalasi Pengolahan Air Limbah',
      ],
      imageUrl: 'assets/images/services/water.jpg',
    },
    {
      icon: 'propane_tank',
      title: 'Tangki & Boiler',
      description:
        'Kami menyediakan layanan EPC lengkap untuk tangki penyimpanan, termasuk tangki minyak, air, bahan kimia, filter, dan tangki bertekanan, serta boiler, yang memastikan penyimpanan dan pemanfaatan berbagai cairan dan uap yang aman dan efisien untuk aplikasi industri.',
      features: [
        'Tangki Minyak & Tangki Air',
        'Tangki Bahan Kimia',
        'Tangki Penyaring',
        'Tangki Bertekanan',
        'Boiler',
      ],
      imageUrl: 'assets/images/services/boiler.jpg',
    },
    {
      icon: 'build',
      title: 'Relokasi & Pembongkaran',
      description:
        'Kami menawarkan layanan EPC lengkap untuk relokasi dan pembongkaran, termasuk solusi jacking & rolling dan lifting, memastikan transportasi yang aman dan efisien serta pemasangan kembali alat berat dan struktur.',
      features: [
        'Jacking & Rolling',
        'Pengangkatan (Lifting)',
      ],
      imageUrl: 'assets/images/services/relocation.jpg',
    },
  ];

  benefits: BenefitItem[] = [
    { icon: 'hub', label: 'All disciplines in-house' },
    { icon: 'engineering', label: 'Engineering design from EPC perspective' },
    { icon: 'verified_user', label: 'Proven track record for highest HSE standards' },
    { icon: 'schedule', label: 'Start-up on time through accurate time planning' },
    { icon: 'visibility', label: 'Transparent project communication' },
    { icon: 'local_shipping', label: 'All resources near the project & customer' },
  ];

  setActive(index: number): void {
    this.activeIndex = index;
    const el = document.getElementById('service-' + index);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}