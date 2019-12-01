import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class SideMenuComponent implements OnInit, OnDestroy {

  private main = ['Development', 'IT & Software', 'Office Productivity', 'Photography', 'Health and Fitness', 'Music']
  private itAndSoftware = ['System Architecture','Solution Architecture', 'Development Methodology', 'Programming Languages']
  private development = ['Azure','TeamCity', 'Java', 'SWL','Javascript']
  categoryMenus: string[];
  private categorySubscription: Subscription;

  constructor(route: ActivatedRoute) {

    const initialValue = route.snapshot.paramMap.get('id');
    console.log("instantiate category menu", initialValue)

      route.paramMap.subscribe(paramMap => {
        console.log('category menu param : ', paramMap.get('id'))
        switch(paramMap.get('id')) {
          case 'it-software':
            this.categoryMenus = this.itAndSoftware;
            break;
          case 'development':
            this.categoryMenus = this.development;
            break;
          default:
            this.categoryMenus = this.main;
            break;
        }
      });

  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    console.log("destroy category menu")
    this.categorySubscription && this.categorySubscription.unsubscribe();
  }
}
