import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css']
})
export class PhotoPageComponent implements OnInit {

  @ViewChild("photoCont") photoCont: ElementRef;
  @Input() _photoToShow;

  constructor() {}

  ngOnInit() {}

  @Input()
  set photoToShow(photo) {
      this._photoToShow = photo;
      if(this._photoToShow != null){
          this.photoCont.nativeElement.style.backgroundImage = photo.style.backgroundImage;
          this.photoCont.nativeElement.style.backgroundSize = "cover";
          this.photoCont.nativeElement.style.backgroundRepeat = "no-repeat";
          this.photoCont.nativeElement.style.backgroundPosition = "center center";
          this.photoCont.nativeElement.style.display = "block";
      }
  }

  nextImage(){
      if(this._photoToShow.nextElementSibling != null
          && this._photoToShow.nextElementSibling.className == this._photoToShow.className){
          this.photoToShow = this._photoToShow.nextElementSibling;
      }
  }

  prevImage(){
      if(this._photoToShow.previousElementSibling != null
          && this._photoToShow.previousElementSibling.className == this._photoToShow.className){
          this.photoToShow = this._photoToShow.previousElementSibling;
      }
  }

    closePhoto() {
        this.photoCont.nativeElement.style.display = "none";
    }
}
