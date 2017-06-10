
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Documentservice} from '../documents.service';
import {Document } from '../document';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  oldDocument: Document;
  newDocument: Document = null;
  id: string;

  subscription: Subscription; // route subscription
  editMode = false; // in edit mode flag?

  private documentService: any;
  constructor(documentService: Documentservice, private route: ActivatedRoute, private router: Router) {
    this.documentService = documentService;
  }
  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    this.route.queryParams.subscribe();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
    this.route.params.subscribe(
      (params: Params) => {
        this.editMode = params['editMode'];
      }
    );
   this.oldDocument = this.documentService.getDocument(this.id);


  }

  saveServer(f) {
    this.newDocument = new Document(f.value.id, f.value.name, f.value.url);
    if (this.editMode) {
    this.documentService.updateDocument(this.oldDocument, this.newDocument);
      console.log('update');
      }else {
      this.documentService.addDocument(this.newDocument);
      console.log('new');
    }
    this.router.navigate(['/documents']);
  }
}
