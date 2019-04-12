import {
  Component,
  ViewEncapsulation,
  ElementRef,
  OnInit,
  HostBinding,
  Inject
} from "@angular/core";
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// import { Subject } from "rxjs";
// import { Store } from "@ngxs/store";
// import { finalize, takeUntil } from "rxjs/operators";
// import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  encapsulation: ViewEncapsulation.Emulated
})
export class LayoutComponent implements OnInit {
  constructor(
    // @Inject(LOCAL_STORAGE) private localstorage: StorageService,
    // private store: Store
  ) {}

  ngOnInit() {
    
  }

  // ngOnDestroy() {
  //   this.unsubscribeAll.next();
  //   this.unsubscribeAll.complete();
  // }

  /////////////////// Config ///////////////////

  ///////////////// End Config /////////////////
  ///////////////// Variable /////////////////
  // private unsubscribeAll = new Subject();
  public perfectScrollbConfig: PerfectScrollbarConfigInterface = {};
  public isCollapsed = false;
  public isReverseArrow = false;
  public width = 250;
  /////////////// End Variable ////////////////

}
