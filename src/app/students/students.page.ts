import { Component } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: 'students.page.html',
  styleUrls: ['students.page.scss']
})
export class StudentsPage {
    eleves$: Observable<any>;

    openItem(item) {
    }

    deleteItem(key: string) {
    }
}
