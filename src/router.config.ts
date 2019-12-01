import {Routes} from "@angular/router";
import {HomeComponent} from "./app/home/home.component";
import {AboutComponent} from "./app/about/about.component";
import {CoursesComponent} from "./app/courses/courses.component";
import {CourseCardsComponent} from "./app/course-cards/course-cards.component";
import {SideMenuComponent} from "./app/categories-menu/categories-menu.component";
import {CoursesCategoryComponent} from "./app/course-category/course-category.component";
import {AuthGuard} from "./app/auth/auth.guard";
import {LoginComponent} from "./app/auth/login/login.component";


export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        outlet: 'sidemenu',
        component: SideMenuComponent
      },
      {
        path: '',
        outlet: 'sidemenu',
        component: SideMenuComponent,
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: CoursesCategoryComponent,
          },
          {
            path: '**',
            component: CoursesCategoryComponent,
          }
        ]
      },
      {
        path: '',
        component: CourseCardsComponent
      }

    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
