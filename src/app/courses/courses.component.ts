import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {Subscription} from "rxjs";
import {ConfirmService} from "../confirm/confirm.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription;
  urlSegments: string[];

  constructor(private router: Router, private confirmService: ConfirmService) {
  this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe( (event: NavigationEnd) => {
        this.urlSegments = event.url.replace('(','').replace(')','').split('/');
        this.urlSegments = this.urlSegments.filter(segment => segment.length !== 0 && !segment.includes('sidemenu'));
        console.log("event : ", this.urlSegments)
      })
  }

  ngOnInit() {
    this.confirmService.confirmationRequired(true);
  }

  ngOnDestroy() {
    console.log("Destroy CoursesComponent");
    this.routerSubscription.unsubscribe();
  }

  generateUrl(index: number) {
    let url = "/";
    for( let i = 0; i <= index; i++) {
      url = url + this.urlSegments[i] + "/"
    }
    return url;
  }

}
