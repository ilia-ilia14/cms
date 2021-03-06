import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { HeaderComponent } from './header.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import {Messagesservice} from './messages/messages.services';
import {DropdownDirective} from './dropdown.directive';
import {Contactservice} from './contacts/contacts.service';
import {Documentservice} from './documents/documents.service';
import {RouterModule, Routes} from '@angular/router';
import {DocumentEditComponent} from './documents/document-edit/document-edit.component';
import {MessageNewComponent} from './messages/message-new/message-new.component';
import {HomeComponent} from './home.component';
import {AppRoutingModule} from './app-routing.module';
import {WindowReference} from './win-ref.service';
import {ContactEditComponent} from './contacts/contact-edit/contact-edit.component';
import {ContactGroupItemComponent} from './contacts/group-contact/contact-group-item.component';
import {DndModule} from 'ng2-dnd';
import { ContactsFilterPipe } from './contacts/contacts-filter.pipe';
import { DocumentGroupComponent } from './documents/document-group/document-group.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
    HeaderComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessagesComponent,
    MessageItemComponent,
    MessageEditComponent,
    MessageListComponent,
    DropdownDirective,
    DocumentEditComponent,
    MessageNewComponent,
    HomeComponent,
    ContactEditComponent,
    ContactGroupItemComponent,
    ContactsFilterPipe,
    DocumentGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DndModule.forRoot()
  ],
  providers: [Messagesservice, Contactservice, Documentservice, WindowReference],
  bootstrap: [AppComponent]
})
export class AppModule { }
