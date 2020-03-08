import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
