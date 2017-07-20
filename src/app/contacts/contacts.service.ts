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
    return this.http.get('http://localhost:3000/contacts')
      .map(
        (response: Response) => { return this.contacts = response.json();   }
      )
      .catch(
        (error: Response) => {  return Observable.throw('Error occured Please restart the application'); }
      );
   // return this.contacts.slice();
  }
  addContact(contact: Contact) {
    const body = JSON.stringify(contact);
    return this.http.post('http://localhost:3000/contacts',
      body)
      .map((response: Response) => {
        const cont: Contact = response.json().obj;
        return cont;
      })
      .catch((error: Response) => Observable.throw(JSON.stringify(error)));
  }
  updateContact(oldContact: Contact, newContact: Contact) {
    this.contacts[this.contacts.indexOf(oldContact)] = newContact;
    return this.http.put('https://iliacms-eb3e9.firebaseio.com/contacts.json', this.contacts)
      .map(
        (response: Response) => { console.log(response.json()); }
      );
  }
  deleteContact(contact: Contact) {
    return this.http.delete('http://localhost:3000/contacts/' + contact.id)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(JSON.stringify(error)));
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
