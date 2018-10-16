import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PhotoService} from "../shared/photo.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public name: string;
  public phone: string;
  public text: string;
  @ViewChild("warning") warning: ElementRef;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {}

    sendLead() {
        if (this.name != null && this.phone != null && this.text != null){
            this.photoService.saveLead(this.name, this.phone, this.text);
            this.name = null;
            this.phone = null;
            this.text = null;
            this.warning.nativeElement.style.display = 'none';
        }else {
          this.warning.nativeElement.style.display = 'block';
        }
    }
}












