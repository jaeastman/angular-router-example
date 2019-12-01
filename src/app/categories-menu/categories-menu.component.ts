import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

interface LabeledLink {
  label: string,
  link: string
}

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class SideMenuComponent implements OnInit, OnDestroy {


  private main = [
    {label: 'Development', link: 'development'},
    {label: 'IT & Software', link: 'it-software'},
    {label: 'Office Productivity', link: 'office-productivity'},
    {label: 'Photography', link:'photography'},
    {label: 'Health and Fitness', link: 'health-fitness'},
    {label: 'Music', link: 'music'}];
  private itAndSoftware = [
    {label: 'System Architecture', link:'system-architecture'},
    {label: 'Solution Architecture', link:'solution-architecture'},
    {label: 'Development Methodology', link:'development-methodology'},
    {label: 'Programming Languages', link:'programming-language'}];
  private development = [
    {label: 'Azure', link: 'azure'},
    {label: 'TeamCity', link: 'teamcity'},
    {label: 'Java', link: 'java'},
    {label: 'SWL', link: 'swl'},
    {label: 'Javascript', link: 'javascript'}];

  categoryMenus: LabeledLink[];

  private categorySubscription: Subscription;

  constructor(route: ActivatedRoute) {

    const initialValue = route.snapshot.paramMap.get('id');
    console.log("instantiate category menu", initialValue);

      route.paramMap.subscribe(paramMap => {
        console.log('category menu param : ', paramMap.get('id'));
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
    console.log("destroy category menu");
    this.categorySubscription && this.categorySubscription.unsubscribe();
  }
}
