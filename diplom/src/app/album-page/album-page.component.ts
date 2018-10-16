import {Component, OnInit} from '@angular/core';
import {PhotoService} from "../shared/photo.service";
import {Image} from "../shared/image";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {

  constructor(private photoService: PhotoService, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  public albumPhotos = [];
  public id: Number;
  public activePhoto: HTMLElement;

  ngOnInit() {
    this.getPhotosByAlbum(Number(this.id));
  }

  getPhotosByAlbum(album_id){
    this.photoService.getImagesByAlbum(album_id).subscribe((photos: Image[])=>{
      this.albumPhotos = photos;
    });
  }

    viewPhoto($event) {
        if ($event.target.className == 'previewPhoto'){
          this.activePhoto = $event.target;
        }else if($event.target.className == 'closeBtn'){
          this.activePhoto = null;
        }
    }
}





















