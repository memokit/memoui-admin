
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutRoutes } from "./layout.routes";
// import { FormsModule } from "@angular/forms";
import { LayoutComponent } from "./layout.component";
// import { NgxsModule } from "@ngxs/store";
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};
@NgModule({
	declarations: [
		LayoutComponent,
		LeftSidebarComponent
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
	],
	imports: [
		NgZorroAntdModule,
		LayoutRoutes,
		PerfectScrollbarModule,
	]
})
export class LayoutModule {}
