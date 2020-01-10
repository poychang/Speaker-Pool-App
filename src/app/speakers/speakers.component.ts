import { Component, OnInit } from '@angular/core';
import { SpeakerService } from '../services/speaker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  breadcrumb: Breadcrumb[];
  speakers: Speaker[];
  isShowDetail = false;

  constructor(
    private route: ActivatedRoute,
    private speakerService: SpeakerService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: RouteData) => {
      this.breadcrumb = data.breadcrumb;
    });
    this.speakers = this.speakerService.getSpeakers();
  }

  public switchShowDetail() {
    this.isShowDetail = !this.isShowDetail;
  }
}
