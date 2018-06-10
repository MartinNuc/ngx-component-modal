import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleModalComponent } from './sample-modal/sample-modal.component';
import { NgxComponentModalModule } from 'projects/ngx-component-modal/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    SampleModalComponent
  ],
  imports: [
    BrowserModule,
    NgxComponentModalModule
  ],
  providers: [],
  entryComponents: [
    SampleModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
