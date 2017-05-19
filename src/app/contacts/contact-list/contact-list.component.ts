import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  @Output() selecteEvent = new EventEmitter<Contact>();
  contact: Contact = null;
  contacts: Contact[] = [];
  constructor( ) {
  }

  onSelected(contact: Contact) {
    this.selecteEvent.emit(contact);
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contacts[0] = new Contact('1',
      'Bro. Jackson',
      'jacksonk@byui.edu',
      '208-496-3771',
      'https://web.byui.edu/Directory/Employee/jacksonk.jpg', null );
    this.contacts[1] = new Contact('1',
      'Bro. Barzee',
      'barzeer@byui.edu',
      '208-496-3768',
      'https://web.byui.edu/Directory/Employee/barzeer.jpg', null );
    this.contacts[2] = new Contact('1',
      'Bro. Barzee',
      'barzeer@byui.edu',
      '208-496-3768',
      'https://web.byui.edu/Directory/Employee/barzeer.jpg', null );
    return this.contacts;
  }

}
