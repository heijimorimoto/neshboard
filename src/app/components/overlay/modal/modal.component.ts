import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent
{
  @Input() private headerTitle: string;
  @Input() private btnLabel: string;
  @Input() private btnIcon: string;
  private display: boolean = false;

  private showDialog()
  {
      this.display = true;
  }
}
