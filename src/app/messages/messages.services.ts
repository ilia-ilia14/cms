import {Component, Injectable, OnInit} from '@angular/core';
import {Message} from './message';

@Injectable()
export class Messagesservice implements OnInit {
  message: Message = null;
  messages: Message[] = [];

  constructor() { }
  ngOnInit() {
    this.getMessages();
    this.addMessage(this.message);
  }

  addMessage(message: Message) {
    console.log(message);
    this.messages.push(message);
  }
  getMessages() {
    this.messages[0] = new Message('1',
      'assignment',
      'when is assignment due?',
      'Ilia');
    this.messages[1] = new Message('2',
      'assignment',
      'It is due 27th',
      'brother Jackson' );
    return this.messages;
  }

}
