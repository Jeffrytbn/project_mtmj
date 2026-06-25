import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CarouselSlide {
  imageUrl: string;
  alt: string;
}

interface ServiceHighlight {
  icon: string;
  title: string;
  description: string;
}

interface PortfolioItem {
  title: string;
  category: string;
  imageUrl: string;
  large?: boolean;
}

interface Partner {
  name: string;
  logoUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // --- Carousel ---
  carouselSlides: CarouselSlide[] = [
    { imageUrl: '/assets/images/home/carousel-1.jpg', alt: 'Instalasi mekanikal MTJM' },
    { imageUrl: '/assets/images/home/carousel-2.jpg', alt: 'Proyek konstruksi industri MTJM' },
    { imageUrl: '/assets/images/home/carousel-3.jpg', alt: 'Tim engineering MTJM di lapangan' },
  ];
  activeSlide = 0;
  private carouselTimer?: ReturnType<typeof setInterval>;
  private readonly carouselIntervalMs = 5000;

  // --- Hero Content ---
  heroTitle = 'Your Technical Partner';
  heroDescription =
    'MTJM is a company engaged in the field of mechanical works (oil & gas piping, pumps, ' +
    'plumbing, hydrant etc), electrical works (low/high voltage), panel manufacturing, steel ' +
    'construction, power plant, industrial factory, WTP/STP, storage tank, generator set ' +
    'overhaul, civil & architecture. We offer complete solutions starting from design and ' +
    'detailed engineering to procurement, fabrication, and construction and commissioning. ' +
    'We are committed to helping our clients reach their goals and provide an innovative solutions.';

  // --- Services Highlight ---
  servicesLabel = 'KEAHLIAN KAMI';
  servicesTitle = 'Layanan Unggulan';
  serviceHighlights: ServiceHighlight[] = [
    {
      icon: 'architecture',
      title: 'Engineering Design',
      description:
        'Penyusunan desain dan detailed engineering yang komprehensif untuk memastikan setiap ' +
        'proyek berjalan efisien dan sesuai standar internasional.',
    },
    {
      icon: 'precision_manufacturing',
      title: 'Mechanical & Electrical',
      description:
        'Instalasi mekanikal, elektrikal, dan fabrikasi panel dengan presisi tinggi untuk ' +
        'kebutuhan industri skala besar.',
    },
    {
      icon: 'trending_up',
      title: 'Construction & Commissioning',
      description:
        'Eksekusi konstruksi hingga commissioning dengan standar keselamatan dan kualitas ' +
        'kerja yang terukur.',
    },
  ];

  // --- Portfolio ---
  portfolioLabel = 'PORTOFOLIO';
  portfolioTitle = 'Proyek Terbaru Kami';
  portfolioItems: PortfolioItem[] = [
    {
      title: 'Major Power Plant EPC Expansion',
      category: 'Power & Energy',
      imageUrl: '/assets/images/projects/power-plant.jpg',
      large: true,
    },
    {
      title: 'Heavy Equipment Assembly Line',
      category: 'Manufacturing',
      imageUrl: '/assets/images/projects/assembly-line.jpg',
    },
    {
      title: 'Industrial Port Expansion',
      category: 'Marine & Port',
      imageUrl: '/assets/images/projects/port-expansion.jpg',
    },
  ];

  // --- Partners ---
  partnersLabel = 'MITRA KAMI';
  partnersTitle = 'Mitra Terpercaya';
  partnersDescription =
    'Kami berkolaborasi dengan perusahaan-perusahaan terdepan di berbagai sektor industri ' +
    'untuk menghadirkan solusi terbaik bagi klien kami.';
  partners: Partner[] = [
    { name: 'Partner 1', logoUrl: '/assets/images/partners/partner-1.png' },
    { name: 'Partner 2', logoUrl: '/assets/images/partners/partner-2.png' },
    { name: 'Partner 3', logoUrl: '/assets/images/partners/partner-3.png' },
    { name: 'Partner 4', logoUrl: '/assets/images/partners/partner-4.png' },
    { name: 'Partner 5', logoUrl: '/assets/images/partners/partner-5.png' },
    { name: 'Partner 6', logoUrl: '/assets/images/partners/partner-6.png' },
    { name: 'Partner 7', logoUrl: '/assets/images/partners/partner-7.png' },
    { name: 'Partner 8', logoUrl: '/assets/images/partners/partner-8.png' },
  ];

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  goToSlide(index: number): void {
    this.activeSlide = index;
    // Reset timer supaya tidak langsung pindah lagi setelah user klik manual
    this.stopCarousel();
    this.startCarousel();
  }

  private startCarousel(): void {
    this.carouselTimer = setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.carouselSlides.length;
    }, this.carouselIntervalMs);
  }

  private stopCarousel(): void {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
      this.carouselTimer = undefined;
    }
  }
}
