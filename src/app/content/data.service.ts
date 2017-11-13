import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './shared/task';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Task[]> {
    return this.http.get('/assets/tasks.json').map(data => {
      return data;
    });
  }

  sendData(data: Task) {
    return this.http.post('', data);
  }

}
