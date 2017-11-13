import { Component, Input} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { Task } from '../shared/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  public showModal = false;
  public addTaskFrom: FormGroup;
  public newTask: Task;
  public date = new Date();
  @Input() tasksTable: Task[];

  constructor( private dataService: DataService) {
    this.addTaskFrom = new FormGroup({
      createDate: new FormControl({value: this.date, disabled: true}),
      state: new FormControl('', Validators.required),
      estimate: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl({value: 0, disabled: true}),
    });
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  createTask(): void {
    this.tasksTable.unshift(
      this.newTask = {
        create_date: this.addTaskFrom.controls.createDate.value,
        state: Number(this.addTaskFrom.controls.state.value),
        estimate: this.addTaskFrom.controls.estimate.value,
        title: this.addTaskFrom.controls.title.value,
        description: this.addTaskFrom.controls.description.value,
        priority: Number(this.addTaskFrom.controls.priority.value)
      }
    );
  }

  submit() {
    this.createTask();
    this.closeModal();
    this.dataService.sendData(this.newTask).subscribe();
    this.addTaskFrom.reset();
  }

}
