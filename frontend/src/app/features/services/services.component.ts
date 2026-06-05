import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Service } from '../../models';
import { ServiceService } from '../../core/services/service.service';

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  heroTitle = 'Integrated Engineering Solutions\nfor Global Standards';
  heroSubtitle =
    'Delivering end-to-end EPC services with precision, safety, and technical ' +
    'excellence across all sectors in Indonesia.';

  sectionLabel = 'EPC ENGINEERING';
  sectionTitle = 'Our Service Portfolio';

  processLabel = 'OUR PHASES';
  processTitle = 'Systematic Execution';

  processSteps: ProcessStep[] = [
    { icon: 'search', title: 'Planning', description: 'Feasibility & Scope Analysis' },
    { icon: 'engineering', title: 'Design', description: 'Engineering & Detailed Design' },
    { icon: 'local_shipping', title: 'Procurement', description: 'Sourcing & Logistics' },
    { icon: 'construction', title: 'Construction', description: 'Construction & Assembly' },
    { icon: 'check_circle', title: 'Commissioning', description: 'Testing & Handover' },
  ];

  ctaTitle = 'Ready to start your next industrial project?';
  ctaDescription =
    'Partner with PT MTJM for reliable, scalable, and technically sound EPC solutions.';

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getAll().subscribe(data => {
      this.services = data;
    });
  }
}
