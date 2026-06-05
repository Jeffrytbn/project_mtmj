import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../core/services/news.service';
import { CertificateService } from '../../core/services/certificate.service';
import { News, Certificate } from '../../models';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  heroTitle = 'Company Resources';
  heroSubtitle = 'Access our latest updates, company profiles, and official certifications.';

  latestNews: News[] = [];
  certificates: Certificate[] = [];

  constructor(
    private newsService: NewsService,
    private certService: CertificateService
  ) {}

  ngOnInit(): void {
    this.newsService.getLatest(3).subscribe(data => {
      this.latestNews = data;
    });

    this.certService.getAll().subscribe(data => {
      this.certificates = data;
    });
  }

  downloadProfile(): void {
    // In a real app, this would trigger a PDF download
    alert('Company Profile PDF download started...');
  }
}
