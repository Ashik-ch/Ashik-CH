import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { network, project, skill, data, aboutMe } from '../data';
import { ThemeService } from 'src/app/theme.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-mainpart',
  templateUrl: './mainpart.component.html',
  styleUrls: ['./mainpart.component.scss']
})
export class MainpartComponent implements OnInit {


  icons = network;
  project = project
  skill = skill
  data = data;
  aboutMe = aboutMe;

  showProgressBar: any;
  openDiv = 'Home';
  currentTheme: 'dark' | 'light';
  newTheme: 'dark' | 'light';

  constructor(private route: Router, private themeService: ThemeService, private location: Location) {
    this.currentTheme = this.themeService.getCurrentTheme();
    this.newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
  }

  ngOnInit(): void {
    this.previouspage()
  }

  /**
   * @description values of .....
   * @param val 
   */
  showDiv(val: string) {
    this.openDiv = val;
    this.route.navigate([], {
      queryParams: { section: val },
      queryParamsHandling: 'merge'
    })
  }

  /**
   * @description for navigation previous page
   */
  previouspage() {
    this.location.subscribe((event) => {
      const sectionParam = new URLSearchParams(event.url).get('section');
      this.openDiv = sectionParam || '';
    });
  }

  /**
  * @description for Toggle the light-dark mode
  */
  toggleTheme() {
    this.themeService.setTheme(this.newTheme);
    this.currentTheme = this.newTheme;
    this.newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
  }


  contact(val: string) {
    this.openDiv = val;
    this.route.navigate([], {
      queryParams: { section: val },
      queryParamsHandling: 'merge'
    })
  }


}
