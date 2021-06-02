import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {

  @ViewChild('installImg') installImg: ElementRef;

  @Input() title: string;

  file = null;

  constructor() { }

  ngOnInit() {
  }

  clickFile() {
    this.installImg.nativeElement.value = null;
  }

  onSelectFile(e) {
    const file = e.target.files[0];
    const size = (file.size/1024).toFixed(2) + ' Kb';
    this.file = { name: file.name, size };
    console.log(this.file);
  }

  getInstallImg() {
    this.installImg.nativeElement.click();
  }

}
