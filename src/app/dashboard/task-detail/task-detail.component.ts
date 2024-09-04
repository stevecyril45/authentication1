import { Component,EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  @Output()
  CloseDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() currentTask: Task | null = null;;

  OnCloseTaskDetail(){
    this.CloseDetailView.emit(false);
  }
}