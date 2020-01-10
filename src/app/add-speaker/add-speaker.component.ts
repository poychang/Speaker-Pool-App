import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrls: ['./add-speaker.component.scss']
})
export class AddSpeakerComponent implements OnInit {
  breadcrumb: Breadcrumb[];
  newSpeakerForm: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.newSpeakerForm = new FormGroup({
      avatar: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      subtitle: new FormControl(''),
      skill: new FormControl(''),
      skills: new FormControl([], [Validators.required]),
      introduction: new FormControl(''),
      experience: new FormControl(''),
      remark: new FormControl('')
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: RouteData) => {
      this.breadcrumb = data.breadcrumb;
    });
  }

  public addSkill = () => {};

  public onSubmit = () => {
    console.log();
  };
}
