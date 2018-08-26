# NgxComponentModal

This is a library to display modal window using dynamic component. It is heavily inspired by great article [https://blog.thoughtram.io/angular/2017/11/20/custom-overlays-with-angulars-cdk.html](https://blog.thoughtram.io/angular/2017/11/20/custom-overlays-with-angulars-cdk.html).

## Demo

[Using modal in Guard (Stackblitz)](https://stackblitz.com/edit/angular-s4pwxs)

## How to use

1. install from npm

    ```bash
    npm install ngx-component-modal @angular/cdk
    ```

1. import the module

    ```javascript
      imports: [
        BrowserModule,
        NgxComponentModalModule
      ],
    ```

1. define your modal component as entry component (because Angular has no way to know about it)

    ```javascript
      entryComponents: [
        SampleModalComponent
      ],
    ```

1. add cdk overlay styles to your `styles.scss` (not necessary if you use [@angular/material](https://material.angular.io/))

    ```scss
    @import '~@angular/cdk/_overlay';
    @include cdk-overlay();
    ```

1. create component for your modal

    ```typescript
    import { MODAL_CONTEXT } from 'ngx-component-modal/src/public_api';
    import { NgxModalRef } from 'ngx-component-modal/src/lib/ngx-component-modal-ref';

    export class SampleModalComponent {

      constructor(public modalRef: NgxModalRef<boolean>, @Inject(MODAL_CONTEXT) public context: any) {
        console.log(context); // see next step how to get data in here
      }

      dismiss() {
        this.modalRef.dismiss(); // this emits an error
      }

      close() {
        this.modalRef.resolve(true); // this closes modal and emits `true` to the opener
      }
    }
    ```

1. open modal using `NgxComponentModalService` service. First argument is the component. Second argument is context through which you can inject some data into your modal component (see previous point).

    ```typescript
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
    ```

    The result of `open()` is reference for modal. You can close the modal anytime using `modalRef.dismiss()`. The `result` is an observable which will emit just once when the modal is closed using `modalRef.resolve()`. It throws an error when modal is dismissed.

## Using in lazy loaded image

When the modal component is defined in lazy loaded image in `entryComponent` you have to pass module's injector when opening the service otherwise NgxComponentModal will see only components declared in it the same module.

```
export class AppComponent {
  constructor(private ngxComponentModal: NgxComponentModalService, injector: Injector) {
    this.ngxComponentModal.open<boolean>(SampleModalComponent, null, null, injector);
  }
}
```
