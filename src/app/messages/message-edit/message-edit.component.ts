import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from '../message';
import {Messagesservice} from '../messages.services';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  newMessage: Message = null;
  constructor( private messageservice:  Messagesservice) { }

  onSubmit(f) {
    this.newMessage = new Message('2', f.value.subject, f.value.message, f.value.sender);
    this.messageservice.addMessage(this.newMessage);
    f.reset();
  }
  ngOnInit() {
  }

}
