import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DocumentsComponent} from 'app/documents/documents.component';
import {DocumentEditComponent} from './documents/document-edit/document-edit.component';
import {MessagesComponent} from './messages/messages.component';
import {ContactsComponent} from './contacts/contacts.component';
import {DocumentDetailComponent} from './documents/document-detail/document-detail.component';
import {ContactDetailComponent} from './contacts/contact-detail/contact-detail.component';
import {ContactGroupItemComponent} from './contacts/group-contact/contact-group-item.component';
import {ContactEditComponent} from './contacts/contact-edit/contact-edit.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'documents', component: DocumentsComponent, children: [
    {path: 'new', component: DocumentEditComponent},
    {path: ':id', component: DocumentDetailComponent},
    {path: ':id/edit', component: DocumentEditComponent},
    {path: ':id/:id', component: DocumentEditComponent},
  ]},
  {path: 'contacts', component: ContactsComponent, children: [
    {path: 'new', component: ContactEditComponent},
    {path: ':id', component: ContactDetailComponent },
    {path: ':id/edit', component: ContactEditComponent},
  ]},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
