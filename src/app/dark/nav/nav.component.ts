import { Component, EventEmitter, Output } from '@angular/core';
import { Navbar } from "../data";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ]
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
