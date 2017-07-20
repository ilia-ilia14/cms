import {Component, Input, OnInit} from '@angular/core';
import {WindowReference} from "../../win-ref.service";
import {Document} from '../document';

@Component({
  selector: 'app-document-group',
  templateUrl: './document-group.component.html',
  styleUrls: ['./document-group.component.css']
})
export class DocumentGroupComponent implements OnInit {
  @Input() groupDocument: Document;
  nativeWindow: any;
  constructor( windowReferenceService: WindowReference) {  this.nativeWindow = windowReferenceService.getNative(); }

  ngOnInit() {

  }
  onGroupeclicked() {
   console.log('clicked');
  }
  viewSubDocument() {
    if (this.groupDocument.url) {
      this.nativeWindow.open(this.groupDocument.url);
    }
  }
}
