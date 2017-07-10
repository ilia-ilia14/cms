import {Component, OnDestroy, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {Contactservice} from '../contacts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-contact-edit',
  templateUrl: 'contact-edit.component.html',
  styleUrls: ['contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  oldContact: Contact;
  newContact: Contact = null;
  groupContacts: Contact[] = [];
  hasGroup = false;
  editMode = false;
  private invalidGroupContact = false;

  constructor(private contactsService: Contactservice, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    if (id) {
      this.editMode = true;
      this.oldContact = this.contactsService.getContact(id);
      if (this.oldContact.group && this.oldContact.group.length > 0) {
        this.hasGroup = true;
        this.groupContacts = this.oldContact.group;
      }
    }
  }

  saveContact(f) {
    if (this.editMode) {
      this.newContact = new Contact(this.oldContact.id, f.value.name, f.value.email, f.value.phone, f.value.imageUrl, this.groupContacts);
      this.contactsService.updateContact(this.oldContact, this.newContact).subscribe();
      console.log('update');
    }else {
      const newId = this.contactsService.getMaxId() + 1;
      this.newContact = new Contact(newId.toString(), f.value.name, f.value.email, f.value.phone, f.value.imageUrl, this.groupContacts);
      this.contactsService.addContact(this.newContact).subscribe();
      console.log(newId);
      console.log(f.value.name);
    }
    this.router.navigate(['/contacts']);
  }

  onCancel() {
  this.router.navigate(['/contacts']);
  }
isInvalidContact(newContact: Contact) {
    if (!newContact) {return true; }
    if (newContact.id === this.oldContact.id) { return true; }

    for (let i = 0; i < this.groupContacts.length; i++) {
      if (newContact.id === this.groupContacts[i].id) { return true; }
    }
    return false;
}
  addToGroup($event: any) {
    const selectedContact: Contact = $event.dragData;
    this.invalidGroupContact = this.isInvalidContact(selectedContact);
    if (this.invalidGroupContact) {
      return;
    }
    this.groupContacts.push(selectedContact);
    this.invalidGroupContact = false;
  }

  onRemoveItem(id: number) {
    if (id < 0 || id >= this.groupContacts.length) {
      return; }

    this.groupContacts.splice(id, 1);
    this.invalidGroupContact = false;
  }

  ngOnDestroy() {
  }


}
