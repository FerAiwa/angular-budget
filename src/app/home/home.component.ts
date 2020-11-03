import { Component, OnInit } from '@angular/core';
import { ProjectView } from '../core/model/project-view.interface';
import { Project } from '../core/model/project.interface';
import { Task } from '../core/model/task.interface';
import { TasksView } from '../core/model/tasksView.interface';
import { Transaction } from '../core/model/transaction.interface';
import { DataService } from '../core/services/data.service';
import { LogicService } from '../core/services/logic.service';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projectViews: ProjectView[] = [];
  tasksView?: TasksView;
  loaded = false;
  private projects: Project[];
  private transactions: Transaction[];
  private tasks: Task[];

  private onProjectsLoaded = {
    next: (projectsData: Project[]) => {
      this.projects = projectsData;
      this.dataService.getTransactions$().subscribe(this.onTransactionsLoaded);
    },
  };

  private onTransactionsLoaded = {
    next: (transactionsData: Transaction[]) => {
      this.transactions = transactionsData;
      this.dataService.getTasks$().subscribe(this.onTasksLoaded);
    },
  };

  private onTasksLoaded = {
    next: (tasksData: Task[]) => {
      this.tasks = tasksData;
      this.setDataViews();
    },
  };

  constructor(private dataService: DataService, private logicService: LogicService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.dataService.getProjects$().subscribe(this.onProjectsLoaded);
  }

  private setDataViews(): void {
    this.setProjectViews();
    this.setTasksView();
    this.loaded = true;
  }

  private setProjectViews(): void {
    this.projectViews = this.logicService.composeProjectViews(this.projects, this.transactions);
  }

  private setTasksView(): void {
    this.tasksView = this.logicService.composeTasksView(this.tasks);
  }
}