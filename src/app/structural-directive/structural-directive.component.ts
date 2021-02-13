import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css'],
})
export class StructuralDirectiveComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public name = 'John';
  public isName: boolean = false;

  toggle(btn) {
    //console.log(btn.innerHTML);
    if (btn.innerHTML === 'Show') {
      this.isName = true;
      btn.innerHTML = 'Hide';
    } else if (btn.innerHTML === 'Hide') {
      this.isName = false;
      btn.innerHTML = 'Show';
    }
  }
}
