import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent
{
  @Input() private icon: string;
  @Input() private label: string;
  @Input() private title: string;
}
