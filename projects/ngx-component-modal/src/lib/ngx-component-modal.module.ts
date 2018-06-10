import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    PortalModule,
    OverlayModule
  ]
})
export class NgxComponentModalModule { }
