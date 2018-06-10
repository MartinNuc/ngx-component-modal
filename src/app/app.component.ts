import { Component } from '@angular/core';
import { SampleModalComponent } from './sample-modal/sample-modal.component';
import { NgxComponentModalService } from 'projects/ngx-component-modal/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ngxComponentModal: NgxComponentModalService) {}

  openModal() {
    const modalRef = this.ngxComponentModal.open<boolean>(SampleModalComponent, {
      message: 'Hello',
      yesButton: 'Yes',
      noButton: 'No'
    });
    modalRef.result.subscribe(val => console.log(val), () => console.log('dismissed'));
  }
}
