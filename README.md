# Component A
```
sendDataFromComponentA(): void {
  this.BroadcasterService.broadcast('DATA_FROM_COMPONENT_A', this.user);
}
```

# Component B
```
subscriptionData(): void {
  this.broadcasterService.on('DATA_FROM_COMPONENT_A').subscribe((user: User) => {
    this.user = user;
  });
}
```

# Service

```
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

```


# AngularBroadcasterService

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
