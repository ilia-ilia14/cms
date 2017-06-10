import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {Document} from '../document';
import {Documentservice} from "../documents.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})

@Injectable()
export class DocumentListComponent implements OnInit {
  documents: Document[]= [];
  constructor(private documentService: Documentservice, private router: Router) {
    this.documents = documentService.getDocuments();
  }

  ngOnInit() {
    this.getDocuments();
  }
  onSelected(document: Document) {
   this.documentService.documentSelectedEvent.emit(document);
  }
  getDocuments() {
    return this.documents;
  }
  addDocument() {
    this.router.navigate(['/documents', '40', 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'});
  }
}
