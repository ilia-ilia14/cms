import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';
import {Contactservice} from "./contacts.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  constructor(private contactService: Contactservice) {

  }

  ngOnInit() {
    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => { this.selectedContact = contact; }
    );
  }

}
