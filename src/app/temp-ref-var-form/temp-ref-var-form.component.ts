import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref-var-form',
  templateUrl: './temp-ref-var-form.component.html',
  styleUrls: ['./temp-ref-var-form.component.css'],
})
export class TempRefVarFormComponent implements OnInit {
  public name = '';
  public age = 0;
  public mobile = 0;
  public email = '';
  public address = '';
  public gender = '';
  public city = '';
  constructor() {}

  onSubmit(
    nameRef,
    mobileRef,
    emailRef,
    ageRef,
    addressRef,
    maleRef,
    femaleRef,
    cityRef
  ) {
    this.name = nameRef.value;
    this.mobile = mobileRef.value;
    this.email = emailRef.value;
    this.age = ageRef.value;
    this.address = addressRef.value;
    if (maleRef.checked) {
      this.gender = maleRef.value;
    } else if (femaleRef.checked) {
      this.gender = femaleRef.value;
    }
    this.city = cityRef.value;
  }
  ngOnInit(): void {}
}
