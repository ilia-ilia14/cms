import {Component, Input} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-group-item',
  templateUrl: 'group-contact.component.html',
})
export class ContactGroupItemComponent {
  @Input() eachcontact: Contact;
  constructor() {
  }


}
