import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
