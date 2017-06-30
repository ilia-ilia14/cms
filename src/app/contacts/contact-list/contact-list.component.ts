import {Component, OnInit, EventEmitter, Output, Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Contactservice} from "../contacts.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})

@Injectable()
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: Contactservice) {
    this.contacts = contactService.getcontacts();
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
