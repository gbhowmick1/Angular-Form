import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-consume',
  templateUrl: './api-consume.component.html',
  styleUrls: ['./api-consume.component.css'],
})
export class ApiConsumeComponent implements OnInit {
  public courses: any = []; //empty array
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCourses().subscribe((data) => {
      this.courses = data;
      console.log(this.courses);
    });
  }
}
