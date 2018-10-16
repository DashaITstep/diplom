import {Component, OnInit} from '@angular/core';
import {PhotoService} from "../shared/photo.service";
import {Image} from "../shared/image";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

    constructor(private photoService: PhotoService) { }

    public sliderPhotos: Image[] = [];
    public portfolioPreviewPhotos: Image[] = [];

    ngOnInit() {
      this.getAllPhotos();
    }

    getAllPhotos(){
        this.photoService.getAllPhotosGroupedByAlbum().subscribe((photos: Image[])=>{
            let splicedPhotos = photos.slice(0,12);
            this.portfolioPreviewPhotos = splicedPhotos;
            console.log(this.portfolioPreviewPhotos);

            let splicedPhotos2 = photos.slice(0,5);
            this.sliderPhotos = splicedPhotos2;
        });
    }

}
