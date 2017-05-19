import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() selectedValueEvent = new EventEmitter<String>();
  constructor() {

  }
  onSelcted(selectedValue: string) {
  this.selectedValueEvent.emit(selectedValue);
}
  ngOnInit() {
  }

}
