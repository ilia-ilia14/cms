import {Component, OnInit, EventEmitter, Output, Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Contactservice} from "../contacts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})

@Injectable()
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  filtereContacts = '';


  constructor(private contactService: Contactservice, private route: ActivatedRoute) {
  }

  ngOnInit() {
   // this.contacts = this.contactService.contacts;
    this.contactService.getContacts().subscribe(
      (contacts: Contact[]) => this.contacts = contacts);
  }

  getContacts() {
    return this.contacts;
  }

}
