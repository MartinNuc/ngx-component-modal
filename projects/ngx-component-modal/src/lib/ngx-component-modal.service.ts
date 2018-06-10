import { Injectable, Component, Injector, InjectionToken } from '@angular/core';
import { ComponentType, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { NgxModalRef } from './ngx-component-modal-ref';

export const MODAL_CONTEXT = new InjectionToken<any>('NGX_COMPONENT_MODAL_CONTEXT');

@Injectable({
  providedIn: 'root'
})
export class NgxComponentModalService {
  buildOverlayConfig(options: OverlayConfig): any {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      positionStrategy,
      ...options
    });

    return overlayConfig;
  }

  constructor(protected overlay: Overlay, protected injector: Injector) { }

  open<T>(component: ComponentType<any>, context?: object, options?: OverlayConfig): NgxModalRef<T> {
    const overlayConfig = this.buildOverlayConfig(options);
    const overlayRef = this.overlay.create(overlayConfig);

    const modalRef = new NgxModalRef<T>(overlayRef);

    const injectorTokens = new WeakMap();
    injectorTokens.set(MODAL_CONTEXT, context);
    injectorTokens.set(NgxModalRef, modalRef);
    const portalInjector = new PortalInjector(this.injector, injectorTokens);

    const componentPortal = new ComponentPortal(component, null, portalInjector);
    overlayRef.attach(componentPortal);
    return modalRef;
  }
}
