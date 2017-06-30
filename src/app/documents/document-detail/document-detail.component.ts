import {Component, Input, OnInit} from '@angular/core';
import {Document} from '../document';
import {Documentservice} from "../documents.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {WindowReference} from "../../win-ref.service";

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
document: Document;
  nativeWindow: any;
  constructor(private documentService: Documentservice, private router: Router, private route: ActivatedRoute,
  windowReferenceService: WindowReference) {
    this.nativeWindow = windowReferenceService.getNative();
  }

  ngOnInit() {
    this.route.queryParams.subscribe();
    this.route.params.subscribe(
      (params: Params) => {
         const id = params['id'];
         this.document = this.documentService.getDocument(id);
      }
    );
  }
  editDocument() {
   // this.router.navigate(['edit']);
  }
  onDelete() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/']);
  }
  viewDocument() {
   // console.log(document);
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }
}

