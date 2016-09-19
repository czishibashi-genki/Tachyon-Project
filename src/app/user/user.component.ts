import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private routeer: Router
  ) {
   }

  ngOnInit() {
    this.route.params.forEach( (params: Params) => {
        console.log(params);
        this.userId = +params['userId'];
    })
  }

}
