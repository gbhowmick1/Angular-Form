import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public departments = [
    { name: 'Angular', fees: 12000 },
    { name: 'React', fees: 14000 },
    { name: 'Vue', fees: 15000 },
  ];
  show(d) {
    console.log(d);
    this.router.navigate(['/details', d.name, d.fees]);
  }
}
