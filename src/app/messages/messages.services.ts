import {Component, Injectable, OnInit} from '@angular/core';
import {Message} from './message';
import {MOCKMESSAGES} from './MOCKMESSAGES';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Messagesservice implements OnInit {
  message: Message = null;
  messages: Message[] = [];


  constructor(private http: Http) {
    // this.messages = MOCKMESSAGES;
  }
  ngOnInit() {
    this.addMessage(this.message);
  }
  getMessages() {
    return this.http.get('http://localhost:3000/messages')
      .map(
        (response: Response) => { this.messages = response.json();
          return this.messages; },
      )
      .catch(
        (error: Response) => {  return Observable.throw('Error occured Please restart the application'); }
      );
  }

  addMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/messages',
      body)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(JSON.stringify(error)));
  }
  getMaxId() {
    let maxId = 0;
    for (let i = 0; i < this.messages.length; i++) {
      const id_num = parseInt(this.messages[i].id, 10);
      if (id_num > maxId) {
        maxId = id_num;
      }
    }
    return maxId;
  }

}
