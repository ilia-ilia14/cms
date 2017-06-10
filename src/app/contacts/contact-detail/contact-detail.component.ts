import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {Contactservice} from "../contacts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  constructor(private contactService: Contactservice, private router: Router) { }

  ngOnInit() {
  }
  editContact() {
    console.log(this.contact);
    this.router.navigate(['/contacts', this.contact.id, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'});
  }
  deleteContact() {
    this.contactService.deleteContact(this.contact);
    this.router.navigate(['/contacts']);
  }
}

