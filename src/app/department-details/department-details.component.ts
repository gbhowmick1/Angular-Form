import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent implements OnInit {
  public fees: number;
  public name: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fees = parseFloat(this.route.snapshot.paramMap.get('fees'));
    this.name = this.route.snapshot.paramMap.get('name');
  }
}
