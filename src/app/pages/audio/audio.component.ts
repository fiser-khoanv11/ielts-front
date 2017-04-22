import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Http } from '@angular/http';
 
const URL = '/api/user/audio';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {

  filesToUpload: Array<File> = [];

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  constructor(private http: Http) {}
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  // upload() {
  //   this.uploader.onBuildItemForm = function(fileItem, form) {
  //     form.append('userId', 'hihi');
  //     return {fileItem, form}
  //   };
  //   // this.uploader.queue[0]. = 'beenhere';
  //   this.uploader.queue[0].upload();
  // }
  
}
