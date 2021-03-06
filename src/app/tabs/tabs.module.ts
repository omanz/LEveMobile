import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { InfoPageModule } from '../info/info.module';
import { StudentsPageModule } from '../students/students.module';
import {CoursesPageModule} from '../courses/courses.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    StudentsPageModule,
    InfoPageModule,
    CoursesPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
