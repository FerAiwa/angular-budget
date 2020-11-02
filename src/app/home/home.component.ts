import { Component, OnInit } from '@angular/core';
import { ProjectView } from '../core/model/project-view.interface';
import { Project } from '../core/model/project.interface';
import { Task } from '../core/model/task.interface';
import { TasksView } from '../core/model/tasksView.interface';
import { TransactionType } from '../core/model/transaction-type.enum';
import { Transaction } from '../core/model/transaction.interface';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projectViews: ProjectView[] = [];
  tasksViews?: TasksView;
  loaded = false;
  private projects: Project[];
  private transactions: Transaction[];
  private tasks: Task[];

  private onProjectsLoaded = {
    next: projectsData => {
      this.projects = projectsData;
      this.dataService.getTransactions$().subscribe(this.onTransactionsLoaded);
    },
  };

  private onTransactionsLoaded = {
    next: transactionsData => {
      this.transactions = transactionsData;
      this.dataService.getTasks$().subscribe(this.onTasksLoaded);
    },
  };

  private onTasksLoaded = {
    next: tasksData => {
      this.tasks = tasksData;
      this.setDataViews();
    },
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.dataService.getProjects$().subscribe(this.onProjectsLoaded);
  }

  private setDataViews(): void {
    this.setProjectsView();
    this.setTasksView();
    this.loaded = true;
  }

  private setProjectsView(): void {
    this.projectViews = this.projects.map(project => this.getViewFromProject(project));
  }

  private getViewFromProject(project: Project): ProjectView {
    const projectView: ProjectView = { ...project };
    const transactions = this.transactions.filter(transaction => transaction.projectId === projectView.id);
    this.processExpenses(transactions, projectView);
    this.processIncomes(transactions, projectView);
    projectView.profit = projectView.totalIncomes - projectView.totalExpenses;
    projectView.balance = projectView.budget + projectView.profit;
    return projectView;
  }

  private processExpenses(transactions: Transaction[], projectView: ProjectView): void {
    const expenses = transactions.filter(transaction => transaction.type === TransactionType.Expense);
    if (expenses.length > 0) {
      projectView.totalExpenses = expenses
        .map(expense => expense.amount)
        .reduce((accumulator, current) => accumulator + current);
    } else {
      projectView.totalExpenses = 0;
    }
  }

  private processIncomes(transactions: Transaction[], projectView: ProjectView): void {
    const incomes = transactions.filter(transaction => transaction.type === TransactionType.Incoming);
    if (incomes.length > 0) {
      projectView.totalIncomes = incomes
        .map(income => income.amount)
        .reduce((accumulator, current) => accumulator + current);
    } else {
      projectView.totalIncomes = 0;
    }
  }

  private setTasksView(): void {
    this.tasksViews = {
      total: this.tasks.length,
      pending: this.tasks.filter(task => !task.done).length,
    };
  }
}
