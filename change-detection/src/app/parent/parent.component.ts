// import { ChangeDetectionStrategy } from '@angular/compiler';
// import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectionStrategy,Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
@Input() name:any;
@Input() obj:any;
  constructor() { }

  ngOnInit(): void {

  }
 


}
