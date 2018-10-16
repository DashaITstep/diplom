import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Image} from "../shared/image";
import {PhotoService} from "../shared/photo.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

    constructor(private photoService: PhotoService, private elRef: ElementRef, private render: Renderer2) { }

    public portfolioPreviewPhotos: Image[] = [];
    public moverWidth = null;
    private moverLeft = 0;
    private mover: HTMLElement;
    private carousel: HTMLElement;


    ngOnInit() {
        this.getAllPhotos();
        this.mover = this.elRef.nativeElement.querySelector(".mover");
        this.carousel = this.elRef.nativeElement.querySelector(".photosCont");

    }

    private getAllPhotos(){
        this.photoService.getAllPhotosGroupedByAlbum().subscribe((photos: Image[])=>{
            this.portfolioPreviewPhotos = photos;
            this.moverWidth = photos.length * 360 + 'px';
        });
    }

    public next(){
        let carouselWidth = this.carousel.getBoundingClientRect().width;
        let width = this.moverWidth.substr(0, (this.moverWidth.length -2)) ;
        width = width - carouselWidth - 360;
        width = -width;
        console.log(width);
        if(this.moverLeft<width) return;
        this.moverLeft += -360;
        this.mover.style.left = this.moverLeft + 'px';
    }

    public prev(){
        if(this.moverLeft>-360) return;
        this.moverLeft += 360;
        this.mover.style.left = this.moverLeft + 'px';
    }

}
