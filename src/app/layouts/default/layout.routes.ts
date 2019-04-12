import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const LAYOUT_ROUTES: Routes = [

	{
		path: "",
		component: LayoutComponent,
		children: [
			{ path: "", redirectTo: "exam", pathMatch: "full" },
		
      //---------------------------------------------------------->
			//Exam
      //---------------------------------------------------------->
			{
				path: "exam",
				loadChildren: "../../pages/exam/exam.module#ExamModule"
			}
		]
	},

	// 404 Page Not Found
	{ path: "**", redirectTo: "not-found" }
];

export const LayoutRoutes = RouterModule.forChild(LAYOUT_ROUTES);
