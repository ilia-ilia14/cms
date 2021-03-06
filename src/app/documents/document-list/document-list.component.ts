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
  documents: Document[];
  constructor(private documentService: Documentservice, private router: Router) {
  }

  ngOnInit() {
    this.documentService.getDocuments().subscribe(
      (documents: Document[]) => this.documents = documents );
  }
  getDocuments() {
    return this.documents;
  }
}
