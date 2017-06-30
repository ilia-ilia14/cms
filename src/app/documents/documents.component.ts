import { Component, OnInit } from '@angular/core';
import {Documentservice} from './documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
selectedDocument: Document;
  constructor(private documentService: Documentservice) { }

  ngOnInit() {
  }

}
