import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Industry {
  icon: string;
  title: string;
  description: string;
  imageUrl: string;
  highlights: string[];
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  heroTitle = 'Industries We Serve';
  heroSubtitle =
    'Delivering specialized engineering, procurement, and construction solutions across ' +
    'Indonesia\'s most demanding industrial sectors.';

  industries: Industry[] = [
    {
      icon: 'oil_barrel',
      title: 'Oil, Gas & Petrochemical',
      description:
        'Full-scope EPC services for upstream, midstream, and downstream oil & gas facilities, ' +
        'including refinery upgrades, pipeline systems, and offshore platform support.',
      imageUrl: '/assets/images/industries/oil-gas.jpg',
      highlights: ['Refinery & Processing', 'Pipeline Systems', 'Offshore Support'],
    },
    {
      icon: 'bolt',
      title: 'Power & Energy',
      description:
        'Engineering and construction of power generation facilities including thermal, ' +
        'gas turbine, and renewable energy plants with complete balance-of-plant services.',
      imageUrl: '/assets/images/industries/power.jpg',
      highlights: ['Power Plants', 'Turbine Installation', 'Substation & Grid'],
    },
    {
      icon: 'precision_manufacturing',
      title: 'Manufacturing',
      description:
        'Design and build of production facilities, assembly lines, and industrial workshops ' +
        'with integrated mechanical, electrical, and automation systems.',
      imageUrl: '/assets/images/industries/manufacturing.jpg',
      highlights: ['Factory Construction', 'Assembly Lines', 'Process Automation'],
    },
    {
      icon: 'directions_boat',
      title: 'Marine & Port',
      description:
        'Port infrastructure development, shipyard facilities, and marine terminal construction ' +
        'with heavy-lift crane installation and logistics systems.',
      imageUrl: '/assets/images/industries/marine.jpg',
      highlights: ['Port Development', 'Shipyard Facilities', 'Crane Systems'],
    },
    {
      icon: 'foundation',
      title: 'Infrastructure & Civil',
      description:
        'Large-scale civil and infrastructure projects including bridges, roads, ' +
        'water treatment plants, and industrial estate development.',
      imageUrl: '/assets/images/industries/infrastructure.jpg',
      highlights: ['Civil Works', 'Water Treatment', 'Industrial Estates'],
    },
  ];

  ctaTitle = 'Don\'t see your industry?';
  ctaDescription =
    'Our engineering capabilities extend across multiple sectors. Contact us to discuss ' +
    'your specific industrial requirements.';
}
