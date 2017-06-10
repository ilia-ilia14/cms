import {Component, Input, OnInit} from '@angular/core';
import {Document} from '../document';
import {Documentservice} from "../documents.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
@Input() document: Document;
  constructor(private documentService: Documentservice, private router: Router) { }

  ngOnInit() {
  }
  editDocument() {
    this.router.navigate(['/documents', this.document.id, 'edit'], {queryParams: {editMode: 1}, fragment: 'loading'});
  }
  onDelete() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/']);
  }
  viewDocument() {
    console.log(document);
  }
}

