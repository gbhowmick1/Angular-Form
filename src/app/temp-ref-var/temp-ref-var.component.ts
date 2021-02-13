import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref-var',
  templateUrl: './temp-ref-var.component.html',
  styleUrls: ['./temp-ref-var.component.css'],
})
export class TempRefVarComponent implements OnInit {
  public num1 = 0;
  public num2 = 0;
  public sum = 0;
  public sub = 0;
  public mult = 0;
  public divn = 0;

  constructor() {}

  onSubmit(num1Ref, num2Ref) {
    this.num1 = parseInt(num1Ref.value);
    this.num2 = parseInt(num2Ref.value);
    this.sum = this.num1 + this.num2;
    this.sub = this.num1 - this.num2;
    this.mult = this.num1 * this.num2;
    this.divn = this.num1 / this.num2;
  }
  ngOnInit(): void {}
}
