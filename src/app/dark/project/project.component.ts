import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { project } from '../data';
import { Location } from '@angular/common';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  projId: any;
  projectItem: any;



  constructor(private AR: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.AR.params.subscribe((res) => {
      this.projId = +res['id']; // Convert the string parameter to a number
      this.projectItem = project.find((item) => item.id === this.projId);
    });
  }

  goBack() {
    this.location.back();
  }





}