import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

interface BroadcastEvent {
  key: any;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class BroadcasterService {
  private _eventBus: Subject<BroadcastEvent>

  constructor() {
    this._eventBus = new Subject<BroadcastEvent>();
  }

  /**
   * Broadcast an event.
   *
   * @param key the key to broadcast the event for. Normally we use a string.
   * @param data the payload to send.
   */
  broadcast(key: any, data?: any): void {
    this._eventBus.next({key, data});
  }

  /**
   * Observe an event.
   *
   * @param key the key to observe the event for.
   * @returns an Observable to which you can subscribe or use any RxJS operator.
   *
   */
  on<T>(key: any): Observable<T> {
    return this._eventBus.asObservable()
      .pipe(
        filter(event => event.key === key),
        map(event => <T>event.data)
      );
  }
}
