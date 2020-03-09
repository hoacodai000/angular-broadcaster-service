import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BroadcasterService } from '../../services/broadcaster.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentAComponent implements OnInit {
  public user: User = { id: 1, firstName: 'Trung', lastName: 'Vo', role: 'Admin' };
  constructor(private BroadcasterService: BroadcasterService) { }

  ngOnInit(): void {
  }

  sendDataFromComponentA(): void {
    this.BroadcasterService.broadcast('DATA_FROM_COMPONENT_A', this.user);
  }

}
