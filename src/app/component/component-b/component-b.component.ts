import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BroadcasterService } from '../../services/broadcaster.service';
import { User } from '../../models/user';

import { SubSink } from '../../helpers/subsink';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentBComponent implements OnInit, OnDestroy {
  public user: User;
  private subs = new SubSink();

  constructor(
    private broadcasterService: BroadcasterService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscriptionData();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  subscriptionData(): void {
    this.subs.sink = this.broadcasterService.on('DATA_FROM_COMPONENT_A').subscribe((user: User) => {
      this.user = user;
      this.changeDetectorRef.detectChanges();
    });
  }
}
