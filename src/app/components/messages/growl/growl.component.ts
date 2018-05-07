import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-growl',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.css']
})
export class GrowlComponent
{
  @Input() life: number;
  private msgs: Message[] = [];

  private showMultiple()
  {
    this.msgs = [];
    this.msgs.push(this.buildMessage('info', 'Message1', 'PrimeNG Rocks'));
    this.msgs.push(this.buildMessage('success', 'Message1', 'PrimeNG Rocks'));
    this.msgs.push(this.buildMessage('warn', 'Message1', 'PrimeNG Rocks'));
    this.msgs.push(this.buildMessage('error', 'Message1', 'PrimeNG Rocks'));
  }

  private buildMessage(type, summary, detail): Message
  {
    return {
      severity  : type,
      summary   : summary,
      detail    : detail
    };
  }
}
