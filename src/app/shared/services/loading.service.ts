import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _isLoading = new BehaviorSubject<boolean>(false);

  public show() {
    this._isLoading.next(true);
  }

  public hide() {
    this._isLoading.next(false);
  }

  public get isLoading() {
    return this._isLoading;
  }
}
