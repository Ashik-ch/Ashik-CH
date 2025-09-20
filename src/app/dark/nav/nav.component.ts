import { Component, EventEmitter, Output } from '@angular/core';
import { Navbar } from "../data";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: false
})
export class NavComponent {

  @Output() clickValue = new EventEmitter<string>();

  Navbar = Navbar;
  activeTag: string | null = null;


  showdiv(val: string) {
    this.clickValue.emit(val)
    this.activeTag = val;
  }
}
