import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { log } from 'util';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  title: String = 'Home';

  ngOnInit() {

    // const title = this.route.snapshot.paramMap.get('title');
    // this.title = title;


    this.route.paramMap.subscribe( (params) => {
      console.log(`params : ${JSON.stringify(params)}`);
      this.title = params.get('title');
    });

    // .pipe(switchMap((params: ParamMap) => {
    //   // (+) before `params.get()` turns the string into a number
    //   console.log(`params : ${params}`);

    // }));
  }
}
