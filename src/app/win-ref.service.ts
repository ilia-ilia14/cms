import {OnInit} from '@angular/core';

export class WindowReference implements OnInit {
  ngOnInit() {
  }
  getNative() {
    return window;
  }

}
