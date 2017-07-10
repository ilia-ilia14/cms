import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Contact} from './contact';
import {MOCKCONTACTS} from './MOCKCONTACTS';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class Contactservice implements OnInit {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>();
  currentContact: Contact;

  constructor(private http: Http) {
    // this.contacts  = MOCKCONTACTS;
  }

  ngOnInit() {
  }




  getContacts() {
    return this.http.get('https://iliacms-eb3e9.firebaseio.com/contacts.json')
      .map(
        (response: Response) => { return this.contacts = response.json();   }
      )
      .catch(
        (error: Response) => {  return Observable.throw('Error occured Please restart the application'); }
      );
   // return this.contacts.slice();
  }
  addContact(contact: Contact) {
    this.contacts.push(contact);
    return this.http.put('https://iliacms-eb3e9.firebaseio.com/contacts.json', this.contacts)
      .map(
        (response: Response) => { console.log(response.json()); }
      );
  }
  updateContact(oldContact: Contact, newContact: Contact) {
    this.contacts[this.contacts.indexOf(oldContact)] = newContact;
    return this.http.put('https://iliacms-eb3e9.firebaseio.com/contacts.json', this.contacts)
      .map(
        (response: Response) => { console.log(response.json()); }
      );
  }
  deleteContact(contact: Contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
    return this.http.put('https://iliacms-eb3e9.firebaseio.com/contacts.json', this.contacts)
      .map(
        (response: Response) => { console.log(response.json()); }
      );
  }

  getContact(id: number) {
    return this.contacts.find((contact: Contact) => +contact.id === id);
  }

  getMaxId() {
    let maxId = 0;
    for (let i = 0; i < this.contacts.length; i++) {
      const id_num = parseInt(this.contacts[i].id, 10);
      if (id_num > maxId) {
        maxId = id_num;
      }
    }
    return maxId;
  }

}
