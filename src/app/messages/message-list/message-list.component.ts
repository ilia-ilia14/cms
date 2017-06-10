import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {Message} from '../message';
import {NgForm} from '@angular/forms';
import {Messagesservice} from "../messages.services";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})

@Injectable()
export class MessageListComponent implements OnInit {
  messages: Message[] = [];
  constructor( private messageservice:  Messagesservice) { }

  ngOnInit() {
    this.messages = this.messageservice.messages;
  }
}
