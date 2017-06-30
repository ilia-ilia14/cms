import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {Contactservice} from "../contacts.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  constructor(private contactService: Contactservice, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // + converts to a number
    this.route.params.subscribe(
      (params: Params) => {
        this.contact = this.contactService.getContact(+params['id']);
      }
    );
  }
  deleteContact() {
    this.contactService.deleteContact(this.contact);
    this.router.navigate(['/contacts']);
  }
}

