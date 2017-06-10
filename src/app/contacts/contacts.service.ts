import {EventEmitter, OnInit} from '@angular/core';
import {Contact} from './contact';
import {MOCKCONTACTS} from './MOCKCONTACTS';

export class Contactservice implements OnInit {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>();
  currentContact: Contact;

  constructor(  ) {
     this.contacts  = MOCKCONTACTS;
     this.currentContact = new Contact('25', 'Ilia Sidamonidze', 'simon.ilia.sd@gmail.com',
     '2082585858', '../me.png', null);
  }

  ngOnInit() {
  }

  getContact(id: number) {
    if (id < 0 || id >= this.contacts.length) {
      throw new Error('Array index out of bounds.');
    }
    return this.contacts[id];
  }

  deleteContact(contact: Contact) {
    console.log(contact);
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }
  getcontacts() {
    return this.contacts.slice();
  }
  getcurrentContact() {
    return this.currentContact;
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

}
