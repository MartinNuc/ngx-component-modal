import { Component, OnInit, Inject } from '@angular/core';
import { MODAL_CONTEXT } from 'projects/ngx-component-modal/src/public_api';
import { NgxModalRef } from 'projects/ngx-component-modal/src/lib/ngx-component-modal-ref';

@Component({
  selector: 'app-sample-modal',
  templateUrl: './sample-modal.component.html',
  styleUrls: ['./sample-modal.component.scss']
})
export class SampleModalComponent implements OnInit {

  constructor(public modalRef: NgxModalRef<boolean>, @Inject(MODAL_CONTEXT) public context: any) {}

  ngOnInit() {
  }

  dismiss() {
    this.modalRef.dismiss();
  }

  close() {
    this.modalRef.resolve(true);
  }
}
