import { Component, OnInit } from '@angular/core';
import { Bootcamp } from 'src/app/models/Bootcamp.model';

@Component({
  selector: 'app-list-camps',
  templateUrl: './list-camps.component.html',
})
export class ListCampsComponent implements OnInit {
  public camps: Bootcamp[];
  constructor() {}

  ngOnInit(): void {
    this.camps = [
      {
        location: null,
        careers: ['Killer', 'bee', 'dog', 'hunter'],
        photo: 'stringnull',
        housing: true,
        jobAssistance: true,
        jobGuarantee: true,
        acceptGi: true,
        _id: 'stringnull',
        name: 'stringnull',
        description: 'stringnull',
        user: 'stringnull',
        createdAt: 'stringnull',
        slug: 'stringnull',
        __v: 12,
        id: 'stringnull',
      },
    ];
  }
}
