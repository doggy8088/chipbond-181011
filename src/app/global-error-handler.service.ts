import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Pro } from '@ionic/pro';
import { IonicErrorHandler } from 'ionic-angular';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;
  
  constructor(injector: Injector) {
    this.ionicErrorHandler = injector.get(IonicErrorHandler);
  }
  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);

    if (this.ionicErrorHandler) {
      this.ionicErrorHandler.handleError(err);
    }
  }
}
