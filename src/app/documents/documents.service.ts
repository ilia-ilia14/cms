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
  return this.http.get('http://localhost:3000/documents')
    .map(
      (response: Response) => { this.documents = response.json();
      return this.documents; },
    ).catch(
      (error: Response) => {  return Observable.throw('Error occured Please restart the application'); }
    );
}

updateDocument(originalDoc: Document, newDoc: Document) {
  if (!originalDoc || !newDoc) { return; }

  const pos = this.documents.indexOf(originalDoc);
  if (pos < 0) { return; }

 const strDocument = JSON.stringify(newDoc);
  this.http.patch('http://localhost:3000/documents/' + originalDoc.id
  , strDocument)
    .map(
      (response: Response) => {
        return response.json();
      }
    ).subscribe(
    (documents: Document[]) => {
      this.documents = documents;
    });
}
  addDocument(document: Document) {
    const body = JSON.stringify(document);
    return this.http.post('http://localhost:3000/documents',
      body)
      .map((response: Response) => {
        const result = response.json();
        const doc = new Document(result.obj.children, result.obj.description, result.obj.id, result.obj.name, result.obj.url);
        this.documents.push(doc);
        return doc;
      })
      .catch((error: Response) => Observable.throw(JSON.stringify(error)));
  }
  deleteDocument(document: Document) {
    return this.http.delete('http://localhost:3000/documents/' + document.id)
      .map((response: Response) => {
        this.documents.splice(this.documents.indexOf(document), 1);
        return response.json();
      })
      .catch((error: Response) => Observable.throw(JSON.stringify(error)));
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
