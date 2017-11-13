import { Component, Input } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  private STATUS = {
    newTask: 'NEW',
    inWork: 'In work',
    closed: 'Closed',
    canceled: 'Canceled'
  };
  private PRIORITY = {
    low: 'Low',
    middle: 'Middle',
    hight: 'Hight'
  };
  @Input() tasksTable: Task[];

  constructor() {
  }

  checkStatus(status): string {
    if (status === 0) {
      return this.STATUS.newTask;
    } else if (status === 10) {
      return this.STATUS.inWork;
    } else if (status === 20) {
      return this.STATUS.closed;
    }else if (status === 30) {
      return this.STATUS.canceled;
    }
  }

  checkPriority(status): string {
    if (status === 0) {
      return this.PRIORITY.low;
    } else if (status === 10) {
      return this.PRIORITY.middle;
    } else if (status === 20) {
      return this.PRIORITY.hight;
    }
  }

  onDelete(index): void {
    this.tasksTable.splice(index, 1);
  }

}
