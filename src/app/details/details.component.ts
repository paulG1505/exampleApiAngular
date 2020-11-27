import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CharacterModel } from '../models/Character';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  constructor(private ser: ApiService, private route: ActivatedRoute) {

  }
  user: CharacterModel;

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.ser.getComment(id).subscribe((data) => {
        this.user = data;
    });
    });
  }
}
