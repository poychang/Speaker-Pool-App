import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SpeakerService } from '../services/speaker.service';

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrls: ['./add-speaker.component.scss']
})
export class AddSpeakerComponent implements OnInit {
  breadcrumb: Breadcrumb[];
  avatarImage = './assets/images/unknown-avatar.jpg';
  fileToUpload: File = null;
  newSpeakerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private speakerService: SpeakerService
  ) {
    this.newSpeakerForm = new FormGroup({
      avatar: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      subtitle: new FormControl(''),
      skill: new FormControl(''),
      skills: new FormControl([], [Validators.required]),
      introduction: new FormControl(''),
      experience: new FormControl([]),
      remark: new FormControl('')
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: RouteData) => {
      this.breadcrumb = data.breadcrumb;
    });
  }

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  public addSkill = () => {
    const skill = this.newSpeakerForm.get('skill').value as string;
    const skills = this.newSpeakerForm.get('skills').value as string[];
    this.newSpeakerForm.get('skill').setValue('');

    if (skills.find(s => s === skill) || skill === '') {
      return;
    } else {
      this.newSpeakerForm.get('skills').setValue([...skills, skill]);
    }
  };

  public onSubmit = () => {
    console.log(this.newSpeakerForm.value);
    this.speakerService
      .addSpeaker(this.newSpeakerForm.value as Speaker)
      .subscribe();
  };
}
