import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  Selected: Contact;
  constructor() {

  }

  ngOnInit() {
  }

}
