import {EventEmitter, OnInit} from '@angular/core';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import { Document } from './document';
export class Documentservice implements OnInit {
documents: Document[] =  [];
documentSelectedEvent = new EventEmitter<Document>();

constructor() {
  this.documents = MOCKDOCUMENTS;
}
  ngOnInit() {

  }
  getDocument(id: string) {

    return this.documents.find((document: Document) => document.id === id);
    // return document;
  }
  deleteDocument(document: Document) {
    console.log(document);
    this.documents.splice(this.documents.indexOf(document), 1);
  }
getDocuments() {
  return this.documents.slice();
}

updateDocument(oldDoc: Document, newDoc: Document) {
   console.log(this.documents.indexOf(oldDoc));
   this.documents[this.documents.indexOf(oldDoc)] = newDoc;
}
  addDocument(document: Document) {
    this.documents.push(document);
  }
}
