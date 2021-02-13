import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-event-binnding',
  templateUrl: './attribute-event-binnding.component.html',
  styleUrls: ['./attribute-event-binnding.component.css'],
})
export class AttributeEventBinndingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'MyAngular';
  public imageSource: String = '';
  name = 'John';
  showImg() {
    this.imageSource = '../assets/images/angular_Image.jpg';
  }
  hello() {
    alert('Event Binding Works');
  }
  hideImg() {
    this.imageSource = '';
  }
}
