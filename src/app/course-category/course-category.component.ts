import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CoursesCategoryComponent implements OnInit, OnDestroy {
  private paramSubscription: Subscription;
  private queryparamSubscription: Subscription;
  category: string;
  subCategory: string;

  constructor(route:ActivatedRoute) {

    this.paramSubscription = route.params.subscribe(params => {
       this.category = params['id'];
      console.log('instantiate course category', this.category)
    });

    this.queryparamSubscription= route.queryParamMap.subscribe(queryparams => {
      this.subCategory = queryparams.get('subcategory')
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('destroy course category', this.category);
    this.paramSubscription.unsubscribe();
    this.queryparamSubscription.unsubscribe();
  }

}
