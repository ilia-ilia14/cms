import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Document} from '../document';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedEvent = new EventEmitter<Document>();
  document: Document;
documents: Document[]= [];
  constructor() { }

  ngOnInit() {
    this.getDocuments();
  }
  onSelected(document: Document) {
    this.selectedEvent.emit(document);
  }
  getDocuments() {
    this.documents[0] = new Document('1',
      'CIT 301',
      'CIT department angular-JS',
      'https://web.byui.edu/Directory/Employee/jacksonk.pdf');
    this.documents[1] = new Document('1',
      'CS 460',
      'CS department Computer networking',
      'https://web.byui.edu/Directory/Employee/jacksonk.pdf');
    this.documents[2] = new Document('1',
      'CS 235',
      'CS Department C++ Data Structures',
      'https://web.byui.edu/Directory/Employee/jacksonk.pdf');
    this.documents[3] = new Document('1',
      'CS 470',
      'CS Department Computer Security',
      'https://web.byui.edu/Directory/Employee/jacksonk.pdf');
    this.documents[2] = new Document('1',
      'CIT 336',
      'CIT Department Web Back-End Development',
      'https://web.byui.edu/Directory/Employee/jacksonk.pdf');
    return this.documents;
  }
}
