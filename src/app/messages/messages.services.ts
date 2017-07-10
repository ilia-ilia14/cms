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
    return this.http.get('https://iliacms-eb3e9.firebaseio.com/messages.json')
      .map(
        (response: Response) => { this.messages = response.json();
          return this.messages; },
      )
      .catch(
        (error: Response) => {  return Observable.throw('Error occured Please restart the application'); }
      );
  }

  addMessage(message: Message) {
  const exists = 0;
    this.messages.push(message);
    return this.http.put('https://iliacms-eb3e9.firebaseio.com/messages.json', this.messages)
      .map(
        (response: Response) => { console.log(response.json()); }
      );
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
