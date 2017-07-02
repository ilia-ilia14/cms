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
    return this.contacts.find((contact: Contact) => +contact.id === id);
  }

  deleteContact(contact: Contact) {
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
  updateContact(oldContact: Contact, newContact: Contact) {
    this.contacts[this.contacts.indexOf(oldContact)] = newContact;
  }

  getMaxId() {
    let maxId = 0;
    for (let i = 0; i < this.contacts.length; i++) {
      const id_num = parseInt(this.contacts[i].id, 10)
      if (id_num > maxId) {
        maxId = id_num;
      }
    }
    return maxId;
  }

}
