import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { GetDataService } from '../../services/get-data.service';
import { AccountService } from '../../services/account.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['../common/common.component.css', './speaking.component.css'],
  providers: [ GetDataService ]
})
export class SpeakingComponent implements OnInit {

  data: Object;
  testId: number;
  url = '/api/user/audio';
  // url = 'http://localhost:3000/api/user/audio';
  audioUrl: string;
  uploader: FileUploader = new FileUploader({url: this.url});

  constructor(private getDataService: GetDataService, private route: ActivatedRoute,
              private accSv: AccountService, private userSv: UserService) { }

  ngOnInit() {
    this.testId = this.route.snapshot.params['testId'];

    this.getDataService.findOne(this.testId, 'speaking').then(
      (value: any) => {
        this.data = value;
      },
      (reason: any) => console.error(reason)
    );

    this.accSv.checkStatus().then(
      (value: any) => {
        if (value) {
          this.userSv.findOne(value.id).then(
            (value: any) => {
              for (let i = 0; i < value.attempts.length; i++) {
                let attempt = value.attempts[i];
                if (attempt.skill === 'speaking' && attempt.test_id == this.testId) {
                  this.audioUrl = attempt.audioUrl;
                  break;
                }
              }
            },
            (reason: any) => console.error(reason)
          );
        }
      },
      (reason: any) => console.error(reason)
    );
  }

  upload() {
    // this.uploader.queue[0].is
    this.accSv.checkStatus().then(
      (value: any) => {
        if (value) {
          let testId = this.testId;
          this.uploader.onBuildItemForm = function(fileItem, form) {
            form.append('testId', testId);
            form.append('userId', value.id);
            return {fileItem, form}
          };
          
          this.uploader.queue[this.uploader.queue.length - 1].upload();
        }
      },
      (reason: any) => console.error(reason)
    );
  }

}
