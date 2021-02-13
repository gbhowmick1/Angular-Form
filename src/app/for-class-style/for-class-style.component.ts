import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-class-style',
  templateUrl: './for-class-style.component.html',
  styleUrls: ['./for-class-style.component.css'],
})
export class ForClassStyleComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  header = ['id', 'name', 'age'];
  users = [
    {
      id: '001',
      name: 'John',
      age: 55,
    },
    {
      id: '002',
      name: 'Fox',
      age: 56,
    },
    {
      id: '003',
      name: 'Rachel',
      age: 53,
    },
    {
      id: '004',
      name: 'Rachel',
      age: 53,
    },
    {
      id: '005',
      name: 'Rachel',
      age: 53,
    },
    {
      id: '006',
      name: 'Rachel',
      age: 53,
    },
  ];
  onSubmit(uid, uname, uage) {
    this.users.push({ id: uid.value, name: uname.value, age: uage.value });
  }
  onDelete(i) {
    this.users.splice(i, 1);
  }
  //returing a configuration object
  classSelect(i) {
    return {
      'alert-danger': i % 2 == 0,
      'alert-success': i % 2 != 0,
    };
  }
}
