import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {InfoPage} from '../info/info.page';
import {StudentsPage} from '../students/students.page';
import {CoursesPage} from '../courses/courses.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(students:students)',
        pathMatch: 'full',
      },
      {
        path: 'students',
        outlet: 'students',
        component: StudentsPage
      },
      {
        path: 'info',
        outlet: 'info',
        component: InfoPage
      },
      {
        path: 'courses',
        outlet: 'courses',
        component: CoursesPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(students:students)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
