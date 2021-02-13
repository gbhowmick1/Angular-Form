import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css'],
})
export class TwoWayDataBindingComponent implements OnInit {
  public name = 'John';
  public age = 22;
  public gender = 'Male';
  constructor() {}

  ngOnInit(): void {}
}
