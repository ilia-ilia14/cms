
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
      // this.newDocument = new Document(this.oldDocument.id, f.value.name, f.value.url);
      this.newDocument = new Document(null, f.value.description, this.oldDocument.id, f.value.name, f.value.url);
      this.documentService.updateDocument(this.oldDocument, this.newDocument).subscribe();

      }else {
      const newId = this.documentService.getMaxId() + 1;
      // this.newDocument = new Document(newId, f.value.name, f.value.url);
      this.newDocument = new Document(null, f.value.description, newId.toString(), f.value.name, f.value.url);
      this.documentService.addDocument(this.newDocument).subscribe();
    }
    f.reset();
    this.router.navigate(['/documents']);
  }
  onCancel() {
    this.router.navigate(['/documents']);
  }
}
