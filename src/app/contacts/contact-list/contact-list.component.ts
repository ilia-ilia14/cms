import {Component, OnInit, EventEmitter, Output, Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Contactservice} from "../contacts.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})

@Injectable()
export class ContactListComponent implements OnInit {
  contact: Contact = null;
  contacts: Contact[] = [];

  constructor(private contactService: Contactservice) {
    this.contacts = contactService.getcontacts();
  }

  onSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    return this.contacts;
  }
  newContact() {
    console.log('new contact');
  }

}
