import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import { Document } from './document';
import {Http, Response, } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class Documentservice implements OnInit {
documents: Document[];
constructor(private http: Http) {
  // this.documents = MOCKDOCUMENTS;
}
  ngOnInit() {
  }
  getDocument(id: string) {
    return this.documents.find((document: Document) => document.id === id);
  }
getDocuments() {
  return this.http.get('https://iliacms-eb3e9.firebaseio.com/documents.json')
    .map(
      (response: Response) => { this.documents = response.json();
      return this.documents; },
    ).catch(
      (error: Response) => {  return Observable.throw('Error occured Please restart the application'); }
    );
}

updateDocument(oldDoc: Document, newDoc: Document) {
   console.log(this.documents.indexOf(oldDoc));
   this.documents[this.documents.indexOf(oldDoc)] = newDoc;
   return this.http.put('https://iliacms-eb3e9.firebaseio.com/documents.json', this.documents)
     .map(
       (response: Response) => { console.log(response.json()); }
     );
}
  addDocument(document: Document) {
    this.documents.push(document);
    return this.http.put('https://iliacms-eb3e9.firebaseio.com/documents.json', this.documents)
      .map(
        (response: Response) => { console.log(response.json()); }
      );
  }
  deleteDocument(document: Document) {
    this.documents.splice(this.documents.indexOf(document), 1);
    return this.http.put('https://iliacms-eb3e9.firebaseio.com/documents.json', this.documents)
      .map(
        (response: Response) => { console.log(response.json()); }
      );
  }
  getSize() {
    return this.documents.length;
  }
  getMaxId() {
    let maxId = 0;
    for (let i = 0; i < this.documents.length; i++) {
      const id_num = parseInt(this.documents[i].id, 10);
      if (id_num > maxId) {
          maxId = id_num;
      }
  }
  return maxId;
  }
}
