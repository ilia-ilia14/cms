
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Documentservice} from '../documents.service';
import {Document } from '../document';
import {Subscription} from 'rxjs/Subscription';

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
    this.route.queryParams.subscribe();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if (this.id) {
          this.editMode = true;
          this.oldDocument = this.documentService.getDocument(this.id);

        }
      }
    );
  }

  saveServer(f) {
    // If editmode is true than update the document else push new doc in the array ///
    if (this.editMode) {
      this.newDocument = new Document(this.oldDocument.id, f.value.name, f.value.url);
    this.documentService.updateDocument(this.oldDocument, this.newDocument);

      }else {
      const newId = this.documentService.getMaxId() + 1;
      console.log(newId);
      this.newDocument = new Document(newId, f.value.name, f.value.url);
      this.documentService.addDocument(this.newDocument);
    }
    this.router.navigate(['/documents']);
  }
  onCancel() {
    this.router.navigate(['/documents']);
  }
}
