import {AfterViewInit, Component, ElementRef, Input, Renderer2} from '@angular/core';
import {Image} from "../../shared/image";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  @Input() slides: Image[];
  private mover: HTMLElement;
  private slider: HTMLElement;
  private pause = false;
  private timer = null;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.mover = this.elRef.nativeElement.querySelector(".mover");
    this.slider = this.elRef.nativeElement.querySelector(".slider");
    this.renderer.listen(this.slider, 'mouseenter', ()=>{
      this.pause = true;
    });
    this.renderer.listen(this.slider, 'mouseleave', ()=>{
      this.pause = false;
    });
    setInterval(()=>{this.autoList();},5000);
  }

  slideLeft() {
    if (this.timer!==null) return;
    let pos = -100;
    this.mover.insertBefore(this.mover.lastElementChild,this.mover.firstElementChild);
    this.mover.style.marginLeft = pos + '%';
    this.timer = setInterval(()=>{
      pos += 2;
      this.mover.style.marginLeft = pos + '%';
      if (pos<0) return;
      clearInterval(this.timer);
      this.mover.style.marginLeft = '';
      this.timer = null;
    }, 20);
  }

  slideRight() {
      if (this.timer!==null) return;
      let pos = 0;
      this.timer = setInterval(()=>{
          pos -= 2;
          this.mover.style.marginLeft = pos + '%';
          if (pos>-100) return;
          clearInterval(this.timer);
          this.mover.appendChild(this.mover.firstElementChild);
          this.mover.style.marginLeft = '';
          this.timer = null;
      }, 20);
  }

  autoList(){
      if (!this.pause) this.slideRight();
  }
}
