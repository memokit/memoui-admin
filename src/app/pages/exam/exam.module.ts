import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ExamComponent } from "./exam.component";
import { SharedModule } from '../../shared/shared.module';


const ROUTE = [
  { path: "", component: ExamComponent }
];

@NgModule({
  declarations: [ExamComponent],
  imports: [
    SharedModule, 
    RouterModule.forChild(ROUTE)
  ]
})
export class ExamModule {}
