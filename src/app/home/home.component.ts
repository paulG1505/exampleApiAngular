import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '../models/Character';
import { ApiService } from '../services/api.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public data: ApiService,private router : RouterModule ) { }
  posts: CharacterModel[];

  ngOnInit(): void {
    this.data.getData().subscribe(
      data=>{
        this.posts=data;
      }
    )

  }

}
