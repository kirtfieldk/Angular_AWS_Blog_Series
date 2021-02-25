import { Component, OnInit } from '@angular/core';
import { Bootcamp } from 'src/app/models/Bootcamp.model';
import { BcServiceService } from 'src/app/service/Bc-service/bc-service.service';

@Component({
  selector: 'app-list-camps',
  templateUrl: './list-camps.component.html',
})
export class ListCampsComponent implements OnInit {
  public camps: Bootcamp[];
  constructor(private bcService: BcServiceService) {}

  ngOnInit(): void {
    this.bcService.fetchCamps().subscribe((el: Bootcamp[]) => {
      this.camps = el;
    });
  }
}
