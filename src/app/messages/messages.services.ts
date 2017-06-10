import {Component, Injectable, OnInit} from '@angular/core';
import {Message} from './message';
import {MOCKMESSAGES} from "./MOCKMESSAGES";

@Injectable()
export class Messagesservice implements OnInit {
  message: Message = null;
  messages: Message[] = [];


  constructor() {
    this.messages = MOCKMESSAGES;
  }
  ngOnInit() {
    this.getMessages();
    this.addMessage(this.message);
  }

  addMessage(message: Message) {
  const exists = 0;
    this.messages.push(message);
  }
  getMessages() {

  }

}
