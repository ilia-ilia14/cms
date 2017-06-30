import {EventEmitter, OnInit} from '@angular/core';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import { Document } from './document';
import {forEach} from "@angular/router/src/utils/collection";
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
  getSize() {
    return this.documents.length;
  }
  getMaxId() {
    let maxId = 0;
    for (let i = 0; i < this.documents.length; i++) {
      const id_num = parseInt(this.documents[i].id, 10)
      if (id_num > maxId) {
          maxId = id_num;
      }
  }
  return maxId;
    // maxId = 0
    // for each document in the documents list
    // currentId = convert document.id into a number
    // if currentId > maxId then
    // maxId = currentId
    // endIf
    // endFor
    // return max
  }
}
