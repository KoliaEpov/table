import { Component, OnInit } from '@angular/core';
import { Task } from './shared/task';
import { DataService } from './data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public tasks: Task[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => this.tasks = data);
  }

}
