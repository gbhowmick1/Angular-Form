import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TempRefVarComponent } from './temp-ref-var/temp-ref-var.component';
import { ExampleDirective } from './example.directive';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ForClassStyleComponent } from './for-class-style/for-class-style.component';
import { AttributeEventBinndingComponent } from './attribute-event-binnding/attribute-event-binnding.component';
import { TempRefVarFormComponent } from './temp-ref-var-form/temp-ref-var-form.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { PracticeComponent } from './practice/practice.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApiConsumeComponent } from './api-consume/api-consume.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TempRefVarComponent,
    ExampleDirective,
    StructuralDirectiveComponent,
    ForClassStyleComponent,
    AttributeEventBinndingComponent,
    TempRefVarFormComponent,
    TwoWayDataBindingComponent,
    PracticeComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    DepartmentDetailsComponent,
    PageNotFoundComponent,
    ApiConsumeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
