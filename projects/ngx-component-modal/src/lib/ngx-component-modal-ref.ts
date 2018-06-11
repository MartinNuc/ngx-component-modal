import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Observable } from 'rxjs';

export class NgxModalRef<T> {

  protected _result = new Subject<T>();

  constructor(private overlayRef: OverlayRef) {}

  get result(): Observable<T> {
    return this._result.asObservable();
  }

  dismiss() {
    this._result.error('modal dismissed');
    this.overlayRef.dispose();
  }

  resolve(result: T) {
    this._result.next(result);
    this._result.complete();
    this.overlayRef.dispose();
  }
}
