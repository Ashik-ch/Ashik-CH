import { Component, OnInit } from '@angular/core';
import { network } from '../data';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
    standalone: false
})
export class SideBarComponent {

  network = network;

  ngOnInit() {
  }





}


