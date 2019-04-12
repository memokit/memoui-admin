import {
	Component,
	OnInit,
	HostListener,
	ViewEncapsulation
} from "@angular/core";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

@Component({
	selector: "left-sidebar",
	templateUrl: "./left-sidebar.component.html",
	styleUrls: ["./left-sidebar.component.scss"],
	encapsulation: ViewEncapsulation.Emulated
})
export class LeftSidebarComponent implements OnInit {
	
	constructor(

	) { }

	ngOnInit() {
	
	}

	/////////////////// Config ///////////////////

	///////////////// End Config /////////////////
	///////////////// Variable /////////////////
	public config: PerfectScrollbarConfigInterface = {};
	
	public scrollbarAutoHide = true
	public scrollbarClass = "mainBar"
	public isCollapsed = false;
	public isReverseArrow = false;
	public width = 250;
	/////////////// End Variable ////////////////

	
	

	@HostListener("window:resize")
	public onWindowResize(): void { }
}
