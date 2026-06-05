import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../models';
import { ProjectService } from '../../core/services/project.service';

interface ProjectSpec {
  label: string;
  value: string;
}

interface Challenge {
  icon: string;
  title: string;
  description: string;
}

interface ImpactStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  specifications: ProjectSpec[] = [];
  challenges: Challenge[] = [];
  impactStats: ImpactStat[] = [];
  solutionDescription = '';

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.projectService.getBySlug(slug).subscribe(data => {
        this.project = data;
        if (data) {
          this.populateDetails(data);
        }
      });
    }
  }

  /**
   * Populate detail sections with contextual data.
   * In CMS phase, this data will come directly from the API.
   */
  private populateDetails(project: Project): void {
    this.specifications = [
      { label: 'Duration', value: this.calculateDuration(project.startDate, project.endDate) },
      { label: 'Location', value: project.location },
      { label: 'Client', value: project.client },
      { label: 'Category', value: project.category },
      { label: 'Status', value: project.status === 'completed' ? 'Completed' : 'In Progress' },
      { label: 'Year', value: `Completed ${new Date(project.endDate).getFullYear()}` },
    ];

    this.challenges = [
      {
        icon: 'warning',
        title: 'Operational Constraints',
        description: 'Coordinating multi-area operations across 10,000+ international time and operational barriers, requiring multi-division scheduling and advanced collaboration.'
      },
      {
        icon: 'terrain',
        title: 'Geotechnical Instability',
        description: 'Site conditions required highly comprehensive soil analysis, demanding complex deep-foundation engineering within strict structural safety constraints.'
      },
    ];

    this.solutionDescription =
      'Our engineering team implemented a comprehensive BIM (Building Information Modeling) strategy to streamline ' +
      'construction phases, identifying potential clashes before onsite progression. Deep soil boring and ' +
      'geotechnical surveys informed the foundation design. MTJM project management ensured ' +
      'calculated safety, leveraging to ensure safe placement of the most in-house expertise.';

    this.impactStats = [
      { value: '25%', label: 'Increase in Overall Plant Efficiency' },
      { value: 'Zero', label: 'Lost Time Incidents / Lost Incidents' },
      { value: '3wks', label: 'Delivered ahead of schedule' },
    ];
  }

  private calculateDuration(start: string, end: string): string {
    const months = Math.round(
      (new Date(end).getTime() - new Date(start).getTime()) / (1000 * 60 * 60 * 24 * 30)
    );
    return `${months} Months`;
  }
}
