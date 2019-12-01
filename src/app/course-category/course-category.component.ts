import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CoursesCategoryComponent implements OnInit, OnDestroy {
  private paramSubscription: Subscription;
  category: string;

  constructor(route:ActivatedRoute) {

    this.paramSubscription = route.params.subscribe(params => {
       this.category = params['id']
      console.log('instantiate course category', this.category)
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('destroy course category', this.category)
    this.paramSubscription.unsubscribe();
  }

}
