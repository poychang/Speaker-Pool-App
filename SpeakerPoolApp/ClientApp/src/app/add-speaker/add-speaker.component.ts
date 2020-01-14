import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
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
      skill: new FormControl('', [Validators.maxLength(30)]),
      skills: new FormControl([], [Validators.required]),
      introduction: new FormControl(''),
      experience: new FormControl('', [Validators.maxLength(30)]),
      experiences: new FormControl([]),
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
    this.addItemToSet(
      this.newSpeakerForm.get('skill'),
      this.newSpeakerForm.get('skills')
    );
  };

  public delSkill = skill => {
    this.delItemInSet(skill, this.newSpeakerForm.get('skills'));
  };

  public addExperience = () => {
    this.addItemToSet(
      this.newSpeakerForm.get('experience'),
      this.newSpeakerForm.get('experiences')
    );
  };

  public delExperience = experience => {
    this.delItemInSet(experience, this.newSpeakerForm.get('experiences'));
  };

  private addItemToSet(item: AbstractControl, set: AbstractControl) {
    const itemValue = item.value as string;
    const setValue = set.value as string[];
    item.setValue('');

    if (setValue.find(s => s === itemValue) || itemValue === '') {
      return;
    } else {
      set.setValue([...setValue, itemValue]);
    }
  }

  private delItemInSet(item: string, set: AbstractControl) {
    const itemValue = item;
    const setValue = set.value as string[];

    if (setValue.find(s => s === itemValue) || itemValue === '') {
      set.setValue([...setValue.filter(i => i !== itemValue)]);
    }
  }

  public onSubmit = () => {
    this.speakerService
      .addSpeaker(this.newSpeakerForm.value as Speaker)
      .subscribe();
  };
}
