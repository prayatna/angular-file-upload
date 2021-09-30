import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  @Input()
  requiredFileType: string;

  fileName = '';
  file: File;

  constructor() {}

  ngOnInit() {}

  onFileSelected(event) {
    console.log(event);
  }
}
