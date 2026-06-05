import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../models';
import { ProjectService } from '../../core/services/project.service';

interface ProjectStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  activeFilter = 'All';
  categories: string[] = [];

  heroTitle = 'Engineering Milestones: Our\nProven Track Record';
  heroSubtitle =
    'Delivering complex, large-scale industrial solutions across Industries, from ' +
    'precision engineering to comprehensive construction, with engineering reliability.';

  stats: ProjectStat[] = [
    { value: '250+', label: 'PROJECT COMPLETED' },
    { value: '15+', label: 'YEAR EXPERIENCE' },
    { value: '50+', label: 'GLOBAL CLIENTS' },
    { value: '10M+', label: 'WORK HOURS' },
  ];

  ctaTitle = 'Ready to launch your next project with an industry leader?';

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getAll().subscribe(data => {
      this.allProjects = data;
      this.filteredProjects = data;
      const cats = [...new Set(data.map(p => p.category))];
      this.categories = ['All', ...cats];
    });
  }

  filterByCategory(category: string): void {
    this.activeFilter = category;
    if (category === 'All') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.allProjects.filter(p => p.category === category);
    }
  }
}
